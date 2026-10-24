// Photos of the pavilions, villas, restaurants and the resort grounds, with their alt text.
// Which photos go with which villa or restaurant is set at the bottom of this file.
import type { ImageMetadata } from "astro";
import gardenPavilionTerrace from "@/assets/images/villas/garden-pavilion-terrace.webp";
import gardenPavilionEntrance from "@/assets/images/villas/garden-pavilion-entrance.webp";
import gardenPavilionExterior from "@/assets/images/villas/garden-pavilion-exterior.webp";
import gardenPavilionPath from "@/assets/images/villas/garden-pavilion-path.webp";
import oceanPavilionRoom from "@/assets/images/villas/ocean-pavilion-room.webp";
import oceanPavilionBalcony from "@/assets/images/villas/ocean-pavilion-balcony.webp";
import oceanPavilionEntrance from "@/assets/images/villas/ocean-pavilion-entrance.webp";
import oceanPavilionRoom2 from "@/assets/images/villas/ocean-pavilion-room-2.webp";
import oceanPavilionTerrace from "@/assets/images/villas/ocean-pavilion-terrace.webp";
import beachPavilionExterior from "@/assets/images/villas/beach-pavilion-exterior.webp";
import beachPavilionRoom from "@/assets/images/villas/beach-pavilion-room.webp";
import beachPavilionTerrace from "@/assets/images/villas/beach-pavilion-terrace.webp";
import gardenVillaPool from "@/assets/images/villas/garden-villa-pool.webp";
import gardenVillaBedroom from "@/assets/images/villas/garden-villa-bedroom.webp";
import gardenVillaLiving from "@/assets/images/villas/garden-villa-living.webp";
import gardenVillaBathroom from "@/assets/images/villas/garden-villa-bathroom.webp";
import gardenVillaBathtub from "@/assets/images/villas/garden-villa-bathtub.webp";
import beachVilla1Cabana from "@/assets/images/villas/beach-villa-1br-cabana.webp";
import beachVilla1Dusk from "@/assets/images/villas/beach-villa-1br-dusk.webp";
import beachVilla1Bedroom from "@/assets/images/villas/beach-villa-1br-bedroom.webp";
import beachVilla1Bedroom2 from "@/assets/images/villas/beach-villa-1br-bedroom-2.webp";
import beachVilla1Bathtub from "@/assets/images/villas/beach-villa-1br-bathtub.webp";
import beachVilla2Pool from "@/assets/images/villas/beach-villa-2br-pool.webp";
import beachVilla2Night from "@/assets/images/villas/beach-villa-2br-night.webp";
import beachVilla2Master from "@/assets/images/villas/beach-villa-2br-master.webp";
import beachVilla2MasterFront from "@/assets/images/villas/beach-villa-2br-master-front.webp";
import beachVilla4Pool from "@/assets/images/villas/beach-villa-4br-pool.webp";
import beachVilla4Garden from "@/assets/images/villas/beach-villa-4br-garden.webp";
import horizonPond from "@/assets/images/dining/horizon-pond.webp";
import horizonInterior from "@/assets/images/dining/horizon-interior.webp";
import horizonTableView from "@/assets/images/dining/horizon-table-view.webp";
import horizonLawn from "@/assets/images/dining/horizon-lawn.webp";
import pavilionOverPond from "@/assets/images/dining/pavilion-over-pond.webp";
import beachShackDay from "@/assets/images/dining/beach-shack-day.webp";
import beachShackDusk from "@/assets/images/dining/beach-shack-dusk.webp";
import beachDinnerCanopy from "@/assets/images/dining/beach-dinner-canopy.webp";
import beachDinnerTorches from "@/assets/images/dining/beach-dinner-torches.webp";
import arrivalPavilion from "@/assets/images/resort/arrival-pavilion-evening.webp";
import aerialDusk from "@/assets/images/resort/aerial-dusk.webp";
import pavilionsAmongTrees from "@/assets/images/resort/pavilions-among-trees.webp";
import gardenPath from "@/assets/images/resort/garden-path.webp";

/** `focus` is an optional Tailwind object-position class that sets which part shows when the photo is cropped. */
export type Photo = { src: ImageMetadata; alt: string; focus?: string };

