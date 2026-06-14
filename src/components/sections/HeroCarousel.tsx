"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { cn } from "@/lib/utils";

/* ------------------------------------------------------------------ */
/*  Slide config — swap image paths & optional background images here  */
/* ------------------------------------------------------------------ */

type ButtonVariant = "outline-light" | "outline-dark" | "filled-light" | "filled-dark";

type HeadlinePart = { text: string; italic?: boolean };

export type HeroSlide = {
  id: number;
  backgroundColor: string;
  /** Optional full-bleed background image (overlays grid on top) */
  backgroundImage?: string;
  /** Text color theme — drives headline, subtext, and dot indicator colors */
  textTheme: "light" | "dark";
  /** Grid line color — dark lines on light slides, light lines on colored slides */
  gridTheme: "light" | "dark";
  headline: HeadlinePart[];
  subtext: string;
  buttons: {
    label: string;
    href: string;
    variant: ButtonVariant;
  }[];
  /** Right-side product / graphic image */
  image: string;
  imageAlt: string;
  /** "side" = image in right column; "background" = full-bleed cover behind slide */
  imageFit?: "side" | "background";
};

export const HERO_SLIDES: HeroSlide[] = [
  {
    id: 1,
    backgroundColor: "#FFFFFF",
    textTheme: "dark",
    gridTheme: "dark",
    headline: [{ text: "Corporate Gifting, Merch and Onboarding" }],
    subtext: "Simplified for Growing Teams",
    buttons: [
      { label: "SEE HOW IT WORKS", href: "/use-cases", variant: "outline-dark" },
      { label: "SHOP ALL", href: "/products", variant: "filled-dark" },
    ],
    image: "/hero/slide-1.png",
    imageAlt: "Corporate merchandise collection",
    imageFit: "background",
  },
  {
    id: 2,
    backgroundColor: "#C9943C",
    textTheme: "light",
    gridTheme: "light",
    headline: [
      { text: "Thoughtful " },
      { text: "Gifting", italic: true },
      { text: " at Scale" },
    ],
    subtext:
      "Curated hampers and branded gifts for employees, clients, leadership, and special occasions across the corporate calendar.",
    buttons: [
      { label: "SEE HOW IT WORKS", href: "/use-cases", variant: "outline-light" },
      { label: "EXPLORE HAMPERS", href: "/products", variant: "filled-light" },
    ],
    image: "/hero/slide-2.webp",
    imageAlt: "Premium gift hamper",
    imageFit: "background",
  },
  {
    id: 3,
    backgroundColor: "#E8602C",
    textTheme: "light",
    gridTheme: "light",
    headline: [
      { text: "Corporate " },
      { text: "Bulk", italic: true },
      { text: " Buy Simplified" },
    ],
    subtext:
      "Access thousands of branded and non-branded products for office, events, merchandise, and corporate gifting, all in one catalogue.",
    buttons: [
      { label: "SEE HOW IT WORKS", href: "/use-cases", variant: "outline-light" },
      { label: "EXPLORE CATALOGUE", href: "/products", variant: "filled-light" },
    ],
    image: "/hero/slide-3.png",
    imageAlt: "Corporate product catalogue collage",
    imageFit: "background",
  },
  {
    id: 4,
    backgroundColor: "#2D4A3E",
    textTheme: "light",
    gridTheme: "light",
    headline: [
      { text: "Premium " },
      { text: "Brands", italic: true },
      { text: " your Team Loves" },
    ],
    subtext:
      "Choose from a curated network of trusted brands across lifestyle, food, wellness, tech, and everyday essentials.",
    buttons: [
      { label: "SEE HOW IT WORKS", href: "/use-cases", variant: "outline-light" },
      { label: "EXPLORE BRANDS", href: "/products", variant: "filled-light" },
    ],
    image: "/hero/slide-4.webp",
    imageAlt: "Trusted brand partner logos",
    imageFit: "background",
  },
  {
    id: 5,
    backgroundColor: "#D0D4F5",
    textTheme: "dark",
    gridTheme: "light",
    headline: [
      { text: "Corporate " },
      { text: "Gifting", italic: true },
      { text: " Fully automated" },
    ],
    subtext:
      "Manage onboarding kits, employee rewards, campaigns, and merchandise through a powerful enterprise gifting platform.",
    buttons: [
      { label: "SEE HOW IT WORKS", href: "/use-cases", variant: "outline-dark" },
      { label: "EXPLORE PRODUCTS", href: "/products", variant: "filled-dark" },
    ],
    image: "/hero/slide-5.webp",
    imageAlt: "Enterprise gifting platform on tablet",
    imageFit: "background",
  },
];

const AUTO_ADVANCE_MS = 4500;

const BUTTON_STYLES: Record<ButtonVariant, string> = {
  "outline-light":
    "border-[1.5px] border-white bg-transparent text-white hover:bg-white/10",
  "outline-dark":
    "border-[1.5px] border-black bg-transparent text-black hover:bg-black/5",
  "filled-light": "border-[1.5px] border-white bg-white text-black hover:bg-white/90",
  "filled-dark": "border-[1.5px] border-black bg-black text-white hover:bg-black/90",
};

