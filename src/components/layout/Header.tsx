import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SITE_CONFIG } from "@/lib/constants";
import { MobileNav } from "./MobileNav";
import { DesktopNav } from "./DesktopNav";

export interface NavLink {
  label: string;
  href: string;
}

const NAV_LINKS: NavLink[] = [
  { label: "Home",       href: "/" },
  { label: "Products",   href: "/products" },
  { label: "Use Cases",  href: "/use-cases" },
  { label: "Gallery",    href: "/gallery" },
  { label: "About",      href: "/about" },
  { label: "Contact",    href: "/contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/60 bg-white/95 backdrop-blur supports-backdrop-filter:bg-white/80">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          href="/"
          className="flex shrink-0 items-center gap-2 text-base font-semibold tracking-tight text-foreground"
        >
          <span className="flex size-7 items-center justify-center rounded-md bg-primary text-xs font-bold text-primary-foreground">
            {SITE_CONFIG.name.charAt(0)}
          </span>
          <span>{SITE_CONFIG.name}</span>
        </Link>

        {/* Desktop nav — client component for active-link detection */}
        <DesktopNav links={NAV_LINKS} />

        {/* Desktop CTA */}
        <div className="hidden shrink-0 md:flex">
          <Button asChild size="sm">
            <Link href="/get-quote">Get a Quote</Link>
          </Button>
        </div>

        {/* Mobile hamburger + sheet — client component */}
        <MobileNav links={NAV_LINKS} />
      </div>
    </header>
  );
}
