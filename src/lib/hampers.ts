export type Hamper = {
  id: number;
  name: string;
  image: string;
  href: string;
  slug: string;
};

export const HAMPER_PLACEHOLDER_IMAGE = "/hampers/placeholder_hamper.png";

export const HAMPERS: Hamper[] = [
  {
    id: 1,
    name: "New Hire Welcome Kit",
    image: HAMPER_PLACEHOLDER_IMAGE,
    href: "/hampers/new-hire",
    slug: "new-hire",
  },
  {
    id: 2,
    name: "Premium Executive Hamper",
    image: HAMPER_PLACEHOLDER_IMAGE,
    href: "/hampers/premium",
    slug: "premium",
  },
  {
    id: 3,
    name: "Eco-Friendly Gift Set",
    image: HAMPER_PLACEHOLDER_IMAGE,
    href: "/hampers/eco",
    slug: "eco",
  },
  {
    id: 4,
    name: "Festive Celebration Box",
    image: HAMPER_PLACEHOLDER_IMAGE,
    href: "/hampers/festive",
    slug: "festive",
  },
  {
    id: 5,
    name: "Employee Appreciation Kit",
    image: HAMPER_PLACEHOLDER_IMAGE,
    href: "/hampers/appreciation",
    slug: "appreciation",
  },
  {
    id: 6,
    name: "Client Gifting Hamper",
    image: HAMPER_PLACEHOLDER_IMAGE,
    href: "/hampers/client",
    slug: "client",
  },
  {
    id: 7,
    name: "Diwali Special Hamper",
    image: HAMPER_PLACEHOLDER_IMAGE,
    href: "/hampers/diwali",
    slug: "diwali",
  },
  {
    id: 8,
    name: "Birthday Celebration Box",
    image: HAMPER_PLACEHOLDER_IMAGE,
    href: "/hampers/birthday",
    slug: "birthday",
  },
  {
    id: 9,
    name: "Work From Home Essentials",
    image: HAMPER_PLACEHOLDER_IMAGE,
    href: "/hampers/wfh",
    slug: "wfh",
  },
  {
    id: 10,
    name: "Leadership Gift Hamper",
    image: HAMPER_PLACEHOLDER_IMAGE,
    href: "/hampers/leadership",
    slug: "leadership",
  },
  {
    id: 11,
    name: "Team Building Kit",
    image: HAMPER_PLACEHOLDER_IMAGE,
    href: "/hampers/team-building",
    slug: "team-building",
  },
  {
    id: 12,
    name: "Wellness & Self-Care Box",
    image: HAMPER_PLACEHOLDER_IMAGE,
    href: "/hampers/wellness",
    slug: "wellness",
  },
];

/** First 6 hampers shown on the landing page section */
export const FEATURED_HAMPERS = HAMPERS.slice(0, 6);

export function getHamperBySlug(slug: string): Hamper | undefined {
  return HAMPERS.find((hamper) => hamper.slug === slug);
}
