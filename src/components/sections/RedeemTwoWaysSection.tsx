const WAYS = [
  {
    title: (
      <>
        Collection Page:
        <br />
        Collect Information Only
      </>
    ),
    description:
      "Gather sizing, preferences, and addresses before placing your order—so you only produce what you need.",
    bestFor:
      "Sizing collection, product selection, pre-event or pre-onboarding planning",
    image: "/platform/redeem/collection-page.png",
    imageAlt: "Collection redeem page planning preview",
    panelClass: "bg-[#FFEFF7]",
  },
  {
    title: (
      <>
        Auto-Ship Page:
        <br />
        Send Instantly
      </>
    ),
    description:
      "Recipients submit their info and items ship directly from your inventory—no manual fulfillment required.",
    bestFor:
      "onboarding, ongoing programs, time-sensitive sends, automated workflows",
    image: "/platform/redeem/auto-ship-page.png",
    imageAlt: "Auto-ship redeem page confirmation preview",
    panelClass: "bg-[#F7FEE7]",
  },
] as const;

export default function RedeemTwoWaysSection() {
  return (
    <section className="bg-white">
      <div className="mx-auto w-full max-w-[1440px] px-5 py-12 min-[768px]:px-11 min-[768px]:py-16 min-[1025px]:px-16 min-[1025px]:py-20">
        <h2 className="m-0 mb-8 text-center font-[family-name:var(--font-satoshi)] text-2xl leading-[1.15] font-bold text-[#2C2D2E] min-[768px]:mb-12 min-[768px]:text-[2rem] min-[768px]:leading-[2.625rem] min-[1025px]:mb-12 min-[1025px]:text-[3rem] min-[1025px]:leading-[1.2]">
          Two Ways to Use Redeem Pages
        </h2>

        <div className="grid grid-cols-1 gap-10 min-[1025px]:grid-cols-2 min-[1025px]:gap-12">
          {WAYS.map((way) => (
            <div
              key={way.image}
              className="flex flex-col gap-4 min-[768px]:flex-row min-[768px]:items-stretch min-[768px]:gap-3"
            >
              <div
                className={`flex flex-col justify-center rounded-2xl px-5 py-6 min-[768px]:w-[48%] min-[768px]:shrink-0 min-[768px]:rounded-[24px] min-[768px]:px-7 min-[768px]:py-8 ${way.panelClass}`}
              >
                <h3 className="m-0 mb-4 font-[family-name:var(--font-satoshi)] text-xl leading-[1.2] font-medium text-[#1B1B1C] min-[768px]:text-2xl">
                  {way.title}
                </h3>
                <p className="m-0 mb-4 font-[family-name:var(--font-overpass)] text-sm leading-[1.3] text-[#1B1B1C] min-[768px]:text-base">
                  {way.description}
                </p>
                <p className="m-0 font-[family-name:var(--font-overpass)] text-sm leading-[1.3] text-[#1B1B1C] min-[768px]:text-base">
                  <span className="font-semibold">Best for:</span> {way.bestFor}
                </p>
              </div>

              <div className="min-w-0 flex-1">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={way.image}
                  alt={way.imageAlt}
                  className="block h-full w-full rounded-2xl object-cover object-left min-[768px]:rounded-[24px]"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
