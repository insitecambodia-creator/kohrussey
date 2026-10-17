// Central site configuration. Contact details come from the current kohrusseyresort.com.

export const site = {
  name: "Koh Russey Resort",
  tagline: "A Private Island Resort in Cambodia",
  title: "Private Island Resort in Cambodia",
  description:
    "Discover Koh Russey, a secluded private island resort in Cambodia near Sihanoukville. Enjoy beachfront villas, pristine beaches and peaceful island stays.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.kohrusseyresort.com",
  contact: {
    email: "reservations@kohrusseyresort.com",
    phone: "+855 81 222 921",
    whatsapp: "85581222921", // digits only, no "+"
    telegram: "https://t.me/Kohrusseyresortteam",
    resortAddress:
      "Bamboo Island, Ong Village, Prey Nup District, Ream Commune, Preah Sihanouk 18108, Cambodia",
    loungeName: "Ream Lounge",
    loungeAddress: "Ream Commune, Preah Sihanouk, Cambodia",
    mapUrl: "https://maps.app.goo.gl/RUkioEgijbeLmdBv5",
  },
  social: {
    facebook: "https://www.facebook.com/kohrusseyresort",
    instagram: "https://www.instagram.com/kohrusseyresort/",
    tiktok: "https://www.tiktok.com/@kohrusseyresort",
  },
  // Exely booking-engine integration, copied from the current site's booking page.
  exely: {
    contextId: "BE-INT-kohrusseyresort-com_2026-02-20",
    language: "en",
    hosts: ["kh-ibe.hopenapi.com", "ibe.hopenapi.com", "ibe.behopenapi.com"],
  },
  allowIndexing: process.env.NEXT_PUBLIC_ALLOW_INDEXING === "true",
} as const;

export const nav = [
  { href: "/villas", label: "Villas" },
  { href: "/restaurants", label: "Restaurants" },
  { href: "/activities", label: "Activities" },
  { href: "/weddings", label: "Weddings" },
  { href: "/offers", label: "Offers" },
  { href: "/getting-here", label: "Getting here" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
] as const;

/** Booking is handled by the Exely booking engine, embedded on this page. */
export function bookingUrl(): string {
  return "/booking";
}

export function whatsappLink(message = "Hello! I'd like to ask about staying at Koh Russey Resort."): string {
  return `https://wa.me/${site.contact.whatsapp}?text=${encodeURIComponent(message)}`;
}

export function telLink(): string {
  return `tel:${site.contact.phone.replace(/\s/g, "")}`;
}
