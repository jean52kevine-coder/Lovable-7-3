import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Layout from "@/components/Layout";
import { Check, Star, ChevronDown, ArrowRight, CreditCard } from "lucide-react";
import { Pricing } from "@/components/ui/pricing-premium";
import { PricingComparison } from "@/components/ui/pricing-comparison";
import BlurReveal from "@/components/animations/BlurReveal";
import ScaleSection from "@/components/animations/ScaleSection";
import TextSplit from "@/components/animations/TextSplit";
import { StaggerContainer, itemVariants } from "@/components/animations/StaggerContainer";

/* ─── DATA ─── */
const creationPlans = [
  {
    name: "Site Vitrine", price: "497", yearlyPrice: "447", period: "",
    features: ["Design sur-mesure", "Jusqu'à 5 pages", "Responsive mobile", "SEO optimisé", "Formulaire de contact", "Hébergement 1 an inclus", "Livraison 14 jours"],
    description: "Paiement en 2x disponible",
    buttonText: "Choisir ce pack",
    href: "/services/site-vitrine",
    isPopular: false,
  },
  {
    name: "Site E-commerce", price: "747", yearlyPrice: "672", period: "",
    features: ["Boutique complète", "Produits illimités", "Paiement sécurisé Stripe", "Gestion des stocks", "Dashboard admin", "SEO avancé", "Formation 2h incluse", "Livraison 14 jours"],
    description: "Paiement en 3x disponible",
    buttonText: "Choisir ce pack",
    href: "/services/site-ecommerce",
    isPopular: true,
  },
  {
    name: "Maintenance", price: "39", yearlyPrice: "39", period: "/mois",
    features: ["Mises à jour régulières", "Sauvegardes automatiques", "Monitoring", "Support réactif", "Rapports de suivi"],
    description: "Sans engagement · 3 formules : 39€ · 49€ · 59€",
    buttonText: "Choisir ce forfait",
    href: "/services/maintenance",
    isPopular: false,
  },
];

const compRows = [
  { name: "Design sur-mesure", vitrine: true, ecom: true, maintenance: "—" },
  { name: "Nombre de pages", vitrine: "5", ecom: "Illimité", maintenance: "—" },
  { name: "Responsive mobile", vitrine: true, ecom: true, maintenance: "—" },
  { name: "SEO optimisé", vitrine: true, ecom: "Avancé", maintenance: "Continu (Pro+)" },
  { name: "Formulaire contact", vitrine: true, ecom: true, maintenance: "—" },
  { name: "Hébergement inclus", vitrine: "1 an", ecom: "1 an", maintenance: "Inclus" },
  { name: "Paiement en ligne", vitrine: false, ecom: true, maintenance: "—" },
  { name: "Gestion des stocks", vitrine: false, ecom: true, maintenance: "—" },
  { name: "Dashboard admin", vitrine: false, ecom: true, maintenance: "—" },
  { name: "Formation incluse", vitrine: "Prise en main", ecom: "2h complète", maintenance: "—" },
  { name: "Support post-livraison", vitrine: "30 jours", ecom: "30 jours", maintenance: "Continu" },
  { name: "Mises à jour", vitrine: false, ecom: false, maintenance: true },
  { name: "Sauvegardes", vitrine: false, ecom: false, maintenance: true },
  { name: "Monitoring", vitrine: false, ecom: false, maintenance: true },
  { name: "Rapport mensuel", vitrine: false, ecom: false, maintenance: "Pro+" },
];

const maintenancePlans = [
  { name: "Essentielle", price: "39", period: "/mois", description: "Maintenance de base", buttonText: "Souscrire", href: "/contact", isPopular: false },
  { name: "Professionnelle", price: "49", period: "/mois", description: "Notre recommandation", buttonText: "Souscrire", href: "/contact", isPopular: true },
  { name: "Premium", price: "59", period: "/mois", description: "Tranquillité totale", buttonText: "Souscrire", href: "/contact", isPopular: false },
];

const maintenanceFeatures = [
  { name: "Mises à jour de sécurité", essential: true, professional: true, premium: true },
  { name: "Sauvegardes", essential: "Hebdo", professional: "Quotidienne", premium: "Temps réel" },
  { name: "Support", essential: "Email", professional: "Email & Tel", premium: "Prioritaire 7j/7" },
  { name: "Modifications", essential: "1/mois", professional: "3/mois", premium: "Illimitées" },
  { name: "Monitoring 24/7", essential: false, professional: true, premium: true },
  { name: "Rapport", essential: "Trimestriel", professional: "Mensuel", premium: "Hebdo" },
  { name: "Optimisation SEO", essential: false, professional: true, premium: true },
  { name: "Temps de réponse", essential: "72h", professional: "24h", premium: "4h" },
];

