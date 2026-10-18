import type { Metadata } from "next";
import Image from "next/image";
import { images } from "@/lib/images";
import { restaurants, restaurantsIntro, type MenuSection } from "@/lib/menus";
import { prose } from "@/lib/ui";

export const metadata: Metadata = {
  title: restaurantsIntro.title,
  description: restaurantsIntro.description,
};

function MenuBlock({ section }: { section: MenuSection }) {
  return (
    <section data-reveal="rise" className="mb-10 break-inside-avoid">
      <h4 className="font-display text-2xl">{section.title}</h4>
      {section.note ? <p className="mt-2 text-ink/80">{section.note}</p> : null}
      {section.items ? (
        <ul className="mt-3 border-t border-ink/15">
          {section.items.map((item) => (
            <li key={item.name} className="border-b border-ink/15 py-3">
              <div className="flex items-baseline justify-between gap-6">
                <span className="font-medium">{item.name}</span>
                <span className="tabular-nums">{item.price}</span>
              </div>
              {item.details?.map((line) => (
                <p key={line} className="mt-1 max-w-[56ch] text-sm text-ink/75">
                  {line}
                </p>
              ))}
            </li>
          ))}
        </ul>
      ) : null}
    </section>
  );
}

/** Hero text arrives in sequence; `--d` is each element's start delay. */
const delay = (seconds: number) => ({ "--d": `${seconds}s` }) as React.CSSProperties;

export default function RestaurantsPage() {
  return (
    <>
      <section className="relative isolate flex min-h-[58svh] items-end overflow-hidden bg-ink text-salt">
        <Image
          src={images.horizonRestaurant.src}
          alt={images.horizonRestaurant.alt}
          fill
          priority
          sizes="100vw"
          className="hero-settle -z-20 object-cover object-[50%_62%]"
        />
        <div aria-hidden className="absolute inset-x-0 bottom-0 -z-10 h-3/4 bg-gradient-to-t from-ink/90 via-ink/50 to-transparent" />
        <div className="mx-auto w-full max-w-6xl px-4 pb-12 pt-32 md:pb-16">
          <h1 className="hero-rise max-w-[14ch] text-5xl sm:text-7xl md:font-normal" style={delay(0.3)}>
            {restaurantsIntro.title}
          </h1>
          <p className="hero-rise mt-5 max-w-[46ch] text-lg text-salt/90" style={delay(0.7)}>
            {restaurantsIntro.tagline}
          </p>
        </div>
      </section>
      <div className="mx-auto max-w-6xl px-4">
        {restaurants.map((r) => (
          <article key={r.id} id={r.id} className="scroll-mt-24 border-b border-ink/15 py-16">
            <div className="grid gap-8 md:grid-cols-12">
              <div className="md:col-span-4">
                <h2 data-reveal="rise" className="text-3xl md:text-4xl">
                  {r.name}
                </h2>
                <p data-reveal="rise" data-delay="1" className={`mt-5 text-ink/85 ${prose}`}>
                  {r.description}
                </p>
              </div>
              <div className="md:col-span-8">
                <h3 data-reveal="rise" className="mb-6 text-xl font-medium">
                  {r.name} menu
                </h3>
                <div className="lg:columns-2 lg:gap-x-12">
                  {r.menu.map((section) => (
                    <MenuBlock key={section.title} section={section} />
                  ))}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