export const photos = {
  gardenPavilionTerrace: { src: gardenPavilionTerrace, alt: "The Garden Pavilion’s covered terrace, with a round table, chairs and a sofa looking out to the trees" },
  gardenPavilionEntrance: { src: gardenPavilionEntrance, alt: "The path to the Garden Pavilion’s entrance, between tropical plants and dark timber walls" },
  gardenPavilionExterior: { src: gardenPavilionExterior, alt: "The Garden Pavilion at dusk, its lit windows glowing among the trees" },
  gardenPavilionPath: { src: gardenPavilionPath, alt: "A resort path past a stone wall and palm trees, leading to the pavilions" },
  oceanPavilionRoom: { src: oceanPavilionRoom, alt: "Ocean Pavilion bedroom: a king-size bed beside floor-to-ceiling glass, looking over the sea to a distant island" },
  oceanPavilionBalcony: { src: oceanPavilionBalcony, alt: "The Ocean Pavilion’s furnished balcony, with a sofa, a table and chairs above the sea" },
  oceanPavilionEntrance: { src: oceanPavilionEntrance, alt: "The entrance courtyard of the Ocean Pavilion, between palm trees and tropical plants" },
  oceanPavilionRoom2: { src: oceanPavilionRoom2, alt: "A pavilion bedroom with a king-size bed, a round table and a sliding glass wall opening to a view of the sea" },
  oceanPavilionTerrace: { src: oceanPavilionTerrace, alt: "A pavilion terrace with a wicker sofa, a round table and chairs, framed by timber screens, with the sea beyond" },
  beachPavilionExterior: { src: beachPavilionExterior, alt: "The Beach Pavilion among the trees, its glass front and timber screens half hidden by vegetation" },
  beachPavilionRoom: { src: beachPavilionRoom, alt: "Beach Pavilion bedroom with a king-size bed, a round table and sliding glass doors opening to the trees and the beach" },
  beachPavilionTerrace: { src: beachPavilionTerrace, alt: "The Beach Pavilion’s terrace, with a wicker sofa and a round table looking through the trees to the beach" },
  gardenVillaPool: { src: gardenVillaPool, alt: "The 1-Bedroom Garden Pool Villa across its private pool, with a covered cabana and the lawn beside it" },
  gardenVillaBedroom: { src: gardenVillaBedroom, alt: "Bedroom with a king-size bed and a timber headboard wall, opening through sliding glass doors to the garden" },
  gardenVillaLiving: { src: gardenVillaLiving, alt: "Living area with a round dining table and chairs, looking out to the pool, with the bedroom beyond" },
  gardenVillaBathroom: { src: gardenVillaBathroom, alt: "Bathroom with a long timber vanity, a built-in daybed and a glass door to the garden" },
  gardenVillaBathtub: { src: gardenVillaBathtub, alt: "A stone bathtub in front of a window onto the trees" },
  beachVilla1Cabana: { src: beachVilla1Cabana, alt: "The 1-Bedroom Beach Pool Villa’s private pool and timber cabana, with palm trees and the sea behind" },
  beachVilla1Dusk: { src: beachVilla1Dusk, alt: "The villa at dusk, its lit living area opening onto the private pool" },
  beachVilla1Bedroom: { src: beachVilla1Bedroom, alt: "Bedroom with a king-size bed and a timber headboard wall, open to the garden and the sea beyond" },
  beachVilla1Bedroom2: { src: beachVilla1Bedroom2, alt: "The bedroom from the other side, with an armchair and a view into the garden" },
  beachVilla1Bathtub: {
    src: beachVilla1Bathtub,
    alt: "A freestanding bathtub beside a glass wall, with a private walled garden outside",
    focus: "object-[50%_85%]",
  },
  beachVilla2Pool: { src: beachVilla2Pool, alt: "The 2-Bedroom Beach Pool Villa’s pool and terrace at sunset, looking out to the sea" },
  beachVilla2Night: { src: beachVilla2Night, alt: "The villa at night, lit from within among the palm trees" },
  beachVilla2Master: { src: beachVilla2Master, alt: "Master bedroom with a king-size bed and a view over the lawn to the beach" },
  beachVilla2MasterFront: { src: beachVilla2MasterFront, alt: "The master bedroom seen through floor-to-ceiling glass, with the beach on both sides" },
  beachVilla4Pool: { src: beachVilla4Pool, alt: "The 4-Bedroom Beach Pool Villa at dusk, its glass pavilions lit beside the private pool and loungers" },
  beachVilla4Garden: { src: beachVilla4Garden, alt: "The wings of the 4-Bedroom Beach Pool Villa glowing at dusk across the lawn" },
  horizonPond: { src: horizonPond, alt: "The Horizon Restaurant behind its reflecting pool in the afternoon light" },
  horizonInterior: { src: horizonInterior, alt: "Inside the Horizon Restaurant: long timber tables, a brick wall and a view out to the garden" },
  horizonTableView: { src: horizonTableView, alt: "A table laid with wine and a fruit platter beside the pool, with the sea behind" },
  horizonLawn: { src: horizonLawn, alt: "The long, low Horizon Restaurant building seen across the lawn" },
  pavilionOverPond: { src: pavilionOverPond, alt: "The restaurant pavilion above its pond in the golden evening light" },
  beachShackDay: { src: beachShackDay, alt: "The Beach Shack bar under its thatched roof, with loungers and parasols on the sand" },
  beachShackDusk: { src: beachShackDusk, alt: "The Beach Shack at dusk, with lanterns lit along the sand" },
  beachDinnerCanopy: { src: beachDinnerCanopy, alt: "A private dinner for two on the beach under white drapes, with the sea behind at dusk" },
  beachDinnerTorches: { src: beachDinnerTorches, alt: "A candlelit beach dinner for two under a canopy, with torches and the sea behind" },
  arrivalPavilion: { src: arrivalPavilion, alt: "The timber-clad arrival pavilion at dusk, lit from within beside the water" },
  aerialDusk: { src: aerialDusk, alt: "Aerial view of the resort among the forest at dusk, with the bay and a distant headland" },
  pavilionsAmongTrees: { src: pavilionsAmongTrees, alt: "The pavilions among the trees, with plants climbing the timber screens" },
  gardenPath: { src: gardenPath, alt: "A resort path between palms and tropical planting, with a dark timber building beyond" },
} as const satisfies Record<string, Photo>;

