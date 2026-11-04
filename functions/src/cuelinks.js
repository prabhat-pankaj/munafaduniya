const API_BASE = "https://developers.cuelinks.com/pub_api/v3";
const DEFAULT_TIMEOUT_MS = 30000;
const MAX_RETRIES = 3;

function apiKey() {
  const key = String(process.env.CUELINKS_API_KEY || "").trim();
  if (!key) {
    throw new Error("Missing CUELINKS_API_KEY.");
  }
  return key;
}

function appendQuery(search, params) {
  if (!params) {
    return;
  }

  for (const [key, value] of Object.entries(params)) {
    if (value === undefined || value === null || value === "") {
      continue;
    }

    if (Array.isArray(value)) {
      const queryKey = key.endsWith("[]") ? key : `${key}[]`;
      for (const item of value) {
        if (item !== undefined && item !== null && item !== "") {
          search.append(queryKey, String(item));
        }
      }
      continue;
    }

    search.append(key, String(value));
  }
}

function buildUrl(path, query) {
  const url = new URL(
    path.startsWith("http") ? path : `${API_BASE}${path}`
  );
  appendQuery(url.searchParams, query);
  return url;
}

async function parseResponse(response) {
  const text = await response.text();
  if (!text) {
    return null;
  }

  try {
    return JSON.parse(text);
  } catch (error) {
    return { raw: text };
  }
}

function retryableStatus(status) {
  return (
    status === 0 ||
    status === 408 ||
    status === 429 ||
    status === 500 ||
    status === 502 ||
    status === 503 ||
    status === 504
  );
}

export async function request(
  path,
  { method = "GET", query, body, timeoutMs = DEFAULT_TIMEOUT_MS } = {}
) {
  const url = buildUrl(path, query);
  let lastError = null;

  for (let attempt = 1; attempt <= MAX_RETRIES; attempt += 1) {
    try {
      const headers = {
        Accept: "application/json",
        Authorization: `Token ${apiKey()}`,
        "User-Agent": "munafaduniya-cuelinks/1.0",
      };

      const options = {
        method,
        headers,
        signal: AbortSignal.timeout(timeoutMs),
      };

      if (body !== undefined) {
        headers["Content-Type"] = "application/json";
        options.body = JSON.stringify(body);
      }

      const response = await fetch(url, options);
      const payload = await parseResponse(response);

      if (!response.ok) {
        const message =
          (payload && (payload.error || payload.message)) ||
          `Cuelinks API ${response.status} for ${url.pathname}`;
        const error = new Error(message);
        error.status = response.status;
        error.payload = payload;

        if (!retryableStatus(response.status) || attempt === MAX_RETRIES) {
          throw error;
        }
        lastError = error;
      } else {
        return payload;
      }
    } catch (error) {
      lastError = error;
      const status = error.status || 0;
      if (!retryableStatus(status) || attempt === MAX_RETRIES) {
        throw error;
      }
    }

    const waitMs = 500 * attempt * attempt;
    await new Promise((resolve) => setTimeout(resolve, waitMs));
  }

  throw lastError || new Error("Cuelinks request failed.");
}

async function paginate(path, query, { perPage = 500, maxPages = 100 } = {}) {
  const rows = [];
  let page = 1;

  for (let index = 0; index < maxPages; index += 1) {
    const payload = await request(path, {
      query: { ...query, page, per_page: perPage },
    });
    const data = payload && Array.isArray(payload.data) ? payload.data : [];
    rows.push(...data);

    const meta = (payload && payload.meta) || {};
    if (!meta.next_page || data.length === 0) {
      break;
    }
    page = meta.next_page;
  }

  return rows;
}

export async function ping() {
  return request("/ping");
}

export async function convertLink(payload) {
  return request("/links/convert", { method: "POST", body: payload });
}

export async function monetizeLink(payload) {
  return request("/links/monetize", { method: "POST", body: payload });
}

export async function listCampaigns(params) {
  return request("/campaigns", { query: params });
}

export async function getAllCampaigns(params, options) {
  return paginate("/campaigns", params, options);
}

export async function getCampaign(id, params) {
  return request(`/campaigns/${encodeURIComponent(id)}`, { query: params });
}

