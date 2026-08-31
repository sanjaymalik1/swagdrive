import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="bg-white px-5 pt-20 pb-6 font-[family-name:var(--font-lexend)] min-[480px]:px-10 min-[480px]:pt-34">
      <div className="mx-auto flex w-full max-w-7xl flex-col">
        <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
          <h1 className="m-0 text-[2.5rem] leading-[1.1] font-normal tracking-[-0.09rem] text-blue-primary min-[768px]:text-[3rem] min-[768px]:tracking-[-0.12rem] min-[992px]:text-[3.875rem] min-[992px]:tracking-[-0.155rem]">
            Your one-stop solution for
            <br />
            <span className="text-blue-primary">
              Global Gifting &amp; Swag
            </span>
          </h1>

          <div className="pt-3 min-[768px]:pt-4 min-[992px]:pt-6" />

          <p className="m-0 max-w-3xl text-center text-base leading-[1.4] font-light text-black min-[768px]:text-[1.125rem]">
            Reach anyone, anywhere to build quality pipeline and brand
            advocates. Take the hassle out of events with swag sourcing, storage
            and shipping. Drive ROI and measure the impact of every gift.
          </p>

          <div className="pt-7 min-[768px]:pt-8 min-[992px]:pt-10" />

          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 rounded-[3rem] bg-yellow-secondary px-5 py-3.5 text-center text-base leading-none font-normal text-blue-primary no-underline transition-colors hover:bg-yellow-primary active:brightness-95"
          >
            Book a demo
            <ArrowUpRight
              className="size-5 shrink-0 stroke-[2.5] transition-transform duration-200 ease-out group-hover:scale-130"
              aria-hidden
            />
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
