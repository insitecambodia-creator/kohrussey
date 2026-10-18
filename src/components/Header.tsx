import Link from "next/link";
import { nav, site } from "@/lib/site";
import { BookButton } from "./BookButton";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-ink/15 bg-salt/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-4 py-3">
        <Link href="/" className="font-display text-xl font-medium">
          {site.name}
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-6 text-sm lg:flex">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-pool hover:underline underline-offset-4">
              {item.label}
            </Link>
          ))}
          <BookButton className="py-2!">Book now</BookButton>
        </nav>

        {/* Mobile menu: works without JavaScript */}
        <details className="relative lg:hidden">
          <summary className="cursor-pointer list-none border border-ink/30 px-4 py-2 text-sm font-medium">
            Menu
          </summary>
          <nav
            aria-label="Mobile"
            className="absolute right-0 mt-2 flex w-60 flex-col border border-ink/15 bg-salt p-2 shadow-sm"
          >
            {nav.map((item) => (
              <Link key={item.href} href={item.href} className="px-3 py-2 hover:bg-ink/5">
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
