"use client";

import { useEffect, useRef } from "react";
import HeroSection from "@/components/home/HeroSection";
import PracticeTestsSection from "@/components/home/PracticeTestsSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import CTASection from "@/components/home/CTASection";

const HomePage = () => {
  const practiceTestsRef = useRef<HTMLDivElement>(null);

  // Handle URL parameters for section scrolling
  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const section = params.get("section");

      if (section === "practice-tests" && practiceTestsRef.current) {
        practiceTestsRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);

  return (
    <main className="min-h-screen bg-white">
      <HeroSection />
      <div ref={practiceTestsRef}>
        <PracticeTestsSection />
      </div>
      {/* <FeaturesSection /> */}
      {/* <CTASection /> */}
    </main>
  );
};

export default HomePage;
