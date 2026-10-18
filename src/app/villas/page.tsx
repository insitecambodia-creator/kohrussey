import type { Metadata } from "next";
import { BookButton } from "@/components/BookButton";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { PageHeading } from "@/components/PageHeading";
import { villas } from "@/lib/content";

export const metadata: Metadata = {
  title: "Villas",
  description: "Private beachfront villas with private pools at Koh Russey Resort, Cambodia.",
};

export default function VillasPage() {
  return (
    <>
      <PageHeading title={villas.title} intro={villas.body} />
      <div className="mx-auto max-w-6xl px-4">
        {villas.types.map((v) => (
          <article
            key={v.slug}
            id={v.slug}
            data-reveal-group
            className="grid scroll-mt-24 gap-6 border-b border-ink/15 py-10 md:grid-cols-12 md:items-center"
          >
            <ImagePlaceholder label={`Photo of the ${v.name} coming soon`} className="aspect-[4/3] md:col-span-7" />
            <div className="md:col-span-5 md:pl-6">
              <h2 className="text-3xl">{v.name}</h2>
              <div className="mt-6">
                <BookButton>Check availability</BookButton>
              </div>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
