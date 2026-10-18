// Pavilions and villas, copied word for word from the current kohrusseyresort.com
// "Villas & Pavilions" page (private-beachfront-residence). Spelling is as on the current site;
// see README for likely typos.

export type Accommodation = {
  /** Anchor for links such as /villas#garden-pavilion. */
  slug: string;
  name: string;
  /** Short facts line, where the page had one. */
  spec?: string;
  paragraphs: string[];
  /** Price line, where the page had one. */
  price?: string;
};

export const accommodationsIntro = {
  title: "Villas & Pavilions",
  kicker: "Private beachfront residence",
  metaTitle: "Beachfront villas in Cambodia with private pool",
  description:
    "Private beachfront residence at Koh Russey Resort. Stay in pavilions and villas with stunning ocean views, private pools, and premium amenities.",
};

export const accommodations: Accommodation[] = [
  {
    "slug": "garden-pavilion",
    "name": "Garden Pavilion",
    "paragraphs": [
      "Our 50sqm Garden Pavilion offers a king-size bed, a private terrace with lush garden views, and a spacious bathroom with a rainfall shower and/or an outdoor bathtub. Enjoy the tranquility of nature from your furnished terrace."
    ]
  },
  {
    "slug": "ocean-pavilion",
    "name": "Ocean Pavilion",
    "paragraphs": [
      "Overlooking the North-West Ocean, our 50sqm Ocean Pavilion offers a king-size bed, a private balcony, and a bathroom with a rainfall shower. Relax on the furnished balcony while enjoying the sound of the waves."
    ]
  },
  {
    "slug": "beach-pavilion",
    "name": "Beach Pavilion",
    "paragraphs": [
      "Just a few steps away from the beach, our 50sqm Beach Pavilion features a king-size bed, a private terrace with ocean views, and a bathroom with a rainfall shower and outdoor tub. The minimalist design blends seamlessly with the resort’s vegetation."
    ]
  },
  {
    "slug": "1-bedroom-garden-pool-villa",
    "name": "1- Bedroom Garden Pool Villa",
    "paragraphs": [
      "Experience sophistication and tranquility in our 110sqm Garden Pool Villa, designed with a modern minimalist style that floods the space with natural light. The villa features a king-size bed and a built-in sofa bed, ideal for families or friends. Enjoy uninterrupted views of your private 15 sqm pool and the lush resort grounds.",
      "Unwind in the poolside cabana, complete with a sofa and dining area, perfect for relaxation. The expansive garden offers a serene setting or space for outdoor activities."
    ]
  },
  {
    "slug": "1-bedroom-beach-pool-villa",
    "name": "1-Bedroom Beach Pool Villa",
    "paragraphs": [
      "Experience the perfect blend of comfort and finery in our 1-Bedroom Beach Pool Villa, featuring 110sqm of elegant space designed for up to 2 guests. With a king-size bed, a built-in sofa bed, and a 15sqm private pool, this villa offers a serene escape for couples or small families. Enjoy the cabana or take a leisurely stroll through the lush garden leading directly to the beach, making it an ideal choice for a relaxing getaway."
    ]
  },
  {
    "slug": "2-bedroom-beach-pool-villa",
    "name": "2-Bedroom Beach Pool Villa",
    "paragraphs": [
      "Discover spacious luxury in our 2-Bedroom Beach Pool Villa, spanning 180sqm and accommodating up to 4 guests. This villa features two separate bedrooms, a living room, dining area, kitchenette, and a private pool, offering the perfect setting for families to relax, bond, and enjoy outdoor activities together. Ideal for those seeking comfort and privacy."
    ]
  },
  {
    "slug": "beach-pool-villa",
    "name": "Beach Pool Villa",
    "spec": "500 sqm | 3 bedrooms | 6 guests",
    "paragraphs": [
      "It has 3 bedrooms separated by a dining area and a kitchen with butler pantry. The open concept design gives the guests a view of the private pool, the lush garden and the beach. It has a beach-front dining deck where guests can dine together making the place a perfect hideaway.",
      "Spend time with your family and friends at the poolside lounge.",
      "After spending quality time with your loved ones in the spacious living and dining area, relax in the comfort of your bedroom with a stunning beach view."
    ],
    "price": "from $1,230 per night"
  },
  {
    "slug": "4-bedroom-beach-pool-villa",
    "name": "4-Bedroom Beach Pool Villa",
    "paragraphs": [
      "Indulge in expansive beachfront luxury with our 4-Bedroom Beach Pool Villa, offering 560sqm of elegant living space for up to 8 guests. This villa includes four bedrooms, a spacious living and dining area, a fully equipped kitchen with a butler pantry, and a stunning beachfront dining deck, perfect for larger groups seeking ample room to gather and enjoy the breathtaking beach views. Ideal for family reunions or group getaways."
    ]
  }
];

/** Closing text at the bottom of the page. */
export const accommodationsClosing: string[] = [
  "Escape to the breathtaking island paradise of Koh Russey Resort, where powder-soft beaches meet crystal-clear turquoise waters. Whether you’re up for a peaceful retreat or an adventurous getaway, our lush tropical landscapes invite you to explore, relax, and recharge at your own pace.",
  "Stay in our beautifully designed pavilions and villas, each offering panoramic ocean views, private pools, and all the comforts you need for an unforgettable stay. Savor mouthwatering dishes crafted from the freshest local ingredients, enjoy soothing spa treatments, or dive into fun activities like snorkeling, kayaking, and sunset cruises.",
  "Our friendly team is here to make every moment special, offering personalized service that ensures your stay is seamless and stress-free. Whether you’re traveling as a couple, with family, or on a solo adventure, Koh Russey Resort promises a perfect mix of relaxation, adventure, and lasting memories.",
  "Come experience island life at its finest—we can’t wait to welcome you!"
];
