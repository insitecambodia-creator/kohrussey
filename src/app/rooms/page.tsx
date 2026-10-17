import type { Metadata } from "next";
import { BookButton } from "@/components/BookButton";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { PageHeading } from "@/components/PageHeading";
import { rooms } from "@/lib/content";

export const metadata: Metadata = {
  title: "Rooms",
  description: "Bungalows and villas at Koh Russey Resort.",
};

export default function RoomsPage() {
  return (
    <>
      <PageHeading title="Rooms" intro="Choose a place to stay. Rates and live availability are shown when you book." />
      <div className="mx-auto max-w-6xl space-y-8 px-4 py-12">
        {rooms.map((room) => (
          <article
            key={room.slug}
            id={room.slug}
            className="grid overflow-hidden rounded-xl border border-line bg-white md:grid-cols-2"
          >
            <ImagePlaceholder label={room.name} className="min-h-64" />
            <div className="p-6">
              <h2 className="font-serif text-2xl font-semibold text-sea-dark">{room.name}</h2>
              <p className="mt-1 text-sm text-ink/70">Sleeps {room.sleeps}</p>
              <p className="mt-3 text-ink/80">{room.summary}</p>
              <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-ink/80">
                {room.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
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
