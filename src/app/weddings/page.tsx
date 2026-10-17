import type { Metadata } from "next";
import { BookButton } from "@/components/BookButton";
import { PageHeading } from "@/components/PageHeading";
import { weddings } from "@/lib/content";
import { site, whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Wedding Packages",
  description: "Hold your wedding on a private island in Cambodia at Koh Russey Resort.",
};

export default function WeddingsPage() {
  return (
    <>
      <PageHeading title={weddings.title} intro={weddings.body} />
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="flex flex-wrap gap-3">
          <a
            href={whatsappLink("Hello! I'd like to ask about wedding packages at Koh Russey Resort.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex rounded-full bg-sea px-6 py-3 text-sm font-semibold text-white hover:bg-sea-dark"
          >
            Ask about wedding packages
          </a>
          <a
            href={`mailto:${site.contact.email}`}
            className="inline-flex rounded-full border border-sea px-6 py-3 text-sm font-semibold text-sea hover:bg-sea/5"
          >
            Email reservations
          </a>
          <BookButton>Check availability</BookButton>
        </div>
      </div>
    </>
  );
}
