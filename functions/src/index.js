import { initializeApp } from "firebase-admin/app";
import { getFirestore, FieldValue } from "firebase-admin/firestore";
import { onCall, HttpsError } from "firebase-functions/v2/https";
import { onSchedule } from "firebase-functions/v2/scheduler";
import { defineSecret } from "firebase-functions/params";
import { logger } from "firebase-functions";
import { flipkart } from "./flipkart.js";
import { syncReports, recomputeWallet, isFirebaseUid } from "./wallet.js";

initializeApp();

const db = getFirestore();
const REGION = "asia-south1";
const MIN_WITHDRAWAL_PAISE = 10000;
const flipkartId = defineSecret("FLIPKART_AFFILIATE_ID");
const flipkartToken = defineSecret("FLIPKART_AFFILIATE_TOKEN");
const flipkartSecrets = [flipkartId, flipkartToken];

function assertAdmin(request) {
  const uid = request.auth && request.auth.uid;
  const hasAdminClaim =
    Boolean(request.auth) && request.auth.token.admin === true;
  const adminUids = (process.env.ADMIN_UIDS || "")
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);

  if (!uid || (!hasAdminClaim && !adminUids.includes(uid))) {
    throw new HttpsError("permission-denied", "Admin access is required.");
  }
}

function requireUser(request) {
  if (!request.auth || !request.auth.uid) {
    throw new HttpsError("unauthenticated", "Sign in to use your wallet.");
  }
  return request.auth.uid;
}

function cleanText(value, maxLength) {
  return String(value || "").trim().slice(0, maxLength);
}

function validateWithdrawal(data) {
  const amountPaise = Math.round(Number(data.amountPaise));
  const method = data.method === "bank" ? "bank" : "upi";
  const upiId = cleanText(data.upiId, 120);
  const accountName = cleanText(data.accountName, 120);
  const accountNumber = cleanText(data.accountNumber, 40).replace(/\s+/g, "");
  const ifsc = cleanText(data.ifsc, 20).toUpperCase();

  if (!Number.isFinite(amountPaise) || amountPaise < MIN_WITHDRAWAL_PAISE) {
    throw new HttpsError(
      "invalid-argument",
      "The minimum withdrawal amount is ₹100."
    );
  }

  if (method === "upi") {
    if (!/^[A-Za-z0-9._-]{2,}@[A-Za-z]{2,}$/.test(upiId)) {
      throw new HttpsError("invalid-argument", "Enter a valid UPI ID.");
    }
  } else {
    if (!accountName || !/^\d{9,18}$/.test(accountNumber)) {
      throw new HttpsError(
        "invalid-argument",
        "Enter a valid account holder name and account number."
      );
    }
    if (!/^[A-Z]{4}0[A-Z0-9]{6}$/.test(ifsc)) {
      throw new HttpsError("invalid-argument", "Enter a valid IFSC code.");
    }
  }

  return {
    amountPaise,
    method,
    upiId: method === "upi" ? upiId : "",
    accountName: method === "bank" ? accountName : "",
    accountNumber: method === "bank" ? accountNumber : "",
    ifsc: method === "bank" ? ifsc : "",
  };
}

export const syncFlipkartReports = onSchedule(
  {
    schedule: "every 6 hours",
    timeZone: "Asia/Kolkata",
    region: REGION,
    secrets: flipkartSecrets,
    timeoutSeconds: 540,
    memory: "512MiB",
  },
  async () => {
    const result = await syncReports();
    logger.info("Flipkart reports synced.", result);
  }
);

export const syncFlipkartOffers = onSchedule(
  {
    schedule: "every 12 hours",
    timeZone: "Asia/Kolkata",
    region: REGION,
    secrets: flipkartSecrets,
    timeoutSeconds: 300,
    memory: "256MiB",
  },
  async () => {
    const [offers, deals] = await Promise.all([
      flipkart.allOffers({ format: "json" }),
      flipkart.dotd({ format: "json" }),
    ]);

    const allOffers = Array.isArray(offers && offers.allOffersList)
      ? offers.allOffersList.slice(0, 120)
      : [];
    const dotd = Array.isArray(deals && deals.dotdList)
      ? deals.dotdList.slice(0, 80)
      : [];

    await db.doc("meta/flipkartOffers").set({
      generatedAt: FieldValue.serverTimestamp(),
      allOffers,
      dotd,
    });

    logger.info("Flipkart offers synced.", {
      offers: allOffers.length,
      dotd: dotd.length,
    });
  }
);

