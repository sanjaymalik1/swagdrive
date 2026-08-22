import Link from "next/link";

export default function CreativeServicesHeroSection() {
  return (
    <section
      className="font-[family-name:var(--font-lexend)] text-[#ece5f6]"
      style={{
        backgroundImage:
          "url(/design-studio/creative-services/grid-bg-dark.svg), radial-gradient(circle at 100% 100%, #943eff, #943eff00 80%), linear-gradient(#3e2161, #2e1053)",
        backgroundPosition: "50% 0, 0 0, 0 0",
        backgroundRepeat: "no-repeat, repeat, repeat",
        backgroundSize: "cover, auto, auto",
      }}
    >
      <div className="px-5 pt-24 pb-10 min-[480px]:px-10 min-[768px]:pt-28 min-[768px]:pb-12 min-[992px]:pt-32 min-[992px]:pb-16">
        <div className="mx-auto w-full max-w-7xl">
          <div className="grid grid-cols-1 items-center gap-12 min-[992px]:grid-cols-2 min-[992px]:gap-12">
            <div className="w-full max-w-[40rem]">
              <h1 className="m-0 text-[2.25rem] leading-[1.1] font-normal tracking-[-0.06rem] text-white min-[768px]:text-[3rem] min-[768px]:tracking-[-0.12rem] min-[992px]:text-[3.875rem] min-[992px]:tracking-[-0.155rem]">
                More than a gifting platform: Your reliable gifting partner
              </h1>

              <div className="pt-3 min-[768px]:pt-4 min-[992px]:pt-6" />

              <p className="m-0 text-base leading-[1.5] font-light text-[#ece5f6] min-[768px]:text-[1.125rem]">
                Our Creative Services team of Creative Campaign Managers and
                gifting enthusiasts provides end-to-end support for your gifting
                and swag campaigns—from brainstorming ideas to logistics and
                delivery. Whether you&apos;re enhancing ABM outcomes or
                streamlining swag distribution, we handle the details so you can
                focus on what matters most.
              </p>

              <div className="pt-7 min-[768px]:pt-8 min-[992px]:pt-10" />

              <Link
                href="/contact"
                className="inline-block rounded-[3rem] border-2 border-[#fffcd3] bg-[#fff34a] px-6 py-4 text-center text-base leading-none font-normal text-[#221e26] no-underline transition-colors hover:bg-[#fff784] active:bg-[#ccc23b]"
              >
                Book a demo
              </Link>
            </div>

            <div className="w-full overflow-hidden rounded-2xl min-[992px]:rounded-[1rem]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/design-studio/creative-services/hero.avif"
                alt="Creative services for corporate gifting"
                className="block h-auto w-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
