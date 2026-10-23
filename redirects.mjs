// Old WordPress addresses from kohrusseyresort.com, so existing links and search rankings keep working.
// Used twice: Astro writes a redirect page for each (a fallback that works on any host), and
// `redirectsFile()` writes a `_redirects` file that Netlify and Cloudflare Pages turn into real 301s.
// Other hosts: copy these into the host's own redirect settings (for Vercel, `vercel.json`).

export const redirects = {
  "/private-beachfront-residence": "/villas/",
  "/private-beachfront-residence/garden-pavilion": "/villas/#garden-pavilion",
  "/restaurants-on-the-island": "/restaurants/",
  "/restaurants-on-the-island/menu-horizon-2024": "/restaurants/#horizon",
  "/restaurants-on-the-island/beach-shack-by-the-sea": "/restaurants/#beach-shack",
  "/activities-on-the-island": "/activities/",
  "/activities-on-the-island/khmer-cooking-class": "/activities/#khmer-cooking-class",
  "/activities-on-the-island/kayaking": "/activities/#resort-activities",
  "/activities-on-the-island/snorkeling": "/activities/#resort-activities",
  "/activities-on-the-island/healthy-spa-koh-russey-a-journey-from-within": "/spa/",
  "/wedding-packages-cambodia": "/weddings/",
  "/promotions-and-special-offers": "/offers/",
  "/promotions-and-special-offers/all-inclusive-package": "/offers/",
  "/how-to-get-to-koh-russey-island": "/getting-here/",
  "/about-us": "/about/",
  "/contact-us": "/contact/",
};

/** Astro integration: writes `dist/_redirects` (Netlify / Cloudflare Pages format) after the build. */
export function redirectsFile() {
  return {
    name: "redirects-file",
    hooks: {
      "astro:build:done": async ({ dir }) => {
        const { writeFile } = await import("node:fs/promises");
        const lines = Object.entries(redirects).flatMap(([from, to]) => [
          `${from} ${to} 301`,
          `${from}/ ${to} 301`,
        ]);
        await writeFile(new URL("_redirects", dir), `${lines.join("\n")}\n`);
      },
    },
  };
}
