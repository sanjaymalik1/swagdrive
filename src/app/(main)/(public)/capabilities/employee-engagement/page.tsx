import type { Metadata } from "next";
import EmployeeEngagementHeroSection from "@/components/sections/EmployeeEngagementHeroSection";
import EmployeeEngagementWhySection from "@/components/sections/EmployeeEngagementWhySection";
import EmployeeEngagementHrSection from "@/components/sections/EmployeeEngagementHrSection";
import EmployeeEngagementMilestonesSection from "@/components/sections/EmployeeEngagementMilestonesSection";
import EmployeeEngagementCtaSection from "@/components/sections/EmployeeEngagementCtaSection";

export const metadata: Metadata = {
  title: "Employee Engagement",
  description:
    "Celebrate, recognize, and retain top talent with SwagDrive's employee engagement gifting platform.",
};

export default function EmployeeEngagementPage() {
  return (
    <>
      <EmployeeEngagementHeroSection />
      <EmployeeEngagementWhySection />
      <EmployeeEngagementHrSection />
      <EmployeeEngagementMilestonesSection />
      <EmployeeEngagementCtaSection />
    </>
  );
}
