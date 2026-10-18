import localFont from "next/font/local";

/**
 * Wulkan Display, the corporate display face. The files are subsets (Latin, with the French
 * accents) of the originals in brand/fonts. It has no Khmer or Chinese glyphs, so those fall
 * back to the system fonts listed in globals.css.
 *   Light for the largest headings, Regular for headings, Medium for the smallest uses.
 */
export const wulkan = localFont({
  src: [
    { path: "../assets/fonts/wulkan-display-light.woff2", weight: "300", style: "normal" },
    { path: "../assets/fonts/wulkan-display-regular.woff2", weight: "400", style: "normal" },
    { path: "../assets/fonts/wulkan-display-medium.woff2", weight: "500", style: "normal" },
  ],
  variable: "--font-wulkan",
  display: "swap",
  fallback: ["Georgia", "Times New Roman", "serif"],
});
