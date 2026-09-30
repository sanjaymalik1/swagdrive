import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function SustainabilityHeroSection() {
  return (
    <section
      className="font-[family-name:var(--font-lexend)] text-blue-primary"
      style={{
        backgroundImage:
          "url(/platform/crm/grid-bg.svg), linear-gradient(180deg, var(--yellow-tertiary), var(--surface))",
        backgroundPosition: "50% 0, 0 0",
        backgroundRepeat: "no-repeat, repeat",
        backgroundSize: "cover, auto",
      }}
    >
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-10 px-5 pt-24 pb-16 min-[480px]:px-10 min-[768px]:pt-32 min-[992px]:grid-cols-2 min-[992px]:gap-14 min-[992px]:pb-24">
        <div>
          <h1 className="m-0 text-[2.5rem] leading-[1.05] font-normal tracking-[-0.06rem] text-blue-primary min-[768px]:text-[3.5rem] min-[768px]:tracking-[-0.12rem] min-[992px]:text-[4rem] min-[992px]:tracking-[-0.14rem]">
            Our commitment to the planet
          </h1>

          <p className="mt-5 max-w-[34rem] font-[family-name:var(--font-overpass)] text-base leading-[1.5] font-light text-black min-[768px]:mt-6 min-[768px]:text-[1.125rem]">
            We want to see a world in which every business is loved by their
            customers, employees, and the planet. That&apos;s why we work
            tirelessly with our marketplace, logistics, and charity partners
            to create a more sustainable future for swag and gifting.
          </p>

          <div className="mt-8">
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

        <div className="relative mx-auto aspect-square w-full max-w-[28rem]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/landing-carousel/swagupcarousal1.png"
            alt="Sustainably sourced swag"
            className="absolute top-0 left-0 z-[1] size-[58%] rounded-full border-4 border-surface object-cover"
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/landing-carousel/swagupcarousal8.png"
            alt="Natural-material gifting"
            className="absolute top-0 right-0 z-[1] size-[58%] rounded-full border-4 border-surface object-cover"
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/landing-carousel/swagupcarousal3.png"
            alt="Reusable, everyday swag"
            className="absolute bottom-0 left-0 z-[2] size-[58%] rounded-full border-4 border-surface object-cover"
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/landing-carousel/swagupcarousal4.png"
            alt="Eco-friendly gifting"
            className="absolute right-0 bottom-0 z-[2] size-[58%] rounded-full border-4 border-surface object-cover"
          />
        </div>
      </div>
    </section>
  );
}
