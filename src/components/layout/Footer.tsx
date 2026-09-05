import Link from "next/link";
import { CONTACT_HREF, NAV_LINKS, SIGN_IN_HREF } from "./nav";

type FooterLink = { label: string; href: string };

type FooterGroup = {
  label: string;
  href: string;
  links: FooterLink[];
};

const FOOTER_NAV: FooterGroup[] = [
  ...NAV_LINKS.filter((link) => link.label !== "Company").map((link) => ({
    label: link.label.toUpperCase(),
    href: link.href,
    links: (link.children ?? []).map((child) => ({
      label: child.label,
      href: child.href,
    })),
  })),
  {
    label: "OTHER",
    href: CONTACT_HREF,
    links: [
      { label: "Book a demo", href: CONTACT_HREF },
      { label: "Sign in / Sign up", href: SIGN_IN_HREF },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="w-full font-[family-name:var(--font-overpass)]">
      <div className="flex w-full flex-col min-[992px]:min-h-[180px] min-[992px]:flex-row min-[1280px]:min-h-[220px]">
        {/* Left — darker */}
        <div
          className="flex px-8 pt-7 pb-5 min-[768px]:px-11 min-[768px]:pt-8 min-[768px]:pb-6 min-[992px]:w-[35%] min-[992px]:max-w-[30rem] min-[992px]:px-11 min-[992px]:pt-8 min-[992px]:pb-6 min-[1280px]:px-12"
          style={{ backgroundColor: "#111111" }}
        >
          <div>
            <Link
              href="/"
              aria-label="SwagDrive home"
              className="inline-block w-fit outline-none focus-visible:ring-2 focus-visible:ring-white/40"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/swagdrive-logo-footer.png?v=4"
                alt="SwagDrive"
                width={924}
                height={172}
                className="mb-2.5 block h-auto max-h-[40px] w-auto max-w-[170px] object-contain object-left min-[768px]:max-h-[44px] min-[768px]:max-w-[186px] min-[1280px]:max-h-[46px] min-[1280px]:max-w-[196px]"
              />
            </Link>
            <p className="m-0 text-[11px] leading-[16px] font-semibold tracking-[1.2px] text-white uppercase min-[768px]:text-xs min-[768px]:leading-[18px] min-[1280px]:text-[13px] min-[1280px]:tracking-[1.5px]">
              Limitless engagement. One Platform.
            </p>
          </div>
        </div>

        {/* Right — charcoal, lighter than left */}
        <div
          className="flex flex-1 self-stretch px-8 pt-7 pb-5 min-[768px]:px-11 min-[768px]:pt-8 min-[768px]:pb-6 min-[992px]:px-10 min-[992px]:pt-8 min-[992px]:pb-6 min-[1280px]:px-14"
          style={{ backgroundColor: "#1f1f1f" }}
        >
          <nav
            aria-label="Footer"
            className="grid w-full grid-cols-2 gap-x-10 gap-y-8 min-[640px]:grid-cols-4 min-[992px]:grid-cols-4 min-[992px]:gap-x-8 min-[992px]:gap-y-0 min-[1280px]:gap-x-10"
          >
            {FOOTER_NAV.map((group) => (
              <div key={group.label} className="min-w-0">
                <Link
                  href={group.href}
                  className="block text-[13px] leading-[1.2] font-bold tracking-[0.06em] text-white uppercase no-underline transition-colors hover:text-white/75 min-[768px]:text-sm min-[1280px]:text-[15px]"
                >
                  {group.label}
                </Link>
                {group.links.length > 0 ? (
                  <ul className="m-0 mt-3.5 flex list-none flex-col gap-2.5 p-0 min-[1280px]:mt-4 min-[1280px]:gap-3">
                    {group.links.map((link) => (
                      <li key={`${group.label}-${link.label}`} className="m-0 p-0">
                        <Link
                          href={link.href}
                          className="text-[12px] leading-[1.35] font-normal tracking-[0.01em] text-white/70 no-underline transition-colors hover:text-white min-[768px]:text-[13px] min-[1280px]:text-sm"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
