import type { Metadata } from "next";
import Link from "next/link";
import SignInForm from "@/components/auth/SignInForm";
import { Logo } from "@/components/layout/Logo";
import { CONTACT_HREF } from "@/components/layout/nav";

export const metadata: Metadata = {
  title: "Sign in",
  description: "Sign in to your SwagDrive account.",
};

export default function LoginPage() {
  return (
    <div className="relative flex min-h-[100dvh] flex-col bg-[#fffdf0] font-[family-name:var(--font-lexend)] text-[#001840]">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(165deg,#fffdf0_0%,#fffdf0_55%,#fff9a0_145%)]"
      />

      {/* Same bar height + padding as landing Header */}
      <header className="relative z-10 w-full bg-[#fffdf0]/80 backdrop-blur-[6px]">
        <div className="mx-auto flex h-14 w-full max-w-[90rem] items-center justify-between px-5 min-[480px]:px-10 min-[992px]:h-16 min-[992px]:px-12">
          <Logo />
          <Link
            href={CONTACT_HREF}
            className="inline-flex h-9 items-center justify-center rounded-[3rem] border-2 border-[#fffcd3] bg-[#fff44f] px-4 text-sm leading-none font-normal text-[#001840] no-underline transition-colors hover:bg-[#fff784] active:bg-[#ccc23b]"
          >
            Book a demo
          </Link>
        </div>
      </header>

      <main className="relative z-10 flex flex-1 flex-col items-center justify-center px-5 py-14 min-[480px]:px-10 min-[992px]:px-12 min-[992px]:py-20">
        <div className="w-full max-w-[22.5rem]">
          <h1 className="m-0 text-[1.75rem] leading-[1.15] font-normal tracking-[-0.04rem] text-[#001840] min-[480px]:text-[2rem] min-[480px]:tracking-[-0.05rem]">
            Sign in
          </h1>
          <p className="mt-2 m-0 font-[family-name:var(--font-overpass)] text-[15px] leading-[1.45] text-[#4a5568]">
            Enter your work email and password to continue.
          </p>

          <div className="pt-8" />

          <SignInForm />
        </div>
      </main>

      <footer className="relative z-10 w-full">
        <div className="mx-auto flex h-14 w-full max-w-[90rem] items-center px-5 min-[480px]:px-10 min-[992px]:h-16 min-[992px]:px-12">
          <p className="m-0 font-[family-name:var(--font-overpass)] text-xs text-[#6b7280]">
            © {new Date().getFullYear()} SwagDrive
          </p>
        </div>
      </footer>
    </div>
  );
}
