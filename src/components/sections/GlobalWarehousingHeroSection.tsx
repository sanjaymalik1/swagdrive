import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function GlobalWarehousingHeroSection() {
  return (
    <section
      className="font-[family-name:var(--font-lexend)] text-blue-primary"
      style={{
        backgroundImage:
          "url(/platform/crm/grid-bg.svg), linear-gradient(93deg, var(--yellow-tertiary), var(--surface))",
        backgroundPosition: "50% 0, 0 0",
        backgroundRepeat: "no-repeat, repeat",
        backgroundSize: "cover, auto",
      }}
    >
      <div className="px-5 pt-24 pb-16 min-[480px]:px-10 min-[768px]:pt-28 min-[992px]:pt-32 min-[992px]:pb-24">
        <div className="mx-auto w-full max-w-7xl">
          <div className="grid grid-cols-1 items-center gap-12 min-[992px]:grid-cols-2 min-[992px]:gap-12">
            <div className="w-full max-w-[40rem]">
              <h1 className="m-0 text-[2.25rem] leading-[1.1] font-normal tracking-[-0.06rem] text-blue-primary min-[768px]:text-[3rem] min-[768px]:tracking-[-0.12rem] min-[992px]:text-[3.875rem] min-[992px]:tracking-[-0.155rem]">
                Global warehousing, shipping, and logistics,{" "}
                <span className="text-blue-secondary">made simple</span>
              </h1>

              <div className="pt-3 min-[768px]:pt-4 min-[992px]:pt-6" />

              <p className="m-0 text-base leading-[1.5] font-light text-black min-[768px]:text-[1.125rem]">
                Effortlessly manage global shipping, inventory, and returns
                with SwagDrive&apos;s all-in-one solution. Our warehouse network
                delivers to 180+ countries with real-time tracking, address
                confirmation, and seamless returns—so you can focus on what
                matters.
              </p>

              <div className="pt-7 min-[768px]:pt-8 min-[992px]:pt-10" />

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
            </div>

            <div className="w-full overflow-hidden rounded-2xl min-[992px]:rounded-[1rem]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/capabilities/global-warehousing/hero.avif"
                alt="Global warehousing and logistics dashboard"
                className="block h-auto w-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
