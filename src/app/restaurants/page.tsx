import type { Metadata } from "next";
import { PageHeading } from "@/components/PageHeading";
import { restaurants, restaurantsIntro, type MenuSection } from "@/lib/menus";
import { prose } from "@/lib/ui";

export const metadata: Metadata = {
  title: restaurantsIntro.title,
  description: restaurantsIntro.description,
};

function MenuBlock({ section }: { section: MenuSection }) {
  return (
    <section data-reveal="rise" className="mb-10 break-inside-avoid">
      <h4 className="font-display text-2xl">{section.title}</h4>
      {section.note ? <p className="mt-2 text-ink/80">{section.note}</p> : null}
      {section.items ? (
        <ul className="mt-3 border-t border-ink/15">
          {section.items.map((item) => (
            <li key={item.name} className="border-b border-ink/15 py-3">
              <div className="flex items-baseline justify-between gap-6">
                <span className="font-medium">{item.name}</span>
                <span className="tabular-nums">{item.price}</span>
              </div>
              {item.details?.map((line) => (
                <p key={line} className="mt-1 max-w-[56ch] text-sm text-ink/75">
                  {line}
                </p>
              ))}
            </li>
          ))}
        </ul>
      ) : null}
    </section>
  );
}

export default function RestaurantsPage() {
  return (
    <>
      <PageHeading title={restaurantsIntro.title} intro={restaurantsIntro.tagline} />
      <div className="mx-auto max-w-6xl px-4">
        {restaurants.map((r) => (
          <article key={r.id} id={r.id} className="scroll-mt-24 border-b border-ink/15 py-16">
            <div className="grid gap-8 md:grid-cols-12">
              <div className="md:col-span-4">
                <h2 data-reveal="rise" className="text-3xl md:text-4xl">
                  {r.name}
                </h2>
                <p data-reveal="rise" data-delay="1" className={`mt-5 text-ink/85 ${prose}`}>
                  {r.description}
                </p>
              </div>
              <div className="md:col-span-8">
                <h3 data-reveal="rise" className="mb-6 text-xl font-medium">
                  {r.name} menu
                </h3>
                <div className="lg:columns-2 lg:gap-x-12">
                  {r.menu.map((section) => (
                    <MenuBlock key={section.title} section={section} />
                  ))}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
