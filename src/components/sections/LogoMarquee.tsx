type Logo = {
  src: string;
  alt: string;
  size?: "large" | "small";
};

const LOGOS: Logo[] = [
  { src: "/logos/rapid7.svg", alt: "Rapid7" },
  { src: "/logos/clearwave.svg", alt: "Clearwave" },
  { src: "/logos/cognism.svg", alt: "Cognism" },
  { src: "/logos/contentsquare.svg", alt: "Contentsquare" },
  { src: "/logos/chilipiper.svg", alt: "Chili Piper" },
  { src: "/logos/iterable.svg", alt: "Iterable", size: "large" },
  { src: "/logos/logo-small.svg", alt: "", size: "small" },
  { src: "/logos/sentinelone.svg", alt: "SentinelOne" },
  { src: "/logos/sproutsocial.avif", alt: "Sprout Social" },
  { src: "/logos/blackline.svg", alt: "BlackLine" },
];

/** Recolor white/monochrome logos to blue-primary (#04326e) */
const LOGO_BLUE_FILTER =
  "brightness(0) saturate(100%) invert(12%) sepia(64%) saturate(2149%) hue-rotate(196deg) brightness(93%) contrast(101%)";

function LogoTrack() {
  return (
    <div className="logo-scroll flex shrink-0 items-center gap-20">
      {LOGOS.map((logo) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          key={logo.src}
          src={logo.src}
          alt={logo.alt}
          style={{ filter: LOGO_BLUE_FILTER }}
          className={
            logo.size === "large"
              ? "h-[2.2rem] w-auto max-h-[2.2rem] object-contain"
              : logo.size === "small"
                ? "h-4 w-auto max-h-4 object-contain"
                : "h-6 w-auto max-h-6 object-contain"
          }
        />
      ))}
    </div>
  );
}

export default function LogoMarquee() {
  return (
    <section className="flex flex-col bg-yellow-secondary py-12 font-[family-name:var(--font-lexend)] text-blue-primary min-[768px]:py-16 min-[992px]:py-24">
      {/* <h3 className="m-0 text-center text-base leading-[1.2] font-medium tracking-[-0.08rem] min-[768px]:text-[1.125rem]">
        Join top GTM leaders that use SwagDrive
      </h3> */}
      {/* <div className="pt-7 min-[768px]:pt-8 min-[992px]:pt-10" /> */}
      <div className="flex w-full gap-20 overflow-hidden">
        <LogoTrack />
        <LogoTrack />
      </div>
    </section>
  );
}
