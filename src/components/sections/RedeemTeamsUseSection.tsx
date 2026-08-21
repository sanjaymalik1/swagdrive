const TEAMS = [
  {
    company: "Deel",
    useCase: "Onboarding",
    description: "Let new hires claim their swag via a simple link",
    image: "/platform/redeem/team-deel.png",
    badgeClass: "bg-[#C8FF6B] text-[#1B1B1C]",
  },
  {
    company: "JustWorks",
    useCase: "Events",
    description: "Collect info and send swag post-event at scale",
    image: "/platform/redeem/team-justworks.png",
    badgeClass: "bg-[#F54900] text-white",
  },
  {
    company: "Founders Network",
    useCase: "Marketing Campaigns",
    description: "Send swag to leads, prospects, or customers",
    image: "/platform/redeem/team-founders-network.png",
    badgeClass: "bg-[#FFB8D9] text-white",
  },
  {
    company: "Tithe.ly",
    useCase: "Giveaways",
    description: "Distribute secure, single-use links to winners",
    image: "/platform/redeem/team-tithely.png",
    badgeClass: "bg-[#155DFC] text-white",
  },
] as const;

export default function RedeemTeamsUseSection() {
  return (
    <section className="bg-white">
      <div className="mx-auto w-full max-w-[1440px] px-5 pb-12 min-[768px]:px-11 min-[768px]:pb-16 min-[1025px]:px-16 min-[1025px]:pb-20">
        <h2 className="m-0 mb-8 text-center font-[family-name:var(--font-satoshi)] text-2xl leading-[1.15] font-bold text-[#2C2D2E] min-[768px]:mb-12 min-[768px]:text-[2rem] min-[768px]:leading-[2.625rem] min-[1025px]:mb-12 min-[1025px]:text-[3rem] min-[1025px]:leading-[1.2]">
          How Teams Use Redeem Pages
        </h2>

        <div className="grid grid-cols-1 gap-4 min-[768px]:grid-cols-2 min-[1025px]:grid-cols-4 min-[1025px]:gap-4">
          {TEAMS.map((team) => (
            <article
              key={team.company}
              className="overflow-hidden rounded-2xl border border-[#F3F4F6] min-[768px]:rounded-[24px]"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={team.image}
                alt=""
                className="mb-6 block h-auto w-full object-cover"
              />

              <div className="px-6 pb-6 min-[768px]:px-[30px] min-[768px]:pb-6">
                <span
                  className={`inline-flex rounded-full px-4 py-2 font-[family-name:var(--font-overpass)] text-sm leading-none font-medium ${team.badgeClass}`}
                >
                  {team.company}
                </span>

                <h3 className="m-0 mt-2 py-2 font-[family-name:var(--font-satoshi)] text-xl leading-[1.2] font-medium text-[#1B1B1C] min-[768px]:text-2xl">
                  {team.useCase}
                </h3>

                <p className="m-0 font-[family-name:var(--font-overpass)] text-sm leading-[1.3] text-[#1B1B1C] min-[768px]:text-base">
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
