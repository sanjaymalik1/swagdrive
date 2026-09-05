export type SwagManagementSolutionTab = {
  id: string;
  label: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  overlayImage?: string;
  cta?: {
    label: string;
    href: string;
  };
};

export const SWAG_MANAGEMENT_SOLUTION_TABS: readonly SwagManagementSolutionTab[] =
  [
    {
      id: "one-solution",
      label: "One solution",
      title: "One solution, zero vendor headaches",
      description:
        "Managing multiple vendors is time-consuming and inefficient. SwagDrive Swag Sourcing centralizes your swag and corporate gift sourcing globally, so you get the most competitive prices, premium quality, and a streamlined process, all in one place, without the juggling headache.",
      image: "/capabilities/swag-management/tab-one-solution.avif",
      imageAlt: "Centralized swag inventory dashboard",
      overlayImage: "/capabilities/swag-management/tab-one-solution-overlay.avif",
    },
    {
      id: "quality",
      label: "Swag quality guarantee",
      title: "Swag they'll love, not toss",
      description:
        "Cheap, disposable swag can hurt your brand's reputation, and often ends up in the trash. Our Swag Sourcing experts carefully select high-quality, sustainable, and beautifully designed items that align with your brand's values, ensuring every gift feels thoughtful, premium, and unforgettable. No waste, just lasting impressions!",
      image: "/capabilities/swag-management/tab-quality.avif",
      imageAlt: "Premium branded merchandise",
    },
    {
      id: "merchandise",
      label: "Merchandise builder",
      title: "Create, customize, and order swag in minutes",
      description:
        "Easily create, customize, and restock branded swag with our Merchandise Builder, all within the SwagDrive platform. From stylish apparel to cutting-edge tech gadgets, design high-quality swag that turns recipients into loyal brand champions with ease.",
      image: "/capabilities/swag-management/tab-merchandise.avif",
      imageAlt: "Merchandise builder customization tools",
    },
    {
      id: "store",
      label: "White-labeled store portals",
      title:
        "Manage branded swag through a white-labeled, self-service Store Portal",
      description:
        "Simplify swag management for events, sales, marketing, and employee programs. Combine warehouse inventory with print-on-demand production to keep every swag store stocked without over-ordering, then let recipients browse, redeem, or purchase merch while SwagDrive automates fulfillment, global shipping, and order tracking.",
      image: "/capabilities/swag-management/tab-store.avif",
      imageAlt: "White-labeled swag store portal",
      cta: {
        label: "Learn more about Swag Store Portals",
        href: "/platform/swag-store",
      },
    },
    {
      id: "warehousing",
      label: "Global warehousing",
      title: "Global warehousing & fulfillment for seamless distribution",
      description:
        "Say goodbye to cluttered offices. Store your swag in SwagDrive's state-of-the-art global warehouses located in the USA, Canada, UK, Europe, and Australia. With our seamless fulfillment service, you can ship directly to employees, customers, or event locations, ensuring fast, efficient delivery without the hassle of managing inventory.",
      image: "/capabilities/swag-management/tab-warehousing.svg",
      imageAlt: "Global warehousing inventory dashboard",
      cta: {
        label: "Learn more about Global Warehousing",
        href: "/capabilities/global-warehousing",
      },
    },
  ] as const;
