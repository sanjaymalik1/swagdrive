import type { Metadata } from "next";
import CreativeServicesHeroSection from "@/components/sections/CreativeServicesHeroSection";
import CreativeServicesWhySection from "@/components/sections/CreativeServicesWhySection";
import CreativeServicesPointersSection from "@/components/sections/CreativeServicesPointersSection";
import CreativeServicesCtaSection from "@/components/sections/CreativeServicesCtaSection";

export const metadata: Metadata = {
  title: "Creative Services",
  description:
    "End-to-end creative support for your gifting and swag campaigns—from brainstorming to logistics and delivery.",
};

export default function CreativeServicesPage() {
  return (
    <>
      <CreativeServicesHeroSection />
      <CreativeServicesWhySection />
      <CreativeServicesPointersSection />
      <CreativeServicesCtaSection />
    </>
  );
}
