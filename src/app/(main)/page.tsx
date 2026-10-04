import HeroSection from "@/components/sections/HeroSection";
import LogoMarquee from "@/components/sections/LogoMarquee";
import OfferingsSection from "@/components/sections/OfferingsSection";
import QuoteSection from "@/components/sections/QuoteSection";
import ConsolidateSection from "@/components/sections/ConsolidateSection";
import TeamsSection from "@/components/sections/TeamsSection";
import UseCasesSection from "@/components/sections/UseCasesSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <LogoMarquee />
      <OfferingsSection />
      <QuoteSection />
      <ConsolidateSection />
      <TeamsSection />
      <UseCasesSection />
    </>
  );
}
