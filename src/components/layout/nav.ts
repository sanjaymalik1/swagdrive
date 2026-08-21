export type NavChild = {
  label: string;
  href: string;
  description: string;
};

export type NavLink = {
  label: string;
  href: string;
  children?: readonly NavChild[];
};

export const NAV_LINKS: readonly NavLink[] = [
  {
    label: "Platform",
    href: "/#platform",
    children: [
      {
        label: "CRM Dashboard",
        href: "/platform/crm",
        description: "Track campaigns, budgets, and gifting ROI in one place.",
      },
      {
        label: "Branded Redeem Pages",
        href: "/platform/redeem",
        description: "Let recipients claim gifts on pages that look like you.",
      },
      {
        label: "Swag Store/Shop",
        href: "/platform/swag-store",
        description: "Launch branded stores for teams, events, and advocates.",
      },
    ],
  },
  { label: "Capabilities", href: "/#capabilities" },
  { label: "Design Studio", href: "/#design-studio" },
  { label: "Company", href: "/#company" },
] as const;

export const CONTACT_HREF = "/contact";
export const SIGN_IN_HREF = "/login";