/* Grid overlay — disabled for now
function GridOverlay({ theme }: { theme: "light" | "dark" }) {
  const lineColor =
    theme === "light" ? "rgba(255,255,255,0.15)" : "rgba(0,0,0,0.06)";

  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 z-[1]"
      style={{
        backgroundImage: `
          linear-gradient(${lineColor} 1px, transparent 1px),
          linear-gradient(90deg, ${lineColor} 1px, transparent 1px)
        `,
        backgroundSize: "40px 40px",
      }}
    />
  );
}
*/

function HeroHeadline({
  parts,
  textTheme,
}: {
  parts: HeadlinePart[];
  textTheme: "light" | "dark";
}) {
  return (
    <h1
      className={cn(
        "max-w-xl text-[36px] font-bold leading-[1.08] tracking-tight sm:text-[44px] lg:text-[56px]",
        "font-[family-name:var(--font-hero-sans)]",
        textTheme === "light" ? "text-white" : "text-black"
      )}
    >
      {parts.map((part, i) =>
        part.italic ? (
          <span
            key={i}
            className="font-[family-name:var(--font-hero-serif)] italic"
          >
            {part.text}
          </span>
        ) : (
          <span key={i}>{part.text}</span>
        )
      )}
    </h1>
  );
}

function HeroButton({
  label,
  href,
  variant,
}: {
  label: string;
  href: string;
  variant: ButtonVariant;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center justify-center px-6 py-3",
        "text-[13px] font-semibold uppercase tracking-[0.08em]",
        "font-[family-name:var(--font-hero-sans)] transition-colors duration-200",
        BUTTON_STYLES[variant]
      )}
    >
      {label}
    </Link>
  );
}

function SlideContent({ slide }: { slide: HeroSlide }) {
  return (
    <div
      className="relative flex h-full min-h-[460px] w-full flex-col md:min-h-[480px] md:flex-row"
      style={{ backgroundColor: slide.backgroundColor }}
    >
      <Image
        src={slide.image}
        alt=""
        fill
        priority={slide.id <= 2}
        className="object-cover object-center"
        sizes="100vw"
      />

      {/* <GridOverlay theme={slide.gridTheme} /> */}

      <div className="relative z-[2] flex w-full flex-col justify-center px-6 py-10 sm:px-10 md:w-[50%] md:py-0 md:pl-16 md:pr-8 lg:w-[45%] lg:pl-20">
        <HeroHeadline parts={slide.headline} textTheme={slide.textTheme} />

        <p
          className={cn(
            "mt-5 max-w-[420px] text-[15px] leading-relaxed sm:text-base",
            "font-[family-name:var(--font-hero-sans)]",
            slide.textTheme === "light" ? "text-white/90" : "text-neutral-600"
          )}
        >
          {slide.subtext}
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          {slide.buttons.map((btn) => (
            <HeroButton key={btn.label} {...btn} />
          ))}
        </div>
      </div>
    </div>
  );
}

function DotIndicators({
  count,
  activeIndex,
  textTheme,
  onSelect,
}: {
  count: number;
  activeIndex: number;
  textTheme: "light" | "dark";
  onSelect: (index: number) => void;
}) {
  const isLightText = textTheme === "light";

  return (
    <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2">
      {Array.from({ length: count }).map((_, i) => {
        const isActive = i === activeIndex;

        return (
          <button
            key={i}
            type="button"
            aria-label={`Go to slide ${i + 1}`}
            aria-current={isActive ? "true" : undefined}
            onClick={() => onSelect(i)}
            className={cn(
              "h-2 rounded-full transition-all duration-300 ease-out",
              isActive ? "w-5" : "w-2",
              isActive
                ? isLightText
                  ? "bg-white"
                  : "bg-neutral-800"
                : isLightText
                  ? "bg-white/40 hover:bg-white/60"
                  : "bg-neutral-300 hover:bg-neutral-400"
            )}
          />
        );
      })}
    </div>
  );
}

export type HeroCarouselProps = {
  slides?: HeroSlide[];
  autoAdvanceMs?: number;
};

export default function HeroCarousel({
  slides = HERO_SLIDES,
  autoAdvanceMs = AUTO_ADVANCE_MS,
}: HeroCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const goTo = useCallback(
    (index: number) => {
      setActiveIndex((index + slides.length) % slides.length);
    },
    [slides.length]
  );

  useEffect(() => {
    if (isPaused) return;

    const timer = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, autoAdvanceMs);

    return () => window.clearInterval(timer);
  }, [isPaused, autoAdvanceMs, slides.length]);

  const activeSlide = slides[activeIndex];

  return (
    <section
      className="relative w-full overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-roledescription="carousel"
      aria-label="Hero carousel"
    >
      <div className="relative h-[520px] sm:h-[500px] md:h-[480px]">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            role="group"
            aria-roledescription="slide"
            aria-label={`Slide ${index + 1} of ${slides.length}`}
            aria-hidden={index !== activeIndex}
            className={cn(
              "absolute inset-0 transition-opacity duration-700 ease-in-out",
              index === activeIndex
                ? "pointer-events-auto z-10 opacity-100"
                : "pointer-events-none z-0 opacity-0"
            )}
          >
            <SlideContent slide={slide} />
          </div>
        ))}

        <DotIndicators
          count={slides.length}
          activeIndex={activeIndex}
          textTheme={activeSlide.textTheme}
          onSelect={goTo}
        />
      </div>
    </section>
  );
}
