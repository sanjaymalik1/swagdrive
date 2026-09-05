"use client";

import { useState } from "react";

const STEPS = [
  {
    title: "Build Your Shop",
    description: "Design it to look like your brand",
    unselectedIcon: "/platform/swag-store/how-it-works/unselected-1.png",
    selectedIcon: "/platform/swag-store/how-it-works/selected-1.png",
    image: "/platform/swag-store/how-it-works/step-1.png",
    imageAlt: "Build your shop",
  },
  {
    title: "Add Your Swag",
    description: "Include existing inventory or add pre-orders",
    unselectedIcon: "/platform/swag-store/how-it-works/unselected-2.png",
    selectedIcon: "/platform/swag-store/how-it-works/selected-2.png",
    image: "/platform/swag-store/how-it-works/step-2.png",
    imageAlt: "Add your swag",
  },
  {
    title: "Let Your Recipients Shop",
    description:
      "Send the link or automate delivery. Let users use their credit card, points, or shop credit.",
    unselectedIcon: "/platform/swag-store/how-it-works/unselected-3.png",
    selectedIcon: "/platform/swag-store/how-it-works/selected-3.png",
    image: "/platform/swag-store/how-it-works/step-3.png",
    imageAlt: "Let your recipients shop",
  },
  {
    title: "Get Your Payout",
    description: "Shop earnings are converted directly into SwagDrive Points!",
    unselectedIcon: "/platform/swag-store/how-it-works/unselected-4.png",
    selectedIcon: "/platform/swag-store/how-it-works/selected-4.png",
    image: "/platform/swag-store/how-it-works/step-4.png",
    imageAlt: "Get your payout",
  },
] as const;

export default function SwagStoreHowItWorksSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="bg-white">
      <div className="mx-auto w-full max-w-[1440px] px-5 py-16 min-[480px]:px-10 min-[992px]:py-24">
        <h2 className="m-0 text-center font-[family-name:var(--font-satoshi)] text-[2rem] leading-[1.2] font-bold text-black min-[768px]:text-[2.375rem] min-[992px]:text-[3rem]">
          How it Works
        </h2>

        {/* Desktop / tablet */}
        <div className="mt-12 hidden min-[768px]:flex min-[768px]:items-start min-[768px]:gap-8 min-[992px]:mt-16 min-[992px]:gap-10">
          <div className="flex w-[40%] shrink-0 flex-col gap-4">
            {STEPS.map((step, index) => {
              const isActive = index === activeIndex;
              return (
                <button
                  key={step.title}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  onMouseEnter={() => setActiveIndex(index)}
                  className={`w-full rounded-2xl border px-5 py-5 text-left transition-colors ${
                    isActive
                      ? "border-blue-primary/20 bg-yellow-tertiary"
                      : "border-blue-primary/10 bg-white"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <span
                      className={`flex size-8 shrink-0 items-center justify-center rounded-full font-[family-name:var(--font-satoshi)] text-sm font-bold ${
                        isActive
                          ? "bg-blue-primary text-yellow-secondary"
                          : "bg-blue-primary/10 text-blue-primary"
                      }`}
                    >
                      {index + 1}
                    </span>
                    <div className="min-w-0">
                      <div className="mb-2 font-[family-name:var(--font-satoshi)] text-2xl leading-[1.2] font-semibold text-blue-primary">
                        {step.title}
                      </div>
                      <div className="font-[family-name:var(--font-overpass)] text-base leading-[1.3] text-black">
                        {step.description}
                      </div>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          <div className="min-w-0 flex-1 self-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={STEPS[activeIndex].image}
              alt={STEPS[activeIndex].imageAlt}
              className="block h-auto w-full object-contain"
            />
          </div>
        </div>

        {/* Mobile accordion */}
        <div className="mt-9 flex flex-col gap-4 min-[768px]:hidden">
          {STEPS.map((step, index) => {
            const isActive = index === activeIndex;
            return (
              <button
                key={step.title}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`flex w-full flex-col gap-4 rounded-2xl border p-5 text-left ${
                  isActive
                    ? "border-blue-primary/20 bg-yellow-tertiary"
                    : "border-blue-primary/10 bg-white"
                }`}
              >
                <div className="flex items-start gap-4">
                  <span
                    className={`flex size-8 shrink-0 items-center justify-center rounded-full font-[family-name:var(--font-satoshi)] text-sm font-bold ${
                      isActive
                        ? "bg-blue-primary text-yellow-secondary"
                        : "bg-blue-primary/10 text-blue-primary"
                    }`}
                  >
                    {index + 1}
                  </span>
                  <div className="min-w-0">
                    <div className="mb-2 font-[family-name:var(--font-satoshi)] text-2xl leading-[1.2] font-semibold text-blue-primary">
                      {step.title}
                    </div>
                    <div className="font-[family-name:var(--font-overpass)] text-base leading-[1.2] text-black">
                      {step.description}
                    </div>
                  </div>
                </div>
                {isActive ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={step.image}
                    alt={step.imageAlt}
                    className="h-auto w-full object-contain"
                  />
                ) : null}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
