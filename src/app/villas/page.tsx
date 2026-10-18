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
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-6 sm:grid-cols-2">
          {villas.types.map((v) => (
            <article key={v.slug} id={v.slug} className="overflow-hidden rounded-xl border border-line bg-white">
              <ImagePlaceholder label={`Photo coming soon: ${v.name}`} className="h-56" />
              <div className="flex items-center justify-between p-5">
                <h2 className="font-serif text-xl font-semibold">{v.name}</h2>
                <BookButton>Check availability</BookButton>
              </div>
            </article>
          ))}
        </div>
      </div>
    </>
  );
}
