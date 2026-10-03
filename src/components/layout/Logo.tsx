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
        src="/swagdrive-logo.png?v=5"
        alt="SwagDrive"
        width={1446}
        height={273}
        className="block h-7 w-auto max-w-[160px] object-contain object-left min-[992px]:h-[34px] min-[992px]:max-w-[190px]"
      />
    </Link>
  );
}
