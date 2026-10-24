// The three activity pages under Activities, copied from the current kohrusseyresort.com pages
// (activities-on-the-island/khmer-cooking-class, /kayaking and /snorkeling).
// Typos were corrected; see docs/content-fixes.md. Words written as **this** are bold.

export const cookingClassPage = {
  metaTitle: "Khmer Cooking Class - Koh Russey Resort",
  description:
    "Your class covers a hands-on introduction to Cambodia’s signature flavors, guided step-by-step by our Executive Chef.",
  title: "Khmer Cooking Class",
  subtitle: "on a private island, with a talented Chef",
  intro:
    "Your class covers a hands-on introduction to Cambodia’s signature flavors*, guided step-by-step by our Executive Chef:",
  dishes: [
    { name: "Fish Amok", text: ", Cambodia’s national dish, a steamed coconut curry with kroeung (Khmer spice paste) and fresh fish" },
    { name: "Lok Lak", text: ", stir-fried marinated beef served with a lime-pepper dipping sauce, a Khmer classic" },
    {
      name: "Khmer Red Curry",
      text: " (Kari Sach Moan), a milder, coconut-based curry showing the French-Khmer influence on the cuisine",
    },
    { name: "Nom Banh Chok", text: ": Cambodia’s traditional rice noodle dish, if time and market ingredients allow" },
  ],
  body: [
    "Step into our main restaurant kitchen and cook alongside our Executive Chef, who walks you through the ingredients and techniques behind **classic Khmer dishes**, the spice blends, the balance of sour-sweet-salty flavor, and the local produce that defines **Cambodian cooking**. It’s hands-on from the first chop.",
    "The best part comes after: enjoy the dishes you’ve just prepared in the setting of your choice, whether that’s a table at the restaurant, your villa terrace, or a private spot on the beach. A memorable, tactile way to spend a few hours that goes deeper than a normal meal.",
  ],
  footnote: "(*) Of course the recipes are entirely at the Chef’s discretion, as we need to work with available products from the market.",
};

export const kayakingPage = {
  metaTitle: "Kayaking at Koh Russey, Private Island Kayaking, Cambodia",
  description:
    "Paddle turquoise bays around a private Cambodian island. Guided or self-led kayak sessions at Koh Russey Resort, steps from your villa.",
  title: "Kayak Your Own Stretch of the Gulf of Thailand",
  lead: "No crowds, no schedules, just you, a paddle, and a private island coastline to explore.",
  heading: "The perfect morning routine",
  body: [
    "Launch straight from the beach in front of your villa and set your own pace along Koh Russey’s copper-sand coastline. Morning sessions bring flat, glassy water and soft light for photos; late afternoon paddles catch the island’s coves in gold. Follow the shoreline toward hidden inlets, circle out to open water, or simply drift and watch the resort recede into palm trees behind you.",
    "Kayaks are available for solo paddles or in pairs, a quiet, active way to start a honeymoon morning together before the island wakes up. No experience needed; our team will get you oriented in a couple of minutes on the sand.",
  ],
  form: {
    heading: "Enter your name here so we can prepare your kayak, when you arrive",
    subject: "Kayak preparation",
    label: "Name",
    submit: "Send",
  },
};

export const snorkelingPage = {
  metaTitle: "Snorkeling at Koh Russey — Private Island Reef, Cambodia",
  description:
    "Snorkel vibrant coral reefs just off Koh Russey’s shore. Equipment provided, guided sessions available. A private-island reef, minutes from your villa.",
  title: "A Coral Reef Right Off Your Beach",
  lead: "Slip into the water and discover the marine life that surrounds Koh Russey.",
  lead2: "No boat trip required.",
  body: [
    "Koh Russey’s reef sits close enough to shore that you can be snorkeling within minutes of leaving your villa. Expect schools of reef fish, soft coral formations, and (depending on season) the calm, current-free water that makes this stretch of the Gulf of Thailand easy for beginners and enjoyable for experienced snorkelers alike.",
    "Mask, snorkel, and fins are provided at no extra charge for guests, and our team can point you toward the best entry points depending on tide and time of day. Prefer to go further out? Ask about combining snorkeling with an island-hopping boat trip to reach deeper reef sites nearby.",
  ],
  readMore: {
    label: "Read more about snorkeling in Cambodia",
    href: "/blog/snorkeling-in-cambodia-discover-an-underwater-world-beyond-the-beaches/",
  },
  telegramLabel: "Chat now on Telegram",
};
