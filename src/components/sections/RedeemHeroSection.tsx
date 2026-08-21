import Link from "next/link";

export default function RedeemHeroSection() {
  return (
    <section
      className="font-[family-name:var(--font-lexend)] text-[#221e26]"
      style={{
        backgroundImage:
          "url(/platform/crm/grid-bg.svg), linear-gradient(93deg, #eee0ff, #f4f1f9)",
        backgroundPosition: "50% 0, 0 0",
        backgroundRepeat: "no-repeat, repeat",
        backgroundSize: "cover, auto",
      }}
    >
      <div className="px-5 pt-16 pb-10 min-[480px]:px-10 min-[768px]:pt-16 min-[768px]:pb-12 min-[992px]:pt-16 min-[992px]:pb-16 min-[992px]:pl-12 min-[992px]:pr-0">
        <div className="mx-auto grid w-full max-w-[90rem] grid-cols-1 items-center gap-10 min-[992px]:grid-cols-2 min-[992px]:items-start min-[992px]:gap-12">
          <div className="w-full max-w-[40rem] min-[992px]:pt-32">
            <h1 className="m-0 text-[2.25rem] leading-[1.1] font-normal tracking-[-0.06rem] text-[#221e26] min-[768px]:text-[3rem] min-[768px]:tracking-[-0.12rem] min-[992px]:text-[3.875rem] min-[992px]:tracking-[-0.155rem]">
              Redeem Pages For
              <br />
              <span className="whitespace-nowrap">Easy Swag Distribution</span>
            </h1>

            <div className="pt-3 min-[768px]:pt-4 min-[992px]:pt-6" />

            <p className="m-0 text-base leading-[1.5] font-light text-[#524f55] min-[768px]:text-[1.125rem]">
              Create branded redeem pages where recipients can enter their
              details, choose items, and receive swag—all through a simple
              shared link.
            </p>

            <div className="pt-7 min-[768px]:pt-8 min-[992px]:pt-10" />

            <Link
              href="/contact"
              className="inline-block rounded-[3rem] border-2 border-[#fffcd3] bg-[#fff34a] px-6 py-4 text-center text-base leading-none font-normal text-[#221e26] no-underline transition-colors hover:bg-[#fff784] active:bg-[#ccc23b]"
            >
              Book a demo
            </Link>
          </div>

          <div className="w-full overflow-hidden min-[992px]:-ml-6 min-[1280px]:-ml-8">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/platform/redeem/hero-desktop.png"
              alt="Branded redeem page preview"
              className="hidden h-auto w-[118%] max-w-none object-contain object-left min-[768px]:block"
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/platform/redeem/hero-mobile.png"
              alt="Branded redeem page preview"
              className="mx-auto block h-auto w-full max-w-[28rem] object-contain min-[768px]:hidden"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
