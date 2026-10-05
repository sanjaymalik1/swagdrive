"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Cormorant_Garamond } from "next/font/google";

// Same heading face as /diwali.
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

type Props = {
  /**
   * "below-fixed-header": main site. The navbar is fixed and pages already
   * reserve clearance for it, so the bar sits in that clearance directly
   * beneath the navbar without shifting any content.
   * "inline": routes without the main navbar (/diwali) — plain flow at the top.
   */
  placement: "below-fixed-header" | "inline";
};

export function DiwaliAnnouncementBar({ placement }: Props) {
  const pathname = usePathname();

  // Mirror SiteHeader: no navbar on admin/login, so no bar either.
  if (
    placement === "below-fixed-header" &&
    (pathname.startsWith("/admin") || pathname === "/login")
  ) {
    return null;
  }

  const position =
    placement === "below-fixed-header"
      ? "absolute inset-x-0 top-14 z-40 min-[992px]:top-16"
      : "relative";

  return (
    <div
      role="region"
      aria-label="Diwali 2026 announcement"
      className={`${position} border-b border-[#c99a2e]/30 bg-[linear-gradient(90deg,#3f0d33,#4d123b_50%,#3f0d33)] font-sans`}
    >
      <div className="mx-auto flex min-h-8 max-w-[90rem] items-center justify-center gap-x-3 px-4 py-1 text-center max-[390px]:justify-between max-[390px]:gap-x-2 max-[390px]:px-2.5 sm:gap-x-5">
        <p className="text-[13px] leading-tight text-[#f7ebd5] max-[390px]:whitespace-nowrap sm:text-sm">
          <span
            className={`${cormorant.className} text-[15px] font-semibold tracking-wide text-[#e4c27c] max-[390px]:text-[13px] max-[340px]:text-xs sm:text-base`}
          >
            Diwali 2026 · Gifting Collection
          </span>
          <span className="hidden text-[#f7ebd5]/75 md:inline">
            <span aria-hidden="true" className="mx-3 text-[#c99a2e]/60">
              |
            </span>
            Thoughtful wooden gifting for teams, clients &amp; partners
          </span>
        </p>
        <Link
          href="/diwali"
          className="shrink-0 whitespace-nowrap text-[13px] font-semibold tracking-wide text-[#e0b44f] max-[390px]:text-xs max-[340px]:text-[11px] underline-offset-4 transition-colors hover:text-[#f7ebd5] hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#e0b44f] sm:text-sm"
        >
          Explore Collection <span aria-hidden="true">→</span>
        </Link>
      </div>
    </div>
  );
}
