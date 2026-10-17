import type { Metadata } from "next";
import Link from "next/link";
import { PageHeading } from "@/components/PageHeading";
import { activities } from "@/lib/content";

export const metadata: Metadata = {
  title: "Activities",
  description: "Snorkeling, paddleboarding, cultural tours and spa rituals on a private island in Cambodia.",
};

export default function ActivitiesPage() {
  return (
    <>
      <PageHeading title={activities.title} intro={activities.body} />
      <div className="mx-auto max-w-6xl px-4 py-12">
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {activities.items.map((item) => (
            <li key={item} className="rounded-xl border border-line bg-white p-5 font-semibold">
              {item}
            </li>
          ))}
        </ul>
        <Link href="/spa" className="mt-8 inline-block text-sm font-medium text-sea hover:underline">
          Island Spa &amp; Wellness
        </Link>
      </div>
    </>
  );
}
