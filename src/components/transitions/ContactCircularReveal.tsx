"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { usePathname, useRouter } from "next/navigation";

const CONTACT_PATH = "/contact";
const EXPAND_MS = 480;
const NAVIGATE_AT_MS = 240;
const FADE_MS = 220;

function prefersReducedMotion() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function maxRadiusFromPoint(x: number, y: number) {
  const w = window.innerWidth;
  const h = window.innerHeight;
  return Math.max(
    Math.hypot(x, y),
    Math.hypot(w - x, y),
    Math.hypot(x, h - y),
    Math.hypot(w - x, h - y)
  );
}

type RevealState = {
  x: number;
  y: number;
  radius: number;
  expanded: boolean;
  fading: boolean;
};

export function ContactCircularReveal({ children }: { children: ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const [reveal, setReveal] = useState<RevealState | null>(null);
  const busyRef = useRef(false);
  const timersRef = useRef<number[]>([]);

  const clearTimers = useCallback(() => {
    timersRef.current.forEach((id) => window.clearTimeout(id));
    timersRef.current = [];
  }, []);

  const endReveal = useCallback(() => {
    setReveal((prev) => {
      if (!prev || prev.fading) return prev;
      return { ...prev, fading: true };
    });
    const id = window.setTimeout(() => {
      setReveal(null);
      busyRef.current = false;
    }, FADE_MS);
    timersRef.current.push(id);
  }, []);

  // Prefetch contact so navigation is ready mid-expand
  useEffect(() => {
    router.prefetch(CONTACT_PATH);
  }, [router]);

  // After navigation lands on /contact, fade the veil away
  useEffect(() => {
    if (!reveal || reveal.fading || !reveal.expanded) return;
    if (pathname !== CONTACT_PATH) return;
    endReveal();
  }, [pathname, reveal, endReveal]);

  useEffect(() => () => clearTimers(), [clearTimers]);

  useEffect(() => {
    function onClick(event: MouseEvent) {
      if (event.defaultPrevented) return;
      if (event.button !== 0) return;
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
        return;
      }
      if (busyRef.current) return;

      const target = event.target;
      if (!(target instanceof Element)) return;

      const anchor = target.closest("a[href]");
      if (!(anchor instanceof HTMLAnchorElement)) return;

      let url: URL;
      try {
        url = new URL(anchor.href, window.location.origin);
      } catch {
        return;
      }

      if (url.origin !== window.location.origin) return;
      if (url.pathname !== CONTACT_PATH) return;
      if (pathname === CONTACT_PATH) return;
      if (prefersReducedMotion()) return;

      event.preventDefault();
      event.stopPropagation();

      const rect = anchor.getBoundingClientRect();
      const x = rect.left + rect.width / 2;
      const y = rect.top + rect.height / 2;
      const radius = maxRadiusFromPoint(x, y) + 32;

      busyRef.current = true;
      clearTimers();
      router.prefetch(CONTACT_PATH);
      setReveal({ x, y, radius, expanded: false, fading: false });

      requestAnimationFrame(() => {
        setReveal((prev) => (prev ? { ...prev, expanded: true } : prev));
      });

      // Start route change while circle is still expanding
      const navId = window.setTimeout(() => {
        router.push(CONTACT_PATH);
      }, NAVIGATE_AT_MS);
      timersRef.current.push(navId);

      // Safety fade if route effect doesn't fire
      const safetyId = window.setTimeout(endReveal, EXPAND_MS + 500);
      timersRef.current.push(safetyId);
    }

    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, [pathname, router, clearTimers, endReveal]);

  return (
    <>
      {children}
      {reveal ? (
        <div
          aria-hidden
          className="pointer-events-none fixed inset-0 z-[10000]"
          style={{
            backgroundColor: "var(--surface)",
            clipPath: reveal.expanded
              ? `circle(${reveal.radius}px at ${reveal.x}px ${reveal.y}px)`
              : `circle(0px at ${reveal.x}px ${reveal.y}px)`,
            opacity: reveal.fading ? 0 : 1,
            transition: reveal.fading
              ? `opacity ${FADE_MS}ms ease-out`
              : `clip-path ${EXPAND_MS}ms cubic-bezier(0.2, 0.8, 0.2, 1)`,
            willChange: "clip-path, opacity",
          }}
        />
      ) : null}
    </>
  );
}
