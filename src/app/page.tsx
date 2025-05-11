"use client";

import HeroSection from "@/components/home/HeroSection";
import PracticeTestsSection from "@/components/home/PracticeTestsSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import CTASection from "@/components/home/CTASection";

const HomePage = () => {
  return (
    <main className="min-h-screen bg-white">
      <HeroSection />
      <PracticeTestsSection />
      {/* <FeaturesSection /> */}
      {/* <CTASection /> */}
    </main>
  );
};

export default HomePage;
