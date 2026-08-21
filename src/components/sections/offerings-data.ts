const MEDIA = "https://www.bystadium.com/wp-content/uploads/2024/10";

export type OfferingCard = {
  title: string;
  description?: string;
  image: string;
};

export type OfferingTab = {
  id: string;
  label: string;
  labelBreak?: boolean;
  accent: string;
  heading: string;
  headingColor: string;
  panelBg: string;
  listBg: string;
  href: string;
  layout: "shops" | "cards" | "kudos";
  cards?: OfferingCard[];
  listEyebrow?: string;
  listItems: string[];
  brands?: { src: string; alt: string; width: number; height: number }[];
  heroImage?: string;
  kudosImage?: string;
  kudosImageMobile?: string;
  scrollColor: string;
};

export const OFFERING_TABS: OfferingTab[] = [
  {
    id: "shops",
    label: "Shops",
    accent: "#8D12E7",
    heading: "Do it all with your shop",
    headingColor: "#4C0E7A",
    panelBg: "#E8D0FA",
    listBg: "#F6ECFD",
    href: "/products",
    layout: "shops",
    listEyebrow: "PERFECT FOR:",
    listItems: [
      "Company Storefront",
      "Swag & Uniform Shops",
      "Corporate Gifts",
      "Rewards Redemption",
      "Retail",
      "Recognition & Incentives",
      "Fundraising",
    ],
    heroImage: `${MEDIA}/Shop-Image.png`,
    scrollColor: "#8D12E7",
  },
  {
    id: "gifting",
    label: "Gifting",
    accent: "#226104",
    heading: "All your gifting operations in one place",
    headingColor: "#226104",
    panelBg: "#D8F1CC",
    listBg: "#EFF9EB",
    href: "/use-cases",
    layout: "cards",
    cards: [
      {
        title: "Gift Boxes",
        description: "Customize everything from gifts to branding.",
        image: `${MEDIA}/Gift-Boxes.png`,
      },
      {
        title: "Give a Budget",
        description: "Points, currency, or a number of gifts.",
        image: `${MEDIA}/Give-a-Budget.png`,
      },
      {
        title: "Spot Gifting",
        description: "Gift on a whim—there’s always a reason to gift.",
        image: `${MEDIA}/Spot-Gifting.png`,
      },
      {
        title: "Automated Gifting",
        description: "Set and forget for any occasion.",
        image: `${MEDIA}/Automated-Gifting.png`,
      },
    ],
    listItems: [
      "Clients & Prospects",
      "Holidays & Celebrations",
      "Employee Appreciation",
      "Birthdays",
    ],
    scrollColor: "#00C036",
  },
  {
    id: "service",
    label: "Service Anniversaries",
    accent: "#0B7AFC",
    heading: "Celebrate milestones across your team",
    headingColor: "#083467",
    panelBg: "#CEE4FE",
    listBg: "#EBF4FF",
    href: "/use-cases",
    layout: "cards",
    cards: [
      {
        title: "Spot and Recurring",
        description: "Give once or set ongoing recognition.",
        image: `${MEDIA}/Spot-and-Recurring-1.png`,
      },
      {
        title: "Feedback and Reporting",
        description: "Guardrails, analytics, and insights.",
        image: `${MEDIA}/Feedback-and-Reporting.png`,
      },
      {
        title: "Integrations",
        description: "HRIS, CRM, Slack, Teams, and more.",
        image: `${MEDIA}/Integrations.png`,
      },
    ],
    listItems: [
      "Service Anniversaries",
      "Employee Appreciation",
      "Rewards Redemption",
      "Sales Incentives",
    ],
    scrollColor: "#0B7AFC",
  },
  {
    id: "events",
    label: "In-Person & Events",
    labelBreak: true,
    accent: "#FFB800",
    heading: "Elevate your in-person experience",
    headingColor: "#56440C",
    panelBg: "#FEF3CC",
    listBg: "#FEFAEE",
    href: "/gallery",
    layout: "cards",
    cards: [
      {
        title: "Virtual Swag Bar",
        image: `${MEDIA}/Virtual-Swag-Bar.png`,
      },
      {
        title: "Bulk Swag",
        image: `${MEDIA}/Bulk-image.png`,
      },
      {
        title: "VIP Gifts",
        image: `${MEDIA}/VIP-Gifts.png`,
      },
      {
        title: "Goodie Bags, Trays & Cases",
        image: `${MEDIA}/Goodie-Bags.png`,
      },
    ],
    listItems: [
      "Uplevel Your Booth",
      "Capture Leads",
      "Room Drops",
      "Pre- & Post-Event Engagement",
    ],
    scrollColor: "#FFB800",
  },
  {
    id: "kudos",
    label: "Employee Kudos",
    accent: "#FF5B77",
    heading: "Empower recognition with top incentives",
    headingColor: "#7D102E",
    panelBg: "#FEEBF0",
    listBg: "#FDCEDA",
    href: "/use-cases",
    layout: "kudos",
    listItems: [
      "Employee-to-employee",
      "Assign monetary value to kudos or keep them free",
      "Integrate with Teams, Slack, or use our platform",
      "15K+ gifts from top brands + customizable swag",
      "Enable kudos to flow freely across your org chart",
    ],
    kudosImage: `${MEDIA}/peer-to-peer.png`,
    kudosImageMobile: `${MEDIA}/p2p-mobile.png`,
    scrollColor: "#FFB800",
  },
  {
    id: "swag",
    label: "Swag",
    accent: "#226104",
    heading: "The only swag partner you need",
    headingColor: "#226104",
    panelBg: "#D8F1CC",
    listBg: "#EFF9EB",
    href: "/products",
    layout: "cards",
    cards: [
      { title: "VIP Gifts", image: `${MEDIA}/VIP-Gifts-1.png` },
      { title: "Virtual Swag Bar", image: `${MEDIA}/Virtual-Swag-Bar-1.png` },
      { title: "Kits", image: `${MEDIA}/Kits.png` },
      { title: "On-Demand Shops", image: `${MEDIA}/On-Demand-Shops.png` },
      { title: "Bulk Swag", image: `${MEDIA}/Bulk-Swag.png` },
    ],
    listItems: [
      "Global Fulfillment",
      "Endless Customization",
      "Storage",
      "Sustainable Practices",
      "15K+ Items",
    ],
    brands: [
      { src: `${MEDIA}/Nike.svg`, alt: "Nike", width: 50, height: 18 },
      { src: `${MEDIA}/Carhartt.svg`, alt: "Carhartt", width: 97, height: 16 },
      {
        src: `${MEDIA}/The-North-Face.svg`,
        alt: "The North Face",
        width: 56,
        height: 26,
      },
      {
        src: `${MEDIA}/Bella-Cavas.svg`,
        alt: "Bella Canvas",
        width: 101,
        height: 10,
      },
      { src: `${MEDIA}/Columbia.svg`, alt: "Columbia", width: 81, height: 15 },
      { src: `${MEDIA}/Adidas.svg`, alt: "Adidas", width: 40, height: 26 },
      {
        src: `${MEDIA}/Port-Authority.svg`,
        alt: "Port Authority",
        width: 120,
        height: 17,
      },
      { src: `${MEDIA}/many-more.svg`, alt: "and many more", width: 92, height: 11 },
    ],
    scrollColor: "#00C036",
  },
  {
    id: "snacks",
    label: "Snacks",
    accent: "#0B7AFC",
    heading: "Snacks and sips in all the ways",
    headingColor: "#083467",
    panelBg: "#CEE4FE",
    listBg: "#EBF4FF",
    href: "/products",
    layout: "cards",
    cards: [
      {
        title: "Build-Your-Own Boxes",
        image: `${MEDIA}/Build-Your-Own-Boxes.png`,
      },
      { title: "Curated Boxes", image: `${MEDIA}/Curated-Boxes.png` },
      { title: "Surprise Boxes", image: `${MEDIA}/Surprise-Boxes.png` },
      { title: "Goodie Bags", image: `${MEDIA}/Goodie-bags-1.png` },
      { title: "Grab & Go Trays, Cases", image: `${MEDIA}/grab-go.png` },
    ],
    listItems: [
      "Global Fulfillment",
      "Box Customizations",
      "Add Branding & Materials",
      "Add Swag",
      "Sustainable Practices",
    ],
    brands: [
      {
        src: `${MEDIA}/Bang-Cookies-1.svg`,
        alt: "Bang Cookies",
        width: 66,
        height: 23,
      },
      { src: `${MEDIA}/Hippeas-1.svg`, alt: "Hippeas", width: 73, height: 23 },
      { src: `${MEDIA}/Hals-1.svg`, alt: "Hal's", width: 43, height: 23 },
      {
        src: `${MEDIA}/Belgian-Boys-1.svg`,
        alt: "Belgian Boys",
        width: 31,
        height: 25,
      },
      { src: `${MEDIA}/Pipcorn-1.svg`, alt: "Pipcorn", width: 72, height: 23 },
      { src: `${MEDIA}/Pura-1.svg`, alt: "Pura", width: 89, height: 23 },
      {
        src: `${MEDIA}/Beyond-Good-1.svg`,
        alt: "Beyond Good",
        width: 62,
        height: 23,
      },
      { src: `${MEDIA}/many-more.svg`, alt: "and many more", width: 92, height: 11 },
    ],
    scrollColor: "#0B7AFC",
  },
];
