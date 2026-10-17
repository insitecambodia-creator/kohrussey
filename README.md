# Koh Russey Resort

Website for Koh Russey Resort, built with Next.js (App Router), TypeScript and Tailwind CSS.
Bookings are handled by the third-party **Exely** booking engine; this site links guests to it.

## Getting started

```bash
npm install
cp .env.example .env.local
npm run dev        # http://localhost:3000
```

| Script          | Purpose           |
| --------------- | ----------------- |
| `npm run dev`   | Development server |
| `npm run lint`  | ESLint            |
| `npm run build` | Production build  |

## Exely booking

Set `NEXT_PUBLIC_EXELY_BOOKING_URL` to the property's hosted Exely booking page. Every
"Book now" / "Check availability" button (`src/components/BookButton.tsx`) opens it in a new tab.
Until it is set, the buttons fall back to the Contact page.

If Exely supplies an embeddable widget snippet instead, it can be added to a dedicated page using
`next/script`; that is not wired up yet because the snippet has not been provided.

## Placeholder content

The first version uses sample content and photo placeholders. Replace before launch:

- `src/lib/site.ts`: contact details (email, phone, WhatsApp, address)
- `src/lib/content.ts`: rooms, dining, activities, highlights
- `src/components/ImagePlaceholder.tsx`: swap for `next/image` once photos are in `public/`
- `src/app/location/page.tsx`: directions and map

## Indexing

The site is `noindex` with `Disallow: /` until `NEXT_PUBLIC_ALLOW_INDEXING=true`, so the redesign
cannot compete with the live site before launch.
