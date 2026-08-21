"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { OFFERING_TABS, type OfferingTab } from "./offerings-data";
import {
  CheckIcon,
  ChevronIcon,
  OfferingsTabIcon,
} from "./OfferingsIcons";

function LearnMore({ href }: { href: string }) {
  return (
    <Link
      href={href}
      className="font-[family-name:var(--font-overpass)] text-xs leading-3 font-semibold tracking-[1.8px] text-black uppercase underline underline-offset-4 min-[768px]:text-[10px] min-[768px]:leading-[14px] min-[768px]:tracking-[1px] min-[1025px]:text-xs min-[1025px]:leading-3 min-[1025px]:tracking-[1.8px]"
    >
      Learn More
    </Link>
  );
}

function FeatureList({
  items,
  color,
  stacked,
}: {
  items: string[];
  color: string;
  stacked?: boolean;
}) {
  return (
    <ul
      className={cn(
        "m-0 flex list-none flex-wrap p-0",
        stacked
          ? "flex-col gap-3.5 min-[768px]:gap-3 min-[1025px]:gap-3.5"
          : "justify-around gap-x-2 gap-y-2 min-[768px]:justify-around min-[1025px]:justify-around"
      )}
    >
      {items.map((item) => (
        <li
          key={item}
          className={cn(
            "flex items-center gap-2.5 font-[family-name:var(--font-overpass)] text-[10px] leading-[22px] font-semibold tracking-[0.25px] text-black min-[768px]:text-xs min-[768px]:leading-[22px] min-[1025px]:text-sm min-[1025px]:leading-[22px]",
            !stacked &&
              "w-[48%] min-[768px]:w-auto min-[768px]:flex-none"
          )}
        >
          <CheckIcon color={color} />
          {item}
        </li>
      ))}
    </ul>
  );
}

function BrandRow({ tab }: { tab: OfferingTab }) {
  if (!tab.brands?.length) return null;
  return (
    <div className="flex flex-wrap items-center justify-around gap-x-4 gap-y-3">
      {tab.brands.map((brand) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          key={brand.alt + brand.src}
          src={brand.src}
          alt={brand.alt}
          width={brand.width}
          height={brand.height}
          className="h-auto max-h-[26px] w-auto object-contain"
        />
      ))}
    </div>
  );
}

function ShopsPanel({ tab }: { tab: OfferingTab }) {
  return (
    <div className="flex h-full min-h-0 flex-col min-[768px]:flex-row">
      <div
        className="flex min-h-0 min-w-0 flex-1 flex-col items-center justify-center overflow-hidden px-5 py-6 min-[768px]:w-[68%] min-[768px]:px-5 min-[768px]:py-7 min-[1025px]:w-[72%] min-[1025px]:px-8 min-[1025px]:py-8"
        style={{ backgroundColor: tab.panelBg }}
      >
        <h3
          className="m-0 mb-4 w-full shrink-0 text-center font-[family-name:var(--font-satoshi)] text-lg leading-6 font-bold min-[768px]:mb-5 min-[768px]:text-2xl min-[768px]:leading-[30px] min-[1025px]:mb-6 min-[1025px]:text-[32px] min-[1025px]:leading-9"
          style={{ color: tab.headingColor }}
        >
          {tab.heading}
        </h3>
        {tab.heroImage ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={tab.heroImage}
            alt=""
            className="min-h-0 w-full max-w-[920px] flex-1 object-contain"
          />
        ) : null}
      </div>

      <div
        className="flex w-full shrink-0 flex-col overflow-y-auto px-8 py-6 min-[768px]:w-[32%] min-[768px]:px-5 min-[768px]:py-7 min-[1025px]:w-[28%] min-[1025px]:px-8 min-[1025px]:py-8"
        style={{ backgroundColor: tab.listBg }}
      >
        <p className="m-0 mb-4 font-[family-name:var(--font-overpass)] text-[10px] leading-3 font-bold tracking-[1px] text-black uppercase min-[1025px]:mb-5">
          {tab.listEyebrow}
        </p>
        <FeatureList items={tab.listItems} color={tab.accent} stacked />
        <div className="mt-8 text-center min-[1025px]:mt-10">
          <LearnMore href={tab.href} />
        </div>
      </div>
    </div>
  );
}

