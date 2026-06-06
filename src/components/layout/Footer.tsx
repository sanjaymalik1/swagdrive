import Link from "next/link";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

const QUICK_LINKS = [
  { label: "Home",        href: "/" },
  { label: "Products",    href: "/products" },
  { label: "Use Cases",   href: "/use-cases" },
  { label: "Gallery",     href: "/gallery" },
  { label: "About",       href: "/about" },
  { label: "Contact",     href: "/contact" },
  { label: "Get a Quote", href: "/get-quote" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-auto bg-zinc-900 text-zinc-300">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8 lg:gap-16">
          {/* Column 1 — Brand */}
          <div className="flex flex-col gap-4">
            <div>
              <span className="text-lg font-semibold tracking-tight text-white">
                {SITE_CONFIG.name}
              </span>
              <p className="mt-1 text-sm font-medium text-zinc-400">
                {SITE_CONFIG.tagline}
              </p>
            </div>
            <p className="text-sm leading-relaxed text-zinc-400">
              We help Indian businesses create memorable gifting experiences —
              from employee onboarding kits to large-scale festive campaigns,
              fully branded and delivered on time.
            </p>
          </div>

          {/* Column 2 — Quick Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-zinc-500">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-2.5">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-zinc-400 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Contact */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-zinc-500">
              Get in Touch
            </h3>
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href={`tel:${SITE_CONFIG.phone}`}
                  className="flex items-center gap-2.5 text-sm text-zinc-400 transition-colors hover:text-white"
                >
                  <Phone className="size-4 shrink-0 text-zinc-500" />
                  {SITE_CONFIG.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="flex items-center gap-2.5 text-sm text-zinc-400 transition-colors hover:text-white"
                >
                  <Mail className="size-4 shrink-0 text-zinc-500" />
                  {SITE_CONFIG.email}
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${SITE_CONFIG.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-sm text-zinc-400 transition-colors hover:text-white"
                >
                  <MessageCircle className="size-4 shrink-0 text-zinc-500" />
                  Chat on WhatsApp
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-sm text-zinc-400">
                <MapPin className="size-4 shrink-0 text-zinc-500" />
                {SITE_CONFIG.city}, India
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-zinc-800">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-5 sm:flex-row sm:px-6 lg:px-8">
          <p className="text-xs text-zinc-500">
            &copy; {currentYear} {SITE_CONFIG.name}. All rights reserved.
          </p>
          <Link
            href="/privacy-policy"
            className="text-xs text-zinc-500 transition-colors hover:text-zinc-300"
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
