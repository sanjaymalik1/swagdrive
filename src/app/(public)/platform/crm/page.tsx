import type { Metadata } from "next";
import CrmHeroSection from "@/components/sections/CrmHeroSection";
import CrmImpactSection from "@/components/sections/CrmImpactSection";
import CrmPipelineHeading from "@/components/sections/CrmPipelineHeading";

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
      <CrmPipelineHeading />
    </>
  );
}
