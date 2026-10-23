import type { APIRoute } from "astro";
import { site } from "../lib/site";

export const GET: APIRoute = ({ site: siteUrl }) => {
  // Disallow everything until PUBLIC_ALLOW_INDEXING=true, so the redesign cannot compete with the live site before launch.
  const body = site.allowIndexing
    ? `User-agent: *\nAllow: /\n\nSitemap: ${new URL("sitemap-index.xml", siteUrl)}\n`
    : "User-agent: *\nDisallow: /\n";
  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
};
