import Link from "next/link";

export default function CrmStreamlineSection() {
  return (
    <section className="relative overflow-hidden bg-[#FDCEDA]">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/platform/crm/streamline-bg.png"
        alt=""
        className="pointer-events-none absolute inset-0 h-full w-full object-cover"
      />
      <div className="relative z-[1] mx-auto flex w-full max-w-[1440px] flex-col items-center px-5 py-10 text-center min-[768px]:px-7 min-[768px]:py-[76px] min-[768px]:pb-24">
        <p className="m-0 mb-2.5 font-[family-name:var(--font-overpass)] text-sm leading-4 font-bold tracking-[1px] text-black uppercase min-[768px]:text-base min-[768px]:leading-4">
          STREAMLINE YOUR SENDING
        </p>
        <h2 className="mx-auto m-0 mb-8 max-w-[52rem] font-[family-name:var(--font-satoshi)] text-[1.625rem] leading-[1.25] font-bold text-black min-[768px]:mb-11 min-[768px]:text-[2rem] min-[768px]:leading-[2.625rem] min-[1025px]:text-[3.125rem] min-[1025px]:leading-[3.4375rem]">
          Ready to take sending to the next level?
        </h2>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-3xl border border-[#EFF0F2] bg-white px-6 py-[12px] font-[family-name:var(--font-overpass)] text-xs leading-4 font-semibold tracking-[1.16px] text-[#2C2D2E] uppercase no-underline transition-colors hover:bg-[#EFF0F2] hover:text-[#181818]"
          >
            Book a demo
          </Link>
          <Link
            href="/login"
            className="inline-flex items-center justify-center rounded-3xl bg-[#2C2D2E] px-6 py-[12px] font-[family-name:var(--font-overpass)] text-xs leading-4 font-semibold tracking-[1.16px] text-[#F8F8F8] uppercase no-underline transition-colors hover:bg-[#181818] hover:text-white"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </section>
  );
}
