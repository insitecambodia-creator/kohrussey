import type { MetadataRoute } from "next";
import { nav, secondaryNav, site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ["", ...secondaryNav.map((n) => n.href), ...nav.map((n) => n.href)];
  return paths.map((path) => ({ url: `${site.url}${path}` }));
}
