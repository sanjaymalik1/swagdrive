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
    <div className="relative flex min-h-[100dvh] flex-col bg-surface font-[family-name:var(--font-lexend)] text-blue-primary">
      <header className="relative z-10 w-full border-b border-blue-secondary/10 bg-surface/90 backdrop-blur-[6px]">
        <div className="mx-auto flex h-14 w-full max-w-[90rem] items-center justify-between px-5 min-[480px]:px-10 min-[992px]:h-16 min-[992px]:px-12">
          <Logo />
          <Link
            href={CONTACT_HREF}
            className="inline-flex h-9 items-center justify-center rounded-[3rem] bg-yellow-primary px-4 text-sm leading-none font-normal text-blue-primary no-underline transition-colors hover:bg-yellow-secondary active:brightness-95"
          >
            Book a demo
          </Link>
        </div>
      </header>

      <main className="relative z-10 flex flex-1 flex-col items-center justify-center px-5 py-14 min-[480px]:px-10 min-[992px]:px-12 min-[992px]:py-20">
        <div className="w-full max-w-[22.5rem]">
          <h1 className="m-0 text-[1.75rem] leading-[1.15] font-normal tracking-[-0.04rem] text-blue-primary min-[480px]:text-[2rem] min-[480px]:tracking-[-0.05rem]">
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
