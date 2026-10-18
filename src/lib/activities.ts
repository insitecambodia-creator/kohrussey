// Activities page, copied word for word from the current kohrusseyresort.com
// "activities-on-the-island" page. Typos in the original (missing spaces and
// the like) were corrected; see docs/content-fixes.md.
//
// Left out on purpose: the "Download the catalog" form (needs a backend and the PDF) and the
// Cooking Class, Kayaking and Snorkeling buttons (their pages are not built yet).

export type ActivityBlock = {
  /** Anchor, for example /activities#khmer-cooking-class. */
  id: string;
  title: string;
  /** Opening hours, duration and minimum guests, where the page gave them. */
  meta?: string[];
  body: string;
  link?: { label: string; href: string };
};

export type FeaturedActivity = {
  title: string;
  body: string;
  /** A duration such as "3 Hours", or "Fun Dive" for diving. */
  label: string;
};

export const activitiesPage = {
  title: "Luxury Island Activities",
  subtitle: "Koh Rong, Cambodia | Koh Russey Resort",
  metaTitle: "Discover fun activities at Koh Russey Resort",
  description:
    "Discover fun activities at Koh Russey Resort—from water sports to island tours and cultural experiences. Perfect for all ages. Book now!",
  intro: {
    heading: "At Koh Russey Resort",
    lead: "we believe in creating unforgettable moments and providing you with exceptional experiences.",
    invite: "Join us on this journey of discovery and adventure during your stay with us.",
    note: "Activities are subject to charge",
  },
};

export const activityBlocks: ActivityBlock[] = [
  {
    id: "spa",
    title: "Spa",
    meta: ["Opens daily from 9:00 am to 9:00 pm"],
    body: "The spa is a blissful sanctuary with five double treatment rooms dedicated to your holistic well-being. Pamper yourself with your friends from head to toe with an array of relaxing treatments that include massages, revitalizing facials and rejuvenating body scrubs.",
    link: {
      label: "Read More",
      href: "/spa",
    },
  },
  {
    id: "wellness",
    title: "Wellness",
    body: "Enhance your fitness at our gym with a range of equipment tailored for weight training and free weights, or rejuvenate your spirit through yoga sessions.",
  },
  {
    id: "khmer-cooking-class",
    title: "Khmer Cooking Class",
    meta: ["2 hours | Minimum 2 guests"],
    body: "Uncover the secrets of authentic Khmer cuisine in a cooking class that will introduce you to local ingredients, basic recipes and traditional dishes. Head into our main restaurant where our Executive Chef will be your guide, sharing details of the spices, flavors and cooking techniques as you learn how to cook some local dishes. Then comes the most gratifying part – enjoying the food you have just prepared in the location of your choice.",
  },
  {
    id: "resort-activities",
    title: "Resort activities",
    body: "The breathtaking 1.2 km copper sand beach and our location let you enjoy any of our island activities: Kayaking, stand-up paddle boarding, snorkeling, fishing, island hopping, beach picnic, badminton, beach tennis, beach volley, pétanque, mountain biking, sunset cruise, cinema under the stars and so much more…",
  },
  {
    id: "pepper-delights",
    title: "Pepper delights",
    meta: ["8 hours | Minimum 2 guests"],
    body: "The region of Kampot is famed for its pepper. The mineral-rich soil and high-elevation areas near Kampot and Kep are perfect for its production. A road trip will take you past bright green rice fields and wooden houses before driving along the sleepy banks of the Brateak Krola Lake. Tour one of the area’s most famous plantations, and enjoy a pepper-infused lunch overlooking the farm and the Bokor Mountain Range. On the way back, stop by the city of Kampot and take a stroll through the old town, infused with old-world French colonial charm.",
  },
];

export const activityRates = {
  title: "... and more!",
  body: "Our activities rates are intended per person, and do not include 10% VAT and service charge. Terms and conditions apply.",
};

