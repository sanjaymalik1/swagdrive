import type { Metadata } from "next";
import SwagInspirationHeroSection from "@/components/sections/SwagInspirationHeroSection";
import SwagInspirationMarqueeSection from "@/components/sections/SwagInspirationMarqueeSection";
import SwagInspirationCatalogueSection from "@/components/sections/SwagInspirationCatalogueSection";
import SwagInspirationCtaSection from "@/components/sections/SwagInspirationCtaSection";

export const metadata: Metadata = {
  title: "Swag Inspiration",
  description:
    "Browse curated swag ideas and campaign looks to spark your next drop—kits, apparel, events, and more.",
};

export default function SwagInspirationPage() {
  return (
    <>
      <SwagInspirationHeroSection />
      <SwagInspirationMarqueeSection />
      <SwagInspirationCatalogueSection />
      <SwagInspirationCtaSection />
    </>
  );
}
