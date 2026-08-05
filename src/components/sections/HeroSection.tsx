import Link from "next/link";

const PRIMARY_ACTIONS = [
  { label: "Explore Platform", href: "/platform" },
  { label: "Talk to Us", href: "/contact" },
] as const;

export default function HeroSection() {
  return (
    <section className="relative flex items-center justify-center overflow-hidden bg-brand-cream">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_55%_at_50%_-5%,color-mix(in_srgb,var(--brand-gold)_28%,transparent),transparent_60%),linear-gradient(180deg,var(--brand-cream)_0%,#fff_50%,var(--brand-cream)_100%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-[linear-gradient(90deg,transparent,var(--brand-gradient-from),var(--brand-gradient-to),transparent)] opacity-70"
      />

      <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center px-4 pt-16 pb-10 text-center sm:px-6 sm:pt-20 sm:pb-12 lg:px-8 lg:pt-24 lg:pb-14">
        <h1 className="animate-in fade-in slide-in-from-bottom-3 fill-mode-both duration-700 text-4xl font-semibold tracking-tight text-brand-navy-deep sm:text-5xl md:text-6xl md:leading-[1.1]">
          <span className="block font-medium text-brand-navy/75">
            Your one-stop solution for
          </span>
          <span className="mt-2 block sm:mt-3">Global Gifting &amp; Swag</span>
        </h1>

        <div className="animate-in fade-in slide-in-from-bottom-3 fill-mode-both mt-10 flex w-full flex-col items-stretch justify-center gap-3 delay-150 duration-700 sm:mt-12 sm:w-auto sm:flex-row sm:items-center sm:gap-4">
          <Link
            href={PRIMARY_ACTIONS[0].href}
            className="inline-flex h-12 items-center justify-center rounded-md bg-brand-gold px-7 text-sm font-semibold text-brand-navy-deep transition-colors hover:bg-brand-gold-soft"
          >
            {PRIMARY_ACTIONS[0].label}
          </Link>
          <Link
            href={PRIMARY_ACTIONS[1].href}
            className="inline-flex h-12 items-center justify-center rounded-md border border-brand-navy/25 bg-transparent px-7 text-sm font-semibold text-brand-navy transition-colors hover:border-brand-navy hover:bg-brand-navy/5"
          >
            {PRIMARY_ACTIONS[1].label}
          </Link>
        </div>
      </div>
    </section>
  );
}
