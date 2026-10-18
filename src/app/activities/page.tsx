import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHeading } from "@/components/PageHeading";
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
        <ul className="grid border-t border-ink/15 sm:grid-cols-2 lg:grid-cols-4">
          {activities.items.map((item) => (
            <li key={item} className="border-b border-ink/15 py-5 font-display text-2xl lg:border-b-0 lg:pr-6">
              {item}
            </li>
          ))}
        </ul>

        <div className="grid items-start gap-4 sm:grid-cols-12">
          <Image
            src={images.snorkelingAerial.src}
            alt={images.snorkelingAerial.alt}
            sizes="(min-width: 1152px) 560px, (min-width: 640px) 50vw, 100vw"
            className="aspect-square w-full object-cover sm:col-span-6"
          />
          <div className="grid gap-4 sm:col-span-6">
            <Image
              src={images.snorkelingBay.src}
              alt={images.snorkelingBay.alt}
              sizes="(min-width: 1152px) 560px, (min-width: 640px) 50vw, 100vw"
              className="aspect-[16/10] w-full object-cover"
            />
            <Image
              src={images.snorkelingGear.src}
              alt={images.snorkelingGear.alt}
              sizes="(min-width: 1152px) 560px, (min-width: 640px) 50vw, 100vw"
              className="aspect-[16/10] w-full object-cover"
            />
          </div>
        </div>

        <section className="grid gap-8 md:grid-cols-12">
          <h2 className="text-3xl md:col-span-4">Snorkeling guidelines</h2>
          <Image
            src={images.snorkelingGuide.src}
            alt={images.snorkelingGuide.alt}
            sizes="(min-width: 1152px) 740px, 100vw"
            className="w-full border border-ink/15 md:col-span-8"
          />
        </section>

        <Link href="/spa" className={link}>
          Island Spa &amp; Wellness
        </Link>
      </div>
    </>
  );
}
