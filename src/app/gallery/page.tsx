import type { Metadata } from "next";
import { PageHeading } from "@/components/PageHeading";
import { Photo } from "@/components/Photo";
import { gallery } from "@/lib/images";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Photos of Koh Russey Resort, its pool, beach, spa and island activities.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHeading title="Gallery" />
      <div className="mx-auto max-w-6xl columns-1 gap-4 px-4 py-14 sm:columns-2 lg:columns-3 [&>*]:mb-4">
        {gallery.map((img) => (
          <Photo
            key={img.alt}
            image={img}
            sizes="(min-width: 1152px) 370px, (min-width: 640px) 50vw, 100vw"
            natural
            className="break-inside-avoid"
          />
        ))}
      </div>
    </>
  );
}
