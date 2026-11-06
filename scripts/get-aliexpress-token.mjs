import {
  aliexpressConfig,
  gopTimestamp,
  loadEnv,
  signGop,
} from "./aliexpress-utils.mjs";

const TOKEN_URL = "https://api-sg.aliexpress.com/rest/auth/token/create";

async function main() {
  loadEnv();

  const config = aliexpressConfig();
  if (!config) {
    return;
  }

  const code = String(process.argv[2] || process.env.ALIEXPRESS_AUTH_CODE || "").trim();
  if (!code) {
    console.warn(
      "ALIEXPRESS_AUTH_CODE is not set. Pass the OAuth code as an argument or " +
        "set ALIEXPRESS_AUTH_CODE. Skipping AliExpress token exchange."
    );
    return;
  }

  const parameters = {
    app_key: config.appKey,
    timestamp: gopTimestamp(),
    sign_method: "sha256",
    code,
  };
  parameters.sign = signGop("/auth/token/create", parameters, config.appSecret);

  const response = await fetch(`${TOKEN_URL}?${new URLSearchParams(parameters)}`, {
    headers: {
      Accept: "application/json",
      "User-Agent": "munafaduniya-aliexpress-token/1.0",
    },
    signal: AbortSignal.timeout(30000),
  });

  const text = await response.text();
  let payload = null;

  try {
    payload = text ? JSON.parse(text) : null;
  } catch (error) {
    payload = null;
  }

  if (!response.ok) {
    throw new Error(`HTTP ${response.status}: ${text.slice(0, 500)}`);
  }

  if (!payload) {
    throw new Error("AliExpress returned an invalid token response");
  }

  if (payload.code !== undefined && String(payload.code) !== "0") {
    throw new Error(
      `AliExpress token error ${payload.code}: ${payload.message || "unknown error"}`
    );
  }

  console.log(JSON.stringify(payload, null, 2));
  console.error(
    "Keep access_token and refresh_token private. Store them in .env or " +
      "GitHub Actions secrets; never commit them."
  );
}

main().catch((error) => {
  console.error("AliExpress token exchange failed:", error.message);
  process.exit(1);
});
