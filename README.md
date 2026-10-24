# Koh Russey Resort

Redesign of kohrusseyresort.com, built with [Astro](https://astro.build), TypeScript and Tailwind CSS.
The site builds to plain HTML, CSS and a few small inline scripts, so it needs no server.
Bookings are handled by the third-party **Exely** booking engine; this site links guests to it.

## Getting started

Needs Node 22.22 or newer (see `.nvmrc`).

```bash
npm install
cp .env.example .env
npm run dev        # http://localhost:4321
```

| Script            | Purpose                                         |
| ----------------- | ----------------------------------------------- |
| `npm run dev`     | Development server                              |
| `npm run build`   | Production build into `dist/`                   |
| `npm run preview` | Serve the `dist/` build locally                 |
| `npm run check`   | Type check (`astro check`)                      |

## Hosting

`npm run build` writes the whole site to `dist/`. Any static host works: Cloudflare Pages, Netlify,
Vercel, GitHub Pages or an ordinary web server. On a platform that builds from the repo, use build
command `npm run build`, output directory `dist`, and Node 22.

On Cloudflare's Workers & Pages (Workers Builds), leave **Root directory** as `/` and use deploy command
`npx wrangler deploy`; `wrangler.jsonc` tells it to serve `dist/` as static files.

| Variable                | Purpose                                                                                          |
| ----------------------- | ------------------------------------------------------------------------------------------------ |
| `PUBLIC_SITE_URL`       | The public address (canonical links, social previews, sitemap). Defaults to the live site's.     |
| `PUBLIC_ALLOW_INDEXING` | `true` to let search engines in. Leave it unset until launch (see Indexing below).               |
| `PUBLIC_LEADS_WEBHOOK_URL` | Production URL of the n8n Webhook node that adds each enquiry to the Google Sheet (see Forms below). |
| `PUBLIC_WEB3FORMS_KEY`  | Optional access key that also emails each enquiry to the resort (see Forms below). With neither this nor the webhook, the forms open the visitor's email app. |

Every page is a folder with an `index.html` and links end in a slash (`/villas/`), which all static
hosts serve as is. The old WordPress addresses are listed in `redirects.mjs`. The build turns each
into a small redirect page that works anywhere, and also writes `dist/_redirects`, which Netlify and
Cloudflare Pages use for real 301s. On another host, copy the list into its own redirect settings.

## Pages

Home, Villas, Restaurants, Activities, Spa, Weddings, Offers, Getting here, Gallery, Contact, About, Corporate
retreat, Reviews & Media Mentions and FAQ, plus the Exely booking page and a 404. They mirror the current site's structure and live in
`src/pages/`. The header, footer and `<head>` are in `src/layouts/BaseLayout.astro`.

## Exely booking

Booking runs on the Exely booking engine, embedded the same way as on the current site.

- `src/components/ExelyWidget.astro` loads Exely's `integration/loader.js` and mounts a widget into
  a container: the `booking-form` on `/booking/` and the `search-form` availability bar on the
  homepage. It tries each loader host in turn until one loads. On the homepage the widget has `defer`, so
  Exely's (heavy) loader only runs after the visitor's first mouse move, scroll, tap or key press; the
  booking page loads it straight away.
- The property's context ID and loader hosts are in `src/lib/site.ts` (`site.exely`).
- Every "Book now" / "Check availability" button links to `/booking/`.
- `/booking/` is `noindex` and left out of the sitemap, as on the current site.

The availability bar on the homepage is configured inside Exely (where it sends guests after a
search). Make sure it points at `/booking/` on the live domain.

## Content

Copy, contact details, shuttle times and reviews come from the current homepage and live in
`src/lib/site.ts` and `src/lib/content.ts`.

Pages built from the saved pages in `content-resource/` (wording copied as written, typos corrected; `src/lib/menus.ts` was
generated from the saved file and checked line by line against it):

- Restaurants, with the Horizon and Beach Shack menus
- Activities: the five activity sections, each with its photo, and the 16 most sought-after experiences (`src/lib/activities.ts`). Left out on
  purpose: the "Download the catalog" form (needs a backend and the PDF) and the Cooking Class, Kayaking and Snorkeling
  buttons (their pages are not built yet; the old addresses redirect to the matching section).
- Villas & Pavilions: the three pavilions and four pool villas (`src/lib/accommodations.ts`), each with its photos. Which photos go with which villa is set in `src/lib/stay-photos.ts` (the first photo is the large one, the rest fill the grid beside the text), and each room's layout is `src/components/RoomSection.astro`. The icon row under each room's name is `facts` in `accommodations.ts`. The page opens with an overview of the pavilions and villas that works as a sub-menu (`src/lib/stay-overview.ts`: which photo and link each tile has).

- Weddings, Corporate retreat, Contact, FAQ, Reviews & Media Mentions, Promotions (Offers), About us and Getting here: the wording comes
  from the saved pages and lives in `src/lib/wedding.ts`, `corporate.ts`, `faq.ts`, `reviews.ts`, `about.ts`, `getting-here.ts` and `content.ts`. The FAQ is a set of `<details>` accordions
  (no JavaScript). Links inside the text are written as `[label](address)` and drawn by `src/components/RichText.astro`.

Typos in the original text were corrected (and nothing else was reworded). Every change is listed in
`docs/content-fixes.md`, with the few judgement calls at the bottom.

Still to add:

- The logo and favicon
- Photos for the meeting room (Corporate retreat), the two pre-wedding couples (Weddings), the staff photo (About us) and the helicopter
  (Getting here); the pages use stand-in photos until these are added
- Chinese and French versions (the current site has both)

## Blog

Posts are Markdown files in `src/content/blog/`, one per post. The file name is the web address:
`best-time-to-visit.md` becomes `/blog/best-time-to-visit/`. The list is at `/blog/`, the feed at `/rss.xml`, and the footer shows a
Blog link once there is a published post. The six articles from the old site are in the folder already; their old addresses redirect. The posts' own settings are at the top of each file (the "front matter"):

| Field         | Purpose                                                                                                     |
| ------------- | ----------------------------------------------------------------------------------------------------------- |
| `title`       | The headline (H1), and the title in Google unless `seoTitle` is set.                                         |
| `seoTitle`    | Optional. The exact `<title>` for Google and browser tabs (otherwise: title + " \| Koh Russey Resort").      |
| `description` | The meta description, 50 to 200 characters (aim for 120 to 160).                                             |
| `date`        | Publication date (`2026-10-24`).                                                                             |
| `updated`     | Optional. Last meaningful change; shown on the post and used as `lastmod` in the sitemap.                    |
| `cover`       | Optional. A photo in `src/assets/blog/`, as `../../assets/blog/name.jpg`. Also the social media preview.     |
| `coverAlt`    | Alt text for the cover. Required when there is a cover.                                                      |
| `tags`        | Optional list. Shown on the post and in the feed.                                                            |
| `draft`       | `true` leaves the post out of the site completely (pages, feed, sitemap).                                    |
| `noindex`     | `true` keeps the post out of Google and the sitemap (it stays on the site and in the feed).                  |
| `canonical`   | Optional. The full address of the original, for a post first published on another site.                      |

Each post page has the canonical link, Open Graph and `article:` tags, `BlogPosting` and `BreadcrumbList` structured data, a reading
time, related posts (shared tags) and a booking prompt. Images in the text are resized by the build like all the others: put a photo in
`src/assets/blog/` and write `![A description](../../assets/blog/name.jpg)`.

### Writing posts in the editor

`/admin/` is a form-based editor ([Sveltia CMS](https://sveltiacms.app), installed with the site, settings in `public/admin/config.yml`). It saves
straight to GitHub, so a saved post goes live when Cloudflare has built the site (about a minute). New posts start as drafts.

1. On GitHub, create a **fine-grained personal access token** (Settings, Developer settings, Personal access tokens). Give it access to
   the `kohrussey` repository only, with the permission **Contents: Read and write**. Treat it like a password.
2. Open `/admin/` on the site, choose **Sign In Using Access Token** and paste it. The token stays in that browser.
3. Choose **Blog posts**, **New Blog post**, fill in the fields and write the text. Switch **Draft** off and save to publish.

The editor saves to the repository's default branch (currently `claude/exciting-thompson-5huum3`, which Cloudflare builds). If that
branch is renamed (for example to `main`), nothing needs changing here, but Cloudflare's production branch must match.

## Images

Photos live in `src/assets/images/` and are registered, with alt text, in `src/lib/images.ts`.
They are imported, so Astro knows their dimensions and makes several sizes of each one at build time.
To add a photo: drop the file in that folder, add an entry to `images.ts`, and show it with
`<Photo>` (a photo with the reveal effect, in a frame you size with classes) or `<Img>` (a plain
responsive photo). Both need a `sizes` value that says how wide the photo is shown, for example
`(min-width: 768px) 50vw, 100vw`. `map-resort.webp` was cropped to remove the map viewer's controls
and resized to 2400px wide.

## Forms

The Contact, Weddings and Corporate retreat pages share one form, `src/components/EnquiryForm.astro`. Each page says
what to ask (the fields) and the subject line the team will see.

- With `PUBLIC_LEADS_WEBHOOK_URL` set, each enquiry is posted to that address, which is meant to be an n8n **Webhook** node (method POST)
  feeding a **Google Sheets** node (Append row). It is sent as a plain form post, so n8n shows the fields under `body`
  (`{{ $json.body.email }}`). The fields are:
  `form` (which form: "Contact enquiry", "Wedding enquiry" or "Corporate retreat enquiry"), `submitted_at` (ISO time), `name`, `first_name`,
  `last_name`, `phone`, `email`, then the form's own fields (`comments`; `occasion` (ticked options joined by commas), `date`, `heard_from`;
  `company`, `heard_from`), `message` (all the answers as readable text) and `page` (the address it was sent from). One Sheet with a column
  for each works for all three forms; a field a form does not ask for is simply missing from that post. In the Webhook node, add the site's
  address (and the `*.workers.dev` preview address, if used) under **Options → Allowed Origins (CORS)**, and activate the workflow, since
  only the Production URL of an active workflow takes posts.
- With `PUBLIC_WEB3FORMS_KEY` set (a free access key from [web3forms.com](https://web3forms.com), made for the resort's email address), the
  same message is also posted to Web3Forms, which emails it to the resort. The key is meant to be public, so it is fine in the page.
- With both set, a message counts as sent when either one receives it, so an enquiry is not lost if n8n or Google is down (the email still arrives).
  If both fail, the visitor is asked to write to the resort's email address.
- With neither set, the form opens the visitor's email app with the message already written to `site.contact.email`.
- A hidden tick box catches most spam bots. Groups marked required (the Weddings occasions) need at least one option ticked.

## Icons

A few small line icons sit beside the room facts on the Villas page and the contact details. They are drawn from
[Lucide](https://lucide.dev) (ISC licence): the shapes are in `src/lib/icons.ts` and `src/components/Icon.astro` draws one by name
(`<Icon name="phone" class="size-5" />`). To add an icon, copy its shapes from Lucide into `icons.ts`. Icons are decoration only (hidden from
screen readers), so the meaning is always in the text beside them.

## Hero video

The homepage hero plays a muted, looping YouTube video behind the headline (`src/components/HeroVideo.astro`).
The video ID is `site.heroVideo.youtubeId` in `src/lib/site.ts`; change it there.

- It loads only after the page has finished loading and the visitor has moved the mouse, scrolled, tapped or
  pressed a key, so the hero photo is still the first thing painted and YouTube's player does not compete
  with the page.
- The photo stays visible until YouTube reports that playback started. If the video is private, removed or
  not embeddable, visitors just keep seeing the photo.
- It is skipped for visitors who prefer reduced motion or have Save-Data on, and it pauses when the hero
  scrolls out of view.
- It uses `youtube-nocookie.com`, so YouTube sets no cookies until a visitor interacts with the player.
- A self-hosted MP4/WebM would load faster and avoid YouTube's player script, if you have the original file.

## Indexing

The site is `noindex` with `Disallow: /` until `PUBLIC_ALLOW_INDEXING=true` is set for the build, so the
redesign cannot compete with the live site before launch. With it on, `robots.txt` points to
`/sitemap-index.xml`, which Astro generates from the pages.

## Design

The visual direction follows `SKILL.md` (the frontend-design guidance in the repo root).

- Palette, from the logo's navy and gold: ink `#132136` (text, footer, dark buttons), accent `#D3984C` (booking buttons on dark areas; always with dark text, since white on it fails contrast, and never as text on a light background), pool `#1F4E79` (links, icons, the blue band), lagoon `#2F7FC0` (focus rings only) and salt `#F6F3EE` (the warm off-white page background). Tokens live in `src/styles/global.css`; the browser's theme colour is in `src/layouts/BaseLayout.astro`.
- Type: Wulkan Display (corporate font) for headings and pull quotes, Hanken Grotesk for body text.
  - Originals are in `brand/fonts/Wulkan Display/`. The site uses Light, Regular and Medium, subset to Latin
    (with French accents) and converted to woff2 in `src/assets/fonts/`. Astro's font setup in
    `astro.config.mjs` (`fonts`) serves them and adds the preload links and a size-matched fallback font.
  - Light is used only for large headings on a plain background; Regular on photos and phones; Medium for the
    smallest uses (wordmark, table captions). The hairlines are too fine below about 20px.
  - It has no Khmer or Chinese glyphs, so those headings fall back to the system serif.
  - To regenerate a file: `pyftsubset "Wulkan Display Regular.otf" --unicodes="U+0020-007E,U+00A0-017F,U+2010-2027,U+2030-203A,U+20AC,U+2122,U+2190-2193" --layout-features='*' --flavor=woff2 --output-file=wulkan-display-regular.woff2` (from the `fonttools` and `brotli` Python packages).
- Square corners, ruled rows and a real table for the shuttle times. No card grids.
- Motion: the hero photo settles and its text arrives in sequence on load, then content reveals as you scroll.
  `src/components/ScrollReveal.astro` (mounted once in the layout) drives it and the rules are in `global.css`:
  `data-reveal="rise"` / `"slide"` for text, `data-reveal-group` for staggered lists and columns,
  `<Photo>` for photos (a curtain lifts off), `<ParallaxFrame>` for wide photos that also drift on scroll,
  and `data-delay="1|2|3"` to hold something back a beat. Everything is visible without JavaScript or
  with reduced motion. Do not put `clip-path` on an element that is observed for reveal: a fully clipped
  element never counts as visible, so it would never reveal.
- Shared button and link styles are in `src/lib/ui.ts`.