export const flipkartApi = onCall(
  {
    region: REGION,
    secrets: flipkartSecrets,
    timeoutSeconds: 180,
    memory: "512MiB",
  },
  async (request) => {
    assertAdmin(request);

    const data = request.data || {};
    const action = cleanText(data.action, 60);
    const params = data.params || {};
    const handlers = {
      apiDirectory: () => flipkart.apiDirectory(params),
      productFeed: () => flipkart.productFeed(params),
      deltaFeed: () => flipkart.deltaFeed(params),
      topSelling: () => flipkart.topSelling(params),
      booksDirectory: () => flipkart.booksDirectory(params),
      topBooks: () => flipkart.topBooks(params),
      search: () => flipkart.search(params),
      product: () => flipkart.product(params),
      feedDownloadListing: () => flipkart.feedDownloadListing(params),
      downloadFeed: async () => {
        const buffer = await flipkart.downloadFeed(params);
        return {
          base64: buffer.toString("base64"),
          bytes: buffer.length,
        };
      },
      allOffers: () => flipkart.allOffers(params),
      dotd: () => flipkart.dotd(params),
      ordersReport: () => flipkart.ordersReport(params),
      allOrdersReport: () => flipkart.allOrdersReport(params),
      appInstallReport: () => flipkart.appInstallReport(params),
      allAppInstallReport: () => flipkart.allAppInstallReport(params),
    };

    const handler = handlers[action];
    if (!handler) {
      throw new HttpsError(
        "invalid-argument",
        `Unknown action "${action}". Available actions: ${Object.keys(
          handlers
        ).join(", ")}.`
      );
    }

    return {
      action,
      data: await handler(),
    };
  }
);

export const requestWithdrawal = onCall(
  { region: REGION, timeoutSeconds: 60 },
  async (request) => {
    const uid = requireUser(request);
    const withdrawal = validateWithdrawal(request.data || {});
    const userRef = db.doc(`users/${uid}`);
    const withdrawalRef = userRef.collection("withdrawals").doc();
    const refreshed = await recomputeWallet(uid);

    if (!refreshed) {
      throw new HttpsError(
        "failed-precondition",
        "Finish creating your account before withdrawing."
      );
    }

    const wallet = await db.runTransaction(async (transaction) => {
      const snapshot = await transaction.get(userRef);
      if (!snapshot.exists) {
        throw new HttpsError(
          "failed-precondition",
          "Finish creating your account before withdrawing."
        );
      }

      const current = snapshot.get("wallet") || {};
      const availablePaise = Math.max(
        0,
        Number(current.availablePaise) || 0
      );

      if (withdrawal.amountPaise > availablePaise) {
        throw new HttpsError(
          "failed-precondition",
          "That amount is more than your available balance."
        );
      }

      const reservedPaise = Math.max(0, Number(current.reservedPaise) || 0);
      const nextWallet = {
        ...current,
        currency: "INR",
        availablePaise: availablePaise - withdrawal.amountPaise,
        reservedPaise: reservedPaise + withdrawal.amountPaise,
        updatedAt: FieldValue.serverTimestamp(),
      };

      transaction.set(withdrawalRef, {
        amountPaise: withdrawal.amountPaise,
        currency: "INR",
        status: "pending",
        method: withdrawal.method,
        upiId: withdrawal.upiId,
        accountName: withdrawal.accountName,
        accountNumber: withdrawal.accountNumber,
        ifsc: withdrawal.ifsc,
        requestedAt: FieldValue.serverTimestamp(),
        requestedBy: uid,
        note: "",
      });

      transaction.set(userRef, { wallet: nextWallet }, { merge: true });
      return nextWallet;
    });

    logger.info("Withdrawal requested.", {
      uid,
      withdrawalId: withdrawalRef.id,
      amountPaise: withdrawal.amountPaise,
    });

    return { id: withdrawalRef.id, wallet };
  }
);

export const updateWithdrawal = onCall(
  { region: REGION, timeoutSeconds: 60 },
  async (request) => {
    assertAdmin(request);

    const data = request.data || {};
    const userId = cleanText(data.userId, 128);
    const withdrawalId = cleanText(data.withdrawalId, 200);
    const status = cleanText(data.status, 20);
    const note = cleanText(data.note, 500);

    if (!isFirebaseUid(userId) || !withdrawalId) {
      throw new HttpsError(
        "invalid-argument",
        "userId and withdrawalId are required."
      );
    }

    if (!["approved", "paid", "rejected"].includes(status)) {
      throw new HttpsError(
        "invalid-argument",
        "status must be approved, paid, or rejected."
      );
    }

    const withdrawalRef = db.doc(
      `users/${userId}/withdrawals/${withdrawalId}`
    );
    const snapshot = await withdrawalRef.get();
    if (!snapshot.exists) {
      throw new HttpsError("not-found", "Withdrawal request not found.");
    }

    if (snapshot.get("status") === "paid" && status !== "paid") {
      throw new HttpsError(
        "failed-precondition",
        "A paid withdrawal cannot be changed."
      );
    }

    await withdrawalRef.set(
      {
        status,
        note,
        processedAt: FieldValue.serverTimestamp(),
        processedBy: request.auth.uid,
      },
      { merge: true }
    );

    const wallet = await recomputeWallet(userId);
    logger.info("Withdrawal updated.", {
      userId,
      withdrawalId,
      status,
    });

    return { wallet };
  }
);
