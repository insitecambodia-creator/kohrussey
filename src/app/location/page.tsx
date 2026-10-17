import type { Metadata } from "next";
import { PageHeading } from "@/components/PageHeading";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Getting here",
  description: "How to reach Koh Russey Resort.",
};

export default function LocationPage() {
  return (
    <>
      <PageHeading title="Getting here" intro={site.contact.address} />
      <div className="mx-auto max-w-3xl space-y-4 px-4 py-12 text-ink/80">
        {/* PLACEHOLDER: replace with the real route, boat/transfer times and a map embed. */}
        <p>Directions, transfer details and a map will go here.</p>
      </div>
    </>
  );
}
