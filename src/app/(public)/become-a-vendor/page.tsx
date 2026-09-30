import type { Metadata } from "next";
import CompanyComingSoonSection from "@/components/sections/CompanyComingSoonSection";

export const metadata: Metadata = {
  title: "Become a Vendor",
  description:
    "Partner with SwagDrive to supply premium swag and gifts to teams around the world.",
};

export default function BecomeAVendorPage() {
  return (
    <CompanyComingSoonSection
      eyebrow="Company"
      title="Become a Vendor"
      description="Interested in supplying products to SwagDrive customers? Our vendor program is coming soon—reach out and we'll be in touch."
    />
  );
}
