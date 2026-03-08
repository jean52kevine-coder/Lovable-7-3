import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import { Globe, ShoppingCart, Wrench, ArrowRight, Zap, Shield, Palette, Clock, HeadphonesIcon, TrendingUp } from "lucide-react";
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import { CtaSection } from "@/components/ui/cta-section";
import { BorderBeam } from "@/components/ui/border-beam";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import BlurReveal from "@/components/animations/BlurReveal";
import ScaleSection from "@/components/animations/ScaleSection";
import TextSplit from "@/components/animations/TextSplit";
import { StaggerContainer, itemVariants } from "@/components/animations/StaggerContainer";
import heroServices from "@/assets/hero-services.jpg";

const services = [
  {
    icon: Globe, title: "Site Vitrine", price: "497 €",
    desc: "Une présence professionnelle qui inspire confiance et génère des contacts qualifiés.",
    features: ["Design sur-mesure", "Responsive mobile", "Optimisation SEO", "Formulaire de contact", "Livraison en 14 jours"],
    link: "/services/site-vitrine", popular: false,
  },
  {
    icon: ShoppingCart, title: "Site E-commerce", price: "747 €",
    desc: "Vendez en ligne avec une boutique performante, sécurisée et facile à gérer.",
    features: ["Boutique complète", "Paiement sécurisé", "Gestion des stocks", "Tableau de bord", "Formation incluse"],
    link: "/services/site-ecommerce", popular: true,
  },
  {
    icon: Wrench, title: "Maintenance & SEO", price: "dès 39 €/mois",
    desc: "Gardez votre site rapide, sécurisé et visible sur Google en permanence.",
    features: ["Mises à jour régulières", "Sauvegardes automatiques", "Support technique", "Monitoring 24/7", "Rapport mensuel"],
    link: "/services/maintenance", popular: false,
  },
];

const bentoFeatures = [
  {
    Icon: Zap,
    name: "Livraison express",
    description: "14 jours chrono. Pendant que d'autres attendent 3 mois, vous êtes déjà en ligne.",
    href: "/contact",
    cta: "Démarrer",
    background: (
      <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: "radial-gradient(circle, hsl(var(--primary)) 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
    ),
    className: "lg:row-start-1 lg:row-end-3 lg:col-start-1 lg:col-end-2",
  },
  {
    Icon: Palette,
    name: "Design unique",
    description: "Aucun template. Chaque site est conçu sur-mesure pour votre identité.",
    href: "/services/site-vitrine",
    cta: "Voir les offres",
    background: (
      <div className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-10" style={{ background: "hsl(var(--primary))", filter: "blur(40px)" }} />
    ),
    className: "lg:col-start-2 lg:col-end-3 lg:row-start-1 lg:row-end-2",
  },
  {
    Icon: Shield,
    name: "Sécurité totale",
    description: "SSL, sauvegardes auto et monitoring 24/7.",
    href: "/services/maintenance",
    cta: "En savoir plus",
    background: (
      <div className="absolute bottom-0 left-0 w-24 h-24 rounded-full opacity-10" style={{ background: "hsl(var(--primary))", filter: "blur(30px)" }} />
    ),
    className: "lg:col-start-2 lg:col-end-3 lg:row-start-2 lg:row-end-3",
  },
  {
    Icon: TrendingUp,
    name: "SEO optimisé",
    description: "Structuré pour Google dès le premier jour. Vos clients vous trouvent facilement.",
    href: "/contact",
    cta: "Discuter SEO",
    background: (
      <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "linear-gradient(135deg, hsl(var(--primary)) 25%, transparent 25%, transparent 50%, hsl(var(--primary)) 50%, hsl(var(--primary)) 75%, transparent 75%)", backgroundSize: "20px 20px" }} />
    ),
    className: "lg:col-start-3 lg:col-end-4 lg:row-start-1 lg:row-end-2",
  },
  {
    Icon: HeadphonesIcon,
    name: "Support humain",
    description: "Un vrai interlocuteur, pas un chatbot. Réponse garantie dans la journée.",
    href: "/contact",
    cta: "Nous contacter",
    background: (
      <div className="absolute top-0 left-0 w-40 h-40 rounded-full opacity-10" style={{ background: "hsl(var(--primary))", filter: "blur(50px)" }} />
    ),
    className: "lg:col-start-3 lg:col-end-4 lg:row-start-2 lg:row-end-3",
  },
];

