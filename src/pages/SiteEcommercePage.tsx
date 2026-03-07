import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import { ShoppingCart, Check, ArrowRight, Package, CreditCard, BarChart3, GraduationCap } from "lucide-react";
import { CtaSection } from "@/components/ui/cta-section";
import { FeaturesBento } from "@/components/ui/features-bento";
import { BorderBeam } from "@/components/ui/border-beam";
import heroEcommerce from "@/assets/hero-ecommerce.jpg";

const inclus = [
  "Boutique en ligne complète",
  "Jusqu'à 50 produits",
  "Paiement sécurisé (CB, PayPal)",
  "Gestion des stocks intégrée",
  "Responsive mobile & tablette",
  "Optimisation SEO avancée",
  "Tableau de bord de gestion",
  "Livraison en 14 jours ouvrés",
];

const bentoItems = [
  {
    title: "Catalogue produits",
    description: "Gérez vos produits, variantes, photos et descriptions facilement depuis votre tableau de bord.",
    icon: <Package className="h-5 w-5" />,
  },
  {
    title: "Paiement sécurisé",
    description: "Acceptez CB, PayPal et autres moyens de paiement en toute sécurité pour vos clients.",
    icon: <CreditCard className="h-5 w-5" />,
  },
  {
    title: "Analytics intégrés",
    description: "Suivez vos ventes, panier moyen et taux de conversion en temps réel.",
    icon: <BarChart3 className="h-5 w-5" />,
  },
  {
    title: "Formation incluse",
    description: "On vous forme à la gestion de votre boutique. Vous êtes autonome dès le jour 1.",
    icon: <GraduationCap className="h-5 w-5" />,
  },
];

const cibles = [
  "Boutiques et commerces de détail",
  "Artisans créateurs",
  "Producteurs locaux",
  "Marques indépendantes",
  "Associations vendant des produits",
];

const faqs = [
  { q: "Quels moyens de paiement sont acceptés ?", a: "Carte bancaire (Visa, Mastercard) et PayPal. D'autres options peuvent être ajoutées." },
  { q: "Puis-je gérer mes produits moi-même ?", a: "Oui, un tableau de bord simple vous permet d'ajouter, modifier et supprimer vos produits." },
  { q: "Y a-t-il des commissions sur les ventes ?", a: "Aucune commission de notre part. Seules les commissions du prestataire de paiement s'appliquent." },
  { q: "Le site est-il sécurisé ?", a: "Absolument. Certificat SSL, paiement sécurisé et conformité RGPD inclus." },
];

const SiteEcommercePage = () => (
  <Layout>
    {/* Hero */}
    <section className="relative py-24 md:py-32 overflow-hidden">
      <img src={heroEcommerce} alt="" className="absolute inset-0 w-full h-full object-cover opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/40" />
      <motion.div
        className="section-container text-center relative z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
          <ShoppingCart className="text-primary" size={32} />
        </div>
        <h1 className="heading-display text-4xl md:text-6xl mb-4">
          SITE <span className="text-primary">E-COMMERCE</span>
        </h1>
        <p className="text-primary heading-display text-3xl mb-4">747 €</p>
        <p className="font-dm text-lg max-w-xl mx-auto text-muted-foreground">
          Vendez vos produits en ligne avec une boutique performante, sécurisée et facile à gérer.
        </p>
      </motion.div>
    </section>

    {/* Ce qui est inclus */}
    <section className="py-[100px]" style={{ backgroundColor: "hsl(var(--section-alt-bg))" }}>
      <div className="section-container">
        <motion.h2
          className="heading-display text-2xl md:text-3xl text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6 }}
        >
          CE QUI EST <span className="text-primary">INCLUS</span>
        </motion.h2>
        <div className="relative max-w-2xl mx-auto rounded-2xl p-8 md:p-10 overflow-hidden" style={{ backgroundColor: "hsl(var(--card-dark))", border: "1px solid hsl(var(--border-green))" }}>
          <BorderBeam size={300} duration={20} />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {inclus.map((item, i) => (
              <motion.div
                key={i}
                className="flex items-center gap-3"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <Check className="text-primary flex-shrink-0" size={20} />
                <span className="text-foreground text-sm">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* Bento Features */}
    <section className="py-[100px]" style={{ backgroundColor: "hsl(var(--hero-bg))" }}>
      <div className="section-container">
        <motion.h2
          className="heading-display text-2xl md:text-3xl text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6 }}
        >
          FONCTIONNALITÉS <span className="text-primary">CLÉS</span>
        </motion.h2>
        <FeaturesBento items={bentoItems} className="max-w-4xl mx-auto grid-cols-1 md:grid-cols-2" />
      </div>
    </section>

    {/* À qui ça s'adresse */}
    <section className="py-[100px]" style={{ backgroundColor: "hsl(var(--section-alt-bg))" }}>
      <div className="section-container">
        <motion.h2
          className="heading-display text-2xl md:text-3xl text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6 }}
        >
          À QUI ÇA <span className="text-primary">S'ADRESSE</span>
        </motion.h2>
        <div className="flex flex-wrap justify-center gap-4">
          {cibles.map((c, i) => (
            <motion.span
              key={i}
              className="px-5 py-3 rounded-xl bg-card text-muted-foreground text-sm border border-border transition-all hover:border-primary/40"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              {c}
            </motion.span>
          ))}
        </div>
      </div>
    </section>

    {/* Pourquoi maintenant */}
    <section className="py-[100px]" style={{ backgroundColor: "hsl(var(--hero-bg))" }}>
      <div className="section-container text-center max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="heading-display text-2xl md:text-3xl mb-6">
            POURQUOI <span className="text-primary">MAINTENANT</span> ?
          </h2>
          <p className="font-dm text-muted-foreground text-base leading-relaxed">
            Le e-commerce en France croît de <span className="text-primary font-semibold">15% par an</span>.
            Vos clients achètent en ligne — soyez là où ils cherchent.
          </p>
        </motion.div>
      </div>
    </section>

    {/* FAQ */}
    <section className="py-[100px]" style={{ backgroundColor: "hsl(var(--section-alt-bg))" }}>
      <div className="section-container max-w-2xl mx-auto">
        <motion.h2
          className="heading-display text-2xl md:text-3xl text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6 }}
        >
          QUESTIONS <span className="text-primary">FRÉQUENTES</span>
        </motion.h2>
        <div className="space-y-6">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              className="rounded-xl p-6"
              style={{ backgroundColor: "hsl(var(--card-dark))", border: "1px solid hsl(var(--border-green))" }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <h3 className="font-display font-bold text-foreground mb-2">{faq.q}</h3>
              <p className="text-muted-foreground text-sm">{faq.a}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <CtaSection
      title="Lancez votre boutique en ligne"
      description="14 jours, 747€, tout inclus. Formation et support compris."
      buttonText="Demander un devis gratuit"
      buttonUrl="/contact"
    />
  </Layout>
);

export default SiteEcommercePage;
