const TEAMS = [
  {
    useCase: "Onboarding",
    description: "Let new hires claim their swag via a simple link",
    image: "/platform/redeem/team-deel.png",
  },
  {
    useCase: "Events",
    description: "Collect info and send swag post-event at scale",
    image: "/platform/redeem/team-justworks.png",
  },
  {
    useCase: "Marketing Campaigns",
    description: "Send swag to leads, prospects, or customers",
    image: "/platform/redeem/team-founders-network.png",
  },
  {
    useCase: "Giveaways",
    description: "Distribute secure, single-use links to winners",
    image: "/platform/redeem/team-tithely.png",
  },
] as const;

export default function RedeemTeamsUseSection() {
  return (
    <section className="bg-surface">
      <div className="mx-auto w-full max-w-[1440px] px-5 py-16 min-[480px]:px-10 min-[992px]:py-24">
        <h2 className="m-0 mb-8 text-center font-[family-name:var(--font-satoshi)] text-2xl leading-[1.15] font-bold text-black min-[768px]:mb-12 min-[768px]:text-[2rem] min-[768px]:leading-[2.625rem] min-[1025px]:mb-12 min-[1025px]:text-[3rem] min-[1025px]:leading-[1.2]">
          How Teams Use Redeem Pages
        </h2>

        <div className="grid grid-cols-1 gap-4 min-[768px]:grid-cols-2 min-[1025px]:grid-cols-4 min-[1025px]:gap-4">
          {TEAMS.map((team) => (
            <article
              key={team.useCase}
              className="overflow-hidden rounded-2xl border border-blue-primary/10 bg-white min-[768px]:rounded-[24px]"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={team.image}
                alt=""
                className="mb-6 block h-auto w-full object-cover"
              />

              <div className="px-6 pb-6 min-[768px]:px-[30px] min-[768px]:pb-6">
                <h3 className="m-0 py-2 font-[family-name:var(--font-satoshi)] text-xl leading-[1.2] font-semibold text-blue-primary min-[768px]:text-2xl">
                  {team.useCase}
                </h3>

                <p className="m-0 font-[family-name:var(--font-overpass)] text-sm leading-[1.3] text-black min-[768px]:text-base">
                  {team.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
