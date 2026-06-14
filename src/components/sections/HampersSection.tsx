import Link from "next/link";
import HampersGrid from "@/components/hampers/HampersGrid";
import { FEATURED_HAMPERS } from "@/lib/hampers";
import { cn } from "@/lib/utils";

function ViewAllLink({ className }: { className?: string }) {
  return (
    <Link
      href="/hampers"
      className={cn(
        "inline-flex items-center justify-center rounded-full border border-gray-900 px-5 py-2",
        "text-sm font-medium text-gray-900 transition-colors duration-200",
        "hover:bg-gray-900 hover:text-white",
        className
      )}
    >
      View All Hampers →
    </Link>
  );
}

export default function HampersSection() {
  return (
    <section className="bg-white px-4 py-10 md:py-16">
      <div className="mx-auto max-w-[1280px]">
        <div className="mb-8 flex flex-col gap-4 sm:mb-10 md:flex-row md:items-center md:justify-between">
          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
            Our Hamper Collections
          </h2>
          <ViewAllLink className="hidden md:inline-flex" />
        </div>

        <HampersGrid hampers={FEATURED_HAMPERS} hideLastOnMobile priorityFirst={3} />

        <div className="mt-8 flex justify-center md:hidden">
          <ViewAllLink />
        </div>
      </div>
    </section>
  );
}
