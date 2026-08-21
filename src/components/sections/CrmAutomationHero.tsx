import Link from "next/link";

export default function CrmAutomationHero() {
  return (
    <section
      className="overflow-hidden"
      style={{
        backgroundColor: "#F4E8FD",
        backgroundImage: "url(/platform/crm/automation-banner-bg.svg)",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="px-5 pt-16 pb-6 min-[480px]:px-10 min-[768px]:pt-16 min-[992px]:pt-24">
        <div className="mx-auto w-full max-w-7xl">
          <h2 className="mx-auto m-0 max-w-[52rem] text-center font-[family-name:var(--font-satoshi)] text-[2.25rem] leading-[1.15] font-bold tracking-[-0.04rem] text-[#2C2D2E] min-[768px]:text-[2.75rem] min-[768px]:leading-[1.15] min-[992px]:text-[3.5rem] min-[992px]:leading-[1.15] min-[992px]:tracking-[-0.06rem]">
            Global gifting solutions to fast-track your pipeline
          </h2>
        </div>
      </div>

      <div className="mx-auto w-full max-w-[1440px]">
        <div className="flex flex-col items-center min-[1025px]:flex-row min-[1025px]:items-center">
          <div className="flex w-full flex-col items-center px-5 pt-4 pb-2 text-center min-[768px]:px-12 min-[1025px]:w-1/2 min-[1025px]:items-start min-[1025px]:px-0 min-[1025px]:py-0 min-[1025px]:pl-16 min-[1025px]:text-left min-[1280px]:pl-32">
            <h3 className="m-0 max-w-[610px] font-[family-name:var(--font-satoshi)] text-[1.375rem] leading-[1.3] font-bold text-[#2C2D2E] min-[768px]:text-[1.625rem] min-[768px]:leading-[1.3] min-[1025px]:text-[2rem] min-[1025px]:leading-[1.3]">
              Set up automated milestone gifting
            </h3>

            <p className="mt-4 mb-0 max-w-[610px] font-[family-name:var(--font-overpass)] text-lg leading-7 tracking-[0.5px] text-[#181818] min-[768px]:mt-4 min-[768px]:text-[1.375rem] min-[768px]:leading-8">
              Don&apos;t miss their biggest moments! Set up automations based on
              specific events such as birthdays, work anniversaries, and more.
            </p>

            <div className="mt-4 flex flex-wrap items-center justify-center gap-4 min-[1025px]:justify-start">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-3xl border border-[#EFF0F2] bg-white px-6 py-[12px] font-[family-name:var(--font-overpass)] text-xs leading-4 font-semibold tracking-[1.16px] text-[#2C2D2E] uppercase no-underline transition-colors hover:bg-[#EFF0F2] hover:text-[#181818]"
              >
                Book a demo
              </Link>
            </div>
          </div>

          <div className="flex w-full justify-center pt-6 min-[1025px]:w-1/2 min-[1025px]:justify-end min-[1025px]:pt-9 min-[1025px]:pr-10">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/platform/crm/automation-hero.png"
              alt="Set up automated milestone gifting"
              className="hidden h-auto w-full max-w-[678px] object-contain min-[768px]:block"
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/platform/crm/automation-hero-mobile.png"
              alt="Set up automated milestone gifting"
              className="block h-auto w-full max-w-[530px] object-contain min-[768px]:hidden"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
