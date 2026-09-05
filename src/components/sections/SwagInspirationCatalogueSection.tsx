"use client";

import { useState } from "react";

const CATEGORIES = [
  "All",
  "Apparel",
  "Drinkware",
  "Tech",
  "Kits",
  "Events",
] as const;

type Category = (typeof CATEGORIES)[number];

type Look = {
  id: string;
  title: string;
  category: Exclude<Category, "All">;
  tags: string[];
  src: string;
  span: "tall" | "wide" | "square";
};

const LOOKS: Look[] = [
  {
    id: "1",
    title: "Founders welcome kit",
    category: "Kits",
    tags: ["Onboarding", "Premium"],
    src: "/landing-carousel/swagupcarousal1.png",
    span: "tall",
  },
  {
    id: "2",
    title: "Summit hoodie drop",
    category: "Apparel",
    tags: ["Events", "Brand"],
    src: "/landing-carousel/swagupcarousal2.png",
    span: "square",
  },
  {
    id: "3",
    title: "Desk essentials pack",
    category: "Tech",
    tags: ["Remote", "WFH"],
    src: "/landing-carousel/swagupcarousal3.png",
    span: "wide",
  },
  {
    id: "4",
    title: "Launch toast tumbler",
    category: "Drinkware",
    tags: ["Product launch"],
    src: "/landing-carousel/swagupcarousal4.png",
    span: "square",
  },
  {
    id: "5",
    title: "Field day tote set",
    category: "Events",
    tags: ["Outdoor", "Team"],
    src: "/landing-carousel/swagupcarousal5.png",
    span: "tall",
  },
  {
    id: "6",
    title: "Client delight box",
    category: "Kits",
    tags: ["ABM", "Gifting"],
    src: "/landing-carousel/swagupcarousal6.png",
    span: "square",
  },
  {
    id: "7",
    title: "Conference lanyard look",
    category: "Events",
    tags: ["Trade show"],
    src: "/landing-carousel/swagupcarousal7.png",
    span: "wide",
  },
  {
    id: "8",
    title: "Everyday brand tee",
    category: "Apparel",
    tags: ["Casual", "Core"],
    src: "/landing-carousel/swagupcarousal8.png",
    span: "square",
  },
  {
    id: "9",
    title: "Charged commute kit",
    category: "Tech",
    tags: ["Commute", "Utility"],
    src: "/landing-carousel/swagupcarousal2.png",
    span: "tall",
  },
  {
    id: "10",
    title: "Morning brew duo",
    category: "Drinkware",
    tags: ["Office", "Culture"],
    src: "/landing-carousel/swagupcarousal6.png",
    span: "square",
  },
  {
    id: "11",
    title: "All-hands anniversary set",
    category: "Kits",
    tags: ["Milestone"],
    src: "/landing-carousel/swagupcarousal4.png",
    span: "wide",
  },
  {
    id: "12",
    title: "Pop-up booth essentials",
    category: "Events",
    tags: ["Activation"],
    src: "/landing-carousel/swagupcarousal1.png",
    span: "square",
  },
];

function spanClass(span: Look["span"]) {
  switch (span) {
    case "tall":
      return "min-[768px]:row-span-2 aspect-[3/4] min-[768px]:aspect-auto min-[768px]:min-h-[28rem]";
    case "wide":
      return "min-[768px]:col-span-2 aspect-[16/10] min-[768px]:aspect-[21/10]";
    default:
      return "aspect-square";
  }
}

export default function SwagInspirationCatalogueSection() {
  const [active, setActive] = useState<Category>("All");

  const filtered =
    active === "All" ? LOOKS : LOOKS.filter((look) => look.category === active);

  return (
    <section id="catalogue" className="scroll-mt-24 bg-surface">
      <div className="mx-auto w-full max-w-[1440px] px-5 py-16 min-[480px]:px-10 min-[992px]:py-24">
        <div className="mx-auto max-w-[40rem] text-center">
          <h2 className="m-0 font-[family-name:var(--font-satoshi)] text-2xl leading-[1.15] font-bold text-blue-primary min-[768px]:text-[2.5rem] min-[992px]:text-[3rem]">
            Browse the lookbook
          </h2>
          <p className="m-0 mt-3 font-[family-name:var(--font-overpass)] text-sm leading-6 text-[#2C2D2E] min-[768px]:text-base min-[768px]:leading-7">
            Filter by category and hover a look for the story behind it.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-2 min-[768px]:mt-10 min-[768px]:gap-3">
          {CATEGORIES.map((category) => {
            const isActive = active === category;
            return (
              <button
                key={category}
                type="button"
                onClick={() => setActive(category)}
                className={
                  isActive
                    ? "cursor-pointer rounded-[3rem] bg-blue-primary px-4 py-2 font-[family-name:var(--font-overpass)] text-sm leading-none text-yellow-secondary transition-colors min-[768px]:px-5 min-[768px]:py-2.5 min-[768px]:text-base"
                    : "cursor-pointer rounded-[3rem] bg-white px-4 py-2 font-[family-name:var(--font-overpass)] text-sm leading-none text-blue-primary ring-1 ring-blue-primary/15 transition-colors hover:ring-blue-primary/35 min-[768px]:px-5 min-[768px]:py-2.5 min-[768px]:text-base"
                }
              >
                {category}
              </button>
            );
          })}
        </div>

        <div className="mt-10 grid grid-cols-1 gap-3 min-[480px]:grid-cols-2 min-[768px]:mt-12 min-[768px]:grid-cols-3 min-[768px]:gap-4 min-[1025px]:grid-cols-4">
          {filtered.map((look) => (
            <article
              key={look.id}
              className={`group relative overflow-hidden rounded-2xl bg-[#e8eef5] min-[768px]:rounded-[24px] ${spanClass(look.span)}`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={look.src}
                alt=""
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-blue-primary/0 transition-colors duration-300 group-hover:bg-blue-primary/72" />

              <div className="absolute inset-x-0 bottom-0 translate-y-3 p-5 opacity-0 transition-all duration-300 ease-out group-hover:translate-y-0 group-hover:opacity-100 min-[768px]:p-6">
                <p className="m-0 font-[family-name:var(--font-overpass)] text-xs tracking-[0.08em] text-yellow-secondary uppercase">
                  {look.category}
                </p>
                <h3 className="m-0 mt-1 font-[family-name:var(--font-satoshi)] text-lg leading-snug font-bold text-white min-[768px]:text-xl">
                  {look.title}
                </h3>
                <p className="m-0 mt-1.5 font-[family-name:var(--font-overpass)] text-sm text-white/80">
                  {look.tags.join(" · ")}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
