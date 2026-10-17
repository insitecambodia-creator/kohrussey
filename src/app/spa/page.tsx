import type { Metadata } from "next";
import { PageHeading } from "@/components/PageHeading";
import { spa } from "@/lib/content";

export const metadata: Metadata = {
  title: "Island Spa & Wellness",
  description: "Couples' massages, healing therapies and yoga at Koh Russey Resort.",
};

export default function SpaPage() {
  return <PageHeading title={spa.title} intro={spa.body} />;
}
