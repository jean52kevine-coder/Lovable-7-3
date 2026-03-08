import { useState, useCallback } from "react";
import Layout from "@/components/Layout";
import LoadingScreen from "@/components/LoadingScreen";
import HeroSection from "@/components/home/HeroSection";
import ServicesGrid from "@/components/home/ServicesGrid";
import VideoShowcase from "@/components/home/VideoShowcase";
import ProcessTimeline from "@/components/home/ProcessTimeline";
import DistinguishSection from "@/components/home/DistinguishSection";
import PricingCompact from "@/components/home/PricingCompact";
import ROICalculator from "@/components/home/ROICalculator";
import TestimonialsCarousel from "@/components/home/TestimonialsCarousel";
import FinalCTA from "@/components/home/FinalCTA";

const Index = () => {
  const [ready, setReady] = useState(() => !!sessionStorage.getItem("altera_loaded"));

  const onLoadingComplete = useCallback(() => setReady(true), []);

  return (
    <>
      {!ready && <LoadingScreen onComplete={onLoadingComplete} />}
      <Layout>
        <HeroSection />
        <ServicesGrid />
        <VideoShowcase />
        <ProcessTimeline />
        <DistinguishSection />
        <PricingCompact />
        <ROICalculator />
        <TestimonialsCarousel />
        <FinalCTA />
      </Layout>
    </>
  );
};

export default Index;
