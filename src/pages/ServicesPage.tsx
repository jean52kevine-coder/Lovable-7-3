import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import { Globe, ShoppingCart, Wrench, Zap, Shield, Palette, Clock, HeadphonesIcon, TrendingUp } from "lucide-react";
import { FeatureCard } from "@/components/ui/grid-feature-cards";
import { CtaSection } from "@/components/ui/cta-section";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import BlurReveal from "@/components/animations/BlurReveal";
import ScaleSection from "@/components/animations/ScaleSection";
import RotatingWords from "@/components/RotatingWords";
import { StaggerContainer, itemVariants } from "@/components/animations/StaggerContainer";
import HeroBackground from "@/components/HeroBackground";
import ShaderBackground from "@/components/ui/shader-background";

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
    features: ["Boutique complète", "Paiement sécurisé", "Gestion des stocks", "Tableau de bord", "Support inclus"],
    link: "/services/site-ecommerce", popular: true,
  },
  {
    icon: Wrench, title: "Maintenance & SEO", price: "dès 29 €/mois",
    desc: "Gardez votre site rapide, sécurisé et visible sur Google en permanence.",
    features: ["Mises à jour régulières", "Sauvegardes automatiques", "Support technique", "Monitoring 24/7", "Rapport mensuel"],
    link: "/services/maintenance", popular: false,
  },
];

const features = [
  { title: "Rapidité", icon: Zap, description: "Livraison en 14 jours chrono. Pendant que d'autres attendent 3 mois, vous êtes déjà en ligne." },
  { title: "Design unique", icon: Palette, description: "Aucun template. Chaque site est conçu sur-mesure pour refléter votre identité." },
  { title: "Sécurité", icon: Shield, description: "SSL, sauvegardes automatiques et monitoring 24/7 pour une tranquillité totale." },
  { title: "SEO optimisé", icon: TrendingUp, description: "Structuré pour Google dès le premier jour. Vos clients vous trouvent facilement." },
  { title: "Support humain", icon: HeadphonesIcon, description: "Un vrai interlocuteur, pas un chatbot. Réponse garantie dans la journée." },
  { title: "Délais respectés", icon: Clock, description: "On s'engage sur une date de livraison et on la tient. Toujours." },
];

const ServicesPage = () => (
  <Layout>
    <section className="relative min-h-[65vh] flex items-center overflow-hidden bg-[#0a0f0a]">
      <HeroBackground variant="matrix" />
      <div className="absolute inset-0 opacity-35 pointer-events-none">
        <ShaderBackground />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f0a]/20 via-transparent to-[#0a0f0a]/80 pointer-events-none z-[1]" />
      <div className="relative z-10 container mx-auto px-6 py-12 md:py-24 text-center">
        <BlurReveal>
          <h1 className="heading-display text-3xl sm:text-4xl md:text-6xl mb-6">
            NOS <RotatingWords words={["SERVICES", "SOLUTIONS", "OFFRES", "FORMULES"]} />
          </h1>
        </BlurReveal>
        <BlurReveal delay={0.3}>
          <p className="font-dm text-lg max-w-2xl mx-auto text-muted-foreground">Des solutions web complètes, adaptées aux artisans, commerçants et PME locales.</p>
        </BlurReveal>
      </div>
    </section>

    <section style={{ backgroundColor: "hsl(var(--section-alt-bg) / 0.8)" }} className="py-[100px] relative overflow-hidden">
      <div className="absolute inset-0 opacity-25 pointer-events-none">
        <ShaderBackground />
      </div>
      <div className="section-container relative z-10">
        <BlurReveal className="text-center mb-14">
          <h2 className="heading-display mb-4 leading-tight" style={{ fontSize: "clamp(28px, 4vw, 44px)" }}><span className="inline">CHOISISSEZ VOTRE </span><span className="text-[#1DB954] whitespace-nowrap inline">FORMULE</span></h2>
        </BlurReveal>

        <ScaleSection>
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 overflow-visible" staggerDelay={0.15}>
            {services.map((s, i) => (
              <motion.div key={i} variants={itemVariants} className="relative rounded-[1.25rem] border border-border/60 bg-[#0d130f]/85 p-2 md:p-3 transition-all duration-300 hover:-translate-y-1.5">
                <GlowingEffect spread={40} glow={s.popular} proximity={64} inactiveZone={0.01} borderWidth={3} disabled={false} />
                <div className="relative z-10 flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl border border-border/60 bg-[#091109] p-6 shadow-sm dark:shadow-[0px_0px_27px_0px_rgba(45,45,45,0.3)]">
                  <div className="relative flex flex-1 flex-col gap-5">
                    <div className="flex items-center justify-between gap-3">
                      <span className="inline-flex w-fit rounded-full border border-primary/35 bg-primary/10 px-3 py-1 text-[13px] font-semibold text-primary">
                        {s.price}
                      </span>
                      {s.popular && (
                        <span className="inline-flex items-center rounded-full border border-primary/45 bg-primary/15 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-primary">
                          Plus choisi
                        </span>
                      )}
                    </div>
                    <div className="w-fit rounded-lg border border-border/70 bg-muted/40 p-2">
                      <s.icon className="text-primary" size={18} />
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-2xl leading-[1.875rem] font-semibold tracking-[-0.04em] text-foreground">{s.title}</h3>
                      <p className="font-dm text-sm leading-[1.35rem] text-muted-foreground">{s.desc}</p>
                    </div>
                    <ul className="space-y-2.5">
                      {s.features.map((f, j) => (
                        <li key={j} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link to={s.link} className="text-primary text-sm font-semibold hover:underline">
                    En savoir plus →
                  </Link>
                </div>
              </motion.div>
            ))}
          </StaggerContainer>
        </ScaleSection>
      </div>
    </section>


    <section className="py-[100px]" style={{ backgroundColor: "hsl(var(--hero-bg) / 0.8)" }}>
      <div className="section-container">
        <BlurReveal className="text-center mb-14">
          <h2 className="heading-display mb-4 leading-tight" style={{ fontSize: "clamp(28px, 4vw, 44px)" }}><span className="inline">POURQUOI NOUS </span><span className="text-[#1DB954] whitespace-nowrap inline">CHOISIR</span></h2>
          <p className="font-dm text-base text-muted-foreground">Tout ce qu'il faut pour réussir en ligne, sans compromis.</p>
        </BlurReveal>
        <ScaleSection>
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4" staggerDelay={0.1}>
            {features.map((feature, i) => (
              <motion.div key={i} variants={itemVariants}><FeatureCard feature={feature} /></motion.div>
            ))}
          </StaggerContainer>
        </ScaleSection>
      </div>
    </section>

    <CtaSection
      title="Prêt à lancer votre projet ?"
      description="Échange découverte offert — par email ou par appel."
      buttonText="Demander un devis gratuit"
      buttonUrl="/contact"
      items={["Réponse sous 24h", "Sans engagement", "Devis personnalisé", "Prix fixe garanti", "Support inclus"]}
    />
  </Layout>
);

export default ServicesPage;