export const featuredActivities = {
  title: "Most Sought-after Activities",
  intro:
    "The island and our beautiful resort is the utmost romantic spot to bring your better half. You can go one step beyond and turn this idyllic venue into the most romantic scene ever",
  items: [
    {
      title: "Tête à Tête",
      body: "Awaken your senses, and live a unique gastronomic experience while dipping your toes in the pool, in a romantic candle-lit setting, while the dusk leaves the space to a starlit sky.",
      label: "3 Hours",
    },
    {
      title: "Beach Picnic",
      body: "Steal away with your beloved to a secluded spot for an intimate picnic lunch, just the two of you and nature. Imagine… a blanket draped on the sand under the shade, close to the waves, with comfy cushions to lounge on, and small tables laden with gourmet picnic tailored specially for you. An unforgettably romantic experience.",
      label: "3 Hours",
    },
    {
      title: "Discover Koh Ta Kiev",
      body: "A short distance away from Koh Russey lies Koh Ta Kiev, an unspoiled island with a long copper-sand beach and dramatic headlands. Take off on our longtail boat, accompanied by your Leisure Concierge, boat captain and crew, and snorkel around the island, lounge on the beach or jump off the rock cliffs.",
      label: "4 Hours",
    },
    {
      title: "Sunset Cruise",
      body: "Experience a sunset like never before. Glide away on our speedboat to take in the magical vistas of the Gulf of Thailand as the sun makes its daily descent. Indulge in small canapés, and watch as the emerald waters surrounding our island and the azure sky above give way to one of nature’s finest light shows. Captain and crew are ready to serve your every whim and bring you back to our shores, when the night will have just begun.",
      label: "2 Hours",
    },
    {
      title: "Sun Downer",
      body: "As the sun vanishes behind the horizon, Koh Russey changes its setting. Lights are lit, nature’s sounds become more vibrating, and the sand turns gold. Share this emotion with your friends and the people you love, tasting a refreshing sangria prepared with fresh fruit and canapés. You’ll never forget our sunset aperitif!",
      label: "3 Hours",
    },
    {
      title: "Traditional Fishing",
      body: "Set off on one of our classic longtail boats and cast your line in the emerald blue waters of the Gulf of Thailand. Our captain and boat crew will direct you towards the more promising fishing spots, where barracuda, triggerfish and grouper are plenty.",
      label: "3 Hours",
    },
    {
      title: "Snorkeling by Boat",
      body: "Hop aboard one of our classic longtail boats and go snorkeling beyond our shores. Our Leisure Concierge will accompany you to one of our neighboring islands where you can experience the thrill of the open water.",
      label: "2 Hours",
    },
    {
      title: "Koh Ta Kiev Hiking",
      body: "Unspoiled nature of Koh Ta Kiev is so beautiful and diverse! From sandy landscapes with bushes and flowers to impenetrable jungles with lianas creating their complicated patterns that connect all trees around, rocky beaches, huge trees, fern fields – all this is waiting for you.",
      label: "4 Hours",
    },
    {
      title: "A River Runs Through",
      body: "Located 40 minutes away from our mainland base, the Ream National Park offers the unique opportunity to discover part of the local wildlife. Rare bird species, dense knotted mangroves, and shy monkeys can be spotted around the park.",
      label: "4 Hours",
    },
    {
      title: "Afternoon Tea",
      body: "After a day spent at the beach, recharge yourself with our delicious afternoon tea. Experience this timeless tradition in the relaxed and natural ambience of our Beach Shack, while looking at an infinite horizon.",
      label: "3 Hours",
    },
    {
      title: "Starlight Cinema",
      body: "A highly portable cinematic experience… a bamboo screen and mini-projector allow you to enjoy the movie of your choice under a starlit sky on the beach or poolside at your villa. The experience comes complete with a large bucket of popcorn, a choice of soft drinks, juices and beer, and a comfy set-up of blankets and pillows.",
      label: "2 Hours",
    },
    {
      title: "Starlight Dining",
      body: "Amid all the distractions of daily life, it can be hard to find time for romance. So while you are here, immersed in the gorgeous beauty and serenity of our beachside retreat, why not treat yourselves to a romantic dining experience for two served by your personal Host?",
      label: "3 Hours",
    },
    {
      title: "Pagoda Blessing",
      body: "Enjoy a spiritual encounter with a visit to the Ream Pagoda, which overlooks spectacular views of the coastal scenery. The Pagoda’s monks await you with a special Buddhist blessing… you can never have too much luck! You’ll also be invited to experience a traditional fortune-telling ritual where your question will be answered by excerpts from an ancient Khmer manuscript.",
      label: "2 Hours",
    },
    {
      title: "Bioluminescent Plankton",
      body: "Slip away from Koh Russey by longtail boat to neighboring Koh Ta Kiev. Snorkel with our Leisure Concierge as bioluminescent plankton light up all around you. The cells in these little organisms activate when there is motion around them, creating a beautiful marine light show.",
      label: "2 Hours",
    },
    {
      title: "Diving",
      body: "Have you ever wanted to try diving? Take your first breath underwater with a Discover Scuba Diving. Are you a certified diver? Explore the underwater side of Cambodia with us.",
      label: "Fun Dive",
    },
    {
      title: "SUP and Kayaks",
      body: "Paddleboard over calm, clear emerald blue waters. Glide away for a morning warmup or a late afternoon sunset experience and take in our long sweeping beach and the tropical forest perched above it. Or steal away from our private beach in our one- or two-person kayaks. Take in the dramatic views of our island from the quiet of the open sea before returning to our shores.",
      label: "3 Hours",
    },
  ],
};
