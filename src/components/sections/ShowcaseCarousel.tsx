"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const SLIDES = [
  {
    id: "welcome-kits",
    category: "Onboarding",
    title: "Welcome kits",
    description: "First-day experiences that feel considered.",
    src: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=1800&q=90",
    objectPosition: "50% 28%",
  },
  {
    id: "client-gifting",
    category: "Relationships",
    title: "Client gifting",
    description: "Packages that deepen partnerships that matter.",
    src: "https://images.unsplash.com/photo-1513885535751-8b9238bd345a?auto=format&fit=crop&w=1800&q=90",
    objectPosition: "50% 42%",
  },
  {
    id: "drinkware",
    category: "Everyday",
    title: "Branded drinkware",
    description: "Pieces people keep—and use—every day.",
    src: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1800&q=90",
    objectPosition: "50% 38%",
  },
  {
    id: "apparel",
    category: "Wearables",
    title: "Apparel & merch",
    description: "Brand moments made to be worn with pride.",
    src: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&w=1800&q=90",
    objectPosition: "50% 25%",
  },
  {
    id: "desk",
    category: "Workspace",
    title: "Desk essentials",
    description: "Thoughtful tools for the modern office.",
    src: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1800&q=90",
    objectPosition: "50% 45%",
  },
  {
    id: "packaging",
    category: "Unboxing",
    title: "Luxury packaging",
    description: "Presentation designed to feel memorable.",
    src: "https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?auto=format&fit=crop&w=1800&q=90",
    objectPosition: "48% 40%",
  },
] as const;

const AUTOPLAY_MS = 4500;
const TRANSITION_MS = 850;
const SWIPE_THRESHOLD = 48;
const EASE = "cubic-bezier(0.22, 1, 0.36, 1)";

/** Visible coverflow slots — cards move slot-to-slot (never teleport). */
const SLOTS = [-2, -1, 0, 1, 2] as const;

const SHADOW_ACTIVE = [
  "inset 0 1px 0 rgba(255,255,255,0.28)",
  "0 0 0 1px rgba(255,225,70,0.22)",
  "0 10px 24px rgba(15,23,42,0.045)",
  "0 28px 56px rgba(15,23,42,0.07)",
].join(", ");

const SHADOW_ACTIVE_HOVER = [
  "inset 0 1px 0 rgba(255,255,255,0.32)",
  "0 0 0 1px rgba(255,225,70,0.28)",
  "0 12px 28px rgba(15,23,42,0.055)",
  "0 34px 68px rgba(15,23,42,0.085)",
].join(", ");

const SHADOW_SIDE = [
  "inset 0 1px 0 rgba(255,255,255,0.1)",
  "0 0 0 1px rgba(255,255,255,0.1)",
  "0 0 0 1px rgba(255,225,70,0.06)",
  "0 8px 20px rgba(15,23,42,0.04)",
].join(", ");

const SHADOW_FAR = [
  "inset 0 1px 0 rgba(255,255,255,0.06)",
  "0 0 0 1px rgba(255,255,255,0.08)",
  "0 0 0 1px rgba(255,225,70,0)",
  "0 6px 14px rgba(15,23,42,0.03)",
].join(", ");

const FILTER_ACTIVE = "brightness(1.02) contrast(1.06) saturate(1.05)";
const FILTER_ACTIVE_HOVER = "brightness(1.02) contrast(1.1) saturate(1.05)";
const FILTER_SIDE = "brightness(0.85) saturate(0.78)";
const FILTER_FAR = "brightness(0.8) saturate(0.72)";

function slotStyle(slot: number, isActive: boolean, activeHover: boolean) {
  const distance = Math.abs(slot);
  const translatePct = slot === 0 ? 0 : slot * (distance === 1 ? 73 : 98);
  const scale = isActive ? 1 : distance === 1 ? 0.9 : 0.82;
  const opacity = isActive ? 1 : distance === 1 ? 0.58 : 0.28;
  const zIndex = isActive ? 40 : 30 - distance * 5;
  const filter = isActive
    ? activeHover
      ? FILTER_ACTIVE_HOVER
      : FILTER_ACTIVE
    : distance === 1
      ? FILTER_SIDE
      : FILTER_FAR;
  const boxShadow = isActive
    ? activeHover
      ? SHADOW_ACTIVE_HOVER
      : SHADOW_ACTIVE
    : distance === 1
      ? SHADOW_SIDE
      : SHADOW_FAR;

  return { translatePct, scale, opacity, zIndex, filter, boxShadow };
}

