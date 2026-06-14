import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { getHamperBySlug, HAMPERS } from "@/lib/hampers";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return HAMPERS.map((hamper) => ({ slug: hamper.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const hamper = getHamperBySlug(slug);

  if (!hamper) {
    return { title: "Hamper Not Found" };
  }

  return {
    title: hamper.name,
    description: `Explore the ${hamper.name} collection.`,
  };
}

export default async function HamperDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const hamper = getHamperBySlug(slug);

  if (!hamper) {
    notFound();
  }

  return (
    <>
      <Header />
      <main className="flex min-h-[50vh] flex-col items-center justify-center bg-white px-4 py-16">
        <h1 className="text-3xl font-bold text-gray-900">{hamper.name}</h1>
        <p className="mt-2 text-gray-500">Collection details coming soon.</p>
      </main>
      <Footer />
    </>
  );
}
