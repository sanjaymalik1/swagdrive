const CARDS = [
  { src: "/landing-carousel/swagupcarousal1.png", tall: false },
  { src: "/landing-carousel/swagupcarousal2.png", tall: true },
  { src: "/landing-carousel/swagupcarousal3.png", tall: false },
  { src: "/landing-carousel/swagupcarousal4.png", tall: true },
  { src: "/landing-carousel/swagupcarousal5.png", tall: false },
  { src: "/landing-carousel/swagupcarousal6.png", tall: true },
  { src: "/landing-carousel/swagupcarousal7.png", tall: false },
  { src: "/landing-carousel/swagupcarousal8.png", tall: true },
] as const;

function CarouselTrack() {
  return (
    <div className="grid h-full w-[200vw] shrink-0 grid-cols-[1fr_0.9fr_1fr_0.9fr_1fr_0.9fr_1fr_0.9fr] gap-4 px-2 min-[1920px]:gap-6">
      {CARDS.map((card) => (
        <div
          key={card.src}
          className={
            card.tall
              ? "h-[90%] self-end overflow-hidden rounded-[20px]"
              : "h-[90%] self-start overflow-hidden rounded-[20px]"
          }
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={card.src}
            alt=""
            className="h-full w-full object-cover object-center"
          />
        </div>
      ))}
    </div>
  );
}

export default function ConsolidateSection() {
  return (
    <section className="bg-[#F8F8F8] py-16 min-[992px]:py-24">
      <div className="mx-auto w-full max-w-[1440px] px-5 min-[480px]:px-10">
        <div className="mx-auto max-w-[746px] text-center">
          <h2 className="m-0 mb-2.5 font-[family-name:var(--font-satoshi)] text-2xl leading-8 font-bold text-black min-[768px]:text-2xl min-[768px]:leading-[30px] min-[992px]:mb-5 min-[992px]:text-[32px] min-[992px]:leading-10">
            Consolidate all your gifting,
            <br />
            swag, and recognition vendors
          </h2>
          <p className="m-0 font-[family-name:var(--font-overpass)] text-sm leading-5 tracking-[0.16px] text-[#2C2D2E] min-[768px]:text-sm min-[768px]:leading-5 min-[992px]:text-lg min-[992px]:leading-7 min-[992px]:tracking-[0.25px]">
            Save big on $ and headaches.
          </p>
        </div>
      </div>

      <div className="mt-8 overflow-hidden min-[768px]:mt-10 min-[992px]:mt-12">
        <div className="swag-card-scroll flex h-[70vw] min-[480px]:h-[30vw] min-[1920px]:h-[24vw]">
          <CarouselTrack />
          <CarouselTrack />
        </div>
      </div>
    </section>
  );
}
