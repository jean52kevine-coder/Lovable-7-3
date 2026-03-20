import Layout from "@/components/Layout";
import { Helmet } from "react-helmet-async";
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
    <Helmet>
      <title>ALTÉRA — Agence Web Grand Est | Sites à partir de 497€</title>
      <meta name="description" content="Agence web française spécialisée dans la création de sites pour artisans, commerçants et PME du Grand Est. Site vitrine 497€, e-commerce 747€. Livraison en 14 jours, design sur-mesure. Devis gratuit." />
      <meta name="keywords" content="agence web Grand Est, création site web Reims, site vitrine artisan, site web PME, agence web Metz, création site Nancy, site web pas cher Grand Est" />
      <link rel="canonical" href="https://altera.fr" />
      <meta property="og:title" content="ALTÉRA — Agence Web Grand Est | Sites à partir de 497€" />
      <meta property="og:description" content="Création de sites web pour artisans et PME du Grand Est. Prix fixe, livraison 14 jours, design sur-mesure." />
      <meta property="og:url" content="https://altera.fr" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://altera.fr/og-image.jpg" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="robots" content="index, follow" />
    </Helmet>
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
