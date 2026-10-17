import Link from "next/link";
import { nav, site } from "@/lib/site";
import { BookButton } from "./BookButton";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-sand/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <Link href="/" className="font-serif text-xl font-semibold text-sea-dark">
          {site.name}
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-5 text-sm lg:flex">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-sea">
              {item.label}
            </Link>
          ))}
          <BookButton className="py-2!">Book now</BookButton>
        </nav>

        {/* No-JS mobile menu */}
        <details className="group relative lg:hidden">
          <summary className="cursor-pointer list-none rounded border border-line px-3 py-2 text-sm font-medium">
            Menu
          </summary>
          <nav
            aria-label="Mobile"
            className="absolute right-0 mt-2 flex w-56 flex-col gap-1 rounded-lg border border-line bg-white p-3 shadow-lg"
          >
            {nav.map((item) => (
              <Link key={item.href} href={item.href} className="rounded px-2 py-2 hover:bg-sand">
                {item.label}
              </Link>
            ))}
            <BookButton className="mt-2">Book now</BookButton>
          </nav>
        </details>
      </div>
    </header>
  );
}
