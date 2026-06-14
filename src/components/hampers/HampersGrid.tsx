import HamperCard from "@/components/hampers/HamperCard";
import type { Hamper } from "@/lib/hampers";
import { cn } from "@/lib/utils";

export type HampersGridProps = {
  hampers: Hamper[];
  className?: string;
  /** Hide items on mobile (e.g. indices 4–5 for landing section) */
  hideLastOnMobile?: boolean;
  priorityFirst?: number;
};

export default function HampersGrid({
  hampers,
  className,
  hideLastOnMobile = false,
  priorityFirst = 0,
}: HampersGridProps) {
  return (
    <div
      className={cn(
        "grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3",
        className
      )}
    >
      {hampers.map((hamper, index) => (
        <HamperCard
          key={hamper.id}
          name={hamper.name}
          image={hamper.image}
          href={hamper.href}
          priority={index < priorityFirst}
          className={cn(
            hideLastOnMobile && index >= 4 && "hidden sm:flex"
          )}
        />
      ))}
    </div>
  );
}
