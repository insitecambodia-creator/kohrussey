import type { Metadata } from "next";
import { PageHeading } from "@/components/PageHeading";
import { site, telLink, whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact us",
  description: "Contact Koh Russey Resort to book or ask a question.",
};

const link = "text-sea underline";

export default function ContactPage() {
  const c = site.contact;
  return (
    <>
      <PageHeading title="Contact us" intro="Questions before you book? We're happy to help." />
      <div className="mx-auto grid max-w-4xl gap-10 px-4 py-12 md:grid-cols-2">
        <section>
          <h2 className="font-serif text-2xl font-semibold text-sea-dark">Direct booking</h2>
          <ul className="mt-4 space-y-3">
            <li>
              Phone:{" "}
              <a href={telLink()} className={link}>
                {c.phone}
              </a>
            </li>
            <li>
              WhatsApp:{" "}
              <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className={link}>
                Send a message
              </a>
            </li>
            <li>
              Telegram:{" "}
              <a href={c.telegram} target="_blank" rel="noopener noreferrer" className={link}>
                Send a message
              </a>
            </li>
            <li>
              Email:{" "}
              <a href={`mailto:${c.email}`} className={link}>
                {c.email}
              </a>
            </li>
          </ul>
        </section>
        <section className="text-ink/80">
          <h2 className="font-serif text-2xl font-semibold text-sea-dark">Find us</h2>
          <address className="mt-4 space-y-4 not-italic">
            <p>
              <strong>{c.loungeName}</strong>
              <br />
              {c.loungeAddress}
            </p>
            <p>
              <strong>{site.name}</strong>
              <br />
              {c.resortAddress}
            </p>
            <p>
              <a href={c.mapUrl} target="_blank" rel="noopener noreferrer" className={link}>
                Open in Google Maps
              </a>
            </p>
          </address>
        </section>
      </div>
    </>
  );
}
