import Link from "next/link";

export default function RedeemCtaSection() {
  return (
    <section className="bg-white">
      <div className="mx-auto w-full max-w-[1440px] px-5 pb-12 min-[768px]:px-11 min-[768px]:pb-16 min-[1025px]:px-16 min-[1025px]:pb-20">
        <div className="flex flex-col overflow-hidden rounded-2xl min-[768px]:rounded-[24px] min-[1025px]:flex-row">
          <div className="flex w-full flex-col items-start justify-center bg-[#1E0099] px-6 py-10 min-[768px]:px-12 min-[768px]:py-12 min-[1025px]:w-1/2 min-[1025px]:px-[50px] min-[1025px]:py-[50px]">
            <h2 className="m-0 mb-4 max-w-[26rem] font-[family-name:var(--font-satoshi)] text-[1.75rem] leading-[1.2] font-bold text-white min-[768px]:text-[2.375rem] min-[1025px]:text-[3rem]">
              Start Sending Swag in Minutes
            </h2>
            <p className="m-0 mb-8 max-w-[19rem] font-[family-name:var(--font-overpass)] text-sm leading-[1.3] text-white min-[768px]:mb-12 min-[768px]:text-base">
              Create a redeem page and scale your swag distribution instantly
            </p>
            <Link
              href="/contact"
              className="inline-block rounded-[3rem] border-2 border-[#fffcd3] bg-[#fff34a] px-6 py-4 text-center font-[family-name:var(--font-lexend)] text-base leading-none font-normal text-[#221e26] no-underline transition-colors hover:bg-[#fff784] active:bg-[#ccc23b]"
            >
              Book a demo
            </Link>
          </div>

          <div className="flex w-full items-center justify-center bg-[#5567FF] min-[1025px]:w-1/2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/platform/redeem/cta-banner.png"
              alt=""
              className="block h-auto w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
