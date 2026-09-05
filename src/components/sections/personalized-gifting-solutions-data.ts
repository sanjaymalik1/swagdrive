export type PersonalizedGiftingSolutionTab = {
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

export const PERSONALIZED_GIFTING_SOLUTION_TABS: readonly PersonalizedGiftingSolutionTab[] =
  [
    {
      id: "egifts",
      label: "eGifts",
      title: "Deliver instant engagement with personalized eGift outreach",
      description:
        "With professionals receiving over 120 emails a day, standing out is tougher than ever. Enhance your outreach with SwagDrive's 3,800+ eGift options, offering instant delivery and personalization in 170+ countries. Recipients can select their preferred eGift or donate to charity, ensuring every gift resonates. Easily integrate eGifts into your email and LinkedIn campaigns, and pay only for those redeemed, maximizing your impact and budget.",
      image: "/capabilities/personalized-gifting/tab-egifts.svg",
      imageAlt: "Personalized eGift dashboard",
      cta: { label: "Explore Personalized eGifts", href: "/contact" },
    },
    {
      id: "bundles",
      label: "Custom bundles",
      title: "Surprise and delight with curated custom bundles",
      description:
        "Go beyond standard gifts with SwagDrive's custom bundles. In our warehouses, you can kit and bundle multiple Marketplace gifts and swag items together to create personalized, thoughtful packages. Include handwritten notes to add a personal touch to your outreach, making every interaction even more meaningful.",
      image: "/capabilities/personalized-gifting/tab-bundles.avif",
      imageAlt: "Custom gift bundles and packaging",
    },
    {
      id: "amazon",
      label: "Amazon gifting",
      title: "Unlock limitless hyper-personalized gifting with Amazon",
      description:
        "Break through the noise and captivate your audience with hyper-personalized B2B gifts from Amazon. Choose from millions of items for relevant, engaging corporate gifts delivered directly from Amazon. Enjoy swift delivery, a smaller carbon footprint, and cost savings by paying only for redeemed gifts. Seamlessly integrate these impactful gifts into your corporate gifting campaigns for a cost-effective, greener approach to B2B engagement.",
      image: "/capabilities/personalized-gifting/tab-amazon.avif",
      imageAlt: "Amazon gifting marketplace integration",
      cta: { label: "Discover Amazon gifting", href: "/contact" },
    },
    {
      id: "landing",
      label: "Landing pages",
      title: "Save time and maintain brand control with in-app landing pages",
      description:
        "Streamline your campaigns with SwagDrive's drag-and-drop landing page builder, enabling you to create impactful, branded landing pages in minutes. Benefit from seamless address confirmation to ensure gifts reach recipients at their preferred location. Manage outreach, track engagement, and maintain brand control—all while optimizing ROI. Advanced landing page solutions for complex needs are also available through our Creative Services team.",
      image: "/capabilities/personalized-gifting/tab-landing.avif",
      imageAlt: "Branded landing page builder",
      cta: {
        label: "Learn more about In-app Landing Pages",
        href: "/platform/redeem",
      },
    },
    {
      id: "insights",
      label: "Insights",
      title: "Say goodbye to guesswork with data-driven, measurable gifting",
      description:
        "Marketers juggle more than 12 tools daily, always needing to demonstrate ROI. SwagDrive simplifies this with SwagDrive Insights—our powerful, real-time analytics platform. Integrated seamlessly with Salesforce, SwagDrive Insights provides complete visibility into your gifting and swag campaigns. Track performance, understand what drives results, refine your strategy, and prove ROI with ease.",
      image: "/capabilities/personalized-gifting/tab-insights.avif",
      imageAlt: "Gifting ROI insights dashboard",
      cta: {
        label: "Learn more about SwagDrive Insights",
        href: "/platform/crm",
      },
    },
  ] as const;
