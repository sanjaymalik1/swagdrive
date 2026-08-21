export default function SwagStoreGlobalSolutionSection() {
  return (
    <section className="bg-white">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center gap-8 px-6 py-8 min-[768px]:flex-row min-[768px]:gap-0 min-[768px]:px-11 min-[768px]:py-[26px] min-[992px]:gap-0 min-[992px]:px-[90px] min-[992px]:py-[70px]">
        <div className="order-2 flex w-full flex-col items-center text-center min-[768px]:order-1 min-[768px]:w-[310px] min-[768px]:shrink-0 min-[768px]:items-start min-[768px]:text-left min-[992px]:mr-[57px] min-[992px]:w-[527px]">
          <p className="m-0 mb-1 font-[family-name:var(--font-overpass)] text-xs leading-4 font-bold tracking-[1px] text-[#083467] uppercase min-[768px]:mb-2 min-[992px]:mb-3 min-[992px]:text-base min-[992px]:leading-6">
            GLOBAL SOLUTION
          </p>

          <h2 className="m-0 mb-4 max-w-[32rem] font-[family-name:var(--font-satoshi)] text-lg leading-[22px] font-bold text-[#083467] min-[768px]:mb-2 min-[768px]:text-lg min-[768px]:leading-[22px] min-[992px]:mb-3 min-[992px]:text-[2rem] min-[992px]:leading-10">
            Create sleek, retail-like online stores for swag, gifts, and more
          </h2>

          <p className="m-0 max-w-[32rem] font-[family-name:var(--font-overpass)] text-sm leading-5 text-[#2C2D2E] min-[992px]:text-lg min-[992px]:leading-7 min-[992px]:tracking-[0.25px]">
            Stores can flex for all of your needs and can be used to engage your
            team, customers, prospects, fans, and friends. The best part?
            SwagDrive&apos;s diverse catalog means you can stock your store with
            snacks, swag, gift cards, and more.
          </p>
        </div>

        <div className="order-1 flex w-full justify-center min-[768px]:order-2 min-[768px]:flex-1">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/platform/swag-store/global-solution.png"
            alt="Global swag store solution"
            className="h-auto w-[95%] max-w-[327px] object-contain min-[768px]:max-w-[333px] min-[992px]:max-w-[675px]"
          />
        </div>
      </div>
    </section>
  );
}
