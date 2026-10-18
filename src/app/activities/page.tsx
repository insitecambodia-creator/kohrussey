import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Photo } from "@/components/Photo";
import { activitiesPage, activityBlocks, activityRates, featuredActivities } from "@/lib/activities";
import { images } from "@/lib/images";
import { link, prose } from "@/lib/ui";

export const metadata: Metadata = {
  title: activitiesPage.metaTitle,
  description: activitiesPage.description,
};

/** Hero text arrives in sequence; `--d` is each element's start delay. */
const delay = (seconds: number) => ({ "--d": `${seconds}s` }) as React.CSSProperties;

export default function ActivitiesPage() {
  const { intro } = activitiesPage;
  return (
    <>
      <section className="relative isolate flex min-h-[58svh] items-end overflow-hidden bg-ink text-salt">
        <Image
          src={images.snorkelingAerial.src}
          alt={images.snorkelingAerial.alt}
          fill
          priority
          sizes="100vw"
          className="hero-settle -z-20 object-cover object-[50%_62%]"
        />
        <div
          aria-hidden
          className="absolute inset-x-0 bottom-0 -z-10 h-3/4 bg-gradient-to-t from-ink/90 via-ink/50 to-transparent"
        />
        <div className="mx-auto w-full max-w-6xl px-4 pb-12 pt-32 md:pb-16">
          <h1 className="hero-rise max-w-[16ch] text-5xl sm:text-7xl md:font-normal" style={delay(0.3)}>
            {activitiesPage.title}
          </h1>
          <p className="hero-rise mt-5 max-w-[46ch] text-lg text-salt/90" style={delay(0.7)}>
            {activitiesPage.subtitle}
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4">
        <section className="grid gap-8 py-16 md:grid-cols-12 md:py-24">
          <h2 data-reveal="rise" className="text-3xl md:col-span-4">
            {intro.heading}
          </h2>
          <div className="md:col-span-8">
            <p data-reveal="rise" data-delay="1" className="max-w-[30ch] font-display text-2xl leading-snug md:text-4xl">
              {intro.lead}
            </p>
            <p data-reveal="rise" data-delay="2" className={`mt-6 text-ink/85 ${prose}`}>
              {intro.invite}
            </p>
            <p data-reveal="rise" data-delay="2" className="mt-4 text-sm text-ink/70">
              {intro.note}
            </p>
          </div>
        </section>

        {activityBlocks.map((b) => (
          <article
            key={b.id}
            id={b.id}
            className="grid scroll-mt-24 gap-6 border-t border-ink/15 py-12 md:grid-cols-12 md:gap-10"
          >
            <div className="md:col-span-4">
              <h2 data-reveal="rise" className="text-3xl">
                {b.title}
              </h2>
              {b.meta?.map((m) => (
                <p key={m} data-reveal="rise" data-delay="1" className="mt-3 text-ink/80">
                  {m}
                </p>
              ))}
            </div>
            <div className="md:col-span-8">
              <p data-reveal="rise" className={`text-ink/85 ${prose}`}>
                {b.body}
              </p>
              {b.link ? (
                <div data-reveal="rise" data-delay="1" className="mt-5">
                  <Link href={b.link.href} className={link}>
                    {b.link.label}
                  </Link>
                </div>
              ) : null}
              {b.id === "resort-activities" ? (
                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <Photo
                    image={images.snorkelingBay}
                    sizes="(min-width: 1152px) 360px, (min-width: 640px) 40vw, 100vw"
                    className="aspect-[4/3]"
                  />
                  <Photo
                    image={images.snorkelingGear}
                    sizes="(min-width: 1152px) 360px, (min-width: 640px) 40vw, 100vw"
                    delay={2}
                    className="aspect-[4/3]"
                  />
                </div>
              ) : null}
            </div>
          </article>
        ))}

        <section className="grid gap-6 border-t border-ink/15 py-12 md:grid-cols-12 md:gap-10">
          <h2 data-reveal="rise" className="text-3xl md:col-span-4">
            {activityRates.title}
          </h2>
          <p data-reveal="rise" data-delay="1" className={`text-ink/85 md:col-span-8 ${prose}`}>
            {activityRates.body}
          </p>
        </section>

        <section className="grid gap-8 border-t border-ink/15 py-12 md:grid-cols-12 md:gap-10">
          <h2 data-reveal="rise" className="text-3xl md:col-span-4">
            Snorkeling guidelines
          </h2>
          <Photo
            image={images.snorkelingGuide}
            sizes="(min-width: 1152px) 740px, 100vw"
            natural
            className="border border-ink/15 md:col-span-8"
          />
        </section>

        <section className="border-t border-ink/15 py-16">
          <h2 data-reveal="rise" className="text-3xl md:text-5xl">
            {featuredActivities.title}
          </h2>
          <p data-reveal="rise" data-delay="1" className={`mt-5 text-ink/85 ${prose}`}>
            {featuredActivities.intro}
          </p>
          <ul className="mt-10 grid gap-x-12 border-t border-ink/15 md:grid-cols-2">
            {featuredActivities.items.map((a) => (
              <li key={a.title} data-reveal="rise" className="border-b border-ink/15 py-6">
                <div className="flex items-baseline justify-between gap-6">
                  <h3 className="font-display text-2xl font-medium">{a.title}</h3>
                  <span className="whitespace-nowrap text-sm text-ink/70">{a.label}</span>
                </div>
                <p className="mt-2 max-w-[56ch] text-ink/85">{a.body}</p>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </>
  );
}
