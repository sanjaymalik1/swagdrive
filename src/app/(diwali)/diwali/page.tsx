import { DiwaliFooter } from "./_components/DiwaliFooter";
import { DiyaGarland } from "./_components/DiyaGarland";
import { ProductCard } from "./_components/ProductCard";
import { DIWALI_PRODUCTS } from "./_data";

export default function DiwaliCataloguePage() {
  return (
    <>
      <main className="flex-1">
        {/* Hero */}
        <section className="pb-14 pt-2">
          <DiyaGarland />

          <div className="mx-auto max-w-2xl px-6 pt-9 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
              SwagDrive Presents
            </p>
            <h1 className="mt-4 font-[family-name:var(--font-diwali-heading)] text-5xl font-bold leading-tight text-secondary sm:text-6xl">
              The Diwali 2026 Gifting Collection
            </h1>
            <p className="mx-auto mt-5 max-w-lg text-balance text-foreground/80">
              Hand-finished hampers and festive serveware from our Twigstory
              collection — perfect for employees, clients and partners this
              Diwali.
            </p>
            <div className="mx-auto mt-6 h-px w-40 diwali-gold-divider" />
            <p className="mt-4 text-sm text-muted-foreground">
              Place bulk orders by Oct 20 for guaranteed festival delivery.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a
                href="#collection"
                className="rounded-full bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
              >
                Browse the Catalogue
              </a>
              <a
                href="/get-quote"
                className="rounded-full border border-border px-6 py-2.5 text-sm text-foreground transition-colors hover:border-primary hover:text-primary"
              >
                Request a Quote
              </a>
            </div>
          </div>
        </section>

        {/* Collection */}
        <section
          id="collection"
          className="mx-auto max-w-6xl scroll-mt-10 px-6 py-16"
        >
          <h2 className="text-center font-[family-name:var(--font-diwali-heading)] text-3xl font-semibold text-secondary">
            Our Festive Collection
          </h2>
          <p className="mx-auto mt-2 max-w-md text-center text-sm text-muted-foreground">
            {DIWALI_PRODUCTS.length} handpicked pieces, ready for bulk
            gifting.
          </p>
          <div className="mt-10 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
            {DIWALI_PRODUCTS.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </section>

        {/* Bulk order CTA */}
        <section className="bg-secondary">
          <div className="mx-auto max-w-6xl px-6 py-16 text-center">
            <h2 className="font-[family-name:var(--font-diwali-heading)] text-3xl font-semibold text-secondary-foreground">
              Gifting 100+ employees or clients?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-secondary-foreground/80">
              Get a custom quote with volume pricing, branding and
              pan-India delivery for your festive gifting program.
            </p>
            <a
              href="/get-quote"
              className="mt-6 inline-block rounded-full bg-primary px-8 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              Get a Custom Quote
            </a>
          </div>
        </section>
      </main>

      <DiwaliFooter />
    </>
  );
}
