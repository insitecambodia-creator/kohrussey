import { readdirSync, readFileSync } from "node:fs";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig, fontProviders } from "astro/config";
import { loadEnv } from "vite";
import { redirects, redirectsFile } from "./redirects.mjs";

// PUBLIC_SITE_URL can come from the host's environment or from a local .env file.
const env = { ...loadEnv(process.env.NODE_ENV ?? "production", process.cwd(), "PUBLIC_"), ...process.env };
const site = env.PUBLIC_SITE_URL || "https://www.kohrusseyresort.com";

// Blog posts: when each was last changed (for the sitemap), and which ask to stay out of search results.
// Read straight from the Markdown files' front matter, since this file runs before the site's content is loaded.
const blogDir = new URL("./src/content/blog/", import.meta.url);
const blog = new Map();
for (const file of readdirSync(blogDir).filter((f) => f.endsWith(".md"))) {
  const front = readFileSync(new URL(file, blogDir), "utf8").match(/^---\r?\n([\s\S]*?)\r?\n---/)?.[1] ?? "";
  const field = (name) => front.match(new RegExp(`^${name}:\\s*["']?([^"'\\r\\n]+)`, "m"))?.[1]?.trim();
  const lastmod = new Date(field("updated") ?? field("date") ?? "");
  blog.set(`/blog/${file.replace(/\.md$/, "")}/`, {
    lastmod: Number.isNaN(lastmod.getTime()) ? undefined : lastmod,
    noindex: field("noindex") === "true",
  });
}

export default defineConfig({
  site,
  // Every page is a folder with an index.html (/villas/), which any static host serves as is.
  trailingSlash: "always",
  redirects,
  // The stylesheet is small, so it goes inside each page instead of being a separate file that holds up the first paint.
  build: { inlineStylesheets: "always" },
  integrations: [
    // The booking page stays out of the sitemap, as on the current site; so do the editor and posts marked noindex.
    sitemap({
      filter: (page) => {
        const path = new URL(page).pathname;
        return !path.startsWith("/booking/") && !path.startsWith("/admin/") && !blog.get(path)?.noindex;
      },
      serialize: (item) => {
        const lastmod = blog.get(new URL(item.url).pathname)?.lastmod;
        return lastmod ? { ...item, lastmod: lastmod.toISOString() } : item;
      },
    }),
    redirectsFile(),
  ],
  // Wulkan Display, the corporate display face. The files are subsets (Latin, with the French
  // accents) of the originals in brand/fonts. It has no Khmer or Chinese glyphs, so those fall
  // back to the system fonts listed in global.css.
  //   Light for the largest headings, Regular for headings, Medium for the smallest uses.
  fonts: [
    {
      provider: fontProviders.local(),
      name: "Wulkan Display",
      cssVariable: "--font-wulkan",
      fallbacks: ["Georgia", "Times New Roman", "serif"],
      display: "swap",
      weights: [300, 400, 500],
      styles: ["normal"],
      options: {
        variants: [
          { src: ["./src/assets/fonts/wulkan-display-light.woff2"], weight: 300, style: "normal" },
          { src: ["./src/assets/fonts/wulkan-display-regular.woff2"], weight: 400, style: "normal" },
          { src: ["./src/assets/fonts/wulkan-display-medium.woff2"], weight: 500, style: "normal" },
        ],
      },
    },
  ],
  vite: { plugins: [tailwindcss()] },
});
