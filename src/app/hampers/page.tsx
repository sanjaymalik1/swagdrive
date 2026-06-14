import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import HampersGrid from "@/components/hampers/HampersGrid";
import { HAMPERS } from "@/lib/hampers";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hamper Collections",
  description:
    "Thoughtfully curated hampers for every occasion — employee onboarding, client gifting, festivals, and more.",
};

export default function HampersPage() {
  return (
    <>
      <Header />
      <main className="bg-white px-4 pb-16">
        <div className="mx-auto max-w-[1280px] pt-12 pb-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900">
            All Hamper Collections
          </h1>
          <p className="mt-2 text-lg text-gray-500">
            Thoughtfully curated hampers for every occasion
          </p>
        </div>

        <div className="mx-auto max-w-[1280px]">
          <HampersGrid hampers={HAMPERS} priorityFirst={3} />
        </div>
      </main>
      <Footer />
    </>
  );
}
