import { setTimeout as sleep } from "node:timers/promises";

const API_BASE = "https://affiliate-api.flipkart.net";
const FORMATS = new Set(["json", "xml"]);
const ORDER_STATUSES = ["tentative", "pending", "approved", "cancelled"];
const INSTALL_STATUSES = ["tentative", "approved", "disapproved"];
const MAX_PAGE_SIZE = 500;
const MIN_REQUEST_GAP_MS = 55;

let requestChain = Promise.resolve();
let lastRequestAt = 0;

function credentials() {
  const affiliateId = process.env.FLIPKART_AFFILIATE_ID;
  const affiliateToken = process.env.FLIPKART_AFFILIATE_TOKEN;

  if (!affiliateId || !affiliateToken) {
    throw new Error(
      "Missing FLIPKART_AFFILIATE_ID or FLIPKART_AFFILIATE_TOKEN."
    );
  }

  return { affiliateId, affiliateToken };
}

function assertFormat(format) {
  if (!FORMATS.has(format)) {
    throw new Error(`Unsupported format "${format}". Use "json" or "xml".`);
  }
  return format;
}

function buildUrl(path, query) {
  const url = new URL(path.startsWith("http") ? path : API_BASE + path);
  if (query) {
    for (const [key, value] of Object.entries(query)) {
      if (value !== undefined && value !== null && value !== "") {
        url.searchParams.set(key, String(value));
      }
    }
  }
  return url;
}

function enqueue(task) {
  const run = requestChain.then(async () => {
    const wait = Math.max(
      0,
      MIN_REQUEST_GAP_MS - (Date.now() - lastRequestAt)
    );
    if (wait > 0) {
      await sleep(wait);
    }
    lastRequestAt = Date.now();
    return task();
  });

  requestChain = run.then(
    () => undefined,
    () => undefined
  );

  return run;
}

async function executeRequest(url, { binary = false } = {}) {
  const { affiliateId, affiliateToken } = credentials();
  let lastError = null;

  for (let attempt = 1; attempt <= 3; attempt += 1) {
    try {
      const response = await fetch(url, {
        headers: {
          Accept: binary ? "*/*" : "application/json, text/xml;q=0.9, */*;q=0.8",
          "Fk-Affiliate-Id": affiliateId,
          "Fk-Affiliate-Token": affiliateToken,
          "User-Agent": "munafaduniya-wallet/1.0",
        },
        signal: AbortSignal.timeout(45000),
      });

      if (!response.ok) {
        const body = await response.text().catch(() => "");
        const error = new Error(
          `Flipkart API ${response.status} for ${url.pathname}${
            body ? `: ${body.slice(0, 180)}` : ""
          }`
        );
        error.status = response.status;
        throw error;
      }

      if (binary) {
        return Buffer.from(await response.arrayBuffer());
      }

      const contentType = response.headers.get("content-type") || "";
      if (contentType.includes("xml")) {
        return response.text();
      }

      const text = await response.text();
      if (!text) {
        return null;
      }

      try {
        return JSON.parse(text);
      } catch (error) {
        return text;
      }
    } catch (error) {
      lastError = error;
      const status = error.status || 0;
      const retryable =
        status === 0 ||
        status === 429 ||
        status === 500 ||
        status === 502 ||
        status === 503 ||
        status === 504 ||
        status === 599;

      if (!retryable || attempt === 3) {
        throw error;
      }

      await sleep(750 * attempt);
    }
  }

  throw lastError;
}

function request(path, { query, format = "json", binary = false } = {}) {
  assertFormat(format);
  const url = buildUrl(path, query);
  return enqueue(() => executeRequest(url, { binary }));
}

function variantFor(entry, version) {
  const variants = entry && entry.availableVariants;
  if (!variants) {
    return entry || null;
  }

  const keys = [version, version ? `v${version}` : null];
  for (const key of keys) {
    if (key && variants[key]) {
      return variants[key];
    }
  }

  return (
    variants["v1.1.0"] ||
    variants["v0.1.0"] ||
    Object.values(variants)[0] ||
    null
  );
}

function findListing(directory, category) {
  const affiliate = (directory && directory.apiGroups && directory.apiGroups.affiliate) || null;
  const listings =
    (affiliate && affiliate.apiListings) ||
    (directory && directory.apiListings) ||
    null;

  if (!listings) {
    throw new Error("The API directory response did not include apiListings.");
  }

  if (listings[category]) {
    return listings[category];
  }

  const match = Object.entries(listings).find(([key, entry]) => {
    return (
      key === category ||
      (entry && entry.resourceName === category) ||
      (entry && entry.apiName === category)
    );
  });

  if (!match) {
    throw new Error(`Unknown Flipkart category "${category}".`);
  }

  return match[1];
}

