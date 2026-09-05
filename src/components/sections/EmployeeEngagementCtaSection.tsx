import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function EmployeeEngagementCtaSection() {
  return (
    <section className="relative overflow-hidden bg-blue-primary">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/platform/crm/streamline-bg.svg"
        alt=""
        className="pointer-events-none absolute inset-0 h-full w-full object-cover"
      />
      <div className="relative z-[1] mx-auto flex w-full max-w-[1440px] flex-col items-center px-5 py-16 text-center min-[480px]:px-10 min-[992px]:py-24">
        <h2 className="mx-auto m-0 mb-4 max-w-[48rem] font-[family-name:var(--font-satoshi)] text-[1.625rem] leading-[1.25] font-bold text-yellow-secondary min-[768px]:mb-5 min-[768px]:text-[2rem] min-[768px]:leading-[2.625rem] min-[1025px]:text-[3.125rem] min-[1025px]:leading-[3.4375rem]">
          Ready to create employee engagement experiences with real impact?
        </h2>
        <p className="mx-auto m-0 mb-8 max-w-[36rem] font-[family-name:var(--font-overpass)] text-base leading-[1.5] text-white min-[768px]:mb-11 min-[768px]:text-lg">
          Deliver meaningful moments at scale with SwagDrive&apos;s Employee
          Engagement Platform.
        </p>
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
      </div>
    </section>
  );
}
