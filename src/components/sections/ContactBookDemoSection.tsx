import ContactForm from "@/components/sections/ContactForm";

export default function ContactBookDemoSection() {
  return (
    <section
      className="relative overflow-hidden bg-blue-primary font-[family-name:var(--font-lexend)]"
      style={{
        backgroundImage: "url(/design-studio/creative-services/grid-bg-dark.svg)",
        backgroundPosition: "50% 0",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="mx-auto grid min-h-[calc(100vh-4.5rem)] w-full max-w-7xl grid-cols-1 items-center gap-10 px-5 py-16 min-[480px]:px-10 min-[768px]:py-24 min-[992px]:grid-cols-2 min-[992px]:gap-14">
        <div className="min-[992px]:-translate-x-12 min-[992px]:-translate-y-20">
          <h1 className="m-0 text-[2.5rem] leading-[1.05] font-normal tracking-[-0.06rem] text-yellow-secondary min-[768px]:text-[3.5rem] min-[768px]:tracking-[-0.12rem] min-[992px]:text-[4rem] min-[992px]:tracking-[-0.14rem]">
            Contact Us
          </h1>
          <p className="mt-5 max-w-[28rem] font-[family-name:var(--font-overpass)] text-base leading-[1.5] font-light text-white/80 min-[768px]:mt-6 min-[768px]:text-[1.125rem]">
            Have something on your mind? We&apos;d love to hear from you. Drop
            us a line and we&apos;ll get back to you as soon as we can.
          </p>
        </div>

        <div className="rounded-[1.5rem] bg-white p-6 shadow-xl min-[768px]:rounded-[2rem] min-[768px]:p-9">
          <h2 className="m-0 mb-6 font-[family-name:var(--font-satoshi)] text-[1.5rem] font-bold tracking-[-0.02em] text-blue-primary min-[768px]:mb-7 min-[768px]:text-[1.75rem]">
            Contact us
          </h2>
          <ContactForm submitLabel="Contact us" />
          <p className="m-0 mt-4 font-[family-name:var(--font-overpass)] text-xs leading-[1.5] text-black/50">
            By submitting this form, you consent to SwagDrive contacting you
            about your inquiry.
          </p>
        </div>
      </div>
    </section>
  );
}
