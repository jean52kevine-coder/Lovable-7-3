import Layout from "@/components/Layout";
import HeroHome from "@/components/home/HeroHome";
import ServicesShowcase from "@/components/home/ServicesShowcase";
import WhyUs from "@/components/home/WhyUs";
import ProcessSteps from "@/components/home/ProcessSteps";
import PricingCards from "@/components/home/PricingCards";
import TrustBanner from "@/components/home/TrustBanner";
import CtaBlock from "@/components/home/CtaBlock";

const Index = () => (
  <Layout>
    <HeroHome />
    <ServicesShowcase />
    <WhyUs />
    <ProcessSteps />
    <PricingCards />
    <TrustBanner />
    <CtaBlock />
  </Layout>
);

export default Index;
