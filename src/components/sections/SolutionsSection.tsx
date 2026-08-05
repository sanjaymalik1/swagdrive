"use client";

import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  Globe2,
  Package,
  Palette,
  ShieldCheck,
  Truck,
} from "lucide-react";
import { cn } from "@/lib/utils";

const EASE = "cubic-bezier(0.22, 1, 0.36, 1)";
const CONTENT_MS = 520;
const TAB_MS = 360;

type Solution = {
  id: string;
  label: string;
  title: string;
  description: string;
  features: string[];
  cta: { label: string; href: string };
  image: {
    src: string;
    alt: string;
    position: string;
  };
};

const SOLUTIONS: Solution[] = [
  {
    id: "onboarding",
    label: "Employee Onboarding",
    title: "Employee Onboarding",
    description:
      "Give every new hire a considered first-day experience. Curated kits arrive branded, complete, and ready to reinforce culture from the moment someone joins.",
    features: [
      "Fully customizable branding",
      "Role-based kit configurations",
      "Scheduled delivery to any office",
      "Dedicated account support",
      "Inventory visibility in real time",
    ],
    cta: { label: "Explore onboarding", href: "/platform" },
    image: {
      src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&q=85",
      alt: "Team collaborating during employee onboarding",
      position: "50% 40%",
    },
  },
  {
    id: "welcome-kits",
    label: "Welcome Kits",
    title: "Welcome Kits",
    description:
      "Premium unboxing moments that feel intentional—not transactional. From packaging to product mix, every detail is designed to leave a lasting first impression.",
    features: [
      "Luxury packaging options",
      "Brand-aligned product curation",
      "Bulk ordering with ease",
      "Quality-controlled fulfillment",
      "Fast global delivery",
    ],
    cta: { label: "Design a welcome kit", href: "/contact" },
    image: {
      src: "https://images.unsplash.com/photo-1513885535751-8b9238bd345a?auto=format&fit=crop&w=1600&q=85",
      alt: "Premium gift box with ribbon for welcome kits",
      position: "50% 45%",
    },
  },
  {
    id: "corporate-gifts",
    label: "Corporate Gifts",
    title: "Corporate Gifts",
    description:
      "Elevate client and partner relationships with gifts that feel executive-ready. Source, personalize, and ship at scale without compromising on craft.",
    features: [
      "Executive-grade product selection",
      "Worldwide fulfillment",
      "Custom engraving & personalization",
      "Compliance-friendly options",
      "White-glove delivery",
    ],
    cta: { label: "Browse corporate gifts", href: "/platform" },
    image: {
      src: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=1600&q=85",
      alt: "Elegant wrapped corporate gift boxes",
      position: "50% 40%",
    },
  },
  {
    id: "client-appreciation",
    label: "Client Appreciation",
    title: "Client Appreciation",
    description:
      "Stay top of mind with thoughtful sends that deepen partnerships. Build recurring programs for milestones, renewals, and moments that matter.",
    features: [
      "Programmatic gifting workflows",
      "Recipient preference capture",
      "Tracked delivery confirmation",
      "Brand-safe curation",
      "Dedicated success support",
    ],
    cta: { label: "Plan appreciation sends", href: "/contact" },
    image: {
      src: "https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?auto=format&fit=crop&w=1600&q=85",
      alt: "Thoughtfully packaged client appreciation gifts",
      position: "48% 40%",
    },
  },
  {
    id: "branded-merch",
    label: "Branded Merchandise",
    title: "Branded Merchandise",
    description:
      "Merchandise people actually want to keep. Apparel, drinkware, and desk essentials produced to brand guidelines and delivered with enterprise reliability.",
    features: [
      "20K+ premium SKU options",
      "Exact brand color matching",
      "Size runs & kit assembly",
      "Quality assurance at scale",
      "On-demand restocking",
    ],
    cta: { label: "Build your merch line", href: "/platform" },
    image: {
      src: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&w=1600&q=85",
      alt: "Premium branded apparel and merchandise display",
      position: "50% 30%",
    },
  },
  {
    id: "event-swag",
    label: "Event Swag",
    title: "Event Swag",
    description:
      "Conference kits, booth gifts, and attendee experiences that feel polished on-site. Coordinate timelines, quantities, and logistics without the fire drill.",
    features: [
      "Event-ready kit assembly",
      "On-site delivery coordination",
      "Volume pricing that scales",
      "Last-mile logistics support",
      "Reusable program playbooks",
    ],
    cta: { label: "Plan event swag", href: "/contact" },
    image: {
      src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1600&q=85",
      alt: "Corporate event attendees with branded materials",
      position: "50% 35%",
    },
  },
] as const;

const FEATURE_ICONS = [Palette, Globe2, Package, ShieldCheck, Truck] as const;

