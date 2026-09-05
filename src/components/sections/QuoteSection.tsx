const QUOTE =
  "“We cut 9 vendors, saved a ton of money, and took your engagement to an all-new level.”";

export default function QuoteSection() {
  return (
    <section className="bg-blue-primary">
      <div className="mx-auto flex max-w-[922px] items-center justify-center px-5 py-16 min-[480px]:px-10 min-[992px]:py-24">
        <h2 className="m-0 text-center font-[family-name:var(--font-satoshi)] text-lg leading-6 font-bold text-yellow-secondary min-[768px]:text-2xl min-[768px]:leading-[30px] min-[992px]:text-[32px] min-[992px]:leading-10">
          {QUOTE}
        </h2>
      </div>
    </section>
  );
}
