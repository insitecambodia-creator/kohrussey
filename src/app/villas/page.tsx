import type { Metadata } from "next";
import { Fragment } from "react";
import { BookButton } from "@/components/BookButton";
import { PageHeading } from "@/components/PageHeading";
import { accommodations, accommodationsClosing, accommodationsIntro } from "@/lib/accommodations";
import { prose } from "@/lib/ui";

export const metadata: Metadata = {
  title: accommodationsIntro.metaTitle,
  description: accommodationsIntro.description,
};

export default function VillasPage() {
  return (
    <>
      <PageHeading title={accommodationsIntro.title} intro={accommodationsIntro.kicker} />
      <div className="mx-auto max-w-6xl px-4">
        {accommodations.map((a) => (
          <Fragment key={a.slug}>
            {/* Anchor for the homepage's "Beachfront Villas" link; outside the row so it takes no grid cell. */}
            {a.slug === "1-bedroom-beach-pool-villa" ? (
              <span id="beachfront-villas" className="block scroll-mt-24" />
            ) : null}
            <article
              id={a.slug}
              className="grid scroll-mt-24 gap-6 border-b border-ink/15 py-12 md:grid-cols-12 md:gap-10"
            >
              <div className="md:col-span-4">
                <h2 data-reveal="rise" className="text-3xl">
                  {a.name}
                </h2>
                {a.spec ? (
                  <p data-reveal="rise" data-delay="1" className="mt-3 text-ink/80">
                    {a.spec}
                  </p>
                ) : null}
              </div>
              <div className="md:col-span-8">
                <div data-reveal="rise" className={`space-y-4 text-ink/85 ${prose}`}>
                  {a.paragraphs.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                </div>
                {a.price ? (
                  <p data-reveal="rise" data-delay="1" className="mt-5 font-display text-2xl font-medium">
                    {a.price}
                  </p>
                ) : null}
                <div data-reveal="rise" data-delay="1" className="mt-6">
                  <BookButton>Book now</BookButton>
                </div>
              </div>
            </article>
          </Fragment>
        ))}

        <section className="grid gap-6 py-16 md:grid-cols-12 md:gap-10">
          <div data-reveal="rise" className={`space-y-4 text-ink/85 md:col-span-8 md:col-start-5 ${prose}`}>
            {accommodationsClosing.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
