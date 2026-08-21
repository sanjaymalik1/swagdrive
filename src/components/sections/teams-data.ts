const MEDIA = "https://www.bystadium.com/wp-content/uploads/2024/10";

export type TeamTab = {
  id: string;
  label: string;
  heading: string;
  description: string;
  href: string;
  icon: string;
  iconAlt: string;
  bullets: string[];
  accent: string;
  tabBg: string;
  panelBg: string;
  listBg: string;
};

export const TEAM_TABS: TeamTab[] = [
  {
    id: "human",
    label: "Human Resources",
    heading: "Empower Your Employees",
    description:
      "Optimize HR processes, recognize employees, and nurture the employee experience with SwagDrive.",
    href: "/use-cases",
    icon: `${MEDIA}/Human-Resources-Icon.svg`,
    iconAlt: "Human Resources",
    bullets: [
      "Onboard employees with an onboarding shop or swag kits.",
      "Create automations to send gifts for work anniversaries and milestones.",
      "Boost company culture with a kudos program.",
    ],
    accent: "#8D12E7",
    tabBg: "#E8D0FA",
    panelBg: "#4C0E7A",
    listBg: "#F6ECFD",
  },
  {
    id: "marketing",
    label: "Marketing & Branding",
    heading: "Enrich your marketing efforts",
    description:
      "Increase brand awareness, boost marketing campaigns, and attract new customers with SwagDrive.",
    href: "/products",
    icon: `${MEDIA}/marketing-icon.svg`,
    iconAlt: "Marketing and Branding",
    bullets: [
      "Avoid colleagues going rogue with your company's logo.",
      "Celebrate rebranding with a swag shop for employees.",
      "Set up a client gifting campaign to market new launches.",
      "Strengthen and attract partnerships with regional eats, snacks, and more.",
    ],
    accent: "#FF5B77",
    tabBg: "#FDCEDA",
    panelBg: "#7D102E",
    listBg: "#FEEBF0",
  },
  {
    id: "team-leaders",
    label: "Team Leaders",
    heading: "Shape company culture with rewards",
    description:
      "Foster a positive team culture with rewards, recognition, and gifting.",
    href: "/use-cases",
    icon: `${MEDIA}/Team-info.svg`,
    iconAlt: "Team Leaders",
    bullets: [
      "Allocate and track funds across your team for easy spending.",
      "Reward your team for a job well done with snacks, swag, and more.",
      "Enhance team morale with a kudos program.",
    ],
    accent: "#00C036",
    tabBg: "#D8F1CC",
    panelBg: "#226104",
    listBg: "#EFF9EB",
  },
  {
    id: "sales",
    label: "Sales",
    heading: "Lead your sales team to success",
    description:
      "Equip your sales team with the tools they need to secure wins.",
    href: "/get-quote",
    icon: `${MEDIA}/sales-icon.svg`,
    iconAlt: "Sales",
    bullets: [
      "Attract and nurture prospects by sending a gift.",
      "Show your client appreciation by gifting them top-tier swag.",
      "Celebrate sales wins with our catalog of snacks, swag, and more.",
    ],
    accent: "#FFB800",
    tabBg: "#FBF5E0",
    panelBg: "#56440C",
    listBg: "#FBF5E0",
  },
  {
    id: "operations",
    label: "Operations",
    heading: "Streamline your company’s processes",
    description:
      "Use SwagDrive to take your processes to the next level, from onboarding to performance goals.",
    href: "/gallery",
    icon: `${MEDIA}/Operation-info.svg`,
    iconAlt: "Operations",
    bullets: [
      "Create a swag shop for uniforms, supplies, and more.",
      "Onboard at scale with swag kits.",
      "Store, distribute, and organize your swag inventory with SwagDrive.",
      "Centralize all your approved designs.",
    ],
    accent: "#0B7AFC",
    tabBg: "#CEE4FE",
    panelBg: "#083467",
    listBg: "#EBF4FF",
  },
  {
    id: "event-managers",
    label: "Event Managers",
    heading: "Make every event remarkable",
    description:
      "Every aspect of the event matters! Ensure a memorable experience with gifts they’ll love.",
    href: "/contact",
    icon: `${MEDIA}/Event-manager-tab.svg`,
    iconAlt: "Event Managers",
    bullets: [
      "Pair any event (virtual or in-person) with epic snacks and swag to match.",
      "Gift attendees before, during, or after the event.",
      'Collect leads at scale using our "Scan for Swag" feature.',
      "Award attendees with redeemable points to your shop.",
    ],
    accent: "#00C036",
    tabBg: "#D8F1CC",
    panelBg: "#226104",
    listBg: "#EFF9EB",
  },
];
