"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetClose,
} from "@/components/ui/sheet";
import { SITE_CONFIG } from "@/lib/constants";
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
        className="flex items-center justify-center rounded-md p-2 text-foreground transition-colors hover:bg-muted md:hidden"
      >
        <Menu className="size-5" />
      </button>

      <SheetContent side="right" className="w-72 px-0 pt-0">
        <SheetHeader className="border-b px-6 py-4">
          <SheetTitle className="text-left text-base font-semibold tracking-tight">
            {SITE_CONFIG.name}
          </SheetTitle>
        </SheetHeader>

        <nav className="flex flex-col gap-1 px-4 py-4">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <SheetClose asChild key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "rounded-md px-3 py-2.5 text-sm font-medium transition-colors",
                    active
                      ? "bg-primary/10 text-primary"
                      : "text-foreground/70 hover:bg-muted hover:text-foreground"
                  )}
                >
                  {link.label}
                </Link>
              </SheetClose>
            );
          })}
        </nav>

        <div className="mt-auto border-t px-4 py-4">
          <SheetClose asChild>
            <Button asChild className="w-full" size="lg">
              <Link href="/get-quote">Get a Quote</Link>
            </Button>
          </SheetClose>
        </div>
      </SheetContent>
    </Sheet>
  );
}
