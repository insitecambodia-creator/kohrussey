import type { Metadata } from "next";
import Link from "next/link";
import { PageHeading } from "@/components/PageHeading";
import { Photo } from "@/components/Photo";
import { activities } from "@/lib/content";
import { images } from "@/lib/images";
import { link } from "@/lib/ui";

export const metadata: Metadata = {
  title: "Activities",
  description: "Snorkeling, paddleboarding, cultural tours and spa rituals on a private island in Cambodia.",
};

export default function ActivitiesPage() {
  return (
    <>
      <PageHeading title={activities.title} intro={activities.body} />
      <div className="mx-auto max-w-6xl space-y-20 px-4 py-14">
        <ul data-reveal-group className="grid border-t border-ink/15 sm:grid-cols-2 lg:grid-cols-4">
          {activities.items.map((item) => (
            <li key={item} className="border-b border-ink/15 py-5 font-display text-2xl lg:border-b-0 lg:pr-6">
              {item}
            </li>
          ))}
        </ul>

        <div className="grid items-start gap-4 sm:grid-cols-12">
          <Photo
            image={images.snorkelingAerial}
            sizes="(min-width: 1152px) 560px, (min-width: 640px) 50vw, 100vw"
            className="aspect-square sm:col-span-6"
          />
          <div className="grid gap-4 sm:col-span-6">
            <Photo
              image={images.snorkelingBay}
              sizes="(min-width: 1152px) 560px, (min-width: 640px) 50vw, 100vw"
              delay={1}
              className="aspect-[16/10]"
            />
            <Photo
              image={images.snorkelingGear}
              sizes="(min-width: 1152px) 560px, (min-width: 640px) 50vw, 100vw"
              delay={2}
              className="aspect-[16/10]"
            />
          </div>
        </div>

        <section className="grid gap-8 md:grid-cols-12">
          <h2 data-reveal="rise" className="text-3xl md:col-span-4">Snorkeling guidelines</h2>
          <Photo
            image={images.snorkelingGuide}
            sizes="(min-width: 1152px) 740px, 100vw"
            natural
            className="border border-ink/15 md:col-span-8"
          />
        </section>

        <Link href="/spa" className={link}>
          Island Spa &amp; Wellness
        </Link>
      </div>
    </>
  );
}
