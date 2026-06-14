"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Fragment } from "react";
import { cn } from "@/lib/utils";
import type { NavLink } from "./Header";

interface DesktopNavProps {
  links: NavLink[];
}

export function DesktopNav({ links }: DesktopNavProps) {
  const pathname = usePathname();

  return (
    <nav className="flex items-center">
      {links.map((link, index) => {
        const active =
          pathname === link.href ||
          (link.href !== "/" && pathname.startsWith(link.href));

        return (
          <Fragment key={link.href}>
            {index > 0 && (
              <span
                className="mx-4 text-base text-gray-400 select-none"
                aria-hidden
              >
                ·
              </span>
            )}
            <Link
              href={link.href}
              className={cn(
                "text-sm font-semibold uppercase tracking-[0.12em] transition-colors sm:text-base",
                active
                  ? "text-[#F28C28]"
                  : "text-[#1A1A1A] hover:text-[#F28C28]"
              )}
            >
              {link.label}
            </Link>
          </Fragment>
        );
      })}
    </nav>
  );
}
