import { SITE_CONFIG } from "@/lib/constants";

const LINK =
  "text-[#f7ebd5] underline decoration-[#c99a2e]/40 underline-offset-4 transition-colors hover:text-primary hover:decoration-primary focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary";

export function DiwaliFooter() {
  return (
    <footer className="diwali-footer px-5 pb-[max(2rem,env(safe-area-inset-bottom))] pt-12 sm:px-6 sm:pt-14">
      <div className="mx-auto flex max-w-md flex-col items-center text-center">
        <p className="font-(family-name:--font-diwali-heading) text-2xl font-semibold uppercase tracking-[0.16em] sm:text-3xl text-[#f7ebd5]">
          {SITE_CONFIG.name}
        </p>
        <p className="mt-2 font-(family-name:--font-diwali-heading) text-lg italic text-[#dcc69a]">
          Thoughtful gifting, beautifully made.
        </p>

        <p className="mt-8 text-sm text-[#f7ebd5]/60">Questions about bulk orders?</p>
        <p className="mt-2 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm">
          <a href={`mailto:${SITE_CONFIG.email}`} className={`${LINK} break-all`}>
            {SITE_CONFIG.email}
          </a>
          <span aria-hidden="true" className="h-3.5 w-px bg-[#c99a2e]/50" />
          <a href={`https://wa.me/${SITE_CONFIG.whatsappNumber}`} className={LINK}>
            WhatsApp
          </a>
        </p>

        <p className="mt-10 w-full border-t border-[#f7ebd5]/10 pt-5 text-xs text-[#f7ebd5]/40">
          &copy; {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
