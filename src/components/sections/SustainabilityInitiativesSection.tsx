import { Recycle, Users } from "lucide-react";

const INITIATIVES = [
  {
    title: "Helping customers gift sustainably",
    description:
      "We want to make sustainable gifting as easy as possible for our customers. When sourcing with us, our project management team can provide ready-to-go assets to quickly ideate sustainable merchandise items and products that have giveback initiatives tied to purchases.",
    icon: Recycle,
  },
  {
    title: "Scaling employee engagement",
    description:
      "We want to build a workplace that reflects the diverse communities we live, work, and play in. We commit to creating a place where every SwagDriver feels seen, heard, valued, and supported. We cherish our differences and know that we are stronger because of them.",
    icon: Users,
  },
] as const;

export default function SustainabilityInitiativesSection() {
  return (
    <section className="bg-surface">
      <div className="mx-auto w-full max-w-7xl px-5 py-16 min-[480px]:px-10 min-[992px]:py-24">
        <div className="mx-auto max-w-[42rem] text-center">
          <h2 className="m-0 font-[family-name:var(--font-satoshi)] text-[1.75rem] leading-[1.2] font-bold tracking-[-0.04rem] text-black min-[768px]:text-[2.25rem] min-[768px]:leading-[1.2] min-[992px]:text-[2.875rem]">
            Our sustainability initiatives
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 min-[768px]:mt-12 min-[768px]:grid-cols-2 min-[768px]:gap-6">
          {INITIATIVES.map((item) => (
            <div
              key={item.title}
              className="flex flex-col rounded-2xl border border-blue-primary/10 bg-white p-6 min-[768px]:rounded-[1.25rem] min-[768px]:p-8"
            >
              <item.icon
                className="mb-4 size-8 text-yellow-secondary"
                strokeWidth={1.75}
                aria-hidden
              />
              <h3 className="m-0 font-[family-name:var(--font-satoshi)] text-xl leading-[1.3] font-bold text-blue-primary min-[768px]:text-2xl">
                {item.title}
              </h3>
              <p className="m-0 mt-3 font-[family-name:var(--font-overpass)] text-base leading-[1.5] text-black/80">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
