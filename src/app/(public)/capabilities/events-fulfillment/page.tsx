import type { Metadata } from "next";
import EventsFulfillmentHeroSection from "@/components/sections/EventsFulfillmentHeroSection";

export const metadata: Metadata = {
  title: "Events Fulfillment",
  description:
    "Drive engagement and ROI with SwagDrive's all-in-one solution for event shipping, storage, returns, and branded swag.",
};

export default function EventsFulfillmentPage() {
  return (
    <>
      <EventsFulfillmentHeroSection />
    </>
  );
}
