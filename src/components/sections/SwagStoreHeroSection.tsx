import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function SwagStoreHeroSection() {
  return (
    <section
      className="font-[family-name:var(--font-lexend)]"
      style={{
        backgroundImage:
          "linear-gradient(93deg, var(--yellow-tertiary), var(--surface))",
      }}
    >
      <div className="mx-auto w-full max-w-[1440px] px-5 pt-24 pb-16 min-[480px]:px-10 min-[768px]:pt-28 min-[992px]:pt-32 min-[992px]:pb-24">
        <div className="flex flex-col items-center">
          <p className="m-0 mb-1 text-center font-[family-name:var(--font-overpass)] text-xs leading-4 font-bold tracking-[1px] text-black uppercase min-[768px]:mb-2 min-[768px]:text-base min-[768px]:leading-6">
            global corporate gift shops
          </p>

          <h1 className="m-0 mb-1 max-w-[52rem] text-center font-[family-name:var(--font-satoshi)] text-[2rem] leading-[2.125rem] font-bold text-blue-primary min-[768px]:mb-3 min-[768px]:text-[2rem] min-[768px]:leading-10 min-[992px]:mb-[22px] min-[992px]:text-[4rem] min-[992px]:leading-[4.5rem]">
            Your Company&apos;s Storefront
          </h1>

          <p className="m-0 mb-3 max-w-[400px] text-center font-[family-name:var(--font-overpass)] text-sm leading-5 tracking-[0.16px] text-black min-[768px]:mb-3 min-[768px]:text-base min-[768px]:leading-6 min-[768px]:tracking-normal min-[992px]:mb-5 min-[992px]:text-xl min-[992px]:leading-5 min-[992px]:tracking-[0.5px]">
            Invite anyone, anywhere, to choose items from your online branded
            shop.
          </p>

          <div className="mb-5 flex flex-wrap items-center justify-center gap-4 min-[768px]:mb-5 min-[992px]:mb-10">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-[3rem] bg-blue-primary px-5 py-3.5 text-center text-base leading-none font-normal text-yellow-secondary no-underline"
            >
              Book a demo
              <ArrowUpRight
                className="size-5 shrink-0 stroke-[2.5] transition-transform duration-200 ease-out group-hover:scale-130"
                aria-hidden
              />
            </Link>

            <Link
              href="/login"
              className="inline-flex items-center justify-center rounded-[3rem] border-2 border-blue-primary/40 bg-transparent px-5 py-3.5 text-base leading-none font-normal text-blue-primary no-underline transition-colors hover:border-blue-primary hover:bg-blue-primary/10"
            >
              Get started
            </Link>
          </div>

          <div className="w-full text-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/platform/swag-store/hero.png"
              alt="Company storefront"
              className="mx-auto block h-auto w-[90%] max-w-full object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
