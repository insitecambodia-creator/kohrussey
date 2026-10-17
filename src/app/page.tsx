import Link from "next/link";
import { BookButton } from "@/components/BookButton";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { highlights, rooms } from "@/lib/content";
import { site } from "@/lib/site";

export default function Home() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-sea-dark text-white">
        <ImagePlaceholder
          label="Hero photo: the beach at Koh Russey"
          className="absolute inset-0 -z-10 h-full w-full opacity-60"
        />
        <div className="mx-auto max-w-6xl px-4 py-28 md:py-40">
          <p className="text-sm uppercase tracking-[0.2em] text-white/80">Cambodia</p>
          <h1 className="mt-3 max-w-2xl font-serif text-5xl font-semibold leading-tight md:text-6xl">
            {site.tagline}
          </h1>
          <p className="mt-5 max-w-xl text-lg text-white/90">{site.description}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <BookButton>Check availability</BookButton>
            <Link
              href="/rooms"
              className="inline-flex items-center justify-center rounded-full border border-white/80 px-6 py-3 text-sm font-semibold hover:bg-white/10"
            >
              Explore rooms
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-6 px-4 py-16 md:grid-cols-3">
        {highlights.map((h) => (
          <div key={h.title} className="rounded-xl border border-line bg-white p-6">
            <h2 className="font-serif text-xl font-semibold text-sea-dark">{h.title}</h2>
            <p className="mt-2 text-ink/80">{h.body}</p>
          </div>
        ))}
      </section>

      <section className="mx-auto max-w-6xl px-4">
        <div className="flex items-end justify-between">
          <h2 className="font-serif text-3xl font-semibold text-sea-dark">Where you&apos;ll stay</h2>
          <Link href="/rooms" className="text-sm font-medium text-sea hover:underline">
            All rooms
          </Link>
        </div>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {rooms.map((room) => (
            <article key={room.slug} className="overflow-hidden rounded-xl border border-line bg-white">
              <ImagePlaceholder label={room.name} className="h-48" />
              <div className="p-5">
                <h3 className="font-serif text-lg font-semibold">{room.name}</h3>
                <p className="mt-1 text-sm text-ink/80">{room.summary}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-16 max-w-6xl px-4">
        <div className="rounded-2xl bg-sea px-6 py-12 text-center text-white">
          <h2 className="font-serif text-3xl font-semibold">Ready for the island?</h2>
          <p className="mx-auto mt-2 max-w-xl text-white/90">
            Check live availability and book your stay online.
          </p>
          <div className="mt-6">
            <BookButton>Book your stay</BookButton>
          </div>
        </div>
      </section>
    </>
  );
}