function withInStock(rawUrl, inStock) {
  if (!inStock) {
    return rawUrl;
  }

  const url = new URL(rawUrl);
  url.searchParams.set("inStock", "true");
  return url.toString();
}

function withFromVersion(rawUrl, fromVersion) {
  if (!fromVersion) {
    return rawUrl;
  }

  const url = new URL(rawUrl);
  url.pathname = url.pathname.replace(
    /\.(json|xml)$/,
    `/fromVersion/${encodeURIComponent(String(fromVersion))}.$1`
  );
  return url.toString();
}

function normalizeReportData(value) {
  if (value && Array.isArray(value.orderList)) {
    return value;
  }
  if (value && Array.isArray(value.appInstalls)) {
    return value;
  }
  return value;
}

export async function apiDirectory({ format = "json" } = {}) {
  assertFormat(format);
  const { affiliateId } = credentials();
  return request(`/affiliate/api/${encodeURIComponent(affiliateId)}.${format}`, {
    format,
  });
}

export async function productFeed({
  category,
  version = "1.1.0",
  inStock = false,
  format = "json",
  absoluteUrl,
} = {}) {
  assertFormat(format);
  if (absoluteUrl) {
    return enqueue(() =>
      executeRequest(buildUrl(withInStock(absoluteUrl, inStock)))
    );
  }
  if (format === "xml") {
    throw new Error(
      "XML category feeds need the signed XML URL from the XML API directory. Pass absoluteUrl instead."
    );
  }
  if (!category) {
    throw new Error("category is required.");
  }

  const directory = await apiDirectory({ format: "json" });
  const entry = findListing(directory, category);
  const variant = variantFor(entry, version);
  const feedUrl = variant && (variant.get || variant.deltaGet);

  if (!feedUrl) {
    throw new Error(`No product feed URL found for category "${category}".`);
  }

  const response = await enqueue(() =>
    executeRequest(buildUrl(withInStock(feedUrl, inStock)))
  );
  return response;
}

export async function deltaFeed({
  category,
  fromVersion,
  version = "1.1.0",
  inStock = false,
} = {}) {
  if (!category) {
    throw new Error("category is required.");
  }

  const directory = await apiDirectory({ format: "json" });
  const entry = findListing(directory, category);
  const variant = variantFor(entry, version);
  const feedUrl = variant && variant.deltaGet;

  if (!feedUrl) {
    throw new Error(`No delta feed URL found for category "${category}".`);
  }

  const response = await enqueue(() =>
    executeRequest(
      buildUrl(withInStock(withFromVersion(feedUrl, fromVersion), inStock))
    )
  );
  return response;
}

export async function topSelling({
  category,
  version = "1.1.0",
  inStock = false,
} = {}) {
  if (!category) {
    throw new Error("category is required.");
  }

  const directory = await apiDirectory({ format: "json" });
  const entry = findListing(directory, category);
  const variant = variantFor(entry, version);
  const feedUrl = variant && variant.top;

  if (!feedUrl) {
    throw new Error(`No top-selling URL found for category "${category}".`);
  }

  const response = await enqueue(() =>
    executeRequest(buildUrl(withInStock(feedUrl, inStock)))
  );
  return response;
}

export async function booksDirectory({ format = "json" } = {}) {
  assertFormat(format);
  const { affiliateId } = credentials();
  return request(
    `/affiliate/1.0/booksApi/${encodeURIComponent(affiliateId)}.${format}`,
    { format }
  );
}

function findBooksCategory(node, name) {
  if (!node || typeof node !== "object") {
    return null;
  }
  if (node.name === name || node.category === name || node.id === name) {
    return node;
  }
  const nested = node.booksCategory
    ? findBooksCategory(node.booksCategory, name)
    : null;
  if (nested) {
    return nested;
  }
  const children = Array.isArray(node.subCategories) ? node.subCategories : [];
  for (const child of children) {
    const match = findBooksCategory(child, name);
    if (match) {
      return match;
    }
  }
  return null;
}

export async function topBooks({
  category,
  url,
  expiresAt,
  sig,
  format = "json",
} = {}) {
  assertFormat(format);
  let feedUrl = url;

  if (!feedUrl && category) {
    const directory = await booksDirectory({ format: "json" });
    const match = findBooksCategory(directory, category);
    feedUrl = match && match.url;
  }

  if (!feedUrl && category && expiresAt && sig) {
    const { affiliateId } = credentials();
    feedUrl =
      `${API_BASE}/affiliate/1.0/booksFeeds/${encodeURIComponent(
        affiliateId
      )}/category/${encodeURIComponent(category)}.${format}` +
      `?expiresAt=${encodeURIComponent(expiresAt)}&sig=${encodeURIComponent(sig)}`;
  }

  if (!feedUrl) {
    throw new Error(
      "topBooks needs a category, a signed url, or expiresAt + sig."
    );
  }

  return enqueue(() => executeRequest(buildUrl(feedUrl)));
}

