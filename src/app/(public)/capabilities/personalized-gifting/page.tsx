import type { Metadata } from "next";
import PersonalizedGiftingHeroSection from "@/components/sections/PersonalizedGiftingHeroSection";

export const metadata: Metadata = {
  title: "Personalized Gifting",
  description:
    "Accelerate your pipeline with personalized corporate gifting and swag. Streamline global and local campaigns with SwagDrive.",
};

export default function PersonalizedGiftingPage() {
  return (
    <>
      <PersonalizedGiftingHeroSection />
    </>
  );
}
