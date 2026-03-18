import { Link } from "react-router-dom";
import { Check, ArrowRight, Globe, ShoppingCart, Shield } from "lucide-react";
import { motion } from "framer-motion";
import BlurReveal from "@/components/animations/BlurReveal";
import { StaggerContainer, itemVariants } from "@/components/animations/StaggerContainer";
import PopularBadge from "@/components/PopularBadge";
import SectionBackground from "@/components/SectionBackground";

const plans = [
  { Icon: Globe, title: "Site Vitrine", price: "497", features: ["Design sur-mesure", "Jusqu'à 5 pages", "Responsive", "SEO optimisé", "Livraison 14j"], link: "/contact?service=vitrine", best: false },
  { Icon: ShoppingCart, title: "Site E-commerce", price: "747", features: ["Boutique complète", "Paiement sécurisé", "Gestion stocks", "SEO avancé", "Formation incluse"], link: "/contact?service=ecommerce", best: true },
  { Icon: Shield, title: "Maintenance", price: "29", suffix: "/mois", features: ["Mises à jour de sécurité", "Sauvegarde hebdomadaire", "Support par email", "Monitoring de base", "Rapport trimestriel"], link: "/contact?service=maintenance", best: false },
];

const PricingCards = () => (
  <section className="relative py-12 md:py-24 overflow-hidden" style={{ backgroundColor: "hsl(var(--section-alt-bg))" }}>
    <SectionBackground variant="wavegrid" intensity={0.55} />
    <div className="section-container relative z-10">
      <BlurReveal className="text-center mb-16">
        <h2 className="heading-display mb-3" style={{ fontSize: "clamp(28px, 4vw, 44px)" }}>
          DES PRIX CLAIRS. <span className="text-primary whitespace-nowrap">ZÉRO SURPRISE.</span>
        </h2>
        <p className="font-dm text-base" style={{ color: "hsl(var(--muted-foreground))" }}>
          Tout est inclus. Pas de frais cachés.
        </p>
      </BlurReveal>

      <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto items-stretch" staggerDelay={0.12}>
        {plans.map((p, i) => (
          <motion.div
            key={i}
            variants={itemVariants}
            whileHover={{ y: -6 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="relative w-full pt-6"
          >
            {p.best && (
              <div className="flex justify-center mb-4">
                <PopularBadge />
              </div>
            )}
            <div className={`relative w-full rounded-2xl p-8 flex flex-col gap-6 transition-all duration-300 group ${p.best ? "bg-[#0d1a0d] border-2 border-[#1DB954]/50 shadow-[0_0_50px_rgba(29,185,84,0.1)]" : "bg-[#0d130d] border border-[#1a2e1a] hover:border-[#1DB954]/30 hover:shadow-[0_0_40px_rgba(29,185,84,0.08)]"}`}>
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-[#1DB954]/4 via-transparent to-transparent pointer-events-none" />

              <div className="relative">
                <p className="text-white/50 text-sm font-medium uppercase tracking-widest mb-2" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  {p.title}
                </p>
                <div className="flex items-end gap-1">
                  <span className="text-white text-5xl font-black" style={{ fontFamily: "'Barlow', sans-serif" }}>
                    {p.price}€
                  </span>
                  {p.suffix && <span className="text-white/40 text-base mb-2">{p.suffix}</span>}
                </div>
                <div className="w-10 h-10 rounded-lg flex items-center justify-center mt-4 bg-[#1DB954]/10">
                  <p.Icon className="text-[#1DB954]" size={20} />
                </div>
              </div>

              <div className="h-px bg-gradient-to-r from-transparent via-[#1DB954]/20 to-transparent" />

              <ul className="flex flex-col gap-3 flex-1">
                {p.features.map((f, j) => (
                  <li key={j} className="flex items-start gap-3 text-sm text-white/65" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                    <Check size={14} className="text-[#1DB954] mt-0.5 shrink-0" strokeWidth={2.5} />
                    {f}
                  </li>
                ))}
              </ul>

              <Link
                to={p.link}
                className={`group relative inline-flex items-center justify-center gap-2.5 w-full py-3.5 rounded-xl font-semibold text-sm transition-all duration-200 active:scale-[0.98] overflow-hidden ${p.best ? "bg-[#1DB954] text-black border border-[#1DB954] hover:shadow-[0_0_20px_rgba(29,185,84,0.3)]" : "border border-[#1DB954]/40 text-[#1DB954] hover:bg-[#1DB954] hover:text-black hover:border-[#1DB954]"}`}
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                <span className="relative">En savoir plus</span>
                <ArrowRight size={16} className="relative transition-transform duration-200 group-hover:translate-x-1" strokeWidth={2.5} />
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