function CardsPanel({ tab }: { tab: OfferingTab }) {
  return (
    <div className="flex h-full min-h-0 flex-col">
      <div
        className="flex min-h-0 flex-1 flex-col overflow-hidden px-6 pt-6 pb-4 min-[768px]:px-[38px] min-[768px]:pt-7 min-[768px]:pb-4 min-[1025px]:px-[45px] min-[1025px]:pt-7"
        style={{ backgroundColor: tab.panelBg }}
      >
        <h3
          className="m-0 mb-4 shrink-0 text-center font-[family-name:var(--font-satoshi)] text-lg leading-6 font-bold min-[768px]:mb-5 min-[768px]:text-2xl min-[768px]:leading-[30px] min-[1025px]:mb-6 min-[1025px]:text-[32px] min-[1025px]:leading-10"
          style={{ color: tab.headingColor }}
        >
          {tab.heading}
        </h3>
        <div
          className="offerings-card-scroll flex min-h-0 flex-1 flex-nowrap gap-[22px] overflow-x-auto pb-3 min-[768px]:gap-2 min-[768px]:overflow-visible min-[768px]:px-0 min-[1025px]:gap-6 min-[1025px]:px-[52px]"
          style={{ ["--offerings-scroll" as string]: tab.scrollColor }}
        >
          {tab.cards?.map((card) => (
            <div
              key={card.title}
              className="flex min-h-0 min-w-[220px] flex-1 flex-col rounded-lg bg-white p-2.5 px-[9px] min-[768px]:min-w-0"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={card.image}
                alt={card.title}
                className="mb-2 min-h-0 w-full flex-1 rounded-sm object-cover object-top"
              />
              <h4 className="m-0 shrink-0 font-[family-name:var(--font-overpass)] text-sm leading-5 font-semibold text-black min-[1025px]:text-base min-[1025px]:leading-5">
                {card.title}
              </h4>
              {card.description ? (
                <p className="m-0 mt-0.5 shrink-0 font-[family-name:var(--font-overpass)] text-[13px] leading-[18px] tracking-[0.25px] text-[#4F5052]">
                  {card.description}
                </p>
              ) : null}
            </div>
          ))}
        </div>
        <div className="mt-3 hidden shrink-0 text-center min-[768px]:block">
          <LearnMore href={tab.href} />
        </div>
      </div>
      <div
        className="shrink-0 px-8 py-5 min-[768px]:px-6 min-[768px]:py-5 min-[1025px]:px-9 min-[1025px]:py-5"
        style={{ backgroundColor: tab.listBg }}
      >
        <FeatureList items={tab.listItems} color={tab.accent} />
        <div className="mt-4 text-center min-[768px]:hidden">
          <LearnMore href={tab.href} />
        </div>
        {tab.brands?.length ? (
          <div className="mt-4">
            <BrandRow tab={tab} />
          </div>
        ) : null}
      </div>
    </div>
  );
}

function KudosPanel({ tab }: { tab: OfferingTab }) {
  return (
    <div className="flex h-full min-h-0 flex-col min-[768px]:flex-row">
      <div
        className="flex w-full flex-col overflow-y-auto px-6 pt-7 pb-5 min-[768px]:w-[49%] min-[768px]:px-6 min-[768px]:pt-7 min-[1025px]:w-[40%] min-[1025px]:px-[34px] min-[1025px]:pt-9 min-[1025px]:pb-5"
        style={{ backgroundColor: tab.panelBg }}
      >
        <h3
          className="m-0 mb-4 px-2 text-center font-[family-name:var(--font-satoshi)] text-lg leading-6 font-bold min-[768px]:mb-4 min-[768px]:text-2xl min-[768px]:leading-[30px] min-[1025px]:mb-5 min-[1025px]:text-[32px] min-[1025px]:leading-10"
          style={{ color: tab.headingColor }}
        >
          {tab.heading}
        </h3>
        <FeatureList items={tab.listItems} color={tab.accent} stacked />
        <div className="mt-6 text-center">
          <LearnMore href={tab.href} />
        </div>
        {tab.kudosImageMobile ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={tab.kudosImageMobile}
            alt=""
            className="mt-6 w-full object-contain min-[768px]:hidden"
          />
        ) : null}
      </div>
      <div
        className="hidden min-h-0 min-w-0 items-end justify-end overflow-hidden px-[30px] pt-10 min-[768px]:flex min-[768px]:w-[51%] min-[1025px]:w-[60%]"
        style={{ backgroundColor: tab.listBg }}
      >
        {tab.kudosImage ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={tab.kudosImage}
            alt=""
            className="h-full w-full object-contain object-bottom"
          />
        ) : null}
      </div>
    </div>
  );
}

function OfferingPanel({ tab }: { tab: OfferingTab }) {
  if (tab.layout === "shops") return <ShopsPanel tab={tab} />;
  if (tab.layout === "kudos") return <KudosPanel tab={tab} />;
  return <CardsPanel tab={tab} />;
}

