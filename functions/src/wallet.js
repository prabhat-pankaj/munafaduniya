import { createHash } from "node:crypto";
import { getFirestore, FieldValue, Timestamp } from "firebase-admin/firestore";
import { flipkart } from "./flipkart.js";

function db() {
  return getFirestore();
}
const DAY_MS = 24 * 60 * 60 * 1000;
const ORDER_STATUSES = ["tentative", "pending", "approved", "cancelled"];
const INSTALL_STATUSES = ["tentative", "approved", "disapproved"];
const DEFAULT_CREDIT_DAYS = 45;
const DEFAULT_USER_SHARE = 0.5;
const DEFAULT_LOOKBACK_DAYS = 120;

function numberEnv(name, fallback) {
  const value = Number(process.env[name]);
  return Number.isFinite(value) ? value : fallback;
}

function userShareRate() {
  return Math.min(Math.max(numberEnv("FLIPKART_USER_SHARE_RATE", DEFAULT_USER_SHARE), 0), 1);
}

function creditDays() {
  return Math.max(
    0,
    Math.round(numberEnv("FLIPKART_CREDIT_DAYS", DEFAULT_CREDIT_DAYS))
  );
}

function lookbackDays() {
  return Math.max(1, Math.round(numberEnv("REPORT_LOOKBACK_DAYS", DEFAULT_LOOKBACK_DAYS)));
}

function toPaise(value) {
  const amount = Number(value);
  return Number.isFinite(amount) ? Math.round(amount * 100) : 0;
}

function dateString(date) {
  return date.toISOString().slice(0, 10);
}

function addDays(date, days) {
  return new Date(date.getTime() + days * DAY_MS);
}

function startOfUtcDay(date) {
  return new Date(
    Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate())
  );
}

