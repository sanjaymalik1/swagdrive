import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

/** Single workflow showcase — never tied to timeline steps */
const SHOWCASE = {
  src: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1600&q=85",
  alt: "Corporate teams collaborating on branded gifting and merchandise programs",
  position: "50% 40%",
} as const;

const STEPS = [
  {
    id: "discover",
    title: "Discover Your Needs",
    description:
      "We align on gifting goals, branding requirements, audiences, and budget—so every program starts with clarity.",
  },
  {
    id: "curate",
    title: "Curate & Customize",
    description:
      "Select premium products and personalize every detail—from materials and colors to packaging and messaging.",
  },
  {
    id: "approve",
    title: "Approve Designs",
    description:
      "Review digital mockups with your brand applied. Iterate until the look is exact—then greenlight production.",
  },
  {
    id: "production",
    title: "Production & Packaging",
    description:
      "Premium manufacturing, precise branding, and quality inspection—packaged to feel considered on arrival.",
  },
  {
    id: "fulfillment",
    title: "Global Fulfillment",
    description:
      "Ship to a single HQ or thousands of recipients worldwide with reliable timelines and coordinated logistics.",
  },
  {
    id: "delivery",
    title: "Delivery & Tracking",
    description:
      "Complete shipment visibility from dispatch to doorstep—so stakeholders always know where every send stands.",
  },
] as const;

export default function HowItWorksSection() {
  return (
    <section
      aria-labelledby="how-it-works-heading"
      className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 50% 40% at 10% 15%, rgba(16,42,113,0.035), transparent 70%),
            radial-gradient(ellipse 40% 35% at 90% 75%, rgba(255,244,79,0.06), transparent 65%)
          `,
        }}
      />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-brand-navy/50">
            Our Process
          </p>
          <h2
            id="how-it-works-heading"
            className="mt-2.5 text-[1.875rem] font-semibold leading-[1.14] tracking-[-0.03em] text-brand-navy-deep sm:text-[2.375rem] sm:leading-[1.1] sm:tracking-[-0.035em] md:text-[2.625rem]"
          >
            How It Works
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-[1.65] tracking-[-0.01em] text-neutral-600 sm:text-lg">
            From sourcing to worldwide delivery, SwagDrive manages every detail
            of your corporate gifting program—so your team stays focused on the
            relationships that matter.
          </p>
        </div>

        <div className="mt-12 grid items-start gap-10 sm:mt-14 lg:mt-16 lg:grid-cols-[minmax(0,1.12fr)_minmax(0,0.88fr)] lg:gap-14 xl:gap-16">
          {/* LEFT — single static media showcase */}
          <div className="min-w-0 lg:sticky lg:top-28 lg:self-start">
            <div
              className="relative mx-auto aspect-[4/3] w-full max-w-[650px] overflow-hidden rounded-[24px] border border-[#ECECEC] bg-[#f4f5f8] lg:mx-0"
              style={{
                boxShadow: `
                  0 4px 12px rgba(15,23,42,0.04),
                  0 18px 40px rgba(15,23,42,0.07)
                `,
              }}
            >
              <Image
                src={SHOWCASE.src}
                alt={SHOWCASE.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 650px"
                className="object-cover"
                style={{
                  objectFit: "cover",
                  objectPosition: SHOWCASE.position,
                }}
                priority
              />
            </div>

            <div className="mt-6 sm:mt-7">
              <Button variant="brand" size="cta" asChild>
                <Link href="/contact">
                  <span className="relative z-[1]">Get Started</span>
                  <ArrowRight
                    aria-hidden
                    className="btn-arrow relative z-[1] size-4 shrink-0 sm:size-[1.125rem]"
                    strokeWidth={2.25}
                  />
                </Link>
              </Button>
            </div>
          </div>

          {/* RIGHT — static editorial process list */}
          <div className="relative min-w-0">
            <ol className="relative flex cursor-default flex-col">
              {STEPS.map((item, stepIndex) => {
                const isLast = stepIndex === STEPS.length - 1;

                return (
                  <li
                    key={item.id}
                    className={`relative flex gap-4 sm:gap-5 ${isLast ? "" : "mb-7 sm:mb-8"}`}
                  >
                    {/*
                      Connector from this circle → next circle (through the gap).
                      Omitted on Step 6 so nothing draws below the final marker.
                    */}
                    {!isLast && (
                      <span
                        aria-hidden
                        className="absolute top-8 left-[15px] -bottom-7 w-px bg-[#E5E7EB] sm:top-9 sm:left-[17px] sm:-bottom-8"
                      />
                    )}

                    <span className="relative z-[1] flex size-8 shrink-0 items-center justify-center rounded-full bg-brand-gold text-sm font-semibold text-[#0F2248] sm:size-9">
                      {stepIndex + 1}
                    </span>

                    <div className="min-w-0 flex-1 pt-0.5">
                      <h3 className="text-base font-semibold tracking-[-0.02em] text-[#0F2248] sm:text-lg">
                        {item.title}
                      </h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-[#4B5563] sm:text-[0.9375rem] sm:leading-[1.65]">
                        {item.description}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
