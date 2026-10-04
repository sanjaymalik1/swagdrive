import type { Metadata } from "next";
import ContactBookDemoSection from "@/components/sections/ContactBookDemoSection";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Have something on your mind? Drop the SwagDrive team a line and we'll get back to you as soon as we can.",
};

export default function ContactPage() {
  return <ContactBookDemoSection />;
}
