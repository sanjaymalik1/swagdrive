import { MapPin } from "lucide-react";

const REGIONS = [
  {
    name: "United States",
    coverage: "Supports all US states, plus LATAM and Canada",
  },
  {
    name: "Canada",
    coverage: "Coast-to-coast coverage across every province and territory",
  },
  {
    name: "United Kingdom",
    coverage: "Full UK coverage with fast domestic delivery",
  },
  {
    name: "Ireland",
    coverage: "Supports EU and Zone 6 & 7 countries",
  },
  {
    name: "Australia",
    coverage: "Supports Australia and APAC—Singapore, New Zealand, Japan",
  },
] as const;

const PINS = [
  { label: "US", top: "44%", left: "20%" },
  { label: "CA", top: "26%", left: "23%" },
  { label: "UK", top: "27%", left: "47%" },
  { label: "IE", top: "25%", left: "44.5%" },
  { label: "AU", top: "76%", left: "83%" },
] as const;

export default function AboutNetworkSection() {
  return (
    <section className="bg-white">
      <div className="mx-auto w-full max-w-7xl px-5 py-16 min-[480px]:px-10 min-[992px]:py-24">
        <div className="mx-auto max-w-[42rem] text-center">
          <h2 className="m-0 font-[family-name:var(--font-satoshi)] text-[1.75rem] leading-[1.2] font-bold tracking-[-0.04rem] text-black min-[768px]:text-[2.25rem] min-[768px]:leading-[1.2] min-[992px]:text-[2.875rem]">
            Our global warehousing network
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-1 items-center gap-8 min-[768px]:mt-12 min-[992px]:grid-cols-2 min-[992px]:gap-10">
          <div className="relative aspect-[2754/1398] w-full overflow-hidden rounded-2xl bg-surface min-[768px]:rounded-[1.25rem]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/about/world-map.svg"
              alt=""
              aria-hidden
              className="absolute inset-0 h-full w-full object-fill"
            />

            {PINS.map((pin) => (
              <span
                key={pin.label}
                className="absolute flex -translate-x-1/2 -translate-y-full flex-col items-center"
                style={{ top: pin.top, left: pin.left }}
              >
                <MapPin
                  className="size-7 fill-yellow-secondary text-blue-primary drop-shadow-sm"
                  strokeWidth={1.75}
                  aria-hidden
                />
                <span className="mt-0.5 rounded-full bg-blue-primary px-1.5 py-0.5 font-[family-name:var(--font-overpass)] text-[0.625rem] font-bold text-yellow-secondary">
                  {pin.label}
                </span>
              </span>
            ))}
          </div>

          <div className="flex flex-col gap-3">
            {REGIONS.map((region) => (
              <div
                key={region.name}
                className="rounded-xl border border-blue-primary/10 bg-surface p-4 min-[768px]:rounded-2xl min-[768px]:p-5"
              >
                <h3 className="m-0 font-[family-name:var(--font-satoshi)] text-base leading-[1.3] font-bold text-blue-primary min-[768px]:text-lg">
                  {region.name}
                </h3>
                <p className="m-0 mt-1.5 font-[family-name:var(--font-overpass)] text-sm leading-[1.5] text-black/70">
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
