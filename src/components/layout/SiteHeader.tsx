"use client";

import { usePathname } from "next/navigation";
import Header from "./Header";

/** Renders the marketing header everywhere except admin routes. */
export function SiteHeader() {
  const pathname = usePathname();

  if (pathname.startsWith("/admin")) {
    return null;
  }

  return <Header />;
}
