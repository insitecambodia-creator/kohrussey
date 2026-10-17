import type { Metadata } from "next";
import { PageHeading } from "@/components/PageHeading";
import { intro, location } from "@/lib/content";

export const metadata: Metadata = {
  title: "About us",
  description: "Koh Russey Resort is a luxury private island resort in Cambodia.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeading title="About us" intro={intro} />
      <div className="mx-auto max-w-3xl px-4 py-12 text-ink/80">
        <h2 className="font-serif text-2xl font-semibold text-sea-dark">{location.title}</h2>
        <p className="mt-3">{location.body}</p>
      </div>
    </>
  );
}
