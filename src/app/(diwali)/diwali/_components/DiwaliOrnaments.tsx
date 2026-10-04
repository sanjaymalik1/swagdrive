// Decorative, purely presentational ornaments for the Diwali page.
// Inline SVG / CSS only — no assets or dependencies. All hidden from assistive tech.

const MOTES = [
  { l: "9%", t: "40%", s: 2, d: 0 },
  { l: "24%", t: "66%", s: 2, d: 3 },
  { l: "78%", t: "36%", s: 2, d: 5 },
  { l: "90%", t: "62%", s: 2, d: 2 },
];

/** A few slow-drifting embers; static when reduced motion is requested. */
export function LightMotes() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0">
      {MOTES.map((m, i) => (
        <span
          key={i}
          className="diwali-mote absolute rounded-full bg-[#f3c969]"
          style={{
            left: m.l,
            top: m.t,
            width: m.s,
            height: m.s,
            animationDelay: `${m.d}s`,
          }}
        />
      ))}
    </div>
  );
}
