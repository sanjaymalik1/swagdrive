"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import type { NavLink } from "./nav";

interface DesktopNavProps {
  links: NavLink[];
}

export function DesktopNav({ links }: DesktopNavProps) {
  const pathname = usePathname();

  return (
    <nav aria-label="Primary" className="flex items-center gap-8">
      {links.map((link) => {
        const active =
          pathname === link.href ||
          (link.href !== "/" && pathname.startsWith(link.href));

        return (
          <Link
            key={link.href}
            href={link.href}
            className={cn(
              "relative text-base font-semibold tracking-[-0.01em] transition-colors lg:text-[1.0625rem]",
              active
                ? "text-brand-navy-deep"
                : "text-brand-navy/75 hover:text-brand-navy-deep"
            )}
          >
            {link.label}
            <span
              aria-hidden
              className={cn(
                "absolute -bottom-1 left-0 h-0.5 w-full origin-left bg-brand-gold transition-transform duration-200",
                active ? "scale-x-100" : "scale-x-0"
              )}
            />
          </Link>
        );
      })}
    </nav>
  );
}