const faqs = [
  { q: "Y a-t-il des frais récurrents après la livraison ?", a: "L'hébergement est offert la première année. À partir de la 2e année, il est d'environ 80-120€/an selon votre formule. Notre maintenance inclut l'hébergement." },
  { q: "Puis-je payer en plusieurs fois ?", a: "Oui. Vitrine en 2x, E-commerce en 3x, sans frais ni intérêts." },
  { q: "Le devis est-il vraiment gratuit et sans engagement ?", a: "100% gratuit et sans engagement. On vous envoie un devis détaillé sous 24h après notre échange." },
  { q: "Proposez-vous des réductions ?", a: "Oui, pour les associations et les projets combinés (vitrine + maintenance). Contactez-nous." },
];

/* ─── CompCell ─── */
const CompCell = ({ val }: { val: string | boolean }) => {
  if (val === true) return <Check className="text-primary mx-auto" size={16} />;
  if (val === false) return <span className="text-muted-foreground">—</span>;
  return <span className="text-foreground text-xs">{String(val)}</span>;
};

/* ─── FAQ Item ─── */
const FaqItem = ({ q, a, index }: { q: string; a: string; index: number }) => {
  const [open, setOpen] = useState(false);
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }} className="rounded-xl overflow-hidden" style={{ backgroundColor: "#111811", border: "1px solid #1a2e1a" }}>
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between p-5 text-left">
        <span className="font-display font-bold text-foreground text-sm md:text-base">{q}</span>
        <motion.div animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.25 }}>
          <ChevronDown className="text-primary flex-shrink-0" size={20} />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3, ease: [0.25, 0.4, 0.25, 1] }} className="overflow-hidden">
            <p className="px-5 pb-5 text-muted-foreground text-sm">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

