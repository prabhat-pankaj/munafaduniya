import { createHash } from "node:crypto";
import { getFirestore, FieldValue, Timestamp } from "firebase-admin/firestore";
import { cuelinks } from "./cuelinks.js";
import {
  isFirebaseUid,
  normalizeStatus,
  recomputeWallet,
} from "./wallet.js";

const DAY_MS = 24 * 60 * 60 * 1000;
const DEFAULT_CREDIT_DAYS = 45;
const DEFAULT_USER_SHARE = 0.5;
const DEFAULT_LOOKBACK_DAYS = 120;
const MAX_DATE_CHUNK_DAYS = 30;
const CACHE_LIMIT = 100;

function db() {
  return getFirestore();
}

function numberEnv(name, fallback) {
  const value = Number(process.env[name]);
  return Number.isFinite(value) ? value : fallback;
}

function userShareRate() {
  return Math.min(
    Math.max(
      numberEnv(
        "CUELINKS_USER_SHARE_RATE",
        numberEnv("FLIPKART_USER_SHARE_RATE", DEFAULT_USER_SHARE)
      ),
      0
    ),
    1
  );
}

function creditDays() {
  return Math.max(
    0,
    Math.round(
      numberEnv(
        "CUELINKS_CREDIT_DAYS",
        numberEnv("FLIPKART_CREDIT_DAYS", DEFAULT_CREDIT_DAYS)
      )
    )
  );
}

