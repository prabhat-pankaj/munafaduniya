# munafaduniya.com — domain sale page

A single-page sale landing page with an enquiry form. Visitors submit their details and offer, and the form emails `munafaduniya@gmail.com`.

Built with plain HTML, CSS, and JavaScript. No build step and no backend. Form delivery is handled by [FormSubmit](https://formsubmit.co).

## Features

- Responsive landing page with a professional dark/light theme toggle
- Theme follows the visitor's system preference and remembers their choice
- Custom munafaduniya logo (`logo.png`) used in the header, footer, and favicon
- Offer form with validation, spam honeypot, and inline success/error states
- Owner email contact link in the footer
- AJAX submission with a no-JavaScript fallback to `thank-you.html`

## Files

| File | Purpose |
| --- | --- |
| `index.html` | Landing page and offer form |
| `styles.css` | All styling, themes, and responsive layout |
| `script.js` | Theme toggle and AJAX form submission |
| `thank-you.html` | Fallback confirmation page (no-JS submissions) |
| `logo.png` | munafaduniya logo and favicon |
| `CNAME` | Custom domain for GitHub Pages |

## One-time activation (required)

FormSubmit requires the recipient email address to be activated once:

1. Deploy the site (or serve it locally) and submit the form with real details.
2. FormSubmit sends an activation email to `munafaduniya@gmail.com`.
3. Click the activation link in that email.
4. Submit the form again to confirm delivery.

## Change the recipient

In `index.html`, update both:

- The form `action` URL — `https://formsubmit.co/munafaduniya@gmail.com`
- The AJAX endpoint in `script.js` — `https://formsubmit.co/ajax/munafaduniya@gmail.com`

To send a copy to another address, add a hidden input inside the form:

```html
<input type="hidden" name="_cc" value="second@example.com">
```

Then activate the primary address again if needed.

## Theme

The theme toggle is in the header. The initial theme comes from `localStorage`, falling back to the visitor's `prefers-color-scheme`. The choice is saved under the `theme` key.

## Preview locally

```bash
python3 -m http.server 8000
```

Open http://localhost:8000. Form delivery must be tested from a served page (localhost is fine), not by opening the HTML file directly.

## Deploy

- **Netlify / Vercel:** import the repository, no build command, publish directory `.`
- **GitHub Pages:** push to the repository, enable Pages (Deploy from a branch, root). `CNAME` is set to `www.munafaduniya.com`. Add a DNS `CNAME` record for `www` pointing to `prabhat-pankaj.github.io`, and add GitHub Pages A records for the apex domain if needed.
- **Any static host or cPanel:** upload all files to the web root.

## Customize

- Copy and layout: `index.html`, `styles.css`
- Logo and favicon: `logo.png`
- Offer currencies and intended-use options: `index.html`
- Email subject, template, redirect: hidden inputs in `index.html`
- Fallback confirmation page: `thank-you.html`

## Notes

- A hidden `_honey` field and FormSubmit filtering help reduce spam.
- No payment is collected on this page; offers are negotiated by email.
- FormSubmit's free tier has usage limits; check their site for current limits.
