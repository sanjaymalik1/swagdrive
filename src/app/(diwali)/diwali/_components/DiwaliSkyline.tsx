// Decorative, stylised Diwali-evening skyline: three layers of muted-plum rooftops (havelis, domes,
// chhatris, minarets, temple spires) with warm lit windows and a faint string of rooftop lights.
// The centre stays low so it never competes with the hero copy; it melts into the hero background.
// Pure inline SVG (no assets/deps), purely presentational and hidden from assistive tech.

type Building = { w: number; h: number; kind?: "dome" | "chhatri" | "minaret" | "shikhara" };

const VIEW_W = 1440;
const GROUND = 260; // y of the ground line
const CROP_TOP = 50; // top of the visible scene
const BG = "#340a2b"; // matches the bottom of the hero / top of the catalogue

const FAR: Building[] = [
  { w: 120, h: 95, kind: "dome" },
  { w: 100, h: 120 },
  { w: 140, h: 85, kind: "minaret" },
  { w: 110, h: 130 },
  { w: 130, h: 100, kind: "shikhara" },
  { w: 100, h: 60 },
  { w: 120, h: 55 },
  { w: 110, h: 110, kind: "dome" },
  { w: 140, h: 125 },
  { w: 100, h: 95, kind: "minaret" },
  { w: 130, h: 115 },
  { w: 110, h: 90, kind: "shikhara" },
  { w: 120, h: 100 },
];

const BACK: Building[] = [
  { w: 110, h: 110, kind: "shikhara" },
  { w: 90, h: 150, kind: "chhatri" },
  { w: 130, h: 95 },
  { w: 100, h: 160, kind: "dome" },
  { w: 150, h: 100, kind: "minaret" },
  { w: 90, h: 80 },
  { w: 120, h: 70 },
  { w: 100, h: 100 },
  { w: 140, h: 115, kind: "dome" },
  { w: 110, h: 140, kind: "shikhara" },
  { w: 90, h: 100, kind: "chhatri" },
  { w: 120, h: 130, kind: "minaret" },
  { w: 100, h: 110 },
  { w: 90, h: 125 },
];

const FRONT: Building[] = [
  { w: 160, h: 70 },
  { w: 120, h: 95 },
  { w: 180, h: 60 },
  { w: 140, h: 100, kind: "chhatri" },
  { w: 200, h: 75 },
  { w: 130, h: 90 },
  { w: 170, h: 65 },
  { w: 150, h: 95, kind: "chhatri" },
  { w: 190, h: 70 },
];

function layout(list: Building[]) {
  let x = 0;
  return list.map((b) => {
    const placed = { ...b, x, y: GROUND - b.h };
    x += b.w;
    return placed;
  });
}

type Placed = ReturnType<typeof layout>[number];

function windows(b: Placed, step: number, density: number, seed: number) {
  const cols = Math.max(1, Math.floor((b.w - 16) / 18));
  const startX = b.x + (b.w - (cols - 1) * 18 - 7) / 2;
  const out: { x: number; y: number }[] = [];
  for (let r = 0; b.y + 16 + r * step < GROUND - 14; r++) {
    for (let c = 0; c < cols; c++) {
      if ((seed * 31 + r * 17 + c * 11) % density === 0) {
        out.push({ x: startX + c * 18, y: b.y + 16 + r * step });
      }
    }
  }
  return out;
}

function Roof({ b, fill }: { b: Placed; fill: string }) {
  const cx = b.x + b.w / 2;
  if (b.kind === "dome") {
    const r = b.w * 0.22;
    return (
      <g fill={fill}>
        <rect x={cx - r - 4} y={b.y - 6} width={(r + 4) * 2} height={6} />
        <path d={`M${cx - r} ${b.y - 6} A${r} ${r} 0 0 1 ${cx + r} ${b.y - 6}Z`} />
        <rect x={cx - 1} y={b.y - 6 - r - 14} width={2} height={14} />
      </g>
    );
  }
  if (b.kind === "minaret") {
    return (
      <g fill={fill}>
        <rect x={b.x + 4} y={b.y - 5} width={b.w - 8} height={5} />
        <rect x={cx - 5} y={b.y - 42} width={10} height={37} />
        <rect x={cx - 7} y={b.y - 44} width={14} height={3} />
        <path d={`M${cx - 6} ${b.y - 44} A6 7 0 0 1 ${cx + 6} ${b.y - 44}Z`} />
        <rect x={cx - 0.75} y={b.y - 58} width={1.5} height={8} />
      </g>
    );
  }
  if (b.kind === "shikhara") {
    const hw = b.w * 0.26;
    return (
      <g fill={fill}>
        <rect x={b.x + 4} y={b.y - 5} width={b.w - 8} height={5} />
        <path
          d={`M${cx - hw} ${b.y - 5}C${cx - hw} ${b.y - 24} ${cx - hw * 0.35} ${b.y - 40} ${cx} ${b.y - 50}C${cx + hw * 0.35} ${b.y - 40} ${cx + hw} ${b.y - 24} ${cx + hw} ${b.y - 5}Z`}
        />
        <rect x={cx - 0.75} y={b.y - 58} width={1.5} height={8} />
      </g>
    );
  }
  if (b.kind === "chhatri") {
    return (
      <g fill={fill}>
        <rect x={cx - 16} y={b.y - 22} width={3} height={22} />
        <rect x={cx + 13} y={b.y - 22} width={3} height={22} />
        <path d={`M${cx - 20} ${b.y - 22} A20 14 0 0 1 ${cx + 20} ${b.y - 22}Z`} />
        <rect x={cx - 1} y={b.y - 44} width={2} height={8} />
      </g>
    );
  }
  return <rect x={b.x + 4} y={b.y - 5} width={b.w - 8} height={5} fill={fill} />;
}

