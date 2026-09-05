import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function SwagInspirationHeroSection() {
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
      <div className="px-5 pt-24 pb-12 min-[480px]:px-10 min-[768px]:pt-28 min-[992px]:pt-32 min-[992px]:pb-16">
        <div className="mx-auto w-full max-w-7xl text-center">
          <p className="m-0 font-[family-name:var(--font-satoshi)] text-sm font-bold tracking-[0.12em] text-blue-primary/70 uppercase min-[768px]:text-base">
            Design Studio
          </p>

          <h1 className="m-0 mt-3 text-[2.75rem] leading-[1.05] font-normal tracking-[-0.08rem] text-blue-primary min-[768px]:mt-4 min-[768px]:text-[4.5rem] min-[768px]:tracking-[-0.16rem] min-[992px]:text-[5.5rem] min-[992px]:tracking-[-0.2rem]">
            Swag Inspiration
          </h1>

          <p className="mx-auto mt-4 max-w-[32rem] font-[family-name:var(--font-overpass)] text-base leading-[1.5] font-light text-black min-[768px]:mt-5 min-[768px]:text-[1.125rem]">
            Curated campaign looks and product ideas to spark your next drop.
          </p>

          <div className="mt-8 min-[768px]:mt-10">
            <Link
              href="#catalogue"
              className="group inline-flex items-center gap-2 rounded-[3rem] bg-blue-primary px-5 py-3.5 text-center text-base leading-none font-normal text-yellow-secondary no-underline"
            >
              Browse the lookbook
              <ArrowUpRight
                className="size-5 shrink-0 stroke-[2.5] transition-transform duration-200 ease-out group-hover:scale-130"
                aria-hidden
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
