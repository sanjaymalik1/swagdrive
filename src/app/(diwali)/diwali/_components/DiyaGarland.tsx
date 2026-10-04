// Hanging diyas arranged as a loose "festive installation" that frames the hero:
// two clusters with varied thread lengths, sizes and depth, leaving the centre clear for the headline.

type Diya = {
  x: number; // horizontal position, % of container
  len: number; // thread length, px (desktop)
  scale: number;
  opacity: number;
  glow?: boolean;
  delay: number; // flame flicker offset, s
  desktopOnly?: boolean;
};

const DIYAS: Diya[] = [
  { x: 8, len: 70, scale: 1, opacity: 0.95, glow: true, delay: 0 },
  { x: 18, len: 112, scale: 0.82, opacity: 0.45, delay: 1.8, desktopOnly: true },
  { x: 28, len: 44, scale: 0.9, opacity: 0.75, delay: 0.9 },
  { x: 37, len: 80, scale: 0.78, opacity: 0.5, delay: 2.4, desktopOnly: true },

  { x: 63, len: 84, scale: 0.78, opacity: 0.5, delay: 0.5, desktopOnly: true },
  { x: 72, len: 48, scale: 0.9, opacity: 0.75, delay: 1.5 },
  { x: 82, len: 108, scale: 0.82, opacity: 0.45, delay: 2.1, desktopOnly: true },
  { x: 92, len: 66, scale: 1, opacity: 0.95, glow: true, delay: 1.2 },
];

function DiyaIcon({ delay }: { delay: number }) {
  return (
    <svg width="34" height="40" viewBox="0 0 40 46" fill="none" className="block overflow-visible">
      {/* flame */}
      <g className="diwali-flame" style={{ animationDelay: `${delay}s` }}>
        <path d="M20 17C14.5 12.5 15.5 6 20 0C24.5 6 25.5 12.5 20 17Z" fill="#F5B94A" />
        <path d="M20 16C17.6 13.4 18 9.8 20 6.5C22 9.8 22.4 13.4 20 16Z" fill="#FFF0C4" />
      </g>
      {/* bowl */}
      <path d="M3 22C3 33.5 11 38.5 20 38.5C29 38.5 37 33.5 37 22Z" fill="url(#dg-bowl)" />
      <ellipse cx="20" cy="22" rx="17" ry="3.6" fill="#E8C070" />
      <ellipse cx="20" cy="22.3" rx="14" ry="2.2" fill="#6E2C16" />
      <path d="M14 38.5H26L24.2 42H15.8Z" fill="#8F5A22" />
    </svg>
  );
}

export function DiyaGarland() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none relative mx-auto h-24 w-full max-w-6xl overflow-hidden [--dk:0.45] sm:h-32 sm:[--dk:0.62]"
    >
      <svg width="0" height="0" className="absolute">
        <defs>
          <linearGradient id="dg-bowl" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#D9A441" />
            <stop offset="1" stopColor="#7A3A1A" />
          </linearGradient>
        </defs>
      </svg>

      {DIYAS.map((d, i) => (
        <div
          key={i}
          className={`absolute top-0 flex -translate-x-1/2 flex-col items-center ${
            d.desktopOnly ? "hidden sm:flex" : "flex"
          }`}
          style={{ left: `${d.x}%`, opacity: d.opacity }}
        >
          <span
            className="block w-px bg-gradient-to-b from-[#e0b44f]/0 via-[#e0b44f]/50 to-[#e0b44f]/70"
            style={{ height: `calc(${d.len}px * var(--dk))` }}
          />
          <span className="relative block" style={{ transform: `scale(${d.scale})` }}>
            {d.glow && (
              <span className="absolute left-1/2 top-1 h-24 w-24 -translate-x-1/2 -translate-y-1/3 rounded-full bg-[radial-gradient(circle,rgba(255,190,90,0.15),transparent_65%)]" />
            )}
            <DiyaIcon delay={d.delay} />
          </span>
        </div>
      ))}
    </div>
  );
}
