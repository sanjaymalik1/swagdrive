import { USE_CASE_COLUMNS } from "./use-cases-data";

function UseCaseRow({
  label,
  icon,
}: {
  label: string;
  icon: string;
}) {
  return (
    <div className="flex items-center gap-5 min-[1025px]:gap-6">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={icon}
        alt=""
        className="size-11 shrink-0 object-contain min-[1025px]:size-[50px]"
      />
      <h4 className="m-0 font-[family-name:var(--font-overpass)] text-xs leading-6 font-normal text-[#2D2D2D] min-[768px]:leading-[18px] min-[1025px]:text-sm min-[1025px]:leading-[18px] min-[1025px]:tracking-[0.16px]">
        {label}
      </h4>
    </div>
  );
}

export default function UseCasesSection() {
  return (
    <section className="bg-white pb-8 min-[768px]:px-11 min-[1025px]:px-0 min-[1025px]:py-[60px]">
      <div className="mx-auto w-full max-w-[1440px]">
        <div className="flex flex-col items-center px-5 pt-8 text-center min-[768px]:px-0 min-[768px]:pt-8 min-[1025px]:pt-0">
          <p className="m-0 mb-2 font-[family-name:var(--font-overpass)] text-xs leading-4 font-bold tracking-[1px] text-[#2D2D2D] uppercase min-[1025px]:mb-1 min-[1025px]:text-base min-[1025px]:leading-6">
            unlimited use cases
          </p>
          <h2 className="m-0 mb-8 max-w-[16rem] font-[family-name:var(--font-satoshi)] text-2xl leading-[30px] font-bold text-[#2D2D2D] min-[768px]:max-w-none min-[1025px]:mb-[46px] min-[1025px]:text-[42px] min-[1025px]:leading-[48px]">
            SwagDrive for every occasion
          </h2>
        </div>

        <div className="use-cases-scroll flex flex-nowrap gap-6 overflow-x-auto px-5 pb-8 min-[768px]:px-0 min-[1025px]:overflow-visible min-[1025px]:px-[85px] min-[1025px]:pb-0">
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
