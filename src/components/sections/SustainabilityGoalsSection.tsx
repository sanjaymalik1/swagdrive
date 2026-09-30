import { Zap, PartyPopper } from "lucide-react";

const GOALS = [
  {
    title: "Ensure our offices are held to a high standard of energy efficiency",
    icon: Zap,
  },
  {
    title:
      "Company-wide Earth Day events and global clean-up and donation opportunities",
    icon: PartyPopper,
  },
] as const;

export default function SustainabilityGoalsSection() {
  return (
    <section className="bg-white">
      <div className="mx-auto w-full max-w-7xl px-5 py-16 min-[480px]:px-10 min-[992px]:py-24">
        <div className="mx-auto max-w-[42rem] text-center">
          <h2 className="m-0 font-[family-name:var(--font-satoshi)] text-[1.75rem] leading-[1.2] font-bold tracking-[-0.04rem] text-black min-[768px]:text-[2.25rem] min-[768px]:leading-[1.2] min-[992px]:text-[2.875rem]">
            Our sustainability goals
          </h2>
          <p className="m-0 mt-4 font-[family-name:var(--font-overpass)] text-base leading-[1.5] font-light text-black/80 min-[768px]:mt-5 min-[768px]:text-[1.125rem]">
            We&apos;ll always look for ways to be more sustainable as a
            business. Here are the goals we are working towards right now:
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 min-[768px]:mt-12 min-[768px]:grid-cols-2 min-[768px]:gap-6">
          {GOALS.map((goal) => (
            <div
              key={goal.title}
              className="rounded-2xl bg-surface p-6 min-[768px]:rounded-[1.25rem] min-[768px]:p-8"
            >
              <goal.icon
                className="mb-4 size-8 text-blue-secondary"
                strokeWidth={1.75}
                aria-hidden
              />
              <h3 className="m-0 font-[family-name:var(--font-satoshi)] text-lg leading-[1.3] font-bold text-blue-primary min-[768px]:text-xl">
                {goal.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
