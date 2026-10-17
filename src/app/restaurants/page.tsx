import type { Metadata } from "next";
import { PageHeading } from "@/components/PageHeading";
import { dining } from "@/lib/content";

export const metadata: Metadata = {
  title: "Restaurants",
  description: "Khmer and international cuisine at Koh Russey Resort's beachfront restaurants and bars.",
};

export default function RestaurantsPage() {
  return <PageHeading title={dining.title} intro={dining.body} />;
}
