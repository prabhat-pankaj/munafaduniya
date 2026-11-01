const API_BASE = "https://affiliate-api.flipkart.net/affiliate/1.0/search.json";
const RESULT_COUNT = 10;
const CACHE_TTL_SECONDS = 300;
const CACHE_ORIGIN = "https://munafaduniya-search-cache.internal";
const ALLOWED_ORIGINS = new Set([
  "https://www.munafaduniya.com",
  "https://munafaduniya.com",
  "https://prabhat-pankaj.github.io",
]);

const CATEGORY_HINTS = [
  { key: "mobiles", label: "Mobiles", parts: ["Mobiles>Handsets"] },
  { key: "electronics", label: "Electronics", parts: ["Electronics>"] },
  { key: "fashion", label: "Fashion", parts: ["Clothing & Accessories", "Footwear", "Fashion", "Bags & Luggage"] },
  { key: "beauty", label: "Beauty", parts: ["Beauty and Grooming"] },
  { key: "sports", label: "Sports", parts: ["Sports", "Exercise & Fitness"] },
  { key: "appliances", label: "Appliances", parts: ["Appliances"] },
  { key: "home", label: "Home", parts: ["Home", "Furniture", "Kitchen", "Dining", "Bedding"] },
];

function corsHeaders(origin) {
  const local = origin && /^http:\/\/(localhost|127\.0\.0\.1)(:\d+)?$/.test(origin);
  const allowed = origin && (ALLOWED_ORIGINS.has(origin) || local);

  return {
    "Access-Control-Allow-Origin": local && origin ? origin : allowed ? origin : "https://www.munafaduniya.com",
    "Access-Control-Allow-Methods": "GET, OPTIONS",
    "Access-Control-Allow-Headers": "Accept, Content-Type",
    "Access-Control-Max-Age": "86400",
    Vary: "Origin",
  };
}

function jsonResponse(data, status, origin) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": status === 200 ? `public, max-age=${CACHE_TTL_SECONDS}` : "no-store",
      ...corsHeaders(origin),
    },
  });
}

function safeFlipkartUrl(rawUrl) {
  try {
    const url = new URL(rawUrl);
    return url.protocol === "https:" && /(^|\.)flipkart\.com$/.test(url.hostname);
  } catch (error) {
    return false;
  }
}

function safeImageUrl(rawUrl) {
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

function withAffiliateTag(rawUrl, affiliateId) {
  if (!safeFlipkartUrl(rawUrl)) {
    return null;
  }

  const url = new URL(rawUrl);
  url.searchParams.set("affid", affiliateId);
  return url.toString();
}

function categoryForPath(categoryPath) {
  const path = String(categoryPath || "");
  for (const item of CATEGORY_HINTS) {
    if (item.parts.some((part) => path.includes(part))) {
      return { key: item.key, label: item.label };
    }
  }

  const first = path.split(">")[0].trim();
  return {
    key: first.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "") || "deals",
    label: first || "Flipkart",
  };
}

function normalizeProduct(raw, affiliateId) {
  const base = raw && raw.productBaseInfoV1;
  if (!base || !base.productId || !base.title || base.inStock === false) {
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

  if (!image || !safeImageUrl(image)) {
    return null;
  }

  const url = withAffiliateTag(base.productUrl, affiliateId);
  if (!url) {
    return null;
  }

  const categoryPath = String(base.categoryPath || "");
  const category = categoryForPath(categoryPath);
  const discount =
    Number(base.discountPercentage) ||
    (mrp > price ? Math.round(((mrp - price) / mrp) * 100) : 0);

  const keySpecs =
    raw.categorySpecificInfoV1 && Array.isArray(raw.categorySpecificInfoV1.keySpecs)
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
    url,
    price: Math.round(price),
    mrp: Math.round(mrp) || Math.round(price),
    discount: Math.max(0, Math.round(discount)),
    category: category.key,
    categoryLabel: category.label,
    categoryPath,
    keySpecs,
  };
}

async function searchFlipkart(query, env) {
  const affiliateId = env.FLIPKART_AFFILIATE_ID;
  const affiliateToken = env.FLIPKART_AFFILIATE_TOKEN;

  if (!affiliateId || !affiliateToken) {
    throw new Error("Search credentials are not configured");
  }

  const url = new URL(API_BASE);
  url.searchParams.set("query", query);
  url.searchParams.set("resultCount", String(RESULT_COUNT));

  const response = await fetch(url.toString(), {
    headers: {
      Accept: "application/json",
      "Fk-Affiliate-Id": affiliateId,
      "Fk-Affiliate-Token": affiliateToken,
      "User-Agent": "munafaduniya-live-search/1.0",
    },
  });

  if (!response.ok) {
    throw new Error(`Flipkart API returned HTTP ${response.status}`);
  }

  const payload = await response.json();
  if (!payload || !Array.isArray(payload.products)) {
    throw new Error("Unexpected Flipkart API response");
  }

  return {
    query,
    products: payload.products
      .map((raw) => normalizeProduct(raw, affiliateId))
      .filter(Boolean),
  };
}

export default {
  async fetch(request, env, ctx) {
    const origin = request.headers.get("Origin");

    if (request.method === "OPTIONS") {
      return new Response(null, { status: 204, headers: corsHeaders(origin) });
    }

    if (request.method !== "GET") {
      return jsonResponse({ error: "Method not allowed" }, 405, origin);
    }

    const url = new URL(request.url);
    const query = String(url.searchParams.get("q") || "").trim();

    if (query.length < 2 || query.length > 80) {
      return jsonResponse(
        { error: "Search query must be between 2 and 80 characters." },
        400,
        origin
      );
    }

    const cache = caches.default;
    const cacheKey = new Request(
      `${CACHE_ORIGIN}/?q=${encodeURIComponent(query.toLowerCase())}`
    );
    const cached = await cache.match(cacheKey);

    if (cached) {
      return jsonResponse(await cached.json(), 200, origin);
    }

    try {
      const payload = await searchFlipkart(query, env);
      ctx.waitUntil(
        cache.put(
          cacheKey,
          new Response(JSON.stringify(payload), {
            headers: {
              "Content-Type": "application/json; charset=utf-8",
              "Cache-Control": `public, max-age=${CACHE_TTL_SECONDS}`,
            },
          })
        )
      );
      return jsonResponse(payload, 200, origin);
    } catch (error) {
      console.error("Live search failed", error.message);
      return jsonResponse(
        { error: "Live Flipkart search is temporarily unavailable.", products: [] },
        502,
        origin
      );
    }
  },
};
