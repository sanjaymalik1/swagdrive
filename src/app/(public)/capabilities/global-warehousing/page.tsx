import type { Metadata } from "next";
import GlobalWarehousingHeroSection from "@/components/sections/GlobalWarehousingHeroSection";
import GlobalWarehousingSolutionsSection from "@/components/sections/GlobalWarehousingSolutionsSection";

export const metadata: Metadata = {
  title: "Global Warehousing",
  description:
    "Store, pick, and ship swag from warehouses worldwide. Cut customs delays and shipping costs while reaching recipients in more than 180 countries.",
};

export default function GlobalWarehousingPage() {
  return (
    <>
      <GlobalWarehousingHeroSection />
      <GlobalWarehousingSolutionsSection />
    </>
  );
}
