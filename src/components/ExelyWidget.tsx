"use client";

import { useEffect } from "react";
import { site } from "@/lib/site";

type Widget = "booking-form" | "search-form";

type ExelyCommand = [string, ...unknown[]];

type ExelyWindow = Window & {
  bookingengine?: {
    integration?: { __cq?: ExelyCommand[]; __loader?: boolean; loaded?: boolean };
  };
};

const SCRIPT_ATTR = "data-exely-loader";

/**
 * Mounts an Exely booking-engine widget into a container, using the same loader the
 * current WordPress site uses: https://<host>/integration/loader.js, tried against each
 * host in turn until one loads.
 *
 * The loader only reads its command queue once, so the integration is reset and reloaded
 * every time the widget mounts. That keeps it working across client-side navigations.
 */
export function ExelyWidget({
  widget,
  containerId,
  className = "",
}: {
  widget: Widget;
  containerId: string;
  className?: string;
}) {
  useEffect(() => {
    const w = window as ExelyWindow;
    const { contextId, hosts, language } = site.exely;
    let cancelled = false;

    w.bookingengine = {
      integration: {
        __cq: [
          ["setContext", contextId, language],
          ["embed", widget, { container: containerId }],
        ],
        __loader: true,
      },
    };

    const tryHost = (index: number) => {
      if (cancelled || index >= hosts.length) return;
      const script = document.createElement("script");
      script.async = true;
      script.setAttribute(SCRIPT_ATTR, "");
      script.src = `https://${hosts[index]}/integration/loader.js`;
      const next = () => {
        if (w.bookingengine?.integration?.loaded) return;
        script.remove();
        tryHost(index + 1);
      };
      script.onload = next;
      script.onerror = next;
      document.head.appendChild(script);
    };
    tryHost(0);

    return () => {
      cancelled = true;
      document.querySelectorAll(`script[${SCRIPT_ATTR}]`).forEach((el) => el.remove());
      delete w.bookingengine;
      document.getElementById(containerId)?.replaceChildren();
    };
  }, [widget, containerId]);

  return <div id={containerId} className={className} />;
}
