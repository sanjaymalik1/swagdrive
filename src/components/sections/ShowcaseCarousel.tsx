"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

/** Swap `src` in later — placeholders only for now. */
const SLIDES = [
  { id: 1, label: "Employee kits", tone: "bg-brand-navy-deep text-brand-cream" },
  { id: 2, label: "Client gifting", tone: "bg-brand-navy text-brand-cream" },
  { id: 3, label: "Event swag", tone: "bg-brand-gold text-brand-navy-deep" },
  { id: 4, label: "Onboarding boxes", tone: "bg-brand-gold-soft text-brand-navy-deep" },
  { id: 5, label: "Brand merch", tone: "bg-[#e8e2c8] text-brand-navy" },
] as const;

const HOLD_MS = 3000;
const TRANSITION_MS = 700;

function relativeOffset(index: number, active: number, length: number) {
  let offset = index - active;
  if (offset > length / 2) offset -= length;
  if (offset < -length / 2) offset += length;
  return offset;
}

export default function ShowcaseCarousel() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const length = SLIDES.length;

  useEffect(() => {
    if (paused) return;

    const id = window.setInterval(() => {
      setActive((current) => (current + 1) % length);
    }, HOLD_MS);

    return () => window.clearInterval(id);
  }, [paused, length]);

  return (
    <section
      aria-roledescription="carousel"
      aria-label="Swag inspiration"
      className="relative overflow-hidden bg-brand-cream pb-16 pt-4 sm:pb-20 sm:pt-6"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="relative mx-auto flex h-[220px] w-full items-center justify-center sm:h-[300px] md:h-[380px] lg:h-[440px]">
        {SLIDES.map((slide, index) => {
          const offset = relativeOffset(index, active, length);
          const isCenter = offset === 0;
          const isVisible = Math.abs(offset) <= 2;

          if (!isVisible) return null;

          return (
            <div
              key={slide.id}
              role="group"
              aria-roledescription="slide"
              aria-label={`${index + 1} of ${length}`}
              aria-hidden={!isCenter}
              className={cn(
                "absolute aspect-[4/3] w-[72%] max-w-[520px] overflow-hidden rounded-xl sm:w-[58%] md:w-[46%] lg:w-[40%]",
                "transition-all ease-out",
                isCenter
                  ? "z-20 shadow-[0_20px_50px_-20px_rgba(0,24,64,0.45)] ring-2 ring-brand-gold"
                  : "z-10 shadow-md ring-1 ring-brand-navy/10"
              )}
              style={{
                transform: `translateX(${offset * 72}%) scale(${isCenter ? 1 : 0.86})`,
                opacity: isCenter ? 1 : Math.abs(offset) === 1 ? 0.55 : 0.25,
                transitionDuration: `${TRANSITION_MS}ms`,
              }}
            >
              <div
                className={cn(
                  "flex h-full w-full flex-col items-center justify-center gap-2",
                  slide.tone
                )}
              >
                <span className="text-xs font-medium tracking-wide uppercase opacity-70">
                  Placeholder
                </span>
                <span className="text-lg font-semibold sm:text-xl">{slide.label}</span>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-8 flex items-center justify-center gap-2">
        {SLIDES.map((slide, index) => (
          <button
            key={slide.id}
            type="button"
            aria-label={`Go to slide ${index + 1}`}
            onClick={() => setActive(index)}
            className={cn(
              "h-1.5 rounded-full transition-all duration-300",
              index === active
                ? "w-6 bg-brand-navy"
                : "w-1.5 bg-brand-navy/25 hover:bg-brand-navy/40"
            )}
          />
        ))}
      </div>
    </section>
  );
}
