import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DesktopNav } from "./DesktopNav";
import { Logo } from "./Logo";
import { MobileNav } from "./MobileNav";
import { CONTACT_HREF, NAV_LINKS } from "./nav";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-neutral-200/60 bg-white/90 backdrop-blur-md supports-[backdrop-filter]:bg-white/80">
      <div className="relative mx-auto flex h-[4.5rem] max-w-7xl items-center justify-between px-4 sm:h-20 sm:px-6 lg:h-[5.25rem] lg:px-8">
        <Logo />

        <div className="absolute left-1/2 hidden -translate-x-1/2 lg:block">
          <DesktopNav links={NAV_LINKS} />
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <Button
            variant="brand"
            size="nav-cta"
            asChild
            className="hidden lg:inline-flex"
          >
            <Link href={CONTACT_HREF}>
              <span className="relative z-[1]">Contact</span>
              <ArrowRight
                aria-hidden
                className="btn-arrow relative z-[1] size-3.5 shrink-0"
                strokeWidth={2.25}
              />
            </Link>
          </Button>

          <MobileNav links={NAV_LINKS} contactHref={CONTACT_HREF} />
        </div>
      </div>
    </header>
  );
}
