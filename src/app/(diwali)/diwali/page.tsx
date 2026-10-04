import { DiwaliFooter } from "./_components/DiwaliFooter";
import { LightMotes } from "./_components/DiwaliOrnaments";
import { DiwaliSkyline } from "./_components/DiwaliSkyline";
import { DiyaGarland } from "./_components/DiyaGarland";
import { ProductCard } from "./_components/ProductCard";
import { DIWALI_PRODUCTS } from "./_data";

// Shared primary-CTA style so every main button is a visual sibling.
const CTA_CLASS =
  "inline-flex h-12 items-center justify-center rounded-lg bg-primary px-8 text-sm font-semibold tracking-wide text-primary-foreground shadow-[0_10px_26px_-12px_rgba(224,180,79,0.7)] transition duration-300 hover:-translate-y-px hover:brightness-105 hover:shadow-[0_14px_30px_-12px_rgba(224,180,79,0.8)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary motion-reduce:transition-none motion-reduce:hover:translate-y-0";

export default function DiwaliCataloguePage() {
  return (
    <>
      <main className="flex-1">
        {/* Hero */}
        <section className="diwali-hero overflow-hidden pb-[max(6.5rem,10.5vw)]">
          {/* depth layers, all behind the content */}
          <div
            aria-hidden="true"
            className="diwali-bloom pointer-events-none absolute left-1/2 top-[48%] -z-[1] h-[420px] w-[min(120vw,820px)] -translate-x-1/2 -translate-y-1/2"
          />
          <LightMotes />
          <DiwaliSkyline className="pointer-events-none absolute inset-x-0 -bottom-2 z-0 aspect-[1440/210] min-h-28 w-full [mask-image:linear-gradient(to_top,#000_75%,transparent)]" />

          <div aria-hidden="true" className="mx-auto h-px max-w-4xl diwali-gold-divider opacity-50" />
          <DiyaGarland />

          <div className="relative z-10 mx-auto max-w-5xl px-6 pt-2 text-center sm:pt-4">
            <p className="text-xs font-medium uppercase tracking-[0.28em] text-primary sm:text-[13px]">
              SwagDrive Presents
            </p>
            <h1 className="mt-5 font-(family-name:--font-diwali-heading) text-[clamp(3rem,7vw,6.25rem)] font-medium leading-[1.02] tracking-tight text-[#f7ebd5]">
              The Diwali 2026
              <span className="block italic text-[#e4c27c]">Gifting Collection</span>
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-balance text-base leading-relaxed text-[#f7ebd5]/80 sm:text-lg">
              Hand-finished hampers and festive serveware from our Twigstory
              collection — perfect for employees, clients and partners this
              Diwali.
            </p>
            <p className="mt-5 text-sm tracking-wide text-[#dcc69a]">
              Place bulk orders by Oct 15 for guaranteed festival delivery.
            </p>
            <div className="mt-7 flex items-center justify-center">
              <a href="#collection" className={CTA_CLASS}>
                Browse the Catalogue
              </a>
            </div>
          </div>
        </section>

        {/* Collection */}
        <section id="collection" className="diwali-catalogue scroll-mt-4">
          <div className="mx-auto max-w-6xl px-5 pb-10 pt-12 sm:px-6 sm:pb-12 sm:pt-16">
            <header className="text-center">
              <p className="flex items-center justify-center gap-4 text-xs font-medium uppercase tracking-[0.28em] text-primary/90">
                <span aria-hidden="true" className="h-px w-8 bg-primary/40" />
                The Collection
                <span aria-hidden="true" className="h-px w-8 bg-primary/40" />
              </p>
              <h2 className="mt-5 font-(family-name:--font-diwali-heading) text-4xl font-medium tracking-tight text-[#f7ebd5] sm:text-5xl">
                Our Festive Collection
              </h2>
              <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-[#cbb8bf]">
                500+ handpicked pieces, ready for bulk
                gifting.
              </p>
            </header>
            <div className="mt-10 grid grid-cols-4 gap-x-3.5 gap-y-5 sm:mt-12 sm:grid-cols-6 sm:gap-x-6 sm:gap-y-8 lg:grid-cols-8 lg:gap-x-7 lg:gap-y-9 max-sm:[&>*:nth-child(2n+1):last-child]:col-start-2 sm:max-lg:[&>*:nth-child(3n+1):last-child]:col-start-3 sm:max-lg:[&>*:nth-child(3n+1):nth-last-child(2)]:col-start-2 lg:[&>*:nth-child(4n+1):last-child]:col-start-4 lg:[&>*:nth-child(4n+1):nth-last-child(2)]:col-start-3 lg:[&>*:nth-child(4n+1):nth-last-child(3)]:col-start-2">
              {DIWALI_PRODUCTS.map((product) => (
                <div key={product.slug} className="col-span-2 grid">
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <DiwaliFooter />
    </>
  );
}
