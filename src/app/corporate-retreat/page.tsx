import type { Metadata } from "next";
import { PageHeading } from "@/components/PageHeading";
import { Photo } from "@/components/Photo";
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
          <Photo
            image={images.corporateBeach}
            sizes="(min-width: 1152px) 670px, (min-width: 768px) 60vw, 100vw"
            natural
            className="md:col-span-3"
          />
          <Photo
            image={images.retreatLawn}
            sizes="(min-width: 1152px) 450px, (min-width: 768px) 40vw, 100vw"
            natural
            delay={2}
            className="md:col-span-2"
          />
        </div>
        <div data-reveal="rise" className="mt-10 flex flex-wrap gap-3">
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
