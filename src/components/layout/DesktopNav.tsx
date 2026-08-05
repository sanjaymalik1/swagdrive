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
    <nav
      aria-label="Primary"
      className="flex items-center gap-7 xl:gap-9 2xl:gap-10"
    >
      {links.map((link) => {
        const active =
          pathname === link.href ||
          (link.href !== "/" && pathname.startsWith(link.href));

        return (
          <Link
            key={link.href}
            href={link.href}
            aria-current={active ? "page" : undefined}
            className={cn(
              "group relative rounded-sm py-1.5 text-base font-semibold tracking-[-0.02em] outline-none antialiased",
              "transition-colors duration-[260ms] ease-[cubic-bezier(0.22,1,0.36,1)]",
              "focus-visible:ring-2 focus-visible:ring-brand-navy/30 focus-visible:ring-offset-2",
              "xl:text-[17px] 2xl:text-lg",
              active
                ? "text-brand-navy-deep"
                : "text-neutral-500 hover:text-brand-navy-deep"
            )}
          >
            {link.label}
            <span
              aria-hidden
              className={cn(
                "absolute inset-x-0 -bottom-0.5 h-px origin-left rounded-full bg-brand-gold",
                "transition-[transform,opacity] duration-[260ms] ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none",
                active
                  ? "scale-x-100 opacity-100"
                  : "scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100 group-focus-visible:scale-x-100 group-focus-visible:opacity-100"
              )}
            />
          </Link>
        );
      })}
    </nav>
  );
}
