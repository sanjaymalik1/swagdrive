import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#181818]">
      <div className="mx-auto flex min-h-[220px] max-w-[1440px] flex-col justify-center px-[30px] py-16 min-[768px]:min-h-[260px] min-[768px]:px-11 min-[768px]:py-20 min-[1280px]:min-h-[300px] min-[1280px]:px-[59px] min-[1280px]:py-24">
        <Link
          href="/"
          aria-label="SwagDrive home"
          className="inline-block outline-none focus-visible:ring-2 focus-visible:ring-white/40"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/swagdrive-logo.png"
            alt="SwagDrive"
            width={924}
            height={172}
            className="mb-3 block h-auto max-h-[54px] w-auto max-w-[216px] object-contain object-left invert hue-rotate-180 min-[768px]:mb-3"
          />
        </Link>
        <p className="m-0 font-[family-name:var(--font-overpass)] text-[9px] leading-[14px] font-semibold tracking-[1.08px] text-white uppercase min-[768px]:text-[10px] min-[768px]:leading-[11px] min-[768px]:tracking-normal min-[1280px]:text-sm min-[1280px]:leading-[14px] min-[1280px]:tracking-[1.68px]">
          Limitless engagement. One Platform.
        </p>
      </div>
    </footer>
  );
}
