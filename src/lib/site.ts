// Central site configuration. Everything marked PLACEHOLDER must be replaced with
// the resort's real details before launch.

export const site = {
  name: "Koh Russey Resort",
  tagline: "Island escape on the Cambodian coast",
  description:
    "Koh Russey Resort: beachside stays, island dining and unhurried days by the sea in Cambodia.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.kohrusseyresort.com",
  // PLACEHOLDER contact details
  contact: {
    email: "info@example.com",
    phone: "+855 00 000 000",
    whatsapp: "85500000000", // digits only, no "+"
    address: "Koh Russey, Cambodia",
  },
  allowIndexing: process.env.NEXT_PUBLIC_ALLOW_INDEXING === "true",
} as const;

export const nav = [
  { href: "/rooms", label: "Rooms" },
  { href: "/experiences", label: "Dining & Activities" },
  { href: "/gallery", label: "Gallery" },
  { href: "/location", label: "Getting here" },
  { href: "/contact", label: "Contact" },
] as const;

/**
 * Exely booking engine. Booking is handled entirely by Exely; the site only links
 * to it. Set NEXT_PUBLIC_EXELY_BOOKING_URL to the hosted booking page for the
 * property. If it is unset, booking buttons fall back to the contact page.
 */
export function bookingUrl(): string {
  return process.env.NEXT_PUBLIC_EXELY_BOOKING_URL || "/contact";
}

export function isBookingExternal(): boolean {
  return /^https?:\/\//.test(bookingUrl());
}

export function whatsappLink(message = "Hello! I'd like to ask about staying at Koh Russey Resort."): string {
  return `https://wa.me/${site.contact.whatsapp}?text=${encodeURIComponent(message)}`;
}
