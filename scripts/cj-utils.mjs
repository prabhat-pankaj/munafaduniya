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

function loadEnv() {
  loadEnvFile(path.join(ROOT, ".env"));
  loadEnvFile(path.join(ROOT, "functions", ".env"));
  loadEnvFile(path.join(ROOT, "functions", ".env.munafaduniya-68695"));
}

export function cjConfig(options = {}) {
  loadEnv();

  const token = String(process.env.CJ_ACCESS_TOKEN || "").trim();
  const websiteId = String(process.env.CJ_WEBSITE_ID || "").trim();
  const companyId = String(process.env.CJ_COMPANY_ID || "").trim();
  const required = ["CJ_ACCESS_TOKEN", "CJ_WEBSITE_ID"];

  if (options.company) {
    required.push("CJ_COMPANY_ID");
  }

  const missing = required.filter((key) => !String(process.env[key] || "").trim());
  if (missing.length) {
    console.warn(
      `${missing.join(", ")} not set. Skipping CJ refresh. ` +
        "Set these in .env locally and as GitHub Actions secrets."
    );
    return null;
  }

  return { token, websiteId, companyId };
}

const XML_ENTITIES = {
  amp: "&",
  lt: "<",
  gt: ">",
  quot: '"',
  apos: "'",
  nbsp: " "
};

export function decodeXml(value) {
  return String(value == null ? "" : value).replace(
    /&(#x?[0-9a-fA-F]+|[a-zA-Z]+);/g,
    (match, entity) => {
      if (entity.charAt(0) === "#") {
        const code =
          entity.charAt(1).toLowerCase() === "x"
            ? parseInt(entity.slice(2), 16)
            : parseInt(entity.slice(1), 10);
        return Number.isFinite(code) ? String.fromCodePoint(code) : match;
      }
      return XML_ENTITIES[entity.toLowerCase()] || match;
    }
  );
}

export function getXmlTag(block, tag) {
  const pattern = new RegExp(
    `<${tag}(?:\\s[^>]*)?>([\\s\\S]*?)</${tag}>`,
    "i"
  );
  const match = block.match(pattern);
  return match ? decodeXml(match[1].trim()) : "";
}

export function extractXmlLinks(xml) {
  const blocks = [];
  const pattern = /<\/?link(?:\s[^>]*)?>/gi;
  let depth = 0;
  let start = 0;
  let match;

  while ((match = pattern.exec(xml))) {
    const isClosing = match[0].charAt(1) === "/";
    if (isClosing) {
      depth -= 1;
      if (depth <= 0) {
        depth = 0;
        if (start) {
          blocks.push(xml.slice(start, match.index));
          start = 0;
        }
      }
    } else {
      if (depth === 0) {
        start = pattern.lastIndex;
      }
      depth += 1;
    }
  }

  return blocks;
}
