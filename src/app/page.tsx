import Image from "next/image";
import Link from "next/link";
import { BookButton } from "@/components/BookButton";
import { ExelyWidget } from "@/components/ExelyWidget";
import { HeroVideo } from "@/components/HeroVideo";
import { ParallaxFrame } from "@/components/ParallaxFrame";
import { Photo } from "@/components/Photo";
import { allInclusive, introLead, introRest, location, reviews, spa, villas } from "@/lib/content";
import { images } from "@/lib/images";
import { site, telLink, whatsappLink } from "@/lib/site";
import { link, prose } from "@/lib/ui";

const pillars = [
  {
    href: "/villas",
    title: "Stay",
    body: "Each villa has a private pool, with the beach just steps away.",
    cta: "See the villas",
  },
  {
    href: "/restaurants",
    title: "Savour",
    body: "Authentic Khmer flavors and international cuisine, by the sea.",
    cta: "See the restaurants",
  },
  {
    href: "/activities",
    title: "Explore",
    body: "Snorkeling, paddleboarding, cultural tours and spa rituals.",
    cta: "See the activities",
  },
];

const [featuredReview, ...otherReviews] = reviews;

/** Hero text arrives in sequence; `--d` is each element's start delay. */
const delay = (seconds: number) => ({ "--d": `${seconds}s` }) as React.CSSProperties;

