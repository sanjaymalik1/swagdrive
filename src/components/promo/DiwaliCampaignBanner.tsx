"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Cormorant_Garamond } from "next/font/google";

// Same heading face as /diwali (loaded there via --font-diwali-heading).
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const SHOW_DELAY_MS = 3000;

export function DiwaliCampaignBanner() {
  const [rendered, setRendered] = useState(false);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    let raf = 0;
    const timer = window.setTimeout(() => {
      setRendered(true);
      raf = requestAnimationFrame(() =>
        requestAnimationFrame(() => setShown(true)),
      );
    }, SHOW_DELAY_MS);
    return () => {
      window.clearTimeout(timer);
      cancelAnimationFrame(raf);
    };
  }, []);

  function dismiss() {
    setRendered(false);
    setShown(false);
  }

  if (!rendered) return null;

  return (
    <aside
      aria-label="Diwali 2026 campaign"
      className={`fixed bottom-4 left-4 right-4 z-50 overflow-hidden rounded-[0.625rem] border border-[#c99a2e]/30 bg-[linear-gradient(180deg,#4d123b_0%,#3f0d33_65%,#340a2b_100%)] p-3.5 text-center shadow-[0_18px_44px_-14px_rgba(0,0,0,0.65),0_0_32px_-10px_rgba(224,180,79,0.35)] transition duration-500 ease-out motion-reduce:transition-none sm:bottom-6 sm:left-auto sm:right-6 sm:w-[360px] sm:p-4 ${
        shown
          ? "translate-y-0 scale-100 opacity-100"
          : "translate-y-3 scale-[0.98] opacity-0 motion-reduce:translate-y-0 motion-reduce:scale-100"
      }`}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-6 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(224,180,79,0.75),transparent)]"
      />
      <button
        type="button"
        onClick={dismiss}
        aria-label="Close Diwali campaign"
        className="absolute right-1.5 top-1.5 flex size-10 items-center justify-center rounded-full text-xl leading-none text-[#dcc69a] transition hover:text-[#f7ebd5] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#e0b44f]"
      >
        <span aria-hidden="true">×</span>
      </button>

      <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-[#e0b44f]">
        Diwali 2026
      </p>
      <h2
        className={`${cormorant.className} mt-1.5 text-[1.55rem] font-medium leading-[1.1] tracking-tight text-[#f7ebd5] sm:text-[1.7rem]`}
      >
        The Diwali <span className="italic text-[#e4c27c]">Gifting Collection</span>
      </h2>
      <p className="mx-auto mt-1.5 max-w-[28ch] text-sm leading-relaxed text-[#f7ebd5]/80">
        Timeless Wooden Essentials, Crafted for Meaningful Gifting
      </p>
      <Link
        href="/diwali"
        className="mt-3 inline-flex h-10 w-full items-center justify-center rounded-lg bg-[#e0b44f] px-6 text-sm font-semibold tracking-wide text-[#2a0823] shadow-[0_10px_26px_-12px_rgba(224,180,79,0.7)] transition duration-300 hover:-translate-y-px hover:brightness-105 hover:shadow-[0_14px_30px_-12px_rgba(224,180,79,0.8)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#e0b44f] motion-reduce:transition-none motion-reduce:hover:translate-y-0"
      >
        Explore the Collection
      </Link>
    </aside>
  );
}
