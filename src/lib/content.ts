// Content taken from the current kohrusseyresort.com homepage. Sections that only had a
// short summary there (villas, restaurants, activities, offers) carry just that
// summary until the full page copy is supplied.

export const introLead =
  "Koh Russey Resort is a luxury private island resort in Cambodia, offering secluded beachfront villas near Koh Rong.";

export const introRest =
  "Surrounded by pristine copper sand beaches and untouched tropical nature, it is one of the country’s most exclusive island escapes for romantic getaways, weddings, and private retreats.";

export const intro = `${introLead} ${introRest}`;

export const villas = {
  eyebrow: "Beach Accommodation",
  title: "Where Oceanfront Dreams Come Alive",
  body: "Each villa features a private pool, well-equipped interiors, and comfortable beds to ensure a peaceful and relaxing stay. With breathtaking views of the warm waters and sandy beaches just steps away, you’ll find the perfect balance of tranquility and sophistication.",
  types: [
    { slug: "garden-pavilion", name: "Garden Pavilion" },
    { slug: "ocean-pavilion", name: "Ocean Pavilion" },
    { slug: "beach-pavilion", name: "Beach Pavilion" },
    { slug: "beachfront-villas", name: "Beachfront Villas" },
  ],
};

export const dining = {
  title: "Fine Dining & Culinary Experiences in Cambodia",
  body: "Savor authentic Khmer flavors and international cuisine at Koh Russey Resort’s beachfront restaurants and bars, where every meal is crafted to perfection.",
};

export const activities = {
  title: "Island Experiences in Cambodia",
  body: "Discover Koh Russey Resort’s private-island activities, from snorkeling and paddleboarding to cultural tours and spa rituals, creating lasting memories in one of the best beach resorts in Cambodia.",
  items: ["Snorkeling", "Paddleboarding", "Cultural tours", "Spa rituals"],
};

export const spa = {
  title: "A Journey Within: Island Spa & Wellness",
  body: "Unwind together with signature couples’ massages, healing therapies, and yoga sessions, the perfect complement to weddings, honeymoons, and romantic escapes.",
};

export const allInclusive = {
  eyebrow: "Best offer",
  title: "All-Inclusive Villa Experience",
  body: "Experience the ultimate finery with our exclusive All-Inclusive Villa Offer at Koh Russey Resort. Book your private villa and enjoy unlimited meals, drinks, and minibar treats, all included. Escape to a worry-free paradise where indulgence meets relaxation, with every gourmet experience covered. Perfect for couples, families, or anyone seeking a premium getaway!",
};

export const location = {
  title: "Off the coast of Sihanoukville",
  body: "Koh Russey is part of the stunning Koh Rong archipelago in Cambodia’s Gulf of Thailand. Just a short boat ride from the mainland, our island sits in a turquoise stretch of water surrounded by pristine beaches and lush tropical landscapes. Its peaceful setting offers the perfect balance: close enough to explore the beauty and culture of the Koh Rong islands, yet secluded enough to feel like your own private paradise.",
};

export const shuttles = {
  note: "For flexibility, we offer transfers at your preferred time for an additional $80 per way.",
  seasons: [
    {
      name: "Green Season",
      dates: "1st May to 31st October",
      groups: [
        { label: "Weekdays (Monday to Thursday)", fromRream: ["14h00"], fromResort: ["11h00"] },
        { label: "Weekends (Friday to Sunday)", fromRream: ["13h30", "14h30"], fromResort: ["10h00", "11h30"] },
      ],
    },
    {
      name: "High Season",
      dates: "1st November to 30th April",
      groups: [
        { label: "Every day", fromRream: ["13h30", "14h30"], fromResort: ["10h00", "11h30"] },
      ],
    },
  ],
};

// Short excerpts from guest reviews shown on the current site.
export const reviews = [
  {
    author: "Simon E.",
    title: "Tranquil haven",
    quote:
      "It’s a tranquil haven with beautiful architecture and views, wonderful staff, an exceptionally large and gorgeous pool, good food (esp breakfast) etc. etc. 100% recommendable.",
  },
  {
    author: "Malcolm Wilkes",
    title: "So pleased",
    quote:
      "Bamboo island is tiny which means you have seclusion with Koh Russey resort being in a sheltered bay with a nice sandy beach.",
  },
  {
    author: "Dorothy Srun",
    title: "Gorgeous Resort",
    quote:
      "Gorgeous resort with inspiring architecture throughout. Saw lots of tropical fish, cuttlefish, a nudibranch and multiple octopus when snorkeling!",
  },
];

// Copied from the current kohrusseyresort.com Contact Us and Promotions and Special Offers pages.
// Typos were corrected; see docs/content-fixes.md.
export const contactPage = {
  metaTitle: "Contact Us - Koh Russey Resort",
  description:
    "Contact Koh Russey Resort today to book your dream vacation. Our friendly staff is here to help you plan your stay and answer any questions you may have. Whether you\u2019re looking for a romantic getaway or a fun family adventure, we have the perfect accommodations and activities for you. Contact us now!",
  title: "Contact Us",
  tagline: "Just A Short Ride Off The Southern Coastal Area Of Cambodia",
  address: "Koh Russey Resort, Bamboo Island, Ong Village, Prey Nup District, Ream Commune, Preah Sihanouk 18108, Cambodia",
  writeLabel: "Write to us",
  form: { subject: "Contact enquiry" },
};

export const promotionsPage = {
  metaTitle: "Promotions and Special Offers - Koh Russey Resort",
  description:
    "There are no active promotions at this time. Nonetheless, we strongly invite you to check with us for any surprise promotions or flash offers.",
  title: "Promotions and Special Offers",
  heading: "There are no active promotions at this time",
  body: "Nonetheless, we strongly invite you to check with us for any surprise promotions or flash offers",
  telegramLabel: "Chat on Telegram",
  whatsappLabel: "Chat on WhatsApp",
};
