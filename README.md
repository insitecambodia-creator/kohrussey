# Koh Russey Resort

Redesign of kohrusseyresort.com, built with Next.js (App Router), TypeScript and Tailwind CSS.
Bookings are handled by the third-party **Exely** booking engine; this site links guests to it.

## Getting started

```bash
npm install
cp .env.example .env.local
npm run dev        # http://localhost:3000
```

| Script          | Purpose            |
| --------------- | ------------------ |
| `npm run dev`   | Development server |
| `npm run lint`  | ESLint             |
| `npm run build` | Production build   |

## Pages

Home, Villas, Restaurants, Activities, Spa, Weddings, Offers, Getting here, Gallery, Contact
and About. They mirror the current site's structure. `next.config.ts` redirects the old
WordPress URLs (for example `/about-us/` and `/private-beachfront-residence/`) to the new ones.

## Exely booking

Booking runs on the Exely booking engine, embedded the same way as on the current site.

- `src/components/ExelyWidget.tsx` loads Exely's `integration/loader.js` and mounts a widget
  into a container: the `booking-form` on `/booking` and the `search-form` availability bar on
  the homepage.
- The property's context ID and loader hosts are in `src/lib/site.ts` (`site.exely`).
- Every "Book now" / "Check availability" button links to `/booking`.
- `/booking` is `noindex`, as on the current site.

The availability bar on the homepage is configured inside Exely (where it sends guests after a
search). Make sure it points at `/booking` on the live domain.

## Content

Copy, contact details, shuttle times and reviews come from the current homepage and live in
`src/lib/site.ts` and `src/lib/content.ts`.

Still to add (the homepage only had a short summary of each):

- Full copy for Villas (per villa type), Restaurants, Activities, Spa, Weddings and Offers
- Photos of each villa type (the four villa cards show a "Photo coming soon" tile) and the logo
- The six blog articles
- Chinese and French versions (the current site has both)

## Images

Photos live in `src/assets/images/` and are registered, with alt text, in `src/lib/images.ts`.
They are imported statically, so `next/image` knows their dimensions and serves responsive sizes.
To add a photo: drop the file in that folder, add an entry to `images.ts`, and use it with
`<Image src={images.x.src} alt={images.x.alt} />`. `map-resort.webp` was cropped to remove the
map viewer's controls and resized to 2400px wide.

## Indexing

The site is `noindex` with `Disallow: /` until `NEXT_PUBLIC_ALLOW_INDEXING=true`, so the redesign
cannot compete with the live site before launch.

## Design

The visual direction follows `SKILL.md` (the frontend-design guidance in the repo root).

- Palette: salt `#F1F5F2`, ink `#0D2623`, pool `#1D5B4D`, lagoon `#2F8F9A`, sand `#E6CB93`. Tokens live in `src/app/globals.css`.
- Type: Marcellus for headings, Hanken Grotesk for body text, both self-hosted through `@fontsource`.
- Square corners, ruled rows and a real table for the shuttle times. No card grids.
- Motion: the hero photo settles and its text arrives in sequence on load, then content reveals as you scroll.
  `src/components/ScrollReveal.tsx` (mounted once in the layout) drives it and the rules are in `globals.css`:
  `data-reveal="rise"` / `"slide"` for text, `data-reveal-group` for staggered lists and columns,
  `<Photo>` for photos (a curtain lifts off), `<ParallaxFrame>` for wide photos that also drift on scroll,
  and `data-delay="1|2|3"` to hold something back a beat. Everything is visible without JavaScript or
  with reduced motion. Do not put `clip-path` on an element that is observed for reveal: a fully clipped
  element never counts as visible, so it would never reveal.
- Shared button and link styles are in `src/lib/ui.ts`.

## Next.js notes

`cacheComponents` is on, so components must not read the current time (`new Date()`) during
prerender. The build fails if they do.