export default function SolutionsSection() {
  const [active, setActive] = useState(0);
  const [contentKey, setContentKey] = useState(0);
  const [reduceMotion, setReduceMotion] = useState(false);

  const trackRef = useRef<HTMLDivElement>(null);
  const indicatorRef = useRef<HTMLSpanElement>(null);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const solution = SOLUTIONS[active];

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduceMotion(media.matches);
    sync();
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, []);

  const syncIndicator = useCallback(() => {
    const indicator = indicatorRef.current;
    const tab = tabRefs.current[active];
    if (!indicator || !tab) return;

    indicator.style.width = `${tab.offsetWidth}px`;
    indicator.style.height = `${tab.offsetHeight}px`;
    indicator.style.transform = `translate3d(${tab.offsetLeft}px, ${tab.offsetTop}px, 0)`;
  }, [active]);

  useLayoutEffect(() => {
    syncIndicator();
  }, [syncIndicator, active]);

  useEffect(() => {
    const onResize = () => syncIndicator();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [syncIndicator]);

  const selectTab = (index: number) => {
    if (index === active) return;
    setActive(index);
    setContentKey((key) => key + 1);
  };

  return (
    <section
      aria-labelledby="solutions-heading"
      className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28"
    >
      {/* Subtle ambient glows */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 55% 40% at 12% 18%, rgba(16,42,113,0.045), transparent 70%),
            radial-gradient(ellipse 45% 35% at 88% 72%, rgba(255,244,79,0.08), transparent 65%),
            radial-gradient(ellipse 40% 30% at 70% 10%, rgba(0,24,64,0.03), transparent 60%)
          `,
        }}
      />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2
            id="solutions-heading"
            className="text-[1.875rem] font-semibold leading-[1.14] tracking-[-0.03em] text-brand-navy-deep sm:text-[2.5rem] sm:leading-[1.1] sm:tracking-[-0.035em] md:text-[2.875rem] md:leading-[1.08]"
          >
            Our Offerings
          </h2>
          <p className="mt-5 max-w-xl mx-auto text-base leading-[1.75] tracking-[-0.01em] text-neutral-600 sm:mt-6 sm:text-lg sm:leading-[1.7] md:text-xl md:leading-[1.65]">
            From first-day kits to executive sends—programs built for brand
            consistency, global reach, and experiences people remember.
          </p>
        </div>

        {/* Tabs */}
        <div className="mt-7 sm:mt-8 lg:mt-9">
          <div
            className="rounded-[24px] border border-brand-navy/[0.08] bg-white/75 p-2 backdrop-blur-md"
            role="tablist"
            aria-label="Solution categories"
            style={{
              boxShadow: `
                inset 0 1px 0 rgba(255,255,255,0.9),
                0 1px 2px rgba(15,23,42,0.03),
                0 8px 24px rgba(15,23,42,0.05),
                0 20px 40px rgba(15,23,42,0.03)
              `,
            }}
          >
            <div
              ref={trackRef}
              className="relative grid w-full grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-2.5 lg:grid-cols-6 lg:gap-2.5"
            >
              <span
                ref={indicatorRef}
                aria-hidden
                className="pointer-events-none absolute top-0 left-0 z-0 rounded-full bg-brand-gold"
                style={{
                  width: 0,
                  height: 0,
                  transform: "translate3d(0,0,0)",
                  boxShadow: `
                    inset 0 1px 0 rgba(255,255,255,0.55),
                    0 2px 4px rgba(15,23,42,0.06),
                    0 8px 18px rgba(255,244,79,0.35)
                  `,
                  transition: reduceMotion
                    ? "none"
                    : `transform ${TAB_MS}ms ${EASE}, width ${TAB_MS}ms ${EASE}, height ${TAB_MS}ms ${EASE}`,
                }}
              />

              {SOLUTIONS.map((item, index) => {
                const isActive = index === active;
                return (
                  <button
                    key={item.id}
                    ref={(el) => {
                      tabRefs.current[index] = el;
                    }}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    aria-controls={`solution-panel-${item.id}`}
                    id={`solution-tab-${item.id}`}
                    onClick={() => selectTab(index)}
                    className={cn(
                      "relative z-10 flex w-full items-center justify-center rounded-full px-2.5 py-3 text-center text-[0.75rem] font-medium leading-snug tracking-[-0.01em] sm:px-3 sm:py-3 sm:text-[0.8125rem] lg:px-3 lg:py-2.5 lg:text-sm",
                      "transition-[color,transform] duration-[360ms] ease-[cubic-bezier(0.22,1,0.36,1)]",
                      "hover:-translate-y-px focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-navy/25 focus-visible:ring-offset-2",
                      isActive
                        ? "text-brand-navy-deep"
                        : "text-brand-navy/50 hover:text-brand-navy"
                    )}
                  >
                    {item.label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Two-column panel */}
        <div className="mt-14 grid items-center gap-10 sm:mt-16 lg:mt-16 lg:grid-cols-2 lg:gap-14 xl:gap-16">
          {/* Content */}
          <div
            key={`content-${contentKey}`}
            id={`solution-panel-${solution.id}`}
            role="tabpanel"
            aria-labelledby={`solution-tab-${solution.id}`}
            className={cn(
              "min-w-0",
              !reduceMotion &&
                "animate-in fade-in slide-in-from-bottom-3 fill-mode-both"
            )}
            style={
              reduceMotion
                ? undefined
                : {
                    animationTimingFunction: EASE,
                    animationDuration: `${CONTENT_MS}ms`,
                  }
            }
          >
            <h3 className="text-2xl font-semibold tracking-[-0.03em] text-brand-navy-deep sm:text-3xl sm:tracking-[-0.035em] md:text-[2.125rem] md:leading-[1.12]">
              {solution.title}
            </h3>
            <p className="mt-4 max-w-md text-base leading-[1.75] tracking-[-0.01em] text-neutral-600 sm:mt-5 sm:text-[1.0625rem] sm:leading-[1.7]">
              {solution.description}
            </p>

            <ul className="mt-8 space-y-4 sm:mt-9">
              {solution.features.map((feature, i) => {
                const Icon = FEATURE_ICONS[i % FEATURE_ICONS.length] ?? Check;
                return (
                  <li key={feature} className="flex items-center gap-3.5">
                    <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-brand-gold/40 text-brand-navy-deep ring-1 ring-brand-gold/30">
                      <Icon className="size-3.5" strokeWidth={2.25} aria-hidden />
                    </span>
                    <span className="text-[0.9375rem] leading-snug tracking-[-0.01em] text-brand-navy-deep/85 sm:text-base">
                      {feature}
                    </span>
                  </li>
                );
              })}
            </ul>

            <div className="mt-9 sm:mt-10">
              <Link
                href={solution.cta.href}
                className={cn(
                  "group inline-flex items-center gap-2 border-b border-transparent pb-0.5 text-[0.9375rem] font-semibold tracking-[-0.01em] text-brand-navy",
                  "transition-[color,border-color,gap] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]",
                  "hover:gap-2.5 hover:border-brand-navy/40 hover:text-brand-navy-deep",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-navy/25 focus-visible:ring-offset-2"
                )}
              >
                {solution.cta.label}
                <ArrowRight
                  className="size-4 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-1"
                  strokeWidth={2.25}
                  aria-hidden
                />
              </Link>
            </div>
          </div>

          {/* Showcase image */}
          <div className="relative min-w-0">
            <div
              aria-hidden
              className="pointer-events-none absolute -inset-x-4 -bottom-6 top-8 -z-10 rounded-[40px] opacity-80 blur-2xl"
              style={{
                background:
                  "radial-gradient(ellipse at 50% 80%, rgba(15,23,42,0.08), transparent 70%)",
              }}
            />
            <div
              className={cn(
                "group relative aspect-[5/4] overflow-hidden rounded-[30px]",
                "transition-[box-shadow,transform] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
                "hover:-translate-y-0.5"
              )}
              style={{
                boxShadow: `
                  inset 0 1px 0 rgba(255,255,255,0.65),
                  0 0 0 1px rgba(15,23,42,0.06),
                  0 10px 24px rgba(15,23,42,0.05),
                  0 28px 56px rgba(15,23,42,0.08)
                `,
              }}
            >
              {SOLUTIONS.map((item, index) => {
                const isActive = index === active;
                return (
                  <div
                    key={item.id}
                    className="absolute inset-0"
                    style={{
                      opacity: isActive ? 1 : 0,
                      transform: isActive
                        ? "translate3d(0,0,0) scale(1)"
                        : "translate3d(14px,0,0) scale(1.025)",
                      transition: reduceMotion
                        ? "none"
                        : `opacity ${CONTENT_MS}ms ${EASE}, transform ${CONTENT_MS}ms ${EASE}`,
                      zIndex: isActive ? 2 : 1,
                      pointerEvents: isActive ? "auto" : "none",
                    }}
                    aria-hidden={!isActive}
                  >
                    <Image
                      src={item.image.src}
                      alt={item.image.alt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 560px"
                      className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.025]"
                      style={{
                        objectFit: "cover",
                        objectPosition: item.image.position,
                      }}
                      priority={index === 0}
                      loading={index === 0 ? "eager" : "lazy"}
                    />
                    <div
                      aria-hidden
                      className="pointer-events-none absolute inset-0"
                      style={{
                        background:
                          "linear-gradient(to top, rgba(0,24,64,0.14) 0%, transparent 40%), linear-gradient(to bottom, rgba(255,255,255,0.14) 0%, transparent 26%)",
                      }}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
