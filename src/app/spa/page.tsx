import type { Metadata } from "next";
import { PageHeading } from "@/components/PageHeading";
import { Photo } from "@/components/Photo";
import { spa } from "@/lib/content";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "Island Spa & Wellness",
  description: "Couples' massages, healing therapies and yoga at Koh Russey Resort.",
};

export default function SpaPage() {
  const sizes = "(min-width: 1152px) 560px, (min-width: 640px) 50vw, 100vw";
  return (
    <>
      <PageHeading title={spa.title} intro={spa.body} />
      <div className="mx-auto grid max-w-6xl gap-4 px-4 py-14 sm:grid-cols-2">
        <Photo image={images.massageBeach1} sizes={sizes} className="aspect-[4/5]" />
        <Photo image={images.massageBeach2} sizes={sizes} delay={2} className="aspect-[4/5]" />
      </div>
    </>
  );
}
