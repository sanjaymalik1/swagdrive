import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function CrmStreamlineSection() {
  return (
    <section className="relative overflow-hidden bg-blue-primary">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/platform/crm/streamline-bg.svg"
        alt=""
        className="pointer-events-none absolute inset-0 h-full w-full object-cover"
      />
      <div className="relative z-[1] mx-auto flex w-full max-w-[1440px] flex-col items-center px-5 py-16 text-center min-[480px]:px-10 min-[992px]:py-24">
        <p className="m-0 mb-2.5 font-[family-name:var(--font-overpass)] text-sm leading-4 font-bold tracking-[1px] text-yellow-secondary uppercase min-[768px]:text-base min-[768px]:leading-4">
          STREAMLINE YOUR SENDING
        </p>
        <h2 className="mx-auto m-0 mb-8 max-w-[52rem] font-[family-name:var(--font-satoshi)] text-[1.625rem] leading-[1.25] font-bold text-yellow-secondary min-[768px]:mb-11 min-[768px]:text-[2rem] min-[768px]:leading-[2.625rem] min-[1025px]:text-[3.125rem] min-[1025px]:leading-[3.4375rem]">
          Ready to take sending to the next level?
        </h2>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 rounded-[3rem] bg-yellow-secondary px-5 py-3.5 text-center text-base leading-none font-normal text-blue-primary no-underline transition-colors hover:bg-yellow-primary active:brightness-95"
          >
            Book a demo
            <ArrowUpRight
              className="size-5 shrink-0 stroke-[2.5] transition-transform duration-200 ease-out group-hover:scale-130"
              aria-hidden
            />
          </Link>
          <Link
            href="/login"
            className="inline-flex items-center justify-center rounded-[3rem] border-2 border-yellow-secondary/40 bg-transparent px-5 py-3.5 text-base leading-none font-normal text-yellow-secondary no-underline transition-colors hover:border-yellow-secondary hover:bg-yellow-secondary/10"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </section>
  );
}
