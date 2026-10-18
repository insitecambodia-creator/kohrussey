import type { Metadata } from "next";
import { PageHeading } from "@/components/PageHeading";
import { site, telLink, whatsappLink } from "@/lib/site";
import { link } from "@/lib/ui";

export const metadata: Metadata = {
  title: "Contact us",
  description: "Contact Koh Russey Resort to book or ask a question.",
};

export default function ContactPage() {
  const c = site.contact;
  return (
    <>
      <PageHeading title="Contact us" intro="Questions before you book? Message us and we will help." />
      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-14 md:grid-cols-2">
        <section>
          <h2 className="text-3xl">Direct booking</h2>
          <dl className="mt-6 divide-y divide-ink/15 border-y border-ink/15 [&_dd]:break-words">
            <div className="grid grid-cols-[6rem_minmax(0,1fr)] py-3">
              <dt className="text-ink/70">Phone</dt>
              <dd>
                <a href={telLink()} className={link}>
                  {c.phone}
                </a>
              </dd>
            </div>
            <div className="grid grid-cols-[6rem_minmax(0,1fr)] py-3">
              <dt className="text-ink/70">WhatsApp</dt>
              <dd>
                <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className={link}>
                  Send a message
                </a>
              </dd>
            </div>
            <div className="grid grid-cols-[6rem_minmax(0,1fr)] py-3">
              <dt className="text-ink/70">Telegram</dt>
              <dd>
                <a href={c.telegram} target="_blank" rel="noopener noreferrer" className={link}>
                  Send a message
                </a>
              </dd>
            </div>
            <div className="grid grid-cols-[6rem_minmax(0,1fr)] py-3">
              <dt className="text-ink/70">Email</dt>
              <dd>
                <a href={`mailto:${c.email}`} className={link}>
                  {c.email}
                </a>
              </dd>
            </div>
          </dl>
        </section>
        <section>
          <h2 className="text-3xl">Find us</h2>
          <address className="mt-6 space-y-4 not-italic text-ink/85">
            <p>
              <strong className="font-medium">{c.loungeName}</strong>
              <br />
              {c.loungeAddress}
            </p>
            <p>
              <strong className="font-medium">{site.name}</strong>
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
