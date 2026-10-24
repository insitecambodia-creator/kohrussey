// Copied from the current kohrusseyresort.com "How to get to Koh Russey Island" page (how-to-get-to-koh-russey-island).
// Typos were corrected; see docs/content-fixes.md.
// Left out on purpose: the "From Sihanoukville / From Sihanoukville Airport / From KOS Airport / From Phnom Penh Airport"
// accordion (it is hidden on every screen size on the old page, and two of its four items are empty), and the embedded
// Google map (the "The map" button opens the same place).

export const gettingHerePage = {
  metaTitle: "How to get to Koh Russey Island",
  description:
    "Learn how to get to Koh Russey Island, a private island resort in Cambodia near Koh Rong, with boat and transfer options from Sihanoukville.",
  title: "How to get here",
  intro: "Koh Russey, aka Bamboo Island, is accessible by sea or air.",
  lounge: {
    title: "Our Ream Lounge",
    lead: "Your journey begins at Ream Lounge, our pier on the mainland.",
    body: "Here, our receptionist will greet you with refreshments and hot or cold towels while our crew handles your luggage. The air-conditioned lounge offers comfortable seating, tables, and restrooms.",
    mapLabel: "The map",
    mapUrl: "https://maps.app.goo.gl/wNosMV39eBvTNDfy7",
  },
  schedules: {
    title: "Schedules",
    lead: "Speedboat departs from Ream Lounge at:",
    times: ["13h30", "14h30"],
    note: "For flexibility, we offer transfers at your preferred time for an additional $80 per way.",
    /** The words in bold are `strong`. */
    notice: {
      before: "It is important to note that there are ",
      strong: "no public ferries",
      after:
        " nor public shuttles to the island of Koh Russey. This island is private and scheduled shared round-trip speedboat transfers are directly operated by the resort.",
    },
  },
  helicopter: {
    title: "Arrive in Style: Helicopter Transfers to Koh Russey Island",
    body: "For the ultimate experience, guests can now arrive at Koh Russey Resort by private helicopter. Skip the speedboat and enjoy an aerial journey over Cambodia’s stunning coastline before landing directly on our private island. This truly exclusive helicopter transfer to Bamboo Island offers a seamless and scenic alternative for travelers seeking convenience, privacy, and unparalleled views. Whether you’re flying in from Phnom Penh, Siem Reap, or an international destination, elevate your journey and make your arrival as unforgettable as your stay.",
    label: "Helistar",
    href: "https://helistarcambodia.com/",
  },
};
