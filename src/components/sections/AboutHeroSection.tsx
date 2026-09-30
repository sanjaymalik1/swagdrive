import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function AboutHeroSection() {
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
        <div className="mx-auto w-full max-w-5xl text-center">
          <h1 className="m-0 text-[2.5rem] leading-[1.1] font-normal tracking-[-0.06rem] text-blue-primary min-[768px]:text-[3.5rem] min-[768px]:tracking-[-0.1rem] min-[992px]:text-[4.25rem] min-[992px]:tracking-[-0.12rem]">
            SwagDrive: Powering global connections with impactful gifting
            &amp; swag
          </h1>

          <p className="mx-auto mt-4 max-w-[36rem] font-[family-name:var(--font-overpass)] text-base leading-[1.5] font-light text-black min-[768px]:mt-5 min-[768px]:text-[1.125rem]">
            Your all-in-one solution for impactful corporate gifting and
            swag. Source, store, ship, track, and measure effortlessly.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 min-[768px]:mt-10">
            <Link
              href="/book-a-demo"
              className="group inline-flex items-center gap-2 rounded-[3rem] bg-blue-primary px-5 py-3.5 text-center text-base leading-none font-normal text-yellow-secondary no-underline"
            >
              Book a demo
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
