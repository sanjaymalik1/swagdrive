"use client";

import { useCallback, useMemo, useState, type ReactNode } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  CapabilityHeroPreview,
  HomeHeroPreview,
  SwagStoreHeroPreview,
} from "@/components/design/BrandHeroPreviews";
import {
  BRAND_BLUE_PRIMARY,
  BRAND_BLUE_SECONDARY,
  BRAND_SURFACE,
  FINALIZED_PALETTE,
  buildPalette,
  globalsCssSnippet,
  YELLOW_OPTIONS,
  type PalettePreset,
  type SurfaceOption,
  type YellowOption,
} from "@/lib/brand-color-palettes";

const PAGE_ROWS = [
  { id: "swag-store", label: "Swag Store", Preview: SwagStoreHeroPreview },
  { id: "capability", label: "Capability", Preview: CapabilityHeroPreview },
  { id: "home", label: "Home", Preview: HomeHeroPreview },
] as const;

function YellowColumn({
  preset,
  selected,
  onSelect,
  children,
}: {
  preset: PalettePreset;
  selected: boolean;
  onSelect: () => void;
  children: ReactNode;
}) {
  const t = preset.tokens;

  return (
    <div
      className={`flex min-w-[260px] flex-1 flex-col overflow-hidden rounded-xl border-2 bg-white shadow-sm ${
        selected
          ? "border-[#05417B] ring-2 ring-[#05417B]/20"
          : "border-black/8"
      }`}
    >
      <button
        type="button"
        onClick={onSelect}
        className="border-b border-black/6 px-3 py-2.5 text-left hover:bg-[#f8f9fb] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#05417B]/40"
      >
        <div className="flex items-start justify-between gap-2">
          <div>
            <p className="m-0 text-sm font-bold text-[#04326E]">
              {preset.label}
            </p>
            <p className="m-0 mt-0.5 text-[11px] leading-snug text-[#6b7280]">
              {preset.tagline}
            </p>
          </div>
          <span
            className={`mt-0.5 flex size-4 shrink-0 items-center justify-center rounded-full border-2 ${
              selected
                ? "border-[#05417B] bg-[#05417B]"
                : "border-[#cbd5e0] bg-white"
            }`}
          >
            {selected ? (
              <span className="size-1.5 rounded-full bg-white" />
            ) : null}
          </span>
        </div>
        <div className="mt-2 flex items-center gap-2">
          <span
            className="h-6 flex-1 rounded-md border border-black/8"
            style={{ backgroundColor: t.gold }}
          />
          <span className="font-mono text-[10px] text-[#6b7280]">{t.gold}</span>
        </div>
      </button>
      <div className="flex-1">{children}</div>
    </div>
  );
}

