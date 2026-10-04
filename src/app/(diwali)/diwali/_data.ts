export interface DiwaliProduct {
  slug: string;
  name: string;
  image: string;
}

import rawProducts from "./_products.json";

// Flat list — all products are shown together under "Our Festive Collection".
export const DIWALI_PRODUCTS: DiwaliProduct[] = (
  rawProducts as { slug: string; name: string; image: string }[]
).map(({ slug, name, image }) => ({ slug, name, image }));
