import Image from "next/image";
import styles from "./LovedByTeams.module.css";

/* ------------------------------------------------------------------ */
/*  Logo config — swap src paths with your own monochrome logo assets  */
/* ------------------------------------------------------------------ */

export type TeamLogo = {
  name: string;
  src: string;
  width: number;
  height: number;
};

export const TEAM_LOGOS: TeamLogo[] = [
  { name: "Zepto", src: "/logos/zepto.svg", width: 120, height: 44 },
  { name: "Eternal", src: "/logos/eternal.svg", width: 130, height: 44 },
  { name: "Aftershoot", src: "/logos/aftershoot.svg", width: 200, height: 44 },
  { name: "Pearl Academy", src: "/logos/pearl-academy.svg", width: 240, height: 44 },
  { name: "SentinelOne", src: "/logos/sentinelone.svg", width: 220, height: 44 },
];

export type LovedByTeamsProps = {
  title?: string;
  logos?: TeamLogo[];
};

function LogoTrack({
  logos,
  trackId,
  ariaHidden,
}: {
  logos: TeamLogo[];
  trackId: string;
  ariaHidden?: boolean;
}) {
  return (
    <div className={styles.logoRow} aria-hidden={ariaHidden}>
      {logos.map((logo) => (
        <div key={`${trackId}-${logo.name}`} className={styles.logoItem}>
          <Image
            src={logo.src}
            alt={logo.name}
            width={logo.width}
            height={logo.height}
            className={styles.logoImage}
            draggable={false}
          />
        </div>
      ))}
    </div>
  );
}

export default function LovedByTeams({
  title = "Loved by teams",
  logos = TEAM_LOGOS,
}: LovedByTeamsProps) {
  return (
    <section
      aria-label={title}
      className="border-y border-neutral-200/80 bg-[#f7f7f7] py-12 sm:py-14"
    >
      <h2 className="text-center font-[family-name:var(--font-hero-serif)] text-3xl font-normal tracking-tight text-neutral-900 sm:text-4xl">
        {title}
      </h2>

      <div className={styles.marqueeViewport}>
        <div className={styles.fadeLeft} aria-hidden />
        <div className={styles.fadeRight} aria-hidden />

        <div className={styles.marqueeTrack}>
          <LogoTrack logos={logos} trackId="a" />
          <LogoTrack logos={logos} trackId="b" ariaHidden />
        </div>
      </div>
    </section>
  );
}
