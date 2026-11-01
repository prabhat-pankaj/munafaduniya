import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const OUTPUT_FILE = path.join(ROOT, "data", "catalog.json");

const API_BASE = "https://affiliate-api.flipkart.net/affiliate/1.0/search.json";
const RESULT_COUNT = 10;
const PRODUCTS_PER_CATEGORY = 24;
const FEATURED_LIMIT = 12;
const REQUEST_DELAY_MS = 650;

const CATEGORIES = [
  {
    key: "mobiles",
    label: "Mobiles",
    pathIncludes: ["Mobiles>Handsets"],
    queries: [
      "smartphone under 15000",
      "5g mobile under 25000",
      "iphone",
      "samsung galaxy smartphone",
      "oneplus smartphone",
    ],
  },
  {
    key: "electronics",
    label: "Electronics",
    queries: [
      "laptop under 50000",
      "bluetooth earbuds",
      "smart tv 43 inch",
      "smartwatch",
      "tablet under 20000",
    ],
  },
  {
    key: "fashion",
    label: "Fashion",
    pathIncludes: [
      "Clothing & Accessories",
      "Footwear",
      "Lifestyle>Watches",
      "Lifestyle>Eyewear",
      "Lifestyle>Sunglasses",
      "Fashion",
      "Bags & Luggage",
    ],
    queries: [
      "men t shirts",
      "women kurtas",
      "sneakers",
      "wrist watch",
      "sunglasses",
    ],
  },
  {
    key: "home",
    label: "Home",
    pathIncludes: [
      "Home",
      "Furniture",
      "Kitchen",
      "Dining",
      "Bedding",
      "Home Improvement",
      "Kitchen Appliances",
      "Home Decor",
    ],
    queries: [
      "mixer grinder",
      "air fryer",
      "double bed bedsheet",
      "kitchen storage containers",
      "wall clock",
    ],
  },
  {
    key: "beauty",
    label: "Beauty",
    pathIncludes: ["Beauty and Grooming"],
    queries: ["face wash", "lipstick", "perfume", "sunscreen", "hair oil"],
  },
  {
    key: "sports",
    label: "Sports",
    pathIncludes: ["Sports", "Exercise & Fitness"],
    queries: [
      "cricket bat",
      "yoga mat",
      "running shoes",
      "dumbbell set",
      "football",
    ],
  },
  {
    key: "appliances",
    label: "Appliances",
    pathIncludes: ["Appliances"],
    queries: [
      "refrigerator",
      "washing machine",
      "air conditioner",
      "ceiling fan",
      "water purifier",
    ],
  },
];

function loadEnvFile(file) {
  if (!existsSync(file)) {
    return;
  }

  const content = readFileSync(file, "utf8");
  for (const line of content.split(/\r?\n/)) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) {
      continue;
    }

    const match = trimmed.match(/^([A-Za-z_][A-Za-z0-9_]*)\s*=\s*(.*)$/);
    if (!match) {
      continue;
    }

    let value = match[2].trim();
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }

    if (process.env[match[1]] === undefined) {
      process.env[match[1]] = value;
    }
  }
}

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function isSafeFlipkartUrl(rawUrl) {
  try {
    const url = new URL(rawUrl);
    return (
      url.protocol === "https:" &&
      /(^|\.)flipkart\.com$/.test(url.hostname)
    );
  } catch (error) {
    return false;
  }
}

function isSafeImageUrl(rawUrl) {
  try {
    const url = new URL(rawUrl);
    return (
      url.protocol === "https:" &&
      (/(^|\.)flixcart\.com$/.test(url.hostname) ||
        /(^|\.)fkcdn\.com$/.test(url.hostname) ||
        /(^|\.)flipkart\.com$/.test(url.hostname))
    );
  } catch (error) {
    return false;
  }
}

function withAffiliateTag(rawUrl) {
  if (!isSafeFlipkartUrl(rawUrl)) {
    return null;
  }

  const url = new URL(rawUrl);
  url.searchParams.set("affid", process.env.FLIPKART_AFFILIATE_ID);
  return url.toString();
}

