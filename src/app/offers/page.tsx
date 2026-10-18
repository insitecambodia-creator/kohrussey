import type { Metadata } from "next";
import { BookButton } from "@/components/BookButton";
import { PageHeading } from "@/components/PageHeading";
import { allInclusive } from "@/lib/content";
import { prose } from "@/lib/ui";

export const metadata: Metadata = {
  title: "Promotions & Special Offers",
  description: "The All-Inclusive Villa Experience at Koh Russey Resort.",
};

export default function OffersPage() {
  return (
    <>
      <PageHeading title="Promotions & Special Offers" />
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-14 md:grid-cols-12">
        <h2 className="text-3xl md:col-span-5">{allInclusive.title}</h2>
        <div className="md:col-span-7">
          <p className={`text-ink/85 ${prose}`}>{allInclusive.body}</p>
          <div className="mt-8">
            <BookButton>Book the all-inclusive package</BookButton>
          </div>
        </div>
      </div>
    </>
  );
}
