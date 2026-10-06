import type { MetadataRoute } from "next";

const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.swagdrive.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/about",
    "/contact",
    "/gallery",
    "/get-quote",
    "/products",
    "/categories",
    "/use-cases",
    "/careers",
    "/sustainability",
    "/become-a-vendor",
    "/book-a-demo",
    "/diwali",
    "/capabilities/employee-engagement",
    "/capabilities/events-fulfillment",
    "/capabilities/global-warehousing",
    "/capabilities/personalized-gifting",
    "/capabilities/sourcing-manufacturing",
    "/capabilities/swag-management",
    "/design-studio/creative-services",
    "/design-studio/swag-inspiration",
    "/platform/crm",
    "/platform/redeem",
    "/platform/swag-store",
  ];

  return routes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.8,
  }));
}
