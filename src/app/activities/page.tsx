import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHeading } from "@/components/PageHeading";
import { activities } from "@/lib/content";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "Activities",
  description: "Snorkeling, paddleboarding, cultural tours and spa rituals on a private island in Cambodia.",
};

const photos = [images.snorkelingAerial, images.snorkelingBay, images.snorkelingGear];

export default function ActivitiesPage() {
  return (
    <>
      <PageHeading title={activities.title} intro={activities.body} />
      <div className="mx-auto max-w-6xl space-y-12 px-4 py-12">
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {activities.items.map((item) => (
            <li key={item} className="rounded-xl border border-line bg-white p-5 font-semibold">
              {item}
            </li>
          ))}
        </ul>

        <div className="grid gap-4 sm:grid-cols-3">
          {photos.map((img) => (
            <Image
              key={img.alt}
              src={img.src}
              alt={img.alt}
              sizes="(min-width: 1152px) 370px, (min-width: 640px) 33vw, 100vw"
              className="aspect-square w-full rounded-xl object-cover"
            />
          ))}
        </div>

        <section>
          <h2 className="font-serif text-2xl font-semibold text-sea-dark">Snorkeling guidelines</h2>
          <Image
            src={images.snorkelingGuide.src}
            alt={images.snorkelingGuide.alt}
            sizes="(min-width: 896px) 800px, 100vw"
            className="mt-4 w-full max-w-3xl rounded-xl border border-line"
          />
        </section>

        <Link href="/spa" className="inline-block text-sm font-medium text-sea hover:underline">
          Island Spa &amp; Wellness
        </Link>
      </div>
    </>
  );
}