/* ─── PAGE ─── */
const TarifsPage = () => (
  <Layout>
    {/* HERO */}
    <section className="py-28 md:py-36" style={{ backgroundColor: "#0a0f0a" }}>
      <div className="section-container text-center">
        <BlurReveal>
          <span className="inline-block text-sm font-semibold px-4 py-2 rounded-full mb-6" style={{ backgroundColor: "rgba(29,185,84,0.12)", color: "hsl(var(--primary))" }}>
            💰 Paiement en 2 ou 3 fois disponible
          </span>
        </BlurReveal>
        <TextSplit className="heading-display text-foreground" style={{ fontSize: "clamp(48px,6vw,80px)" }} as="h1">
          DES PRIX CLAIRS.
        </TextSplit>
        <BlurReveal delay={0.3}>
          <span className="heading-display text-primary block" style={{ fontSize: "clamp(48px,6vw,80px)" }}>ZÉRO SURPRISE.</span>
        </BlurReveal>
        <BlurReveal delay={0.45}>
          <p className="font-dm text-lg max-w-2xl mx-auto mt-6 text-muted-foreground">
            Tout est inclus dans le prix affiché. Pas de frais cachés, pas de mauvaises surprises.
          </p>
        </BlurReveal>
      </div>
    </section>

    {/* PRICING CARDS */}
    <section className="py-[80px]" style={{ backgroundColor: "#0d130d" }}>
      <div className="section-container">
        <Pricing
          plans={creationPlans}
          title="Nos Offres"
          description="Choisissez la formule adaptée à votre projet. Prix unique, sans abonnement caché."
        />
      </div>
    </section>

    {/* TABLEAU COMPARATIF GLOBAL */}
    <section className="py-[80px]" style={{ backgroundColor: "#0a0f0a" }}>
      <div className="section-container">
        <BlurReveal className="text-center mb-12">
          <h2 className="heading-display text-2xl md:text-4xl mb-3">
            TABLEAU <span className="text-primary">COMPARATIF</span>
          </h2>
          <p className="font-dm text-muted-foreground">Comparez nos offres pour trouver celle qui vous convient.</p>
        </BlurReveal>
        <ScaleSection>
          <div className="rounded-2xl overflow-x-auto max-w-5xl mx-auto" style={{ border: "1px solid #1a2e1a" }}>
            <table className="w-full text-sm">
              <thead>
                <tr style={{ backgroundColor: "#0d130d" }}>
                  <th className="text-left p-4 font-display font-bold text-muted-foreground">Fonctionnalité</th>
                  <th className="text-center p-4 font-display font-bold text-foreground">Vitrine</th>
                  <th className="text-center p-4 font-display font-bold text-primary">E-commerce</th>
                  <th className="text-center p-4 font-display font-bold text-foreground">Maintenance</th>
                </tr>
              </thead>
              <tbody>
                {compRows.map((row, i) => (
                  <tr key={i} style={{ backgroundColor: "#111811", borderTop: "1px solid #1a2e1a" }}>
                    <td className="p-4 text-muted-foreground">{row.name}</td>
                    <td className="p-4 text-center"><CompCell val={row.vitrine} /></td>
                    <td className="p-4 text-center"><CompCell val={row.ecom} /></td>
                    <td className="p-4 text-center"><CompCell val={row.maintenance} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </ScaleSection>
      </div>
    </section>

    {/* MAINTENANCE COMPARISON TABLE */}
    <section className="py-[80px]" style={{ backgroundColor: "#0d130d" }}>
      <div className="section-container">
        <PricingComparison
          plans={maintenancePlans}
          features={maintenanceFeatures}
          title="Détail des Formules Maintenance"
          description="Gardez votre site à jour, sécurisé et performant. Sans engagement."
        />
      </div>
    </section>

    {/* PAIEMENT EN PLUSIEURS FOIS */}
    <section className="py-[80px]" style={{ backgroundColor: "#0a0f0a" }}>
      <div className="section-container">
        <BlurReveal className="text-center mb-12">
          <h2 className="heading-display text-2xl md:text-4xl">
            FACILITEZ VOTRE <span className="text-primary">INVESTISSEMENT</span>
          </h2>
        </BlurReveal>
        <ScaleSection>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto" staggerDelay={0.15}>
            <motion.div variants={itemVariants} className="rounded-xl p-6 card-shimmer" style={{ backgroundColor: "#111811", border: "1px solid #1a2e1a" }}>
              <CreditCard className="text-primary mb-3" size={24} />
              <h4 className="font-display font-bold text-foreground mb-2">Site Vitrine en 2x</h4>
              <p className="font-dm text-sm text-muted-foreground">248,50€ à la commande + 248,50€ à la livraison. Aucun frais supplémentaire.</p>
            </motion.div>
            <motion.div variants={itemVariants} className="rounded-xl p-6 card-shimmer" style={{ backgroundColor: "#111811", border: "1px solid #1a2e1a" }}>
              <CreditCard className="text-primary mb-3" size={24} />
              <h4 className="font-display font-bold text-foreground mb-2">Site E-commerce en 3x</h4>
              <p className="font-dm text-sm text-muted-foreground">249€ à la commande + 249€ à 30 jours + 249€ à la livraison. Aucun frais supplémentaire.</p>
            </motion.div>
          </StaggerContainer>
        </ScaleSection>
      </div>
    </section>

    {/* FAQ */}
    <section className="py-[80px]" style={{ backgroundColor: "#0d130d" }}>
      <div className="section-container max-w-3xl mx-auto">
        <BlurReveal className="text-center mb-12">
          <h2 className="heading-display text-2xl md:text-4xl">
            QUESTIONS SUR <span className="text-primary">LES TARIFS</span>
          </h2>
        </BlurReveal>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <FaqItem key={i} q={faq.q} a={faq.a} index={i} />
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="relative py-[120px] px-6 overflow-hidden" style={{ background: "linear-gradient(160deg, #0d1f13 0%, #0a0f0a 60%)", borderTop: "1px solid #1a2e1a" }}>
      <div className="section-container text-center relative z-10">
        <BlurReveal>
          <h2 className="heading-display mb-6" style={{ fontSize: "clamp(32px, 4vw, 56px)" }}>
            CONVAINCU ? <span className="text-primary">LANCEZ-VOUS !</span>
          </h2>
        </BlurReveal>
        <BlurReveal delay={0.15}>
          <p className="font-dm text-lg mb-10 mx-auto max-w-lg" style={{ color: "rgba(255,255,255,0.6)" }}>
            Devis gratuit, sans engagement. On vous répond sous 24h.
          </p>
        </BlurReveal>
        <BlurReveal delay={0.3}>
          <Link to="/contact" className="btn-primary text-lg px-10 py-[18px]">
            Demander un devis gratuit <ArrowRight className="ml-2 inline" size={18} />
          </Link>
        </BlurReveal>
        <BlurReveal delay={0.45}>
          <div className="flex flex-wrap justify-center gap-6 mt-8 font-dm text-[13px]" style={{ color: "rgba(255,255,255,0.4)" }}>
            <span>✓ Sans engagement</span>
            <span>✓ Réponse sous 24h</span>
            <span>✓ Paiement en plusieurs fois</span>
          </div>
        </BlurReveal>
      </div>
    </section>
  </Layout>
);

export default TarifsPage;
