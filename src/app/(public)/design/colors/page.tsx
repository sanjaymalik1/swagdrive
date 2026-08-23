import type { Metadata } from "next";
import ColorPreviewPage from "@/components/design/ColorPreviewPage";

export const metadata: Metadata = {
  title: "Color Preview",
  description: "Internal brand color exploration — compare extracted and site palette shades.",
  robots: { index: false, follow: false },
};

export default function DesignColorsPage() {
  return <ColorPreviewPage />;
}
