import { mkdirSync, writeFileSync } from "node:fs";
import path from "node:path";
import { cjConfig, ROOT } from "./cj-utils.mjs";
import { isFlipkartRecord } from "./offer-filters.mjs";

const OUTPUT_FILE = path.join(ROOT, "data", "cj-products.json");
const API_URL = "https://ads.api.cj.com/query";
const PAGE_SIZE = 100;
const MAX_PAGES = 3;

const QUERY = `
  query CjProducts(
    $companyId: ID!
    $websiteId: ID!
    $limit: Int!
    $offset: Int!
  ) {
    products(
      companyId: $companyId
      partnerStatus: JOINED
      currency: "INR"
      sortBy: LAST_UPDATED
      sortOrder: DESC
      limit: $limit
      offset: $offset
    ) {
      totalCount
      count
      resultList {
        id
        catalogId
        title
        description
        advertiserId
        advertiserName
        brand
        imageLink
        lastUpdated
        targetCountry
        serviceableAreas
        price {
          amount
          currency
        }
        salePrice {
          amount
          currency
        }
        discountPercentage
        linkCode(pid: $websiteId) {
          clickUrl
        }
      }
    }
  }
`;

function toNumber(value) {
  const number = Number(value);
  return Number.isFinite(number) ? number : null;
}

function normalizeProduct(product) {
  if (!product || !product.linkCode || !product.linkCode.clickUrl) {
    return null;
  }

  const price = toNumber(product.price && product.price.amount);
  const salePrice = toNumber(product.salePrice && product.salePrice.amount);
  const originalPrice = price;
  const discountPrice = salePrice !== null ? salePrice : price;

  return {
    id: String(product.id || ""),
    catalogId: String(product.catalogId || ""),
    title: String(product.title || "").trim(),
    description: String(product.description || "").trim(),
    advertiserId: String(product.advertiserId || ""),
    advertiserName: String(product.advertiserName || "CJ partner"),
    brand: String(product.brand || ""),
    imageLink: String(product.imageLink || ""),
    trackingUrl: String(product.linkCode.clickUrl || ""),
    originalPrice,
    discountPrice,
    percentOff:
      product.discountPercentage === null ||
      product.discountPercentage === undefined
        ? null
        : toNumber(product.discountPercentage),
    currency:
      (product.price && product.price.currency) ||
      (product.salePrice && product.salePrice.currency) ||
      "INR",
    targetCountry: String(product.targetCountry || ""),
    serviceableAreas: String(product.serviceableAreas || ""),
    updatedAt: String(product.lastUpdated || ""),
    categories: []
  };
}

async function fetchPage(config, offset) {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${config.token}`,
      "Content-Type": "application/json",
      "User-Agent": "munafaduniya-cj-products/1.0"
    },
    body: JSON.stringify({
      query: QUERY,
      variables: {
        companyId: config.companyId,
        websiteId: config.websiteId,
        limit: PAGE_SIZE,
        offset
      }
    }),
    signal: AbortSignal.timeout(45000)
  });

  const text = await response.text();
  let payload = null;

  try {
    payload = text ? JSON.parse(text) : null;
  } catch (error) {
    payload = null;
  }

  if (!response.ok) {
    const detail = text ? text.slice(0, 500) : "";
    throw new Error(`HTTP ${response.status}${detail ? `: ${detail}` : ""}`);
  }

  if (!payload || payload.errors) {
    const message =
      payload && payload.errors && payload.errors[0]
        ? payload.errors[0].message
        : "Invalid CJ response";
    throw new Error(message);
  }

  if (!payload.data || !payload.data.products) {
    throw new Error("CJ response did not include products");
  }

  return payload.data.products;
}

async function main() {
  const config = cjConfig({ company: true });
  if (!config) {
    return;
  }

  console.log("Fetching CJ product feed...");

  const products = [];
  const seen = Object.create(null);
  let totalCount = 0;

  for (let page = 0; page < MAX_PAGES; page += 1) {
    const result = await fetchPage(config, page * PAGE_SIZE);
    totalCount = result.totalCount;

    if (!Array.isArray(result.resultList) || !result.resultList.length) {
      break;
    }

    result.resultList.forEach((product) => {
      const normalized = normalizeProduct(product);
      if (!normalized) {
        return;
      }
      if (isFlipkartRecord(normalized)) {
        return;
      }
      const key = `${normalized.advertiserId}:${normalized.id}`;
      if (!seen[key]) {
        seen[key] = true;
        products.push(normalized);
      }
    });

    if (result.resultList.length < PAGE_SIZE) {
      break;
    }
  }

  if (!products.length) {
    console.warn(
      "CJ returned no joined INR products. " +
        "Join Indian advertiser programmes in the CJ dashboard, then rerun this script."
    );
    return;
  }

  const payload = {
    generatedAt: new Date().toISOString(),
    source: "CJ Product Feed GraphQL API",
    network: "CJ",
    totalCount,
    total: products.length,
    products
  };

  mkdirSync(path.dirname(OUTPUT_FILE), { recursive: true });
  writeFileSync(OUTPUT_FILE, `${JSON.stringify(payload, null, 2)}\n`);

  console.log(
    `Wrote ${products.length} CJ products to ${path.relative(ROOT, OUTPUT_FILE)}.`
  );
}

main().catch((error) => {
  console.error("CJ products fetch failed:", error.message);
  process.exit(1);
});