export default function ShowcaseCarousel() {
  const [active, setActive] = useState(0);
  const [reduceMotion, setReduceMotion] = useState(false);
  const [dragX, setDragX] = useState(0);
  const [isSwiping, setIsSwiping] = useState(false);
  const [activeHover, setActiveHover] = useState(false);

  const length = SLIDES.length;
  const pointerId = useRef<number | null>(null);
  const startX = useRef(0);
  const deltaX = useRef(0);
  const didSwipe = useRef(false);
  const suppressClick = useRef(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduceMotion(media.matches);
    sync();
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, []);

  const focusIndex = useCallback(
    (index: number) => {
      setActiveHover(false);
      setActive(((index % length) + length) % length);
    },
    [length]
  );

  const focusNext = useCallback(() => {
    setActiveHover(false);
    setActive((current) => (current + 1) % length);
  }, [length]);

  const focusPrev = useCallback(() => {
    setActiveHover(false);
    setActive((current) => (current - 1 + length) % length);
  }, [length]);

  /**
   * Continuous autoplay — dwell AUTOPLAY_MS after each change, then glide again.
   */
  useEffect(() => {
    if (reduceMotion || isSwiping) return;

    const id = window.setTimeout(() => {
      setActiveHover(false);
      setActive((current) => (current + 1) % length);
    }, AUTOPLAY_MS);

    return () => window.clearTimeout(id);
  }, [active, reduceMotion, isSwiping, length]);

  const onPointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    if (event.button !== 0) return;
    pointerId.current = event.pointerId;
    startX.current = event.clientX;
    deltaX.current = 0;
    didSwipe.current = false;
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const onPointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (pointerId.current !== event.pointerId) return;
    const delta = event.clientX - startX.current;
    deltaX.current = delta;

    if (!didSwipe.current && Math.abs(delta) > 12) {
      didSwipe.current = true;
      setIsSwiping(true);
    }

    if (didSwipe.current && !reduceMotion) {
      setDragX(delta * 0.35);
    }
  };

  const onPointerUp = (event: React.PointerEvent<HTMLDivElement>) => {
    if (pointerId.current !== event.pointerId) return;

    const delta = deltaX.current;
    const swiped = didSwipe.current;

    try {
      event.currentTarget.releasePointerCapture(event.pointerId);
    } catch {
      /* already released */
    }

    suppressClick.current = swiped;
    pointerId.current = null;
    didSwipe.current = false;
    setIsSwiping(false);
    setDragX(0);
    deltaX.current = 0;

    if (!swiped) return;
    if (delta <= -SWIPE_THRESHOLD) focusNext();
    else if (delta >= SWIPE_THRESHOLD) focusPrev();
  };

  const onKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      focusNext();
    } else if (event.key === "ArrowLeft") {
      event.preventDefault();
      focusPrev();
    }
  };

  const animating = !reduceMotion && !isSwiping;

  return (
    <section
      aria-label="Product showcase"
      className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24"
    >
      <div
        role="region"
        aria-roledescription="carousel"
        aria-label="Coverflow product showcase"
        aria-live="polite"
        tabIndex={0}
        onKeyDown={onKeyDown}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        className={cn(
          "relative mx-auto flex w-full touch-pan-y items-center justify-center outline-none",
          "h-[420px] sm:h-[520px] md:h-[620px] lg:h-[680px]",
          "focus-visible:ring-2 focus-visible:ring-brand-navy/20 focus-visible:ring-offset-4",
          "[perspective:1200px]",
          isSwiping ? "cursor-grabbing select-none" : "cursor-grab"
        )}
      >
        {SLOTS.map((slot) => {
          const index = ((active + slot) % length + length) % length;
          const slide = SLIDES[index];
          const isActive = slot === 0;
          const {
            translatePct,
            scale,
            opacity,
            zIndex,
            filter,
            boxShadow,
          } = slotStyle(slot, isActive, activeHover);

          const skipTransition = !animating;
          const duration = skipTransition ? "0ms" : `${TRANSITION_MS}ms`;

          return (
            <figure
              key={slide.id}
              role="group"
              aria-roledescription="slide"
              aria-label={`${slide.title}, ${index + 1} of ${length}`}
              aria-hidden={!isActive}
              className={cn(
                "absolute isolate overflow-hidden rounded-[24px]",
                "w-[min(88vw,750px)] aspect-[750/600]",
                "backface-hidden will-change-transform",
                "motion-reduce:will-change-auto",
                "cursor-pointer",
                !isActive && "max-md:hidden"
              )}
              style={{
                zIndex,
                transform: `translate3d(calc(${translatePct}% + ${dragX}px), 0, ${
                  isActive ? 48 : 0
                }px) scale(${scale})`,
                opacity,
                boxShadow,
                WebkitBackfaceVisibility: "hidden",
                transitionProperty: skipTransition
                  ? "none"
                  : "transform, opacity, box-shadow",
                transitionDuration: duration,
                transitionTimingFunction: EASE,
              }}
              onMouseEnter={() => {
                if (isActive) setActiveHover(true);
              }}
              onMouseLeave={() => {
                if (isActive) setActiveHover(false);
              }}
              onPointerDown={(event) => {
                if (!isActive) {
                  event.stopPropagation();
                }
              }}
              onClick={() => {
                if (isActive) return;
                if (suppressClick.current) {
                  suppressClick.current = false;
                  return;
                }
                focusIndex(index);
              }}
            >
              <Image
                src={slide.src}
                alt=""
                fill
                sizes="(max-width: 768px) 88vw, 750px"
                className="object-cover object-center"
                style={{
                  objectFit: "cover",
                  objectPosition: slide.objectPosition,
                  filter,
                  transform: "translateZ(0)",
                  transitionProperty: skipTransition ? "none" : "filter",
                  transitionDuration: duration,
                  transitionTimingFunction: EASE,
                }}
                priority
                draggable={false}
              />

              <div
                aria-hidden
                className="pointer-events-none absolute inset-x-0 top-0 h-[42%]"
                style={{
                  background:
                    "linear-gradient(to bottom, rgba(255,255,255,0.16) 0%, rgba(255,255,255,0.04) 42%, transparent 100%)",
                  opacity: isActive ? 1 : 0,
                  transitionProperty: skipTransition ? "none" : "opacity",
                  transitionDuration: duration,
                  transitionTimingFunction: EASE,
                }}
              />

              <div
                aria-hidden
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, rgba(0,24,64,0.68) 0%, rgba(16,42,113,0.28) 32%, rgba(0,24,64,0.05) 55%, transparent 72%)",
                  opacity: isActive ? 1 : 0,
                  transitionProperty: skipTransition ? "none" : "opacity",
                  transitionDuration: duration,
                  transitionTimingFunction: EASE,
                }}
              />

              <figcaption
                className="absolute inset-x-0 bottom-0 z-[1] p-6 text-left sm:p-8"
                style={{
                  opacity: isActive ? 1 : 0,
                  transform: isActive
                    ? "translate3d(0,0,0)"
                    : "translate3d(0,12px,0)",
                  transitionProperty: skipTransition
                    ? "none"
                    : "opacity, transform",
                  transitionDuration: duration,
                  transitionTimingFunction: EASE,
                }}
              >
                <p className="text-[0.625rem] font-semibold uppercase tracking-[0.18em] text-[#fff44f] sm:text-[0.6875rem]">
                  {slide.category}
                </p>
                <p className="mt-3 text-xl font-bold tracking-[-0.025em] text-white sm:mt-3.5 sm:text-2xl md:text-[1.75rem] md:leading-tight">
                  {slide.title}
                </p>
                <p className="mt-3 max-w-md text-sm leading-7 text-white/75 sm:mt-3.5 sm:text-[0.9375rem] sm:leading-7">
                  {slide.description}
                </p>
              </figcaption>
            </figure>
          );
        })}
      </div>
    </section>
  );
}
