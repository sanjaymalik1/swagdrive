"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Search, FileText } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetClose,
} from "@/components/ui/sheet";
import { Logo } from "./Logo";
import { cn } from "@/lib/utils";
import type { NavLink } from "./Header";

interface MobileNavProps {
  links: NavLink[];
}

export function MobileNav({ links }: MobileNavProps) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <button
        onClick={() => setOpen(true)}
        aria-label="Open navigation menu"
        className="flex items-center justify-center rounded-full border border-gray-300 p-2.5 text-[#1A1A1A] transition-colors hover:bg-gray-50 lg:hidden"
      >
        <Menu className="size-5" />
      </button>

      <SheetContent side="right" className="w-72 px-0 pt-0">
        <SheetHeader className="border-b px-6 py-4">
          <SheetTitle className="text-left">
            <Logo imageClassName="h-12" />
          </SheetTitle>
        </SheetHeader>

        <nav className="flex flex-col gap-1 px-4 py-4">
          {links.map((link) => {
            const active =
              pathname === link.href ||
              (link.href !== "/" && pathname.startsWith(link.href));

            return (
              <SheetClose asChild key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "px-3 py-2.5 text-sm font-semibold uppercase tracking-[0.12em] transition-colors",
                    active
                      ? "text-[#F28C28]"
                      : "text-[#1A1A1A] hover:text-[#F28C28]"
                  )}
                >
                  {link.label}
                </Link>
              </SheetClose>
            );
          })}
        </nav>

        <div className="mt-auto flex items-center gap-3 border-t px-4 py-4">
          <SheetClose asChild>
            <Link
              href="/products"
              aria-label="Search products"
              className="flex size-10 items-center justify-center rounded-full border border-gray-300 text-[#1A1A1A]"
            >
              <Search className="size-4" />
            </Link>
          </SheetClose>
          <SheetClose asChild>
            <Link
              href="/get-quote"
              className="flex flex-1 items-center justify-center gap-2 rounded-full bg-[#F28C28] px-4 py-2.5 text-xs font-bold uppercase tracking-wide text-white"
            >
              <FileText className="size-4" />
              Quote
            </Link>
          </SheetClose>
        </div>
      </SheetContent>
    </Sheet>
  );
}
