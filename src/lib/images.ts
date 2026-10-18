import poolMorning from "@/assets/images/pool-morning.webp";
import girlPool from "@/assets/images/girl-pool.webp";
import oceanfrontDreams from "@/assets/images/oceanfront-dreams.webp";
import massageBeach1 from "@/assets/images/massage-beach-1.webp";
import massageBeach2 from "@/assets/images/massage-beach-2.webp";
import snorkelingAerial from "@/assets/images/snorkeling-aerial.webp";
import snorkelingGear from "@/assets/images/snorkeling-gear.webp";
import snorkelingBay from "@/assets/images/snorkeling-bay.webp";
import snorkelingGuide from "@/assets/images/snorkeling-guide.webp";
import corporateBeach from "@/assets/images/corporate-beach-activity.webp";
import retreatLawn from "@/assets/images/retreat-lawn.webp";
import mapResort from "@/assets/images/map-resort.webp";
import horizonRestaurant from "@/assets/images/horizon-restaurant.jpg";

export const images = {
  poolMorning: {
    src: poolMorning,
    alt: "A guest standing at the edge of the resort's pool, with palm trees and the beach behind",
  },
  girlPool: {
    src: girlPool,
    alt: "A guest sitting by the pool with the beach and palm trees in the distance",
  },
  oceanfrontDreams: {
    src: oceanfrontDreams,
    alt: "A smiling guest in a straw hat relaxing on a sun lounger by the pool",
  },
  massageBeach1: {
    src: massageBeach1,
    alt: "A massage on the lawn by the beach, under a palm tree",
  },
  massageBeach2: {
    src: massageBeach2,
    alt: "A therapist giving a massage on a lawn beside a villa",
  },
  snorkelingAerial: {
    src: snorkelingAerial,
    alt: "Aerial view of two snorkelers swimming over coral in deep blue water",
  },
  snorkelingGear: {
    src: snorkelingGear,
    alt: "A snorkel mask and fins resting on the sand",
  },
  snorkelingBay: {
    src: snorkelingBay,
    alt: "Three snorkelers in red life jackets floating in the bay",
  },
  snorkelingGuide: {
    src: snorkelingGuide,
    alt: "Snorkeling guidelines poster: help us protect our reef and marine life. Never stand on or touch coral, avoid disturbing seagrass, do not chase or feed marine animals, keep a respectful distance from turtles, rays and dolphins, do not collect coral or shells, use an experienced local operator for remote sites, and follow safety instructions.",
  },
  corporateBeach: {
    src: corporateBeach,
    alt: "A team playing a relay game on the beach at sunset",
  },
  retreatLawn: {
    src: retreatLawn,
    alt: "Aerial view of a group gathered on the lawn beside the pool during a retreat",
  },
  horizonRestaurant: {
    src: horizonRestaurant,
    alt: "The Horizon Restaurant at dusk: long wooden tables, a row of black pendant lights and open sides looking out to the trees and the sea",
  },
  mapResort: {
    src: mapResort,
    alt: "Aerial view of the island and the bay where the resort sits",
  },
} as const;

/** Photos shown in the gallery, in display order. */
export const gallery = [
  images.poolMorning,
  images.oceanfrontDreams,
  images.massageBeach1,
  images.horizonRestaurant,
  images.snorkelingAerial,
  images.girlPool,
  images.massageBeach2,
  images.retreatLawn,
  images.snorkelingBay,
  images.corporateBeach,
  images.snorkelingGear,
];
