import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
}

export function Logo({ className }: LogoProps) {
  return (
    <Link
      href="/"
      aria-label="Swag Drive home"
      className={cn(
        "inline-flex shrink-0 items-center outline-none",
        "transition-opacity duration-[250ms] ease-[cubic-bezier(0.22,1,0.36,1)]",
        "hover:opacity-75 focus-visible:ring-2 focus-visible:ring-brand-navy/30 focus-visible:ring-offset-2",
        "active:opacity-60",
        className
      )}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/swagdrive-logo.png"
        alt="Swag Drive"
        width={924}
        height={172}
        decoding="async"
        fetchPriority="high"
        className="h-8 w-auto max-w-[11rem] object-contain object-left sm:h-9 sm:max-w-[12.5rem] lg:h-10 lg:max-w-[14rem]"
      />
    </Link>
  );
}
