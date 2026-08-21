import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
}

export function Logo({ className }: LogoProps) {
  return (
    <Link
      href="/"
      aria-label="SwagDrive home"
      className={cn(
        "inline-flex shrink-0 items-center outline-none focus-visible:ring-2 focus-visible:ring-[#b17ce9]/40",
        className
      )}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/swagdrive-logo.png"
        alt="SwagDrive"
        width={924}
        height={172}
        className="block h-5 w-auto max-w-[140px] object-contain object-left min-[992px]:h-[22px] min-[992px]:max-w-[160px]"
      />
    </Link>
  );
}
