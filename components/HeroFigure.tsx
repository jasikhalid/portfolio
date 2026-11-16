"use client";

import dynamic from "next/dynamic";
import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";

const HeroScene = dynamic(() => import("./HeroScene"), { ssr: false });

type Connection = { saveData?: boolean; effectiveType?: string };

// The SVG fallback (children) is always rendered first. The WebGL scene is only fetched when the page is idle,
// the figure is near the viewport, and the device can afford it. Otherwise the SVG simply stays.
function canRun3D() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return false;
  if (!window.matchMedia("(min-width: 1024px) and (pointer: fine)").matches) return false;
  if ((navigator.hardwareConcurrency ?? 4) < 4) return false;
  const connection = (navigator as Navigator & { connection?: Connection }).connection;
  if (connection?.saveData || /2g/.test(connection?.effectiveType ?? "")) return false;
  try {
    return Boolean(document.createElement("canvas").getContext("webgl2"));
  } catch {
    return false;
  }
}

export default function HeroFigure({ children }: { children: ReactNode }) {
  const box = useRef<HTMLDivElement>(null);
  const [load, setLoad] = useState(false);
  const [ready, setReady] = useState(false);
  const onReady = useCallback(() => setReady(true), []);

  useEffect(() => {
    if (!canRun3D() || !box.current) return;
    let idle = 0;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        const start = () => setLoad(true);
        const later = () => (idle = window.requestIdleCallback ? window.requestIdleCallback(start, { timeout: 2500 }) : window.setTimeout(start, 1200));
        if (document.readyState === "complete") later();
        else window.addEventListener("load", later, { once: true });
      },
      { rootMargin: "200px" },
    );
    observer.observe(box.current);
    return () => {
      observer.disconnect();
      if (idle && window.cancelIdleCallback) window.cancelIdleCallback(idle);
    };
  }, []);

  return (
    <div ref={box} className="relative h-full w-full">
      <div className={`h-full w-full transition-opacity duration-slow ease-out ${ready ? "opacity-0" : "opacity-100"}`} aria-hidden={ready || undefined}>
        {children}
      </div>
      {load && (
        <div className={`absolute inset-0 transition-opacity duration-slow ease-out ${ready ? "opacity-100" : "opacity-0"}`}>
          <HeroScene onReady={onReady} />
        </div>
      )}
    </div>
  );
}
