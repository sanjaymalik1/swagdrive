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
    image: "/platform/redeem/step-1.png",
    imageAlt: "Create your redeem page",
    panelClass: "bg-yellow-tertiary",
    textOnDark: false,
  },
  {
    title: "Share a Link",
    description: "Send manually or automate with HRIS integrations",
    image: "/platform/redeem/step-2.png",
    imageAlt: "Share a redeem link",
    panelClass: "bg-blue-secondary",
    textOnDark: true,
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
    image: "/platform/redeem/step-3.png",
    imageAlt: "Recipients enter info or choose items",
    panelClass: "bg-blue-secondary",
    textOnDark: true,
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
    image: "/platform/redeem/step-4.png",
    imageAlt: "Collect responses or trigger shipment",
    panelClass: "bg-yellow-tertiary",
    textOnDark: false,
  },
] as const;

export default function RedeemHowItWorksSection() {
  return (
    <section className="bg-white">
      <div className="mx-auto w-full max-w-[1440px] px-5 py-16 min-[480px]:px-10 min-[992px]:py-24">
        <h2 className="m-0 mb-8 text-center font-[family-name:var(--font-satoshi)] text-2xl leading-[1.15] font-bold text-black min-[768px]:mb-12 min-[768px]:text-[2rem] min-[768px]:leading-[2.625rem] min-[1025px]:mb-12 min-[1025px]:text-[3rem] min-[1025px]:leading-[1.2]">
          How Redeem Pages Work
        </h2>

        <div className="grid grid-cols-1 gap-10 min-[1025px]:grid-cols-2 min-[1025px]:gap-x-12 min-[1025px]:gap-y-12">
          {STEPS.map((step, index) => (
            <div
              key={step.image}
              className="flex flex-col gap-4 min-[768px]:flex-row min-[768px]:items-stretch min-[768px]:gap-3"
            >
              <div
                className={`flex flex-col justify-start rounded-2xl px-5 py-6 min-[768px]:w-[48%] min-[768px]:shrink-0 min-[768px]:rounded-[24px] min-[768px]:px-7 min-[768px]:py-8 ${step.panelClass}`}
              >
                <span
                  className={
                    step.textOnDark
                      ? "mb-5 flex size-8 shrink-0 items-center justify-center rounded-full bg-yellow-secondary font-[family-name:var(--font-satoshi)] text-sm leading-none font-bold text-blue-primary"
                      : "mb-5 flex size-8 shrink-0 items-center justify-center rounded-full bg-blue-primary font-[family-name:var(--font-satoshi)] text-sm leading-none font-bold text-yellow-secondary"
                  }
                >
                  {index + 1}
                </span>
                <h3
                  className={
                    step.textOnDark
                      ? "m-0 mb-4 font-[family-name:var(--font-satoshi)] text-xl leading-[1.2] font-semibold text-yellow-secondary min-[768px]:mb-6 min-[768px]:text-[1.75rem]"
                      : "m-0 mb-4 font-[family-name:var(--font-satoshi)] text-xl leading-[1.2] font-semibold text-blue-primary min-[768px]:mb-6 min-[768px]:text-[1.75rem]"
                  }
                >
                  {step.title}
                </h3>
                <p
                  className={
                    step.textOnDark
                      ? "m-0 font-[family-name:var(--font-overpass)] text-sm leading-[1.3] text-white min-[768px]:text-base"
                      : "m-0 font-[family-name:var(--font-overpass)] text-sm leading-[1.3] text-black min-[768px]:text-base"
                  }
                >
                  {step.description}
                </p>
              </div>

              <div className="min-w-0 flex-1 overflow-hidden rounded-2xl min-[768px]:rounded-[24px]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={step.image}
                  alt={step.imageAlt}
                  className="block h-full w-full object-cover object-left"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
