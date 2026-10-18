import type { Metadata } from "next";
import Image from "next/image";
import { PageHeading } from "@/components/PageHeading";
import { spa } from "@/lib/content";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "Island Spa & Wellness",
  description: "Couples' massages, healing therapies and yoga at Koh Russey Resort.",
};

export default function SpaPage() {
  return (
    <>
      <PageHeading title={spa.title} intro={spa.body} />
      <div className="mx-auto grid max-w-6xl gap-4 px-4 py-14 sm:grid-cols-2">
        {[images.massageBeach1, images.massageBeach2].map((img) => (
          <Image
            key={img.alt}
            src={img.src}
            alt={img.alt}
            sizes="(min-width: 1152px) 560px, (min-width: 640px) 50vw, 100vw"
            className="aspect-[4/5] w-full object-cover"
          />
        ))}
      </div>
    </>
  );
}
