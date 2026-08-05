import Image from "next/image";
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
        "inline-flex shrink-0 items-center rounded-md outline-none",
        "transition-opacity duration-[250ms] ease-[cubic-bezier(0.22,1,0.36,1)]",
        "hover:opacity-75 focus-visible:ring-2 focus-visible:ring-brand-navy/30 focus-visible:ring-offset-2",
        "active:opacity-60",
        className
      )}
    >
      <Image
        src="/logo.png"
        alt="Swag Drive"
        width={360}
        height={80}
        priority
        className="h-[3.25rem] w-auto max-w-[min(100%,11rem)] object-contain object-left sm:h-14 sm:max-w-none lg:h-[4.25rem]"
      />
    </Link>
  );
}
