import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig, fontProviders } from "astro/config";
import { loadEnv } from "vite";
import { redirects, redirectsFile } from "./redirects.mjs";

// PUBLIC_SITE_URL can come from the host's environment or from a local .env file.
const env = { ...loadEnv(process.env.NODE_ENV ?? "production", process.cwd(), "PUBLIC_"), ...process.env };
const site = env.PUBLIC_SITE_URL || "https://www.kohrusseyresort.com";

export default defineConfig({
  site,
  // Every page is a folder with an index.html (/villas/), which any static host serves as is.
  trailingSlash: "always",
  redirects,
  integrations: [
    // The booking page stays out of the sitemap, as on the current site.
    sitemap({ filter: (page) => !new URL(page).pathname.startsWith("/booking/") }),
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
