"use client";

import { usePathname } from "next/navigation";
import Footer from "./Footer";

/** Renders the marketing footer everywhere except admin routes. */
export function SiteFooter() {
  const pathname = usePathname();

  if (pathname.startsWith("/admin")) {
    return null;
  }

  return <Footer />;
}
