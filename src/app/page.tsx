import HeroSection from "@/components/sections/HeroSection";
import ShowcaseCarousel from "@/components/sections/ShowcaseCarousel";
import SolutionsSection from "@/components/sections/SolutionsSection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ShowcaseCarousel />
      <SolutionsSection />
      <HowItWorksSection />
    </>
  );
}
