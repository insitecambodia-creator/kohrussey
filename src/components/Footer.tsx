import Link from "next/link";
import { nav, site, whatsappLink } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-16 bg-sea-dark text-white">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 md:grid-cols-3">
        <div>
          <p className="font-serif text-xl font-semibold">{site.name}</p>
          <p className="mt-2 text-sm text-white/80">{site.tagline}</p>
        </div>
        <nav aria-label="Footer" className="flex flex-col gap-2 text-sm">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="text-white/80 hover:text-white">
              {item.label}
            </Link>
          ))}
        </nav>
        <address className="space-y-2 text-sm not-italic text-white/80">
          <p>{site.contact.address}</p>
          <p>
            <a href={`mailto:${site.contact.email}`} className="hover:text-white">
              {site.contact.email}
            </a>
          </p>
          <p>
            <a href={`tel:${site.contact.phone.replace(/\s/g, "")}`} className="hover:text-white">
              {site.contact.phone}
            </a>
          </p>
          <p>
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="hover:text-white">
              Message us on WhatsApp
            </a>
          </p>
        </address>
      </div>
      <div className="border-t border-white/15 py-4 text-center text-xs text-white/60">
        &copy; {site.name}. All rights reserved.
      </div>
    </footer>
  );
}
