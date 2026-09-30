import { Truck, Leaf, PackageCheck } from "lucide-react";

const COMMITMENTS = [
  {
    title: "We minimize shipping emissions",
    description:
      "Our global warehouse network allows customers to send locally instead of overseas, reducing overall shipping distance and emissions.",
    icon: Truck,
  },
  {
    title: "We work with sustainable vendors",
    description:
      "We source from vendors committed to sustainable practices and we'll always add more sustainable vendors to our marketplace.",
    icon: Leaf,
  },
  {
    title: "We limit waste",
    description:
      "We work with vendors that provide eco-friendly packaging to minimize waste.",
    icon: PackageCheck,
  },
] as const;

export default function SustainabilityCommitmentSection() {
  return (
    <section className="bg-white">
      <div className="mx-auto w-full max-w-7xl px-5 py-16 min-[480px]:px-10 min-[992px]:py-24">
        <div className="mx-auto max-w-[42rem] text-center">
          <h2 className="m-0 font-[family-name:var(--font-satoshi)] text-[1.75rem] leading-[1.2] font-bold tracking-[-0.04rem] text-black min-[768px]:text-[2.25rem] min-[768px]:leading-[1.2] min-[992px]:text-[2.875rem]">
            Our commitment to sustainable gifting
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 min-[768px]:mt-12 min-[768px]:grid-cols-3 min-[768px]:gap-6">
          {COMMITMENTS.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl bg-surface p-6 min-[768px]:rounded-[1.25rem] min-[768px]:p-8"
            >
              <item.icon
                className="mb-4 size-8 text-blue-secondary"
                strokeWidth={1.75}
                aria-hidden
              />
              <h3 className="m-0 font-[family-name:var(--font-satoshi)] text-lg leading-[1.3] font-bold text-blue-primary min-[768px]:text-xl">
                {item.title}
              </h3>
              <p className="m-0 mt-3 font-[family-name:var(--font-overpass)] text-sm leading-[1.5] text-black/80 min-[768px]:text-base">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
