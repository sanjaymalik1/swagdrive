import type { Metadata } from "next";
import SustainabilityHeroSection from "@/components/sections/SustainabilityHeroSection";
import SustainabilityCommitmentSection from "@/components/sections/SustainabilityCommitmentSection";
import SustainabilityInitiativesSection from "@/components/sections/SustainabilityInitiativesSection";
import SustainabilityGoalsSection from "@/components/sections/SustainabilityGoalsSection";
import SustainabilityQuoteSection from "@/components/sections/SustainabilityQuoteSection";
import SustainabilityCtaSection from "@/components/sections/SustainabilityCtaSection";

export const metadata: Metadata = {
  title: "Sustainability",
  description:
    "Learn how SwagDrive is working toward a more sustainable swag and gifting supply chain.",
};

export default function SustainabilityPage() {
  return (
    <>
      <SustainabilityHeroSection />
      <SustainabilityCommitmentSection />
      <SustainabilityInitiativesSection />
      <SustainabilityGoalsSection />
      <SustainabilityQuoteSection />
      <SustainabilityCtaSection />
    </>
  );
}
