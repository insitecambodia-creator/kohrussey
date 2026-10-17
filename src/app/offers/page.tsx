import type { Metadata } from "next";
import { BookButton } from "@/components/BookButton";
import { PageHeading } from "@/components/PageHeading";
import { allInclusive } from "@/lib/content";

export const metadata: Metadata = {
  title: "Promotions & Special Offers",
  description: "The All-Inclusive Villa Experience at Koh Russey Resort.",
};

export default function OffersPage() {
  return (
    <>
      <PageHeading title="Promotions & Special Offers" />
      <div className="mx-auto max-w-3xl px-4 py-12">
        <article className="rounded-2xl bg-white p-8 ring-1 ring-line">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-coral">{allInclusive.eyebrow}</p>
          <h2 className="mt-1 font-serif text-2xl font-semibold text-sea-dark">{allInclusive.title}</h2>
          <p className="mt-3 text-ink/80">{allInclusive.body}</p>
          <div className="mt-6">
            <BookButton>Go for our all-inclusive package</BookButton>
          </div>
        </article>
      </div>
    </>
  );
}
