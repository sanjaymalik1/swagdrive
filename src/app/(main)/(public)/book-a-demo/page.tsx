import type { Metadata } from "next";
import BookDemoSection from "@/components/sections/BookDemoSection";

export const metadata: Metadata = {
  title: "Book a Demo",
  description:
    "Book a SwagDrive demo and learn how to scale recognition, gifting, and swag globally.",
};

export default function BookDemoPage() {
  return <BookDemoSection />;
}
