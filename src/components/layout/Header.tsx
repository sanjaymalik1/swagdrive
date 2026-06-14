import Link from "next/link";
import { Search, FileText } from "lucide-react";
import { MobileNav } from "./MobileNav";
import { DesktopNav } from "./DesktopNav";
import { Logo } from "./Logo";

export interface NavLink {
  label: string;
  href: string;
}

export const NAV_LINKS: NavLink[] = [
  { label: "Products",  href: "/products" },
  { label: "Hampers",   href: "/hampers" },
  { label: "Use Cases", href: "/use-cases" },
  { label: "About",     href: "/about" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white">
      <div className="relative mx-auto flex max-w-[1400px] items-center justify-between px-4 py-1 sm:px-6 lg:px-8">
        <Logo />

        {/* Center nav — dot-separated, uppercase */}
        <div className="absolute left-1/2 hidden -translate-x-1/2 lg:block">
          <DesktopNav links={NAV_LINKS} />
        </div>

        {/* Desktop actions */}
        {/* <div className="hidden shrink-0 items-center gap-4 lg:flex">
          <Link
            href="/products"
            aria-label="Search products"
            className="flex size-10 items-center justify-center rounded-full border border-gray-300 text-[#1A1A1A] transition-colors hover:border-gray-400 hover:bg-gray-50"
          >
            <Search className="size-4" strokeWidth={2} />
          </Link>

          <Link
            href="/get-quote"
            className="flex items-center gap-2.5 transition-opacity hover:opacity-80"
          >
            <span className="flex size-10 items-center justify-center rounded-full bg-[#F28C28] text-white">
              <FileText className="size-4" strokeWidth={2} />
            </span>
            <span className="text-sm font-bold uppercase tracking-wide text-[#1A1A1A]">
              Quote
            </span>
          </Link>
        </div> */}

        {/* Mobile menu */}
        <MobileNav links={NAV_LINKS} />
      </div>
    </header>
  );
}
