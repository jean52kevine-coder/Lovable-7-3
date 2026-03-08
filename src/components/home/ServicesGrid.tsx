import { Link } from "react-router-dom";
import { Globe, ShoppingCart, Shield, Check, ArrowRight } from "lucide-react";
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
    gradient: "from-emerald-500/10 to-transparent",
  },
  {
    icon: ShoppingCart,
    badge: "747€",
    title: "SITE E-COMMERCE",
    desc: "Vendez en ligne avec une boutique performante, sécurisée et facile à gérer.",
    bullets: ["Catalogue illimité", "Paiement Stripe/PayPal", "Dashboard admin", "Formation incluse"],
    link: "/services/site-ecommerce",
    popular: true,
    gradient: "from-primary/15 to-transparent",
  },
  {
    icon: Shield,
    badge: "dès 39€/mois",
    title: "MAINTENANCE & SEO",
    desc: "Gardez votre site rapide, sécurisé et visible sur Google en permanence.",
    bullets: ["Mises à jour", "Sauvegardes auto", "Monitoring 24/7", "Rapport mensuel"],
    link: "/services/maintenance",
    popular: false,
    gradient: "from-cyan-500/10 to-transparent",
  },
];

const ServicesGrid = () => (
  <section 
    className="py-[100px] relative"
    style={{ 
      background: "linear-gradient(180deg, #0a0f0a 0%, #0d1410 50%, #0a0f0a 100%)" 
    }}
  >
    {/* Decorative top line */}
    <div 
      className="absolute top-0 left-0 right-0 h-px"
      style={{ background: "linear-gradient(90deg, transparent, rgba(29,185,84,0.3), transparent)" }}
    />

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
              whileHover={{ y: -8, scale: 1.02, rotateX: 2, rotateY: -2 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="relative rounded-2xl transition-all duration-300 group card-shimmer"
              style={{ perspective: 800, transformStyle: "preserve-3d" }}
            >
              <GlowingEffect spread={40} glow proximity={64} inactiveZone={0.01} borderWidth={2} disabled={false} />
              <div
                className={`relative z-10 rounded-2xl p-7 bg-gradient-to-b ${c.gradient}`}
                style={{
                  backgroundColor: "rgba(17, 24, 17, 0.9)",
                  border: c.popular ? "1px solid rgba(29,185,84,0.4)" : "1px solid rgba(26,46,26,0.8)",
                  backdropFilter: "blur(10px)",
                }}
              >
                {c.popular && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute top-4 right-4 text-[11px] font-bold px-2.5 py-1 rounded-full text-primary-foreground"
                    style={{ background: "hsl(145, 63%, 42%)" }}
                  >
                    ⭐ POPULAIRE
                  </motion.span>
                )}

                <span
                  className="inline-block text-[13px] font-semibold px-3 py-1 rounded-full text-primary mb-4"
                  style={{ background: "rgba(29,185,84,0.12)" }}
                >
                  {c.badge}
                </span>

                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <c.icon className="text-primary" size={24} />
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
                  className="inline-flex items-center gap-2 text-primary text-sm font-semibold group-hover:gap-3 transition-all"
                >
                  En savoir plus 
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
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
