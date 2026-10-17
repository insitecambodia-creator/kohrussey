import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // Old WordPress URLs from the current site, so existing links and rankings keep working.
  async redirects() {
    return [
      { source: "/private-beachfront-residence", destination: "/villas", permanent: true },
      { source: "/restaurants-on-the-island", destination: "/restaurants", permanent: true },
      { source: "/activities-on-the-island", destination: "/activities", permanent: true },
      {
        source: "/activities-on-the-island/healthy-spa-koh-russey-a-journey-from-within",
        destination: "/spa",
        permanent: true,
      },
      { source: "/wedding-packages-cambodia", destination: "/weddings", permanent: true },
      { source: "/promotions-and-special-offers", destination: "/offers", permanent: true },
      {
        source: "/promotions-and-special-offers/all-inclusive-package",
        destination: "/offers",
        permanent: true,
      },
      { source: "/how-to-get-to-koh-russey-island", destination: "/getting-here", permanent: true },
      { source: "/about-us", destination: "/about", permanent: true },
      { source: "/contact-us", destination: "/contact", permanent: true },
    ];
  },
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
