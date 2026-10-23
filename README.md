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

| Variable                | Purpose                                                                                          |
| ----------------------- | ------------------------------------------------------------------------------------------------ |
| `PUBLIC_SITE_URL`       | The public address (canonical links, social previews, sitemap). Defaults to the live site's.     |
| `PUBLIC_ALLOW_INDEXING` | `true` to let search engines in. Leave it unset until launch (see Indexing below).               |

Every page is a folder with an `index.html` and links end in a slash (`/villas/`), which all static
hosts serve as is. The old WordPress addresses are listed in `redirects.mjs`. The build turns each
into a small redirect page that works anywhere, and also writes `dist/_redirects`, which Netlify and
Cloudflare Pages use for real 301s. On another host, copy the list into its own redirect settings.

## Pages

Home, Villas, Restaurants, Activities, Spa, Weddings, Offers, Getting here, Gallery, Contact and About,
plus the Exely booking page and a 404. They mirror the current site's structure and live in
`src/pages/`. The header, footer and `<head>` are in `src/layouts/BaseLayout.astro`.

## Exely booking

Booking runs on the Exely booking engine, embedded the same way as on the current site.

- `src/components/ExelyWidget.astro` loads Exely's `integration/loader.js` and mounts a widget into
  a container: the `booking-form` on `/booking/` and the `search-form` availability bar on the
  homepage. It tries each loader host in turn until one loads.
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
- Villas & Pavilions: the three pavilions and five pool villas (`src/lib/accommodations.ts`, text only until the villa photos are placed)

Typos in the original text were corrected (and nothing else was reworded). Every change is listed in
`docs/content-fixes.md`, with the few judgement calls at the bottom.

Still to add (the homepage only had a short summary of each):

- Full copy for Weddings, Offers and the other pages that only have a short summary
- Photos of each villa type and the logo
- The six blog articles
- Chinese and French versions (the current site has both)

## Images

Photos live in `src/assets/images/` and are registered, with alt text, in `src/lib/images.ts`.
They are imported, so Astro knows their dimensions and makes several sizes of each one at build time.
To add a photo: drop the file in that folder, add an entry to `images.ts`, and show it with
`<Photo>` (a photo with the reveal effect, in a frame you size with classes) or `<Img>` (a plain
responsive photo). Both need a `sizes` value that says how wide the photo is shown, for example
`(min-width: 768px) 50vw, 100vw`. `map-resort.webp` was cropped to remove the map viewer's controls
and resized to 2400px wide.

## Hero video

The homepage hero plays a muted, looping YouTube video behind the headline (`src/components/HeroVideo.astro`).
The video ID is `site.heroVideo.youtubeId` in `src/lib/site.ts`; change it there.

- It loads only after the page has finished loading, so the hero photo is still the first thing painted.
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

- Palette: salt `#F1F5F2`, ink `#0D2623`, pool `#1D5B4D`, lagoon `#2F8F9A` (focus rings only), accent `#C99151` (booking buttons on dark areas; always with dark text, since white on it fails contrast). Tokens live in `src/styles/global.css`.
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
