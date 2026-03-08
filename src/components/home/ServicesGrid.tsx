import { Link } from "react-router-dom";
import { Globe, ShoppingCart, Shield, Check } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import BlurReveal from "@/components/animations/BlurReveal";
import ScaleSection from "@/components/animations/ScaleSection";
import { StaggerContainer, itemVariants } from "@/components/animations/StaggerContainer";
import { motion } from "framer-motion";

const cards = [
  {
    icon: Globe,
    badge: "497€",
    title: "SITE VITRINE",
    desc: "Une présence professionnelle qui inspire confiance et génère des contacts qualifiés.",
    bullets: ["Design sur-mesure", "1 à 5 pages", "SEO optimisé", "Livraison 14j"],
    link: "/services/site-vitrine",
    popular: false,
  },
  {
    icon: ShoppingCart,
    badge: "747€",
    title: "SITE E-COMMERCE",
    desc: "Vendez en ligne avec une boutique performante, sécurisée et facile à gérer.",
    bullets: ["Catalogue illimité", "Paiement Stripe/PayPal", "Dashboard admin", "Formation incluse"],
    link: "/services/site-ecommerce",
    popular: true,
  },
  {
    icon: Shield,
    badge: "dès 39€/mois",
    title: "MAINTENANCE & SEO",
    desc: "Gardez votre site rapide, sécurisé et visible sur Google en permanence.",
    bullets: ["Mises à jour", "Sauvegardes auto", "Monitoring 24/7", "Rapport mensuel"],
    link: "/services/maintenance",
    popular: false,
  },
];

const ServicesGrid = () => (
  <section style={{ backgroundColor: "#0a0f0a" }} className="py-[100px]">
    <div className="section-container">
      <BlurReveal className="text-center mb-14">
        <h2 className="heading-display mb-4" style={{ fontSize: "clamp(28px, 4vw, 44px)" }}>
          CE QUE NOUS CRÉONS <span className="text-primary">POUR VOUS</span>
        </h2>
        <p className="font-dm text-[16px]" style={{ color: "rgba(255,255,255,0.55)" }}>
          Des solutions web complètes, adaptées à chaque budget.
        </p>
      </BlurReveal>

      <ScaleSection>
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6" staggerDelay={0.18}>
          {cards.map((c, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="relative rounded-2xl transition-all duration-300 hover:-translate-y-1.5 group"
            >
              <GlowingEffect spread={40} glow proximity={64} inactiveZone={0.01} borderWidth={2} disabled={false} />
              <div
                className="relative z-10 rounded-2xl p-7"
                style={{
                  backgroundColor: "#111811",
                  border: "1px solid #1a2e1a",
                }}
              >
                {c.popular && (
                  <span
                    className="absolute top-4 right-4 text-[11px] font-bold px-2.5 py-1 rounded-full text-primary-foreground"
                    style={{ background: "hsl(145, 63%, 42%)" }}
                  >
                    ⭐ POPULAIRE
                  </span>
                )}

                <span
                  className="inline-block text-[13px] font-semibold px-3 py-1 rounded-full text-primary mb-4"
                  style={{ background: "rgba(29,185,84,0.12)" }}
                >
                  {c.badge}
                </span>

                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <c.icon className="text-primary" size={20} />
                </div>

                <h3 className="font-display font-black text-xl text-white mb-2">{c.title}</h3>
                <p className="font-dm text-sm mb-5" style={{ color: "rgba(255,255,255,0.55)" }}>
                  {c.desc}
                </p>

                <ul className="space-y-2 mb-6">
                  {c.bullets.map((b, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Check className="text-primary flex-shrink-0" size={14} />
                      {b}
                    </li>
                  ))}
                </ul>

                <Link
                  to={c.link}
                  className="text-primary text-sm font-semibold hover:underline"
                >
                  En savoir plus →
                </Link>
              </div>
            </motion.div>
          ))}
        </StaggerContainer>
      </ScaleSection>
    </div>
  </section>
);

export default ServicesGrid;
