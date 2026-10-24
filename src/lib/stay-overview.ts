// The overview at the top of the Villas page: two groups (Pavilions and Villas) of three types each. Every
// type is a column with two photos, and its label and photos jump to the matching section further down.
import { accommodationsOverviewText } from "./accommodations";
import { photos, type Photo } from "./stay-photos";

type Anchor = `#${string}`;

export type OverviewTile = {
  photo: Photo;
  /** Tailwind object-position class, to choose which part of the photo shows when it is cropped. */
  focus?: string;
  /** Where this photo links to, when that is not the column's own section. */
  href?: Anchor;
};

export type OverviewColumn = {
  /** The label above the column. */
  label: string;
  /** The full name, for screen readers. */
  name: string;
  href: Anchor;
  /** Small links under the label, where one label covers more than one section. */
  more?: { label: string; href: Anchor }[];
  /** Top photo and bottom photo. */
  tiles: [OverviewTile, OverviewTile];
};

export type OverviewGroup = {
  id: string;
  title: string;
  columns: OverviewColumn[];
  /** What sets this group apart from the other. */
  text: string;
};

export const stayOverview: OverviewGroup[] = [
  {
    id: "pavilions",
    title: "Pavilions",
    columns: [
      {
        label: "Garden",
        name: "Garden Pavilion",
        href: "#garden-pavilion",
        tiles: [{ photo: photos.gardenPavilionTerrace }, { photo: photos.gardenPavilionEntrance }],
      },
      {
        label: "Ocean",
        name: "Ocean Pavilion",
        href: "#ocean-pavilion",
        tiles: [{ photo: photos.oceanPavilionRoom, focus: "object-[75%_50%]" }, { photo: photos.oceanPavilionBalcony }],
      },
      {
        label: "Beach",
        name: "Beach Pavilion",
        href: "#beach-pavilion",
        tiles: [{ photo: photos.beachPavilionExterior }, { photo: photos.beachPavilionTerrace }],
      },
    ],
    text: accommodationsOverviewText.pavilions,
  },
  {
    id: "villas",
    title: "Villas",
    columns: [
      {
        label: "1 Bedroom",
        name: "1-Bedroom Pool Villas",
        href: "#1-bedroom-garden-pool-villa",
        more: [
          { label: "Garden", href: "#1-bedroom-garden-pool-villa" },
          { label: "Beach", href: "#1-bedroom-beach-pool-villa" },
        ],
        tiles: [
          { photo: photos.gardenVillaPool, href: "#1-bedroom-garden-pool-villa" },
          { photo: photos.beachVilla1Cabana, href: "#1-bedroom-beach-pool-villa" },
        ],
      },
      {
        label: "2 Bedroom",
        name: "2-Bedroom Beach Pool Villa",
        href: "#2-bedroom-beach-pool-villa",
        tiles: [{ photo: photos.beachVilla2Pool }, { photo: photos.beachVilla2Master }],
      },
      {
        label: "4 Bedroom",
        name: "4-Bedroom Beach Pool Villa",
        href: "#4-bedroom-beach-pool-villa",
        tiles: [{ photo: photos.beachVilla4Pool, focus: "object-[40%_50%]" }, { photo: photos.beachVilla4Garden, focus: "object-[85%_50%]" }],
      },
    ],
    text: accommodationsOverviewText.villas,
  },
];
