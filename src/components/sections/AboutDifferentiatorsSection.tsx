import Link from "next/link";
import { ArrowRight, LineChart, Plug, Warehouse, Palette } from "lucide-react";

const DIFFERENTIATORS = [
  {
    title: "Trackable, attributable ROI",
    description:
      "Tie every gift and swag send to pipeline, retention, and engagement with reporting built into the CRM Dashboard.",
    icon: LineChart,
    href: "/platform/crm",
  },
  {
    title: "Seamless integrations",
    description:
      "Send gifts and swag in a click from the tools your team already uses, without adding another manual step.",
    icon: Plug,
    href: "/platform/redeem",
  },
  {
    title: "Fast, secure global fulfillment",
    description:
      "Our warehousing network spans the US, Canada, UK, Europe, and Australia, delivering to 180+ countries on time.",
    icon: Warehouse,
    href: "/capabilities/global-warehousing",
  },
  {
    title: "Full-service creative strategy",
    description:
      "Our Creative Services team handles everything from concept to execution, so your campaigns stay on-brand end to end.",
    icon: Palette,
    href: "/design-studio/creative-services",
  },
] as const;

export default function AboutDifferentiatorsSection() {
  return (
    <section className="bg-surface">
      <div className="mx-auto w-full max-w-7xl px-5 py-16 min-[480px]:px-10 min-[992px]:py-24">
        <div className="mx-auto max-w-[42rem] text-center">
          <h2 className="m-0 font-[family-name:var(--font-satoshi)] text-[1.75rem] leading-[1.2] font-bold tracking-[-0.04rem] text-black min-[768px]:text-[2.25rem] min-[768px]:leading-[1.2] min-[992px]:text-[2.875rem]">
            Experience the SwagDrive difference
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 min-[768px]:mt-12 min-[768px]:grid-cols-2 min-[768px]:gap-6">
          {DIFFERENTIATORS.map((item) => (
            <div
              key={item.title}
              className="flex flex-col rounded-2xl bg-white p-6 min-[768px]:rounded-[1.25rem] min-[768px]:p-8"
            >
              <item.icon
                className="mb-4 size-8 text-blue-secondary"
                strokeWidth={1.75}
                aria-hidden
              />
              <h3 className="m-0 font-[family-name:var(--font-satoshi)] text-xl leading-[1.3] font-bold text-blue-primary min-[768px]:text-2xl">
                {item.title}
              </h3>
              <p className="m-0 mt-3 flex-1 font-[family-name:var(--font-overpass)] text-base leading-[1.5] text-black/80">
                {item.description}
              </p>
              <Link
                href={item.href}
                className="mt-6 inline-flex w-fit items-center gap-1.5 rounded-xl border border-blue-primary/20 bg-white px-4 py-2.5 font-[family-name:var(--font-overpass)] text-sm font-medium text-blue-primary no-underline transition-colors hover:bg-blue-primary/5"
              >
                Learn more
                <ArrowRight className="size-4" aria-hidden />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
