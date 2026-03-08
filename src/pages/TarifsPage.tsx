import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import { Globe, ShoppingCart, Check, ArrowRight } from "lucide-react";
import { BorderBeam } from "@/components/ui/border-beam";
import { CtaSection } from "@/components/ui/cta-section";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import BlurReveal from "@/components/animations/BlurReveal";
import ScaleSection from "@/components/animations/ScaleSection";
import TextSplit from "@/components/animations/TextSplit";
import { StaggerContainer, itemVariants } from "@/components/animations/StaggerContainer";

const offres = [
  {
    icon: Globe, title: "Site Vitrine", price: "497",
    features: ["Design sur-mesure", "Jusqu'à 5 pages", "Responsive mobile", "SEO optimisé", "Formulaire de contact", "Hébergement 1 an inclus", "Livraison 14 jours"],
    link: "/services/site-vitrine", popular: false,
  },
  {
    icon: ShoppingCart, title: "Site E-commerce", price: "747",
    features: ["Boutique complète", "Jusqu'à 50 produits", "Paiement sécurisé", "Gestion des stocks", "Responsive mobile", "SEO avancé", "Formation incluse"],
    link: "/services/site-ecommerce", popular: true,
  },
];

const maintenance = [
  { name: "Essentielle", price: "39", features: ["Mises à jour mensuelles", "Sauvegarde hebdo", "Support email"], highlighted: false },
  { name: "Professionnelle", price: "49", features: ["Mises à jour bi-mensuelles", "Sauvegarde quotidienne", "Support email & tél", "Modifications mineures"], highlighted: true },
  { name: "Premium", price: "59", features: ["Mises à jour hebdo", "Sauvegarde temps réel", "Support prioritaire 7j/7", "Modifications illimitées"], highlighted: false },
];

const TarifsPage = () => (
  <Layout>
    <section className="py-24 md:py-32" style={{ backgroundColor: "hsl(var(--hero-bg))" }}>
      <div className="section-container text-center">
        <TextSplit className="heading-display text-4xl md:text-6xl mb-4" as="h1">NOS TARIFS</TextSplit>
        <BlurReveal delay={0.4}>
          <p className="font-dm text-lg max-w-xl mx-auto text-muted-foreground">Des prix clairs, sans surprise. Tout est inclus.</p>
        </BlurReveal>
      </div>
    </section>

    <section className="py-[100px]" style={{ backgroundColor: "hsl(var(--section-alt-bg))" }}>
      <div className="section-container">
        <ScaleSection>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto" staggerDelay={0.2}>
            {offres.map((o, i) => (
              <motion.div key={i} variants={itemVariants} className="relative rounded-2xl transition-all duration-300 hover:-translate-y-1.5">
                <GlowingEffect spread={40} glow proximity={64} inactiveZone={0.01} borderWidth={2} disabled={false} />
                <div className="relative z-10 rounded-2xl p-8 flex flex-col overflow-hidden h-full" style={{ backgroundColor: "hsl(var(--card-dark))", border: "1px solid hsl(var(--border-green))" }}>
                  {o.popular && (
                    <>
                      <span className="absolute top-4 right-4 text-[11px] font-bold px-2.5 py-1 rounded-full bg-primary text-primary-foreground">⭐ BEST SELLER</span>
                      <BorderBeam size={250} duration={12} />
                    </>
                  )}
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4"><o.icon className="text-primary" size={24} /></div>
                  <h2 className="font-display font-bold text-2xl mb-2">{o.title}</h2>
                  <div className="mb-6"><span className="text-primary heading-display text-4xl">{o.price}€</span></div>
                  <ul className="space-y-3 flex-1 mb-8">
                    {o.features.map((f, j) => (
                      <li key={j} className="flex items-center gap-2 text-sm text-muted-foreground"><Check className="text-primary flex-shrink-0" size={16} />{f}</li>
                    ))}
                  </ul>
                  <Link to={o.link} className="btn-primary text-center text-sm">En savoir plus <ArrowRight className="ml-2 inline" size={16} /></Link>
                </div>
              </motion.div>
            ))}
          </StaggerContainer>
        </ScaleSection>
      </div>
    </section>

    <section className="py-[100px]" style={{ backgroundColor: "hsl(var(--hero-bg))" }}>
      <div className="section-container">
        <BlurReveal className="text-center mb-12">
          <h2 className="heading-display text-2xl md:text-3xl">FORMULES <span className="text-primary">MAINTENANCE</span></h2>
        </BlurReveal>
        <ScaleSection>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6" staggerDelay={0.15}>
            {maintenance.map((m, i) => (
              <motion.div key={i} variants={itemVariants} className="relative rounded-2xl transition-all duration-300 hover:-translate-y-1">
                <GlowingEffect spread={40} glow proximity={64} inactiveZone={0.01} borderWidth={2} disabled={false} />
                <div
                  className={`relative z-10 rounded-2xl p-7 text-center overflow-hidden h-full ${m.highlighted ? "ring-2 ring-primary" : ""}`}
                  style={{ backgroundColor: "hsl(var(--card-dark))", border: "1px solid hsl(var(--border-green))" }}
                >
                  {m.highlighted && <BorderBeam size={200} duration={12} />}
                  <h3 className="font-display font-bold text-xl mb-2">{m.name}</h3>
                  <div className="mb-6"><span className="text-primary heading-display text-3xl">{m.price}€</span><span className="text-muted-foreground text-sm">/mois</span></div>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {m.features.map((f, j) => (
                      <li key={j} className="flex items-center gap-2 justify-center"><Check className="text-primary flex-shrink-0" size={14} />{f}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </StaggerContainer>
        </ScaleSection>
      </div>
    </section>

    <CtaSection title="Convaincu ? Lancez-vous !" description="Devis gratuit, sans engagement. On vous répond sous 24h." buttonText="Demander un devis gratuit" buttonUrl="/contact" />
  </Layout>
);

export default TarifsPage;
