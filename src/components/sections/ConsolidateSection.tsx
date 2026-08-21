const CDN =
  "https://cdn.prod.website-files.com/64eb79e19f92b72fe47f81e8";

const CARDS = [
  {
    src: `${CDN}/6848952b4806275d7ed4712a_13-min.jpg`,
    tall: false,
  },
  {
    src: `${CDN}/6848952b5479bc3723c9fcf8_Rectangle%203471650-min.jpg`,
    tall: true,
  },
  {
    src: `${CDN}/6848952bb4d3d499aab02214_14-min.jpg`,
    tall: false,
  },
  {
    src: `${CDN}/68756617e6375ca7ab0275e8_Frame%202134097738-min.jpg`,
    tall: true,
  },
] as const;

function CarouselTrack() {
  return (
    <div className="grid h-full w-[100vw] shrink-0 grid-cols-[1fr_0.9fr_1fr_0.9fr] gap-4 px-2 min-[1920px]:gap-6">
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
    <section className="bg-[#F8F8F8]">
      <div className="mx-auto w-full max-w-[1440px] px-6 pt-8 min-[768px]:px-0 min-[768px]:pt-9 min-[992px]:pt-[60px]">
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

      <div className="mt-8 overflow-hidden pb-8 min-[768px]:mt-10 min-[768px]:pb-9 min-[992px]:mt-12 min-[992px]:pb-[65px]">
        <div className="swag-card-scroll flex h-[70vw] min-[480px]:h-[30vw] min-[1920px]:h-[24vw]">
          <CarouselTrack />
          <CarouselTrack />
        </div>
      </div>
    </section>
  );
}
