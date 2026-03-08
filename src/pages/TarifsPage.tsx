import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Globe, ShoppingCart, Shield, Check, Star, CreditCard, ArrowRight } from "lucide-react";
import { PricingComparison } from "@/components/ui/pricing-comparison";
import { CtaSection } from "@/components/ui/cta-section";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { BorderBeam } from "@/components/ui/border-beam";
import { AnimatedGradientText } from "@/components/ui/animated-gradient-text";
import BlurReveal from "@/components/animations/BlurReveal";
import ScaleSection from "@/components/animations/ScaleSection";
import TextSplit from "@/components/animations/TextSplit";
import { StaggerContainer, itemVariants } from "@/components/animations/StaggerContainer";
import BlurReveal from "@/components/animations/BlurReveal";
import ScaleSection from "@/components/animations/ScaleSection";
import TextSplit from "@/components/animations/TextSplit";
import { StaggerContainer, itemVariants } from "@/components/animations/StaggerContainer";

const plans = [
{
  icon: Globe,
  name: "Site Vitrine",
  price: "497",
  features: ["Design sur-mesure", "Jusqu'à 5 pages", "Responsive mobile", "SEO optimisé", "Formulaire de contact", "Hébergement 1 an inclus", "Livraison 14 jours"],
  description: "Idéal pour artisans et indépendants",
  href: "/services/site-vitrine",
  buttonText: "Choisir Vitrine →",
  isPopular: false
},
{
  icon: ShoppingCart,
  name: "Site E-commerce",
  price: "747",
  features: ["Boutique complète", "Jusqu'à 50 produits", "Paiement sécurisé Stripe", "Gestion des stocks", "Responsive mobile", "SEO avancé", "Formation incluse"],
  description: "Pour vendre en ligne efficacement",
  href: "/services/site-ecommerce",
  buttonText: "Choisir E-commerce →",
  isPopular: true
},
{
  icon: Shield,
  name: "Maintenance",
  price: "39",
  suffix: "€/mois",
  features: ["Mises à jour régulières", "Sauvegardes automatiques", "Support réactif", "Monitoring 24/7", "Rapport de suivi"],
  subFormulas: "Essentielle 39€ · Pro 49€ · Premium 59€",
  badge: "Sans engagement",
  description: "Gardez votre site performant",
  href: "/services/maintenance",
  buttonText: "Choisir un forfait →",
  isPopular: false
}];


const maintenancePlans = [
{ name: "Essentielle", price: "39", period: "/mois", description: "Maintenance de base", buttonText: "Souscrire", href: "/contact", isPopular: false },
{ name: "Professionnelle", price: "49", period: "/mois", description: "Notre recommandation", buttonText: "Souscrire", href: "/contact", isPopular: true },
{ name: "Premium", price: "59", period: "/mois", description: "Tranquillité totale", buttonText: "Souscrire", href: "/contact", isPopular: false }];


const maintenanceFeatures = [
{ name: "Mises à jour de sécurité", essential: true, professional: true, premium: true },
{ name: "Sauvegardes", essential: "Hebdo", professional: "Quotidienne", premium: "Temps réel" },
{ name: "Support", essential: "Email", professional: "Email & Tel", premium: "Prioritaire 7j/7" },
{ name: "Modifications mineures", essential: false, professional: "2/mois", premium: "Illimitées" },
{ name: "Monitoring 24/7", essential: false, professional: true, premium: true },
{ name: "Rapport de performance", essential: false, professional: "Mensuel", premium: "Hebdo" },
{ name: "Optimisation SEO", essential: false, professional: false, premium: true },
{ name: "Temps de réponse", essential: "48h", professional: "24h", premium: "4h" }];


const faqs = [
{ q: "Y a-t-il des frais récurrents après livraison ?", a: "L'hébergement est offert la première année. À partir de la 2e année : environ 80-120€/an. Notre maintenance l'inclut." },
{ q: "Puis-je payer en plusieurs fois ?", a: "Oui. Vitrine en 2x, E-commerce en 3x, sans frais ni intérêts." },
{ q: "Le devis est-il vraiment gratuit ?", a: "100% gratuit et sans engagement. Devis détaillé sous 24h après notre échange." },
{ q: "Proposez-vous des réductions ?", a: "Oui, pour les associations et les projets combinés (vitrine + maintenance). Contactez-nous." }];


