import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import { ShoppingCart, Check, Package, CreditCard, BarChart3, GraduationCap } from "lucide-react";
import { CtaSection } from "@/components/ui/cta-section";
import { FeaturesBento } from "@/components/ui/features-bento";
import { BorderBeam } from "@/components/ui/border-beam";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import BlurReveal from "@/components/animations/BlurReveal";
import ScaleSection from "@/components/animations/ScaleSection";
import TextSplit from "@/components/animations/TextSplit";
import { StaggerContainer, itemVariants } from "@/components/animations/StaggerContainer";
import heroEcommerce from "@/assets/hero-ecommerce.jpg";

const inclus = [
  "Boutique en ligne complète", "Jusqu'à 50 produits", "Paiement sécurisé (CB, PayPal)", "Gestion des stocks intégrée",
  "Responsive mobile & tablette", "Optimisation SEO avancée", "Tableau de bord de gestion", "Livraison en 14 jours ouvrés",
];

const bentoItems = [
  { title: "Catalogue produits", description: "Gérez vos produits, variantes, photos et descriptions facilement depuis votre tableau de bord.", icon: <Package className="h-5 w-5" /> },
  { title: "Paiement sécurisé", description: "Acceptez CB, PayPal et autres moyens de paiement en toute sécurité pour vos clients.", icon: <CreditCard className="h-5 w-5" /> },
  { title: "Analytics intégrés", description: "Suivez vos ventes, panier moyen et taux de conversion en temps réel.", icon: <BarChart3 className="h-5 w-5" /> },
  { title: "Formation incluse", description: "On vous forme à la gestion de votre boutique. Vous êtes autonome dès le jour 1.", icon: <GraduationCap className="h-5 w-5" /> },
];

const cibles = ["Boutiques et commerces de détail", "Artisans créateurs", "Producteurs locaux", "Marques indépendantes", "Associations vendant des produits"];

const faqs = [
  { q: "Quels moyens de paiement sont acceptés ?", a: "Carte bancaire (Visa, Mastercard) et PayPal. D'autres options peuvent être ajoutées." },
  { q: "Puis-je gérer mes produits moi-même ?", a: "Oui, un tableau de bord simple vous permet d'ajouter, modifier et supprimer vos produits." },
  { q: "Y a-t-il des commissions sur les ventes ?", a: "Aucune commission de notre part. Seules les commissions du prestataire de paiement s'appliquent." },
  { q: "Le site est-il sécurisé ?", a: "Absolument. Certificat SSL, paiement sécurisé et conformité RGPD inclus." },
];