export default function Home() {
  return (
    <>
      <section className="relative isolate flex min-h-[86svh] items-end overflow-hidden bg-ink text-salt">
        <Image
          src={images.poolMorning.src}
          alt={images.poolMorning.alt}
          fill
          priority
          sizes="100vw"
          className="hero-settle -z-20 object-cover"
        />
        <HeroVideo videoId={site.heroVideo.youtubeId} />
        <div aria-hidden className="absolute inset-x-0 bottom-0 -z-10 h-3/4 bg-gradient-to-t from-ink/95 via-ink/60 to-transparent" />
        <div className="mx-auto w-full max-w-6xl px-4 pb-14 pt-40 md:pb-20">
          <h1 className="hero-rise max-w-[14ch] text-5xl sm:text-7xl md:text-8xl md:font-normal" style={delay(0.3)}>
            {site.tagline}
          </h1>
          <p className="hero-rise mt-6 max-w-[46ch] text-lg text-salt/90" style={delay(0.7)}>
            {introLead}
          </p>
          <div className="hero-rise mt-8 flex flex-wrap items-center gap-x-8 gap-y-4" style={delay(1)}>
            <BookButton on="dark">Check availability</BookButton>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 decoration-salt/50 hover:decoration-salt"
            >
              Message us on WhatsApp
            </a>
            <a href={telLink()} className="underline underline-offset-4 decoration-salt/50 hover:decoration-salt">
              {site.contact.phone}
            </a>
          </div>
        </div>
      </section>

      <section aria-labelledby="availability" className="border-b border-ink/15 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-8">
          <h2 id="availability" className="text-xl font-medium">
            Check availability
          </h2>
          <ExelyWidget widget="search-form" containerId="be-search-form" className="mt-4" />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-24 md:py-32">
        <p data-reveal="rise" className="max-w-[40ch] font-display text-2xl leading-snug md:text-4xl">
          {introRest}
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-4">
        <div data-reveal-group className="grid gap-10 border-t border-ink/15 pt-8 md:grid-cols-3">
          {pillars.map((p) => (
            <div key={p.href}>
              <h2 className="text-3xl">{p.title}</h2>
              <p className="mt-3 max-w-[32ch] text-ink/80">{p.body}</p>
              <Link href={p.href} className={`${link} mt-4 inline-block`}>
                {p.cta}
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-28 grid max-w-6xl gap-12 px-4 md:grid-cols-12 md:items-center">
        <div className="md:col-span-5">
          <h2 data-reveal="rise" className="text-3xl md:text-5xl">
            {villas.title}
          </h2>
          <p data-reveal="rise" data-delay="1" className={`mt-5 text-ink/80 ${prose}`}>
            {villas.body}
          </p>
          <ul data-reveal-group className="mt-8 border-t border-ink/15">
            {villas.types.map((v) => (
              <li key={v.slug} className="border-b border-ink/15">
                <Link href={`/villas#${v.slug}`} className="block py-3 hover:text-pool hover:underline underline-offset-4">
                  {v.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="grid grid-cols-12 gap-4 md:col-span-7">
          <Photo image={images.girlPool} sizes="(min-width: 768px) 30vw, 58vw" className="col-span-7 aspect-[4/5]" />
          <Photo
            image={images.oceanfrontDreams}
            sizes="(min-width: 768px) 22vw, 42vw"
            delay={2}
            className="col-span-5 mt-16 aspect-[4/5]"
          />
        </div>
      </section>

      <section className="mx-auto mt-28 grid max-w-6xl gap-12 px-4 md:grid-cols-2 md:items-center">
        <Photo
          image={images.massageBeach2}
          sizes="(min-width: 1152px) 560px, (min-width: 768px) 50vw, 100vw"
          className="aspect-[4/5] md:aspect-[5/6]"
        />
        <div>
          <h2 data-reveal="rise" className="text-3xl md:text-4xl">
            {spa.title}
          </h2>
          <p data-reveal="rise" data-delay="1" className={`mt-5 text-ink/80 ${prose}`}>
            {spa.body}
          </p>
          <div data-reveal="rise" data-delay="2">
            <Link href="/spa" className={`${link} mt-6 inline-block`}>
              See the spa
            </Link>
          </div>
        </div>
      </section>

      <section className="mt-28 bg-pool text-salt">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-20 md:grid-cols-12 md:items-end">
          <h2 data-reveal="slide" className="text-4xl md:col-span-5 md:text-5xl">
            {allInclusive.title}
          </h2>
          <div className="md:col-span-7">
            <p data-reveal="rise" data-delay="1" className={`text-salt/90 ${prose}`}>
              {allInclusive.body}
            </p>
            <div data-reveal="rise" data-delay="2">
              <Link href="/offers" className="mt-8 inline-flex bg-accent px-6 py-3 text-sm font-medium text-ink hover:bg-white">
                Go for our all-inclusive package
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-28 max-w-6xl px-4">
        <figure data-reveal="rise">
          <blockquote className="max-w-[40ch] font-display text-3xl leading-snug md:text-4xl">
            &ldquo;{featuredReview.quote}&rdquo;
          </blockquote>
          <figcaption className="mt-6 text-sm text-ink/70">
            {featuredReview.author}, {featuredReview.title}
          </figcaption>
        </figure>
        <div data-reveal-group className="mt-14 grid gap-10 border-t border-ink/15 pt-8 md:grid-cols-2">
          {otherReviews.map((r) => (
            <figure key={r.author}>
              <blockquote className={`text-ink/85 ${prose}`}>&ldquo;{r.quote}&rdquo;</blockquote>
              <figcaption className="mt-3 text-sm text-ink/70">
                {r.author}, {r.title}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-28 max-w-6xl px-4">
        <ParallaxFrame className="aspect-[16/9] md:aspect-[21/8]">
          <Image
            src={images.mapResort.src}
            alt={images.mapResort.alt}
            sizes="(min-width: 1152px) 1120px, 100vw"
            className="h-full w-full object-cover"
          />
        </ParallaxFrame>
        <div className="mt-10 grid gap-6 md:grid-cols-12">
          <h2 data-reveal="rise" className="text-3xl md:col-span-5 md:text-4xl">
            {location.title}
          </h2>
          <div className="md:col-span-7">
            <p data-reveal="rise" data-delay="1" className={`text-ink/80 ${prose}`}>
              {location.body}
            </p>
            <div data-reveal="rise" data-delay="2">
              <Link href="/getting-here" className={`${link} mt-5 inline-block`}>
                See shuttle times and how to get here
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