const ServicesPage = () => (
  <Layout>
    <section className="relative py-24 md:py-32 overflow-hidden">
      <img src={heroServices} alt="" className="absolute inset-0 w-full h-full object-cover opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/40" />
      <div className="section-container text-center relative z-10">
        <TextSplit className="heading-display text-4xl md:text-6xl mb-6" as="h1">NOS SERVICES</TextSplit>
        <BlurReveal delay={0.4}>
          <p className="font-dm text-lg max-w-2xl mx-auto text-muted-foreground">Des solutions web complètes, adaptées aux artisans, commerçants et PME locales.</p>
        </BlurReveal>
      </div>
    </section>

    <section style={{ backgroundColor: "hsl(var(--section-alt-bg))" }} className="py-[100px]">
      <div className="section-container">
        <BlurReveal className="text-center mb-14">
          <h2 className="heading-display mb-4" style={{ fontSize: "clamp(28px, 4vw, 44px)" }}>CHOISISSEZ VOTRE <span className="text-primary">FORMULE</span></h2>
        </BlurReveal>

        <ScaleSection>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6" staggerDelay={0.15}>
            {services.map((s, i) => (
              <motion.div key={i} variants={itemVariants} className="relative rounded-2xl transition-all duration-300 hover:-translate-y-1.5 group">
                <GlowingEffect spread={40} glow proximity={64} inactiveZone={0.01} borderWidth={2} disabled={false} />
                <div className="relative z-10 rounded-2xl p-7 overflow-hidden h-full" style={{ backgroundColor: "hsl(var(--card-dark))", border: "1px solid hsl(var(--border-green))" }}>
                  {s.popular && (
                    <>
                      <span className="absolute top-4 right-4 text-[11px] font-bold px-2.5 py-1 rounded-full bg-primary text-primary-foreground z-10">⭐ POPULAIRE</span>
                      <BorderBeam size={250} duration={12} delay={0} />
                    </>
                  )}
                  <span className="inline-block text-[13px] font-semibold px-3 py-1 rounded-full text-primary mb-4" style={{ background: "hsl(var(--primary) / 0.12)" }}>{s.price}</span>
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4" style={{ background: "hsl(var(--primary) / 0.1)" }}><s.icon className="text-primary" size={20} /></div>
                  <h3 className="font-display font-black text-xl text-foreground mb-2">{s.title}</h3>
                  <p className="font-dm text-sm mb-5 text-muted-foreground">{s.desc}</p>
                  <ul className="space-y-2 mb-6">
                    {s.features.map((f, j) => (
                      <li key={j} className="flex items-center gap-2 text-sm text-muted-foreground"><span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />{f}</li>
                    ))}
                  </ul>
                  <Link to={s.link} className="text-primary text-sm font-semibold hover:underline inline-flex items-center gap-1">
                    En savoir plus <ArrowRight size={14} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </StaggerContainer>
        </ScaleSection>
      </div>
    </section>

    <section className="py-[100px]" style={{ backgroundColor: "hsl(var(--hero-bg))" }}>
      <div className="section-container">
        <BlurReveal className="text-center mb-14">
          <h2 className="heading-display mb-4" style={{ fontSize: "clamp(28px, 4vw, 44px)" }}>POURQUOI NOUS <span className="text-primary">CHOISIR</span></h2>
          <p className="font-dm text-base text-muted-foreground">Tout ce qu'il faut pour réussir en ligne, sans compromis.</p>
        </BlurReveal>
        <ScaleSection>
          <BentoGrid className="lg:grid-rows-2 auto-rows-[18rem]">
            {bentoFeatures.map((feature) => (
              <BentoCard key={feature.name} {...feature} />
            ))}
          </BentoGrid>
        </ScaleSection>
      </div>
    </section>

    <CtaSection
      title="Prêt à lancer votre projet ?"
      description="Consultation 30min offerte, devis gratuit et sans engagement."
      buttonText="Demander un devis gratuit"
      buttonUrl="/contact"
      items={["Réponse sous 24h", "Sans engagement", "Devis personnalisé", "Prix fixe garanti", "Formation incluse"]}
    />
  </Layout>
);

export default ServicesPage;