async function fetchSearch(query) {
  const url = new URL(API_BASE);
  url.searchParams.set("query", query);
  url.searchParams.set("resultCount", String(RESULT_COUNT));

  let lastError = null;

  for (let attempt = 1; attempt <= 3; attempt += 1) {
    try {
      const response = await fetch(url, {
        headers: {
          Accept: "application/json",
          "Fk-Affiliate-Id": process.env.FLIPKART_AFFILIATE_ID,
          "Fk-Affiliate-Token": process.env.FLIPKART_AFFILIATE_TOKEN,
          "User-Agent": "munafaduniya-catalog-builder/1.0",
        },
        signal: AbortSignal.timeout(30000),
      });

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }

      const payload = await response.json();
      if (!payload || !Array.isArray(payload.products)) {
        throw new Error("Unexpected API response");
      }

      return payload.products;
    } catch (error) {
      lastError = error;
      if (attempt < 3) {
        await delay(1000 * attempt);
      }
    }
  }

  throw lastError;
}

function normalizeProduct(raw, category) {
  const base = raw && raw.productBaseInfoV1;
  if (!base || !base.productId || !base.title) {
    return null;
  }

  if (base.inStock === false) {
    return null;
  }

  const price = Number(
    (base.flipkartSpecialPrice && base.flipkartSpecialPrice.amount) ||
      (base.flipkartSellingPrice && base.flipkartSellingPrice.amount)
  );
  const mrp = Number(
    (base.maximumRetailPrice && base.maximumRetailPrice.amount) || 0
  );

  if (!Number.isFinite(price) || price <= 0) {
    return null;
  }

  const image =
    (base.imageUrls && base.imageUrls["400x400"]) ||
    (base.imageUrls && base.imageUrls["800x800"]) ||
    (base.imageUrls && base.imageUrls["200x200"]) ||
    "";

  if (!image || !isSafeImageUrl(image)) {
    return null;
  }

  const productUrl = withAffiliateTag(base.productUrl);
  if (!productUrl) {
    return null;
  }

  const categoryPath = String(base.categoryPath || "");
  if (
    category.pathIncludes &&
    category.pathIncludes.length > 0 &&
    !category.pathIncludes.some((part) => categoryPath.includes(part))
  ) {
    return null;
  }

  const discount =
    Number(base.discountPercentage) ||
    (mrp > price ? Math.round(((mrp - price) / mrp) * 100) : 0);

  const specs =
    raw.categorySpecificInfoV1 &&
    Array.isArray(raw.categorySpecificInfoV1.keySpecs)
      ? raw.categorySpecificInfoV1.keySpecs
          .slice(0, 3)
          .map((spec) => String(spec).trim())
          .filter(Boolean)
      : [];

  return {
    id: String(base.productId),
    title: String(base.title).trim(),
    brand: String(base.productBrand || "").trim(),
    image: String(image),
    url: productUrl,
    price: Math.round(price),
    mrp: Math.round(mrp) || Math.round(price),
    discount: Math.max(0, Math.round(discount)),
    category: category.key,
    categoryLabel: category.label,
    categoryPath,
    keySpecs: specs,
  };
}

async function collectCategory(category, seenIds) {
  const buckets = [];
  let failures = 0;

  for (const query of category.queries) {
    try {
      const rawProducts = await fetchSearch(query);
      const products = [];

      for (const raw of rawProducts) {
        const product = normalizeProduct(raw, category);
        if (product && !seenIds.has(product.id)) {
          products.push(product);
        }
      }

      buckets.push(products);
      console.log(
        `  ${query}: ${products.length} usable product${
          products.length === 1 ? "" : "s"
        }`
      );
    } catch (error) {
      failures += 1;
      console.warn(`  ${query}: skipped (${error.message})`);
    }

    await delay(REQUEST_DELAY_MS);
  }

  const selected = [];
  const maxBucketLength = buckets.reduce(
    (max, bucket) => Math.max(max, bucket.length),
    0
  );

  for (let index = 0; index < maxBucketLength; index += 1) {
    for (const bucket of buckets) {
      const product = bucket[index];
      if (!product || seenIds.has(product.id)) {
        continue;
      }

      seenIds.add(product.id);
      selected.push(product);

      if (selected.length >= PRODUCTS_PER_CATEGORY) {
        break;
      }
    }

    if (selected.length >= PRODUCTS_PER_CATEGORY) {
      break;
    }
  }

  selected.sort(
    (a, b) => b.discount - a.discount || b.price - a.price
  );

  return { products: selected, failures };
}