function parseOrderDate(value) {
  const text = String(value || "").trim();
  const match = text.match(/^(\d{1,2})-(\d{1,2})-(\d{4})$/);
  if (match) {
    const [, month, day, year] = match;
    return new Date(Date.UTC(Number(year), Number(month) - 1, Number(day), 12));
  }

  const isoMatch = text.match(/^(\d{4})-(\d{2})-(\d{2})/);
  if (isoMatch) {
    const [, year, month, day] = isoMatch;
    return new Date(Date.UTC(Number(year), Number(month) - 1, Number(day), 12));
  }

  return null;
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

function statusLabel(status) {
  if (status === "approved") {
    return "approved";
  }
  if (status === "cancelled") {
    return "cancelled";
  }
  if (status === "disapproved") {
    return "disapproved";
  }
  if (status === "tentative") {
    return "pending";
  }
  return status || "pending";
}

function isFirebaseUid(value) {
  return typeof value === "string" && /^[A-Za-z0-9]{6,128}$/.test(value);
}

function safeDocId(prefix, value) {
  const text = String(value || "");
  const readable = text.replace(/[^A-Za-z0-9_-]/g, "_").slice(0, 100);
  const hash = createHash("sha1").update(text).digest("hex").slice(0, 10);
  return `${prefix}_${readable || "item"}_${hash}`;
}

function timestampFromDate(date) {
  return date ? Timestamp.fromDate(date) : null;
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

function dateChunks(lookback) {
  const end = startOfUtcDay(new Date());
  const start = addDays(end, -lookback);
  const chunks = [];
  let cursor = start;

  while (cursor <= end) {
    const chunkEnd = new Date(
      Math.min(addDays(cursor, 30).getTime(), end.getTime())
    );
    chunks.push({ start: cursor, end: chunkEnd });
    cursor = addDays(chunkEnd, 1);
  }

  return chunks;
}

async function existingDocuments(refs) {
  const map = new Map();
  const unique = [...new Map(refs.map((ref) => [ref.path, ref])).values()];

  for (let index = 0; index < unique.length; index += 300) {
    const chunk = unique.slice(index, index + 300);
    const snapshots = await db().getAll(...chunk);
    for (const snapshot of snapshots) {
      map.set(snapshot.ref.path, snapshot);
    }
  }

  return map;
}

async function commitUpdates(updates) {
  for (let index = 0; index < updates.length; index += 400) {
    const batch = db().batch();
    const chunk = updates.slice(index, index + 400);
    for (const update of chunk) {
      batch.set(update.ref, update.data, { merge: true });
    }
    await batch.commit();
  }
}

async function usersWithWallets() {
  const snapshot = await db()
    .collection("users")
    .select("wallet")
    .get();
  return snapshot.docs
    .filter((doc) => doc.get("wallet.updatedAt"))
    .map((doc) => doc.id);
}

function buildOrderUpdate(order, previous, rate) {
  const status = normalizeStatus(order.status);
  const previousData = previous && previous.exists() ? previous.data() : {};
  const approvedAt =
    status === "approved"
      ? previousData.approvedAt || Timestamp.now()
      : previousData.approvedAt || null;
  const expectedCreditAt =
    status === "approved"
      ? previousData.expectedCreditAt ||
        Timestamp.fromDate(addDays(approvedAt.toDate(), creditDays()))
      : null;

  const commissionPaise = toPaise(
    order.tentativeCommission && order.tentativeCommission.amount
  );
  const shareRate =
    typeof previousData.shareRate === "number"
      ? previousData.shareRate
      : rate;
  const userSharePaise = Math.round(commissionPaise * shareRate);
  const orderDate = parseOrderDate(order.orderDate) || new Date();
  const orderItemId = String(
    order.affiliateOrderItemId || order.orderId || order.productId || ""
  );

  return {
    type: "order",
    orderItemId,
    orderId: String(order.affiliateOrderItemId || ""),
    productId: String(order.productId || ""),
    title: String(order.title || "Flipkart order"),
    category: String(order.category || ""),
    quantity: Math.max(1, Number(order.quantity) || 1),
    pricePaise: toPaise(order.price),
    salesPaise: toPaise(order.sales && order.sales.amount),
    commissionRate: Number(order.commissionRate) || 0,
    commissionPaise,
    shareRate,
    userSharePaise,
    status,
    statusLabel: statusLabel(status),
    orderDate: timestampFromDate(orderDate),
    approvedAt,
    expectedCreditAt,
    salesChannel: String(order.salesChannel || ""),
    customerType: String(order.customerType || ""),
    trackingId: String(order.affExtParam1 || ""),
    source: "flipkart-orders",
    updatedAt: FieldValue.serverTimestamp(),
  };
}

function buildInstallUpdate(install, previous, rate) {
  const status = normalizeStatus(install.status);
  const previousData = previous && previous.exists() ? previous.data() : {};
  const approvedAt =
    status === "approved"
      ? previousData.approvedAt || Timestamp.now()
      : previousData.approvedAt || null;
  const expectedCreditAt =
    status === "approved"
      ? previousData.expectedCreditAt ||
        Timestamp.fromDate(addDays(approvedAt.toDate(), creditDays()))
      : null;

  const installDate =
    parseOrderDate(install.date) || new Date();
  const commissionPaise = toPaise(install.totalCommission);
  const shareRate =
    typeof previousData.shareRate === "number"
      ? previousData.shareRate
      : rate;
  const userSharePaise = Math.round(commissionPaise * shareRate);
  const key = `${install.date || dateString(installDate)}|${install.os || "unknown"}|${
    install.clickType || "unknown"
  }`;

  return {
    type: "app_install",
    orderItemId: key,
    orderId: "",
    productId: "",
    title: String(install.title || "Flipkart app install"),
    category: "app-install",
    quantity: Math.max(1, Number(install.installCount) || 1),
    pricePaise: toPaise(install.commissionPerInstall),
    salesPaise: 0,
    commissionRate: 0,
    commissionPaise,
    shareRate,
    userSharePaise,
    status,
    statusLabel: statusLabel(status),
    orderDate: timestampFromDate(installDate),
    approvedAt,
    expectedCreditAt,
    salesChannel: "APP_INSTALL",
    customerType: "",
    trackingId: String(install.affExtParam1 || ""),
    source: "flipkart-app-installs",
    updatedAt: FieldValue.serverTimestamp(),
  };
}

export async function syncOrders({ lookback = lookbackDays() } = {}) {
  const rate = userShareRate();
  const chunks = dateChunks(lookback);
  const pendingWrites = [];
  const userIds = new Set();
  let orderCount = 0;

  for (const chunk of chunks) {
    const orders = await flipkart.allOrdersReport({
      startDate: dateString(chunk.start),
      endDate: dateString(chunk.end),
      statuses: ORDER_STATUSES,
    });

    orderCount += orders.length;

    const candidates = orders.filter((order) =>
      isFirebaseUid(order.affExtParam1)
    );

    if (candidates.length === 0) {
      continue;
    }

    const refs = candidates.map((order) =>
      db().doc(
        `users/${order.affExtParam1}/earnings/${safeDocId(
          "order",
          order.affiliateOrderItemId || order.orderId || order.productId
        )}`
      )
    );
    const existing = await existingDocuments(refs);

    candidates.forEach((order, index) => {
      userIds.add(order.affExtParam1);
      pendingWrites.push({
        ref: refs[index],
        data: buildOrderUpdate(order, existing.get(refs[index].path), rate),
      });
    });
  }

  await commitUpdates(pendingWrites);
  return { orderCount, userIds, writes: pendingWrites.length };
}

export async function syncAppInstalls({ lookback = 90 } = {}) {
  const rate = userShareRate();
  const end = startOfUtcDay(new Date());
  const start = addDays(end, -Math.min(lookback, 90));
  const installs = await flipkart.allAppInstallReport({
    startDate: dateString(start),
    endDate: dateString(end),
    statuses: INSTALL_STATUSES,
  });

  const candidates = installs.filter((install) =>
    isFirebaseUid(install.affExtParam1)
  );
  const userIds = new Set();
  const pendingWrites = [];

  const refs = candidates.map((install) =>
    db().doc(
      `users/${install.affExtParam1}/earnings/${safeDocId(
        "install",
        `${install.date}|${install.os}|${install.clickType}`
      )}`
    )
  );
  const existing = await existingDocuments(refs);

  candidates.forEach((install, index) => {
    userIds.add(install.affExtParam1);
    pendingWrites.push({
      ref: refs[index],
      data: buildInstallUpdate(
        install,
        existing.get(refs[index].path),
        rate
      ),
    });
  });

  await commitUpdates(pendingWrites);
  return { installCount: installs.length, userIds, writes: pendingWrites.length };
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

export async function syncReports() {
  const orders = await syncOrders();
  const installs = await syncAppInstalls();
  const existingWallets = await usersWithWallets();
  const userIds = new Set([
    ...orders.userIds,
    ...installs.userIds,
    ...existingWallets,
  ]);
  const wallets = [];

  for (const uid of userIds) {
    const wallet = await recomputeWallet(uid);
    if (wallet) {
      wallets.push({ uid, wallet });
    }
  }

  return {
    orders: orders.orderCount,
    appInstalls: installs.installCount,
    users: wallets.length,
    writes: orders.writes + installs.writes,
  };
}

export { isFirebaseUid, normalizeStatus, creditDays, userShareRate };
