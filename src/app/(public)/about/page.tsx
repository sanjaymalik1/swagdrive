import type { Metadata } from "next";
import AboutHeroSection from "@/components/sections/AboutHeroSection";
import AboutWhySection from "@/components/sections/AboutWhySection";
import AboutValuesSection from "@/components/sections/AboutValuesSection";
import AboutDifferentiatorsSection from "@/components/sections/AboutDifferentiatorsSection";
import AboutNetworkSection from "@/components/sections/AboutNetworkSection";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "SwagDrive is the all-in-one platform for corporate gifting and swag—source, store, ship, track, and measure every send from one place.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHeroSection />
      <AboutWhySection />
      <AboutValuesSection />
      <AboutDifferentiatorsSection />
      <AboutNetworkSection />
    </>
  );
}