export default function ColorPreviewPage() {
  const [surface, setSurface] = useState<SurfaceOption>("white");
  const [selectedKey, setSelectedKey] = useState("soft-butter-white");
  const [copied, setCopied] = useState(false);

  const presets = useMemo(
    () => YELLOW_OPTIONS.map((y) => buildPalette(y, surface)),
    [surface]
  );

  const selected =
    presets.find((p) => p.id === selectedKey) ??
    presets.find((p) => p.id.startsWith("honey")) ??
    presets[0];

  const copyCss = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(globalsCssSnippet(selected));
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }, [selected]);

  const onSurfaceChange = (next: SurfaceOption) => {
    setSurface(next);
    const yellowId = selected.id.replace(/-(cream|white)$/, "");
    setSelectedKey(`${yellowId}-${next}`);
  };

  return (
    <div className="bg-[#eef1f5] pb-16">
      <div className="border-b border-black/8 bg-white">
        <div className="mx-auto w-full max-w-[1600px] px-5 py-8 min-[768px]:px-8">
          <p className="m-0 mb-1 text-xs font-bold tracking-[1px] text-[#05417B] uppercase">
            Yellow exploration
          </p>
          <h1 className="m-0 mb-2 font-[family-name:var(--font-satoshi)] text-2xl font-bold text-[#04326E] min-[768px]:text-3xl">
            Pick your gold — blues are locked
          </h1>
          <p className="m-0 max-w-3xl text-sm leading-relaxed text-[#5a6b7a] min-[768px]:text-base">
            Blues are finalized. Compare six yellow options on your real page
            layouts. Toggle cream vs white background, click a column to select,
            then copy the CSS.
          </p>

          <div className="mt-4 rounded-lg border border-yellow-primary/40 bg-yellow-secondary/20 px-4 py-3">
            <p className="m-0 text-sm text-blue-primary">
              <strong>Finalized:</strong> Soft butter gold + white surface — live
              in <code className="text-xs">globals.css</code>
            </p>
          </div>

          <div className="mt-4 flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-2 rounded-lg border border-[#05417B]/20 bg-[#05417B]/5 px-3 py-2">
              <span
                className="size-5 rounded-md border border-black/10"
                style={{ backgroundColor: BRAND_BLUE_PRIMARY }}
              />
              <span className="text-xs text-[#04326E]">
                <strong>Primary</strong>{" "}
                <span className="font-mono">{BRAND_BLUE_PRIMARY}</span>
              </span>
            </div>
            <div className="flex items-center gap-2 rounded-lg border border-[#05417B]/20 bg-[#05417B]/5 px-3 py-2">
              <span
                className="size-5 rounded-md border border-black/10"
                style={{ backgroundColor: BRAND_BLUE_SECONDARY }}
              />
              <span className="text-xs text-[#04326E]">
                <strong>Secondary</strong>{" "}
                <span className="font-mono">{BRAND_BLUE_SECONDARY}</span>
              </span>
            </div>
          </div>

          {/* Surface toggle */}
          <div className="mt-4 flex flex-wrap items-center gap-3">
            <span className="text-xs font-semibold tracking-wide text-[#6b7280] uppercase">
              Page background
            </span>
            <div className="inline-flex rounded-lg border border-black/10 bg-[#f8f9fb] p-1">
              {(
                [
                  ["cream", "Cream (preview only)"],
                  ["white", `White ${BRAND_SURFACE}`],
                ] as const
              ).map(([key, label]) => (
                <button
                  key={key}
                  type="button"
                  onClick={() => onSurfaceChange(key)}
                  className={`rounded-md px-3 py-1.5 text-xs font-semibold transition-colors ${
                    surface === key
                      ? "bg-white text-[#04326E] shadow-sm"
                      : "text-[#6b7280] hover:text-[#04326E]"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
            <Button variant="outline" size="sm" asChild>
              <Link href="/">Back to site</Link>
            </Button>
          </div>
        </div>
      </div>

      <div className="mx-auto w-full max-w-[1600px] space-y-10 px-5 pt-8 min-[768px]:px-8">
        {PAGE_ROWS.map((row) => (
          <section key={row.id}>
            <h2 className="m-0 mb-3 font-[family-name:var(--font-satoshi)] text-lg font-bold text-[#04326E]">
              {row.label}
            </h2>
            <div className="flex gap-3 overflow-x-auto pb-2">
              {presets.map((preset) => (
                <YellowColumn
                  key={`${row.id}-${preset.id}`}
                  preset={preset}
                  selected={selectedKey === preset.id}
                  onSelect={() => setSelectedKey(preset.id)}
                >
                  <row.Preview palette={preset} compact />
                </YellowColumn>
              ))}
            </div>
          </section>
        ))}

        <section className="rounded-2xl border border-black/8 bg-white p-5 min-[768px]:p-8">
          <h2 className="m-0 mb-1 font-[family-name:var(--font-satoshi)] text-xl font-bold text-[#04326E]">
            Selected: {selected.label}
          </h2>
          <p className="m-0 mb-5 text-sm text-[#6b7280]">{selected.tagline}</p>

          <div className="mb-6 grid gap-3 min-[768px]:grid-cols-2 min-[992px]:grid-cols-4">
            <div className="rounded-lg border border-black/8 p-3">
              <p className="m-0 mb-2 text-[10px] font-semibold text-[#6b7280] uppercase">
                CTA button
              </p>
              <span
                className="inline-flex rounded-3xl border-2 px-5 py-2.5 text-xs font-semibold uppercase"
                style={{
                  backgroundColor: selected.tokens.gold,
                  color: selected.tokens.ctaText,
                  borderColor: selected.tokens.goldDeep,
                }}
              >
                Book a demo
              </span>
            </div>
            <div
              className="rounded-lg border border-black/8 p-3"
              style={{ backgroundColor: selected.tokens.surface }}
            >
              <p className="m-0 mb-1 text-[10px] font-semibold text-[#6b7280] uppercase">
                Headline on surface
              </p>
              <p
                className="m-0 font-[family-name:var(--font-satoshi)] text-lg font-bold"
                style={{ color: BRAND_BLUE_PRIMARY }}
              >
                Global Gifting
              </p>
            </div>
            <div
              className="rounded-lg border border-black/8 p-3"
              style={{ backgroundColor: BRAND_BLUE_SECONDARY }}
            >
              <p className="m-0 mb-1 text-[10px] font-semibold text-white/70 uppercase">
                White on secondary blue
              </p>
              <p className="m-0 text-sm text-white">Body copy sample</p>
            </div>
            <div
              className="rounded-lg border border-black/8 p-3"
              style={{ backgroundColor: selected.tokens.gold }}
            >
              <p
                className="m-0 mb-1 text-[10px] font-semibold uppercase opacity-70"
                style={{ color: BRAND_BLUE_PRIMARY }}
              >
                Text on gold
              </p>
              <p
                className="m-0 text-sm font-semibold"
                style={{ color: BRAND_BLUE_PRIMARY }}
              >
                CTA label readability
              </p>
            </div>
          </div>

          <pre className="m-0 overflow-x-auto rounded-xl bg-[#1e293b] p-4 text-xs leading-relaxed text-[#e2e8f0]">
            {globalsCssSnippet(selected.id === FINALIZED_PALETTE.id ? FINALIZED_PALETTE : selected)}
          </pre>
          <Button
            variant="secondary"
            size="sm"
            className="mt-4"
            onClick={copyCss}
          >
            {copied ? "Copied!" : "Copy CSS tokens"}
          </Button>
        </section>

        {/* Yellow reference table */}
        <section className="rounded-2xl border border-black/8 bg-white p-5 min-[768px]:p-6">
          <h2 className="m-0 mb-4 text-sm font-bold text-[#04326E]">
            All yellow options at a glance
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[640px] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-black/8 text-xs text-[#6b7280]">
                  <th className="py-2 pr-4 font-semibold">Name</th>
                  <th className="py-2 pr-4 font-semibold">Gold (CTA)</th>
                  <th className="py-2 pr-4 font-semibold">Soft</th>
                  <th className="py-2 font-semibold">Deep (border)</th>
                </tr>
              </thead>
              <tbody>
                {YELLOW_OPTIONS.map((y: YellowOption) => (
                  <tr key={y.id} className="border-b border-black/5">
                    <td className="py-2.5 pr-4 font-medium text-[#04326E]">
                      {y.label}
                    </td>
                    <td className="py-2.5 pr-4">
                      <span className="inline-flex items-center gap-2">
                        <span
                          className="size-5 rounded border border-black/10"
                          style={{ backgroundColor: y.gold }}
                        />
                        <span className="font-mono text-xs">{y.gold}</span>
                      </span>
                    </td>
                    <td className="py-2.5 pr-4 font-mono text-xs">{y.goldSoft}</td>
                    <td className="py-2.5 font-mono text-xs">{y.goldDeep}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
}
