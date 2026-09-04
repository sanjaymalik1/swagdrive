import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function CrmAutomationHero() {
  return (
    <section
      className="overflow-hidden bg-yellow-tertiary"
      style={{
        backgroundImage: "url(/platform/crm/automation-banner-bg.svg)",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="px-5 py-16 min-[480px]:px-10 min-[992px]:py-24">
        <div className="mx-auto w-full max-w-7xl">
          <h2 className="mx-auto m-0 max-w-[52rem] text-center font-[family-name:var(--font-satoshi)] text-[2.25rem] leading-[1.15] font-bold tracking-[-0.04rem] text-black min-[768px]:text-[2.75rem] min-[768px]:leading-[1.15] min-[992px]:text-[3.5rem] min-[992px]:leading-[1.15] min-[992px]:tracking-[-0.06rem]">
            Global gifting solutions to fast-track your pipeline
          </h2>

          <div className="mt-10 flex flex-col items-center min-[1025px]:mt-14 min-[1025px]:flex-row min-[1025px]:items-center">
            <div className="flex w-full flex-col items-center text-center min-[1025px]:w-1/2 min-[1025px]:items-start min-[1025px]:pr-8 min-[1025px]:text-left">
              <h3 className="m-0 max-w-[610px] font-[family-name:var(--font-satoshi)] text-[1.375rem] leading-[1.3] font-bold text-blue-primary min-[768px]:text-[1.625rem] min-[768px]:leading-[1.3] min-[1025px]:text-[2rem] min-[1025px]:leading-[1.3]">
                Set up automated milestone gifting
              </h3>

              <p className="mt-4 mb-0 max-w-[610px] font-[family-name:var(--font-overpass)] text-lg leading-7 tracking-[0.5px] text-black min-[768px]:text-[1.375rem] min-[768px]:leading-8">
                Don&apos;t miss their biggest moments! Set up automations based
                on specific events such as birthdays, work anniversaries, and
                more.
              </p>

              <div className="mt-6 flex flex-wrap items-center justify-center gap-4 min-[1025px]:justify-start">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 rounded-[3rem] bg-blue-primary px-5 py-3.5 text-center text-base leading-none font-normal text-yellow-secondary no-underline"
                >
                  Book a demo
                  <ArrowUpRight
                    className="size-5 shrink-0 stroke-[2.5] transition-transform duration-200 ease-out group-hover:scale-130"
                    aria-hidden
                  />
                </Link>
              </div>
            </div>

            <div className="flex w-full justify-center pt-10 min-[1025px]:w-1/2 min-[1025px]:justify-end min-[1025px]:pt-0">
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
      </div>
    </section>
  );
}
