import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const POINTERS = [
  {
    id: "campaigns",
    title: "Open doors with expertly curated gift campaigns",
    description:
      "Standard gifts often miss the mark. Juggling personalization, logistics, and timing can be overwhelming. Our dedicated Creative Services team simplifies this by collaborating with you to create tailored gift bundles that align with your marketing and sales goals, and resonate with your audience. With thoughtful, on-brand items, we help you leave lasting impressions and drive real results.",
    image: "/design-studio/creative-services/pointer-campaigns.avif",
    imageAlt: "Curated gift campaign dashboard",
    reverse: false,
  },
  {
    id: "virtual",
    title: "Increase engagement with unforgettable virtual experiences",
    description:
      "We know virtual events are vital for fostering relationships and driving your brand's success, but they can often feel impersonal and tricky to manage. SwagDrive's Professional Services simplify this by partnering with trusted vendors to create unforgettable VIP experiences—like cocktail classes, workshops, and murder mysteries. With us handling the details, you can ensure every event turns your audience into loyal brand advocates.",
    image: "/design-studio/creative-services/pointer-virtual.avif",
    imageAlt: "Virtual event experiences and collections",
    reverse: true,
  },
  {
    id: "swag",
    title: "Turn recipients into brand champions with custom swag",
    description:
      "Bring your brand to life with our intuitive self-serve Merchandise Builder. Easily design, order, and restock high-quality custom swag that embodies your brand—whether it's apparel, stationery, tech gadgets, or more. Choose to ship directly to your office, event, clients and prospects, or store items in our warehouse for easy distribution. Sit back and relax as we ensure seamless delivery, helping you make lasting impressions.",
    image: "/design-studio/creative-services/pointer-merch.avif",
    imageAlt: "Merchandise builder customization tools",
    reverse: false,
  },
  {
    id: "store",
    title:
      "Increase merchandise sales and streamline fulfillment with Store Portals",
    description:
      "We get it—managing branded corporate swag and merchandise at scale can feel overwhelming. That's where our Store Portals come in—providing a white-labelled eCommerce solution tailored to your needs. Effortlessly manage sales and inventory while we handle logistics and distribution. This empowers you to concentrate on creating impactful campaigns and driving engagement—without the hassle of fulfillment.",
    image: "/design-studio/creative-services/pointer-store.avif",
    imageAlt: "White-labeled store portal and product catalog",
    reverse: true,
    cta: {
      label: "Learn more",
      href: "/platform/swag-store",
    },
  },
  {
    id: "landing",
    title: "Convert with branded gifting landing pages",
    description:
      "SwagDrive's Professional Services can help you create high-converting tailored landing pages designed to captivate your audience. With personalized messaging, custom coded scripts and interactive elements, our pages enhance engagement, ensure you capture all those important details, and maximize your campaign ROI.",
    image: "/design-studio/creative-services/pointer-landing.avif",
    imageAlt: "Branded gifting landing pages dashboard",
    reverse: false,
    cta: {
      label: "Learn more",
      href: "/platform/redeem",
    },
  },
  {
    id: "global",
    title:
      "Eliminate logistics and event headaches with global distribution",
    description:
      "Coordinating gifting campaigns internationally can lead to a host of headaches, like shipping delays and customs issues. With SwagDrive's global distribution and event capabilities, we streamline the process, ensuring your gifts arrive on time, at the right location, and meet local standards. Scale your gifting efforts confidently, knowing we've got global and event logistics covered.",
    image: "/design-studio/creative-services/pointer-global.avif",
    imageAlt: "Global marketplace and distribution",
    reverse: true,
  },
  {
    id: "roi",
    title: "Achieve measurable ROI with every gift",
    description:
      "Understanding the effectiveness of your gifting campaigns is key to future success. Our platform offers detailed tracking and reporting metrics to measure gift engagement and ROI, integrating in a couple of clicks with your CRM tech stack for enhanced visibility. With our data-driven insights, we help you optimize strategies for lead nurturing and deal acceleration—ensuring stronger results.",
    image: "/design-studio/creative-services/pointer-roi.avif",
    imageAlt: "Gifting ROI insights and reporting",
    reverse: false,
    cta: {
      label: "Learn more",
      href: "/platform/crm",
    },
  },
] as const;

export default function CreativeServicesPointersSection() {
  return (
    <section className="bg-white">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-16 px-5 py-16 min-[480px]:px-10 min-[768px]:gap-20 min-[992px]:gap-24 min-[992px]:py-24">
        {POINTERS.map((pointer) => (
          <div
            key={pointer.id}
            className={`grid grid-cols-1 items-center gap-10 min-[992px]:grid-cols-2 min-[992px]:gap-16 ${
              pointer.reverse ? "min-[992px]:[&>*:first-child]:order-2" : ""
            }`}
          >
            <div className="w-full max-w-[36rem]">
              <h2 className="m-0 font-[family-name:var(--font-satoshi)] text-[1.625rem] leading-[1.2] font-bold text-black min-[768px]:text-[2rem] min-[992px]:text-[2.5rem]">
                {pointer.title}
              </h2>
              <p className="m-0 mt-4 font-[family-name:var(--font-overpass)] text-base leading-[1.55] text-black/80 min-[768px]:mt-5 min-[768px]:text-lg">
                {pointer.description}
              </p>
              {"cta" in pointer && pointer.cta ? (
                <Link
                  href={pointer.cta.href}
                  className="group mt-6 inline-flex items-center gap-2 rounded-[3rem] bg-blue-primary px-5 py-3.5 text-center font-[family-name:var(--font-lexend)] text-base leading-none font-normal text-yellow-secondary no-underline"
                >
                  {pointer.cta.label}
                  <ArrowUpRight
                    className="size-5 shrink-0 stroke-[2.5] transition-transform duration-200 ease-out group-hover:scale-130"
                    aria-hidden
                  />
                </Link>
              ) : null}
            </div>

            <div className="w-full overflow-hidden rounded-2xl min-[768px]:rounded-[1.25rem]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={pointer.image}
                alt={pointer.imageAlt}
                className="block h-auto w-full object-contain"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
