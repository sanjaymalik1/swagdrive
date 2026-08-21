import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="px-5 pt-16 pb-6 font-[family-name:var(--font-lexend)] min-[480px]:px-10 min-[480px]:pt-24">
      <div className="mx-auto flex w-full max-w-7xl flex-col">
        <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
          <h1 className="m-0 text-[2.5rem] leading-[1.1] font-normal tracking-[-0.09rem] text-[#221e26] min-[768px]:text-[3rem] min-[768px]:tracking-[-0.12rem] min-[992px]:text-[3.875rem] min-[992px]:tracking-[-0.155rem]">
            Your one-stop solution for
            <br />
            <span className="bg-[linear-gradient(92deg,#b17ce9,#e6d1ff_89.72%)] bg-clip-text text-transparent">
              Global Gifting &amp; Swag
            </span>
          </h1>

          <div className="pt-3 min-[768px]:pt-4 min-[992px]:pt-6" />

          <p className="m-0 max-w-3xl text-center text-base leading-[1.4] font-light text-[#524f55] min-[768px]:text-[1.125rem]">
            Reach anyone, anywhere to build quality pipeline and brand
            advocates. Take the hassle out of events with swag sourcing, storage
            and shipping. Drive ROI and measure the impact of every gift.
          </p>

          <div className="pt-7 min-[768px]:pt-8 min-[992px]:pt-10" />

          <Link
            href="/contact"
            className="inline-block rounded-[3rem] border-2 border-[#fffcd3] bg-[#fff34a] px-6 py-4 text-center text-base leading-none font-normal text-[#221e26] no-underline transition-colors hover:bg-[#fff784] active:bg-[#ccc23b]"
          >
            Book a demo
          </Link>
        </div>

        <div className="pt-12 min-[992px]:pt-[3.75rem]" />

        <div className="w-full">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/hero/hero-desktop.avif"
            alt=""
            className="hidden h-auto w-full object-contain min-[992px]:block"
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/hero/hero-mobile.avif"
            alt=""
            className="block h-auto w-full object-contain min-[992px]:hidden"
          />
        </div>
      </div>
    </section>
  );
}
