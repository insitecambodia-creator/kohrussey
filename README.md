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
- Photos and logo. `ImagePlaceholder` marks each spot; swap it for `next/image` once the files are in `public/`
- Gallery
- The six blog articles
- Chinese and French versions (the current site has both)

## Indexing

The site is `noindex` with `Disallow: /` until `NEXT_PUBLIC_ALLOW_INDEXING=true`, so the redesign
cannot compete with the live site before launch.

## Next.js notes

`cacheComponents` is on, so components must not read the current time (`new Date()`) during
prerender. The build fails if they do.
