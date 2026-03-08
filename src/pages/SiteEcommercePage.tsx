import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { ShoppingCart, Check, Package, CreditCard, BarChart3, GraduationCap, ArrowRight } from "lucide-react";
import { CtaSection } from "@/components/ui/cta-section";
import { FeaturesBento } from "@/components/ui/features-bento";
import { BorderBeam } from "@/components/ui/border-beam";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { EcommerceHeroIllustration } from "@/components/illustrations/SvgIllustrations";
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

const profils = [
  {
    emoji: "🧶",
    name: "Camille, créatrice de bijoux",
    text: "Avant : vente uniquement sur les marchés le weekend. Après : sa boutique tourne 24h/24. Elle reçoit des commandes même quand elle crée, même la nuit.",
  },
  {
    emoji: "🍯",
    name: "Antoine, apiculteur en Dordogne",
    text: "Son miel se vend maintenant dans toute la France. Livraison Colissimo configurée, paiement automatique. Il se concentre sur la production, sa boutique gère le reste.",
  },
  {
    emoji: "👗",
    name: "Léa, boutique prêt-à-porter à Lille",
    text: "Elle voulait compléter son magasin physique. Aujourd'hui 30% de son chiffre d'affaires vient de sa boutique en ligne. Elle l'a rentabilisée en 6 semaines.",
  },
];

const comparisonRows = [
  { feature: "Présenter votre activité", vitrine: true, ecommerce: true },
  { feature: "Apparaître sur Google", vitrine: true, ecommerce: true },
  { feature: "Formulaire de contact", vitrine: true, ecommerce: true },
  { feature: "Responsive mobile", vitrine: true, ecommerce: true },
  { feature: "Vendre des produits en ligne", vitrine: false, ecommerce: true },
  { feature: "Panier & paiement sécurisé", vitrine: false, ecommerce: true },
  { feature: "Gestion des stocks", vitrine: false, ecommerce: true },
  { feature: "Dashboard commandes", vitrine: false, ecommerce: true },
  { feature: "Facturation automatique", vitrine: false, ecommerce: true },
  { feature: "Formation 2h incluse", vitrine: false, ecommerce: true },
];

const faqs = [
  { q: "Quels moyens de paiement sont acceptés ?", a: "Carte bancaire (Visa, Mastercard) et PayPal. D'autres options peuvent être ajoutées." },
  { q: "Puis-je gérer mes produits moi-même ?", a: "Oui, un tableau de bord simple vous permet d'ajouter, modifier et supprimer vos produits." },
  { q: "Y a-t-il des commissions sur les ventes ?", a: "Aucune commission de notre part. Seules les commissions du prestataire de paiement s'appliquent." },
  { q: "Le site est-il sécurisé ?", a: "Absolument. Certificat SSL, paiement sécurisé et conformité RGPD inclus." },
];

const FAQItem = ({ faq, index }: { faq: { q: string; a: string }; index: number }) => {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left rounded-xl p-5 flex items-center justify-between"
        style={{ backgroundColor: "hsl(var(--card-dark))", border: "1px solid hsl(var(--border-green))" }}
      >
        <h3 className="font-display font-bold text-foreground pr-4">{faq.q}</h3>
        <motion.span animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.3 }} className="text-primary flex-shrink-0">▼</motion.span>
      </button>
      <motion.div initial={false} animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
        <p className="text-muted-foreground text-sm px-5 pt-3 pb-1">{faq.a}</p>
      </motion.div>
    </motion.div>
  );
};

