"use client";

import Image from "next/image";
import { useId } from "react";
import { cn } from "@/lib/utils";
import styles from "./HowItWorksSection.module.css";

type Feature = {
  title: string;
  body: string;
  translate?: string;
};

type ConnectorPath = {
  d: string;
  side: "left" | "right";
  delay: string;
  sx: number;
  sy: number;
  ex: number;
  ey: number;
};

const LEFT_PATHS: ConnectorPath[] = [
  {
    d: "M 332,104 Q 503,254 675,250",
    side: "left",
    delay: "0s",
    sx: 332,
    sy: 104,
    ex: 675,
    ey: 250,
  },
  {
    d: "M 204,250 Q 439,250 675,250",
    side: "left",
    delay: "0.5s",
    sx: 204,
    sy: 250,
    ex: 675,
    ey: 250,
  },
  {
    d: "M 332,396 Q 503,246 675,250",
    side: "left",
    delay: "1s",
    sx: 332,
    sy: 396,
    ex: 675,
    ey: 250,
  },
];

const RIGHT_PATHS: ConnectorPath[] = [
  {
    d: "M 1018,104 Q 846,254 675,250",
    side: "right",
    delay: "1.5s",
    sx: 1018,
    sy: 104,
    ex: 675,
    ey: 250,
  },
  {
    d: "M 1146,250 Q 910,250 675,250",
    side: "right",
    delay: "2s",
    sx: 1146,
    sy: 250,
    ex: 675,
    ey: 250,
  },
  {
    d: "M 1018,396 Q 846,246 675,250",
    side: "right",
    delay: "2.5s",
    sx: 1018,
    sy: 396,
    ex: 675,
    ey: 250,
  },
];

function getFeatures(companyName: string): { left: Feature[]; right: Feature[] } {
  return {
    left: [
      {
        title: "We Handle Everything End-to-End",
        body: `Inventory, packaging, dispatch, and tracking, all managed by ${companyName}, so you can focus on what matters.`,
        translate: "translate-x-24",
      },
      {
        title: "Operational Control",
        body: "Built-in approvals, budgets, and role-based access ensure visibility and governance across teams.",
        translate: "-translate-x-8",
      },
      {
        title: "Scalable Infrastructure",
        body: "Designed to support 200 to 20,000+ employees without adding operational complexity.",
        translate: "translate-x-24",
      },
    ],
    right: [
      {
        title: "Set Up Your Company Store",
        body: "Create a private store with curated products and kits for your team.",
        translate: "-translate-x-24",
      },
      {
        title: "Consistent Brand Experience",
        body: "Manage all internal merchandise, kits, and essentials in one platform—no spreadsheets or fragmented vendors.",
        translate: "translate-x-8",
      },
      {
        title: "Employees or Admins Place Requests",
        body: "Order custom kits, gifts, and merch in seconds - no back-and-forth, no delays, no hassle, Just done.",
        translate: "-translate-x-24",
      },
    ],
  };
}

function FeatureCard({
  title,
  body,
  className,
  titleClassName,
  bodyClassName,
}: {
  title: string;
  body: string;
  className?: string;
  titleClassName?: string;
  bodyClassName?: string;
}) {
  return (
    <article
      className={cn(
        "rounded-[20px] border border-[#909090] bg-white p-4 shadow-sm transition-colors hover:border-[#aaaaaa]",
        className
      )}
    >
      <h3
        className={cn(
          "mb-3 text-xl font-semibold text-black",
          styles.gilroy,
          titleClassName
        )}
      >
        {title}
      </h3>
      <p
        className={cn(
          "text-base leading-tight text-[#1D1D1D]",
          styles.gilroy,
          bodyClassName
        )}
      >
        {body}
      </p>
    </article>
  );
}

function sanitizeSvgId(id: string) {
  return id.replace(/[^a-zA-Z0-9_-]/g, "");
}

function TravelingGradient({
  id,
  path,
}: {
  id: string;
  path: ConnectorPath;
}) {
  const { sx, sy, ex, ey, delay } = path;
  const length = Math.hypot(ex - sx, ey - sy) || 1;
  const dx = (ex - sx) / length;
  const dy = (ey - sy) / length;
  const beamLength = 160;

  const startX1 = sx;
  const startY1 = sy;
  const startX2 = sx + dx * beamLength;
  const startY2 = sy + dy * beamLength;
  const endX1 = ex - dx * beamLength;
  const endY1 = ey - dy * beamLength;
  const endX2 = ex;
  const endY2 = ey;

  return (
    <linearGradient
      id={id}
      gradientUnits="userSpaceOnUse"
      x1={startX1}
      y1={startY1}
      x2={startX2}
      y2={startY2}
    >
      <stop offset="0%" stopColor="#ffaa40" stopOpacity="0" />
      <stop offset="35%" stopColor="#ffaa40" stopOpacity="1" />
      <stop offset="65%" stopColor="#9c40ff" stopOpacity="1" />
      <stop offset="100%" stopColor="#9c40ff" stopOpacity="0" />
      <animate
        attributeName="x1"
        values={`${startX1};${endX1};${startX1}`}
        dur="2.8s"
        repeatCount="indefinite"
        begin={delay}
      />
      <animate
        attributeName="y1"
        values={`${startY1};${endY1};${startY1}`}
        dur="2.8s"
        repeatCount="indefinite"
        begin={delay}
      />
      <animate
        attributeName="x2"
        values={`${startX2};${endX2};${startX2}`}
        dur="2.8s"
        repeatCount="indefinite"
        begin={delay}
      />
      <animate
        attributeName="y2"
        values={`${startY2};${endY2};${startY2}`}
        dur="2.8s"
        repeatCount="indefinite"
        begin={delay}
      />
    </linearGradient>
  );
}

