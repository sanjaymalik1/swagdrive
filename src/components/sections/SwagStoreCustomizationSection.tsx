const FEATURES = [
  {
    title: "Add custom swag and gifts from our catalog",
    icon: "/platform/swag-store/scale-1.svg",
  },
  {
    title: "Apply your branding to the entire experience",
    icon: "/platform/swag-store/scale-2.svg",
  },
  {
    title: "Give points, currency, or go priceless",
    icon: "/platform/swag-store/scale-3.svg",
  },
  {
    title: "Global and cross-company efficient",
    icon: "/platform/swag-store/scale-4.svg",
  },
] as const;

export default function SwagStoreCustomizationSection() {
  return (
    <section className="bg-[#FEEBF0]">
      <div className="mx-auto w-full max-w-[1440px] px-6 py-[30px] min-[768px]:px-16 min-[768px]:pt-[30px] min-[768px]:pb-[50px] min-[992px]:px-[63px] min-[992px]:py-[50px]">
        <h2 className="m-0 mb-[30px] text-center font-[family-name:var(--font-satoshi)] text-2xl leading-8 font-bold text-[#083467] min-[768px]:mb-[34px] min-[768px]:text-2xl min-[768px]:leading-[30px] min-[992px]:mb-10 min-[992px]:text-[2.625rem] min-[992px]:leading-[3rem]">
          Total customization, efficiency, and scale
        </h2>

        <div className="grid grid-cols-1 gap-4 min-[768px]:grid-cols-2 min-[768px]:gap-8 min-[992px]:grid-cols-4">
          {FEATURES.map((feature) => (
            <div
              key={feature.title}
              className="rounded-xl bg-white px-8 py-4 text-center min-[768px]:px-[30px] min-[768px]:py-[30px] min-[768px]:text-left min-[992px]:px-4 min-[992px]:py-6 min-[992px]:pl-[26px]"
            >
              <div className="mb-0 flex h-16 items-center justify-center min-[768px]:mb-1 min-[768px]:justify-start">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={feature.icon}
                  alt=""
                  className="h-auto w-[52px] object-contain min-[768px]:w-[60px]"
                />
              </div>
              <h3 className="m-0 font-[family-name:var(--font-satoshi)] text-lg leading-6 font-bold text-[#083467] min-[768px]:text-lg min-[768px]:leading-[22px] min-[992px]:text-xl min-[992px]:leading-[30px]">
                {feature.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
