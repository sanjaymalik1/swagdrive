"use client";

import { useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { TEAM_TABS } from "./teams-data";

export default function TeamsSection() {
  const [activeId, setActiveId] = useState("human");
  const active = TEAM_TABS.find((tab) => tab.id === activeId) ?? TEAM_TABS[0];

  return (
    <section className="bg-white py-7 min-[768px]:py-8 min-[992px]:py-11">
      <div className="mx-auto w-full max-w-[1440px] px-0 min-[768px]:px-11 min-[1025px]:px-[75px] min-[1281px]:px-44">
        <h2 className="mb-[26px] px-[50px] text-center font-[family-name:var(--font-satoshi)] text-[18px] leading-8 font-bold text-[#2D2D2D] min-[768px]:mb-8 min-[768px]:px-0 min-[768px]:text-2xl min-[768px]:leading-[30px] min-[992px]:mb-10 min-[992px]:text-[32px] min-[992px]:leading-10">
          One solution for all your teams
        </h2>

        <div className="min-[768px]:overflow-hidden min-[768px]:rounded-lg">
          <div className="flex flex-col min-[992px]:flex-row">
            <div
              role="tablist"
              aria-label="Teams"
              className="flex overflow-x-auto px-3 min-[768px]:px-0 min-[992px]:w-[282px] min-[992px]:shrink-0 min-[992px]:flex-col"
            >
              {TEAM_TABS.map((tab, index) => {
                const selected = tab.id === activeId;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    role="tab"
                    aria-selected={selected}
                    onClick={() => setActiveId(tab.id)}
                    className={cn(
                      "shrink-0 border-b border-[#cdced0] px-4 py-4 text-left font-[family-name:var(--font-satoshi)] text-sm leading-[18px] font-bold whitespace-nowrap min-[768px]:text-base min-[768px]:leading-[23px] min-[992px]:border-b min-[992px]:border-l-[10px] min-[992px]:py-7 min-[992px]:pr-2.5 min-[992px]:pl-[35px] min-[992px]:text-xl min-[992px]:whitespace-normal",
                      !selected &&
                        "bg-[#EFF0F2] text-[#4F5052] hover:bg-[#F8F8F8] min-[992px]:border-l-[#EFF0F2]",
                      selected && "text-[#2D2D2D]",
                      index === TEAM_TABS.length - 1 && "min-[992px]:border-b-0"
                    )}
                    style={
                      selected
                        ? {
                            backgroundColor: tab.tabBg,
                            borderLeftColor: tab.accent,
                          }
                        : undefined
                    }
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>

            {active ? (
              <div
                role="tabpanel"
                className="min-w-0 flex-1"
                style={{ backgroundColor: active.panelBg }}
              >
                <div className="flex h-full flex-col gap-2 px-4 pt-[30px] min-[768px]:gap-2 min-[768px]:px-[19px] min-[768px]:pt-[18px] min-[992px]:flex-row min-[992px]:gap-[42px] min-[992px]:px-9 min-[992px]:pt-[34px]">
                  <div className="flex flex-col items-center justify-between pb-0 text-center min-[768px]:items-start min-[768px]:pb-4 min-[768px]:text-left min-[992px]:w-[37%] min-[992px]:pb-9">
                    <div className="flex w-full flex-col items-center min-[768px]:items-start">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={active.icon}
                        alt={active.iconAlt}
                        className="mb-4 h-10 w-auto object-contain min-[768px]:mb-4 min-[768px]:h-[43px] min-[992px]:mb-[30px] min-[992px]:h-20"
                      />
                      <h3 className="mb-4 font-[family-name:var(--font-satoshi)] text-lg leading-6 font-bold text-white min-[768px]:mb-3 min-[768px]:text-lg min-[768px]:leading-[22px] min-[992px]:mb-[26px] min-[992px]:text-[26px] min-[992px]:leading-[33px]">
                        {active.heading}
                      </h3>
                      <p className="mb-4 font-[family-name:var(--font-overpass)] text-sm leading-5 tracking-[0.16px] text-white min-[768px]:mb-0 min-[992px]:text-lg min-[992px]:leading-[26px] min-[992px]:tracking-[0.5px]">
                        {active.description}
                      </p>
                    </div>
                    <Link
                      href={active.href}
                      className="mb-4 font-[family-name:var(--font-overpass)] text-xs leading-3 font-semibold tracking-[1px] text-white uppercase underline underline-offset-4 min-[768px]:mb-0 min-[768px]:text-xs min-[992px]:text-sm min-[992px]:leading-5"
                    >
                      Learn more
                    </Link>
                  </div>

                  <div
                    className="min-h-[264px] rounded-xl px-4 py-4 min-[768px]:rounded-t-xl min-[768px]:rounded-b-none min-[768px]:px-[26px] min-[768px]:pt-[21px] min-[768px]:pb-0 min-[992px]:w-[63%] min-[992px]:px-[45px] min-[992px]:pt-[50px] min-[992px]:pb-10"
                    style={{ backgroundColor: active.listBg }}
                  >
                    <ul className="flex flex-col gap-4 pb-4 min-[768px]:gap-4 min-[768px]:pb-8 min-[992px]:gap-8 min-[992px]:pb-0">
                      {active.bullets.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-[5px] font-[family-name:var(--font-overpass)] text-sm leading-5 tracking-[0.16px] text-[#2D2D2D] min-[992px]:text-lg min-[992px]:leading-[26px] min-[992px]:tracking-[0.5px]"
                        >
                          <span
                            className="mt-[9px] size-[4.5px] shrink-0 rounded-full"
                            style={{ backgroundColor: "#2D2D2D" }}
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
