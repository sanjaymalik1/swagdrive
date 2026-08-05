import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const PRIMARY_ACTIONS = [
  { label: "Explore Platform", href: "/platform" },
  { label: "Talk to Us", href: "/contact" },
] as const;

export default function HeroSection() {
  return (
    <section className="relative flex items-center justify-center overflow-hidden bg-white">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,color-mix(in_srgb,var(--brand-navy)_4%,transparent),transparent_70%)]"
      />

      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center px-4 pt-16 pb-16 text-center sm:px-6 sm:pt-24 sm:pb-20 md:pt-28 md:pb-24 lg:px-8 lg:pt-32 lg:pb-28">
        <h1 className="animate-in fade-in slide-in-from-bottom-3 fill-mode-both motion-safe-animate max-w-[48rem] text-[1.875rem] font-semibold leading-[1.14] tracking-[-0.03em] text-brand-navy-deep duration-700 min-[375px]:text-[2rem] sm:text-[2.875rem] sm:leading-[1.1] sm:tracking-[-0.035em] md:text-[3.375rem] md:leading-[1.08] lg:text-[3.875rem] lg:leading-[1.07] xl:text-[4.25rem] xl:leading-[1.06]">
          <span className="block font-medium tracking-[-0.025em] text-brand-navy/75 sm:tracking-[-0.03em] md:whitespace-nowrap">
            Your one-stop solution
            <span className="hidden md:inline"> for</span>
          </span>
          <span className="mt-2.5 block sm:mt-3">
            <span className="md:hidden">for </span>
            Global Gifting &amp; Swag
          </span>
        </h1>

        <p className="animate-in fade-in slide-in-from-bottom-3 fill-mode-both motion-safe-animate mt-7 max-w-[20.5rem] text-lg leading-[1.75] tracking-[-0.01em] text-neutral-600 delay-100 duration-700 min-[390px]:max-w-[22rem] sm:mt-9 sm:max-w-[36rem] sm:text-xl sm:leading-[1.7] md:mt-10 md:max-w-[38rem] md:text-[1.375rem] md:leading-[1.65]">
          Source, customize, and ship premium corporate gifts and branded
          merchandise that strengthen relationships and leave a lasting
          impression with every send.
        </p>

        <div className="animate-in fade-in slide-in-from-bottom-3 fill-mode-both motion-safe-animate mt-10 flex w-full max-w-sm flex-col items-stretch justify-center gap-3 delay-200 duration-700 sm:mt-12 sm:max-w-none sm:w-auto sm:flex-row sm:items-center sm:gap-4 md:mt-14 md:gap-5">
          <Button variant="brand" size="cta" asChild>
            <Link href={PRIMARY_ACTIONS[0].href}>
              <span className="relative z-[1]">{PRIMARY_ACTIONS[0].label}</span>
              <ArrowRight
                aria-hidden
                className="btn-arrow relative z-[1] size-4 shrink-0 sm:size-[1.125rem]"
                strokeWidth={2.25}
              />
            </Link>
          </Button>
          <Button variant="brand-outline" size="cta" asChild>
            <Link href={PRIMARY_ACTIONS[1].href}>
              <span className="relative z-[1]">{PRIMARY_ACTIONS[1].label}</span>
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
