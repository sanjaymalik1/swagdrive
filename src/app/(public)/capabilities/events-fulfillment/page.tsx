import type { Metadata } from "next";
import EventsFulfillmentHeroSection from "@/components/sections/EventsFulfillmentHeroSection";
import EventsFulfillmentWhyChooseSection from "@/components/sections/EventsFulfillmentWhyChooseSection";
import EventsFulfillmentDetailsSection from "@/components/sections/EventsFulfillmentDetailsSection";

export const metadata: Metadata = {
  title: "Events Fulfillment",
  description:
    "Drive engagement and ROI with SwagDrive's all-in-one solution for event shipping, storage, returns, and branded swag.",
};

export default function EventsFulfillmentPage() {
  return (
    <>
      <EventsFulfillmentHeroSection />
      <EventsFulfillmentWhyChooseSection />
      <EventsFulfillmentDetailsSection />
    </>
  );
}
