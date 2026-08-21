import type { Metadata } from "next";
import SwagStoreHeroSection from "@/components/sections/SwagStoreHeroSection";
import SwagStoreCustomizationSection from "@/components/sections/SwagStoreCustomizationSection";
import SwagStoreGlobalSolutionSection from "@/components/sections/SwagStoreGlobalSolutionSection";
import SwagStoreIntroSection from "@/components/sections/SwagStoreIntroSection";
import SwagStoreHowItWorksSection from "@/components/sections/SwagStoreHowItWorksSection";
import SwagStoreProgramsSection from "@/components/sections/SwagStoreProgramsSection";
import SwagStoreLaunchCtaSection from "@/components/sections/SwagStoreLaunchCtaSection";

export const metadata: Metadata = {
  title: "Swag Store / Shop",
  description:
    "Invite anyone, anywhere, to choose items from your online branded shop.",
};

export default function SwagStorePage() {
  return (
    <>
      <SwagStoreHeroSection />
      <SwagStoreCustomizationSection />
      <SwagStoreGlobalSolutionSection />
      <SwagStoreIntroSection />
      <SwagStoreHowItWorksSection />
      <SwagStoreProgramsSection />
      <SwagStoreLaunchCtaSection />
    </>
  );
}
