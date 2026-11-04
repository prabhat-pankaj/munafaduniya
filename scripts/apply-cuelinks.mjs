import { existsSync, readFileSync, writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const CATALOG_FILE = path.join(ROOT, "data", "catalog.json");
const API_BASE = "https://developers.cuelinks.com/pub_api/v3";
const CONCURRENCY = Math.max(
  1,
  Math.min(Number(process.env.CUELINKS_CONCURRENCY) || 4, 10)
);
const FORCE = process.argv.includes("--force");

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

const apiKey = String(process.env.CUELINKS_API_KEY || "").trim();
if (!apiKey) {
  console.warn(
    "CUELINKS_API_KEY is not set. Skipping CueLinks link conversion."
  );
  process.exit(0);
}

const channelId = Number(process.env.CUELINKS_CHANNEL_ID) || undefined;

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function merchantUrl(rawUrl) {
  try {
    const url = new URL(rawUrl);
    if (/(^|\.)flipkart\.com$/.test(url.hostname)) {
      for (const key of [
        "affid",
        "affExtParam1",
        "affExtParam2",
        "affExtParam3",
      ]) {
        url.searchParams.delete(key);
      }
    }
    return url.toString();
  } catch (error) {
    return rawUrl;
  }
}

async function fetchCampaign(id) {
  const response = await fetch(`${API_BASE}/campaigns/${id}`, {
    headers: {
      Accept: "application/json",
      Authorization: `Token ${apiKey}`,
      "User-Agent": "munafaduniya-cuelinks-catalog/1.0",
    },
    signal: AbortSignal.timeout(30000),
  });

  const text = await response.text();
  let data = null;
  try {
    data = text ? JSON.parse(text) : null;
  } catch (error) {
    data = null;
  }

  if (!response.ok || !data || !data.data) {
    const message =
      (data && (data.error || data.message)) || `HTTP ${response.status}`;
    throw new Error(message);
  }

  return data.data;
}

async function convert(url) {
  const payload = {
    url,
    subid: "site",
    subid3: "catalog",
  };
  if (channelId) {
    payload.channel_id = channelId;
  }

  for (let attempt = 1; attempt <= 4; attempt += 1) {
    const response = await fetch(`${API_BASE}/links/convert`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        Authorization: `Token ${apiKey}`,
        "Content-Type": "application/json",
        "User-Agent": "munafaduniya-cuelinks-catalog/1.0",
      },
      body: JSON.stringify(payload),
      signal: AbortSignal.timeout(30000),
    });

    const text = await response.text();
    let data = null;
    try {
      data = text ? JSON.parse(text) : null;
    } catch (error) {
      data = null;
    }

    if (response.ok && data && data.data) {
      return data.data;
    }

    if (response.status === 429 || response.status >= 500) {
      await sleep(750 * attempt * attempt);
      continue;
    }

    const message =
      (data && (data.error || data.message)) ||
      `HTTP ${response.status}`;
    throw new Error(`${message} (${url})`);
  }

  throw new Error(`Conversion failed after retries (${url})`);
}

async function main() {
  const catalog = JSON.parse(readFileSync(CATALOG_FILE, "utf8"));
  const products = Array.isArray(catalog.products) ? catalog.products : [];
  let converted = 0;
  let skipped = 0;
  let failed = 0;
  let cursor = 0;

  const targets = products.filter((product) => {
    if (!product || !product.url) {
      return false;
    }
    if (
      !FORCE &&
      product.trackingUrl &&
      product.cuelinksSourceUrl === product.url &&
      product.cuelinks &&
      product.cuelinks.affiliated === true
    ) {
      skipped += 1;
      return false;
    }
    return true;
  });

  async function worker() {
    while (cursor < targets.length) {
      const index = cursor;
      cursor += 1;
      const product = targets[index];

      try {
        const sourceUrl = merchantUrl(product.url);
        const result = await convert(sourceUrl);
        const previous = product.cuelinks || {};
        const next = {
          trackingUrl: result.tracking_url || "",
          shortUrl: result.short_url || "",
          sourceUrl,
          affiliated: Boolean(result.affiliated),
          campaign: result.campaign || null,
        };
        const unchanged =
          !FORCE &&
          previous.trackingUrl === next.trackingUrl &&
          previous.sourceUrl === next.sourceUrl &&
          previous.affiliated === next.affiliated;

        product.trackingUrl = next.trackingUrl;
        product.cuelinksSourceUrl = product.url;

        if (unchanged) {
          skipped += 1;
        } else {
          product.cuelinks = {
            ...next,
            updatedAt: new Date().toISOString(),
          };
          converted += 1;
        }
      } catch (error) {
        failed += 1;
        console.warn(`CueLinks conversion failed: ${error.message}`);
      }
    }
  }

  await Promise.all(
    Array.from({ length: Math.min(CONCURRENCY, targets.length) }, () =>
      worker()
    )
  );

  try {
    const campaign = await fetchCampaign(1);
    catalog.affiliate = {
      name: campaign.name || "Flipkart",
      logo: campaign.image || "",
      domain: campaign.domain || "flipkart.com",
      network: "CueLinks",
      campaignId: campaign.id || 1,
    };
  } catch (error) {
    console.warn(`Could not load Flipkart campaign metadata: ${error.message}`);
  }

  if (converted > 0) {
    catalog.cuelinksUpdatedAt = new Date().toISOString();
  }
  writeFileSync(CATALOG_FILE, `${JSON.stringify(catalog, null, 2)}\n`);

  console.log(
    `CueLinks catalog updated: ${converted} converted, ${skipped} unchanged, ${failed} failed.`
  );

  if (failed > 0 && converted === 0) {
    process.exitCode = 1;
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
