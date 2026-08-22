import type { Metadata } from "next";
import SwagManagementHeroSection from "@/components/sections/SwagManagementHeroSection";

export const metadata: Metadata = {
  title: "Swag Management",
  description:
    "Source, store, ship, and sell premium branded merchandise with SwagDrive's all-in-one swag management solution.",
};

export default function SwagManagementPage() {
  return (
    <>
      <SwagManagementHeroSection />
    </>
  );
}
