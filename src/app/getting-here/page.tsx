import type { Metadata } from "next";
import Image from "next/image";
import { PageHeading } from "@/components/PageHeading";
import { ParallaxFrame } from "@/components/ParallaxFrame";
import { location, shuttles } from "@/lib/content";
import { images } from "@/lib/images";
import { site } from "@/lib/site";
import { link } from "@/lib/ui";

export const metadata: Metadata = {
  title: "Getting here",
  description: "Shuttle schedules from Ream to Koh Russey Resort on Bamboo Island, Cambodia.",
};

const cell = "border-b border-ink/15 py-3 pr-4 text-left align-top";

export default function GettingHerePage() {
  return (
    <>
      <PageHeading title="Getting here" intro={location.body} />
      <div className="mx-auto max-w-6xl space-y-20 px-4 py-14">
        <ParallaxFrame className="aspect-[16/9] md:aspect-[21/8]">
          <Image
            src={images.mapResort.src}
            alt={images.mapResort.alt}
            sizes="(min-width: 1152px) 1120px, 100vw"
            className="h-full w-full object-cover"
          />
        </ParallaxFrame>

        <section className="grid gap-8 md:grid-cols-12">
          <div className="md:col-span-4">
            <h2 data-reveal="rise" className="text-3xl">Shuttle schedules</h2>
            <p data-reveal="rise" data-delay="1" className="mt-4 max-w-[32ch] text-ink/80">{shuttles.note}</p>
          </div>
          <div className="space-y-12 md:col-span-8">
            {shuttles.seasons.map((season) => (
              <table key={season.name} data-reveal="rise" className="w-full table-fixed text-sm sm:text-base">
                <caption className="pb-3 text-left font-display text-2xl font-medium">
                  {season.name}
                  <span className="ml-3 font-sans text-base text-ink/70">{season.dates}</span>
                </caption>
                <colgroup>
                  <col className="w-[44%]" />
                  <col className="w-[28%]" />
                  <col className="w-[28%]" />
                </colgroup>
                <thead>
                  <tr>
                    <th scope="col" className={`${cell} border-t border-ink/15 font-medium`}>
                      Days
                    </th>
                    <th scope="col" className={`${cell} border-t border-ink/15 font-medium`}>
                      From Ream
                    </th>
                    <th scope="col" className={`${cell} border-t border-ink/15 font-medium`}>
                      From the resort
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {season.groups.map((g) => (
                    <tr key={g.label}>
                      <th scope="row" className={`${cell} font-normal`}>
                        {g.label}
                      </th>
                      <td className={cell}>{g.fromRream.join(", ")}</td>
                      <td className={cell}>{g.fromResort.join(", ")}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ))}
          </div>
        </section>

        <section className="grid gap-8 md:grid-cols-12">
          <h2 data-reveal="rise" className="text-3xl md:col-span-4">Where to find us</h2>
          <div data-reveal="rise" data-delay="1" className="space-y-4 md:col-span-8">
            <p>
              <strong className="font-medium">{site.contact.loungeName}</strong>
              <br />
              {site.contact.loungeAddress}
            </p>
            <p>
              <strong className="font-medium">{site.name}</strong>
              <br />
              {site.contact.resortAddress}
            </p>
            <p>
              <a href={site.contact.mapUrl} target="_blank" rel="noopener noreferrer" className={link}>
                Open in Google Maps
              </a>
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
