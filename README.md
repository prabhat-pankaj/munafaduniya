# munafaduniya.com — Flipkart deals site

A static deals site for `munafaduniya.com`. It shows fresh Flipkart product deals across mobiles, electronics, fashion, home, beauty, sports, and appliances, with a full-width best-deals carousel, a featured carousel, category sections, and local-first search.

The site is plain HTML, CSS, and JavaScript. There is no build step for the pages and no backend required for the catalog; an optional Cloudflare Worker enables live search fallback. Product data is fetched from the **Flipkart Affiliate API** by a scheduled GitHub Action and written to `data/catalog.json`. The browser reads that JSON file. Search checks that catalog first; an optional Cloudflare Worker can call the Flipkart API for live results when a search term is not in the catalog. The affiliate token is never sent to the browser.

The contact page sends enquiries to `munafaduniya@gmail.com` through [FormSubmit](https://formsubmit.co).

## Features

- Daily Flipkart catalog refresh from the affiliate API
- Featured deal carousel with auto-advance, manual controls, and reduced-motion support
- Full-width, auto-rotating best-deals carousel with unique products from multiple categories, reshuffled on every page load
- Seven category sections with expandable product grids
- Search bar directly below the header
- Local-first search across products, brands, categories, and key specs; unmatched searches can fall back to a live Flipkart API search through an optional worker
- Product cards with price, MRP, savings, discount, and affiliate links
- Responsive dark/light theme that follows the visitor's system preference and remembers the choice
- Contact form with validation, a spam honeypot, and AJAX submission
- Affiliate disclosure and Flipkart trademark notice
- No product data hardcoded in the HTML

## Files

| File | Purpose |
| --- | --- |
| `index.html` | Deals home page, carousel, search, and category sections |
| `contact.html` | Website purchase, advertising, and partnership enquiry form |
| `thank-you.html` | No-JavaScript fallback confirmation page |
| `styles.css` | All styling, themes, and responsive layout |
| `script.js` | Theme, catalog rendering, carousel, local/live search, and AJAX form |
| `data/catalog.json` | Generated product catalog read by the site |
| `workers/flipkart-search.js` | Optional Cloudflare Worker for live Flipkart search fallback |
| `workers/wrangler.toml` | Cloudflare Worker configuration |
| `scripts/fetch-flipkart.mjs` | Builds `data/catalog.json` from the Flipkart API |
| `.github/workflows/update-flipkart-data.yml` | Refreshes the catalog daily and commits changes |
| `.env.example` | Local credential template |
| `logo.png` | munafaduniya logo and favicon |
| `CNAME` | Custom domain for GitHub Pages |

## How the product data works

`scripts/fetch-flipkart.mjs` calls Flipkart's affiliate search endpoint for a curated set of category queries. It normalises the response, keeps in-stock products with valid Flipkart URLs and images, adds the affiliate ID to every product URL, and writes the result to `data/catalog.json`.

Only the category names and search queries are configured in the script. Products, prices, images, discounts, and links all come from the API response. The browser never calls the Flipkart API directly because that would expose the affiliate token. On each page load, the best-deals carousel selects top deals from the generated catalog and reshuffles them, so the visible set changes on refresh without needing another API call.

Search is local-first: matching products are filtered from `data/catalog.json` immediately. If there are no local matches, the browser calls the optional search worker (configured with the `munafaduniya-search-api` meta tag in `index.html`). The worker holds the affiliate credentials, calls Flipkart's search endpoint, normalizes the products, adds the affiliate ID to links, and returns JSON. If the worker is not deployed, search still works against the daily catalog and shows a clear message for unmatched terms.

The generated catalog contains:

- `generatedAt` — timestamp of the build
- `categories` — category keys, labels, and counts
- `spotlight` — fallback product ID for the best-deals carousel
- `featured` — ordered product IDs for the featured row; the best-deals picks are excluded from it at render time
- `products` — normalised products with `id`, `title`, `brand`, `image`, `url`, `price`, `mrp`, `discount`, `category`, and `categoryPath`

## Live search fallback (optional)

GitHub Pages cannot run server-side code, and the Flipkart affiliate token must not be exposed in the browser. To enable live search for terms that are not in the daily catalog, deploy the included Cloudflare Worker.

1. Install Wrangler and authenticate:

   ```bash
   npx wrangler login
   ```

2. Add the Flipkart credentials as Worker secrets:

   ```bash
   npx wrangler secret put FLIPKART_AFFILIATE_ID --config workers/wrangler.toml
   npx wrangler secret put FLIPKART_AFFILIATE_TOKEN --config workers/wrangler.toml
   ```

3. Deploy the worker:

   ```bash
   npx wrangler deploy --config workers/wrangler.toml
   ```

4. Copy the deployed `workers.dev` URL and set it in the `munafaduniya-search-api` meta tag in `index.html`:

   ```html
   <meta name="munafaduniya-search-api" content="https://munafaduniya-search.YOUR-SUBDOMAIN.workers.dev/">
   ```

5. Commit and push the updated `index.html`.

The worker accepts `GET ?q=search+term`, returns up to 10 normalized products, caches responses for five minutes, and only allows browser requests from the production site and local development origins. It does not expose the affiliate token.

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

## Deploy

- **GitHub Pages:** push to the repository, enable Pages (Deploy from a branch, root). `CNAME` is set to `www.munafaduniya.com`. The `www` DNS record should be a CNAME to `prabhat-pankaj.github.io`; the apex domain should use GitHub Pages A records.
- **Netlify / Vercel:** import the repository, no build command, publish directory `.`
- **Any static host:** upload the repository files, including `data/catalog.json`.
- **Live search worker:** deploy `workers/flipkart-search.js` separately as described above; it is not served by GitHub Pages.

After GitHub provisions the custom-domain TLS certificate, enable **Enforce HTTPS** in the repository Pages settings.

## Notes

- Flipkart affiliate credentials are read from `.env` or environment variables. `.env` is ignored by Git.
- The browser only receives product data and the affiliate ID, never the affiliate token.
- Live search requires the optional Cloudflare Worker; without it, search falls back to the daily catalog only.
- Flipkart prices, discounts, and availability can change at any time.
- Flipkart is a trademark of Flipkart Private Limited. This site is independent and is not owned by Flipkart.
- FormSubmit's free tier has usage limits; check their site for current limits.
