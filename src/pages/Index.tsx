import Layout from "@/components/Layout";
import HeroHome from "@/components/home/HeroHome";
import ServicesShowcase from "@/components/home/ServicesShowcase";
import WhyUs from "@/components/home/WhyUs";
import DistinguishSection from "@/components/home/DistinguishSection";
import ProcessSteps from "@/components/home/ProcessSteps";
import PricingCards from "@/components/home/PricingCards";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import CtaBlock from "@/components/home/CtaBlock";

const Index = () => (
  <Layout>
    <HeroHome />
    <ServicesShowcase />
    <WhyUs />
    <DistinguishSection />
    <ProcessSteps />
    <PricingCards />
    <TestimonialsSection />
    <CtaBlock />
  </Layout>
);

export default Index;
