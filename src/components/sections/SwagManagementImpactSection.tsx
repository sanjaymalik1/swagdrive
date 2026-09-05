import { Gift } from "lucide-react";

const IMPACT_CARDS = [
  {
    title: "Surprise and delight:",
    description:
      "Deliver memorable customer experiences with high-quality swag that strengthens relationships and leaves a lasting impression.",
    accent: false,
  },
  {
    title: "Boost event engagement:",
    description:
      "Streamline event swag by shipping directly from the factory to your preferred location, saving time, hassle, and storage space.",
    accent: true,
  },
  {
    title: "Scale employee engagement:",
    description:
      "Save on employee swag & onboarding kits by sourcing at scale from a centralized trusted vendor.",
    accent: false,
  },
  {
    title: "Enhance brand identity:",
    description:
      "Elevate your brand with premium swag that turns heads and earns the attention you deserve.",
    accent: false,
  },
] as const;

export default function SwagManagementImpactSection() {
  return (
    <section className="bg-surface">
      <div className="mx-auto w-full max-w-7xl px-5 py-16 min-[480px]:px-10 min-[992px]:py-24">
        <h2 className="m-0 mb-10 max-w-[40rem] font-[family-name:var(--font-satoshi)] text-[1.75rem] leading-[1.2] font-bold text-black min-[768px]:mb-12 min-[768px]:text-[2.25rem] min-[992px]:text-[2.875rem]">
          How top brands use swag to deliver real impact
        </h2>

        <div className="grid grid-cols-1 items-stretch gap-8 min-[992px]:grid-cols-2 min-[992px]:gap-12">
          <div className="grid grid-cols-1 gap-4 min-[480px]:grid-cols-2 min-[480px]:gap-5">
            {IMPACT_CARDS.map((card) => (
              <div
                key={card.title}
                className={`rounded-2xl p-5 min-[768px]:rounded-[1.25rem] min-[768px]:p-6 ${
                  card.accent
                    ? "bg-[color-mix(in_srgb,var(--yellow-tertiary)_55%,white)]"
                    : "bg-white"
                }`}
              >
                <h3 className="m-0 font-[family-name:var(--font-satoshi)] text-lg leading-[1.3] font-bold text-blue-primary min-[768px]:text-xl">
                  {card.title}
                </h3>
                <p className="m-0 mt-2 font-[family-name:var(--font-overpass)] text-sm leading-[1.5] text-black/80 min-[768px]:text-base">
                  {card.description}
                </p>
              </div>
            ))}
          </div>

          <div className="relative overflow-hidden rounded-2xl min-[768px]:rounded-[1.25rem]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/capabilities/swag-management/brands-warehouse.avif"
              alt="Swag stored and ready to ship from warehouse"
              className="block h-full min-h-[18rem] w-full object-cover"
            />
            <div className="absolute right-4 bottom-4 flex items-center gap-2 rounded-xl bg-white px-3 py-2 shadow-md min-[768px]:right-5 min-[768px]:bottom-5 min-[768px]:px-3.5 min-[768px]:py-2.5">
              <span className="flex size-7 items-center justify-center rounded-md bg-yellow-secondary">
                <Gift className="size-4 text-blue-primary" aria-hidden />
              </span>
              <span className="font-[family-name:var(--font-overpass)] text-sm font-medium text-black">
                Sent to warehouse
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
