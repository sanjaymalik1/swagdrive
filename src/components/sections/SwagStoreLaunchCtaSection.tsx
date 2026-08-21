import Link from "next/link";

export default function SwagStoreLaunchCtaSection() {
  return (
    <section className="bg-white">
      <div className="mx-auto w-full max-w-[80rem] px-[5%] pt-[60px] pb-12 min-[768px]:pt-20 min-[768px]:pb-16 min-[992px]:pt-[100px] min-[992px]:pb-20">
        <div className="flex w-full flex-col overflow-hidden rounded-[24px] min-[768px]:flex-row">
          <div className="flex w-full flex-col items-start justify-center bg-[#991B52] px-[22px] py-[41px] min-[768px]:w-1/2 min-[768px]:rounded-none min-[768px]:rounded-l-[24px] min-[768px]:px-[50px] min-[768px]:py-[60px] min-[992px]:px-[95px] min-[992px]:py-[100px]">
            <h2 className="m-0 mb-4 font-sans text-2xl leading-[1.2] font-semibold text-white min-[768px]:text-[32px] min-[992px]:text-[40px]">
              Launch your Swag Shop today
            </h2>
            <p className="m-0 mb-6 font-sans text-sm leading-[1.2] text-white min-[768px]:mb-12 min-[768px]:text-base">
              Build a fully branded swag storefront in minutes
            </p>
            <Link
              href="/contact"
              className="inline-flex h-[62px] w-full items-center justify-center rounded-full bg-[#C5CFFF] font-sans text-[21px] font-medium text-[#111827] no-underline transition-opacity hover:opacity-90 min-[768px]:h-[69px] min-[768px]:w-[222px] min-[992px]:w-[264px]"
            >
              Book Demo
            </Link>
          </div>

          <div className="flex w-full items-center justify-center bg-[#8E1348] px-[30px] py-[60px] min-[768px]:w-1/2 min-[768px]:rounded-none min-[768px]:rounded-r-[24px] min-[768px]:py-[75px] min-[992px]:py-[30px]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/platform/swag-store/launch-cta.png"
              alt=""
              className="block h-auto w-full object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
