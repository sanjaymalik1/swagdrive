import { Check } from "lucide-react";

const HR_CARDS = [
  {
    lead: "Automate",
    rest: " employee engagement initiatives with seamless HRIS integrations.",
    image: "/capabilities/employee-engagement/hr-automate.avif",
    imageAlt: "Automated employee onboarding and engagement",
  },
  {
    lead: "Store and send",
    rest: " meaningful, timely gifts without the manual effort or office clutter.",
    image: "/capabilities/employee-engagement/hr-store.avif",
    imageAlt: "Warehouse storage for employee gifts and swag",
  },
  {
    lead: "Track",
    rest: " and measure the impact of gifting on employee engagement.",
    image: "/capabilities/employee-engagement/hr-track.avif",
    imageAlt: "Employee engagement gifting analytics",
  },
] as const;

export default function EmployeeEngagementHrSection() {
  return (
    <section className="bg-blue-primary">
      <div className="mx-auto w-full max-w-7xl px-5 py-16 min-[480px]:px-10 min-[992px]:py-24">
        <h2 className="m-0 text-center font-[family-name:var(--font-satoshi)] text-[1.75rem] leading-[1.2] font-bold text-yellow-secondary min-[768px]:text-[2.25rem] min-[992px]:text-[2.875rem]">
          With SwagDrive, HR and People teams can:
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-5 min-[768px]:mt-12 min-[768px]:gap-6 min-[992px]:grid-cols-3">
          {HR_CARDS.map((card) => (
            <div
              key={card.lead}
              className="flex flex-col overflow-hidden rounded-2xl bg-white min-[768px]:rounded-[1.25rem]"
            >
              <div className="flex flex-1 flex-col px-5 pt-6 pb-4 min-[768px]:px-6 min-[768px]:pt-7">
                <span className="mb-4 flex size-8 items-center justify-center rounded-full bg-blue-primary text-yellow-secondary">
                  <Check className="size-4 stroke-[3]" aria-hidden />
                </span>
                <p className="m-0 font-[family-name:var(--font-overpass)] text-base leading-[1.45] text-black min-[768px]:text-lg">
                  <strong className="font-semibold text-blue-primary">
                    {card.lead}
                  </strong>
                  {card.rest}
                </p>
              </div>
              <div className="mt-auto overflow-hidden px-4 pb-4 min-[768px]:px-5 min-[768px]:pb-5">
                <div className="overflow-hidden rounded-xl">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={card.image}
                    alt={card.imageAlt}
                    className="block h-auto w-full object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
