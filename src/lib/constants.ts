import { InquiryStatus } from "../generated/prisma/client";

// ─── Inquiry Status ───────────────────────────────────────────────────────────

export const INQUIRY_STATUS_LABELS: Record<InquiryStatus, string> = {
  NEW:       "New",
  CONTACTED: "Contacted",
  QUOTED:    "Quoted",
  CONVERTED: "Converted",
  CLOSED:    "Closed",
};

export const INQUIRY_STATUS_COLORS: Record<InquiryStatus, string> = {
  NEW:       "bg-blue-100 text-blue-800",
  CONTACTED: "bg-yellow-100 text-yellow-800",
  QUOTED:    "bg-purple-100 text-purple-800",
  CONVERTED: "bg-green-100 text-green-800",
  CLOSED:    "bg-gray-100 text-gray-600",
};

// ─── Quote Form Options ───────────────────────────────────────────────────────

export const BUDGET_RANGES: string[] = [
  "Under ₹25,000",
  "₹25,000 – ₹1,00,000",
  "₹1,00,000 – ₹5,00,000",
  "₹5,00,000 – ₹20,00,000",
  "Above ₹20,00,000",
  "Not sure yet",
];

export const INQUIRY_SOURCES: string[] = [
  "Google Search",
  "LinkedIn",
  "WhatsApp / Referral",
  "Instagram",
  "Direct / Already knew you",
  "Other",
];

// ─── Use Cases ────────────────────────────────────────────────────────────────

export const USE_CASES: { title: string; description: string }[] = [
  {
    title: "Employee Onboarding",
    description:
      "Make every new hire feel welcome from day one with thoughtfully curated onboarding kits that reflect your brand values.",
  },
  {
    title: "Client Appreciation",
    description:
      "Strengthen business relationships with premium gifting that leaves a lasting impression on your most valued clients.",
  },
  {
    title: "Festive Gifting",
    description:
      "Celebrate Diwali, Holi, and other occasions with customised festive hampers that your teams and clients will love.",
  },
  {
    title: "Event Swag",
    description:
      "Elevate conferences, product launches, and corporate events with branded merchandise that people actually keep and use.",
  },
  {
    title: "Sales Incentives",
    description:
      "Motivate high-performing teams and reward milestones with curated gift sets that drive results and boost morale.",
  },
];

// ─── Site Config ──────────────────────────────────────────────────────────────

export const SITE_CONFIG = {
  name:            "SwagDrive",
  tagline:         "Premium Corporate Gifting for Indian Businesses",
  whatsappNumber:  "919999999999",
  email:           "hello@company.com",
  phone:           "+91 99999 99999",
  city:            "Delhi",
} as const;
