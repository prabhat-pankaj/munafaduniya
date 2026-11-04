import { existsSync, readFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { cuelinks } from "../src/cuelinks.js";

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

function parseJson(value) {
  if (!value) {
    return {};
  }
  return typeof value === "string" ? JSON.parse(value) : value;
}

loadEnvFile(path.join(FUNCTIONS_ROOT, ".env.munafaduniya-68695"));
loadEnvFile(path.join(FUNCTIONS_ROOT, ".env"));
loadEnvFile(path.join(REPO_ROOT, ".env"));

const args = parseArgs(process.argv.slice(2));
const action = args.action;
const id = args.id;
const params = parseJson(args.params);
const body = parseJson(args.body);

const handlers = {
  ping: () => cuelinks.ping(),
  convertLink: () => cuelinks.convertLink(body),
  monetizeLink: () => cuelinks.monetizeLink(body),
  listCampaigns: () => cuelinks.listCampaigns(params),
  getAllCampaigns: () => cuelinks.getAllCampaigns(params),
  getCampaign: () => cuelinks.getCampaign(id, params),
  requestCampaignAccess: () => cuelinks.requestCampaignAccess(id, body),
  listCountries: () => cuelinks.listCountries(params),
  listCategories: () => cuelinks.listCategories(params),
  listChannels: () => cuelinks.listChannels(params),
  getAllChannels: () => cuelinks.getAllChannels(params),
  getChannel: () => cuelinks.getChannel(id),
  createChannel: () => cuelinks.createChannel(body),
  updateChannel: () => cuelinks.updateChannel(id, body),
  deleteChannel: () => cuelinks.deleteChannel(id),
  setDefaultChannel: () => cuelinks.setDefaultChannel(id),
  listOffers: () => cuelinks.listOffers(params),
  getAllOffers: () => cuelinks.getAllOffers(params),
  getOffer: () => cuelinks.getOffer(id, params),
  listTransactions: () => cuelinks.listTransactions(params),
  getAllTransactions: () => cuelinks.getAllTransactions(params),
  getTransaction: () => cuelinks.getTransaction(id),
  listCpcClicks: () => cuelinks.listCpcClicks(params),
  getAllCpcClicks: () => cuelinks.getAllCpcClicks(params),
  performanceReport: () => cuelinks.performanceReport(params),
  campaignsReport: () => cuelinks.campaignsReport(params),
  earningsReport: () => cuelinks.earningsReport(params),
  unmonetizedTrafficReport: () =>
    cuelinks.unmonetizedTrafficReport(params),
  listMissingTransactions: () => cuelinks.listMissingTransactions(params),
  getAllMissingTransactions: () =>
    cuelinks.getAllMissingTransactions(params),
  getMissingTransaction: () => cuelinks.getMissingTransaction(id),
  createMissingTransaction: () => cuelinks.createMissingTransaction(body),
  updateMissingTransaction: () =>
    cuelinks.updateMissingTransaction(id, body),
  deleteMissingTransaction: () => cuelinks.deleteMissingTransaction(id),
  listInvoices: () => cuelinks.listInvoices(params),
  getAllInvoices: () => cuelinks.getAllInvoices(params),
  getInvoice: () => cuelinks.getInvoice(id),
  getInvoiceTransactions: () =>
    cuelinks.getInvoiceTransactions(id, params),
};

if (!action) {
  console.error(
    "Usage: node scripts/cuelinks-api.mjs --action <action> [--id <id>] [--params '<json>'] [--body '<json>']\n" +
      `Actions: ${Object.keys(handlers).join(", ")}`
  );
  process.exit(1);
}

const handler = handlers[action];
if (!handler) {
  console.error(`Unknown action: ${action}`);
  process.exit(1);
}

try {
  const result = await handler();
  console.log(JSON.stringify(result, null, 2));
} catch (error) {
  console.error(error.message);
  process.exit(1);
}
