const BENEFITS = [
  {
    title: "Customize Your Automation",
    description:
      "Set your sending frequency, filter contacts, and choose your gift type.",
    image: "/platform/crm/benefits/customize.svg",
    imageAlt: "Customize Your Automation",
    swapped: false,
  },
  {
    title: "Set Gifting On Autopilot",
    description:
      "We'll save the date! We'll use your contact data to base your automation, so you never have to worry about tracking dates again.",
    image: "/platform/crm/benefits/autopilot.png",
    imageAlt: "Set Gifting On Autopilot",
    swapped: true,
  },
  {
    title: "Automation Dashboard",
    description:
      "The details matter. Easily manage your automation and get a summary through your Automation Dashboard.",
    image: "/platform/crm/benefits/dashboard.svg",
    imageAlt: "Automation Dashboard",
    swapped: false,
  },
] as const;

export default function CrmBenefitsSection() {
  return (
    <section className="bg-white">
      <div className="mx-auto w-full max-w-[1440px] px-5 py-16 min-[480px]:px-10 min-[992px]:py-24">
        <p className="m-0 mb-2 text-center font-[family-name:var(--font-overpass)] text-sm leading-4 font-bold tracking-[1px] text-black uppercase min-[768px]:mb-2.5 min-[768px]:text-base">
          Sending Made Easy
        </p>
        <h2 className="m-0 mb-10 text-center font-[family-name:var(--font-satoshi)] text-2xl leading-[1.15] font-bold text-blue-primary min-[768px]:mb-12 min-[768px]:text-[2rem] min-[768px]:leading-[2.625rem] min-[1025px]:mb-[50px] min-[1025px]:text-[2.75rem] min-[1025px]:leading-[3rem]">
          Benefits
        </h2>

        <div className="mx-auto flex max-w-[1326px] flex-col gap-4 min-[1025px]:gap-[33px]">
          {BENEFITS.map((benefit) => (
            <div
              key={benefit.title}
              className="flex flex-col overflow-hidden rounded-2xl min-[1025px]:flex-row min-[1025px]:rounded-[20px]"
            >
              <div
                className={
                  benefit.swapped
                    ? "flex flex-col justify-center bg-blue-primary px-4 py-8 min-[768px]:px-8 min-[1025px]:w-[56.2%] min-[1025px]:rounded-l-[20px] min-[1025px]:rounded-r-none min-[1025px]:px-[91px] min-[1025px]:py-10 min-[1025px]:pr-[10%]"
                    : "flex flex-col justify-center bg-yellow-secondary px-4 py-8 min-[768px]:px-8 min-[1025px]:w-[56.2%] min-[1025px]:rounded-l-[20px] min-[1025px]:rounded-r-none min-[1025px]:px-[91px] min-[1025px]:py-10 min-[1025px]:pr-[10%]"
                }
              >
                <h3
                  className={
                    benefit.swapped
                      ? "m-0 mb-3.5 max-w-[400px] font-[family-name:var(--font-satoshi)] text-xl leading-6 font-bold text-yellow-secondary min-[768px]:text-[1.75rem] min-[768px]:leading-[2.375rem] min-[1025px]:text-[2.125rem] min-[1025px]:leading-[2.55rem]"
                      : "m-0 mb-3.5 max-w-[400px] font-[family-name:var(--font-satoshi)] text-xl leading-6 font-bold text-blue-primary min-[768px]:text-[1.75rem] min-[768px]:leading-[2.375rem] min-[1025px]:text-[2.125rem] min-[1025px]:leading-[2.55rem]"
                  }
                >
                  {benefit.title}
                </h3>
                <p
                  className={
                    benefit.swapped
                      ? "m-0 max-w-[479px] font-[family-name:var(--font-overpass)] text-sm leading-5 tracking-[0.5px] text-yellow-secondary min-[768px]:text-lg min-[768px]:leading-7 min-[1025px]:text-xl min-[1025px]:leading-8"
                      : "m-0 max-w-[479px] font-[family-name:var(--font-overpass)] text-sm leading-5 tracking-[0.5px] text-blue-primary min-[768px]:text-lg min-[768px]:leading-7 min-[1025px]:text-xl min-[1025px]:leading-8"
                  }
                >
                  {benefit.description}
                </p>
              </div>
              <div
                className={
                  benefit.swapped
                    ? "flex items-center justify-center bg-yellow-secondary px-6 py-6 min-[768px]:px-8 min-[768px]:py-8 min-[1025px]:w-[43.8%] min-[1025px]:rounded-r-[20px] min-[1025px]:rounded-l-none min-[1025px]:px-14"
                    : "flex items-center justify-center bg-blue-primary px-6 py-6 min-[768px]:px-8 min-[768px]:py-8 min-[1025px]:w-[43.8%] min-[1025px]:rounded-r-[20px] min-[1025px]:rounded-l-none min-[1025px]:px-14"
                }
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={benefit.image}
                  alt={benefit.imageAlt}
                  className="h-auto w-full max-w-[467px] object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
