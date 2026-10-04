import type { Metadata } from "next";
import CrmHeroSection from "@/components/sections/CrmHeroSection";
import CrmImpactSection from "@/components/sections/CrmImpactSection";
import CrmAutomationHero from "@/components/sections/CrmAutomationHero";
import CrmUseCasesSection from "@/components/sections/CrmUseCasesSection";
import CrmBenefitsSection from "@/components/sections/CrmBenefitsSection";
import CrmStreamlineSection from "@/components/sections/CrmStreamlineSection";

export const metadata: Metadata = {
  title: "CRM Dashboard",
  description:
    "Scale your go-to-market strategy with gifting analytics and reporting. Maximize ROI and optimize spending with data-driven insights.",
};

export default function CrmDashboardPage() {
  return (
    <>
      <CrmHeroSection />
      <CrmImpactSection />
      <CrmAutomationHero />
      <CrmUseCasesSection />
      <CrmBenefitsSection />
      <CrmStreamlineSection />
    </>
  );
}
