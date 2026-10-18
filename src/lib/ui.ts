// Shared class strings, so buttons and links look the same on every page.

const base =
  "inline-flex items-center justify-center px-6 py-3 text-sm font-medium transition-colors";

/** Solid buttons: `dark` on light backgrounds, `sand` on dark ones. */
export const button = {
  dark: `${base} bg-ink text-salt hover:bg-pool`,
  sand: `${base} bg-sand text-ink hover:bg-white`,
  outline: `${base} border border-ink text-ink hover:bg-ink hover:text-salt`,
  outlineOnDark: `${base} border border-salt/70 text-salt hover:bg-salt hover:text-ink`,
} as const;

/** Inline text link. */
export const link = "text-pool underline underline-offset-4 decoration-pool/40 hover:decoration-pool";

/** Readable measure for running text. */
export const prose = "max-w-[62ch]";
