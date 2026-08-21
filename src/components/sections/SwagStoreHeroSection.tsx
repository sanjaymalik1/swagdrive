import Link from "next/link";

export default function SwagStoreHeroSection() {
  return (
    <section className="border-b border-[#FFB800] bg-[#FBF5E0]">
      <div className="mx-auto w-full max-w-[1440px] px-6 pt-24 pb-8 min-[768px]:px-6 min-[768px]:pt-24 min-[768px]:pb-12 min-[992px]:px-[69px] min-[992px]:pt-28 min-[992px]:pb-[60px]">
        <div className="flex flex-col items-center">
          <p className="m-0 mb-1 text-center font-[family-name:var(--font-overpass)] text-xs leading-4 font-bold tracking-[1px] text-[#083467] uppercase min-[768px]:mb-2 min-[768px]:text-base min-[768px]:leading-6">
            global corporate gift shops
          </p>

          <h1 className="m-0 mb-1 max-w-[52rem] text-center font-[family-name:var(--font-satoshi)] text-[2rem] leading-[2.125rem] font-bold text-[#0B7AFC] min-[768px]:mb-3 min-[768px]:text-[2rem] min-[768px]:leading-10 min-[992px]:mb-[22px] min-[992px]:text-[4rem] min-[992px]:leading-[4.5rem]">
            Your Company&apos;s Storefront
          </h1>

          <p className="m-0 mb-3 max-w-[400px] text-center font-[family-name:var(--font-overpass)] text-sm leading-5 tracking-[0.16px] text-[#2C2D2E] min-[768px]:mb-3 min-[768px]:text-base min-[768px]:leading-6 min-[768px]:tracking-normal min-[992px]:mb-5 min-[992px]:text-xl min-[992px]:leading-5 min-[992px]:tracking-[0.5px]">
            Invite anyone, anywhere, to choose items from your online branded
            shop.
          </p>

          <div className="mb-5 flex flex-wrap items-center justify-center gap-4 min-[768px]:mb-5 min-[992px]:mb-10">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-3xl border border-[#EFF0F2] bg-white px-6 py-3 font-[family-name:var(--font-overpass)] text-xs leading-4 font-semibold tracking-[1.16px] text-[#2C2D2E] uppercase no-underline transition-colors hover:bg-[#EFF0F2] hover:text-[#181818]"
            >
              Book a demo
            </Link>

            <Link
              href="/login"
              className="inline-flex flex-row-reverse items-center justify-center gap-2 rounded-3xl border border-[#2C2D2E] bg-[#2C2D2E] px-6 pt-3 pb-2.5 font-[family-name:var(--font-overpass)] text-xs leading-4 font-semibold tracking-[1.16px] text-[#F8F8F8] uppercase no-underline transition-colors hover:border-[#181818] hover:bg-[#181818] hover:text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="21"
                viewBox="0 0 20 21"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M5.83301 14.4041L14.167 6.07107M14.167 6.07107L5.83301 6.07007M14.167 6.07107V14.4041"
                  stroke="currentColor"
                  strokeWidth="1.667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>get started</span>
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
