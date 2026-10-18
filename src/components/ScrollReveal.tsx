"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

const SELECTOR = "[data-reveal], [data-reveal-group]";

/**
 * Drives the scroll reveals defined in globals.css. Mount it once in the root layout.
 *
 * Content is fully visible until this runs. On each page it first marks whatever is already on
 * screen as revealed (so nothing flashes), then switches the hidden state on for the rest and
 * reveals each element the first time it scrolls into view.
 */
export function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!("IntersectionObserver" in window)) return;

    const pending: HTMLElement[] = [];
    for (const el of document.querySelectorAll<HTMLElement>(SELECTOR)) {
      if (el.classList.contains("is-in")) continue;
      const { top, bottom } = el.getBoundingClientRect();
      if (top < window.innerHeight * 0.92 && bottom > 0) el.classList.add("is-in");
      else pending.push(el);
    }
    document.documentElement.classList.add("reveal-live");

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add("is-in");
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 },
    );
    pending.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
