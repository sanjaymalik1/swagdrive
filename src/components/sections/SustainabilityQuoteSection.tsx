const QUOTE =
  "“There's the two ends of sustainability: where we're sourcing from and where we're shipping. Having a gifting partner that has warehouses everywhere we're shipping to and can source locally cuts down our carbon footprint. That was a big selling point for us.”";

export default function SustainabilityQuoteSection() {
  return (
    <section className="bg-[color:var(--yellow-tertiary)]">
      <div className="mx-auto w-full max-w-7xl px-5 py-16 min-[480px]:px-10 min-[992px]:py-24">
        <div className="mx-auto max-w-[42rem] text-center">
          <h2 className="m-0 font-[family-name:var(--font-satoshi)] text-[1.75rem] leading-[1.2] font-bold tracking-[-0.04rem] text-black min-[768px]:text-[2.25rem] min-[768px]:leading-[1.2] min-[992px]:text-[2.875rem]">
            Serving our customers
          </h2>
        </div>

        <div className="mt-10 rounded-[1.5rem] bg-blue-primary p-8 min-[768px]:mt-12 min-[768px]:rounded-[2rem] min-[768px]:p-12 min-[992px]:p-16">
          <p className="m-0 font-[family-name:var(--font-satoshi)] text-xl leading-[1.4] font-light text-white min-[768px]:text-2xl min-[992px]:text-[1.75rem]">
            {QUOTE}
          </p>
          <div className="mt-8 min-[768px]:mt-10">
            <p className="m-0 font-[family-name:var(--font-overpass)] text-base font-medium text-yellow-secondary">
              Ariel Madway
            </p>
            <p className="m-0 mt-1 font-[family-name:var(--font-overpass)] text-sm text-white/70">
              Senior Manager, Community Engagement
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
