"use client";

import Link from "next/link";
import { useState } from "react";
import { cn } from "@/lib/utils";
import {
  GLOBAL_WAREHOUSING_SOLUTION_TABS,
  type GlobalWarehousingSolutionTab,
} from "./global-warehousing-solutions-data";

function SolutionPanel({ tab }: { tab: GlobalWarehousingSolutionTab }) {
  return (
    <div className="grid grid-cols-1 items-center gap-10 min-[992px]:grid-cols-[1fr_0.75fr] min-[992px]:gap-16">
      <div className="w-full max-w-[40rem]">
        <h2 className="m-0 text-left text-[1.75rem] leading-[1.2] font-normal tracking-[-0.06rem] text-[#221e26] min-[768px]:text-[2.25rem] min-[768px]:tracking-[-0.09rem] min-[992px]:text-[2.875rem] min-[992px]:tracking-[-0.115rem]">
          {tab.title}
        </h2>

        <div className="pt-3 min-[768px]:pt-4" />

        <p className="m-0 text-base leading-[1.5] font-light text-[#524f55] min-[768px]:text-[1.125rem]">
          {tab.description}
        </p>

        {tab.cta ? (
          <>
            <div className="pt-6 min-[768px]:pt-8" />
            <Link
              href={tab.cta.href}
              className="inline-block rounded-[3rem] border-2 border-[#943eff] bg-[#421b69] px-6 py-4 text-center text-base leading-none font-normal text-white no-underline transition-colors hover:bg-[#5d209f]"
            >
              {tab.cta.label}
            </Link>
          </>
        ) : null}
      </div>

      <div className="w-full overflow-hidden rounded-2xl min-[992px]:rounded-[1rem]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={tab.image}
          alt={tab.imageAlt}
          className="block h-auto w-full object-contain"
        />
      </div>
    </div>
  );
}

export default function GlobalWarehousingSolutionsSection() {
  const [activeId, setActiveId] = useState(
    GLOBAL_WAREHOUSING_SOLUTION_TABS[0].id
  );
  const activeTab =
    GLOBAL_WAREHOUSING_SOLUTION_TABS.find((tab) => tab.id === activeId) ??
    GLOBAL_WAREHOUSING_SOLUTION_TABS[0];

  return (
    <section className="bg-white font-[family-name:var(--font-lexend)] text-[#221e26]">
      <div className="px-5 py-16 min-[480px]:px-10 min-[768px]:py-20 min-[992px]:py-24">
        <div className="mx-auto w-full max-w-7xl">
          <div className="mx-auto max-w-[52rem] text-center">
            <h2 className="m-0 text-[1.75rem] leading-[1.2] font-normal tracking-[-0.06rem] text-[#221e26] min-[768px]:text-[2.25rem] min-[768px]:tracking-[-0.09rem] min-[992px]:text-[2.875rem] min-[992px]:tracking-[-0.115rem]">
              Global gifting solutions to fast-track your pipeline
            </h2>
          </div>

          <div className="pt-10 min-[768px]:pt-12 min-[992px]:pt-16" />

          <div className="overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <div
              className="mx-auto flex w-max min-w-full gap-2 rounded-[3rem] bg-[#ece5f6] p-2 min-[768px]:w-fit min-[768px]:min-w-0"
              role="tablist"
              aria-label="Global warehousing solutions"
            >
              {GLOBAL_WAREHOUSING_SOLUTION_TABS.map((tab) => {
                const isActive = tab.id === activeId;

                return (
                  <button
                    key={tab.id}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    aria-controls={`solution-panel-${tab.id}`}
                    id={`solution-tab-${tab.id}`}
                    onClick={() => setActiveId(tab.id)}
                    className={cn(
                      "shrink-0 rounded-[3rem] px-4 py-2 text-sm leading-none font-medium whitespace-nowrap transition-colors min-[768px]:flex-1 min-[768px]:px-4 min-[768px]:py-2.5",
                      isActive
                        ? "bg-[#5d209f] text-white"
                        : "bg-[#ece5f6] text-[#524f55] hover:bg-[#5d209f] hover:text-white"
                    )}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="pt-10 min-[768px]:pt-12 min-[992px]:pt-16" />

          <div
            role="tabpanel"
            id={`solution-panel-${activeTab.id}`}
            aria-labelledby={`solution-tab-${activeTab.id}`}
          >
            <SolutionPanel tab={activeTab} />
          </div>
        </div>
      </div>
    </section>
  );
}
