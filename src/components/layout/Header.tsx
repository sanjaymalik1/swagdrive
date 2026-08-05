import Link from "next/link";
import { DesktopNav } from "./DesktopNav";
import { Logo } from "./Logo";
import { MobileNav } from "./MobileNav";
import { CONTACT_HREF, NAV_LINKS } from "./nav";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-neutral-200/80 bg-white/95 backdrop-blur-md">
      <div className="relative mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:px-6 lg:h-16 lg:px-8">
        <Logo />

        <div className="absolute left-1/2 hidden -translate-x-1/2 lg:block">
          <DesktopNav links={NAV_LINKS} />
        </div>

        <div className="flex items-center gap-2">
          <Link
            href={CONTACT_HREF}
            className="hidden h-10 items-center justify-center rounded-md bg-brand-gold px-5 text-sm font-semibold text-brand-navy-deep transition-colors hover:bg-brand-gold-soft lg:inline-flex"
          >
            Contact
          </Link>

          <MobileNav links={NAV_LINKS} contactHref={CONTACT_HREF} />
        </div>
      </div>
    </header>
  );
}