function ConnectorLine({
  path,
  gradientId,
}: {
  path: ConnectorPath;
  gradientId: string;
}) {
  return (
    <g>
      <path d={path.d} className={styles.connectorBase} />
      <path
        d={path.d}
        className={styles.connectorBeam}
        stroke={`url(#${gradientId})`}
      />
    </g>
  );
}

function ConnectorLines({ paths }: { paths: ConnectorPath[] }) {
  const rawId = useId();
  const baseId = sanitizeSvgId(rawId) || "how-it-works";

  return (
    <svg
      aria-hidden
      className="pointer-events-none absolute left-0 top-0 z-0 h-[500px] w-full"
      viewBox="0 0 1350 500"
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        {paths.map((path, index) => {
          const gradientId = `${baseId}-grad-${index}`;
          return (
            <TravelingGradient key={gradientId} id={gradientId} path={path} />
          );
        })}
      </defs>

      {paths.map((path, index) => (
        <ConnectorLine
          key={`${path.d}-${index}`}
          path={path}
          gradientId={`${baseId}-grad-${index}`}
        />
      ))}
    </svg>
  );
}

function StarWatermark({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 240 240"
      fill="none"
      className={cn("pointer-events-none text-black", className)}
    >
      <path
        d="M120 8L132 92L216 104L132 116L120 200L108 116L24 104L108 92L120 8Z"
        fill="currentColor"
      />
      <path
        d="M120 48L126 96L174 104L126 112L120 160L114 112L66 104L114 96L120 48Z"
        fill="currentColor"
        opacity="0.55"
      />
    </svg>
  );
}

export type HowItWorksSectionProps = {
  companyName?: string;
  logoSrc?: string;
};

export function HowItWorksSection({
  companyName = "YourCompany",
  logoSrc,
}: HowItWorksSectionProps) {
  const { left, right } = getFeatures(companyName);
  const allFeatures = [...left, ...right];

  return (
    <section className="relative overflow-hidden bg-white px-4 py-16 md:py-24">
      <h2
        className={cn(
          "mx-auto max-w-4xl text-center text-3xl font-medium text-black md:text-5xl",
          styles.gilroy
        )}
      >
        How {companyName} Powers Internal Commerce
      </h2>

      {/* Desktop radial layout */}
      <div className="relative mx-auto mt-14 hidden w-full max-w-[1350px] lg:block">
        <ConnectorLines paths={[...LEFT_PATHS, ...RIGHT_PATHS]} />

        <div className="relative flex h-[500px] items-center justify-center">
          <div className="flex w-[440px] flex-col justify-between gap-8 py-6">
            {left.map((feature) => (
              <FeatureCard
                key={feature.title}
                title={feature.title}
                body={feature.body}
                className={cn("relative z-10 max-w-[360px]", feature.translate)}
              />
            ))}
          </div>

          <div className="relative z-10 mx-6 flex shrink-0 items-center justify-center">
            <div className="flex h-36 w-36 items-center justify-center rounded-full border border-[#909090] bg-white shadow-md">
              {logoSrc ? (
                <Image
                  src={logoSrc}
                  alt={companyName}
                  width={96}
                  height={96}
                  className="h-16 w-auto object-contain"
                />
              ) : (
                <span
                  className={cn(
                    "px-3 text-center text-lg font-semibold leading-tight text-black",
                    styles.gilroy
                  )}
                >
                  {companyName}
                </span>
              )}
            </div>
          </div>

          <div className="flex w-[440px] flex-col justify-between gap-8 py-6">
            {right.map((feature) => (
              <FeatureCard
                key={feature.title}
                title={feature.title}
                body={feature.body}
                className={cn(
                  "relative z-10 ml-auto max-w-[360px]",
                  feature.translate
                )}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Mobile / tablet grid */}
      <div className="mx-auto mt-10 grid max-w-5xl grid-cols-1 gap-4 md:grid-cols-2 lg:hidden">
        {allFeatures.map((feature) => (
          <FeatureCard
            key={feature.title}
            title={feature.title}
            body={feature.body}
            titleClassName="text-xl md:text-2xl"
            bodyClassName="text-base md:text-xl"
          />
        ))}
      </div>

      <StarWatermark className="absolute -bottom-8 -right-4 h-48 w-48 opacity-[0.09] md:h-64 md:w-64" />
    </section>
  );
}

export default HowItWorksSection;