/**
 * Photos shown with each pavilion or villa on the Villas page, keyed by the slug in accommodations.ts.
 * The first photo leads; the others follow in a small grid. The 3-bedroom Beach Pool Villa has none yet.
 * The Ocean Pavilion also has the two "OF" photos from the upload (taken to mean ocean front).
 */
export const villaPhotos: Record<string, Photo[]> = {
  "garden-pavilion": [photos.gardenPavilionTerrace, photos.gardenPavilionEntrance, photos.gardenPavilionExterior, photos.gardenPavilionPath],
  "ocean-pavilion": [photos.oceanPavilionRoom, photos.oceanPavilionBalcony, photos.oceanPavilionEntrance, photos.oceanPavilionRoom2, photos.oceanPavilionTerrace],
  "beach-pavilion": [photos.beachPavilionExterior, photos.beachPavilionRoom, photos.beachPavilionTerrace],
  "1-bedroom-garden-pool-villa": [photos.gardenVillaPool, photos.gardenVillaBedroom, photos.gardenVillaLiving, photos.gardenVillaBathroom, photos.gardenVillaBathtub],
  "1-bedroom-beach-pool-villa": [photos.beachVilla1Cabana, photos.beachVilla1Dusk, photos.beachVilla1Bedroom, photos.beachVilla1Bedroom2, photos.beachVilla1Bathtub],
  "2-bedroom-beach-pool-villa": [photos.beachVilla2Pool, photos.beachVilla2Night, photos.beachVilla2Master, photos.beachVilla2MasterFront],
  "4-bedroom-beach-pool-villa": [photos.beachVilla4Pool, photos.beachVilla4Garden],
};

/** Photos shown beside each restaurant's menu, keyed by the restaurant id in menus.ts. */
export const diningPhotos: Record<"horizon" | "beach-shack", Photo[]> = {
  horizon: [photos.horizonPond, photos.horizonInterior, photos.horizonTableView],
  "beach-shack": [photos.beachShackDay, photos.beachShackDusk],
};

