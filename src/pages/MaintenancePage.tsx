import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import { Wrench, Check, AlertTriangle } from "lucide-react";
import { BorderBeam } from "@/components/ui/border-beam";
import { MaintenanceHeroIllustration } from "@/components/illustrations/SvgIllustrations";
import { CtaSection } from "@/components/ui/cta-section";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import BlurReveal from "@/components/animations/BlurReveal";
import ScaleSection from "@/components/animations/ScaleSection";
import RotatingWords from "@/components/RotatingWords";
import { StaggerContainer, itemVariants } from "@/components/animations/StaggerContainer";
import heroMaintenanceVideo from "@/assets/videos/hero-maintenance.mp4";

const dangers = [
  { title: "Failles de sécurité", desc: "Un plugin non mis à jour, c'est une porte ouverte pour les hackers. Vos données et celles de vos clients sont en danger." },
  { title: "Perte de référencement", desc: "Google pénalise les sites lents et obsolètes. Sans optimisation continue, vous perdez vos positions." },
  { title: "Pannes non détectées", desc: "Votre site peut tomber à 3h du matin. Sans monitoring, vous l'apprenez quand un client se plaint." },
  { title: "Perte de données", desc: "Sans sauvegarde régulière, une erreur suffit à tout effacer. Définitivement." },
];

const formules = [
  { name: "Essentielle", price: "39", features: ["Mises à jour mensuelles", "Sauvegarde hebdomadaire", "Support par email", "Monitoring de base", "Rapport trimestriel"], highlighted: false },
  { name: "Professionnelle", price: "49", features: ["Mises à jour bi-mensuelles", "Sauvegarde quotidienne", "Support email & téléphone", "Monitoring avancé", "Rapport mensuel", "Modifications mineures incluses"], highlighted: true },
  { name: "Premium", price: "59", features: ["Mises à jour hebdomadaires", "Sauvegarde en temps réel", "Support prioritaire 7j/7", "Monitoring 24/7", "Rapport mensuel détaillé", "Modifications illimitées", "Optimisation performance"], highlighted: false },
];

const faqs = [
  { q: "Puis-je résilier à tout moment ?", a: "Oui, sans engagement ni frais. Préavis de 30 jours." },
  { q: "Mon site n'est pas fait par ALTÉRA, puis-je souscrire ?", a: "Oui. On effectue d'abord un audit gratuit de votre site, puis on prend en charge la maintenance." },
  { q: "Que sont exactement les 'modifications' incluses ?", a: "Changements de textes, d'images, ajout d'une section, mise à jour de prix ou d'horaires." },
  { q: "Que se passe-t-il si mon site tombe ?", a: "Selon votre formule, on intervient sous 4h à 48h. Vous êtes alerté immédiatement par email." },
  { q: "Puis-je changer de formule en cours de route ?", a: "Oui, à tout moment. Upgrade ou downgrade effectif le mois suivant, sans frais." },
];

const FAQItem = ({ faq, index }: { faq: { q: string; a: string }; index: number }) => {
  const [open, setOpen] = useState(false);
  return (
    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.4, delay: index * 0.1 }}>
      <div className="relative rounded-xl">
        <GlowingEffect spread={30} glow proximity={50} inactiveZone={0.01} borderWidth={2} disabled={false} />
        <button onClick={() => setOpen(!open)} className="relative z-10 w-full text-left rounded-xl p-5 flex items-center justify-between" style={{ backgroundColor: "hsl(var(--card-dark))", border: "1px solid hsl(var(--border-green))" }}>
          <h3 className="font-display font-bold text-foreground pr-4">{faq.q}</h3>
          <motion.span animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.3 }} className="text-primary flex-shrink-0">▼</motion.span>
        </button>
      </div>
      <motion.div initial={false} animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
        <p className="text-muted-foreground text-sm px-5 pt-3 pb-1">{faq.a}</p>
      </motion.div>
    </motion.div>
  );
};

