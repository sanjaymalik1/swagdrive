const ROW_A = [
  { src: "/landing-carousel/swagupcarousal1.png", tall: false },
  { src: "/landing-carousel/swagupcarousal2.png", tall: true },
  { src: "/landing-carousel/swagupcarousal3.png", tall: false },
  { src: "/landing-carousel/swagupcarousal4.png", tall: true },
  { src: "/landing-carousel/swagupcarousal5.png", tall: false },
  { src: "/landing-carousel/swagupcarousal6.png", tall: true },
  { src: "/landing-carousel/swagupcarousal7.png", tall: false },
  { src: "/landing-carousel/swagupcarousal8.png", tall: true },
] as const;

const ROW_B = [
  { src: "/landing-carousel/swagupcarousal5.png", tall: true },
  { src: "/landing-carousel/swagupcarousal8.png", tall: false },
  { src: "/landing-carousel/swagupcarousal2.png", tall: true },
  { src: "/landing-carousel/swagupcarousal6.png", tall: false },
  { src: "/landing-carousel/swagupcarousal1.png", tall: true },
  { src: "/landing-carousel/swagupcarousal4.png", tall: false },
  { src: "/landing-carousel/swagupcarousal7.png", tall: true },
  { src: "/landing-carousel/swagupcarousal3.png", tall: false },
] as const;

function MarqueeTrack({
  cards,
  reverse = false,
}: {
  cards: readonly { src: string; tall: boolean }[];
  reverse?: boolean;
}) {
  return (
    <div
      className={
        reverse
          ? "swag-card-scroll-reverse flex h-[58vw] min-[480px]:h-[26vw] min-[1920px]:h-[20vw]"
          : "swag-card-scroll flex h-[58vw] min-[480px]:h-[26vw] min-[1920px]:h-[20vw]"
      }
    >
      {[0, 1].map((copy) => (
        <div
          key={copy}
          className="grid h-full w-[200vw] shrink-0 grid-cols-[1fr_0.9fr_1fr_0.9fr_1fr_0.9fr_1fr_0.9fr] gap-3 px-1.5 min-[768px]:gap-4 min-[1920px]:gap-5"
        >
          {cards.map((card) => (
            <div
              key={`${copy}-${card.src}-${card.tall}`}
              className={
                card.tall
                  ? "h-[92%] self-end overflow-hidden rounded-[20px]"
                  : "h-[92%] self-start overflow-hidden rounded-[20px]"
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
      ))}
    </div>
  );
}

export default function SwagInspirationMarqueeSection() {
  return (
    <section className="overflow-hidden bg-[#F8F8F8] py-8 min-[768px]:py-10 min-[992px]:py-12">
      <div className="flex flex-col gap-3 min-[768px]:gap-4">
        <MarqueeTrack cards={ROW_A} />
        <MarqueeTrack cards={ROW_B} reverse />
      </div>
    </section>
  );
}
