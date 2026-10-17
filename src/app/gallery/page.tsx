import type { Metadata } from "next";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { PageHeading } from "@/components/PageHeading";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Photos of Koh Russey Resort, its beach, rooms and surroundings.",
};

const slots = ["Beach", "Bungalows", "Restaurant", "Sunset", "Snorkelling", "Garden"];

export default function GalleryPage() {
  return (
    <>
      <PageHeading title="Gallery" />
      <div className="mx-auto grid max-w-6xl gap-4 px-4 py-12 sm:grid-cols-2 lg:grid-cols-3">
        {slots.map((label) => (
          <ImagePlaceholder key={label} label={label} className="h-64 rounded-xl" />
        ))}
      </div>
    </>
  );
}