function lookbackDays() {
  return Math.max(
    1,
    Math.round(numberEnv("CUELINKS_LOOKBACK_DAYS", DEFAULT_LOOKBACK_DAYS))
  );
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

function parseDate(value) {
  const text = String(value || "").trim();
  const match = text.match(/^(\d{4})-(\d{2})-(\d{2})/);
  if (!match) {
    return null;
  }
  const [, year, month, day] = match;
  return new Date(Date.UTC(Number(year), Number(month) - 1, Number(day), 12));
}

function safeDocId(prefix, value) {
  const text = String(value || "");
  const readable = text.replace(/[^A-Za-z0-9_-]/g, "_").slice(0, 100);
  const hash = createHash("sha1").update(text).digest("hex").slice(0, 10);
  return `${prefix}_${readable || "item"}_${hash}`;
}

function mapCuelinksStatus(raw) {
  const status = String(raw || "").toLowerCase();
  if (status === "rejected" || status === "cancelled" || status === "failed") {
    return "cancelled";
  }
  if (status === "pending") {
    return "pending";
  }
  if (
    status === "validated" ||
    status === "payable" ||
    status === "invoice_raised" ||
    status === "paid"
  ) {
    return "approved";
  }
  return normalizeStatus(status);
}

function dateChunks(lookback) {
  const end = startOfUtcDay(new Date());
  const start = addDays(end, -lookback);
  const chunks = [];
  let cursor = start;

  while (cursor <= end) {
    const chunkEnd = new Date(
      Math.min(addDays(cursor, MAX_DATE_CHUNK_DAYS).getTime(), end.getTime())
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

function buildTransactionUpdate(transaction, previous, rate) {
  const status = mapCuelinksStatus(transaction.status);
  const previousData = previous && previous.exists() ? previous.data() : {};
  const approvedAt =
    status === "approved"
      ? previousData.approvedAt || Timestamp.now()
      : previousData.approvedAt || null;
  const expectedCreditAt =
    status === "approved"
      ? previousData.expectedCreditAt ||
        (String(transaction.status).toLowerCase() === "paid"
          ? Timestamp.now()
          : Timestamp.fromDate(addDays(approvedAt.toDate(), creditDays())))
      : null;

  const orderDate = parseDate(transaction.transaction_date) || new Date();
  const commissionPaise = toPaise(transaction.user_commission);
  const shareRate =
    typeof previousData.shareRate === "number"
      ? previousData.shareRate
      : rate;
  const userSharePaise = Math.round(commissionPaise * shareRate);
  const orderId = String(
    transaction.order_id || transaction.merchant_reference_id || ""
  );

  return {
    type: "cuelinks_transaction",
    orderItemId: String(transaction.id),
    transactionId: String(transaction.id),
    orderId,
    merchantReferenceId: String(transaction.merchant_reference_id || ""),
    productId: "",
    title: String(
      transaction.product_name ||
        `${transaction.campaign_name || "Cuelinks"} order`
    ),
    category: String(transaction.category || ""),
    quantity: 1,
    pricePaise: toPaise(transaction.sale_amount),
    salesPaise: toPaise(transaction.sale_amount),
    commissionRate: 0,
    commissionPaise,
    shareRate,
    userSharePaise,
    status,
    statusLabel: String(transaction.status || "pending"),
    orderDate: Timestamp.fromDate(orderDate),
    approvedAt,
    expectedCreditAt,
    salesChannel: String(transaction.channel_name || ""),
    customerType: "",
    trackingId: String(transaction.sub_id || ""),
    source: "cuelinks-transactions",
    campaignId: Number(transaction.campaign_id) || null,
    campaignName: String(transaction.campaign_name || ""),
    campaignType: String(transaction.campaign_type || ""),
    currency: String(transaction.currency || "INR"),
    invoiceNumber: transaction.invoice_number
      ? String(transaction.invoice_number)
      : "",
    subId2: transaction.sub_id_2 ? String(transaction.sub_id_2) : "",
    subId3: transaction.sub_id_3 ? String(transaction.sub_id_3) : "",
    updatedAt: FieldValue.serverTimestamp(),
  };
}

function buildCpcUpdate(click, previous, rate) {
  const status = mapCuelinksStatus(click.status);
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

  const clickDate = parseDate(click.click_date) || new Date();
  const commissionPaise = toPaise(click.user_commission);
  const shareRate =
    typeof previousData.shareRate === "number"
      ? previousData.shareRate
      : rate;
  const userSharePaise = Math.round(commissionPaise * shareRate);

  return {
    type: "cuelinks_cpc_click",
    orderItemId: String(click.id),
    transactionId: click.transaction_id
      ? String(click.transaction_id)
      : "",
    orderId: "",
    merchantReferenceId: String(click.click_log_uid || ""),
    productId: "",
    title: `${click.campaign_name || "Cuelinks"} CPC click`,
    category: "cpc",
    quantity: 1,
    pricePaise: toPaise(click.sale_amount),
    salesPaise: toPaise(click.sale_amount),
    commissionRate: 0,
    commissionPaise,
    shareRate,
    userSharePaise,
    status,
    statusLabel: String(click.status || "pending"),
    orderDate: Timestamp.fromDate(clickDate),
    approvedAt,
    expectedCreditAt,
    salesChannel: "CPC",
    customerType: "",
    trackingId: String(click.sub_id || ""),
    source: "cuelinks-cpc-clicks",
    campaignId: Number(click.campaign_id) || null,
    campaignName: String(click.campaign_name || ""),
    campaignType: "CPC",
    currency: String(click.currency || "INR"),
    invoiceNumber: "",
    subId2: click.sub_id_2 ? String(click.sub_id_2) : "",
    subId3: click.sub_id_3 ? String(click.sub_id_3) : "",
    updatedAt: FieldValue.serverTimestamp(),
  };
}

function uniqueTransactions(transactions) {
  const map = new Map();
  for (const transaction of transactions) {
    if (!transaction || transaction.id === undefined) {
      continue;
    }
    map.set(String(transaction.id), transaction);
  }
  return [...map.values()];
}

export async function syncCuelinksTransactions({
  lookback = lookbackDays(),
  updatedSince,
} = {}) {
  const rate = userShareRate();
  let transactions = [];
  let newestUpdate = updatedSince || "";

  if (updatedSince) {
    transactions = await cuelinks.getAllTransactions({
      updated_since: updatedSince,
    });
  } else {
    for (const chunk of dateChunks(lookback)) {
      const rows = await cuelinks.getAllTransactions({
        start_date: dateString(chunk.start),
        end_date: dateString(chunk.end),
      });
      transactions.push(...rows);
    }
    transactions = uniqueTransactions(transactions);
  }

  const candidates = transactions.filter((transaction) => {
    if (!isFirebaseUid(transaction.sub_id)) {
      return false;
    }
    const updated = String(transaction.updated_at || "");
    if (updated && updated > newestUpdate) {
      newestUpdate = updated;
    }
    return true;
  });

  const refs = candidates.map((transaction) =>
    db().doc(
      `users/${transaction.sub_id}/earnings/${safeDocId(
        "cuelinks_txn",
        transaction.id
      )}`
    )
  );
  const existing = await existingDocuments(refs);
  const userIds = new Set();
  const updates = [];

  candidates.forEach((transaction, index) => {
    userIds.add(transaction.sub_id);
    updates.push({
      ref: refs[index],
      data: buildTransactionUpdate(
        transaction,
        existing.get(refs[index].path),
        rate
      ),
    });
  });

  await commitUpdates(updates);
  await db().doc("meta/cuelinksSync").set(
    {
      lastTransactionSyncAt: FieldValue.serverTimestamp(),
      lastTransactionUpdatedSince: newestUpdate || null,
      lastTransactionCount: transactions.length,
      lastMatchedTransactionCount: candidates.length,
    },
    { merge: true }
  );

  return {
    transactionCount: transactions.length,
    matchedCount: candidates.length,
    userIds,
    writes: updates.length,
    newestUpdate,
  };
}

export async function syncCuelinksCpcClicks({ days = 7 } = {}) {
  const rate = userShareRate();
  const end = startOfUtcDay(new Date());
  const start = addDays(end, -Math.max(0, days));
  const clicks = [];

  for (
    let cursor = start;
    cursor <= end;
    cursor = addDays(cursor, 1)
  ) {
    const rows = await cuelinks.getAllCpcClicks({
      date: dateString(cursor),
    });
    clicks.push(...rows);
  }

  const candidates = clicks.filter((click) =>
    isFirebaseUid(click.sub_id)
  );
  const refs = candidates.map((click) =>
    db().doc(
      `users/${click.sub_id}/earnings/${safeDocId(
        "cuelinks_cpc",
        click.id
      )}`
    )
  );
  const existing = await existingDocuments(refs);
  const userIds = new Set();
  const updates = [];

  candidates.forEach((click, index) => {
    userIds.add(click.sub_id);
    updates.push({
      ref: refs[index],
      data: buildCpcUpdate(click, existing.get(refs[index].path), rate),
    });
  });

  await commitUpdates(updates);
  await db().doc("meta/cuelinksSync").set(
    {
      lastCpcSyncAt: FieldValue.serverTimestamp(),
      lastCpcCount: clicks.length,
      lastMatchedCpcCount: candidates.length,
    },
    { merge: true }
  );

  return {
    clickCount: clicks.length,
    matchedCount: candidates.length,
    userIds,
    writes: updates.length,
  };
}

export async function syncCuelinksReports() {
  const transactions = await syncCuelinksTransactions();
  let clicks = {
    clickCount: 0,
    matchedCount: 0,
    userIds: new Set(),
    writes: 0,
  };

  try {
    clicks = await syncCuelinksCpcClicks();
  } catch (error) {
    console.warn("Cuelinks CPC click sync failed.", error.message);
  }

  const userIds = new Set([
    ...transactions.userIds,
    ...clicks.userIds,
  ]);
  const wallets = [];

  for (const uid of userIds) {
    const wallet = await recomputeWallet(uid);
    if (wallet) {
      wallets.push({ uid, wallet });
    }
  }

  return {
    transactions: transactions.transactionCount,
    matchedTransactions: transactions.matchedCount,
    cpcClicks: clicks.clickCount,
    matchedCpcClicks: clicks.matchedCount,
    users: wallets.length,
    writes: transactions.writes + clicks.writes,
  };
}

export async function syncCuelinksCache() {
  const now = new Date();
  const start30 = dateString(addDays(now, -30));
  const endYesterday = dateString(addDays(now, -1));
  const start90 = dateString(addDays(now, -90));
  const errors = {};

  async function attempt(name, task) {
    try {
      return await task();
    } catch (error) {
      errors[name] = error.message;
      return null;
    }
  }

  const [ping, countries, categories] = await Promise.all([
    attempt("ping", () => cuelinks.ping()),
    attempt("countries", () => cuelinks.listCountries()),
    attempt("categories", () => cuelinks.listCategories()),
  ]);

  const [campaigns, offers, channels] = await Promise.all([
    attempt("campaigns", () =>
      cuelinks.getAllCampaigns({}, { perPage: 100, maxPages: 1 })
    ),
    attempt("offers", () =>
      cuelinks.getAllOffers({}, { perPage: 100, maxPages: 1 })
    ),
    attempt("channels", () =>
      cuelinks.getAllChannels({}, { perPage: 100, maxPages: 1 })
    ),
  ]);

  const [performance, campaignReport, earnings, unmonetized] =
    await Promise.all([
      attempt("performance", () =>
        cuelinks.performanceReport({
          start_date: start30,
          end_date: endYesterday,
          per_page: 100,
        })
      ),
      attempt("campaignReport", () =>
        cuelinks.campaignsReport({
          start_date: start30,
          end_date: endYesterday,
          per_page: 100,
        })
      ),
      attempt("earnings", () =>
        cuelinks.earningsReport({
          start_date: start90,
          end_date: endYesterday,
          per_page: 100,
        })
      ),
      attempt("unmonetized", () =>
        cuelinks.unmonetizedTrafficReport({
          start_date: start30,
          end_date: endYesterday,
          per_page: 100,
        })
      ),
    ]);

  const [invoices, missingTransactions] = await Promise.all([
    attempt("invoices", () =>
      cuelinks.getAllInvoices({}, { perPage: 100, maxPages: 1 })
    ),
    attempt("missingTransactions", () =>
      cuelinks.getAllMissingTransactions(
        { start_date: start90, end_date: endYesterday },
        { perPage: 100, maxPages: 1 }
      )
    ),
  ]);

  const reference = {
    generatedAt: FieldValue.serverTimestamp(),
    ping,
    countries: (countries && countries.data) || [],
    categories: (categories && categories.data) || [],
    errors,
  };

  const writes = [
    db().doc("meta/cuelinksReference").set(reference, { merge: true }),
    db().doc("meta/cuelinksCampaigns").set(
      {
        generatedAt: FieldValue.serverTimestamp(),
        campaigns: (campaigns || []).slice(0, CACHE_LIMIT),
        total: (campaigns || []).length,
      },
      { merge: true }
    ),
    db().doc("meta/cuelinksOffers").set(
      {
        generatedAt: FieldValue.serverTimestamp(),
        offers: (offers || []).slice(0, CACHE_LIMIT),
        total: (offers || []).length,
      },
      { merge: true }
    ),
    db().doc("meta/cuelinksChannels").set(
      {
        generatedAt: FieldValue.serverTimestamp(),
        channels: (channels || []).slice(0, CACHE_LIMIT),
        total: (channels || []).length,
      },
      { merge: true }
    ),
    db().doc("meta/cuelinksReports").set(
      {
        generatedAt: FieldValue.serverTimestamp(),
        performance,
        campaignReport,
        earnings,
        unmonetized,
      },
      { merge: true }
    ),
    db().doc("meta/cuelinksInvoices").set(
      {
        generatedAt: FieldValue.serverTimestamp(),
        invoices: (invoices || []).slice(0, CACHE_LIMIT),
        total: (invoices || []).length,
      },
      { merge: true }
    ),
    db().doc("meta/cuelinksMissingTransactions").set(
      {
        generatedAt: FieldValue.serverTimestamp(),
        missingTransactions: (missingTransactions || []).slice(0, CACHE_LIMIT),
        total: (missingTransactions || []).length,
      },
      { merge: true }
    ),
  ];

  await Promise.all(writes);

  return {
    campaigns: (campaigns || []).length,
    offers: (offers || []).length,
    channels: (channels || []).length,
    invoices: (invoices || []).length,
    missingTransactions: (missingTransactions || []).length,
    errors,
  };
}

export async function recordCuelinksTransactionEvent(event) {
  const uid =
    event.sub_id || event.aff_sub || event.subid || event.sub_id_1 || "";
  if (!isFirebaseUid(uid)) {
    return { matched: false };
  }

  const transaction = {
    id:
      event.transaction_id ||
      event.txn_id ||
      event.id ||
      `${uid}_${event.transaction_reference_id || event.order_id || ""}_${
        event.transaction_date || dateString(new Date())
      }`,
    campaign_id: event.campaign_id || null,
    campaign_name: event.campaign_name || event.campaign || "",
    campaign_type: event.campaign_type || "CPS",
    transaction_date:
      event.transaction_date ||
      event.transaction_timestamp ||
      dateString(new Date()),
    status: event.status || "pending",
    sale_amount: event.sale_amount || event.amount || 0,
    currency: event.currency || "INR",
    user_commission: event.user_commission || event.commission || 0,
    merchant_reference_id:
      event.transaction_reference_id || event.merchant_reference_id || "",
    order_id: event.order_id || event.transaction_reference_id || "",
    product_name: event.product_name || "",
    category: event.category || "",
    channel_name: event.channel_name || "",
    sub_id: uid,
    sub_id_2: event.sub_id_2 || event.subid2 || "",
    sub_id_3: event.sub_id_3 || event.subid3 || "",
    updated_at: event.updated_at || new Date().toISOString(),
  };

  const ref = db().doc(
    `users/${uid}/earnings/${safeDocId("cuelinks_txn", transaction.id)}`
  );
  const snapshot = await ref.get();
  const rate = userShareRate();

  await ref.set(
    buildTransactionUpdate(transaction, snapshot, rate),
    { merge: true }
  );
  const wallet = await recomputeWallet(uid);

  return { matched: true, uid, transactionId: transaction.id, wallet };
}

export async function recordCuelinksCampaignEvent(event) {
  await db().collection("cuelinksCampaignEvents").add({
    ...event,
    receivedAt: FieldValue.serverTimestamp(),
  });
  return { stored: true };
}

export { mapCuelinksStatus, userShareRate, creditDays };
