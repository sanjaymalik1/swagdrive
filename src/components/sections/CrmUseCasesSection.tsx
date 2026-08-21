const USE_CASES = [
  {
    label: "Work Anniversaries",
    icon: "/platform/crm/use-cases/work-anniversaries.svg",
  },
  {
    label: "Onboarding",
    icon: "/platform/crm/use-cases/onboarding.svg",
  },
  {
    label: "Birthdays",
    icon: "/platform/crm/use-cases/birthdays.svg",
  },
  {
    label: "Milestones",
    icon: "/platform/crm/use-cases/milestones.svg",
  },
  {
    label: "Service Awards",
    icon: "/platform/crm/use-cases/service-awards.svg",
  },
  {
    label: "Prospecting",
    icon: "/platform/crm/use-cases/prospecting.svg",
  },
] as const;

export default function CrmUseCasesSection() {
  return (
    <section className="bg-[#F8F8F8]">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-8 px-6 py-10 min-[768px]:px-11 min-[1025px]:flex-row min-[1025px]:items-start min-[1025px]:justify-between min-[1025px]:gap-10 min-[1025px]:px-16 min-[1025px]:py-14">
        <div className="flex shrink-0 flex-col items-center text-center min-[1025px]:w-[29%] min-[1025px]:items-start min-[1025px]:pt-8 min-[1025px]:text-left">
          <p className="m-0 mb-2 font-[family-name:var(--font-overpass)] text-xs leading-4 font-bold tracking-[1px] text-[#00C036] uppercase min-[1025px]:mb-0 min-[1025px]:text-base min-[1025px]:leading-6">
            GET AHEAD OF THE MOMENT
          </p>
          <h2 className="m-0 font-[family-name:var(--font-satoshi)] text-2xl leading-[1.15] font-bold text-[#2C2D2E] min-[768px]:text-[2rem] min-[1025px]:text-[2.625rem] min-[1025px]:leading-[3rem]">
            Use Cases
          </h2>
        </div>

        <div className="grid w-full grid-cols-2 gap-3.5 min-[768px]:gap-7 min-[1025px]:max-w-[867px] min-[1025px]:grid-cols-3">
          {USE_CASES.map((item) => (
            <div
              key={item.label}
              className="flex flex-col items-center rounded-xl border-2 border-[#D8F1CC] bg-white px-3 py-6 min-[768px]:rounded-[12px] min-[768px]:px-[43px] min-[768px]:py-6"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={item.icon}
                alt=""
                className="mb-3 h-[72px] w-auto max-w-[81px] object-contain"
              />
              <h3 className="m-0 text-center font-[family-name:var(--font-overpass)] text-sm leading-5 tracking-[0.32px] text-[#2C2D2E] min-[768px]:text-xl min-[768px]:leading-8 min-[768px]:tracking-[0.5px]">
                {item.label}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
