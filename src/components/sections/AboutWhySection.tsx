import Link from "next/link";
import { ArrowRight } from "lucide-react";

const STATS = [
  {
    title: "9x brand engagement and 5x ROI",
    description:
      "See how the art of gifting strengthens customer bonds and turns renewals into easy wins.",
  },
  {
    title: "Accelerate deal cycles by 19%",
    description: "With highly personalized gifting strategies.",
  },
  {
    title: "Increase conversions & improve retention",
    description: "With data-driven insights across every send.",
  },
  {
    title: "Boost employee morale",
    description:
      "With automated appreciation gifts & high-quality swag.",
  },
] as const;

export default function AboutWhySection() {
  return (
    <section className="bg-surface">
      <div className="mx-auto w-full max-w-7xl px-5 py-16 min-[480px]:px-10 min-[992px]:py-24">
        <div className="mx-auto max-w-[42rem] text-center">
          <h2 className="m-0 font-[family-name:var(--font-satoshi)] text-[1.75rem] leading-[1.2] font-bold tracking-[-0.04rem] text-black min-[768px]:text-[2.25rem] min-[768px]:leading-[1.2] min-[992px]:text-[2.875rem]">
            Why SwagDrive? The results speak for themselves
          </h2>
          <p className="m-0 mt-4 font-[family-name:var(--font-overpass)] text-base leading-[1.5] font-light text-black/80 min-[768px]:mt-5 min-[768px]:text-[1.125rem]">
            We&apos;re proud to deliver measurable and meaningful business
            impact, one gift at a time. Together we can achieve:
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 min-[640px]:grid-cols-2 min-[768px]:mt-12 min-[768px]:gap-6">
          {STATS.map((stat) => (
            <div
              key={stat.title}
              className="rounded-2xl border border-blue-primary/10 bg-white p-6 min-[768px]:rounded-[1.25rem] min-[768px]:p-8"
            >
              <h3 className="m-0 font-[family-name:var(--font-satoshi)] text-lg leading-[1.3] font-bold text-blue-primary min-[768px]:text-xl">
                {stat.title}
              </h3>
              <p className="m-0 mt-3 font-[family-name:var(--font-overpass)] text-sm leading-[1.5] text-black/80 min-[768px]:text-base">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        <p className="mx-auto m-0 mt-10 max-w-[48rem] text-center font-[family-name:var(--font-overpass)] text-base leading-[1.5] font-light text-black/80 min-[768px]:mt-12 min-[768px]:text-[1.125rem]">
          Our goal is simple: we exist to help you build deeper connections
          because connections drive revenue. SwagDrive isn&apos;t about
          vanity metrics; we&apos;re a gifting platform designed for modern
          GTM and people teams focused on maximizing their investment,
          delivering measurable ROI, and creating unforgettable experiences.
        </p>

        <div className="mt-6 flex justify-center">
          <Link
            href="/platform/crm"
            className="group inline-flex w-fit items-center gap-1.5 rounded-xl border border-blue-primary/20 bg-white px-4 py-2.5 font-[family-name:var(--font-overpass)] text-sm font-medium text-blue-primary no-underline transition-colors hover:bg-blue-primary/5"
          >
            Learn More
            <ArrowRight className="size-4" aria-hidden />
          </Link>
        </div>
      </div>
    </section>
  );
}
