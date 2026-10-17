import type { Metadata } from "next";
import { PageHeading } from "@/components/PageHeading";
import { activities, dining } from "@/lib/content";

export const metadata: Metadata = {
  title: "Dining & Activities",
  description: "Island dining, snorkelling, kayaking and more at Koh Russey Resort.",
};

export default function ExperiencesPage() {
  return (
    <>
      <PageHeading title="Dining & Activities" intro="Good food and plenty to do, or nothing at all." />
      <div className="mx-auto max-w-6xl space-y-12 px-4 py-12">
        <section>
          <h2 className="font-serif text-2xl font-semibold text-sea-dark">{dining.title}</h2>
          <p className="mt-2 max-w-2xl text-ink/80">{dining.body}</p>
        </section>
        <section>
          <h2 className="font-serif text-2xl font-semibold text-sea-dark">Activities</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {activities.map((a) => (
              <div key={a.title} className="rounded-xl border border-line bg-white p-5">
                <h3 className="font-semibold">{a.title}</h3>
                <p className="mt-1 text-sm text-ink/80">{a.body}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
