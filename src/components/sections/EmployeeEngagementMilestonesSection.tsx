import {
  AlarmClock,
  Megaphone,
  HeartHandshake,
  Compass,
  Trophy,
  Users,
} from "lucide-react";

const MILESTONE_FEATURES = [
  {
    title: "Save time and resources",
    description:
      "No more vendor sourcing, packing gifts, or standing in line at the post office. Let automation do the work.",
    icon: AlarmClock,
  },
  {
    title: "Boost your employer brand",
    description:
      "Stand out from the competition and attract top talent by showcasing a culture of appreciation.",
    icon: Megaphone,
  },
  {
    title: "Reinforce company culture",
    description:
      "Foster a culture of recognition that motivates and keeps employees engaged.",
    icon: HeartHandshake,
  },
  {
    title: "Let employees rep your brand",
    description:
      "Enable teams to design and order swag with our Merch Builder, spreading culture and pride far and wide.",
    icon: Compass,
  },
  {
    title: "Maximize employee experience",
    description:
      "Create an experience that employees are excited to share on platforms like Glassdoor and LinkedIn.",
    icon: Trophy,
  },
  {
    title: "Reduce employee attrition",
    description:
      "Show your employees they matter, turning your company into a place they'd never want to leave.",
    icon: Users,
  },
] as const;

const JOURNEY_ROWS = [
  {
    id: "welcome",
    title: "Welcome new hires with a personalized experience",
    description:
      "First impressions are everything. A thoughtfully personalized welcome gift, sent automatically before day one or during onboarding, builds a strong connection from the start. Whether it's a custom swag bundle or a curated gift tailored to a foodie or tech enthusiast, you'll make new hires feel valued and excited to join your team, laying the foundation for lasting employee engagement.",
    image: "/capabilities/employee-engagement/journey-welcome.avif",
    imageAlt: "New hire opening a personalized welcome gift",
    reverse: false,
  },
  {
    id: "motivate",
    title: "Motivate and recognize your employees' hard work",
    description:
      "Promotions, big project wins, and peer shoutouts deserve more than a Slack emoji. Foster a culture where employees feel valued by delivering role-specific gifts, such as leather journals for leaders or noise-canceling headphones for engineers, to show genuine appreciation at scale across your organization.",
    image: "/capabilities/employee-engagement/journey-motivate.avif",
    imageAlt: "Team celebrating with recognition gifts",
    reverse: true,
  },
  {
    id: "retain",
    title:
      "Retain top talent by celebrating key milestones and boosting engagement",
    description:
      "Sustained employee engagement doesn't happen by chance. Don't let birthdays, anniversaries, or holidays slip by. With SwagDrive, corporate gifting becomes a key part of your retention strategy. Set up triggered campaigns to automatically send gifts like milestone awards or seasonal boxes, keeping your teams connected in and outside the office.",
    image: "/capabilities/employee-engagement/journey-retain.avif",
    imageAlt: "Employees celebrating a milestone together",
    reverse: false,
  },
] as const;

export default function EmployeeEngagementMilestonesSection() {
  return (
    <>
      <section className="bg-[color-mix(in_srgb,var(--yellow-tertiary)_28%,white)]">
        <div className="mx-auto w-full max-w-7xl px-5 py-16 min-[480px]:px-10 min-[992px]:py-24">
          <div className="mx-auto max-w-[52rem] text-center">
            <h2 className="m-0 font-[family-name:var(--font-satoshi)] text-[1.75rem] leading-[1.2] font-bold text-black min-[768px]:text-[2.25rem] min-[992px]:text-[2.875rem]">
              SwagDrive: Your all-in-one solution for employee engagement at
              every milestone
            </h2>
            <p className="m-0 mt-4 font-[family-name:var(--font-overpass)] text-base leading-[1.5] text-black/80 min-[768px]:mt-5 min-[768px]:text-lg">
              Discover how our intuitive gifting and swag platform empowers
              people and HR teams to recognize and appreciate employees at every
              stage of their journey.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-5 min-[768px]:mt-16 min-[768px]:grid-cols-2 min-[768px]:gap-6 min-[992px]:grid-cols-3">
            {MILESTONE_FEATURES.map((feature) => (
              <div
                key={feature.title}
                className="rounded-2xl bg-white px-6 py-7 min-[768px]:rounded-[1.25rem] min-[768px]:px-7 min-[768px]:py-8"
              >
                <feature.icon
                  className="mb-4 size-8 text-blue-primary"
                  strokeWidth={1.75}
                  aria-hidden
                />
                <h3 className="m-0 font-[family-name:var(--font-satoshi)] text-lg leading-[1.3] font-bold text-blue-primary min-[768px]:text-xl">
                  {feature.title}
                </h3>
                <p className="m-0 mt-2 font-[family-name:var(--font-overpass)] text-sm leading-[1.5] text-black/80 min-[768px]:text-base">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-16 px-5 py-16 min-[480px]:px-10 min-[768px]:gap-20 min-[992px]:gap-24 min-[992px]:py-24">
          {JOURNEY_ROWS.map((row) => (
            <div
              key={row.id}
              className={`grid grid-cols-1 items-center gap-10 min-[992px]:grid-cols-2 min-[992px]:gap-16 ${
                row.reverse ? "min-[992px]:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div className="w-full max-w-[36rem]">
                <h3 className="m-0 font-[family-name:var(--font-satoshi)] text-[1.625rem] leading-[1.2] font-bold text-black min-[768px]:text-[2rem] min-[992px]:text-[2.5rem]">
                  {row.title}
                </h3>
                <p className="m-0 mt-4 font-[family-name:var(--font-overpass)] text-base leading-[1.55] text-black/80 min-[768px]:mt-5 min-[768px]:text-lg">
                  {row.description}
                </p>
              </div>

              <div className="w-full overflow-hidden rounded-2xl min-[768px]:rounded-[1.25rem]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={row.image}
                  alt={row.imageAlt}
                  className="block h-auto w-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
