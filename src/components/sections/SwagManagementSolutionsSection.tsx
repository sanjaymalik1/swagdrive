"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import {
  SWAG_MANAGEMENT_SOLUTION_TABS,
  type SwagManagementSolutionTab,
} from "./swag-management-solutions-data";

function SolutionPanel({ tab }: { tab: SwagManagementSolutionTab }) {
  return (
    <div className="grid grid-cols-1 items-center gap-10 min-[992px]:grid-cols-[1fr_0.75fr] min-[992px]:gap-16">
      <div className="w-full max-w-[40rem]">
        <h3 className="m-0 text-left font-[family-name:var(--font-satoshi)] text-[1.75rem] leading-[1.2] font-bold tracking-[-0.04rem] text-blue-primary min-[768px]:text-[2.25rem] min-[768px]:leading-[1.2] min-[992px]:text-[2.5rem]">
          {tab.title}
        </h3>

        <div className="pt-3 min-[768px]:pt-4" />

        <p className="m-0 font-[family-name:var(--font-overpass)] text-base leading-[1.5] font-light text-black min-[768px]:text-[1.125rem]">
          {tab.description}
        </p>

        {tab.cta ? (
          <>
            <div className="pt-6 min-[768px]:pt-8" />
            <Link
              href={tab.cta.href}
              className="group inline-flex items-center gap-2 rounded-[3rem] bg-blue-primary px-5 py-3.5 text-center font-[family-name:var(--font-lexend)] text-base leading-none font-normal text-yellow-secondary no-underline"
            >
              {tab.cta.label}
              <ArrowUpRight
                className="size-5 shrink-0 stroke-[2.5] transition-transform duration-200 ease-out group-hover:scale-130"
                aria-hidden
              />
            </Link>
          </>
        ) : null}
      </div>

      <div className="relative w-full">
        <div className="overflow-hidden rounded-2xl min-[992px]:rounded-[1rem]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={tab.image}
            alt={tab.imageAlt}
            className="block h-auto w-full object-contain"
          />
        </div>
        {tab.overlayImage ? (
          <div className="absolute top-4 right-0 w-[42%] overflow-hidden rounded-xl shadow-lg min-[768px]:top-6 min-[768px]:right-[-4%] min-[768px]:w-[46%] min-[768px]:rounded-2xl">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={tab.overlayImage}
              alt=""
              className="block h-auto w-full object-cover"
            />
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default function SwagManagementSolutionsSection() {
  const [activeId, setActiveId] = useState(
    SWAG_MANAGEMENT_SOLUTION_TABS[0].id
  );
  const activeTab =
    SWAG_MANAGEMENT_SOLUTION_TABS.find((tab) => tab.id === activeId) ??
    SWAG_MANAGEMENT_SOLUTION_TABS[0];

  return (
    <section className="bg-[color-mix(in_srgb,var(--yellow-tertiary)_28%,white)]">
      <div className="px-5 py-16 min-[480px]:px-10 min-[768px]:py-20 min-[992px]:py-24">
        <div className="mx-auto w-full max-w-7xl">
          <div className="mx-auto max-w-[52rem] text-center">
            <h2 className="m-0 font-[family-name:var(--font-satoshi)] text-[1.75rem] leading-[1.2] font-bold tracking-[-0.04rem] text-black min-[768px]:text-[2.25rem] min-[768px]:leading-[1.2] min-[992px]:text-[2.875rem]">
              Explore global personalized gifting solutions that make real
              impact
            </h2>
          </div>

          <div className="pt-10 min-[768px]:pt-12 min-[992px]:pt-16" />

          <div className="overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <div
              className="mx-auto flex w-max min-w-full gap-2 rounded-[3rem] bg-white p-2 min-[768px]:w-fit min-[768px]:min-w-0"
              role="tablist"
              aria-label="Swag management solutions"
            >
              {SWAG_MANAGEMENT_SOLUTION_TABS.map((tab) => {
                const isActive = tab.id === activeId;

                return (
                  <button
                    key={tab.id}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    aria-controls={`sm-solution-panel-${tab.id}`}
                    id={`sm-solution-tab-${tab.id}`}
                    onClick={() => setActiveId(tab.id)}
                    className={cn(
                      "cursor-pointer shrink-0 rounded-[3rem] px-4 py-2 font-[family-name:var(--font-overpass)] text-sm leading-none font-medium whitespace-nowrap transition-colors min-[768px]:px-4 min-[768px]:py-2.5",
                      isActive
                        ? "bg-blue-primary text-yellow-secondary"
                        : "bg-transparent text-black hover:bg-blue-primary/10"
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
            id={`sm-solution-panel-${activeTab.id}`}
            aria-labelledby={`sm-solution-tab-${activeTab.id}`}
          >
            <SolutionPanel tab={activeTab} />
          </div>
        </div>
      </div>
    </section>
  );
}
