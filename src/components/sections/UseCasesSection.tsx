import { USE_CASE_COLUMNS, type UseCaseItem } from "./use-cases-data";

function UseCaseRow({ label, Icon }: UseCaseItem) {
  return (
    <div className="flex items-center gap-5 min-[1025px]:gap-6">
      <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-blue-primary/10 text-blue-primary min-[1025px]:size-[50px]">
        <Icon className="size-6 min-[1025px]:size-7" strokeWidth={1.75} aria-hidden />
      </span>
      <h4 className="m-0 font-[family-name:var(--font-overpass)] text-xs leading-6 font-normal text-[#2D2D2D] min-[768px]:leading-[18px] min-[1025px]:text-sm min-[1025px]:leading-[18px] min-[1025px]:tracking-[0.16px]">
        {label}
      </h4>
    </div>
  );
}

export default function UseCasesSection() {
  return (
    <section className="bg-surface px-5 py-16 min-[480px]:px-10 min-[992px]:py-24">
      <div className="mx-auto w-full max-w-[1440px]">
        <div className="flex flex-col items-center text-center">
          <p className="m-0 mb-2 font-[family-name:var(--font-overpass)] text-xs leading-4 font-bold tracking-[1px] text-[#2D2D2D] uppercase min-[1025px]:mb-1 min-[1025px]:text-base min-[1025px]:leading-6">
            unlimited use cases
          </p>
          <h2 className="m-0 mb-8 max-w-[16rem] font-[family-name:var(--font-satoshi)] text-2xl leading-[30px] font-bold text-[#2D2D2D] min-[768px]:mb-10 min-[768px]:max-w-none min-[992px]:mb-12 min-[1025px]:text-[42px] min-[1025px]:leading-[48px]">
            SwagDrive for every occasion
          </h2>
        </div>

        <div className="use-cases-scroll flex flex-nowrap gap-6 overflow-x-auto min-[1025px]:overflow-visible min-[1025px]:px-[85px]">
          {USE_CASE_COLUMNS.map((column) => (
            <div
              key={column[0].label}
              className="flex min-w-[240px] flex-1 flex-col gap-5 min-[1025px]:min-w-0 min-[1025px]:gap-6"
            >
              {column.map((item) => (
                <UseCaseRow key={item.label} {...item} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
