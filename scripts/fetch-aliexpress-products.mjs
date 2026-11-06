import { mkdirSync, writeFileSync } from "node:fs";
import path from "node:path";
import {
  aliexpressConfig,
  loadEnv,
  ROOT,
  signTop,
  topTimestamp,
} from "./aliexpress-utils.mjs";
import { isFlipkartRecord } from "./offer-filters.mjs";

const API_URL = "https://api-sg.aliexpress.com/sync";
const OUTPUT_FILE = path.join(ROOT, "data", "aliexpress-products.json");
const DEFAULT_KEYWORDS = [
  "wireless earbuds",
  "smartwatch",
  "home gadgets",
  "kitchen tools",
  "phone accessories",
  "fashion accessories",
];

function listValue(name) {
  return String(process.env[name] || "")
    .split(",")
    .map((value) => value.trim())
    .filter(Boolean);
}

function numberValue(name, fallback) {
  const value = Number(process.env[name]);
  return Number.isFinite(value) && value > 0 ? value : fallback;
}

function parsePrice(value) {
  const number = Number(
    String(value === null || value === undefined ? "" : value)
      .replace(/,/g, "")
      .replace(/[^\d.]/g, "")
  );
  return Number.isFinite(number) ? number : null;
}

function parsePercent(value) {
  const match = String(value || "").match(/(\d+(?:\.\d+)?)/);
  return match ? Number(match[1]) : null;
}

function normalizeProduct(product, currency) {
  if (!product || !product.promotion_link) {
    return null;
  }

  const firstCategory = String(product.first_level_category_name || "").trim();
  const secondCategory = String(product.second_level_category_name || "").trim();
  const categories = [firstCategory, secondCategory].filter(Boolean);

  return {
    id: String(product.product_id || product.productId || ""),
    title: String(product.product_title || "").trim(),
    description: categories.join(" · "),
    advertiserName: String(product.shop_name || "AliExpress"),
    shopName: String(product.shop_name || "AliExpress"),
    brand: String(product.brand_name || ""),
    imageLink: String(product.product_main_image_url || ""),
    trackingUrl: String(product.promotion_link || ""),
    productDetailUrl: String(product.product_detail_url || ""),
    originalPrice: parsePrice(product.target_original_price),
    discountPrice: parsePrice(product.target_sale_price),
    percentOff: parsePercent(product.discount),
    currency,
    categories,
    updatedAt: new Date().toISOString(),
    network: "AliExpress",
  };
}

async function queryProducts(config, keyword, pageNo, pageSize) {
  const parameters = {
    app_key: config.appKey,
    method: "aliexpress.affiliate.product.query",
    timestamp: topTimestamp(),
    sign_method: config.signMethod,
    format: "json",
    v: "2.0",
    tracking_id: config.trackingId,
    keywords: keyword,
    page_no: String(pageNo),
    page_size: String(pageSize),
    target_currency: config.targetCurrency,
    target_language: config.targetLanguage,
    ship_to_country: config.shipToCountry,
  };
  parameters.sign = signTop(parameters, config.appSecret, config.signMethod);

  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
      "User-Agent": "munafaduniya-aliexpress-products/1.0",
    },
    body: new URLSearchParams(parameters),
    signal: AbortSignal.timeout(30000),
  });

  const text = await response.text();
  let payload = null;

  try {
    payload = text ? JSON.parse(text) : null;
  } catch (error) {
    payload = null;
  }

  if (!response.ok) {
    throw new Error(`HTTP ${response.status}: ${text.slice(0, 500)}`);
  }

  if (!payload) {
    throw new Error("AliExpress returned an invalid product response");
  }

  const root = payload.aliexpress_affiliate_product_query_response;
  const apiError = payload.error_response;

  if (!root) {
    const message =
      (apiError && (apiError.sub_msg || apiError.msg || apiError.code)) ||
      "AliExpress product response was missing";
    throw new Error(message);
  }

  const result = root.resp_result;
  if (!result || Number(result.resp_code) !== 200) {
    throw new Error(
      (result && (result.resp_msg || result.resp_code)) ||
        "AliExpress product query failed"
    );
  }

  const products =
    result.result &&
    result.result.products &&
    result.result.products.product;

  if (Array.isArray(products)) {
    return products;
  }
  return products ? [products] : [];
}

function delay(milliseconds) {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
}

async function main() {
  loadEnv();

  const config = aliexpressConfig({ requireTracking: true });
  if (!config) {
    return;
  }

  const keywords = listValue("ALIEXPRESS_KEYWORDS");
  const searchTerms = keywords.length ? keywords : DEFAULT_KEYWORDS;
  const pageSize = numberValue("ALIEXPRESS_PAGE_SIZE", 20);
  const maxPages = numberValue("ALIEXPRESS_MAX_PAGES", 1);

  console.log("Fetching AliExpress affiliate products...");

  const products = [];
  const seen = Object.create(null);
  let errorCount = 0;
  let lastError = null;

  for (const keyword of searchTerms) {
    for (let page = 1; page <= maxPages; page += 1) {
      let records = [];
      try {
        records = await queryProducts(config, keyword, page, pageSize);
      } catch (error) {
        errorCount += 1;
        lastError = error;
        console.warn(`Could not fetch "${keyword}" page ${page}: ${error.message}`);
      }

      records.forEach((record) => {
        const normalized = normalizeProduct(record, config.targetCurrency);
        if (!normalized || isFlipkartRecord(normalized)) {
          return;
        }
        const key = normalized.id || normalized.trackingUrl;
        if (!seen[key]) {
          seen[key] = true;
          products.push(normalized);
        }
      });

      if (records.length < pageSize) {
        break;
      }

      await delay(250);
    }
  }

  if (!products.length) {
    if (errorCount && lastError) {
      throw new Error(
        `AliExpress returned no products. Last error: ${lastError.message}`
      );
    }
    console.warn(
      "AliExpress returned no affiliate products. Existing file left untouched."
    );
    return;
  }

  const payload = {
    generatedAt: new Date().toISOString(),
    source: "AliExpress Affiliate Product Query API",
    network: "AliExpress",
    total: products.length,
    products,
  };

  mkdirSync(path.dirname(OUTPUT_FILE), { recursive: true });
  writeFileSync(OUTPUT_FILE, `${JSON.stringify(payload, null, 2)}\n`);

  console.log(
    `Wrote ${products.length} AliExpress products to ${path.relative(
      ROOT,
      OUTPUT_FILE
    )}.`
  );
}

main().catch((error) => {
  console.error("AliExpress products fetch failed:", error.message);
  process.exit(1);
});