export async function search({
  query,
  resultCount = 10,
  version = "1.1.0",
  format = "json",
} = {}) {
  assertFormat(format);
  if (!query) {
    throw new Error("query is required.");
  }

  const count = Math.min(Math.max(Number(resultCount) || 10, 1), 10);
  const prefix = version === "1.0" || version === "1.1.0" ? "/affiliate/1.0" : "/affiliate";
  return request(`${prefix}/search.${format}`, {
    format,
    query: { query, resultCount: count },
  });
}

export async function product({
  id,
  version = "1.1.0",
  format = "json",
} = {}) {
  assertFormat(format);
  if (!id) {
    throw new Error("id is required.");
  }

  const prefix = version === "1.0" || version === "1.1.0" ? "/affiliate/1.0" : "/affiliate";
  return request(`${prefix}/product.${format}`, {
    format,
    query: { id },
  });
}

export async function feedDownloadListing({ format = "json" } = {}) {
  assertFormat(format);
  const { affiliateId } = credentials();
  return request(
    `/affiliate/download/feeds/${encodeURIComponent(affiliateId)}.${format}`,
    { format }
  );
}

export async function downloadFeed({
  category,
  version = "1.1.0",
  url,
} = {}) {
  if (!url) {
    if (!category) {
      throw new Error("downloadFeed needs a category or a signed url.");
    }
    const listing = await feedDownloadListing({ format: "json" });
    const entry = findListing(listing, category);
    const variant = variantFor(entry, version);
    url = variant && variant.get;
  }

  if (!url) {
    throw new Error(`No raw feed URL found for category "${category}".`);
  }

  return enqueue(() => executeRequest(buildUrl(url), { binary: true }));
}

export async function allOffers({ format = "json" } = {}) {
  assertFormat(format);
  return request(`/affiliate/offers/v1/all/${format}`, { format });
}

export async function dotd({ format = "json" } = {}) {
  assertFormat(format);
  return request(`/affiliate/offers/v1/dotd/${format}`, { format });
}

export async function ordersReport({
  startDate,
  endDate,
  status,
  offset = 0,
  format = "json",
} = {}) {
  assertFormat(format);
  if (!startDate || !endDate || !status) {
    throw new Error("ordersReport needs startDate, endDate, and status.");
  }

  const payload = await request(`/affiliate/report/orders/detail/${format}`, {
    format,
    query: { startDate, endDate, status, offset },
  });

  return normalizeReportData(payload);
}

export async function allOrdersReport({
  startDate,
  endDate,
  statuses = ORDER_STATUSES,
  maxPages = 50,
} = {}) {
  const merged = new Map();

  for (const status of statuses) {
    let offset = 0;
    let page = 0;

    while (page < maxPages) {
      const payload = await ordersReport({
        startDate,
        endDate,
        status,
        offset,
        format: "json",
      });
      const orders = payload && Array.isArray(payload.orderList) ? payload.orderList : [];

      for (const order of orders) {
        const key = String(
          order.affiliateOrderItemId || order.orderId || order.productId || ""
        );
        if (key) {
          merged.set(key, order);
        }
      }

      const hasNext =
        orders.length >= MAX_PAGE_SIZE ||
        Boolean(payload && payload.next && payload.next.trim());
      if (!hasNext || orders.length === 0) {
        break;
      }

      offset += MAX_PAGE_SIZE;
      page += 1;
    }
  }

  return [...merged.values()];
}

export async function appInstallReport({
  startDate,
  endDate,
  status,
  format = "json",
} = {}) {
  assertFormat(format);
  if (!startDate || !endDate || !status) {
    throw new Error("appInstallReport needs startDate, endDate, and status.");
  }

  const payload = await request(`/affiliate/v1/appInstall/${format}`, {
    format,
    query: { startDate, endDate, status },
  });

  return normalizeReportData(payload);
}

export async function allAppInstallReport({
  startDate,
  endDate,
  statuses = INSTALL_STATUSES,
} = {}) {
  const merged = new Map();

  for (const status of statuses) {
    const payload = await appInstallReport({
      startDate,
      endDate,
      status,
      format: "json",
    });
    const installs =
      payload && Array.isArray(payload.appInstalls) ? payload.appInstalls : [];

    for (const install of installs) {
      const key = [
        install.date,
        install.os,
        install.clickType,
        install.affExtParam1,
      ].join("|");
      merged.set(key, install);
    }
  }

  return [...merged.values()];
}

export const flipkart = {
  apiDirectory,
  productFeed,
  deltaFeed,
  topSelling,
  booksDirectory,
  topBooks,
  search,
  product,
  feedDownloadListing,
  downloadFeed,
  allOffers,
  dotd,
  ordersReport,
  allOrdersReport,
  appInstallReport,
  allAppInstallReport,
};
