const STEPS = [
  {
    title: (
      <>
        Create Your
        <br />
        Redeem Page
      </>
    ),
    description: "Add your brand colors, images, and logo.",
    icon: "/platform/redeem/step-1-icon.png",
    image: "/platform/redeem/step-1.png",
    imageAlt: "Create your redeem page",
  },
  {
    title: "Share a Link",
    description: "Send manually or automate with HRIS integrations",
    icon: "/platform/redeem/step-2-icon.png",
    image: "/platform/redeem/step-2.png",
    imageAlt: "Share a redeem link",
  },
  {
    title: (
      <>
        Recipients Enter
        <br />
        Info or Choose Items
      </>
    ),
    description: "No more wrong addresses or missing sizes.",
    icon: "/platform/redeem/step-3-icon.png",
    image: "/platform/redeem/step-3.png",
    imageAlt: "Recipients enter info or choose items",
  },
  {
    title: (
      <>
        Collect Responses
        <br />
        or Trigger Shipment
      </>
    ),
    description: "Send when you're ready or ship automatically.",
    icon: "/platform/redeem/step-4-icon.png",
    image: "/platform/redeem/step-4.png",
    imageAlt: "Collect responses or trigger shipment",
  },
] as const;

export default function RedeemHowItWorksSection() {
  return (
    <section className="bg-white">
      <div className="mx-auto w-full max-w-[1440px] px-5 pb-12 min-[768px]:px-11 min-[768px]:pb-16 min-[1025px]:px-16 min-[1025px]:pb-20">
        <h2 className="m-0 mb-8 text-center font-[family-name:var(--font-satoshi)] text-2xl leading-[1.15] font-bold text-[#2C2D2E] min-[768px]:mb-12 min-[768px]:text-[2rem] min-[768px]:leading-[2.625rem] min-[1025px]:mb-12 min-[1025px]:text-[3rem] min-[1025px]:leading-[1.2]">
          How Redeem Pages Work
        </h2>

        <div className="grid grid-cols-1 gap-10 min-[1025px]:grid-cols-2 min-[1025px]:gap-x-12 min-[1025px]:gap-y-12">
          {STEPS.map((step) => (
            <div
              key={step.image}
              className="flex flex-col gap-4 min-[768px]:flex-row min-[768px]:items-stretch min-[768px]:gap-3"
            >
              <div className="flex flex-col justify-center rounded-2xl bg-[#F0F2FF] px-5 py-6 min-[768px]:w-[48%] min-[768px]:shrink-0 min-[768px]:rounded-[24px] min-[768px]:px-7 min-[768px]:py-8">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={step.icon}
                  alt=""
                  className="mb-5 h-8 w-8 object-contain"
                />
                <h3 className="m-0 mb-4 font-[family-name:var(--font-satoshi)] text-xl leading-[1.2] font-medium text-[#1B1B1C] min-[768px]:mb-6 min-[768px]:text-[1.75rem]">
                  {step.title}
                </h3>
                <p className="m-0 font-[family-name:var(--font-overpass)] text-sm leading-[1.3] text-[#1B1B1C] min-[768px]:text-base">
                  {step.description}
                </p>
              </div>

              <div className="min-w-0 flex-1">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={step.image}
                  alt={step.imageAlt}
                  className="block h-full w-full rounded-2xl object-cover object-left min-[768px]:rounded-[24px]"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