function compareDeals(a, b) {
  return b.discount - a.discount || b.price - a.price;
}

function pickSpotlight(categories) {
  const all = categories.flatMap((category) => category.products);
  const preferred = all.filter(
    (product) =>
      (product.category === "mobiles" || product.category === "electronics") &&
      product.price >= 4999 &&
      product.discount >= 15
  );
  const pool = preferred.length
    ? preferred
    : all.filter((product) => product.price >= 1999 && product.discount >= 15);
  const finalPool = pool.length ? pool : all;

  finalPool.sort(compareDeals);
  return finalPool[0] || null;
}

function pickFeatured(categories) {
  const best = [];
  const secondPicks = [];
  const remaining = [];

  for (const category of categories) {
    const sorted = category.products.slice().sort(compareDeals);
    if (sorted.length > 0) {
      best.push(sorted[0]);
    }
    if (sorted.length > 1) {
      secondPicks.push(sorted[1]);
    }
    remaining.push(...sorted.slice(2));
  }

  secondPicks.sort(compareDeals);
  remaining.sort(compareDeals);

  const featured = best.slice();
  for (const product of [...secondPicks, ...remaining]) {
    if (featured.length >= FEATURED_LIMIT) {
      break;
    }
    if (!featured.some((item) => item.id === product.id)) {
      featured.push(product);
    }
  }

  const spotlight = pickSpotlight(categories);
  if (spotlight) {
    const index = featured.findIndex((product) => product.id === spotlight.id);
    if (index > 0) {
      featured.splice(index, 1);
    }
    if (index !== 0) {
      featured.unshift(spotlight);
    }
  }

  return {
    featured: featured.slice(0, FEATURED_LIMIT).map((product) => product.id),
    spotlight: spotlight ? spotlight.id : null,
  };
}

async function main() {
  loadEnvFile(path.join(ROOT, ".env"));

  const affiliateId = process.env.FLIPKART_AFFILIATE_ID;
  const affiliateToken = process.env.FLIPKART_AFFILIATE_TOKEN;

  if (!affiliateId || !affiliateToken) {
    console.error(
      "Missing FLIPKART_AFFILIATE_ID or FLIPKART_AFFILIATE_TOKEN. Add them to .env or the environment."
    );
    process.exit(1);
  }

  console.log("Building Flipkart catalog...");

  const seenIds = new Set();
  const categories = [];
  let totalFailures = 0;

  for (const category of CATEGORIES) {
    console.log(`\n${category.label}`);

    const result = await collectCategory(category, seenIds);
    totalFailures += result.failures;

    if (result.products.length > 0) {
      categories.push({
        key: category.key,
        label: category.label,
        products: result.products,
      });
      console.log(`  selected: ${result.products.length}`);
    } else {
      console.warn("  no products selected");
    }
  }

  const products = categories.flatMap((category) => category.products);
  if (products.length === 0) {
    console.error(
      "\nNo products were collected. The existing catalog was left untouched."
    );
    process.exit(1);
  }

  const picks = pickFeatured(categories);
  const catalog = {
    generatedAt: new Date().toISOString(),
    source: "Flipkart Affiliate API",
    affiliateId,
    categories: categories.map((category) => ({
      key: category.key,
      label: category.label,
      count: category.products.length,
    })),
    spotlight: picks.spotlight,
    featured: picks.featured,
    products,
  };

  mkdirSync(path.dirname(OUTPUT_FILE), { recursive: true });
  writeFileSync(OUTPUT_FILE, `${JSON.stringify(catalog, null, 2)}\n`);

  console.log(
    `\nWrote ${products.length} products across ${categories.length} categories to ${path.relative(
      ROOT,
      OUTPUT_FILE
    )}.`
  );
  console.log(
    `Featured products: ${picks.featured.length}${
      picks.spotlight ? ", spotlight selected" : ""
    }`
  );

  if (totalFailures > 0) {
    console.warn(`Skipped ${totalFailures} failed request(s).`);
  }
}

main().catch((error) => {
  console.error("Catalog build failed:", error.message);
  process.exit(1);
});
