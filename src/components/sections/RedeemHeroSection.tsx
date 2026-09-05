import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function RedeemHeroSection() {
  return (
    <section
      className="font-[family-name:var(--font-lexend)] text-yellow-secondary"
      style={{
        backgroundImage:
          "url(/platform/redeem/grid-bg.svg), linear-gradient(to right, var(--blue-primary), color-mix(in srgb, var(--blue-secondary) 72%, white))",
        backgroundPosition: "50% 0, 0 0",
        backgroundRepeat: "no-repeat, repeat",
        backgroundSize: "cover, auto",
      }}
    >
      <div className="px-5 pt-24 pb-16 min-[480px]:px-10 min-[768px]:pt-28 min-[992px]:pt-32 min-[992px]:pb-24 min-[992px]:pl-12 min-[992px]:pr-0">
        <div className="mx-auto grid w-full max-w-[90rem] grid-cols-1 items-center gap-10 min-[992px]:grid-cols-2 min-[992px]:items-start min-[992px]:gap-12">
          <div className="w-full max-w-[40rem] min-[992px]:pt-16">
            <h1 className="m-0 text-[2.25rem] leading-[1.1] font-normal tracking-[-0.06rem] text-yellow-secondary min-[768px]:text-[3rem] min-[768px]:tracking-[-0.12rem] min-[992px]:text-[3.875rem] min-[992px]:tracking-[-0.155rem]">
              Redeem Pages For
              <br />
              <span className="whitespace-nowrap">Easy Swag Distribution</span>
            </h1>

            <div className="pt-3 min-[768px]:pt-4 min-[992px]:pt-6" />

            <p className="m-0 text-base leading-[1.5] font-light text-white min-[768px]:text-[1.125rem]">
              Create branded redeem pages where recipients can enter their
              details, choose items, and receive swag—all through a simple
              shared link.
            </p>

            <div className="pt-7 min-[768px]:pt-8 min-[992px]:pt-10" />

            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-[3rem] bg-yellow-secondary px-5 py-3.5 text-center text-base leading-none font-normal text-blue-primary no-underline"
            >
              Book a demo
              <ArrowUpRight
                className="size-5 shrink-0 stroke-[2.5] transition-transform duration-200 ease-out group-hover:scale-130"
                aria-hidden
              />
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
