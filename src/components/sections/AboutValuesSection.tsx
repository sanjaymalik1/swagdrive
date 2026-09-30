import { HandHeart, TrendingUp, Globe2, Rocket } from "lucide-react";

const VALUES = [
  {
    title: "Genuine human connections fuel business success",
    description:
      "Gifting works best when it's personal. We empower marketing, sales, customer success, and people teams to create meaningful moments that scale, ensuring you stand out in a crowded digital world.",
    icon: HandHeart,
  },
  {
    title: "Every send should drive business results",
    description:
      "We back our strategies with real data and insights, ensuring every campaign delivers measurable ROI. With SwagDrive, gifting and swag are revenue accelerators at every stage of the customer journey.",
    icon: TrendingUp,
  },
  {
    title: "No borders, just seamless global experiences",
    description:
      "Connections shouldn't have limits. Our robust global fulfillment network and address confirmation technology ensure you can reach people anywhere, anytime.",
    icon: Globe2,
  },
  {
    title: "We break boundaries with innovative outreach",
    description:
      "We don't settle for the status quo. By continuously innovating, we help you push the boundaries of corporate gifting and swag—combining technology, creativity, and strategy.",
    icon: Rocket,
  },
] as const;

export default function AboutValuesSection() {
  return (
    <section className="bg-white">
      <div className="mx-auto w-full max-w-7xl px-5 py-16 min-[480px]:px-10 min-[992px]:py-24">
        <div className="mx-auto max-w-[42rem] text-center">
          <h2 className="m-0 font-[family-name:var(--font-satoshi)] text-[1.75rem] leading-[1.2] font-bold tracking-[-0.04rem] text-black min-[768px]:text-[2.25rem] min-[768px]:leading-[1.2] min-[992px]:text-[2.875rem]">
            Gifting &amp; swag solutions that work for you
          </h2>
          <p className="m-0 mt-4 font-[family-name:var(--font-overpass)] text-base leading-[1.5] font-light text-black/80 min-[768px]:mt-5 min-[768px]:text-[1.125rem]">
            Your success is our success. That&apos;s why we&apos;re guided by
            four core principles that drive our approach:
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 min-[768px]:mt-12 min-[768px]:grid-cols-2 min-[768px]:gap-6">
          {VALUES.map((value) => (
            <div
              key={value.title}
              className="rounded-2xl bg-surface p-6 min-[768px]:rounded-[1.25rem] min-[768px]:p-8"
            >
              <value.icon
                className="mb-4 size-8 text-blue-secondary"
                strokeWidth={1.75}
                aria-hidden
              />
              <h3 className="m-0 font-[family-name:var(--font-satoshi)] text-lg leading-[1.3] font-bold text-blue-primary min-[768px]:text-xl">
                {value.title}
              </h3>
              <p className="m-0 mt-3 font-[family-name:var(--font-overpass)] text-sm leading-[1.5] text-black/80 min-[768px]:text-base">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
