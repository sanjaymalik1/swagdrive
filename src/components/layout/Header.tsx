"use client";

import { useEffect, useState, type ComponentType } from "react";
import Link from "next/link";
import {
  LayoutDashboard,
  Menu,
  Store,
  Ticket,
  X,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Logo } from "./Logo";
import {
  CONTACT_HREF,
  NAV_LINKS,
  SIGN_IN_HREF,
  type NavChild,
  type NavLink,
} from "./nav";

function ChevronDown({ className }: { className?: string }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden
      className={className}
    >
      <path
        d="M4 6L8 10L12 6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const PLATFORM_ICONS: Record<
  string,
  ComponentType<{ className?: string; strokeWidth?: number }>
> = {
  "CRM Dashboard": LayoutDashboard,
  "Branded Redeem Pages": Ticket,
  "Swag Store/Shop": Store,
};

function PlatformDropdownItem({
  item,
  onNavigate,
}: {
  item: NavChild;
  onNavigate?: () => void;
}) {
  const Icon = PLATFORM_ICONS[item.label] ?? LayoutDashboard;

  return (
    <Link
      href={item.href}
      onClick={onNavigate}
      className="group/item flex gap-3.5 rounded-lg px-3 py-3 no-underline transition-colors hover:bg-[#F8F8F8]"
    >
      <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-[#F3EAFB] text-[#8D12E7] transition-colors group-hover/item:bg-[#E8D0FA]">
        <Icon className="size-5" strokeWidth={1.75} />
      </span>
      <span className="min-w-0 pt-0.5">
        <span className="block font-[family-name:var(--font-satoshi)] text-[15px] leading-5 font-bold text-[#2D2D2D]">
          {item.label}
        </span>
        <span className="mt-1 block font-[family-name:var(--font-overpass)] text-sm leading-5 tracking-[0.16px] text-[#4F5052]">
          {item.description}
        </span>
      </span>
    </Link>
  );
}

function DesktopNavItem({
  link,
  onOpenChange,
}: {
  link: NavLink;
  onOpenChange?: (open: boolean) => void;
}) {
  const hasChildren = Boolean(link.children?.length);
  const [open, setOpen] = useState(false);

  const setMenuOpen = (next: boolean) => {
    setOpen(next);
    onOpenChange?.(next);
  };

  if (!hasChildren) {
    return (
      <Link
        href={link.href}
        className="group inline-flex items-center gap-1 px-3.5 py-2 text-[0.9375rem] leading-none font-normal text-[#221e26] no-underline transition-colors hover:text-[#5c2d91]"
      >
        <span>{link.label}</span>
        <ChevronDown className="size-3.5 shrink-0 text-[#221e26] opacity-80 transition-transform duration-200 group-hover:translate-y-px" />
      </Link>
    );
  }

  return (
    <div
      className="relative"
      onMouseEnter={() => setMenuOpen(true)}
      onMouseLeave={() => setMenuOpen(false)}
      onFocusCapture={() => setMenuOpen(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
          setMenuOpen(false);
        }
      }}
    >
      <button
        type="button"
        aria-expanded={open}
        aria-haspopup="menu"
        className={cn(
          "group inline-flex items-center gap-1 px-3.5 py-2 text-[0.9375rem] leading-none font-normal text-[#221e26] transition-colors hover:text-[#5c2d91]",
          open && "text-[#5c2d91]"
        )}
      >
        <span>{link.label}</span>
        <ChevronDown
          className={cn(
            "size-3.5 shrink-0 text-current opacity-80 transition-transform duration-200",
            open && "rotate-180"
          )}
        />
      </button>

      <div
        className={cn(
          "absolute top-full left-1/2 z-50 w-[min(22.5rem,calc(100vw-2.5rem))] -translate-x-1/2 pt-3 transition-[opacity,transform] duration-200",
          open
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-1 opacity-0"
        )}
      >
        <div
          role="menu"
          className="overflow-hidden rounded-xl border border-[#E4E5E7] bg-white p-2 shadow-[0_16px_40px_rgba(34,30,38,0.12)]"
        >
          <div className="flex flex-col">
            {link.children!.map((item) => (
              <PlatformDropdownItem
                key={item.label}
                item={item}
                onNavigate={() => setMenuOpen(false)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [platformOpen, setPlatformOpen] = useState(false);
  const [mobilePlatformOpen, setMobilePlatformOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let lastY = window.scrollY;
    let ticking = false;

    const update = () => {
      const y = window.scrollY;
      const atTop = y < 16;
      const delta = y - lastY;

      setScrolled(!atTop);

      if (mobileOpen || platformOpen) {
        setHidden(false);
      } else if (atTop) {
        setHidden(false);
      } else if (delta > 6 && y > 80) {
        setHidden(true);
      } else if (delta < -6) {
        setHidden(false);
      }

      lastY = y;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [mobileOpen, platformOpen]);

  useEffect(() => {
    if (!mobileOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [mobileOpen]);

  const solid = scrolled || mobileOpen;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 w-full font-[family-name:var(--font-lexend)] transition-[transform,background-color,box-shadow] duration-300 ease-out",
        hidden && !mobileOpen ? "-translate-y-full" : "translate-y-0",
        solid
          ? "bg-white shadow-[0_1px_0_rgba(34,30,38,0.06)]"
          : "bg-transparent shadow-none"
      )}
    >
      <div className="mx-auto grid h-14 w-full max-w-[90rem] grid-cols-[1fr_auto] items-center gap-x-4 px-5 min-[480px]:px-10 min-[992px]:h-16 min-[992px]:grid-cols-[auto_1fr_auto] min-[992px]:gap-x-8 min-[992px]:px-12">
        <Logo />

        <nav
          aria-label="Primary"
          className="hidden items-center justify-center gap-0.5 min-[992px]:flex"
        >
          {NAV_LINKS.map((link) => (
            <DesktopNavItem
              key={link.label}
              link={link}
              onOpenChange={
                link.label === "Platform" ? setPlatformOpen : undefined
              }
            />
          ))}
        </nav>

        <div className="flex items-center justify-end gap-2 min-[992px]:gap-3">
          <Link
            href={SIGN_IN_HREF}
            className="hidden h-9 items-center justify-center rounded-[3rem] border border-[#e8e6ea] bg-white px-4 text-sm leading-none font-normal text-[#221e26] no-underline transition-colors hover:bg-[#f7f5f8] min-[992px]:inline-flex"
          >
            Sign in
          </Link>

          <Link
            href={CONTACT_HREF}
            className="hidden h-9 items-center justify-center rounded-[3rem] border-2 border-[#fffcd3] bg-[#fff34a] px-4 text-sm leading-none font-normal text-[#221e26] no-underline transition-colors hover:bg-[#fff784] active:bg-[#ccc23b] min-[992px]:inline-flex"
          >
            Book a demo
          </Link>

          <button
            type="button"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((open) => !open)}
            className="inline-flex size-10 items-center justify-center text-[#221e26] min-[992px]:hidden"
          >
            {mobileOpen ? (
              <X className="size-6" strokeWidth={1.75} />
            ) : (
              <Menu className="size-6" strokeWidth={1.75} />
            )}
          </button>
        </div>
      </div>

      {mobileOpen ? (
        <div className="max-h-[calc(100dvh-3.5rem)] overflow-y-auto border-t border-[#eceaee] bg-white min-[992px]:hidden">
          <nav
            aria-label="Mobile"
            className="mx-auto flex max-w-[90rem] flex-col px-5 py-4 min-[480px]:px-10"
          >
            {NAV_LINKS.map((link) => {
              if (!link.children?.length) {
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center justify-between border-b border-[#f0eef2] py-4 text-base font-normal text-[#221e26] no-underline"
                  >
                    <span>{link.label}</span>
                    <ChevronDown className="size-4 -rotate-90 text-[#221e26]" />
                  </Link>
                );
              }

              return (
                <div key={link.label} className="border-b border-[#f0eef2]">
                  <button
                    type="button"
                    aria-expanded={mobilePlatformOpen}
                    onClick={() => setMobilePlatformOpen((open) => !open)}
                    className="flex w-full items-center justify-between py-4 text-left text-base font-normal text-[#221e26]"
                  >
                    <span>{link.label}</span>
                    <ChevronDown
                      className={cn(
                        "size-4 text-[#221e26] transition-transform",
                        mobilePlatformOpen && "rotate-180"
                      )}
                    />
                  </button>
                  {mobilePlatformOpen ? (
                    <div className="pb-3">
                      {link.children.map((item) => (
                        <PlatformDropdownItem
                          key={item.label}
                          item={item}
                          onNavigate={() => {
                            setMobileOpen(false);
                            setMobilePlatformOpen(false);
                          }}
                        />
                      ))}
                    </div>
                  ) : null}
                </div>
              );
            })}

            <div className="flex flex-col gap-3 pt-6 pb-2">
              <Link
                href={SIGN_IN_HREF}
                onClick={() => setMobileOpen(false)}
                className="inline-flex h-12 items-center justify-center rounded-[3rem] border border-[#e8e6ea] bg-white text-base font-normal text-[#221e26] no-underline"
              >
                Sign in
              </Link>
              <Link
                href={CONTACT_HREF}
                onClick={() => setMobileOpen(false)}
                className="inline-flex h-12 items-center justify-center rounded-[3rem] border-2 border-[#fffcd3] bg-[#fff34a] text-base font-normal text-[#221e26] no-underline"
              >
                Book a demo
              </Link>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
