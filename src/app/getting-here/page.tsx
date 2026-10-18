import type { Metadata } from "next";
import Image from "next/image";
import { PageHeading } from "@/components/PageHeading";
import { location, shuttles } from "@/lib/content";
import { images } from "@/lib/images";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Getting here",
  description: "Shuttle schedules from Ream to Koh Russey Resort on Bamboo Island, Cambodia.",
};

export default function GettingHerePage() {
  return (
    <>
      <PageHeading title="Getting here" intro={location.body} />
      <div className="mx-auto max-w-4xl space-y-10 px-4 py-12">
        <Image
          src={images.mapResort.src}
          alt={images.mapResort.alt}
          sizes="(min-width: 896px) 896px, 100vw"
          className="w-full rounded-xl"
        />
        <section>
          <h2 className="font-serif text-2xl font-semibold text-sea-dark">Schedules for shuttles</h2>
          <div className="mt-4 grid gap-6 md:grid-cols-2">
            {shuttles.seasons.map((season) => (
              <div key={season.name} className="rounded-xl border border-line bg-white p-6">
                <h3 className="font-serif text-xl font-semibold">{season.name}</h3>
                <p className="text-sm text-ink/70">{season.dates}</p>
                {season.groups.map((g) => (
                  <div key={g.label} className="mt-4 text-sm">
                    <p className="font-semibold">{g.label}</p>
                    <p className="mt-1 text-ink/80">From Ream: {g.fromRream.join(" & ")}</p>
                    <p className="text-ink/80">From the resort: {g.fromResort.join(" & ")}</p>
                  </div>
                ))}
              </div>
            ))}
          </div>
          <p className="mt-4 text-ink/80">{shuttles.note}</p>
        </section>

        <section className="text-ink/80">
          <h2 className="font-serif text-2xl font-semibold text-sea-dark">Where to find us</h2>
          <p className="mt-3">
            <strong>{site.contact.loungeName}:</strong> {site.contact.loungeAddress}
          </p>
          <p className="mt-2">
            <strong>{site.name}:</strong> {site.contact.resortAddress}
          </p>
          <p className="mt-3">
            <a href={site.contact.mapUrl} target="_blank" rel="noopener noreferrer" className="text-sea underline">
              Open in Google Maps
            </a>
          </p>
        </section>
      </div>
    </>
  );
}
