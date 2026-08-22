import Link from "next/link";

export default function PersonalizedGiftingHeroSection() {
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
      <div className="px-5 pt-24 pb-10 min-[480px]:px-10 min-[768px]:pt-28 min-[768px]:pb-12 min-[992px]:pt-32 min-[992px]:pb-16">
        <div className="mx-auto w-full max-w-7xl">
          <div className="grid grid-cols-1 items-center gap-12 min-[992px]:grid-cols-2 min-[992px]:gap-12">
            <div className="w-full max-w-[40rem]">
              <h1 className="m-0 text-[2.25rem] leading-[1.1] font-normal tracking-[-0.06rem] text-[#221e26] min-[768px]:text-[3rem] min-[768px]:tracking-[-0.12rem] min-[992px]:text-[3.875rem] min-[992px]:tracking-[-0.155rem]">
                Accelerate Your Pipeline with Personalized Corporate Gifting and
                Swag
              </h1>

              <div className="pt-3 min-[768px]:pt-4 min-[992px]:pt-6" />

              <p className="m-0 text-base leading-[1.5] font-light text-[#524f55] min-[768px]:text-[1.125rem]">
                Say goodbye to generic interactions and slow pipelines. With
                SwagDrive&apos;s all-in-one corporate gifting and swag platform,
                you can streamline global and local gifting campaigns. Ensure
                every interaction is hyper-personalized and impactful, driving
                real business results.
              </p>

              <div className="pt-7 min-[768px]:pt-8 min-[992px]:pt-10" />

              <Link
                href="/contact"
                className="inline-block rounded-[3rem] border-2 border-[#943eff] bg-[#421b69] px-6 py-4 text-center text-base leading-none font-normal text-white no-underline transition-colors hover:bg-[#5d209f]"
              >
                Get started with SwagDrive
              </Link>
            </div>

            <div className="w-full overflow-hidden rounded-2xl min-[992px]:rounded-[1rem]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/capabilities/personalized-gifting/hero.avif"
                alt="Personalized corporate gifting"
                className="block h-auto w-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
