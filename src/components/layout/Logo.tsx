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
      className={cn("inline-flex shrink-0 items-center", className)}
    >
      <Image
        src="/logo.png"
        alt="Swag Drive"
        width={360}
        height={80}
        priority
        className="h-12 w-auto object-contain sm:h-14 lg:h-[3.75rem]"
      />
    </Link>
  );
}
