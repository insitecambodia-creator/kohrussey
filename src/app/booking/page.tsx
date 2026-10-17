import type { Metadata } from "next";
import { ExelyWidget } from "@/components/ExelyWidget";
import { PageHeading } from "@/components/PageHeading";
import { site, telLink, whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Book your stay",
  description: "Check availability and book your stay at Koh Russey Resort.",
  // Same as the current site: the booking page is not for search results.
  robots: { index: false, follow: true },
};

export default function BookingPage() {
  return (
    <>
      <PageHeading title="Book your stay" intro="Check live availability and book directly with the resort." />
      <div className="mx-auto max-w-5xl px-4 py-10">
        <ExelyWidget widget="booking-form" containerId="be-booking-form" className="min-h-96" />
        <noscript>
          <p className="mt-4 text-ink/80">Online booking needs JavaScript. Please contact us directly instead.</p>
        </noscript>
        <p className="mt-8 text-sm text-ink/80">
          Prefer to book by message? Call{" "}
          <a href={telLink()} className="text-sea underline">
            {site.contact.phone}
          </a>
          , message us on{" "}
          <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="text-sea underline">
            WhatsApp
          </a>{" "}
          or email{" "}
          <a href={`mailto:${site.contact.email}`} className="text-sea underline">
            {site.contact.email}
          </a>
          .
        </p>
      </div>
    </>
  );
}
