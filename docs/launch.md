# Launching the new site

Work through this in order. Steps 1–2 matter most, because the old site was hacked.

## 1. Secure the accounts first (before pointing the domain anywhere)

A hacked website usually means a stolen password somewhere, not only a weak plugin. Change all of these, with a new unique password and two-step verification on each:

- Domain registrar (where `kohrusseyresort.com` is bought) – also switch on the registrar/transfer lock.
- The DNS provider, if different from the registrar.
- The old web host and the WordPress admin users (delete users you do not recognise).
- Cloudflare, GitHub, n8n, Google (Search Console, Google Ads, Tag Manager, Sheets), Exely.
- The email accounts on the domain (reservations@, info@).

Then open the DNS records and delete any you did not create (unknown A, CNAME or TXT records, or an extra nameserver).

## 2. Keep email working

If email for `@kohrusseyresort.com` is hosted on the same account as the old website, write down every MX, SPF (TXT `v=spf1…`), DKIM and DMARC record **before** changing nameservers, and recreate each one in Cloudflare DNS. Pointing the website to the new host must not touch the MX records.

## 3. Connect the domain in Cloudflare

1. Add `kohrusseyresort.com` to Cloudflare as a site (free plan) and, at the registrar, switch to the two nameservers Cloudflare shows. Check that every record from step 2 is copied across.
2. Workers & Pages → this project → Settings → Domains & Routes → Add → Custom domain → `www.kohrusseyresort.com`.
3. Send the bare `kohrusseyresort.com` to `www` with a Redirect Rule (301, keep the path and query string), so the two never compete in search results.

## 4. Build variables (Workers & Pages → Settings → Variables and secrets, build section)

| Name | Value |
| --- | --- |
| `PUBLIC_SITE_URL` | `https://www.kohrusseyresort.com` |
| `PUBLIC_ALLOW_INDEXING` | `true` |
| `PUBLIC_LEADS_WEBHOOK_URL` | the n8n production URL (already set) |
| `PUBLIC_WEB3FORMS_KEY` | optional, already set if used |
| `PUBLIC_GTM_ID` | optional: `GTM-N6QTDNL3` is the container the old site used |

These are baked in at build time, so redeploy after changing them. `PUBLIC_ALLOW_INDEXING=true` is what removes `noindex` and `Disallow: /`.

## 5. Other services that know the address

- **n8n** – Webhook node → Allowed Origins: add `https://www.kohrusseyresort.com` and `https://kohrusseyresort.com` (comma separated), keep the old ones while testing.
- **Exely** – check that the booking engine's return and "search" address is `https://www.kohrusseyresort.com/booking/`.
- **Google Ads / Tag Manager** – update the landing-page addresses if they point to old WordPress paths (the old paths redirect, but ads are cleaner with the new ones).

## 6. After the switch

1. Open every page on the live domain once: home, `/fr/`, `/zh-hans/`, villas, restaurants, activities (and its three sub-pages), spa, weddings, corporate retreat, offers, FAQ, reviews, about, getting here, contact, blog, booking. Send one test enquiry from each form.
2. Old addresses: try a few, for example `/about-us`, `/contact-us`, `/private-beachfront-residence` and one old blog address. Each should land on the new page.
3. Search Console (the verification tags are already in the site, so the existing property keeps working):
   - Sitemaps → submit `sitemap-index.xml`.
   - Security & Manual Actions → if a "hacked content" or "deceptive pages" warning is shown, click Request review once the new site is live.
   - Removals → remove any spam URLs the hackers created (often `/?p=` or random `.html` addresses).
   - URL Inspection → test the home page, then Request indexing.
4. Keep the old hosting account for a short while only as a backup of the files and database, **offline** (not reachable from the internet), then close it. Do not restore anything from it onto the new site.

## 7. Clean up the repository

- Delete the `content-resource/` folder (the saved copy of the old pages).
- Delete the stale Vercel project (`kohrussey.vercel.app`) so only one copy of the site is public.
- Replace the placeholder logo file with the SVG when available, and add a favicon.

## Headers

`public/_headers` adds basic protection (no MIME sniffing, no framing by other sites, HTTPS only, a locked-down browser feature policy) and long caching for the fingerprinted files. It does not set a Content-Security-Policy; the booking engine, video and map would each need an exception, so test any CSP in report-only mode before enforcing it.
