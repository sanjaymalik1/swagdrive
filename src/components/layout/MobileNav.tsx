"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Logo } from "./Logo";
import type { NavLink } from "./nav";

interface MobileNavProps {
  links: NavLink[];
  contactHref: string;
}

export function MobileNav({ links, contactHref }: MobileNavProps) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Open navigation menu"
        aria-expanded={open}
        aria-controls="mobile-navigation"
        className={cn(
          "inline-flex size-11 min-h-11 min-w-11 items-center justify-center rounded-xl text-brand-navy-deep outline-none lg:hidden",
          "transition-colors duration-[250ms] ease-[cubic-bezier(0.22,1,0.36,1)]",
          "hover:bg-neutral-100 active:bg-neutral-200",
          "focus-visible:ring-2 focus-visible:ring-brand-navy/30 focus-visible:ring-offset-2"
        )}
      >
        <Menu className="size-5" strokeWidth={1.75} aria-hidden />
      </button>

      <SheetContent
        id="mobile-navigation"
        side="right"
        className="flex w-full flex-col gap-0 border-brand-navy/10 bg-white p-0 sm:max-w-sm"
      >
        <SheetHeader className="border-b border-neutral-100 px-6 py-5">
          <SheetTitle className="text-left">
            <Logo />
          </SheetTitle>
        </SheetHeader>

        <nav aria-label="Mobile" className="flex flex-1 flex-col gap-1 px-3 py-4">
          {links.map((link) => {
            const active =
              pathname === link.href ||
              (link.href !== "/" && pathname.startsWith(link.href));

            return (
              <SheetClose asChild key={link.href}>
                <Link
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "min-h-12 rounded-xl px-3 py-3.5 text-base font-semibold tracking-[-0.015em] outline-none",
                    "transition-colors duration-[250ms] ease-[cubic-bezier(0.22,1,0.36,1)]",
                    "focus-visible:ring-2 focus-visible:ring-brand-navy/30 focus-visible:ring-inset",
                    active
                      ? "bg-brand-navy text-white"
                      : "text-brand-navy-deep hover:bg-neutral-100 active:bg-neutral-200"
                  )}
                >
                  {link.label}
                </Link>
              </SheetClose>
            );
          })}
        </nav>

        <div className="border-t border-neutral-100 p-4">
          <SheetClose asChild>
            <Button variant="brand" size="cta" asChild className="w-full">
              <Link href={contactHref}>Contact</Link>
            </Button>
          </SheetClose>
        </div>
      </SheetContent>
    </Sheet>
  );
}
