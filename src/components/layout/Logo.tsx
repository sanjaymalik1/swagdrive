import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  imageClassName?: string;
}

export function Logo({ className, imageClassName }: LogoProps) {
  return (
    <Link href="/" className={cn("inline-flex shrink-0 items-center", className)}>
      <Image
        src="/logo.jpeg"
        alt="SwagDrive"
        width={200}
        height={80}
        priority
        className={cn("h-14 w-auto object-contain sm:h-16", imageClassName)}
      />
    </Link>
  );
}
