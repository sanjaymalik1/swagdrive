import type { Metadata } from "next";
import RedeemHeroSection from "@/components/sections/RedeemHeroSection";
import RedeemTwoWaysSection from "@/components/sections/RedeemTwoWaysSection";
import RedeemHowItWorksSection from "@/components/sections/RedeemHowItWorksSection";
import RedeemTeamsUseSection from "@/components/sections/RedeemTeamsUseSection";
import RedeemCtaSection from "@/components/sections/RedeemCtaSection";

export const metadata: Metadata = {
  title: "Branded Redeem Pages",
  description:
    "Create branded redeem pages where recipients can enter their details, choose items, and receive swag—all through a simple shared link.",
};

export default function RedeemPage() {
  return (
    <>
      <RedeemHeroSection />
      <RedeemTwoWaysSection />
      <RedeemHowItWorksSection />
      <RedeemTeamsUseSection />
      <RedeemCtaSection />
    </>
  );
}
