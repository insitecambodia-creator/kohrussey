// The overview at the top of the Villas page: two groups (Pavilions and Villas), each with a line of
// links and a mosaic of photos that jump to the matching section further down the page.
import { accommodationsOverviewText } from "./accommodations";
import { photos, type Photo } from "./stay-photos";

export type OverviewTile = {
  /** Caption on the photo. */
  label: string;
  /** Smaller second line under the caption. */
  note?: string;
  /** The section on this page that the photo links to. */
  href: `#${string}`;
  photo: Photo;
  /** Tailwind object-position class, to choose which part of the photo shows when it is cropped. */
  focus?: string;
  /**
   * How wide the photo really is once it is scaled to fill its tile. Tall tiles show a photo scaled by its
   * height, so it is wider than the tile; give a bigger value there or the photo looks soft.
   */
  sizes?: string;
};

/** One column of the mosaic. `rows` sets how its height is shared (a Tailwind grid-rows class). */
export type OverviewColumn = { rows: string; tiles: OverviewTile[] };

export type OverviewGroup = {
  id: string;
  title: string;
  /** The line of links under the title. */
  links: { label: string; href: `#${string}` }[];
  columns: OverviewColumn[];
  text: string;
};

export const stayOverview: OverviewGroup[] = [
  {
    id: "pavilions",
    title: "Pavilions",
    links: [
      { label: "Garden", href: "#garden-pavilion" },
      { label: "Ocean", href: "#ocean-pavilion" },
      { label: "Beach", href: "#beach-pavilion" },
    ],
    columns: [
      {
        rows: "grid-rows-[355fr_182fr]",
        tiles: [
          { label: "Garden Pavilion", href: "#garden-pavilion", photo: photos.gardenPavilionTerrace },
          { label: "Beach Pavilion", href: "#beach-pavilion", photo: photos.beachPavilionTerrace },
        ],
      },
      {
        rows: "grid-rows-[185fr_352fr]",
        tiles: [
          { label: "Ocean Pavilion", href: "#ocean-pavilion", photo: photos.oceanPavilionBalcony },
          {
            label: "Ocean Pavilion",
            href: "#ocean-pavilion",
            photo: photos.oceanPavilionRoom,
            focus: "object-[70%_50%]",
            sizes: "(min-width: 1152px) 440px, (min-width: 768px) 38vw, 75vw",
          },
        ],
      },
    ],
    text: accommodationsOverviewText.pavilions,
  },
  {
    id: "villas",
    title: "Villas",
    links: [
      { label: "1 Bedroom", href: "#1-bedroom-garden-pool-villa" },
      { label: "2 Bedroom", href: "#2-bedroom-beach-pool-villa" },
      { label: "4 Bedroom", href: "#4-bedroom-beach-pool-villa" },
    ],
    columns: [
      {
        rows: "grid-rows-[330fr_204fr]",
        tiles: [
          {
            label: "1 Bedroom",
            note: "Garden or beach pool villa",
            href: "#1-bedroom-garden-pool-villa",
            photo: photos.beachVilla1Cabana,
          },
          { label: "2 Bedroom", href: "#2-bedroom-beach-pool-villa", photo: photos.beachVilla2Pool },
        ],
      },
      {
        rows: "grid-rows-[1fr]",
        tiles: [
          {
            label: "4 Bedroom",
            href: "#4-bedroom-beach-pool-villa",
            photo: photos.beachVilla4Pool,
            sizes: "(min-width: 1152px) 620px, (min-width: 768px) 55vw, 100vw",
          },
        ],
      },
    ],
    text: accommodationsOverviewText.villas,
  },
];
