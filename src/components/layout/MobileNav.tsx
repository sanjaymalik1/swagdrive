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
        className="inline-flex size-10 items-center justify-center text-brand-navy-deep transition-colors hover:bg-neutral-100 lg:hidden"
      >
        <Menu className="size-5" strokeWidth={1.75} />
      </button>

      <SheetContent
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
                  className={cn(
                    "rounded-md px-3 py-3 text-base font-medium transition-colors",
                    active
                      ? "bg-brand-navy text-white"
                      : "text-brand-navy-deep hover:bg-brand-gold-soft/40"
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
            <Link
              href={contactHref}
              className="flex h-11 w-full items-center justify-center rounded-md bg-brand-gold text-sm font-semibold text-brand-navy-deep transition-colors hover:bg-brand-gold-soft"
            >
              Contact
            </Link>
          </SheetClose>
        </div>
      </SheetContent>
    </Sheet>
  );
}
