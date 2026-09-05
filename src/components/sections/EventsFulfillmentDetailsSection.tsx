import { Info, Gift } from "lucide-react";

function ShippingSlaVisual() {
  return (
    <div className="relative mx-auto w-full max-w-[28rem] min-[992px]:max-w-none">
      <div className="rounded-2xl bg-blue-primary px-7 py-8 text-yellow-secondary shadow-lg min-[768px]:rounded-[1.5rem] min-[768px]:px-10 min-[768px]:py-12">
        <div className="mb-6 flex items-center gap-2 font-[family-name:var(--font-overpass)] text-sm min-[768px]:text-base">
          <span>Event domestic shipping</span>
          <Info className="size-4 shrink-0 opacity-80" aria-hidden />
        </div>
        <p className="m-0 font-[family-name:var(--font-satoshi)] text-[2.75rem] leading-none font-bold min-[768px]:text-[3.5rem]">
          *5 Days
        </p>
      </div>
      <div className="relative z-[1] -mt-8 ml-auto w-[85%] rounded-2xl border border-blue-primary/10 bg-surface px-6 py-7 text-blue-primary shadow-md min-[768px]:-mt-10 min-[768px]:rounded-[1.5rem] min-[768px]:px-8 min-[768px]:py-9">
        <div className="mb-5 flex items-center gap-2 font-[family-name:var(--font-overpass)] text-sm min-[768px]:text-base">
          <span>Event returns shipping</span>
          <Info className="size-4 shrink-0 opacity-70" aria-hidden />
        </div>
        <p className="m-0 font-[family-name:var(--font-satoshi)] text-[2.5rem] leading-none font-bold min-[768px]:text-[3.25rem]">
          *3 Days
        </p>
      </div>
    </div>
  );
}

function ReturnsVisual() {
  return (
    <div className="relative mx-auto w-full max-w-[32rem] overflow-hidden rounded-2xl min-[768px]:rounded-[1.25rem]">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/capabilities/events-fulfillment/returns.avif"
        alt="Managing event returns from your desk"
        className="block h-auto w-full object-cover"
      />
      <div className="absolute top-4 left-4 flex items-center gap-2 rounded-xl bg-white px-3 py-2 shadow-md min-[768px]:top-5 min-[768px]:left-5 min-[768px]:px-3.5 min-[768px]:py-2.5">
        <span className="flex size-7 items-center justify-center rounded-md bg-yellow-secondary">
          <Gift className="size-4 text-blue-primary" aria-hidden />
        </span>
        <span className="font-[family-name:var(--font-overpass)] text-sm font-medium text-black">
          Sent to warehouse
        </span>
      </div>
    </div>
  );
}

const DETAIL_ROWS = [
  {
    id: "shipping",
    title: "Eliminate late shipments, storage issues and last-minute scrambles",
    description:
      "Shipping delays, last-minute stress, and storage issues? We've eliminated them. SwagDrive offers flexible ground and express shipping, backed by an industry-leading 5-day domestic shipping SLA*, plus dedicated secure storage across our 1.1 million sq ft global warehouse network in the US, UK, EU, CA, and AU. We meet your deadlines on time, every time. Shipping to 15+ events a year? Upgrade to Premium Events for free ground shipping, flat-rate $50 two-day delivery, and free protective kitting and bundling.",
    visual: "shipping" as const,
    reverse: false,
  },
  {
    id: "returns",
    title: "Save time with hassle-free returns",
    description:
      "Managing returns after an event can be a logistical headache, consuming valuable time and effort. With SwagDrive, every shipment includes a pre-paid return label. Just pack any leftover items back into the box, attach the label, and drop it off or schedule a FedEx pickup. We'll do the rest: counting, restocking, and securely storing everything for your next event.",
    visual: "returns" as const,
    reverse: true,
  },
  {
    id: "swag",
    title:
      "Say goodbye to clutter with streamlined swag management and storage",
    description:
      "Managing swag for events can be overwhelming: juggling multiple vendors, handling inventory, and ensuring timely delivery. SwagDrive's Swag Sourcing solves this with a one-stop solution for sourcing, storing, and shipping premium merchandise. We handle everything from design to delivery, with flexible bulk ordering for discounted pricing and on-demand ordering with no minimum quantities, ensuring your swag is on-brand, on time, and hassle-free.",
    image: "/capabilities/events-fulfillment/swag-storage.avif",
    imageAlt: "Swag inventory management and storage",
    reverse: false,
  },
  {
    id: "roi",
    title:
      "Optimize event success with ROI-driven engagement and gifting strategies",
    description:
      "Reporting on event engagement and optimizing ROI is challenging, with 71% of marketers struggling to prove their event strategy's value. SwagDrive simplifies this with personalized landing pages and QR codes that streamline gift claims and enhance interaction. Our SwagDrive Insights provide detailed analytics to track performance, refine strategies, and optimize every campaign for maximum impact. We turn data into actionable insights, making it easy to overcome challenges and drive event success.",
    image: "/capabilities/events-fulfillment/insights.avif",
    imageAlt: "Event gifting insights and ROI analytics",
    reverse: true,
  },
] as const;

export default function EventsFulfillmentDetailsSection() {
  return (
    <section className="bg-white">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-16 px-5 py-16 min-[480px]:px-10 min-[768px]:gap-20 min-[992px]:gap-24 min-[992px]:py-24">
        {DETAIL_ROWS.map((row) => (
          <div
            key={row.id}
            className={`grid grid-cols-1 items-center gap-10 min-[992px]:grid-cols-2 min-[992px]:gap-16 ${
              row.reverse ? "min-[992px]:[&>*:first-child]:order-2" : ""
            }`}
          >
            <div className="w-full max-w-[36rem]">
              <h2 className="m-0 font-[family-name:var(--font-satoshi)] text-[1.625rem] leading-[1.2] font-bold text-black min-[768px]:text-[2rem] min-[992px]:text-[2.5rem]">
                {row.title}
              </h2>
              <p className="m-0 mt-4 font-[family-name:var(--font-overpass)] text-base leading-[1.55] text-black/80 min-[768px]:mt-5 min-[768px]:text-lg">
                {row.description}
              </p>
            </div>

            <div className="w-full">
              {"visual" in row && row.visual === "shipping" ? (
                <ShippingSlaVisual />
              ) : "visual" in row && row.visual === "returns" ? (
                <ReturnsVisual />
              ) : "image" in row ? (
                <div className="overflow-hidden rounded-2xl min-[768px]:rounded-[1.25rem]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={row.image}
                    alt={row.imageAlt}
                    className="block h-auto w-full object-contain"
                  />
                </div>
              ) : null}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
