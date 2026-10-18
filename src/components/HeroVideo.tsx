"use client";

import { useEffect, useRef, useState } from "react";

const ORIGIN = "https://www.youtube-nocookie.com";

type PlayerCommand = { event: "command"; func: string; args: unknown[] };

/**
 * A muted, looping YouTube video behind the hero text.
 *
 * - It only loads once the page has finished loading, so the hero photo stays the first thing
 *   painted, and never for visitors who prefer reduced motion or have Save-Data on.
 * - The photo underneath stays visible until YouTube reports that playback has started, so a
 *   blocked, private or non-embeddable video never shows YouTube's error screen.
 * - It pauses while the hero is scrolled out of view.
 * - It uses youtube-nocookie.com so YouTube sets no cookies until the visitor interacts.
 */
export function HeroVideo({ videoId }: { videoId: string }) {
  const frameRef = useRef<HTMLIFrameElement>(null);
  const [src, setSrc] = useState<string | null>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const connection = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || connection?.saveData) return;

    const params = new URLSearchParams({
      autoplay: "1",
      mute: "1",
      controls: "0",
      loop: "1",
      playlist: videoId, // YouTube only loops a single video when it is also the playlist
      playsinline: "1",
      modestbranding: "1",
      rel: "0",
      iv_load_policy: "3",
      disablekb: "1",
      fs: "0",
      enablejsapi: "1",
      origin: window.location.origin,
    });
    const load = () => setSrc(`${ORIGIN}/embed/${videoId}?${params}`);

    if (document.readyState === "complete") {
      const id = window.setTimeout(load, 0);
      return () => window.clearTimeout(id);
    }
    window.addEventListener("load", load, { once: true });
    return () => window.removeEventListener("load", load);
  }, [videoId]);

  useEffect(() => {
    const frame = frameRef.current;
    if (!src || !frame) return;

    const send = (message: object) => frame.contentWindow?.postMessage(JSON.stringify(message), ORIGIN);
    const command = (func: string): PlayerCommand => ({ event: "command", func, args: [] });

    const onMessage = (event: MessageEvent) => {
      if (event.source !== frame.contentWindow || event.origin !== ORIGIN) return;
      let data: { event?: string; info?: unknown } | null = null;
      try {
        data = typeof event.data === "string" ? JSON.parse(event.data) : event.data;
      } catch {
        return;
      }
      const info = data?.info as { playerState?: number } | number | undefined;
      const state = data?.event === "onStateChange" ? info : typeof info === "object" ? info?.playerState : undefined;
      if (state === 1) setPlaying(true);
    };

    // Ask the player to report its state; it replies to the messages above.
    const onLoad = () => {
      send({ event: "listening", id: 1, channel: "widget" });
      send({ event: "command", func: "addEventListener", args: ["onStateChange"], id: 1, channel: "widget" });
    };

    const observer = new IntersectionObserver(([entry]) => {
      send(command(entry.isIntersecting ? "playVideo" : "pauseVideo"));
    });
    if (frame.parentElement) observer.observe(frame.parentElement);

    window.addEventListener("message", onMessage);
    frame.addEventListener("load", onLoad);
    return () => {
      window.removeEventListener("message", onMessage);
      frame.removeEventListener("load", onLoad);
      observer.disconnect();
    };
  }, [src]);

  return (
    <div
      aria-hidden
      className={`hero-video pointer-events-none absolute inset-0 -z-[15] overflow-hidden transition-opacity duration-[1600ms] ${
        playing ? "opacity-100" : "opacity-0"
      }`}
    >
      {src ? (
        <iframe
          ref={frameRef}
          src={src}
          title="Background video of Koh Russey Resort"
          tabIndex={-1}
          allow="autoplay; encrypted-media"
          referrerPolicy="strict-origin-when-cross-origin"
          className="border-0"
        />
      ) : null}
    </div>
  );
}
