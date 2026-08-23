import type { PalettePreset } from "@/lib/brand-color-palettes";

type PreviewProps = {
  palette: PalettePreset;
  compact?: boolean;
};

/** Mirrors SwagStoreHeroSection layout */
export function SwagStoreHeroPreview({ palette, compact }: PreviewProps) {
  const t = palette.tokens;
  const pt = compact ? "pt-12" : "pt-24 min-[768px]:pt-24 min-[992px]:pt-28";
  const h1 = compact
    ? "text-xl leading-tight min-[768px]:text-2xl"
    : "text-[2rem] leading-[2.125rem] min-[768px]:text-[2rem] min-[992px]:text-[4rem] min-[992px]:leading-[4.5rem]";

  return (
    <section
      className={`border-b ${pt} pb-6`}
      style={{ backgroundColor: t.heroBg, borderColor: t.heroBorder }}
    >
      <div className="flex flex-col items-center px-4">
        <p
          className="m-0 mb-1 text-center font-[family-name:var(--font-overpass)] text-[10px] leading-4 font-bold tracking-[1px] uppercase min-[768px]:text-xs"
          style={{ color: t.secondary }}
        >
          global corporate gift shops
        </p>
        <h2
          className={`m-0 mb-2 max-w-[52rem] text-center font-[family-name:var(--font-satoshi)] font-bold ${h1}`}
          style={{ color: t.secondary }}
        >
          Your Company&apos;s Storefront
        </h2>
        <p
          className="m-0 mb-4 max-w-[400px] text-center font-[family-name:var(--font-overpass)] text-xs leading-5 min-[768px]:text-sm"
          style={{ color: t.body }}
        >
          Invite anyone, anywhere, to choose items from your online branded shop.
        </p>
        <div className="mb-4 flex flex-wrap items-center justify-center gap-3">
          <span
            className="inline-flex rounded-3xl border px-4 py-2 font-[family-name:var(--font-overpass)] text-[10px] font-semibold tracking-wide uppercase"
            style={{
              backgroundColor: t.ctaSecondaryBg,
              color: t.ctaSecondaryText,
              borderColor: t.ctaSecondaryBorder,
            }}
          >
            Book a demo
          </span>
          <span
            className="inline-flex rounded-3xl border px-4 py-2 font-[family-name:var(--font-overpass)] text-[10px] font-semibold tracking-wide uppercase"
            style={{
              backgroundColor: t.ctaBg,
              color: t.ctaText,
              borderColor: t.ctaBorder,
            }}
          >
            Get started
          </span>
        </div>
        {!compact ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src="/platform/swag-store/hero.png"
            alt=""
            className="mx-auto h-auto w-[85%] max-w-full object-contain opacity-90"
          />
        ) : null}
      </div>
    </section>
  );
}

/** Mirrors EmployeeEngagementHeroSection layout */
export function CapabilityHeroPreview({ palette, compact }: PreviewProps) {
  const t = palette.tokens;

  return (
    <section
      className={`font-[family-name:var(--font-lexend)] ${compact ? "pt-12 pb-6" : "pt-24 pb-10 min-[768px]:pt-28"}`}
      style={{
        backgroundImage: `url(/platform/crm/grid-bg.svg), ${t.heroBgGradient}`,
        backgroundPosition: "50% 0, 0 0",
        backgroundRepeat: "no-repeat, repeat",
        backgroundSize: "cover, auto",
        color: t.body,
      }}
    >
      <div className={`mx-auto w-full px-4 ${compact ? "max-w-none" : "max-w-7xl"}`}>
        <div
          className={`grid grid-cols-1 items-center gap-6 ${compact ? "" : "min-[992px]:grid-cols-2 min-[992px]:gap-12"}`}
        >
          <div>
            <h2
              className={`m-0 leading-[1.1] font-normal tracking-[-0.06rem] ${compact ? "text-xl min-[768px]:text-2xl" : "text-[2.25rem] min-[768px]:text-[3rem] min-[992px]:text-[3.875rem]"}`}
              style={{ color: t.body }}
            >
              Celebrate and retain top talent with the{" "}
              <span style={{ color: t.accent }}>
                #1 Employee Engagement platform
              </span>
            </h2>
            <p
              className={`m-0 mt-3 leading-[1.5] font-light ${compact ? "text-xs" : "text-base min-[768px]:text-[1.125rem]"}`}
              style={{ color: t.muted }}
            >
              Automate personalized corporate gifting for milestones,
              onboarding, and culture.
            </p>
            <span
              className={`mt-5 inline-block rounded-[3rem] border-2 px-5 py-3 text-sm leading-none ${compact ? "text-xs" : "text-base"}`}
              style={{
                backgroundColor: t.ctaBg,
                color: t.ctaText,
                borderColor: t.ctaBorder,
              }}
            >
              Book a demo
            </span>
          </div>
          {!compact ? (
            <div className="overflow-hidden rounded-2xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/capabilities/employee-engagement/hero.avif"
                alt=""
                className="block h-auto w-full object-contain"
              />
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}

/** Mirrors HeroSection (home) layout */
export function HomeHeroPreview({ palette, compact }: PreviewProps) {
  const t = palette.tokens;

  return (
    <section
      className={`font-[family-name:var(--font-lexend)] ${compact ? "px-4 pt-10 pb-4" : "px-5 pt-16 pb-6 min-[480px]:px-10 min-[480px]:pt-24"}`}
      style={{ backgroundColor: t.cream }}
    >
      <div className="mx-auto flex w-full max-w-7xl flex-col">
        <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
          <h2
            className={`m-0 leading-[1.1] font-normal tracking-[-0.09rem] ${compact ? "text-xl min-[768px]:text-2xl" : "text-[2.5rem] min-[768px]:text-[3rem] min-[992px]:text-[3.875rem]"}`}
            style={{ color: t.body }}
          >
            Your one-stop solution for
            <br />
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: `linear-gradient(92deg, ${t.gradientFrom}, ${t.gradientTo} 89.72%)`,
              }}
            >
              Global Gifting &amp; Swag
            </span>
          </h2>
          <p
            className={`m-0 mt-3 max-w-3xl text-center leading-[1.4] font-light ${compact ? "text-xs" : "text-base min-[768px]:text-[1.125rem]"}`}
            style={{ color: t.muted }}
          >
            Reach anyone, anywhere. Source, store, and ship branded gifts with
            ease.
          </p>
          <span
            className={`mt-5 inline-block rounded-[3rem] border-2 px-5 py-3 leading-none ${compact ? "text-xs" : "text-base"}`}
            style={{
              backgroundColor: t.ctaBg,
              color: t.ctaText,
              borderColor: t.ctaBorder,
            }}
          >
            Book a demo
          </span>
        </div>
        {!compact ? (
          <div className="mt-10 w-full">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/hero/hero-desktop.avif"
              alt=""
              className="hidden h-auto w-full object-contain min-[992px]:block"
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/hero/hero-mobile.avif"
              alt=""
              className="block h-auto w-full object-contain min-[992px]:hidden"
            />
          </div>
        ) : null}
      </div>
    </section>
  );
}
