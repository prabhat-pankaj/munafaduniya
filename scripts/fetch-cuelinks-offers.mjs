import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { cuelinks } from "../functions/src/cuelinks.js";
import { filterFlipkart } from "./offer-filters.mjs";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const OUTPUT_FILE = path.join(ROOT, "data", "cuelinks-offers.json");
const OFFER_LIMIT = 60;

function loadEnvFile(file) {
  if (!existsSync(file)) {
    return;
  }

  for (const line of readFileSync(file, "utf8").split(/\r?\n/)) {
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

loadEnvFile(path.join(ROOT, ".env"));
loadEnvFile(path.join(ROOT, "functions", ".env"));
loadEnvFile(path.join(ROOT, "functions", ".env.munafaduniya-68695"));

if (!String(process.env.CUELINKS_API_KEY || "").trim()) {
  console.warn(
    "CUELINKS_API_KEY is not set. Skipping CueLinks offers refresh."
  );
  process.exit(0);
}

async function loadCampaigns(offers) {
  const ids = [...new Set(offers.map((offer) => offer.campaign_id))].filter(
    Boolean
  );
  const campaigns = new Map();
  let cursor = 0;

  async function worker() {
    while (cursor < ids.length) {
      const index = cursor;
      cursor += 1;
      const id = ids[index];
      try {
        const result = await cuelinks.getCampaign(id);
        if (result && result.data) {
          campaigns.set(String(id), result.data);
        }
      } catch (error) {
        console.warn(
          `Could not load campaign ${id}: ${error.message}`
        );
      }
    }
  }

  await Promise.all(
    Array.from({ length: Math.min(5, ids.length) }, () => worker())
  );

  return campaigns;
}

function normalizeOffer(offer, campaign) {
  const categories = Array.isArray(offer.categories)
    ? offer.categories
        .map((category) => category && category.name)
        .filter(Boolean)
    : [];

  return {
    id: String(offer.id),
    title: String(offer.title || "").trim(),
    description: String(offer.description || "").trim(),
    terms: String(offer.terms || "").trim(),
    couponCode: String(offer.coupon_code || "").trim(),
    offerType: String(offer.offer_type || "deal"),
    campaignId: offer.campaign_id,
    campaignName: String(
      offer.campaign_name || (campaign && campaign.name) || "CueLinks partner"
    ),
    campaignLogo: String((campaign && campaign.image) || ""),
    campaignDomain: String((campaign && campaign.domain) || ""),
    categories,
    trackingUrl: String(offer.tracking_url || ""),
    startDate: String(offer.start_date || ""),
    endDate: String(offer.end_date || ""),
    originalPrice:
      offer.original_price === null || offer.original_price === undefined
        ? null
        : Number(offer.original_price),
    discountPrice:
      offer.discount_price === null || offer.discount_price === undefined
        ? null
        : Number(offer.discount_price),
    percentOff:
      offer.percent_off === null || offer.percent_off === undefined
        ? null
        : Number(offer.percent_off),
    updatedAt: String(offer.updated_at || ""),
  };
}

async function main() {
  console.log("Fetching CueLinks offers...");

  const rawOffers = await cuelinks.getAllOffers(
    { sort: "created_at", order: "desc" },
    { perPage: 100, maxPages: 3 }
  );

  const liveOffers = filterFlipkart(
    rawOffers.filter((offer) => offer && offer.tracking_url)
  ).slice(0, OFFER_LIMIT);

  if (!liveOffers.length) {
    console.warn("CueLinks returned no live offers. Existing file left untouched.");
    return;
  }

  const campaigns = await loadCampaigns(liveOffers);
  const offers = filterFlipkart(
    liveOffers.map((offer) =>
      normalizeOffer(offer, campaigns.get(String(offer.campaign_id)))
    )
  );

  if (!offers.length) {
    console.warn(
      "CueLinks returned no eligible offers. Existing file left untouched."
    );
    return;
  }

  const payload = {
    generatedAt: new Date().toISOString(),
    source: "CueLinks Publisher API",
    network: "CueLinks",
    total: offers.length,
    offers,
  };

  mkdirSync(path.dirname(OUTPUT_FILE), { recursive: true });
  writeFileSync(OUTPUT_FILE, `${JSON.stringify(payload, null, 2)}\n`);

  console.log(
    `Wrote ${offers.length} CueLinks offers to ${path.relative(
      ROOT,
      OUTPUT_FILE
    )}.`
  );
}

main().catch((error) => {
  console.error("CueLinks offers fetch failed:", error.message);
  process.exit(1);
});