const MaintenancePage = () => (
  <Layout>
    {/* Hero */}
    <section className="relative py-24 md:py-32 overflow-hidden">
      <img src={heroMaintenance} alt="" className="absolute inset-0 w-full h-full object-cover opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/40" />
      <div className="section-container flex flex-col lg:flex-row items-center gap-10 relative z-10">
        <div className="text-center lg:text-left flex-1">
          <BlurReveal>
            <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mx-auto lg:mx-0 mb-6"><Wrench className="text-primary" size={32} /></div>
          </BlurReveal>
          <BlurReveal delay={0.1}>
            <h1 className="heading-display text-4xl md:text-6xl mb-4">
              MAINTENANCE <RotatingWords words={["WEB", "CONTINUE", "PROACTIVE", "COMPLÈTE"]} />
            </h1>
          </BlurReveal>
          <BlurReveal delay={0.3}>
            <p className="font-dm text-lg max-w-xl mx-auto lg:mx-0 text-muted-foreground">Gardez votre site à jour, sécurisé et performant. On s'en occupe pour vous.</p>
          </BlurReveal>
        </div>
        <BlurReveal delay={0.3} className="hidden md:block flex-1">
          <MaintenanceHeroIllustration />
        </BlurReveal>
      </div>
    </section>

    {/* Dangers */}
    <section className="py-[100px]" style={{ backgroundColor: "hsl(var(--hero-bg) / 0.8)" }}>
      <div className="section-container">
        <BlurReveal className="text-center mb-14">
          <h2 className="heading-display text-2xl md:text-3xl">
            UN SITE SANS MAINTENANCE,{" "}
            <span style={{ color: "rgba(239,68,68,0.9)" }}>C'EST UN RISQUE PERMANENT</span>
          </h2>
        </BlurReveal>
        <ScaleSection>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto" staggerDelay={0.1}>
            {dangers.map((d, i) => (
              <motion.div key={i} variants={itemVariants} className="relative rounded-xl">
                <GlowingEffect spread={30} glow proximity={50} inactiveZone={0.01} borderWidth={2} variant="white" disabled={false} />
                <div className="relative z-10 rounded-xl p-6 h-full" style={{ backgroundColor: "rgba(239,68,68,0.04)", border: "1px solid rgba(239,68,68,0.15)" }}>
                  <AlertTriangle className="mb-3" size={24} style={{ color: "rgba(239,68,68,0.8)" }} />
                  <h3 className="font-display font-black text-white mb-2">{d.title}</h3>
                  <p className="font-dm text-sm" style={{ color: "rgba(255,255,255,0.6)" }}>{d.desc}</p>
                </div>
              </motion.div>
            ))}
          </StaggerContainer>
        </ScaleSection>
      </div>
    </section>

    {/* Formules */}
    <section className="py-[100px]" style={{ backgroundColor: "hsl(var(--section-alt-bg) / 0.8)" }}>
      <div className="section-container">
        <BlurReveal className="text-center mb-12">
          <h2 className="heading-display text-2xl md:text-3xl">NOS <span className="text-primary">FORMULES</span></h2>
        </BlurReveal>
        <ScaleSection>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6" staggerDelay={0.15}>
            {formules.map((f, i) => (
              <motion.div key={i} variants={itemVariants} className="relative rounded-2xl transition-all duration-300 hover:-translate-y-1.5">
                <GlowingEffect spread={40} glow proximity={64} inactiveZone={0.01} borderWidth={2} disabled={false} />
                <div className={`relative z-10 rounded-2xl p-7 flex flex-col overflow-hidden h-full ${f.highlighted ? "ring-2 ring-primary" : ""}`} style={{ backgroundColor: "hsl(var(--card-dark))", border: "1px solid hsl(var(--border-green))" }}>
                  <BorderBeam colorFrom="#1DB954" colorTo="#06B6D4" duration={f.highlighted ? 4 : 6} size={200} />
                  {f.highlighted && <span className="absolute -top-0 left-1/2 -translate-x-1/2 translate-y-0 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-b-lg">Populaire</span>}
                  <h3 className="font-display font-bold text-xl mb-2 mt-4">{f.name}</h3>
                  <div className="mb-6"><span className="text-primary heading-display text-3xl">{f.price}€</span><span className="text-muted-foreground text-sm">/mois</span></div>
                  <ul className="space-y-3 flex-1 mb-8">
                    {f.features.map((feat, j) => (
                      <li key={j} className="flex items-center gap-2 text-sm text-muted-foreground"><Check className="text-primary flex-shrink-0" size={16} />{feat}</li>
                    ))}
                  </ul>
                  <Link to="/contact" className={f.highlighted ? "btn-primary text-center text-sm" : "btn-outline text-center text-sm"}>Choisir cette formule</Link>
                </div>
              </motion.div>
            ))}
          </StaggerContainer>
        </ScaleSection>
      </div>
    </section>

    {/* FAQ */}
    <section className="py-[100px]" style={{ backgroundColor: "hsl(var(--hero-bg) / 0.8)" }}>
      <div className="section-container max-w-2xl mx-auto">
        <BlurReveal className="text-center mb-12">
          <h2 className="heading-display text-2xl md:text-3xl">VOS QUESTIONS <span className="text-primary">NOS RÉPONSES</span></h2>
        </BlurReveal>
        <div className="space-y-4">
          {faqs.map((faq, i) => <FAQItem key={i} faq={faq} index={i} />)}
        </div>
      </div>
    </section>

    <CtaSection
      title="Une question sur nos formules ?"
      description="On vous aide à choisir la formule adaptée à vos besoins."
      buttonText="Nous contacter"
      buttonUrl="/contact"
      items={["Sans engagement", "Résiliation à tout moment", "Support réactif", "Rapport de suivi"]}
    />
  </Layout>
);

export default MaintenancePage;
