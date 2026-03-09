import { Link } from "react-router-dom";
import { Check, ArrowRight, Globe, ShoppingCart, Shield } from "lucide-react";
import { motion } from "framer-motion";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import BlurReveal from "@/components/animations/BlurReveal";
import { StaggerContainer, itemVariants } from "@/components/animations/StaggerContainer";

const plans = [
  { Icon: Globe, title: "Site Vitrine", price: "497", features: ["Design sur-mesure", "Jusqu'à 5 pages", "Responsive", "SEO optimisé", "Livraison 14j"], link: "/services/site-vitrine", best: false },
  { Icon: ShoppingCart, title: "Site E-commerce", price: "747", features: ["Boutique complète", "Paiement sécurisé", "Gestion stocks", "SEO avancé", "Formation incluse"], link: "/services/site-ecommerce", best: true },
  { Icon: Shield, title: "Maintenance", price: "39", suffix: "/mois", features: ["Mises à jour", "Sauvegardes auto", "Support réactif", "Monitoring 24/7", "Rapport mensuel"], link: "/services/maintenance", best: false },
];

const PricingCards = () => (
  <section className="py-24" style={{ backgroundColor: "hsl(var(--section-alt-bg))" }}>
    <div className="section-container">
      <BlurReveal className="text-center mb-16">
        <h2 className="heading-display mb-3" style={{ fontSize: "clamp(28px, 4vw, 44px)" }}>
          DES PRIX CLAIRS.{" "}<span className="text-primary whitespace-nowrap">ZÉRO SURPRISE.</span>
        </h2>
        <p className="font-dm text-base" style={{ color: "hsl(var(--muted-foreground))" }}>
          Tout est inclus. Pas de frais cachés.
        </p>
      </BlurReveal>

      <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto items-end" staggerDelay={0.12}>
        {plans.map((p, i) => (
          <motion.div
            key={i}
            variants={itemVariants}
            whileHover={{ y: -6, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="relative rounded-2xl"
            style={p.best ? { transform: "scale(1.04)", zIndex: 10 } : undefined}
          >
            <GlowingEffect spread={40} glow proximity={64} inactiveZone={0.01} borderWidth={2} disabled={false} />
            <div
              className="relative z-10 rounded-2xl p-7 flex flex-col h-full"
              style={{
                backgroundColor: "hsl(var(--card-dark))",
                border: p.best ? "1px solid hsl(var(--primary))" : "1px solid hsl(var(--border-green))",
              }}
            >
              {p.best && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-[11px] font-bold px-3 py-1 rounded-full text-primary-foreground" style={{ background: "hsl(var(--primary))" }}>
                  BEST SELLER
                </span>
              )}

              <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4" style={{ background: "hsl(var(--primary) / 0.1)" }}>
                <p.Icon className="text-primary" size={20} />
              </div>

              <h3 className="heading-display text-lg text-white mb-2">{p.title}</h3>
              <div className="mb-5">
                <span className="text-primary heading-display text-3xl">{p.price}€</span>
                {p.suffix && <span className="text-muted-foreground text-sm">{p.suffix}</span>}
              </div>

              <ul className="space-y-2 flex-1 mb-6">
                {p.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Check className="text-primary flex-shrink-0" size={14} />{f}
                  </li>
                ))}
              </ul>

              <Link to={p.link} className="btn-primary text-center text-sm">
                En savoir plus <ArrowRight className="ml-2 inline" size={14} />
              </Link>
            </div>
          </motion.div>
        ))}
      </StaggerContainer>

      <div className="text-center mt-10">
        <Link to="/tarifs" className="text-primary font-dm font-semibold text-sm hover:underline">
          Voir le détail complet des tarifs →
        </Link>
      </div>
    </div>
  </section>
);

export default PricingCards;
