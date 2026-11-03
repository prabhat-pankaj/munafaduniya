# munafaduniya.com — Flipkart deals site

A static deals site for `munafaduniya.com`. It shows fresh Flipkart product deals across mobiles, electronics, fashion, home, beauty, sports, and appliances, with a full-width best-deals carousel, a featured carousel, and category sections.

The site is plain HTML, CSS, and JavaScript. There is no build step for the pages. Product data is fetched from the **Flipkart Affiliate API** by a scheduled GitHub Action and written to `data/catalog.json`. The browser reads that JSON file. The affiliate token is never sent to the browser.

User accounts use **Firebase Authentication** and **Firestore**. GitHub Pages still serves the static files; it never stores user data. Passwords are hashed by Firebase and are never written to this repository.

A **Firebase Functions** backend (project `munafaduniya-68695`, region `asia-south1`) syncs Flipkart order/app-install reports, calculates each signed-in user's share, and handles manual withdrawal requests. The affiliate token is stored as a Functions secret, never in the browser.

The contact page sends enquiries to `munafaduniya@gmail.com` through [FormSubmit](https://formsubmit.co).

## Features

- Daily Flipkart catalog refresh from the affiliate API
- Featured deal carousel with auto-advance, manual controls, and reduced-motion support
- Full-width, auto-rotating best-deals carousel with unique products from multiple categories, reshuffled on every page load
- Seven category sections with expandable product grids
- Product cards with price, MRP, savings, discount, and affiliate links
- Responsive dark/light theme that follows the visitor's system preference and remembers the choice
- Contact form with validation, a spam honeypot, and AJAX submission
- Affiliate disclosure and Flipkart trademark notice
- Account pages with email/password, Google, and phone OTP sign-in via Firebase
- Wallet page with available/pending/lifetime earnings and withdrawal history
- Signed-in Flipkart links carry the Firebase UID in `affExtParam1` so orders can be attributed
- Scheduled Functions sync Flipkart order and app-install reports every 6 hours
- No product data hardcoded in the HTML

## Files

| File | Purpose |
| --- | --- |
| `index.html` | Deals home page, carousel, and category sections |
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
| `functions/src/flipkart.js` | Server-side Flipkart Affiliate API client |
| `functions/src/wallet.js` | Report sync, commission share, and wallet recomputation |
| `functions/src/index.js` | Scheduled jobs, admin API callable, withdrawal callables |
| `functions/scripts/*.mjs` | CLI helpers for reports, admin claims, and withdrawals |
| `styles.css` | All styling, themes, and responsive layout |
| `script.js` | Theme, catalog rendering, carousel, tracking, and AJAX form |
| `data/catalog.json` | Generated product catalog read by the site |
| `scripts/fetch-flipkart.mjs` | Builds `data/catalog.json` from the Flipkart API |
| `.github/workflows/update-flipkart-data.yml` | Refreshes the catalog daily and commits changes |
| `.env.example` | Local credential template |
| `logo.png` | munafaduniya logo and favicon |
| `CNAME` | Custom domain for GitHub Pages |

## How the product data works

`scripts/fetch-flipkart.mjs` calls Flipkart's affiliate search endpoint for a curated set of category queries. It normalises the response, keeps in-stock products with valid Flipkart URLs and images, adds the affiliate ID to every product URL, and writes the result to `data/catalog.json`.

Only the category names and search queries are configured in the script. Products, prices, images, discounts, and links all come from the API response. The browser never calls the Flipkart API directly because that would expose the affiliate token. On each page load, the best-deals carousel selects top deals from the generated catalog and reshuffles them, so the visible set changes on refresh without needing another API call.

The generated catalog contains:

- `generatedAt` — timestamp of the build
- `categories` — category keys, labels, and counts
- `spotlight` — fallback product ID for the best-deals carousel
- `featured` — ordered product IDs for the featured row; the best-deals picks are excluded from it at render time
- `products` — normalised products with `id`, `title`, `brand`, `image`, `url`, `price`, `mrp`, `discount`, `category`, and `categoryPath`

## Local setup

1. Copy the credential template:

   ```bash
   cp .env.example .env
   ```

2. Add your Flipkart affiliate credentials to `.env`:

   ```dotenv
   FLIPKART_AFFILIATE_ID=your-affiliate-id
   FLIPKART_AFFILIATE_TOKEN=your-affiliate-token
   ```

3. Build the catalog:

   ```bash
   node scripts/fetch-flipkart.mjs
   ```

4. Serve the site:

   ```bash
   python3 -m http.server 8000
   ```

5. Open http://localhost:8000.

The site needs to be served over HTTP rather than opened as a local file, because the catalog is loaded with `fetch`.

## GitHub Actions setup

Add these repository secrets under **Settings → Secrets and variables → Actions**:

- `FLIPKART_AFFILIATE_ID`
- `FLIPKART_AFFILIATE_TOKEN`

The workflow runs daily at `02:17 UTC` and can also be started manually from the Actions tab. It has `contents: write` permission and commits `data/catalog.json` only when the catalog changes. If you protect the `main` branch, allow the workflow to push or adjust the workflow to open a pull request instead.

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

## Change categories or searches

Edit the `CATEGORIES` array in `scripts/fetch-flipkart.mjs`. Each category has:

- `key` — used in `data-category` attributes and section IDs
- `label` — displayed on the site
- `queries` — search phrases sent to the Flipkart API
- `pathIncludes` — optional category-path filters used to keep results relevant

After changing categories, update the category chips and footer links in `index.html` and `contact.html` if the visible category list changes. Then rebuild the catalog.

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

### Adding more providers

Facebook, Apple, GitHub, and other providers can be enabled in the same Firebase console. Add a button for them in `signin.html` / `signup.html` and call the matching Firebase provider. No backend code is needed.

## Wallet and Flipkart reports (Firebase Functions)

The wallet is an internal ledger, not a payment account. Flipkart pays the affiliate account directly. Users see their share of reported commission, and withdrawal requests are reviewed and paid manually.

### How attribution works

When a user is signed in, `script.js` adds their Firebase UID to every Flipkart link as `affExtParam1`. The Affiliate API returns that value on order and app-install reports, so `functions/src/wallet.js` can attribute the row to `users/{uid}`.

The share rate is configurable with `FLIPKART_USER_SHARE_RATE` (default `0.5`). The estimated credit window is `FLIPKART_CREDIT_DAYS` (default `45`) after Flipkart marks an order approved. These are estimates only: the API does **not** expose delivered, returned, or exact payout dates.

### Deploy Functions

The project uses the Blaze plan because scheduled Functions and secrets require it.

```bash
npm --prefix functions install
npx firebase-tools login
npx firebase-tools use munafaduniya-68695
npx firebase-tools functions:secrets:set FLIPKART_AFFILIATE_ID
npx firebase-tools functions:secrets:set FLIPKART_AFFILIATE_TOKEN
npx firebase-tools deploy --only functions,firestore:rules
```

The scheduled jobs are:

- `syncFlipkartReports` — every 6 hours, Asia/Kolkata; fetches up to 120 days of orders and 90 days of app installs, then recomputes every existing wallet so credit windows mature even when the underlying report rows do not change
- `syncFlipkartOffers` — every 12 hours; stores all offers and deals of the day at `meta/flipkartOffers`

For optional non-secret settings, copy `functions/.env.example` to `functions/.env.munafaduniya-68695` and edit it before deploy:

```dotenv
FLIPKART_USER_SHARE_RATE=0.5
FLIPKART_CREDIT_DAYS=45
REPORT_LOOKBACK_DAYS=120
ADMIN_UIDS=firebase-uid-1,firebase-uid-2
```

Do not put `FLIPKART_AFFILIATE_ID` or `FLIPKART_AFFILIATE_TOKEN` in that file; keep them in Functions secrets.

`ADMIN_UIDS` is a fallback for the admin callable. The preferred approach is a custom claim:

```bash
node functions/scripts/set-admin.mjs <firebase-uid>
```

The user must sign in again after the claim is set.

### Admin API and withdrawal CLI

`flipkartApi` is an admin-only callable that exposes every documented Affiliate API action: API directory, product/delta/top feeds, books, search, product lookup, feed downloads, offers, deals of the day, and order/app-install reports.

For local admin work:

```bash
node functions/scripts/flipkart-api.mjs --action search --params '{"query":"iphone","resultCount":5}'
node functions/scripts/sync-reports.mjs
node functions/scripts/update-withdrawal.mjs <userId> <withdrawalId> approved "Verified"
node functions/scripts/update-withdrawal.mjs <userId> <withdrawalId> paid "UPI transfer done"
```

`sync-reports.mjs` and `update-withdrawal.mjs` use Application Default Credentials. Run `gcloud auth application-default login` first, or point `GOOGLE_APPLICATION_CREDENTIALS` at a service-account key that is **never committed**.

### Important limitations

- Flipkart's Orders Report exposes `tentative`, `pending`, `approved`, `cancelled`, and `disapproved`; there is no delivered/returned event.
- The site cannot see Flipkart's exact payout date. `expectedCreditAt` is an estimate from the configured credit window.
- The wallet is display-only until an admin marks a withdrawal `paid`. No payout provider is integrated.
- The affiliate token must remain server-side. Do not add it to `firebase-config.js`, `script.js`, or any committed file.
- Flipkart rate-limits the API to 20 calls/second per affiliate; the client serialises requests and retries transient failures.
- Cloud Functions callables cap responses at about 10 MB, so use `functions/scripts/flipkart-api.mjs` for full category feeds and raw feed downloads.
- Product feed URLs expire quickly (roughly 10 hours). Always resolve them fresh from the API directory; do not cache signed URLs.

## Deploy

- **GitHub Pages:** push to the repository, enable Pages (Deploy from a branch, root). `CNAME` is set to `www.munafaduniya.com`. The `www` DNS record should be a CNAME to `prabhat-pankaj.github.io`; the apex domain should use GitHub Pages A records.
- **Netlify / Vercel:** import the repository, no build command, publish directory `.`
- **Any static host:** upload the repository files, including `data/catalog.json`.
- **Firebase Functions:** deploy separately with `npx firebase-tools deploy --only functions,firestore:rules` from the repository root. GitHub Pages does not run Functions, scheduled jobs, callables, or secrets.

After GitHub provisions the custom-domain TLS certificate, enable **Enforce HTTPS** in the repository Pages settings.

## Notes

- Flipkart affiliate credentials are read from `.env` or environment variables. `.env` is ignored by Git.
- The browser only receives product data and the affiliate ID, never the affiliate token.
- Wallet balances are estimates until an admin marks a withdrawal paid. They are not a promise of payment.
- Flipkart prices, discounts, and availability can change at any time.
- Flipkart is a trademark of Flipkart Private Limited. This site is independent and is not owned by Flipkart.
- FormSubmit's free tier has usage limits; check their site for current limits.
