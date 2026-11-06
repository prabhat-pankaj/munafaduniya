import { mkdirSync, writeFileSync } from "node:fs";
import path from "node:path";
import {
  cjConfig,
  extractXmlLinks,
  getXmlTag,
  ROOT
} from "./cj-utils.mjs";

const OUTPUT_FILE = path.join(ROOT, "data", "cj-offers.json");
const API_BASE = "https://link-search.api.cj.com/v2/link-search";
const OFFER_LIMIT = 60;
const MAX_PAGES = 3;
const PROMOTION_TYPES = ["coupon", "sale/discount", "free shipping"];

function normalizeDate(value) {
  const match = String(value || "").trim().match(/^(\d{4})-(\d{2})-(\d{2})/);
  return match ? `${match[1]}-${match[2]}-${match[3]}` : "";
}

function domainOf(value) {
  try {
    return new URL(value).hostname;
  } catch (error) {
    return "";
  }
}

function normalizeLink(block) {
  const linkId = getXmlTag(block, "link-id");
  const clickUrl = getXmlTag(block, "clickUrl");
  if (!linkId || !clickUrl) {
    return null;
  }

  const advertiserId = getXmlTag(block, "advertiser-id");
  const advertiserName =
    getXmlTag(block, "advertiser-name") || "CJ partner";
  const couponCode = getXmlTag(block, "coupon-code");
  const title =
    getXmlTag(block, "link-name") ||
    getXmlTag(block, "description") ||
    advertiserName;

  return {
    id: `cj-${linkId}`,
    title,
    description: getXmlTag(block, "description"),
    terms: "",
    couponCode,
    offerType: couponCode ? "coupon" : "deal",
    campaignId: advertiserId,
    campaignName: advertiserName,
    campaignLogo: "",
    campaignDomain: domainOf(getXmlTag(block, "destination")),
    categories: getXmlTag(block, "category")
      ? [getXmlTag(block, "category")]
      : [],
    trackingUrl: clickUrl,
    startDate: normalizeDate(getXmlTag(block, "promotion-start-date")),
    endDate: normalizeDate(getXmlTag(block, "promotion-end-date")),
    originalPrice: null,
    discountPrice: null,
    percentOff: null,
    updatedAt: getXmlTag(block, "last-updated"),
    network: "CJ"
  };
}

async function fetchPage(config, promotionType, page) {
  const params = new URLSearchParams({
    "website-id": config.websiteId,
    "advertiser-ids": "joined",
    "promotion-type": promotionType,
    "records-per-page": "100",
    "page-number": String(page)
  });

  const response = await fetch(`${API_BASE}?${params}`, {
    headers: {
      Accept: "application/xml",
      Authorization: `Bearer ${config.token}`,
      "User-Agent": "munafaduniya-cj-offers/1.0"
    },
    signal: AbortSignal.timeout(30000)
  });

  const text = await response.text();

  if (!response.ok) {
    if (/No Joined Advertisers/i.test(text)) {
      return { noJoined: true, links: [] };
    }
    const message = (text.match(/<error-message>([\s\S]*?)<\/error-message>/i) ||
      [])[1];
    throw new Error(message || `HTTP ${response.status}`);
  }

  return {
    noJoined: false,
    links: extractXmlLinks(text)
      .map(normalizeLink)
      .filter((link) => link && /^https:\/\//.test(link.trackingUrl))
  };
}

async function main() {
  const config = cjConfig();
  if (!config) {
    return;
  }

  console.log("Fetching CJ promotional links...");

  const links = [];
  const seen = Object.create(null);
  let noJoined = false;

  for (const promotionType of PROMOTION_TYPES) {
    for (let page = 1; page <= MAX_PAGES; page += 1) {
      const result = await fetchPage(config, promotionType, page);

      if (result.noJoined) {
        noJoined = true;
        break;
      }

      result.links.forEach((link) => {
        const key = link.id;
        if (!seen[key] && links.length < OFFER_LIMIT) {
          seen[key] = true;
          links.push(link);
        }
      });

      if (result.links.length < 100) {
        break;
      }
    }

    if (noJoined) {
      break;
    }
  }

  if (noJoined && !links.length) {
    console.warn(
      "CJ reports no joined advertisers for this website. " +
        "Join advertiser programmes in the CJ dashboard, then rerun this script."
    );
    return;
  }

  if (!links.length) {
    console.warn("CJ returned no joined promotional links. Existing file left untouched.");
    return;
  }

  const payload = {
    generatedAt: new Date().toISOString(),
    source: "CJ Link Search API",
    network: "CJ",
    total: links.length,
    offers: links
  };

  mkdirSync(path.dirname(OUTPUT_FILE), { recursive: true });
  writeFileSync(OUTPUT_FILE, `${JSON.stringify(payload, null, 2)}\n`);

  console.log(
    `Wrote ${links.length} CJ offers to ${path.relative(ROOT, OUTPUT_FILE)}.`
  );
}

main().catch((error) => {
  console.error("CJ offers fetch failed:", error.message);
  process.exit(1);
});
