export default function CrmPipelineHeading() {
  return (
    <section
      className="font-[family-name:var(--font-lexend)] text-[#221e26]"
      style={{
        backgroundImage:
          "url(/platform/crm/grid-bg.svg), linear-gradient(93deg, #eee0ff, #f4f1f9)",
        backgroundPosition: "50% 0, 0 0",
        backgroundRepeat: "no-repeat, repeat",
        backgroundSize: "cover, auto",
      }}
    >
      <div className="px-5 pt-16 pb-12 min-[480px]:px-10 min-[768px]:pt-16 min-[768px]:pb-14 min-[992px]:pt-24 min-[992px]:pb-16">
        <div className="mx-auto w-full max-w-7xl">
          <h2 className="mx-auto m-0 max-w-[48rem] text-center text-[1.75rem] leading-[1.2] font-normal tracking-[-0.04rem] text-[#221e26] min-[768px]:text-[2.1875rem] min-[768px]:tracking-[-0.06rem] min-[992px]:text-[2.875rem] min-[992px]:tracking-[-0.08rem]">
            Global gifting solutions to fast-track your pipeline
          </h2>
        </div>
      </div>
    </section>
  );
}