export async function requestCampaignAccess(id, body) {
  return request(
    `/campaigns/${encodeURIComponent(id)}/request_access`,
    { method: "POST", body: body || {} }
  );
}

export async function listCountries(params) {
  return request("/countries", { query: params });
}

export async function listCategories(params) {
  return request("/categories", { query: params });
}

export async function listChannels(params) {
  return request("/channels", { query: params });
}

export async function getAllChannels(params, options) {
  return paginate("/channels", params, options);
}

export async function getChannel(id) {
  return request(`/channels/${encodeURIComponent(id)}`);
}

export async function createChannel(body) {
  return request("/channels", { method: "POST", body });
}

export async function updateChannel(id, body) {
  return request(`/channels/${encodeURIComponent(id)}`, {
    method: "PATCH",
    body,
  });
}

export async function deleteChannel(id) {
  return request(`/channels/${encodeURIComponent(id)}`, {
    method: "DELETE",
  });
}

export async function setDefaultChannel(id) {
  return request(
    `/channels/${encodeURIComponent(id)}/set_default`,
    { method: "POST" }
  );
}

export async function listOffers(params) {
  return request("/offers", { query: params });
}

export async function getAllOffers(params, options) {
  return paginate("/offers", params, options);
}

export async function getOffer(id, params) {
  return request(`/offers/${encodeURIComponent(id)}`, { query: params });
}

export async function listTransactions(params) {
  return request("/transactions", { query: params });
}

export async function getAllTransactions(params, options) {
  return paginate("/transactions", params, options);
}

export async function getTransaction(id) {
  return request(`/transactions/${encodeURIComponent(id)}`);
}

export async function listCpcClicks(params) {
  return request("/cpc_clicks", { query: params });
}

export async function getAllCpcClicks(params, options) {
  return paginate("/cpc_clicks", params, options);
}

export async function performanceReport(params) {
  return request("/reports/performance", { query: params });
}

export async function campaignsReport(params) {
  return request("/reports/campaigns", { query: params });
}

export async function earningsReport(params) {
  return request("/reports/earnings", { query: params });
}

export async function unmonetizedTrafficReport(params) {
  return request("/reports/unmonetized_traffic", { query: params });
}

export async function listMissingTransactions(params) {
  return request("/missing_transactions", { query: params });
}

export async function getAllMissingTransactions(params, options) {
  return paginate("/missing_transactions", params, options);
}

export async function getMissingTransaction(id) {
  return request(`/missing_transactions/${encodeURIComponent(id)}`);
}

export async function createMissingTransaction(body) {
  return request("/missing_transactions", { method: "POST", body });
}

export async function updateMissingTransaction(id, body) {
  return request(`/missing_transactions/${encodeURIComponent(id)}`, {
    method: "PATCH",
    body,
  });
}

export async function deleteMissingTransaction(id) {
  return request(`/missing_transactions/${encodeURIComponent(id)}`, {
    method: "DELETE",
  });
}

export async function listInvoices(params) {
  return request("/invoices", { query: params });
}

export async function getAllInvoices(params, options) {
  return paginate("/invoices", params, options);
}

export async function getInvoice(id) {
  return request(`/invoices/${encodeURIComponent(id)}`);
}

export async function getInvoiceTransactions(id, params) {
  return request(`/invoices/${encodeURIComponent(id)}/transactions`, {
    query: params,
  });
}

export const cuelinks = {
  request,
  ping,
  convertLink,
  monetizeLink,
  listCampaigns,
  getAllCampaigns,
  getCampaign,
  requestCampaignAccess,
  listCountries,
  listCategories,
  listChannels,
  getAllChannels,
  getChannel,
  createChannel,
  updateChannel,
  deleteChannel,
  setDefaultChannel,
  listOffers,
  getAllOffers,
  getOffer,
  listTransactions,
  getAllTransactions,
  getTransaction,
  listCpcClicks,
  getAllCpcClicks,
  performanceReport,
  campaignsReport,
  earningsReport,
  unmonetizedTrafficReport,
  listMissingTransactions,
  getAllMissingTransactions,
  getMissingTransaction,
  createMissingTransaction,
  updateMissingTransaction,
  deleteMissingTransaction,
  listInvoices,
  getAllInvoices,
  getInvoice,
  getInvoiceTransactions,
};
