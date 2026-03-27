import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import HeroHome from "@/components/home/HeroHome";
import ServicesShowcase from "@/components/home/ServicesShowcase";
import WhyUs from "@/components/home/WhyUs";
import DistinguishSection from "@/components/home/DistinguishSection";
import ProcessSteps from "@/components/home/ProcessSteps";
import PricingCards from "@/components/home/PricingCards";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import CtaBlock from "@/components/home/CtaBlock";
import FAQSection from "@/components/home/FAQSection";

const Index = () => (
  <Layout>
    <SEOHead
      title="ALTÉRA — Agence Web Grand Est | Sites à partir de 497€"
      description="Agence web française spécialisée dans la création de sites pour artisans, commerçants et PME du Grand Est. Site vitrine 497€, e-commerce 747€. Livraison en 14 jours, design sur-mesure. Devis gratuit."
      canonical="https://altera.fr"
      keywords="agence web Grand Est, création site web Reims, site vitrine artisan, site web PME, agence web Metz, création site Nancy, site web pas cher Grand Est"
    />
    <HeroHome />
    <ServicesShowcase />
    <WhyUs />
    <DistinguishSection />
    <ProcessSteps />
    <PricingCards />
    <TestimonialsSection />
    <FAQSection />
    <CtaBlock />
  </Layout>
);

export default Index;
