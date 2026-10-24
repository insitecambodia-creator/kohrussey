// Copied from the current kohrusseyresort.com FAQ page. Typos and grammar slips were corrected; see
// docs/content-fixes.md. Links inside the answers are written as [label](address).

export type FaqItem = {
  question: string;
  answer: string[];
  /** A list that follows the answer. */
  list?: string[];
  /** A button that follows the answer. */
  button?: { label: string; href: string };
};

export type FaqGroup = { title: string; items: FaqItem[] };

export const faqPage = {
  metaTitle: "FAQ - Frequently Asked Questions about Koh Russey Resort",
  description:
    "This page gathered the most frequently asked questions - FAQ - about our lovely property. Koh Russey on a private island.",
  title: "Frequently Asked Questions",
  welcome: "Welcome to Koh Russey Resort’s FAQ",
};

export const faqGroups: FaqGroup[] = [
  {
    title: "General Questions",
    items: [
      {
        question: "What is Koh Russey Resort?",
        answer: [
          "Koh Russey Resort is a luxurious beachfront destination located on Koh Russey Island in Cambodia. We offer a serene escape with stunning villas, exceptional dining, and a range of activities designed for relaxation and adventure.",
        ],
      },
      {
        question: "What does “Koh Russey” mean?",
        answer: [
          "Koh is the phonetic transcription of a Khmer word for island, as you will see in Koh Rong, Koh Kong or the famous Koh Lanta. Thailand will also share its similar sounding word (ko) as in Ko Samui. Russey simply means bamboo, so one would suspect that this small island was well known for its bamboo plantation.",
        ],
      },
      {
        question: "Is Koh Russey Resort affiliated with Alila Villas?",
        answer: [
          "No, Koh Russey Resort is no longer affiliated with the Alila Villas brand. We have transitioned to operate independently, providing our guests with a unique experience tailored to our vision of luxury and hospitality.",
        ],
      },
      {
        question: "Are there other resorts on Bamboo Island?",
        answer: [
          "Yes, Bamboo Island is home to two resorts, including [Jati Resort](https://jati-resort.com/), which offers its own unique style and services. While Koh Russey Resort provides a distinctive experience with luxurious accommodations and a serene environment tailored to relaxation and privacy, Jati Resort caters to a different clientele with its particular charm. Each resort on the island has its own appeal, giving visitors a range of options to explore during their stay.",
        ],
      },
      {
        question: "Is Koh Russey on Koh Rong?",
        answer: [
          "Koh Rong is an island, and is most likely becoming one of Cambodia’s most notorious islands; yet, Koh Rong is also an archipelago, which comprises Koh Rong Samlem and Koh Russey. So we are not on the Koh Rong Island, but we do belong to the Koh Rong Archipelago…",
        ],
      },
      {
        question: "What is the closest Airport?",
        answer: [
          "We are about 30 minutes drive from the [Sihanoukville International Airport](https://kos.cambodia-airports.aero/). The airport code is KOS (as in “Kompong Saom” the alternate and former name for Sihanoukville)",
        ],
      },
    ],
  },
  {
    title: "Accommodation",
    items: [
      {
        question: "What types of accommodations are available?",
        answer: [
          "We offer two (2) main types of accommodation: the Pavilions and the Villas. Pavilions are rooms either on the ground floor or first floor, facing the garden or the ocean. On the other hand, villas are a more private option, each coming with its own private swimming pool. Villas come in three different sizes: 1, 2 or 4 bedrooms.",
        ],
        button: { label: "Choose your accommodation here", href: "/villas/" },
      },
      {
        question: "How can I make a reservation?",
        answer: [
          "Reservations can be made in many different ways. You can book on our website or through our partner, or by contacting our reservations team via email or phone. We recommend booking in advance to secure your preferred dates.",
        ],
      },
    ],
  },
  {
    title: "Amenities and Services",
    items: [
      {
        question: "What amenities does the resort offer?",
        answer: ["Koh Russey Resort features a range of amenities including:"],
        list: [
          "Infinity pool",
          "Spa and wellness center",
          "On-site dining options",
          "Water sports activities",
          "Fitness center",
          "Complimentary Wi-Fi",
        ],
      },
      {
        question: "Is there a shop or minimart on the island?",
        answer: [
          "At this time, we do not boast any mart or shop. However, you can acquire a few items and souvenirs from our reception. But we do not have any food products (Noodles, Snacks, etc…).",
          "Also, for safety reasons only, we do not allow outside food on the premises.",
        ],
      },
      {
        question: "Are there dining options available at the resort?",
        answer: [
          "Yes! At the moment, we have two dining venues offering a variety of cuisines, from local Cambodian dishes to international favorites. Our chefs use fresh, locally sourced ingredients to create memorable dining experiences.",
        ],
        button: { label: "Restaurants", href: "/restaurants/" },
      },
      {
        question: "Does the hotel provide laundry service?",
        answer: [
          "Yes! We sure do! In every room and villa, you will find a laundry bag and a simple form to list your items. In normal situations, we will give you your clean clothes the next day, about 24h. We cannot offer express service at this time.",
        ],
      },
      {
        question: "Can we fly a personal drone over the island?",
        answer: [
          "The first answer is yes, you may fly your drone over the island to film or take pictures of our beautiful setting. However, we will kindly ask you to respect everyone’s privacy by not flying and filming over private villas with guests.",
          "Also, you will need to limit your flights over our resort and our side of the island. The Jati Resort is off limits.",
        ],
      },
    ],
  },
  {
    title: "Activities",
    items: [
      {
        question: "What activities are available at Koh Russey Resort?",
        answer: ["Guests can enjoy a variety of activities including:"],
        list: [
          "Snorkeling and diving",
          "Kayaking and paddleboarding",
          "Guided island tours",
          "Yoga classes",
          "Cultural experiences",
        ],
        button: { label: "All activities", href: "/activities/" },
      },
      {
        question: "Are activities included in the room fee?",
        answer: [
          "All the activities that do not require a motorized or electrical device, or an instructor, are free of charge. They are available at your convenience.",
        ],
      },
    ],
  },
  {
    title: "Policies",
    items: [
      {
        question: "What is your cancellation policy?",
        answer: [
          "Our cancellation policy varies depending on the rate plan selected at the time of booking. Please refer to your confirmation email or contact our reservations team for specific details.",
        ],
      },
      {
        question: "Is there a minimum age requirement for guests?",
        answer: [
          "Koh Russey Resort welcomes guests of all ages; however, some areas and activities may have age restrictions for safety reasons.",
        ],
      },
    ],
  },
  {
    title: "Others",
    items: [
      {
        question: "Do you provide transportation or shuttle to Koh Rong?",
        answer: [
          "This is something we had done in the past and we can reproduce. Our speed boat can take you and your party (a maximum of 20 guests) to Koh Rong – or Koh Rong Samlem for a fee of $990. It should take less than 40 minutes to reach the island.",
          "Alternatively, we can drop you at the Ream Station (18 min), then you take a taxi to the Koh Rong Pier (35 – 55 minutes depending on traffic), then a 30-minute speed boat to the island.",
        ],
        button: { label: "Map of the region", href: "/getting-here/" },
      },
    ],
  },
];
