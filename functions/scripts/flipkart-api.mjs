import { existsSync, readFileSync, writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { flipkart } from "../src/flipkart.js";

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

function parseArgs(argv) {
  const args = { _: [] };
  for (let index = 0; index < argv.length; index += 1) {
    const item = argv[index];
    if (item.startsWith("--")) {
      const key = item.slice(2);
      const next = argv[index + 1];
      if (next && !next.startsWith("--")) {
        args[key] = next;
        index += 1;
      } else {
        args[key] = true;
      }
    } else {
      args._.push(item);
    }
  }
  return args;
}

loadEnvFile(path.join(FUNCTIONS_ROOT, ".env.munafaduniya-68695"));
loadEnvFile(path.join(FUNCTIONS_ROOT, ".env"));
loadEnvFile(path.join(REPO_ROOT, ".env"));

const args = parseArgs(process.argv.slice(2));
const action = args.action;
const params = args.params ? JSON.parse(args.params) : {};

if (!action) {
  console.error(
    "Usage: node scripts/flipkart-api.mjs --action <action> --params '<json>'\n" +
      "Actions: apiDirectory, productFeed, deltaFeed, topSelling, booksDirectory, " +
      "topBooks, search, product, feedDownloadListing, downloadFeed, allOffers, " +
      "dotd, ordersReport, allOrdersReport, appInstallReport, allAppInstallReport"
  );
  process.exit(1);
}

const handlers = {
  apiDirectory: () => flipkart.apiDirectory(params),
  productFeed: () => flipkart.productFeed(params),
  deltaFeed: () => flipkart.deltaFeed(params),
  topSelling: () => flipkart.topSelling(params),
  booksDirectory: () => flipkart.booksDirectory(params),
  topBooks: () => flipkart.topBooks(params),
  search: () => flipkart.search(params),
  product: () => flipkart.product(params),
  feedDownloadListing: () => flipkart.feedDownloadListing(params),
  downloadFeed: async () => flipkart.downloadFeed(params),
  allOffers: () => flipkart.allOffers(params),
  dotd: () => flipkart.dotd(params),
  ordersReport: () => flipkart.ordersReport(params),
  allOrdersReport: () => flipkart.allOrdersReport(params),
  appInstallReport: () => flipkart.appInstallReport(params),
  allAppInstallReport: () => flipkart.allAppInstallReport(params),
};

const handler = handlers[action];
if (!handler) {
  console.error(`Unknown action: ${action}`);
  process.exit(1);
}

try {
  const result = await handler();
  if (Buffer.isBuffer(result)) {
    const out = args.out || `flipkart-${action}.zip`;
    writeFileSync(out, result);
    console.log(`Wrote ${result.length} bytes to ${out}`);
  } else {
    console.log(JSON.stringify(result, null, 2));
  }
} catch (error) {
  console.error(error.message);
  process.exit(1);
}
