import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import { DiwaliAnnouncementBar } from "@/components/promo/DiwaliAnnouncementBar";
import "../../globals.css";
import "./diwali.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-diwali-heading",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-diwali-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Diwali Gifting Catalogue | SwagDrive",
  description:
    "SwagDrive's Diwali 2026 corporate gifting collection — hampers, desk essentials, apparel and premium gifts for your team.",
};

export default function DiwaliLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${inter.variable} theme-diwali h-full antialiased`}
    >
      <body className="flex min-h-full flex-col font-[family-name:var(--font-diwali-body)]">
        <DiwaliAnnouncementBar placement="inline" />
        {children}
      </body>
    </html>
  );
}
