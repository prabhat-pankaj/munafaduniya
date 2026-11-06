import { createHash, createHmac } from "node:crypto";
import { existsSync, readFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

export const ROOT = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  ".."
);

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

export function loadEnv() {
  loadEnvFile(path.join(ROOT, ".env"));
  loadEnvFile(path.join(ROOT, "functions", ".env"));
  loadEnvFile(path.join(ROOT, "functions", ".env.munafaduniya-68695"));
}

function envValue(name) {
  return String(process.env[name] || "").trim();
}

function sortedParameters(parameters) {
  return Object.keys(parameters)
    .sort()
    .map((key) => `${key}${parameters[key]}`)
    .join("");
}

export function signTop(parameters, appSecret, signMethod = "md5") {
  const source = sortedParameters(parameters);

  if (signMethod === "md5") {
    return createHash("md5")
      .update(`${appSecret}${source}${appSecret}`, "utf8")
      .digest("hex")
      .toUpperCase();
  }

  return createHmac("sha256", appSecret)
    .update(source, "utf8")
    .digest("hex")
    .toUpperCase();
}

export function signGop(apiPath, parameters, appSecret) {
  return createHmac("sha256", appSecret)
    .update(`${apiPath}${sortedParameters(parameters)}`, "utf8")
    .digest("hex")
    .toUpperCase();
}

export function topTimestamp() {
  return new Date().toISOString().replace("T", " ").slice(0, 19);
}

export function gopTimestamp() {
  return String(Date.now());
}

export function aliexpressConfig({ requireTracking = false } = {}) {
  const appKey = envValue("ALIEXPRESS_APP_KEY");
  const appSecret = envValue("ALIEXPRESS_APP_SECRET");
  const trackingId = envValue("ALIEXPRESS_TRACKING_ID");

  if (!appKey || !appSecret) {
    console.warn(
      "ALIEXPRESS_APP_KEY or ALIEXPRESS_APP_SECRET is not set. " +
        "Skipping AliExpress refresh."
    );
    return null;
  }

  if (requireTracking && !trackingId) {
    console.warn(
      "ALIEXPRESS_TRACKING_ID is not set. " +
        "Skipping AliExpress product refresh."
    );
    return null;
  }

  return {
    appKey,
    appSecret,
    trackingId,
    accessToken: envValue("ALIEXPRESS_ACCESS_TOKEN"),
    signMethod: envValue("ALIEXPRESS_SIGN_METHOD") || "md5",
    targetCurrency: envValue("ALIEXPRESS_TARGET_CURRENCY") || "INR",
    targetLanguage: envValue("ALIEXPRESS_TARGET_LANGUAGE") || "EN",
    shipToCountry: envValue("ALIEXPRESS_SHIP_TO_COUNTRY") || "IN",
  };
}