const SiteEcommercePage = () => (
  <Layout>
    {/* Hero */}
    <section className="relative py-24 md:py-32 overflow-hidden">
      <img src={heroEcommerce} alt="" className="absolute inset-0 w-full h-full object-cover opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/40" />
      <div className="section-container text-center relative z-10">
        <BlurReveal>
          <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-6"><ShoppingCart className="text-primary" size={32} /></div>
        </BlurReveal>
        <TextSplit className="heading-display text-4xl md:text-6xl mb-4" as="h1">SITE E-COMMERCE</TextSplit>
        <BlurReveal delay={0.4}><p className="text-primary heading-display text-3xl mb-4">747 €</p></BlurReveal>
        <BlurReveal delay={0.5}><p className="font-dm text-lg max-w-xl mx-auto text-muted-foreground">Vendez vos produits en ligne avec une boutique performante, sécurisée et facile à gérer.</p></BlurReveal>
      </div>
    </section>

    {/* Ce qui est inclus */}
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

    {/* Fonctionnalités */}
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

    {/* À qui ça s'adresse */}
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

    {/* Profils types */}
    <section className="py-[100px]" style={{ backgroundColor: "hsl(var(--hero-bg))" }}>
      <div className="section-container">
        <BlurReveal className="text-center mb-14">
          <h2 className="heading-display text-2xl md:text-3xl">FAITS POUR DES GENS <span className="text-primary">COMME VOUS</span></h2>
        </BlurReveal>
        <ScaleSection>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6" staggerDelay={0.12}>
            {profils.map((p, i) => (
              <motion.div key={i} variants={itemVariants}>
                <div className="rounded-xl p-6 h-full" style={{ backgroundColor: "#111811", border: "1px solid #1a2e1a" }}>
                  <span className="text-3xl block mb-4">{p.emoji}</span>
                  <h3 className="font-display font-black text-white mb-3">{p.name}</h3>
                  <p className="font-dm text-sm leading-relaxed mb-4" style={{ color: "rgba(255,255,255,0.6)" }}>{p.text}</p>
                  <span className="inline-block text-[11px] text-muted-foreground italic">*Résultat fictif illustratif</span>
                </div>
              </motion.div>
            ))}
          </StaggerContainer>
        </ScaleSection>
      </div>
    </section>

    {/* Tableau comparatif */}
    <section className="py-[100px]" style={{ backgroundColor: "hsl(var(--section-alt-bg))" }}>
      <div className="section-container">
        <BlurReveal className="text-center mb-14">
          <h2 className="heading-display text-2xl md:text-3xl">VITRINE OU <span className="text-primary">E-COMMERCE ?</span></h2>
          <p className="font-dm text-muted-foreground mt-3">Choisissez selon votre besoin.</p>
        </BlurReveal>
        <ScaleSection>
          <div className="max-w-3xl mx-auto rounded-xl overflow-hidden" style={{ border: "1px solid #1a2e1a" }}>
            <table className="w-full text-sm">
              <thead>
                <tr style={{ backgroundColor: "#0d130d" }}>
                  <th className="text-left p-4 font-dm font-semibold text-muted-foreground">Fonctionnalité</th>
                  <th className="text-center p-4 font-display font-bold text-white">Vitrine <span className="text-primary">497€</span></th>
                  <th className="text-center p-4 font-display font-bold text-white">E-commerce <span className="text-primary">747€</span></th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => (
                  <tr key={i} style={{ backgroundColor: "#111811", borderTop: "1px solid #1a2e1a" }}>
                    <td className="p-4 font-dm text-muted-foreground">{row.feature}</td>
                    <td className="p-4 text-center">
                      {row.vitrine
                        ? <span style={{ color: "hsl(145, 63%, 42%)" }}>✅</span>
                        : <span style={{ color: "rgba(239,68,68,0.8)" }}>❌</span>}
                    </td>
                    <td className="p-4 text-center">
                      {row.ecommerce
                        ? <span style={{ color: "hsl(145, 63%, 42%)" }}>✅</span>
                        : <span style={{ color: "rgba(239,68,68,0.8)" }}>❌</span>}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link to="/services/site-vitrine" className="btn-outline text-center">
              Choisir Vitrine →
            </Link>
            <Link to="/contact" className="btn-primary text-center">
              Choisir E-commerce →
            </Link>
          </div>
        </ScaleSection>
      </div>
    </section>

    {/* Pourquoi maintenant */}
    <section className="py-[100px]" style={{ backgroundColor: "hsl(var(--hero-bg))" }}>
      <div className="section-container text-center max-w-2xl mx-auto">
        <BlurReveal>
          <h2 className="heading-display text-2xl md:text-3xl mb-6">POURQUOI <span className="text-primary">MAINTENANT</span> ?</h2>
          <p className="font-dm text-muted-foreground text-base leading-relaxed">Le e-commerce en France croît de <span className="text-primary font-semibold">15% par an</span>. Vos clients achètent en ligne — soyez là où ils cherchent.</p>
        </BlurReveal>
      </div>
    </section>

    {/* FAQ */}
    <section className="py-[100px]" style={{ backgroundColor: "hsl(var(--section-alt-bg))" }}>
      <div className="section-container max-w-2xl mx-auto">
        <BlurReveal className="text-center mb-12">
          <h2 className="heading-display text-2xl md:text-3xl">QUESTIONS <span className="text-primary">FRÉQUENTES</span></h2>
        </BlurReveal>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <FAQItem key={i} faq={faq} index={i} />
          ))}
        </div>
      </div>
    </section>

    <CtaSection title="Lancez votre boutique en ligne" description="14 jours, 747€, tout inclus. Formation et support compris." buttonText="Demander un devis gratuit" buttonUrl="/contact" />
  </Layout>
);

export default SiteEcommercePage;
