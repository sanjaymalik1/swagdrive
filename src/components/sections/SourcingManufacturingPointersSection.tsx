import Link from "next/link";

const POINTERS = [
  {
    id: "ethical",
    title: "Ethical Sourcing",
    description:
      "Responsible sourcing is at the core of SwagDrive's operations. We partner with suppliers who uphold fair labor practices to ensure that every product is made with integrity. Our rigorous vetting process guarantees compliance with ethical standards while maintaining quality and efficiency.",
    image: "/capabilities/sourcing-manufacturing/pointer-ethical.webp",
    imageAlt: "Ethical sourcing and fair procurement",
    reverse: false,
    dark: true,
  },
  {
    id: "import",
    title: "Import & Domestic Sourcing",
    description:
      "Global reach meets local expertise. SwagDrive provides both import and domestic sourcing solutions, resulting in flexible production while maintaining cost efficiency. Whether sourcing internationally for scale or domestically for speed, we tailor solutions to meet brand needs.",
    image: "/capabilities/sourcing-manufacturing/pointer-import.webp",
    imageAlt: "Import and domestic logistics sourcing",
    reverse: true,
    dark: false,
  },
  {
    id: "safety",
    title: "Product Safety (Quality Assurance)",
    description:
      "Quality and safety are non-negotiable with us. SwagDrive implements strict quality assurance protocols to ensure all merchandise meets industry standards. From material testing to compliance certifications, we guarantee products are safe, durable, and aligned with brand expectations.",
    image: "/capabilities/sourcing-manufacturing/pointer-safety.webp",
    imageAlt: "Quality assurance in the warehouse",
    reverse: false,
    dark: true,
  },
  {
    id: "compliance",
    title: "Social Compliance",
    description:
      "Manufacturing should be ethical, transparent, and socially responsible. SwagDrive enforces social compliance measures across its supply chain, maintaining fair wages, safe working conditions, and adherence to global labor regulations. Our commitment to responsible production protects workers and strengthens brand integrity.",
    image: "/capabilities/sourcing-manufacturing/pointer-compliance.webp",
    imageAlt: "Social compliance across the supply chain",
    reverse: true,
    dark: false,
  },
  {
    id: "sustainability",
    title: "Sustainability for the Future",
    description:
      "Sustainable manufacturing is essential for reducing environmental impact. SwagDrive prioritizes eco-friendly materials, responsible production methods, and waste reduction strategies. From recycled fabrics to biodegradable packaging, we help brands meet sustainability goals without compromising quality.",
    image: "/capabilities/sourcing-manufacturing/pointer-sustainability.webp",
    imageAlt: "Sustainable materials and eco-friendly packaging",
    reverse: false,
    dark: true,
    link: { label: "found here", href: "/contact" },
  },
] as const;

export default function SourcingManufacturingPointersSection() {
  return (
    <>
      <section className="bg-white">
        <div className="mx-auto w-full max-w-7xl px-5 py-16 text-center min-[480px]:px-10 min-[992px]:py-24">
          <h2 className="m-0 font-[family-name:var(--font-satoshi)] text-[1.75rem] leading-[1.2] font-bold text-blue-primary min-[768px]:text-[2.25rem] min-[992px]:text-[2.875rem]">
            Higher standards in every supply chain
          </h2>
          <p className="mx-auto m-0 mt-4 max-w-[48rem] font-[family-name:var(--font-overpass)] text-base leading-[1.55] text-black/80 min-[768px]:mt-5 min-[768px]:text-lg">
            With ample experience in global sourcing and ethical manufacturing,
            SwagDrive delivers high-quality products while prioritizing
            sustainability and social compliance. Brands can trust us to deliver
            responsibly produced, rigorously tested merchandise that meets the
            highest standards.
          </p>
        </div>
      </section>

      {POINTERS.map((pointer) => (
        <section
          key={pointer.id}
          className={pointer.dark ? "bg-blue-primary" : "bg-white"}
        >
          <div className="mx-auto w-full max-w-7xl px-5 py-14 min-[480px]:px-10 min-[768px]:py-16 min-[992px]:py-20">
            <div
              className={`grid grid-cols-1 items-center gap-10 min-[992px]:grid-cols-2 min-[992px]:gap-16 ${
                pointer.reverse ? "min-[992px]:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div className="w-full max-w-[36rem]">
                <h3
                  className={`m-0 font-[family-name:var(--font-satoshi)] text-[1.625rem] leading-[1.2] font-bold min-[768px]:text-[2rem] min-[992px]:text-[2.5rem] ${
                    pointer.dark
                      ? "text-yellow-secondary"
                      : "text-blue-primary"
                  }`}
                >
                  {pointer.title}
                </h3>
                <p
                  className={`m-0 mt-4 font-[family-name:var(--font-overpass)] text-base leading-[1.55] min-[768px]:mt-5 min-[768px]:text-lg ${
                    pointer.dark ? "text-white/90" : "text-black/80"
                  }`}
                >
                  {pointer.description}
                  {"link" in pointer && pointer.link ? (
                    <>
                      {" "}
                      Our comprehensive sustainability initiatives can be{" "}
                      <Link
                        href={pointer.link.href}
                        className="underline underline-offset-2 transition-opacity hover:opacity-80"
                      >
                        {pointer.link.label}
                      </Link>
                      .
                    </>
                  ) : null}
                </p>
              </div>

              <div
                className={`w-full overflow-hidden rounded-2xl ring-2 min-[768px]:rounded-[1.25rem] ${
                  pointer.dark
                    ? "ring-yellow-secondary/50"
                    : "ring-blue-primary/25"
                }`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={pointer.image}
                  alt={pointer.imageAlt}
                  className="block h-auto w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
