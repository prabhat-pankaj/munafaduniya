import { existsSync, readFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { initializeApp } from "firebase-admin/app";
import { syncReports } from "../src/wallet.js";

const HERE = path.dirname(fileURLToPath(import.meta.url));
const FUNCTIONS_ROOT = path.resolve(HERE, "..");
const REPO_ROOT = path.resolve(FUNCTIONS_ROOT, "..");

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

loadEnvFile(path.join(FUNCTIONS_ROOT, ".env.munafaduniya-68695"));
loadEnvFile(path.join(FUNCTIONS_ROOT, ".env"));
loadEnvFile(path.join(REPO_ROOT, ".env"));

if (!process.env.GOOGLE_APPLICATION_CREDENTIALS && !process.env.FIRESTORE_EMULATOR_HOST) {
  console.warn(
    "No GOOGLE_APPLICATION_CREDENTIALS or FIRESTORE_EMULATOR_HOST set. " +
      "Admin SDK will try Application Default Credentials."
  );
}

initializeApp();

try {
  const result = await syncReports();
  console.log("Report sync complete.", result);
} catch (error) {
  console.error("Report sync failed:", error.message);
  process.exit(1);
}
