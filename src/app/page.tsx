import Image from "next/image";
import Link from "next/link";
import { BookButton } from "@/components/BookButton";
import { ExelyWidget } from "@/components/ExelyWidget";
import { images } from "@/lib/images";
import { allInclusive, intro, location, reviews, spa, villas } from "@/lib/content";
import { site, telLink, whatsappLink } from "@/lib/site";

// Short teasers; the full copy for each lives on its own page or section below.
const pillars = [
  { href: "/villas", label: "Stay", title: "Beachfront villas", body: "Each villa has a private pool, with the beach just steps away." },
  { href: "/restaurants", label: "Savour", title: "Beachfront dining", body: "Authentic Khmer flavors and international cuisine, by the sea." },
  { href: "/activities", label: "Explore", title: "Island experiences", body: "Snorkeling, paddleboarding, cultural tours and spa rituals." },
];

export default function Home() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-sea-dark text-white">
        <Image
          src={images.poolMorning.src}
          alt={images.poolMorning.alt}
          fill
          priority
          sizes="100vw"
          className="-z-20 object-cover"
        />
        <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-t from-sea-dark/90 via-sea-dark/55 to-sea-dark/35" />
        <div className="mx-auto max-w-6xl px-4 py-24 md:py-36">
          <p className="text-sm uppercase tracking-[0.2em] text-white/80">{site.name}</p>
          <h1 className="mt-3 max-w-3xl font-serif text-5xl font-semibold leading-tight md:text-6xl">
            {site.tagline}
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-white/90">{intro}</p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <BookButton>Check availability</BookButton>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-white/80 px-6 py-3 text-sm font-semibold hover:bg-white/10"
            >
              Chat on WhatsApp
            </a>
            <a
              href={site.contact.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-white/80 px-6 py-3 text-sm font-semibold hover:bg-white/10"
            >
              Chat on Telegram
            </a>
          </div>
          <p className="mt-5 text-sm text-white/80">
            Direct booking:{" "}
            <a href={telLink()} className="font-semibold underline">
              {site.contact.phone}
            </a>
          </p>
        </div>
      </section>

      <section aria-label="Check availability" className="mx-auto max-w-6xl px-4 pt-10">
        <ExelyWidget widget="search-form" containerId="be-search-form" />
      </section>

      <section className="mx-auto grid max-w-6xl gap-6 px-4 py-16 md:grid-cols-3">
        {pillars.map((p) => (
          <Link
            key={p.href}
            href={p.href}
            className="group rounded-xl border border-line bg-white p-6 transition-shadow hover:shadow-md"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-coral">{p.label}</p>
            <h2 className="mt-2 font-serif text-xl font-semibold text-sea-dark">{p.title}</h2>
            <p className="mt-2 text-sm text-ink/80">{p.body}</p>
            <span className="mt-4 inline-block text-sm font-medium text-sea group-hover:underline">
              Discover
            </span>
          </Link>
        ))}
      </section>

      <section className="mx-auto grid max-w-6xl items-center gap-10 px-4 md:grid-cols-2">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-coral">{villas.eyebrow}</p>
          <h2 className="mt-2 font-serif text-3xl font-semibold text-sea-dark">{villas.title}</h2>
          <p className="mt-3 text-ink/80">{villas.body}</p>
          <ul className="mt-5 flex flex-wrap gap-2">
            {villas.types.map((v) => (
              <li key={v.slug}>
                <Link
                  href={`/villas#${v.slug}`}
                  className="inline-block rounded-full border border-line bg-white px-4 py-2 text-sm font-medium hover:border-sea hover:text-sea"
                >
                  {v.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <Image
            src={images.girlPool.src}
            alt={images.girlPool.alt}
            sizes="(min-width: 768px) 25vw, 50vw"
            className="aspect-[3/4] rounded-xl object-cover"
          />
          <Image
            src={images.oceanfrontDreams.src}
            alt={images.oceanfrontDreams.alt}
            sizes="(min-width: 768px) 25vw, 50vw"
            className="mt-8 aspect-[3/4] rounded-xl object-cover"
          />
        </div>
      </section>

      <section className="mx-auto mt-16 grid max-w-6xl gap-6 px-4 md:grid-cols-2">
        <div className="overflow-hidden rounded-2xl bg-white ring-1 ring-line">
          <Image
            src={images.massageBeach2.src}
            alt={images.massageBeach2.alt}
            sizes="(min-width: 1152px) 560px, (min-width: 768px) 50vw, 100vw"
            className="aspect-[16/9] w-full object-cover"
          />
          <div className="p-8">
            <h2 className="font-serif text-2xl font-semibold text-sea-dark">{spa.title}</h2>
            <p className="mt-3 text-ink/80">{spa.body}</p>
            <Link href="/spa" className="mt-4 inline-block text-sm font-medium text-sea hover:underline">
              Discover the spa
            </Link>
          </div>
        </div>
        <div className="rounded-2xl bg-sea p-8 text-white">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/80">{allInclusive.eyebrow}</p>
          <h2 className="mt-1 font-serif text-2xl font-semibold">{allInclusive.title}</h2>
          <p className="mt-3 text-white/90">{allInclusive.body}</p>
          <Link
            href="/offers"
            className="mt-5 inline-flex rounded-full bg-coral px-6 py-3 text-sm font-semibold hover:bg-[#bf5530]"
          >
            Go for our all-inclusive package
          </Link>
        </div>
      </section>

      <section className="mx-auto mt-16 max-w-6xl px-4">
        <h2 className="font-serif text-3xl font-semibold text-sea-dark">What guests say</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {reviews.map((r) => (
            <figure key={r.author} className="rounded-xl border border-line bg-white p-6">
              <blockquote className="text-sm text-ink/80">&ldquo;{r.quote}&rdquo;</blockquote>
              <figcaption className="mt-4 text-sm font-semibold">
                {r.author}
                <span className="font-normal text-ink/60"> &middot; {r.title}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-16 max-w-6xl px-4">
        <div className="rounded-2xl bg-white p-8 ring-1 ring-line">
          <h2 className="font-serif text-3xl font-semibold text-sea-dark">{location.title}</h2>
          <p className="mt-3 max-w-3xl text-ink/80">{location.body}</p>
          <Link href="/getting-here" className="mt-4 inline-block text-sm font-medium text-sea hover:underline">
            Shuttle schedules and how to get here
          </Link>
        </div>
      </section>
    </>
  );
}
