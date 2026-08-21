"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

const STATS = [
  {
    value: 400,
    suffix: "%",
    label: (
      <>
        <strong>ROI</strong> from SwagDrive gifting.
      </>
    ),
  },
  {
    value: 41,
    suffix: "%",
    label: (
      <>
        <strong>close rates</strong> with targeted gifting campaigns.
      </>
    ),
  },
  {
    value: 75,
    suffix: "%",
    label: (
      <>
        <strong>customer retention</strong> for companies that incorporate
        gifting.
      </>
    ),
  },
] as const;

function useCountUp(target: number, active: boolean, duration = 1800) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!active) return;

    let frame = 0;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - (1 - progress) ** 3;
      setValue(Math.round(target * eased));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [active, duration, target]);

  return value;
}

function StatCard({
  value,
  suffix,
  label,
  active,
}: {
  value: number;
  suffix: string;
  label: ReactNode;
  active: boolean;
}) {
  const count = useCountUp(value, active);

  return (
    <div className="flex h-full flex-col rounded-3xl border-2 border-[#d9d9d9] bg-white p-6">
      <div className="flex items-start font-[family-name:var(--font-lexend)] text-[2.25rem] leading-[1.1] font-normal text-[#5d209f] min-[768px]:text-[3rem] min-[992px]:text-[3.875rem]">
        <span>+</span>
        <span>{count}</span>
        <span>{suffix}</span>
      </div>
      <div className="pt-2 min-[768px]:pt-3" />
      <p className="m-0 font-[family-name:var(--font-lexend)] text-base leading-[1.5] font-light text-[#524f55] min-[768px]:text-[1.125rem]">
        {label}
      </p>
    </div>
  );
}

export default function CrmImpactSection() {
  const ref = useRef<HTMLElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="bg-white font-[family-name:var(--font-lexend)]"
    >
      <div className="px-5 py-16 min-[480px]:px-10 min-[768px]:py-16 min-[992px]:py-24">
        <div className="mx-auto w-full max-w-7xl">
          <h2
            className={cn(
              "m-0 text-center text-[1.75rem] leading-[1.2] font-normal tracking-[-0.04rem] text-[#221e26]",
              "min-[768px]:text-[2.1875rem] min-[768px]:tracking-[-0.06rem]",
              "min-[992px]:text-[2.875rem] min-[992px]:tracking-[-0.08rem]"
            )}
          >
            Gifting impact on your bottom line
          </h2>

          <div className="pt-7 min-[768px]:pt-8 min-[992px]:pt-10" />

          <div className="grid grid-cols-1 gap-6 min-[992px]:grid-cols-3">
            {STATS.map((stat) => (
              <StatCard
                key={stat.value}
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
                active={active}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
