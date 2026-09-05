import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function RedeemCtaSection() {
  return (
    <section className="bg-white">
      <div className="mx-auto w-full max-w-[80rem] px-5 py-16 min-[480px]:px-10 min-[992px]:py-24">
        <div className="flex w-full flex-col overflow-hidden rounded-[24px] min-[768px]:flex-row">
          <div className="flex w-full flex-col items-start justify-center bg-blue-primary px-[22px] py-[41px] min-[768px]:w-1/2 min-[768px]:rounded-none min-[768px]:rounded-l-[24px] min-[768px]:px-[50px] min-[768px]:py-[60px] min-[992px]:px-[95px] min-[992px]:py-[100px]">
            <h2 className="m-0 mb-4 font-[family-name:var(--font-satoshi)] text-2xl leading-[1.2] font-semibold text-yellow-secondary min-[768px]:text-[32px] min-[992px]:text-[40px]">
              Start Sending Swag in Minutes
            </h2>
            <p className="m-0 mb-6 font-[family-name:var(--font-overpass)] text-sm leading-[1.2] text-white min-[768px]:mb-12 min-[768px]:text-base">
              Create a redeem page and scale your swag distribution instantly
            </p>
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

          <div className="flex w-full items-center justify-center bg-blue-secondary px-[30px] py-[60px] min-[768px]:w-1/2 min-[768px]:rounded-none min-[768px]:rounded-r-[24px] min-[768px]:py-[75px] min-[992px]:py-[30px]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/platform/redeem/cta-banner.png"
              alt=""
              className="block h-auto w-full object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