function TabButton({
  tab,
  selected,
  onSelect,
}: {
  tab: OfferingTab;
  selected: boolean;
  onSelect: () => void;
}) {
  const paddedIcon =
    tab.id === "gifting" ||
    tab.id === "shops" ||
    tab.id === "swag" ||
    tab.id === "snacks";

  return (
    <button
      type="button"
      role="tab"
      aria-selected={selected}
      onClick={onSelect}
      className={cn(
        "relative flex w-full flex-row items-center gap-6 px-7 py-5 text-left font-[family-name:var(--font-satoshi)] text-lg leading-6 font-bold text-[#4F5052] min-[768px]:flex-1 min-[768px]:basis-0 min-[768px]:flex-col min-[768px]:justify-start min-[768px]:gap-1 min-[768px]:border-r min-[768px]:border-r-[#CDCED0] min-[768px]:px-2.5 min-[768px]:py-1 min-[768px]:text-center min-[768px]:text-[10px] min-[768px]:leading-4 min-[1025px]:gap-2.5 min-[1025px]:px-[11px] min-[1025px]:py-[11px] min-[1025px]:text-[15px] min-[1025px]:leading-[18px]",
        selected ? "bg-[#EFF0F2]" : "bg-[#F8F8F8] hover:bg-[#EFF0F2]",
        "min-[768px]:border-b-[3px] min-[1025px]:border-b-[5px]",
        "last:min-[768px]:border-r-0"
      )}
      style={{
        borderBottomColor: selected ? tab.accent : "transparent",
      }}
    >
      <span
        className={cn(
          "flex shrink-0 items-center justify-center",
          paddedIcon && "min-[1025px]:pb-2.5"
        )}
      >
        <OfferingsTabIcon id={tab.id} />
      </span>
      <span className="min-[768px]:text-center">
        {tab.labelBreak ? (
          <>
            <span className="min-[768px]:hidden">{tab.label}</span>
            <span className="hidden min-[768px]:inline">
              In-Person
              <br />
              & Events
            </span>
          </>
        ) : (
          tab.label
        )}
      </span>
      <span
        className={cn(
          "ml-auto min-[768px]:hidden",
          selected && "rotate-180"
        )}
      >
        <ChevronIcon />
      </span>
    </button>
  );
}

export default function OfferingsSection() {
  const [activeId, setActiveId] = useState(OFFERING_TABS[0].id);
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const active =
    OFFERING_TABS.find((tab) => tab.id === activeId) ?? OFFERING_TABS[0];

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="bg-white pb-10 min-[768px]:pb-11">
      <div
        className={cn(
          "mx-auto w-full max-w-[1440px] transition-[opacity,transform] duration-700 ease-out",
          visible
            ? "translate-y-0 opacity-100"
            : "translate-y-6 opacity-0"
        )}
      >
        <div className="mx-auto flex max-w-[650px] flex-col items-center px-11 pt-20 pb-10 text-center min-[768px]:max-w-[388px] min-[768px]:px-0 min-[768px]:pt-16 min-[768px]:pb-8 min-[1025px]:max-w-[650px] min-[1025px]:pt-[54px] min-[1025px]:pb-[27px]">
          <p className="m-0 mb-2 font-[family-name:var(--font-overpass)] text-[10px] leading-3 font-bold tracking-[1px] text-[#2D2D2D] uppercase min-[768px]:mb-2 min-[768px]:leading-[14px] min-[1025px]:mb-1 min-[1025px]:text-base min-[1025px]:leading-6">
            OUR OFFERINGS
          </p>
          <h2 className="m-0 mb-2 font-[family-name:var(--font-satoshi)] text-lg leading-6 font-bold text-[#2D2D2D] min-[768px]:mb-2 min-[768px]:text-2xl min-[768px]:leading-[30px] min-[1025px]:mb-[18px] min-[1025px]:text-[32px] min-[1025px]:leading-10">
            Supercharge Your Engagement
          </h2>
          <p className="m-0 max-w-[464px] font-[family-name:var(--font-overpass)] text-sm leading-5 tracking-[0.16px] text-[#2D2D2D] min-[1025px]:text-lg min-[1025px]:leading-7 min-[1025px]:tracking-[0.25px]">
            Our offerings and curated swag catalog will take your engagement to
            new heights.
          </p>
        </div>

        <div className="px-0 min-[768px]:px-14 min-[1025px]:px-24 min-[1281px]:px-[11rem]">
          <div className="overflow-hidden bg-white min-[768px]:rounded-lg min-[768px]:shadow-[0_4px_24px_rgba(34,30,38,0.08)]">
            <div className="hidden min-[768px]:block">
              <div role="tablist" aria-label="Offerings" className="flex">
                {OFFERING_TABS.map((tab) => (
                  <TabButton
                    key={tab.id}
                    tab={tab}
                    selected={tab.id === activeId}
                    onSelect={() => setActiveId(tab.id)}
                  />
                ))}
              </div>
              {active ? (
                <div
                  role="tabpanel"
                  className="h-[480px] overflow-hidden min-[1025px]:h-[570px]"
                >
                  <OfferingPanel tab={active} />
                </div>
              ) : null}
            </div>

            <div className="min-[768px]:hidden">
              {OFFERING_TABS.map((tab) => {
                const open = tab.id === activeId;
                return (
                  <div key={tab.id}>
                    <TabButton
                      tab={tab}
                      selected={open}
                      onSelect={() => setActiveId(tab.id)}
                    />
                    {open ? <OfferingPanel tab={tab} /> : null}
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
