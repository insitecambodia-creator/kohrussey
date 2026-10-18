import type { Metadata } from "next";
import { PageHeading } from "@/components/PageHeading";
import { weddings } from "@/lib/content";
import { site, whatsappLink } from "@/lib/site";
import { button } from "@/lib/ui";

export const metadata: Metadata = {
  title: "Wedding Packages",
  description: "Hold your wedding on a private island in Cambodia at Koh Russey Resort.",
};

export default function WeddingsPage() {
  return (
    <>
      <PageHeading title={weddings.title} intro={weddings.body} />
      <div className="mx-auto max-w-6xl px-4 py-14">
        <div className="flex flex-wrap gap-3">
          <a
            href={whatsappLink("Hello! I'd like to ask about wedding packages at Koh Russey Resort.")}
            target="_blank"
            rel="noopener noreferrer"
            className={button.dark}
          >
            Ask about weddings on WhatsApp
          </a>
          <a href={`mailto:${site.contact.email}`} className={button.outline}>
            Email reservations
          </a>
        </div>
      </div>
    </>
  );
}
