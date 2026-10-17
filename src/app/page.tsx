import Link from "next/link";
import { BookButton } from "@/components/BookButton";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import {
  activities,
  allInclusive,
  dining,
  intro,
  location,
  reviews,
  spa,
  villas,
} from "@/lib/content";
import { site, telLink, whatsappLink } from "@/lib/site";

const pillars = [
  { href: "/villas", label: "Stay", title: villas.title, body: villas.body },
  { href: "/restaurants", label: "Savour", title: dining.title, body: dining.body },
  { href: "/activities", label: "Explore", title: activities.title, body: activities.body },
];

export default function Home() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-sea-dark text-white">
        <ImagePlaceholder
          label="Hero photo: Koh Russey beachfront"
          className="absolute inset-0 -z-10 h-full w-full opacity-60"
        />
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

      <section className="mx-auto max-w-6xl px-4">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-coral">{villas.eyebrow}</p>
        <h2 className="mt-2 font-serif text-3xl font-semibold text-sea-dark">{villas.title}</h2>
        <p className="mt-3 max-w-3xl text-ink/80">{villas.body}</p>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {villas.types.map((v) => (
            <Link key={v.slug} href="/villas" className="overflow-hidden rounded-xl border border-line bg-white">
              <ImagePlaceholder label={v.name} className="h-44" />
              <p className="p-4 font-serif text-lg font-semibold">{v.name}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-16 grid max-w-6xl gap-6 px-4 md:grid-cols-2">
        <div className="rounded-2xl bg-white p-8 ring-1 ring-line">
          <h2 className="font-serif text-2xl font-semibold text-sea-dark">{spa.title}</h2>
          <p className="mt-3 text-ink/80">{spa.body}</p>
          <Link href="/spa" className="mt-4 inline-block text-sm font-medium text-sea hover:underline">
            Discover the spa
          </Link>
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
