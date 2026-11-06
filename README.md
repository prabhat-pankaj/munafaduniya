# munafaduniya.com — deals site

A static deals site for `munafaduniya.com`. Its best-deals carousel and featured grid are built from live partner offers from **CueLinks**, **CJ Affiliate**, and **AliExpress**. Product links are monetized through those affiliate networks, and signed-in orders are attributed back to the user's wallet.

The site is plain HTML, CSS, and JavaScript. There is no build step for the pages. Partner offers and products are refreshed by a scheduled GitHub Action from the affiliate APIs.

User accounts use **Firebase Authentication** and **Firestore**. GitHub Pages still serves the static files; it never stores user data. Passwords are hashed by Firebase and are never written to this repository.

A **Firebase Functions** backend (project `munafaduniya-68695`, region `asia-south1`) syncs CueLinks transactions/CPC clicks, calculates each signed-in user's share, and handles manual withdrawal requests. The CueLinks API key is stored as a Functions secret, never in the browser.

The contact page sends enquiries to `munafaduniya@gmail.com` through [FormSubmit](https://formsubmit.co).

## Features

- Featured deals grid built from live CueLinks, CJ, and AliExpress partner offers
- Full-width, auto-rotating best-deals carousel with the same partner offers
- Live partner offers section with campaign logos, product images, and coupon codes
- Product cards with price, MRP, savings, discount, and affiliate links
- Responsive dark/light theme that follows the visitor's system preference and remembers the choice
- Contact form with validation, a spam honeypot, and AJAX submission
- Affiliate disclosure
- Account pages with email/password, Google, and phone OTP sign-in via Firebase
- Wallet page with available/pending/lifetime earnings and withdrawal history
- Signed-in CueLinks links carry the Firebase UID in `subid`; CJ links carry it in `sid`, so orders can be attributed
- Scheduled Functions sync CueLinks transactions every 6 hours
- Every documented CueLinks V3 endpoint is available through the admin `cuelinksApi` callable, plus an authenticated `cuelinksConvert` callable and a postback webhook
- No product data hardcoded in the HTML
- Blocked marketplace records are filtered out at fetch time and again in the browser

## Files

| File | Purpose |
| --- | --- |
| `index.html` | Deals home page with best deals, featured deals, and partner offers |
| `contact.html` | Website purchase, advertising, and partnership enquiry form |
| `thank-you.html` | No-JavaScript fallback confirmation page |
| `signin.html` | Sign-in page with email/password, Google, and phone OTP |
| `signup.html` | Create-account page with the same sign-up methods |
| `account.html` | Signed-in profile, wallet summary, and sign-out page |
| `wallet.html` | Earnings, estimated credit dates, and withdrawal requests |
| `auth.js` | Firebase auth flows, header state, account rendering, tracking UID event |
| `wallet.js` | Wallet rendering, Firestore reads, and withdrawal callable |
| `firebase-config.js` | Public Firebase web config (project `munafaduniya-68695`) |
| `firebase.json` | Firebase Functions and Firestore deploy config |
| `firestore.rules` | Security rules for profiles, earnings, withdrawals, and offers |
| `functions/src/cuelinks.js` | Server-side CueLinks V3 API client (all 33 endpoints) |
| `functions/src/cuelinks-wallet.js` | CueLinks transaction/CPC sync, cache, and postback handling |
| `functions/src/wallet.js` | Commission share and wallet recomputation |
| `functions/src/index.js` | Scheduled jobs, CueLinks callables, webhook, withdrawal callables |
| `functions/scripts/*.mjs` | CLI helpers for CueLinks, admin claims, and withdrawals |
| `styles.css` | All styling, themes, and responsive layout |
| `script.js` | Theme, offer rendering, carousel, tracking, and AJAX form |
| `data/cuelinks-offers.json` | Live CueLinks partner offers and campaign logos |
| `data/cj-offers.json` | Live CJ Link Search offers (written once joined advertisers exist) |
| `data/cj-products.json` | Live CJ Product Feed products (written once joined INR advertisers exist) |
| `data/aliexpress-products.json` | Live AliExpress Affiliate product offers |
| `scripts/fetch-cuelinks-offers.mjs` | Builds `data/cuelinks-offers.json` from the CueLinks offers API |
| `scripts/fetch-cj-offers.mjs` | Builds `data/cj-offers.json` from the CJ Link Search API |
| `scripts/fetch-cj-products.mjs` | Builds `data/cj-products.json` from the CJ Product Feed API |
| `scripts/fetch-aliexpress-products.mjs` | Builds `data/aliexpress-products.json` from the AliExpress Affiliate API |
| `scripts/get-aliexpress-token.mjs` | Exchanges an AliExpress OAuth code for an access token |
| `scripts/offer-filters.mjs` | Shared marketplace blocklist for fetched offers and products |
| `scripts/cj-utils.mjs` | Shared CJ env loading and XML helpers |
| `scripts/aliexpress-utils.mjs` | Shared AliExpress env loading and request signing |
| `.github/workflows/update-affiliate-data.yml` | Refreshes CueLinks, CJ, and AliExpress data daily and commits changes |
| `.env.example` | Local credential template |
| `logo.png` | munafaduniya logo and favicon |
| `CNAME` | Custom domain for GitHub Pages |

## How the product data works

The scheduled GitHub Action calls the affiliate APIs and writes their responses to public JSON files:

- `data/cuelinks-offers.json` from the CueLinks offers API
- `data/cj-offers.json` from the CJ Link Search API
- `data/cj-products.json` from the CJ Product Feed API
- `data/aliexpress-products.json` from the AliExpress Affiliate Product Query API

On each page load, the browser fetches those JSON responses, merges the offers and products, removes blocked marketplace records, deduplicates them, then builds the best-deals carousel, featured grid, and partner deals grid. No product or offer data is hardcoded in the HTML.

CJ only returns records for advertisers you have joined. Until you join programmes in the CJ dashboard, the CJ scripts warn and leave any existing `data/cj-*.json` files untouched. The same applies to AliExpress: if the app has no affiliate products, the existing `data/aliexpress-products.json` file is left untouched.

The affiliate APIs require server-side credentials. The browser only receives the resulting public JSON and affiliate tracking links, never the API keys. The AliExpress Affiliate Product Query is signed with the app key and secret and does not require an OAuth token; `get-aliexpress-token.mjs` is included for AliExpress APIs that do require authorization.

## Local setup

1. Copy the credential template:

   ```bash
   cp .env.example .env
   ```

2. Add your affiliate credentials to `.env`:

   ```dotenv
   CUELINKS_API_KEY=your-cuelinks-api-key
   CJ_ACCESS_TOKEN=your-cj-personal-access-token
   CJ_COMPANY_ID=your-cj-company-id
   CJ_WEBSITE_ID=your-cj-website-id
   ALIEXPRESS_APP_KEY=your-aliexpress-app-key
   ALIEXPRESS_APP_SECRET=your-aliexpress-app-secret
   ALIEXPRESS_TRACKING_ID=your-aliexpress-tracking-id
   ```

3. Fetch partner offers and products:

   ```bash
   node scripts/fetch-cuelinks-offers.mjs
   node scripts/fetch-cj-offers.mjs
   node scripts/fetch-cj-products.mjs
   node scripts/fetch-aliexpress-products.mjs
   ```

   The CJ and AliExpress scripts exit successfully with a warning when credentials are missing or no joined products are available. To exchange an AliExpress OAuth code for a token, run:

   ```bash
   node scripts/get-aliexpress-token.mjs YOUR_OAUTH_CODE
   ```

4. Serve the site:

   ```bash
   python3 -m http.server 8000
   ```

5. Open http://localhost:8000.

The site needs to be served over HTTP rather than opened as a local file, because the offer JSON files are loaded with `fetch`.

## GitHub Actions setup

Add these repository secrets under **Settings → Secrets and variables → Actions**:

- `CUELINKS_API_KEY`
- `CJ_ACCESS_TOKEN`
- `CJ_COMPANY_ID`
- `CJ_WEBSITE_ID`
- `ALIEXPRESS_APP_KEY`
- `ALIEXPRESS_APP_SECRET`
- `ALIEXPRESS_TRACKING_ID`

Optionally add an `ALIEXPRESS_KEYWORDS` repository variable (comma-separated search terms) to override the default AliExpress product searches.

The workflow runs daily at `02:17 UTC` and can also be started manually from the Actions tab. It has `contents: write` permission and commits changes under `data/` only when the files change. If you protect the `main` branch, allow the workflow to push or adjust the workflow to open a pull request instead.

## FormSubmit activation

FormSubmit requires a one-time activation for the recipient address:

1. Deploy the site or serve it locally.
2. Submit the contact form with real details.
3. Open the activation email sent to `munafaduniya@gmail.com` and click the activation link.
4. Submit the form again to confirm delivery.

Until activation is complete, FormSubmit returns an activation message and the form displays it instead of a generic error.

## Change the form recipient

Update both:

- The form `action` and `data-endpoint` in `contact.html`
- The fallback endpoint in `script.js` if you change the default there

The current recipient is `munafaduniya@gmail.com`. To send a copy to another address, add a hidden input inside the form:

```html
<input type="hidden" name="_cc" value="second@example.com">
```

## Change AliExpress search terms

Set `ALIEXPRESS_KEYWORDS` to a comma-separated list of search terms. The scheduled workflow reads the optional `ALIEXPRESS_KEYWORDS` repository variable, and local scripts read the same value from `.env`.

## User accounts (Firebase)

Accounts are hosted by Firebase, not GitHub. GitHub Pages is static hosting: it cannot safely store users or passwords, and any file committed to the repo is public. Firebase Authentication handles credentials, and Firestore stores each profile at `users/{uid}`.

### Firebase setup

1. Open the project at <https://console.firebase.google.com/u/2/project/munafaduniya-68695/overview>.
2. Add a **Web app** to the project (or open the existing one) and copy its `firebaseConfig` object.
3. Confirm the `firebaseConfig` values in `firebase-config.js` match that app. These keys are public; do not add a service-account key.
4. Under **Authentication → Sign-in method**, enable:
   - Email/Password
   - Google
   - Phone (add a test number while developing)
5. Under **Authentication → Settings → Authorized domains**, add:
   - `localhost`
   - `www.munafaduniya.com`
   - `munafaduniya.com`
6. Create a Firestore database (production mode) and publish the rules in `firestore.rules`.
7. Reload the site and try sign-up, sign-in, Google, and phone OTP.

If `firebase-config.js` is ever reset to `YOUR_` placeholders, the auth and wallet pages show a setup notice and disable the forms.

### Stored data

Each user document in Firestore contains:

- `name`, `email`, `phone`, `photoURL`
- `provider` — `password`, `google.com`, or `phone`
- `createdAt`, `updatedAt`, and `savedDeals`
- `wallet` — `availablePaise`, `pendingPaise`, `reservedPaise`, `lifetimeEarnedPaise`, `withdrawnPaise`, `currency`, `shareRate`, `creditDays`, `updatedAt`

Earnings and withdrawals are admin-written subcollections:

- `users/{uid}/earnings/{earningId}` — order or app-install rows with commission, user share, status, `approvedAt`, and estimated `expectedCreditAt`
- `users/{uid}/withdrawals/{withdrawalId}` — pending, approved, paid, or rejected payout requests

Signed-in users can read only their own profile, earnings, and withdrawals. They cannot write earnings, withdrawals, or wallet balances; the Admin SDK and callables own those fields. Passwords are never stored in Firestore or in this repository.

CueLinks earnings are stored in the same `users/{uid}/earnings` subcollection with `source: "cuelinks-transactions"` or `source: "cuelinks-cpc-clicks"`.

### Adding more providers

Facebook, Apple, GitHub, and other providers can be enabled in the same Firebase console. Add a button for them in `signin.html` / `signup.html` and call the matching Firebase provider. No backend code is needed.

## Wallet and CueLinks reports (Firebase Functions)

The wallet is an internal ledger, not a payment account. Users see their share of reported commission, and withdrawal requests are reviewed and paid manually.

### How attribution works

When a user is signed in, `script.js` sets `subid` to their Firebase UID on every CueLinks tracking link. CueLinks returns that value on transactions and CPC clicks, so `functions/src/cuelinks-wallet.js` can attribute the row to `users/{uid}`.

The share rate is configurable with `CUELINKS_USER_SHARE_RATE` (default `0.5`). The estimated credit window is `CUELINKS_CREDIT_DAYS` (default `45`) after the commission is reported. These are estimates only: the API does **not** expose delivered, returned, or exact payout dates.

### Deploy Functions

The project uses the Blaze plan because scheduled Functions and secrets require it.

```bash
npm --prefix functions install
npx firebase-tools login
npx firebase-tools use munafaduniya-68695
npx firebase-tools functions:secrets:set CUELINKS_API_KEY
npx firebase-tools deploy --only functions,firestore:rules
```

The scheduled jobs are:

- `syncCuelinksReports` — every 6 hours; syncs CueLinks transactions and CPC clicks, attributes rows by `subid`, and recomputes affected wallets
- `syncCuelinksCache` — every 12 hours; refreshes campaigns, offers, channels, reference data, reports, invoices, and missing-transaction claims under `meta/cuelinks*`

For optional non-secret settings, copy `functions/.env.example` to `functions/.env.munafaduniya-68695` and edit it before deploy:

```dotenv
CUELINKS_USER_SHARE_RATE=0.5
CUELINKS_CREDIT_DAYS=45
CUELINKS_LOOKBACK_DAYS=120
CUELINKS_WEBHOOK_SECRET=choose-a-long-random-secret
ADMIN_UIDS=firebase-uid-1,firebase-uid-2
```

Do not put `CUELINKS_API_KEY` in that file; keep it in Functions secrets.

`ADMIN_UIDS` is a fallback for the admin callable. The preferred approach is a custom claim:

```bash
node functions/scripts/set-admin.mjs <firebase-uid>
```

The user must sign in again after the claim is set.

### Admin API and withdrawal CLI

`cuelinksApi` is an admin-only callable that exposes every documented CueLinks V3 action. Pass `{ action, id?, params?, body? }`. Actions include `ping`, `convertLink`, `monetizeLink`, `listCampaigns`, `getAllCampaigns`, `getCampaign`, `requestCampaignAccess`, `listCountries`, `listCategories`, `listChannels`, `getAllChannels`, `getChannel`, `createChannel`, `updateChannel`, `deleteChannel`, `setDefaultChannel`, `listOffers`, `getAllOffers`, `getOffer`, `listTransactions`, `getAllTransactions`, `getTransaction`, `listCpcClicks`, `getAllCpcClicks`, `performanceReport`, `campaignsReport`, `earningsReport`, `unmonetizedTrafficReport`, `listMissingTransactions`, `getAllMissingTransactions`, `getMissingTransaction`, `createMissingTransaction`, `updateMissingTransaction`, `deleteMissingTransaction`, `listInvoices`, `getAllInvoices`, `getInvoice`, `getInvoiceTransactions`, `syncReports`, and `syncCache`.

`cuelinksConvert` is a callable used for on-demand link conversion. It requires a signed-in user and always forces `subid` to their Firebase UID. The API key never reaches the browser.

`cuelinksWebhook` is the HTTP endpoint for CueLinks Global Postbacks. Set the URL in the CueLinks dashboard to `https://asia-south1-munafaduniya-68695.cloudfunctions.net/cuelinksWebhook?secret=YOUR_WEBHOOK_SECRET` and map `{aff_sub}` (Sub ID 1) to `subid`, plus `transaction_id`, `status`, `sale_amount`, and `user_commission`. The handler also accepts `sub_id`, `subid`, or `sub_id_1`.

For local admin work:

```bash
node functions/scripts/cuelinks-api.mjs --action listCampaigns --params '{"q":"electronics"}'
node functions/scripts/cuelinks-api.mjs --action performanceReport --params '{"start_date":"2026-10-01","end_date":"2026-10-31"}'
node functions/scripts/sync-cuelinks.mjs
node functions/scripts/update-withdrawal.mjs <userId> <withdrawalId> approved "Verified"
node functions/scripts/update-withdrawal.mjs <userId> <withdrawalId> paid "UPI transfer done"
```

`sync-cuelinks.mjs` and `update-withdrawal.mjs` use Application Default Credentials. Run `gcloud auth application-default login` first, or point `GOOGLE_APPLICATION_CREDENTIALS` at a service-account key that is **never committed**.

### Important limitations

- The site cannot see the network's exact payout date. `expectedCreditAt` is an estimate from the configured credit window.
- The wallet is display-only until an admin marks a withdrawal `paid`. No payout provider is integrated.
- The CueLinks API key, CJ access token, and AliExpress app secret must remain server-side. Do not add them to `firebase-config.js`, `script.js`, or any committed file.
- CJ Link Search and Product Feed only return joined advertisers. An empty CJ account is expected to produce no offers or products.
- The AliExpress Affiliate API only returns products when the app key, app secret, and affiliate tracking ID are valid and approved.

## Deploy

- **GitHub Pages:** push to the repository, enable Pages (Deploy from a branch, root). `CNAME` is set to `www.munafaduniya.com`. The `www` DNS record should be a CNAME to `prabhat-pankaj.github.io`; the apex domain should use GitHub Pages A records.
- **Netlify / Vercel:** import the repository, no build command, publish directory `.`
- **Any static host:** upload the repository files, including the `data/*.json` offer files.
- **Firebase Functions:** deploy separately with `npx firebase-tools deploy --only functions,firestore:rules` from the repository root. GitHub Pages does not run Functions, scheduled jobs, callables, or secrets.

After GitHub provisions the custom-domain TLS certificate, enable **Enforce HTTPS** in the repository Pages settings.

## Notes

- The CueLinks API key, CJ access token, and AliExpress app secret are read from `.env` or environment variables. `.env` is ignored by Git.
- The browser only receives public product data and affiliate tracking links, never the API keys.
- Wallet balances are estimates until an admin marks a withdrawal paid. They are not a promise of payment.
- Partner prices, discounts, and availability can change at any time.
- FormSubmit's free tier has usage limits; check their site for current limits.
