import { getFirestore, FieldValue } from "firebase-admin/firestore";

function db() {
  return getFirestore();
}
const DEFAULT_CREDIT_DAYS = 45;
const DEFAULT_USER_SHARE = 0.5;

function numberEnv(name, fallback) {
  const value = Number(process.env[name]);
  return Number.isFinite(value) ? value : fallback;
}

function userShareRate() {
  return Math.min(
    Math.max(numberEnv("CUELINKS_USER_SHARE_RATE", DEFAULT_USER_SHARE), 0),
    1
  );
}

function creditDays() {
  return Math.max(
    0,
    Math.round(numberEnv("CUELINKS_CREDIT_DAYS", DEFAULT_CREDIT_DAYS))
  );
}

function normalizeStatus(raw) {
  const status = String(raw || "").toLowerCase();
  if (status === "failed" || status === "returned" || status === "rejected") {
    return "cancelled";
  }
  if (status === "approved") {
    return "approved";
  }
  if (status === "cancelled" || status === "disapproved") {
    return status;
  }
  if (status === "pending" || status === "tentative") {
    return status;
  }
  return "pending";
}

function isFirebaseUid(value) {
  return typeof value === "string" && /^[A-Za-z0-9]{6,128}$/.test(value);
}

function toMillis(value) {
  if (!value) {
    return 0;
  }
  if (typeof value.toMillis === "function") {
    return value.toMillis();
  }
  if (value instanceof Date) {
    return value.getTime();
  }
  const parsed = new Date(value).getTime();
  return Number.isFinite(parsed) ? parsed : 0;
}

export async function recomputeWallet(uid) {
  if (!isFirebaseUid(uid)) {
    throw new Error("A valid user id is required.");
  }

  const userRef = db().doc(`users/${uid}`);
  const earningsRef = userRef.collection("earnings");
  const withdrawalsRef = userRef.collection("withdrawals");

  return db().runTransaction(async (transaction) => {
    const [userSnapshot, earningsSnapshot, withdrawalsSnapshot] =
      await Promise.all([
        transaction.get(userRef),
        transaction.get(earningsRef),
        transaction.get(withdrawalsRef),
      ]);

    if (!userSnapshot.exists) {
      return null;
    }

    const now = Date.now();
    let pendingPaise = 0;
    let lifetimeEarnedPaise = 0;
    let availableEarnedPaise = 0;

    earningsSnapshot.forEach((snapshot) => {
      const data = snapshot.data();
      const share = Math.max(0, Number(data.userSharePaise) || 0);
      const status = normalizeStatus(data.status);
      const creditAt = toMillis(data.expectedCreditAt);

      if (status === "approved") {
        lifetimeEarnedPaise += share;
        if (creditAt > 0 && creditAt <= now) {
          availableEarnedPaise += share;
        }
      } else if (status === "pending" || status === "tentative") {
        pendingPaise += share;
      }
    });

    let reservedPaise = 0;
    let withdrawnPaise = 0;

    withdrawalsSnapshot.forEach((snapshot) => {
      const data = snapshot.data();
      const amount = Math.max(0, Number(data.amountPaise) || 0);
      if (data.status === "paid") {
        withdrawnPaise += amount;
      } else if (data.status === "pending" || data.status === "approved") {
        reservedPaise += amount;
      }
    });

    const availablePaise = Math.max(
      0,
      availableEarnedPaise - reservedPaise - withdrawnPaise
    );

    const wallet = {
      currency: "INR",
      availablePaise,
      pendingPaise,
      reservedPaise,
      lifetimeEarnedPaise,
      withdrawnPaise,
      creditDays: creditDays(),
      shareRate: userShareRate(),
      updatedAt: FieldValue.serverTimestamp(),
    };

    transaction.set(
      userRef,
      {
        wallet,
        walletUpdatedAt: FieldValue.serverTimestamp(),
      },
      { merge: true }
    );

    return wallet;
  });
}

export { isFirebaseUid, normalizeStatus };
