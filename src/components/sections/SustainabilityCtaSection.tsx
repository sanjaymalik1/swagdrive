const GALLERY_IMAGES = [
  { src: "/sustainability/gift-1.webp", ratio: "16 / 9" },
  { src: "/sustainability/gift-2.avif", ratio: "1102 / 1114" },
  { src: "/sustainability/gift-3.webp", ratio: "2560 / 1804" },
  { src: "/sustainability/gift-4.avif", ratio: "1 / 1" },
  { src: "/sustainability/gift-5.webp", ratio: "1 / 1" },
  { src: "/sustainability/gift-6.avif", ratio: "990 / 998" },
  { src: "/sustainability/gift-7.webp", ratio: "1 / 1" },
] as const;

export default function SustainabilityCtaSection() {
  return (
    <section className="bg-white">
      <div className="mx-auto w-full max-w-7xl px-5 py-16 min-[480px]:px-10 min-[992px]:py-24">
        <div className="mx-auto max-w-[42rem] text-center">
          <h2 className="m-0 font-[family-name:var(--font-satoshi)] text-[1.75rem] leading-[1.2] font-bold tracking-[-0.04rem] text-black min-[768px]:text-[2.25rem] min-[768px]:leading-[1.2] min-[992px]:text-[2.875rem]">
            Gifts that are kind to the planet
          </h2>
          <p className="mx-auto mt-4 font-[family-name:var(--font-overpass)] text-base leading-[1.5] font-light text-black/80 min-[768px]:mt-5 min-[768px]:text-[1.125rem]">
            We are always growing our selection of beautiful, sustainable
            gifts from brands who are mindful of their impact on the
            environment.
          </p>
        </div>

        <div className="mt-10 columns-1 gap-6 min-[768px]:mt-12 min-[768px]:columns-2 min-[992px]:columns-3">
          {GALLERY_IMAGES.map((item) => (
            <div
              key={item.src}
              className="mb-6 break-inside-avoid overflow-hidden rounded-2xl bg-surface"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={item.src}
                alt="Sustainable swag and gifting"
                className="block w-full object-cover"
                style={{ aspectRatio: item.ratio }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
