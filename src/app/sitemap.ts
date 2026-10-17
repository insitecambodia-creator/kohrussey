import type { MetadataRoute } from "next";
import { nav, site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ["", "/about", "/spa", ...nav.map((n) => n.href)];
  return paths.map((path) => ({ url: `${site.url}${path}` }));
}
