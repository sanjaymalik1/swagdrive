import type { Metadata } from "next";
import ContactBookDemoSection from "@/components/sections/ContactBookDemoSection";

export const metadata: Metadata = {
  title: "Book a Demo",
  description:
    "Book a SwagDrive demo and learn how to scale recognition, gifting, and swag globally.",
};

export default function ContactPage() {
  return <ContactBookDemoSection />;
}
