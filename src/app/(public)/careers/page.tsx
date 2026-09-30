import type { Metadata } from "next";
import CompanyComingSoonSection from "@/components/sections/CompanyComingSoonSection";

export const metadata: Metadata = {
  title: "Careers",
  description: "Join the SwagDrive team and help power global connections.",
};

export default function CareersPage() {
  return (
    <CompanyComingSoonSection
      eyebrow="Company"
      title="Careers"
      description="We're growing. Open roles will be posted here soon—get in touch if you'd like to hear from us first."
    />
  );
}
