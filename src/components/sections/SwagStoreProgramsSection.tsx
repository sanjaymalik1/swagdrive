const PROGRAMS = [
  {
    title: "Employee Stores",
    description:
      "Reward teammates with redeemable points and let them choose the merch they actually want from your inventory, making swag more personal while giving you control over budgets and distribution.",
    image: "/platform/swag-store/programs/employee-stores.png",
    imageAlt: "Employee stores product preview",
  },
  {
    title: "Event Swag Stores",
    description:
      "Let attendees claim or choose their swag through a branded storefront, before or after your event—streamlining distribution while creating a more engaging experience.",
    image: "/platform/swag-store/programs/event-swag.png",
    imageAlt: "Event swag store preview",
  },
  {
    title: "Customer Rewards",
    description:
      "Send points or credits customers can redeem for swag, giving them flexibility in what they receive while driving stronger engagement and brand connection.",
    image: "/platform/swag-store/programs/customer-rewards.png",
    imageAlt: "Customer rewards funds preview",
  },
  {
    title: "Company Merch Hubs",
    description:
      "Create a central place where teams, partners, or customers can browse and order branded merchandise, keeping everything organized, accessible, and on-brand.",
    image: "/platform/swag-store/programs/company-merch.png",
    imageAlt: "Company merch hub preview",
  },
] as const;

export default function SwagStoreProgramsSection() {
  return (
    <section className="bg-white">
      <div className="mx-auto w-full max-w-[80rem] px-[5%] py-12 min-[768px]:py-16 min-[992px]:py-20">
        <h2 className="m-0 mb-8 text-center font-sans text-2xl leading-[1.2] font-semibold text-[#202124] min-[768px]:mb-12 min-[768px]:text-[38px] min-[992px]:text-[48px]">
          Built for Every Type of Swag Program
        </h2>

        <div className="grid grid-cols-1 gap-5 min-[768px]:grid-cols-2 min-[768px]:gap-5 min-[992px]:gap-12">
          {PROGRAMS.map((program) => (
            <article
              key={program.title}
              className="flex flex-col overflow-hidden rounded-[24px] min-[768px]:flex-row min-[768px]:items-stretch"
            >
              <div className="flex flex-col justify-center bg-[#F0F2FF] px-5 py-6 min-[768px]:w-1/2 min-[768px]:px-6 min-[768px]:py-7 min-[992px]:px-7 min-[992px]:py-8">
                <h3 className="m-0 mb-4 font-sans text-[21px] leading-[1.2] font-medium text-[#1B1B1C] min-[992px]:text-[28px]">
                  {program.title}
                </h3>
                <p className="m-0 font-sans text-sm leading-[1.4] text-[#1B1B1C] min-[768px]:text-base">
                  {program.description}
                </p>
              </div>

              <div className="min-h-[200px] min-w-0 min-[768px]:w-1/2">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={program.image}
                  alt={program.imageAlt}
                  className="block h-full w-full object-cover object-center"
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
