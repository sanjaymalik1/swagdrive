export interface NavLink {
  label: string;
  href: string;
}

export const NAV_LINKS: NavLink[] = [
  { label: "Platform", href: "/platform" },
  { label: "Expertise", href: "/expertise" },
  { label: "Swag Inspiration", href: "/inspiration" },
  { label: "Resources", href: "/resources" },
  { label: "Company", href: "/about" },
];

export const CONTACT_HREF = "/contact";
