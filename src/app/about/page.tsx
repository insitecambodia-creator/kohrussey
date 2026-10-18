import type { Metadata } from "next";
import { PageHeading } from "@/components/PageHeading";
import { introLead, introRest, location } from "@/lib/content";
import { prose } from "@/lib/ui";

export const metadata: Metadata = {
  title: "About us",
  description: "Koh Russey Resort is a luxury private island resort in Cambodia.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeading title="About us" intro={introLead} />
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-14 md:grid-cols-12">
        <div data-reveal="rise" className={`space-y-6 text-ink/85 md:col-span-7 ${prose}`}>
          <p>{introRest}</p>
        </div>
        <div data-reveal="rise" data-delay="1" className="md:col-span-5">
          <h2 className="text-2xl">{location.title}</h2>
          <p className="mt-3 text-ink/85">{location.body}</p>
        </div>
      </div>
    </>
  );
}