const FAQItem = ({ faq, index }: {faq: {q: string;a: string;};index: number;}) => {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}>
      
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left rounded-xl p-5 flex items-center justify-between"
        style={{ backgroundColor: "hsl(var(--card-dark))", border: "1px solid hsl(var(--border-green))" }}>
        
        <h3 className="font-display font-bold text-foreground pr-4">{faq.q}</h3>
        <motion.span animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.3 }} className="text-primary flex-shrink-0">▼</motion.span>
      </button>
      <motion.div initial={false} animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
        <p className="text-muted-foreground text-sm px-5 pt-3 pb-1">{faq.a}</p>
      </motion.div>
    </motion.div>);

};

const TarifsPage = () =>
<Layout>
    {/* Hero */}
    <section className="py-24 md:py-32" style={{ backgroundColor: "hsl(var(--hero-bg))" }}>
      <div className="section-container text-center">
        <BlurReveal>
          <span
          className="inline-block font-dm text-[13px] font-semibold px-4 py-1.5 rounded-full text-primary mb-6"
          style={{ background: "rgba(29,185,84,0.15)", border: "1px solid rgba(29,185,84,0.4)" }}>
          
            💰 Paiement en 2 ou 3 fois disponible — sans frais
          </span>
        </BlurReveal>
        <TextSplit className="heading-display text-4xl md:text-6xl mb-4" as="h1">
          DES PRIX CLAIRS.
        </TextSplit>
        <BlurReveal delay={0.2}>
          <h2 className="heading-display text-3xl md:text-5xl text-primary mb-6">ZÉRO SURPRISE.</h2>
        </BlurReveal>
        <BlurReveal delay={0.3}>
          <p className="font-dm text-lg max-w-xl mx-auto text-muted-foreground">
            Tout est inclus dans le prix affiché. Hébergement, SSL, formation, support. Aucun frais caché.
          </p>
        </BlurReveal>
      </div>
    </section>

    {/* Pricing cards */}
    <section className="py-[80px]" style={{ backgroundColor: "hsl(var(--section-alt-bg))" }}>
      <div className="section-container">
        <BlurReveal className="text-center mb-10">
          <h2 className="heading-display text-3xl md:text-4xl">Création de Site Web</h2>
          <p className="text-muted-foreground text-base max-w-xl mx-auto font-dm mt-3">Choisissez la formule adaptée à votre projet. Prix unique, sans abonnement caché.</p>
        </BlurReveal>
        <ScaleSection>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto" staggerDelay={0.12}>
            {plans.map((plan, i) =>
          <motion.div
            key={i}
            variants={itemVariants}
            className={`relative rounded-2xl ${plan.isPopular ? "md:-mt-4 md:mb-4" : ""}`}>
            
                <GlowingEffect spread={40} glow proximity={64} inactiveZone={0.01} borderWidth={2} disabled={false} />
                <div
              className={`relative z-10 rounded-2xl p-7 flex flex-col h-full ${plan.isPopular ? "ring-2 ring-primary" : ""}`}
              style={{
                backgroundColor: plan.name === "Maintenance" ? "#0d130d" : "hsl(var(--card-dark))",
                border: plan.isPopular ? "1px solid hsl(145, 63%, 42%)" : "1px solid hsl(var(--border-green))"
              }}>
              
                  {plan.isPopular &&
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                      <Star className="h-3 w-3 fill-current" /> BEST SELLER
                    </span>
              }
                  {"badge" in plan && plan.badge &&
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-bold px-3 py-1 rounded-full text-primary" style={{ background: "rgba(29,185,84,0.15)", border: "1px solid rgba(29,185,84,0.3)" }}>
                      {plan.badge}
                    </span>
              }

                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 mt-2">
                    <plan.icon className="text-primary" size={20} />
                  </div>

                  <h3 className="text-lg font-bold text-foreground mb-2">{plan.name}</h3>
                  <div className="flex items-baseline gap-1 mb-1">
                    <span className="text-4xl font-bold text-primary heading-display">{plan.price}</span>
                    <span className="text-xl text-primary">{"suffix" in plan ? "" : "€"}</span>
                    {"suffix" in plan && <span className="text-muted-foreground text-sm">{plan.suffix}</span>}
                  </div>
                  {"subFormulas" in plan &&
              <p className="text-xs text-muted-foreground mb-4">{plan.subFormulas}</p>
              }

                  <ul className="space-y-3 flex-1 mb-6">
                    {plan.features.map((f, j) =>
                <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <Check className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" /><span>{f}</span>
                      </li>
                )}
                  </ul>

                  <Link to={plan.href} className={plan.isPopular ? "btn-primary text-center text-sm font-bold" : "btn-outline text-center text-sm font-bold"}>
                    {plan.buttonText}
                  </Link>
                  <p className="text-xs text-center text-muted-foreground mt-3">{plan.description}</p>
                </div>
              </motion.div>
          )}
          </StaggerContainer>
        </ScaleSection>
      </div>
    </section>

    {/* Paiement en plusieurs fois */}
    <section className="py-[80px]" style={{ backgroundColor: "hsl(var(--hero-bg))" }}>
      <div className="section-container">
        <BlurReveal className="text-center mb-10">
          <h2 className="heading-display text-2xl md:text-3xl">FACILITEZ VOTRE <span className="text-primary">INVESTISSEMENT</span></h2>
        </BlurReveal>
        <ScaleSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-xl p-7"
            style={{ backgroundColor: "#111811", border: "1px solid #1a2e1a" }}>
            
              <CreditCard className="text-primary mb-4" size={28} />
              <h3 className="font-display font-black text-white text-lg mb-4">Vitrine en 2x</h3>
              <div className="space-y-2 font-dm text-sm mb-4">
                <p className="text-white">248,50€ <span className="text-muted-foreground">à la commande</span></p>
                <p className="text-white">248,50€ <span className="text-muted-foreground">à la livraison</span></p>
              </div>
              <p className="font-dm text-xs text-muted-foreground">Aucun frais supplémentaire. Aucun intérêt.</p>
            </motion.div>

            <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="rounded-xl p-7"
            style={{ backgroundColor: "#111811", border: "1px solid #1a2e1a" }}>
            
              <CreditCard className="text-primary mb-4" size={28} />
              <h3 className="font-display font-black text-white text-lg mb-4">E-commerce en 3x</h3>
              <div className="space-y-2 font-dm text-sm mb-4">
                <p className="text-white">249€ <span className="text-muted-foreground">à la commande</span></p>
                <p className="text-white">à J+10 <span className="text-muted-foreground">à J+30</span></p>
                <p className="text-white">249€ <span className="text-muted-foreground">à la livraison</span></p>
              </div>
              <p className="font-dm text-xs text-muted-foreground">Aucun frais supplémentaire. Aucun intérêt.</p>
            </motion.div>
          </div>
        </ScaleSection>
      </div>
    </section>

    {/* Maintenance comparison */}
    <section className="py-[80px]" style={{ backgroundColor: "hsl(var(--section-alt-bg))" }}>
      <div className="section-container">
        <PricingComparison
        plans={maintenancePlans}
        features={maintenanceFeatures}
        title="Formules Maintenance"
        description="Gardez votre site à jour, sécurisé et performant. Sans engagement." />
      
      </div>
    </section>

    {/* FAQ */}
    <section className="py-[80px]" style={{ backgroundColor: "hsl(var(--hero-bg))" }}>
      <div className="section-container max-w-2xl mx-auto">
        <BlurReveal className="text-center mb-12">
          <h2 className="heading-display text-2xl md:text-3xl">VOS QUESTIONS <span className="text-primary">NOS RÉPONSES</span></h2>
        </BlurReveal>
        <div className="space-y-4">
          {faqs.map((faq, i) =>
        <FAQItem key={i} faq={faq} index={i} />
        )}
        </div>
      </div>
    </section>

    <CtaSection
    title="Convaincu ? Lancez-vous !"
    description="Devis gratuit, sans engagement. On vous répond sous 24h."
    buttonText="Demander un devis gratuit"
    buttonUrl="/contact" />
  
  </Layout>;


export default TarifsPage;