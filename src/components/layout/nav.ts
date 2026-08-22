export type NavChild = {
  label: string;
  href: string;
  description: string;
};

export type NavLink = {
  label: string;
  href: string;
  children?: readonly NavChild[];
  columns?: 1 | 2;
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
  {
    label: "Capabilities",
    href: "/#capabilities",
    columns: 2,
    children: [
      {
        label: "Global Warehousing",
        href: "/capabilities/global-warehousing",
        description: "Store and ship swag worldwide from secure global hubs.",
      },
      {
        label: "Events Fulfillment",
        href: "/capabilities/events-fulfillment",
        description: "Deliver swag to and from any event, on time and on brand.",
      },
      {
        label: "Sourcing & Manufacturing",
        href: "/capabilities/sourcing-manufacturing",
        description: "Source premium products and manufacture custom swag at scale.",
      },
      {
        label: "Swag Management",
        href: "/capabilities/swag-management",
        description: "Create, track, and send custom swag from one dashboard.",
      },
      {
        label: "Employee Engagement",
        href: "/capabilities/employee-engagement",
        description: "Celebrate milestones and motivate teams with thoughtful gifts.",
      },
      {
        label: "Personalized Gifting",
        href: "/capabilities/personalized-gifting",
        description: "Send hyper-personalized gifts that stand out and convert.",
      },
    ],
  },
  {
    label: "Design Studio",
    href: "/#design-studio",
    children: [
      {
        label: "Creative Services",
        href: "/design-studio/creative-services",
        description: "Expert design support for logos, packaging, and brand kits.",
      },
      {
        label: "Swag Inspiration",
        href: "/design-studio/swag-inspiration",
        description: "Browse curated ideas and trends to spark your next campaign.",
      },
    ],
  },
  { label: "Company", href: "/#company" },
] as const;

export const CONTACT_HREF = "/contact";
export const SIGN_IN_HREF = "/login";
