import type { Metadata } from "next";
import EmployeeEngagementHeroSection from "@/components/sections/EmployeeEngagementHeroSection";

export const metadata: Metadata = {
  title: "Employee Engagement",
  description:
    "Celebrate, recognize, and retain top talent with SwagDrive's employee engagement gifting platform.",
};

export default function EmployeeEngagementPage() {
  return (
    <>
      <EmployeeEngagementHeroSection />
    </>
  );
}
