import type { Metadata } from "next";
import Image from "next/image";
import { PageHeading } from "@/components/PageHeading";
import { images } from "@/lib/images";
import { site, whatsappLink } from "@/lib/site";
import { button } from "@/lib/ui";

export const metadata: Metadata = {
  title: "Corporate retreat",
  description: "Corporate retreats and team activities on a private island in Cambodia.",
};

export default function CorporateRetreatPage() {
  return (
    <>
      <PageHeading title="Corporate retreat" intro="A private island setting for team retreats and group activities." />
      <div className="mx-auto max-w-6xl px-4 py-14">
        <div className="grid items-start gap-4 md:grid-cols-5">
          <Image
            src={images.corporateBeach.src}
            alt={images.corporateBeach.alt}
            sizes="(min-width: 1152px) 670px, (min-width: 768px) 60vw, 100vw"
            className="w-full md:col-span-3"
          />
          <Image
            src={images.retreatLawn.src}
            alt={images.retreatLawn.alt}
            sizes="(min-width: 1152px) 450px, (min-width: 768px) 40vw, 100vw"
            className="w-full md:col-span-2"
          />
        </div>
        <div className="mt-10 flex flex-wrap gap-3">
          <a
            href={whatsappLink("Hello! I'd like to ask about a corporate retreat at Koh Russey Resort.")}
            target="_blank"
            rel="noopener noreferrer"
            className={button.dark}
          >
            Ask about a retreat on WhatsApp
          </a>
          <a href={`mailto:${site.contact.email}`} className={button.outline}>
            Email reservations
          </a>
        </div>
      </div>
    </>
  );
}
