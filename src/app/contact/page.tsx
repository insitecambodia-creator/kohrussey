import type { Metadata } from "next";
import { PageHeading } from "@/components/PageHeading";
import { site, whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Koh Russey Resort.",
};

export default function ContactPage() {
  const { email, phone } = site.contact;
  return (
    <>
      <PageHeading title="Contact" intro="Questions before you book? We're happy to help." />
      <div className="mx-auto max-w-3xl space-y-4 px-4 py-12">
        <ul className="space-y-3 text-lg">
          <li>
            WhatsApp:{" "}
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="text-sea underline">
              Send a message
            </a>
          </li>
          <li>
            Email:{" "}
            <a href={`mailto:${email}`} className="text-sea underline">
              {email}
            </a>
          </li>
          <li>
            Phone:{" "}
            <a href={`tel:${phone.replace(/\s/g, "")}`} className="text-sea underline">
              {phone}
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
