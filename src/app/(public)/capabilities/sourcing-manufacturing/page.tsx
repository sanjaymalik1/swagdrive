import type { Metadata } from "next";
import SourcingManufacturingHeroSection from "@/components/sections/SourcingManufacturingHeroSection";

export const metadata: Metadata = {
  title: "Sourcing & Manufacturing",
  description:
    "High-quality, ethically produced merchandise with a steadfast commitment to sustainability.",
};

export default function SourcingManufacturingPage() {
  return (
    <>
      <SourcingManufacturingHeroSection />
    </>
  );
}
