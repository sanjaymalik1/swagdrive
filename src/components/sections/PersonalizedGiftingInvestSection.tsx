"use client";

import { useEffect, useRef, useState } from "react";

const STATS = [
  {
    value: 84,
    suffix: "%",
    label:
      "of marketers agree corporate gifting and swag provide the highest ROI of any channel",
  },
  {
    value: 67,
    suffix: "%",
    label:
      "of marketers rate gifting and swag as the most important go-to-market channel",
  },
  {
    value: 52,
    suffix: "%",
    label: "higher response rates from personalized outreach",
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
  label: string;
  active: boolean;
}) {
  const count = useCountUp(value, active);

  return (
    <div className="flex h-full flex-col rounded-2xl border border-blue-primary/15 bg-white p-6 min-[768px]:rounded-3xl min-[768px]:p-8">
      <p className="m-0 font-[family-name:var(--font-satoshi)] text-[2.5rem] leading-none font-bold text-blue-primary min-[768px]:text-[3.25rem]">
        {count}
        {suffix}
      </p>
      <p className="m-0 mt-4 font-[family-name:var(--font-overpass)] text-base leading-[1.5] text-black/80 min-[768px]:text-lg">
        {label}
      </p>
    </div>
  );
}

export default function PersonalizedGiftingInvestSection() {
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
    <section ref={ref} className="bg-white">
      <div className="mx-auto w-full max-w-7xl px-5 py-16 min-[480px]:px-10 min-[992px]:py-24">
        <h2 className="m-0 text-center font-[family-name:var(--font-satoshi)] text-[1.75rem] leading-[1.2] font-bold text-black min-[768px]:text-[2.25rem] min-[992px]:text-[2.875rem]">
          It&apos;s time to invest in gifting and direct mail
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-5 min-[768px]:mt-12 min-[768px]:gap-6 min-[992px]:grid-cols-3">
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
    </section>
  );
}
