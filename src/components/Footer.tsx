import Link from "next/link";
import { nav, secondaryNav, site, telLink, whatsappLink } from "@/lib/site";

const social = [
  { label: "Facebook", href: site.social.facebook },
  { label: "Instagram", href: site.social.instagram },
  { label: "TikTok", href: site.social.tiktok },
];

const item = "text-salt/80 hover:text-salt hover:underline underline-offset-4";

export function Footer() {
  const c = site.contact;
  return (
    <footer className="mt-24 bg-ink text-salt">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-[1.2fr_1fr_1.2fr]">
        <div>
          <p className="font-display text-2xl">{site.name}</p>
          <p className="mt-2 text-salt/80">{site.tagline}</p>
          <ul className="mt-5 flex gap-5 text-sm">
            {social.map((s) => (
              <li key={s.label}>
                <a href={s.href} target="_blank" rel="noopener noreferrer" className={item}>
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <nav aria-label="Footer" className="grid grid-cols-2 gap-x-6 gap-y-2 text-sm md:grid-cols-1">
          {[...secondaryNav, ...nav].map((n) => (
            <Link key={n.href} href={n.href} className={item}>
              {n.label}
            </Link>
          ))}
        </nav>
        <address className="space-y-3 text-sm not-italic text-salt/80">
          <p>{c.resortAddress}</p>
          <p>
            <a href={`mailto:${c.email}`} className={item}>
              {c.email}
            </a>
          </p>
          <p>
            <a href={telLink()} className={item}>
              {c.phone}
            </a>
          </p>
          <p>
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className={item}>
              Message us on WhatsApp
            </a>
          </p>
        </address>
      </div>
      <div className="border-t border-salt/15 py-5 text-center text-xs text-salt/60">
        &copy; {site.name}. All rights reserved.
      </div>
    </footer>
  );
}
