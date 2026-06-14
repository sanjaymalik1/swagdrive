import Link from "next/link";
import { Mail, MessageCircle } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import { Logo } from "./Logo";

function LinkedInIcon() {
  return (
    <svg className="size-[18px]" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.062 2.062 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg className="size-[18px]" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.241 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.241 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.241-1.308-3.608C2.175 15.747 2.163 15.367 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.974-.974 2.241-1.246 3.608-1.308C8.416 2.175 8.796 2.163 12 2.163zm0 1.622c-3.157 0-3.527.012-4.764.069-1.026.047-1.584.218-1.955.363-.492.192-.843.422-1.212.79-.368.369-.598.72-.79 1.212-.145.371-.316.929-.363 1.955-.057 1.237-.069 1.607-.069 4.764s.012 3.527.069 4.764c.047 1.026.218 1.584.363 1.955.192.492.422.843.79 1.212.369.368.72.598 1.212.79.371.145.929.316 1.955.363 1.237.057 1.607.069 4.764.069s3.527-.012 4.764-.069c1.026-.047 1.584-.218 1.955-.363.492-.192.843-.422 1.212-.79.368-.369.598-.72.79-1.212.145-.371.316-.929.363-1.955.057-1.237.069-1.607.069-4.764s-.012-3.527-.069-4.764c-.047-1.026-.218-1.584-.363-1.955-.192-.492-.422-.843-.79-1.212-.368-.368-.72-.598-1.212-.79-.371-.145-.929-.316-1.955-.363-1.237-.057-1.607-.069-4.764-.069zm0 3.351a5.864 5.864 0 110 11.728 5.864 5.864 0 010-11.728zm0 1.622a4.242 4.242 0 100 8.484 4.242 4.242 0 000-8.484zm6.406-4.845a1.44 1.44 0 11-2.881 0 1.44 1.44 0 012.881 0z" />
    </svg>
  );
}

const FOOTER_COLUMNS = [
  {
    title: "Product",
    links: [
      { label: "Products",    href: "/products" },
      { label: "Hampers",     href: "/hampers" },
      { label: "Categories",  href: "/categories" },
      { label: "Get a Quote", href: "/get-quote" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Use Cases", href: "/use-cases" },
      { label: "Gallery",   href: "/gallery" },
      { label: "Contact",   href: "/contact" },
      { label: "Support",   href: "/contact" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About",    href: "/about" },
      { label: "Contact",  href: "/contact" },
      { label: "Careers",  href: "/contact" },
      { label: "Partners", href: "/contact" },
    ],
  },
] as const;

const LEGAL_LINKS = [
  { label: "Privacy Policy",   href: "/privacy-policy" },
  { label: "Terms of Service", href: "/terms-of-service" },
  { label: "Cookies Settings", href: "/cookies-settings" },
] as const;

const SOCIAL_LINKS = [
  { label: "LinkedIn",  href: "https://linkedin.com",  type: "linkedin" as const },
  { label: "Instagram", href: "https://instagram.com", type: "instagram" as const },
  {
    label: "WhatsApp",
    href: `https://wa.me/${SITE_CONFIG.whatsappNumber}`,
    type: "whatsapp" as const,
  },
  {
    label: "Email",
    href: `mailto:${SITE_CONFIG.email}`,
    type: "email" as const,
  },
] as const;

function SocialIcon({ type }: { type: (typeof SOCIAL_LINKS)[number]["type"] }) {
  if (type === "linkedin") return <LinkedInIcon />;
  if (type === "instagram") return <InstagramIcon />;
  if (type === "whatsapp") return <MessageCircle className="size-[18px]" strokeWidth={1.75} />;
  return <Mail className="size-[18px]" strokeWidth={1.75} />;
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: readonly { label: string; href: string }[];
}) {
  return (
    <div>
      <h3 className="mb-4 text-sm font-semibold text-gray-900">{title}</h3>
      <ul className="flex flex-col gap-3">
        {links.map((link) => (
          <li key={`${title}-${link.label}`}>
            <Link
              href={link.href}
              className="text-sm text-gray-500 transition-colors hover:text-gray-900"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative mt-auto overflow-hidden bg-[#f3f4f6] px-4 pt-10 pb-16 sm:px-6 sm:pb-20 lg:px-8 lg:pb-24">
      {/* Faded brand watermark */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-0 flex justify-center select-none"
        aria-hidden
      >
        <span
          className="translate-y-[42%] inline-block origin-center scale-x-[1.0] bg-gradient-to-b from-gray-400/80 from-0% via-gray-300/55 via-55% to-transparent to-100% bg-clip-text text-[clamp(5rem,20vw,13rem)] font-bold leading-none tracking-[0.22em] text-transparent"
        >
          {SITE_CONFIG.name}
        </span>
      </div>

      <div className="relative z-10 mx-auto max-w-[1200px] rounded-[28px] bg-white px-8 py-10 shadow-[0_8px_30px_rgba(0,0,0,0.06)] sm:px-12 sm:py-12">
        <div className="flex flex-col gap-12 lg:flex-row lg:justify-between">
          <div className="flex max-w-sm flex-col gap-5">
            <Logo imageClassName="h-11" />

            <p className="text-sm leading-relaxed text-gray-500">
              {SITE_CONFIG.name} helps Indian businesses create memorable
              corporate gifting experiences — from curated hampers to
              large-scale branded campaigns, delivered on time, every time.
            </p>

            <div className="flex items-center gap-4">
              {SOCIAL_LINKS.map(({ label, href, type }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="text-gray-900 transition-opacity hover:opacity-60"
                >
                  <SocialIcon type={type} />
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 sm:gap-12 lg:gap-16">
            {FOOTER_COLUMNS.map((column) => (
              <FooterColumn
                key={column.title}
                title={column.title}
                links={column.links}
              />
            ))}
          </div>
        </div>

        <hr className="my-10 border-gray-100" />

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-gray-500">
            &copy; {currentYear} {SITE_CONFIG.name}. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {LEGAL_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm text-gray-500 underline underline-offset-4 transition-colors hover:text-gray-900"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
