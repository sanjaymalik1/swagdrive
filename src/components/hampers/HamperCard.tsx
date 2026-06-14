import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

export type HamperCardProps = {
  name: string;
  image: string;
  href: string;
  className?: string;
  priority?: boolean;
};

export default function HamperCard({
  name,
  image,
  href,
  className,
  priority = false,
}: HamperCardProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group flex min-h-[380px] flex-col overflow-hidden rounded-2xl",
        "shadow-[0_2px_12px_rgba(0,0,0,0.07)] transition-all duration-[250ms] ease-out",
        // "hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)]",
        className
      )}
    >
      <div className="relative aspect-[16/10] shrink-0 overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          priority={priority}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          // className="object-cover transition-transform duration-300 ease-out group-hover:scale-[1.03]"
        />
      </div>

      <div className="flex flex-1 flex-col justify-center bg-[#EEF0FB] px-5 py-4">
        <h3 className="truncate text-lg font-semibold text-gray-900">{name}</h3>
        {/* <span className="mt-1 text-sm font-medium text-[#3B5BDB] transition-colors group-hover:underline md:text-base">
          View Collection →
        </span> */}
      </div>
    </Link>
  );
}