const SiteEcommercePage = () => (
  <Layout>
    <section className="relative py-24 md:py-32 overflow-hidden">
      <img src={heroEcommerce} alt="" className="absolute inset-0 w-full h-full object-cover opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/40" />
      <div className="section-container text-center relative z-10">
        <BlurReveal>
          <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-6"><ShoppingCart className="text-primary" size={32} /></div>
        </BlurReveal>
        <TextSplit className="heading-display text-4xl md:text-6xl mb-4" as="h1">SITE E-COMMERCE</TextSplit>
        <BlurReveal delay={0.4}>
          <p className="text-primary heading-display text-3xl mb-4">747 €</p>
        </BlurReveal>
        <BlurReveal delay={0.5}>
          <p className="font-dm text-lg max-w-xl mx-auto text-muted-foreground">Vendez vos produits en ligne avec une boutique performante, sécurisée et facile à gérer.</p>
        </BlurReveal>
      </div>
    </section>

    <section className="py-[100px]" style={{ backgroundColor: "hsl(var(--section-alt-bg))" }}>
      <div className="section-container">
        <BlurReveal className="text-center mb-12">
          <h2 className="heading-display text-2xl md:text-3xl">CE QUI EST <span className="text-primary">INCLUS</span></h2>
        </BlurReveal>
        <ScaleSection>
          <div className="relative max-w-2xl mx-auto rounded-2xl">
            <GlowingEffect spread={40} glow proximity={64} inactiveZone={0.01} borderWidth={2} disabled={false} />
            <div className="relative z-10 rounded-2xl p-8 md:p-10 overflow-hidden" style={{ backgroundColor: "hsl(var(--card-dark))", border: "1px solid hsl(var(--border-green))" }}>
              <BorderBeam size={300} duration={20} />
              <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-4" staggerDelay={0.08}>
                {inclus.map((item, i) => (
                  <motion.div key={i} className="flex items-center gap-3" variants={itemVariants}>
                    <Check className="text-primary flex-shrink-0" size={20} /><span className="text-foreground text-sm">{item}</span>
                  </motion.div>
                ))}
              </StaggerContainer>
            </div>
          </div>
        </ScaleSection>
      </div>
    </section>

    <section className="py-[100px]" style={{ backgroundColor: "hsl(var(--hero-bg))" }}>
      <div className="section-container">
        <BlurReveal className="text-center mb-12">
          <h2 className="heading-display text-2xl md:text-3xl">FONCTIONNALITÉS <span className="text-primary">CLÉS</span></h2>
        </BlurReveal>
        <ScaleSection>
          <FeaturesBento items={bentoItems} className="max-w-4xl mx-auto grid-cols-1 md:grid-cols-2" />
        </ScaleSection>
      </div>
    </section>

    <section className="py-[100px]" style={{ backgroundColor: "hsl(var(--section-alt-bg))" }}>
      <div className="section-container">
        <BlurReveal className="text-center mb-12">
          <h2 className="heading-display text-2xl md:text-3xl">À QUI ÇA <span className="text-primary">S'ADRESSE</span></h2>
        </BlurReveal>
        <ScaleSection>
          <StaggerContainer className="flex flex-wrap justify-center gap-4" staggerDelay={0.1}>
            {cibles.map((c, i) => (
              <motion.div key={i} className="relative rounded-xl" variants={itemVariants}>
                <GlowingEffect spread={30} glow proximity={50} inactiveZone={0.01} borderWidth={2} disabled={false} />
                <span className="relative z-10 block px-5 py-3 rounded-xl bg-card text-muted-foreground text-sm border border-border transition-all hover:border-primary/40">{c}</span>
              </motion.div>
            ))}
          </StaggerContainer>
        </ScaleSection>
      </div>
    </section>

    <section className="py-[100px]" style={{ backgroundColor: "hsl(var(--hero-bg))" }}>
      <div className="section-container text-center max-w-2xl mx-auto">
        <BlurReveal>
          <h2 className="heading-display text-2xl md:text-3xl mb-6">POURQUOI <span className="text-primary">MAINTENANT</span> ?</h2>
          <p className="font-dm text-muted-foreground text-base leading-relaxed">Le e-commerce en France croît de <span className="text-primary font-semibold">15% par an</span>. Vos clients achètent en ligne — soyez là où ils cherchent.</p>
        </BlurReveal>
      </div>
    </section>

    <section className="py-[100px]" style={{ backgroundColor: "hsl(var(--section-alt-bg))" }}>
      <div className="section-container max-w-2xl mx-auto">
        <BlurReveal className="text-center mb-12">
          <h2 className="heading-display text-2xl md:text-3xl">QUESTIONS <span className="text-primary">FRÉQUENTES</span></h2>
        </BlurReveal>
        <div className="space-y-6">
          {faqs.map((faq, i) => (
            <BlurReveal key={i} delay={i * 0.1}>
              <div className="relative rounded-xl">
                <GlowingEffect spread={40} glow proximity={64} inactiveZone={0.01} borderWidth={2} disabled={false} />
                <div className="relative z-10 rounded-xl p-6" style={{ backgroundColor: "hsl(var(--card-dark))", border: "1px solid hsl(var(--border-green))" }}>
                  <h3 className="font-display font-bold text-foreground mb-2">{faq.q}</h3>
                  <p className="text-muted-foreground text-sm">{faq.a}</p>
                </div>
              </div>
            </BlurReveal>
          ))}
        </div>
      </div>
    </section>

    <CtaSection title="Lancez votre boutique en ligne" description="14 jours, 747€, tout inclus. Formation et support compris." buttonText="Demander un devis gratuit" buttonUrl="/contact" />
  </Layout>
);

export default SiteEcommercePage;
