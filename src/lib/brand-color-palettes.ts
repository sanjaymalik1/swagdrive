/** Finalized brand blues — do not add other blue tokens */
export const BRAND_BLUE_PRIMARY = "#04326E";
export const BRAND_BLUE_SECONDARY = "#05417B";
export const BRAND_SURFACE = "#FFFFFF";

/** Only used on /design/colors cream toggle — not a brand token */
export const PREVIEW_CREAM = "#F5F0E6";

export type SurfaceOption = "cream" | "white";

export type YellowOption = {
  id: string;
  label: string;
  tagline: string;
  gold: string;
  goldSoft: string;
  goldDeep: string;
};

/** Yellow/gold candidates to pair with finalized blues */
export const YELLOW_OPTIONS: YellowOption[] = [
  {
    id: "warm-gold",
    label: "Warm gold",
    tagline: "From apparel photo — amber, muted",
    gold: "#CFA449",
    goldSoft: "#D7B158",
    goldDeep: "#B7791A",
  },
  {
    id: "honey",
    label: "Honey",
    tagline: "Balanced warm yellow — suggested",
    gold: "#F0C040",
    goldSoft: "#F5D061",
    goldDeep: "#D4A017",
  },
  {
    id: "rich-amber",
    label: "Rich amber",
    tagline: "Professional, strong contrast on blue",
    gold: "#E8B923",
    goldSoft: "#F0D050",
    goldDeep: "#C99700",
  },
  {
    id: "sunflower",
    label: "Sunflower",
    tagline: "Vivid but not neon",
    gold: "#F5C518",
    goldSoft: "#FAD85C",
    goldDeep: "#DBA800",
  },
  {
    id: "soft-butter",
    label: "Soft butter",
    tagline: "Gentle CTA — less loud",
    gold: "#F5D061",
    goldSoft: "#FAE099",
    goldDeep: "#E0BC3A",
  },
  {
    id: "bright-lemon",
    label: "Bright lemon",
    tagline: "Previous site gold — high energy",
    gold: "#FFF44F",
    goldSoft: "#FFF9A0",
    goldDeep: "#E6D800",
  },
];

export type PaletteTokens = {
  primary: string;
  secondary: string;
  gold: string;
  goldSoft: string;
  goldDeep: string;
  surface: string;
  heroBg: string;
  heroBgGradient: string;
  heroBorder: string;
  body: string;
  muted: string;
  accent: string;
  ctaBg: string;
  ctaText: string;
  ctaBorder: string;
  ctaSecondaryBg: string;
  ctaSecondaryText: string;
  ctaSecondaryBorder: string;
  gradientFrom: string;
  gradientTo: string;
};

export type PalettePreset = {
  id: string;
  label: string;
  tagline: string;
  surface: SurfaceOption;
  tokens: PaletteTokens;
};

export function buildPalette(
  yellow: YellowOption,
  surface: SurfaceOption
): PalettePreset {
  const surfaceColor = surface === "cream" ? PREVIEW_CREAM : BRAND_SURFACE;
  const heroGradient =
    surface === "cream"
      ? `linear-gradient(93deg, #EEF4FA, ${PREVIEW_CREAM})`
      : `linear-gradient(93deg, #F5F8FC, ${BRAND_SURFACE})`;

  return {
    id: `${yellow.id}-${surface}`,
    label: yellow.label,
    tagline: `${yellow.tagline} · ${surface === "cream" ? "Cream bg" : "White bg"}`,
    surface,
    tokens: {
      primary: BRAND_BLUE_PRIMARY,
      secondary: BRAND_BLUE_SECONDARY,
      gold: yellow.gold,
      goldSoft: yellow.goldSoft,
      goldDeep: yellow.goldDeep,
      surface: surfaceColor,
      heroBg: surfaceColor,
      heroBgGradient: heroGradient,
      heroBorder: yellow.goldDeep,
      body: BRAND_BLUE_PRIMARY,
      muted: "#5A6B7A",
      accent: BRAND_BLUE_SECONDARY,
      ctaBg: yellow.gold,
      ctaText: BRAND_BLUE_PRIMARY,
      ctaBorder: yellow.goldDeep,
      ctaSecondaryBg: BRAND_SURFACE,
      ctaSecondaryText: BRAND_BLUE_SECONDARY,
      ctaSecondaryBorder: BRAND_BLUE_SECONDARY,
      gradientFrom: yellow.gold,
      gradientTo: BRAND_BLUE_SECONDARY,
    },
  };
}

export const FINALIZED_YELLOW = YELLOW_OPTIONS.find((y) => y.id === "soft-butter")!;
export const FINALIZED_PALETTE = buildPalette(FINALIZED_YELLOW, "white");

export function globalsCssSnippet(preset: PalettePreset = FINALIZED_PALETTE): string {
  const t = preset.tokens;
  return `:root {
  --blue-primary: ${t.primary};
  --blue-secondary: ${t.secondary};
  --yellow-primary: ${t.goldDeep};
  --yellow-secondary: ${t.gold};
  --yellow-tertiary: ${t.goldSoft};
  --surface: ${t.surface};
}`;
}
