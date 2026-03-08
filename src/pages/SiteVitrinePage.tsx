import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import { Globe, Check, Users, Briefcase, Store, ChefHat, Dumbbell } from "lucide-react";
import { CtaSection } from "@/components/ui/cta-section";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { BorderBeam } from "@/components/ui/border-beam";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import BlurReveal from "@/components/animations/BlurReveal";
import ScaleSection from "@/components/animations/ScaleSection";
import TextSplit from "@/components/animations/TextSplit";
import { StaggerContainer, itemVariants } from "@/components/animations/StaggerContainer";
import heroVitrine from "@/assets/hero-vitrine.jpg";

const inclus = [
  "Design moderne et personnalisé", "Jusqu'à 5 pages", "Responsive mobile & tablette", "Optimisation SEO de base",
  "Formulaire de contact", "Hébergement première année inclus", "Certificat SSL (HTTPS)", "Livraison en 14 jours ouvrés",
];

const cibles = [
  { icon: Briefcase, label: "Artisans (plombiers, électriciens, menuisiers…)" },
  { icon: Store, label: "Commerçants de proximité" },
  { icon: Users, label: "Professions libérales" },
  { icon: ChefHat, label: "Restaurants et traiteurs" },
  { icon: Dumbbell, label: "Coachs et consultants" },
];

const faqs = [
  { q: "Combien de temps pour avoir mon site ?", a: "Votre site est livré en 14 jours ouvrés après validation du contenu." },
  { q: "Dois-je fournir le contenu ?", a: "Nous pouvons rédiger le contenu pour vous. Vous n'avez qu'à valider." },
  { q: "Le site est-il modifiable ensuite ?", a: "Oui, vous pouvez demander des modifications ou souscrire à notre offre maintenance." },
  { q: "Y a-t-il des frais cachés ?", a: "Aucun. Le prix affiché est le prix final. L'hébergement est inclus la première année." },
];

const SiteVitrinePage = () => (
  <Layout>
    <section className="relative py-24 md:py-32 overflow-hidden">
      <img src={heroVitrine} alt="" className="absolute inset-0 w-full h-full object-cover opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/40" />
      <div className="section-container text-center relative z-10">
        <BlurReveal>
          <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-6"><Globe className="text-primary" size={32} /></div>
        </BlurReveal>
        <TextSplit className="heading-display text-4xl md:text-6xl mb-4" as="h1">SITE VITRINE</TextSplit>
        <BlurReveal delay={0.4}>
          <p className="text-primary heading-display text-3xl mb-4">497 €</p>
        </BlurReveal>
        <BlurReveal delay={0.5}>
          <p className="font-dm text-lg max-w-xl mx-auto text-muted-foreground">Présentez votre activité avec un site moderne qui inspire confiance et attire de nouveaux clients.</p>
        </BlurReveal>
      </div>
    </section>

    <section className="py-[100px]" style={{ backgroundColor: "hsl(var(--section-alt-bg))" }}>
      <div className="section-container">
        <BlurReveal className="text-center mb-12">
          <h2 className="heading-display text-2xl md:text-3xl">CE QUI EST <span className="text-primary">INCLUS</span></h2>
        </BlurReveal>
        <ScaleSection>
          <div className="relative max-w-2xl mx-auto rounded-2xl overflow-hidden">
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
          <h2 className="heading-display text-2xl md:text-3xl">À QUI ÇA <span className="text-primary">S'ADRESSE</span></h2>
        </BlurReveal>
        <ScaleSection>
          <StaggerContainer className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto" staggerDelay={0.1}>
            {cibles.map((c, i) => (
              <motion.div key={i} className="relative rounded-xl" variants={itemVariants}>
                <GlowingEffect spread={30} glow proximity={50} inactiveZone={0.01} borderWidth={2} disabled={false} />
                <div className="relative z-10 flex items-center gap-3 px-5 py-3 rounded-xl border border-border bg-card transition-all hover:border-primary/40">
                  <c.icon className="text-primary flex-shrink-0" size={18} /><span className="text-sm text-muted-foreground">{c.label}</span>
                </div>
              </motion.div>
            ))}
          </StaggerContainer>
        </ScaleSection>
      </div>
    </section>

    <section className="py-[100px]" style={{ backgroundColor: "hsl(var(--section-alt-bg))" }}>
      <div className="section-container text-center max-w-2xl mx-auto">
        <BlurReveal>
          <h2 className="heading-display text-2xl md:text-3xl mb-6">POURQUOI <span className="text-primary">MAINTENANT</span> ?</h2>
          <p className="font-dm text-muted-foreground text-base leading-relaxed mb-4">Chaque jour sans site web, ce sont des clients qui vont chez vos concurrents.</p>
          <p className="font-dm text-muted-foreground text-base leading-relaxed"><span className="text-primary font-semibold">80%</span> des consommateurs recherchent un professionnel en ligne avant de le contacter. Ne laissez plus cette opportunité à d'autres.</p>
        </BlurReveal>
      </div>
    </section>

    <section className="py-[100px]" style={{ backgroundColor: "hsl(var(--hero-bg))" }}>
      <div className="section-container">
        <BlurReveal className="text-center mb-12">
          <h2 className="heading-display text-2xl md:text-3xl">QUESTIONS <span className="text-primary">FRÉQUENTES</span></h2>
        </BlurReveal>
        <TracingBeam>
          <div className="space-y-8 pl-8 md:pl-12">
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
        </TracingBeam>
      </div>
    </section>

    <CtaSection title="Lancez votre site vitrine" description="14 jours, 497€, tout inclus. On s'occupe de tout." buttonText="Demander un devis gratuit" buttonUrl="/contact" />
  </Layout>
);

export default SiteVitrinePage;
