import Link from "next/link";
import { ArrowRight, Gift, Sparkles, ShoppingCart, Monitor, Truck, TrendingUp } from "lucide-react";

const WHY_CARDS = [
  {
    title: "Your Trusted Gifting Partner",
    description:
      "We're dedicated to helping you achieve your marketing and sales goals through tailored gifting strategies that resonate with your audience.",
    icon: Gift,
    href: "/contact",
  },
  {
    title: "Unforgettable Virtual Experiences",
    description:
      "Enhance engagement with curated virtual events that foster connections and strengthen relationships.",
    icon: Sparkles,
    href: "/contact",
  },
  {
    title: "Seamless Swag Management",
    description:
      "Use our Store Portals and Merchandise Builder to manage creation, storage, and distribution of your branded swag effortlessly.",
    icon: ShoppingCart,
    href: "/capabilities/swag-management",
  },
  {
    title: "Custom Landing Pages",
    description:
      "Engage your audience and capture their details with personalized, custom-built, high-converting pages.",
    icon: Monitor,
    href: "/platform/redeem",
  },
  {
    title: "Global & Event Fulfillment",
    description:
      "Count on us to handle logistics for international and event-based campaigns, ensuring timely delivery and compliance with local standards.",
    icon: Truck,
    href: "/capabilities/events-fulfillment",
  },
  {
    title: "ROI Tracking",
    description:
      "Gain insights into your gifting campaigns with detailed tracking and reporting metrics to measure engagement and effectiveness.",
    icon: TrendingUp,
    href: "/platform/crm",
  },
] as const;

export default function CreativeServicesWhySection() {
  return (
    <section className="bg-surface">
      <div className="mx-auto w-full max-w-7xl px-5 py-16 min-[480px]:px-10 min-[992px]:py-24">
        <h2 className="m-0 text-center font-[family-name:var(--font-satoshi)] text-[1.75rem] leading-[1.2] font-bold text-black min-[768px]:text-[2.25rem] min-[992px]:text-[2.875rem]">
          Why choose SwagDrive Creative Services?
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-5 min-[768px]:mt-12 min-[768px]:grid-cols-2 min-[768px]:gap-6">
          {WHY_CARDS.map((card) => (
            <div
              key={card.title}
              className="flex flex-col rounded-2xl bg-white p-6 shadow-sm min-[768px]:rounded-[1.25rem] min-[768px]:p-8"
            >
              <card.icon
                className="mb-4 size-8 text-yellow-secondary"
                strokeWidth={1.75}
                aria-hidden
              />
              <h3 className="m-0 font-[family-name:var(--font-satoshi)] text-xl leading-[1.3] font-bold text-blue-primary min-[768px]:text-2xl">
                {card.title}
              </h3>
              <p className="m-0 mt-3 flex-1 font-[family-name:var(--font-overpass)] text-base leading-[1.5] text-black/80">
                {card.description}
              </p>
              <Link
                href={card.href}
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
