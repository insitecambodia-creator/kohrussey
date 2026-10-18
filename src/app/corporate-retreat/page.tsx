import type { Metadata } from "next";
import Image from "next/image";
import { PageHeading } from "@/components/PageHeading";
import { images } from "@/lib/images";
import { site, whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Corporate retreat",
  description: "Corporate retreats and team activities on a private island in Cambodia.",
};

export default function CorporateRetreatPage() {
  return (
    <>
      <PageHeading title="Corporate retreat" intro="A private island setting for team retreats and group activities." />
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid items-start gap-6 md:grid-cols-5">
          <Image
            src={images.corporateBeach.src}
            alt={images.corporateBeach.alt}
            sizes="(min-width: 1152px) 670px, (min-width: 768px) 60vw, 100vw"
            className="w-full rounded-xl md:col-span-3"
          />
          <Image
            src={images.retreatLawn.src}
            alt={images.retreatLawn.alt}
            sizes="(min-width: 1152px) 450px, (min-width: 768px) 40vw, 100vw"
            className="w-full rounded-xl md:col-span-2"
          />
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={whatsappLink("Hello! I'd like to ask about a corporate retreat at Koh Russey Resort.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex rounded-full bg-sea px-6 py-3 text-sm font-semibold text-white hover:bg-sea-dark"
          >
            Ask about a retreat
          </a>
          <a
            href={`mailto:${site.contact.email}`}
            className="inline-flex rounded-full border border-sea px-6 py-3 text-sm font-semibold text-sea hover:bg-sea/5"
          >
            Email reservations
          </a>
        </div>
      </div>
    </>
  );
}
