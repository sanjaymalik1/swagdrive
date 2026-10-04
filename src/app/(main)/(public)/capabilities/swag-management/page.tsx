import type { Metadata } from "next";
import SwagManagementHeroSection from "@/components/sections/SwagManagementHeroSection";
import SwagManagementInvestSection from "@/components/sections/SwagManagementInvestSection";
import SwagManagementSolutionsSection from "@/components/sections/SwagManagementSolutionsSection";
import SwagManagementImpactSection from "@/components/sections/SwagManagementImpactSection";
import SwagManagementCtaSection from "@/components/sections/SwagManagementCtaSection";

export const metadata: Metadata = {
  title: "Swag Management",
  description:
    "Source, store, ship, and sell premium branded merchandise with SwagDrive's all-in-one swag management solution.",
};

export default function SwagManagementPage() {
  return (
    <>
      <SwagManagementHeroSection />
      <SwagManagementInvestSection />
      <SwagManagementSolutionsSection />
      <SwagManagementImpactSection />
      <SwagManagementCtaSection />
    </>
  );
}
