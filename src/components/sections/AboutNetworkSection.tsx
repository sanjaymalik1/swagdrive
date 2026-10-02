"use client";

import { useState } from "react";

const REGIONS = [
  {
    id: "US",
    name: "United States",
    coverage: "Supports all US States, LATAM and Canada",
  },
  {
    id: "CA",
    name: "Canada",
    coverage:
      "Supports Canada - NL, NS, PE, NB, QC, QN, MB, SK, AB, BC, NT/NU and YT",
  },
  {
    id: "UK",
    name: "United Kingdom",
    coverage: "Supports United Kingdom",
  },
  {
    id: "IE",
    name: "Ireland",
    coverage: "Supports EU and Zone 6 & 7 countries",
  },
  {
    id: "AU",
    name: "Australia",
    coverage:
      "Supports Australia and APAC countries - Singapore, New Zealand, Japan, etc",
  },
] as const;

type RegionId = (typeof REGIONS)[number]["id"];

// Pin tips in the 875x496 map viewBox.
const PINS: Record<RegionId, { x: number; y: number }> = {
  US: { x: 156, y: 176 },
  CA: { x: 144, y: 127 },
  UK: { x: 410, y: 98 },
  IE: { x: 388, y: 98 },
  AU: { x: 819, y: 382 },
};

const MAP_W = 875;
const MAP_H = 496;
const PIN_SIZE = 24;

const PIN_PATH =
  "M12 12C12.55 12 13.021 11.804 13.413 11.413C13.804 11.021 14 10.55 14 10C14 9.45 13.804 8.979 13.413 8.588C13.021 8.196 12.55 8 12 8C11.45 8 10.979 8.196 10.588 8.588C10.196 8.979 10 9.45 10 10C10 10.55 10.196 11.021 10.588 11.413C10.979 11.804 11.45 12 12 12ZM12 22C9.317 19.717 7.312 17.596 5.988 15.638C4.663 13.679 4 11.867 4 10.2C4 7.7 4.804 5.708 6.413 4.225C8.021 2.742 9.883 2 12 2C14.117 2 15.979 2.742 17.588 4.225C19.196 5.708 20 7.7 20 10.2C20 11.867 19.337 13.679 18.012 15.638C16.688 17.596 14.683 19.717 12 22Z";

export default function AboutNetworkSection() {
  const [active, setActive] = useState<RegionId | null>(null);

  return (
    <section className="bg-white">
      <div className="mx-auto w-full max-w-[1580px] px-5 py-16 min-[480px]:px-10 min-[992px]:py-24">
        <h2 className="m-0 text-center font-[family-name:var(--font-satoshi)] text-[1.75rem] leading-[1.2] font-bold tracking-[-0.04rem] text-black min-[768px]:text-[2.25rem] min-[992px]:text-[2.875rem]">
          Our global warehousing network
        </h2>

        <div className="mt-10 grid grid-cols-1 items-center gap-10 min-[768px]:mt-16 min-[992px]:mt-20 min-[992px]:grid-cols-[minmax(0,1fr)_460px] min-[992px]:gap-[60px]">
          <div
            className="relative w-full"
            style={{ aspectRatio: `${MAP_W} / ${MAP_H}` }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/about/network-world.svg"
              alt=""
              aria-hidden
              className="absolute inset-0 h-full w-full"
            />

            {REGIONS.map((region) => {
              const pin = PINS[region.id];
              const isActive = active === region.id;
              return (
                <svg
                  key={region.id}
                  viewBox={`0 0 ${PIN_SIZE} ${PIN_SIZE}`}
                  aria-hidden
                  onMouseEnter={() => setActive(region.id)}
                  onMouseLeave={() => setActive(null)}
                  className="absolute cursor-pointer overflow-visible transition-transform duration-200"
                  style={{
                    width: `${(PIN_SIZE / MAP_W) * 100}%`,
                    left: `${((pin.x - PIN_SIZE / 2) / MAP_W) * 100}%`,
                    top: `${((pin.y - 22) / MAP_H) * 100}%`,
                    zIndex: isActive ? 2 : 1,
                    transformOrigin: "50% 100%",
                    transform: isActive ? "scale(1.5)" : "scale(1)",
                  }}
                >
                  <path
                    d={PIN_PATH}
                    fill="#F5C518"
                    stroke={isActive ? "#ffffff" : "none"}
                    strokeWidth={1}
                    paintOrder="stroke"
                    fillRule="evenodd"
                  />
                </svg>
              );
            })}
          </div>

          <div className="flex flex-col gap-[30px]">
            {REGIONS.map((region) => (
              <div
                key={region.id}
                onMouseEnter={() => setActive(region.id)}
                onMouseLeave={() => setActive(null)}
                className={`rounded-lg border px-6 py-5 transition-colors ${
                  active === region.id
                    ? "border-blue-primary/20 bg-yellow-tertiary/40"
                    : "border-blue-primary/10 bg-surface"
                }`}
              >
                <h3 className="m-0 font-[family-name:var(--font-satoshi)] text-xl leading-[1.3] font-bold text-blue-primary">
                  {region.name}
                </h3>
                <p className="m-0 mt-3 font-[family-name:var(--font-overpass)] text-base leading-[1.5] text-black/70">
                  {region.coverage}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