const FAR_L = layout(FAR);
const BACK_L = layout(BACK);
const FRONT_L = layout(FRONT);
const FAR_WIN = FAR_L.flatMap((b, i) => windows(b, 28, 7, i + 5));
const BACK_WIN = BACK_L.flatMap((b, i) => windows(b, 26, 4, i + 1));
const FRONT_WIN = FRONT_L.flatMap((b, i) => windows(b, 24, 2, i + 3));
const LIGHTS = FRONT_L.flatMap((b) =>
  Array.from({ length: Math.floor(b.w / 14) }, (_, i) => ({ x: b.x + 7 + i * 14, y: b.y - 2 })),
);

export function DiwaliSkyline({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      viewBox={`0 ${CROP_TOP} ${VIEW_W} ${GROUND - CROP_TOP}`}
      preserveAspectRatio="xMidYMax slice"
      className={className}
    >
      <defs>
        <radialGradient id="dsk-glow" cx="50%" cy="100%" r="60%">
          <stop offset="0%" stopColor="#f2b441" stopOpacity="0.22" />
          <stop offset="100%" stopColor="#f2b441" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="dsk-fade" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={BG} stopOpacity="0" />
          <stop offset="100%" stopColor={BG} stopOpacity="1" />
        </linearGradient>
        <filter id="dsk-blur" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="4" />
        </filter>
      </defs>

      <rect y={CROP_TOP} width={VIEW_W} height={GROUND - CROP_TOP} fill="url(#dsk-glow)" />

      {/* far layer: hazy depth, dropped on small screens */}
      <g className="max-sm:hidden" opacity="0.32">
        <g fill="#7a4388">
          {FAR_L.map((b, i) => (
            <g key={i}>
              <rect x={b.x} y={b.y} width={b.w} height={b.h} />
              <Roof b={b} fill="#7a4388" />
            </g>
          ))}
        </g>
        <g fill="#ffd27a" opacity="0.8">
          {FAR_WIN.map((w, i) => (
            <rect key={i} x={w.x} y={w.y} width={5} height={8} rx={2.5} />
          ))}
        </g>
      </g>

      {/* back layer */}
      <g>
        {BACK_L.map((b, i) => (
          <g key={i}>
            <rect x={b.x} y={b.y} width={b.w} height={b.h} fill="#582565" />
            <Roof b={b} fill="#582565" />
          </g>
        ))}
        <g fill="#ffc857" opacity="0.5" filter="url(#dsk-blur)">
          {BACK_WIN.map((w, i) => (
            <rect key={i} x={w.x - 2} y={w.y - 2} width={11} height={15} rx={5} />
          ))}
        </g>
        <g fill="#ffd27a" opacity="0.7">
          {BACK_WIN.map((w, i) => (
            <rect key={i} x={w.x} y={w.y} width={7} height={11} rx={3.5} />
          ))}
        </g>
      </g>

      {/* front layer */}
      <g>
        {FRONT_L.map((b, i) => (
          <g key={i}>
            <rect x={b.x} y={b.y} width={b.w} height={b.h} fill="#40133f" />
            <Roof b={b} fill="#40133f" />
          </g>
        ))}
        <g fill="#ffc857" opacity="0.55" filter="url(#dsk-blur)">
          {FRONT_WIN.map((w, i) => (
            <rect key={i} x={w.x - 3} y={w.y - 3} width={13} height={17} rx={6} />
          ))}
        </g>
        <g fill="#ffd27a" opacity="0.9">
          {FRONT_WIN.map((w, i) => (
            <rect key={i} x={w.x} y={w.y} width={7} height={11} rx={3.5} />
          ))}
        </g>
        <g fill="#ffc857" opacity="0.7">
          {LIGHTS.map((l, i) => (
            <circle key={i} cx={l.x} cy={l.y} r={1.5} />
          ))}
        </g>
      </g>

      {/* melt into the page background — no hard bottom edge */}
      <rect y={GROUND - 60} width={VIEW_W} height={60} fill="url(#dsk-fade)" />
    </svg>
  );
}
