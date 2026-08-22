export type GlobalWarehousingSolutionTab = {
  id: string;
  label: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  cta?: {
    label: string;
    href: string;
  };
};

export const GLOBAL_WAREHOUSING_SOLUTION_TABS: readonly GlobalWarehousingSolutionTab[] =
  [
    {
      id: "warehousing",
      label: "Warehousing and logistics",
      title:
        "Secure global storage and shipping without the custom fee headaches",
      description:
        "SwagDrive's state-of-the-art global warehousing network across the USA, Canada, UK, Europe, and Australia ensures fast, reliable, and secure storage and shipping to over 180 countries. Whether sending swag, gifts, or event materials, our seamless fulfillment process ensures your items are safely stored, ready to ship, and free from customs issues, hidden fees, and delays.",
      image: "/capabilities/global-warehousing/tab-warehousing.avif",
      imageAlt: "Global warehousing and logistics dashboard",
    },
    {
      id: "inventory",
      label: "Real-time inventory",
      title: "Eliminate stockouts with real-time inventory reporting",
      description:
        "Stay in control of your swag with SwagDrive's real-time inventory management platform. Track stock levels, get low-stock alerts, and easily manage shipments, reorders, and distribution. With detailed reports and data-driven insights, you can optimize your logistics, improve efficiency, and ensure you never run out of essential promotional items.",
      image: "/capabilities/global-warehousing/tab-inventory.avif",
      imageAlt: "Real-time inventory dashboard",
    },
    {
      id: "address-confirmation",
      label: "Address confirmation",
      title: "Say goodbye to delivery failures with Address Confirmation",
      description:
        "Ensure accurate deliveries with SwagDrive's address confirmation. Recipients can update their address before shipping, reducing returns and failed deliveries, no matter their location. Plus, automated tracking keeps you informed, so you can follow up promptly to keep the conversation going.",
      image: "/capabilities/global-warehousing/tab-address-confirmation.avif",
      imageAlt: "Address confirmation flow",
      cta: { label: "Learn more", href: "/contact" },
    },
    {
      id: "returns",
      label: "Returns & redistribution",
      title: "Simplified stock returns for maximum efficiency",
      description:
        "Returns don't have to be a headache. SwagDrive streamlines the process for all types of items; whether it's leftover swag, unsent gifts, or product samples. Our prepaid return labels and automated restocking system make it easy to handle returns and ensure your inventory stays up to date.",
      image: "/capabilities/global-warehousing/tab-returns.avif",
      imageAlt: "Returns and redistribution dashboard",
    },
    {
      id: "events",
      label: "Event fulfillment",
      title: "Stress-free event swag fulfillment and returns",
      description:
        "Take the stress out of event logistics. With SwagDrive, your swag and marketing materials are shipped directly to the event venue, ensuring on-time delivery. After the event, we handle returns and restock unused items, so you never have to worry about excess inventory or wasted products.",
      image: "/capabilities/global-warehousing/tab-events.avif",
      imageAlt: "Event swag fulfillment at a trade show",
      cta: {
        label: "Learn more",
        href: "/capabilities/events-fulfillment",
      },
    },
    {
      id: "kitting",
      label: "Kitting & bundling",
      title: "Kitting & bundling for a personalized touch",
      description:
        "Our warehousing team can assemble personalized bundles in-house, combining multiple items into curated gift sets. Add handwritten notes for a thoughtful touch and create an unforgettable unboxing experience, all without lifting a finger.",
      image: "/capabilities/global-warehousing/tab-kitting.avif",
      imageAlt: "Personalized kitting and bundling",
    },
  ] as const;
