import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import { Wrench, Check, AlertTriangle, GraduationCap, Shield, RefreshCw, HeadphonesIcon } from "lucide-react";
import { BorderBeam } from "@/components/ui/border-beam";
import { CtaSection } from "@/components/ui/cta-section";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import BlurReveal from "@/components/animations/BlurReveal";
import ScaleSection from "@/components/animations/ScaleSection";
import RotatingWords from "@/components/RotatingWords";
import { StaggerContainer, itemVariants } from "@/components/animations/StaggerContainer";
import AnimatedHeroBg from "@/components/AnimatedHeroBg";

const dangers = [
  { title: "Failles de sécurité", desc: "Un plugin non mis à jour, c'est une porte ouverte pour les hackers. Vos données et celles de vos clients sont en danger." },
  { title: "Perte de référencement", desc: "Google pénalise les sites lents et obsolètes. Sans optimisation continue, vous perdez vos positions." },
  { title: "Pannes non détectées", desc: "Votre site peut tomber à 3h du matin. Sans monitoring, vous l'apprenez quand un client se plaint." },
  { title: "Perte de données", desc: "Sans sauvegarde régulière, une erreur suffit à tout effacer. Définitivement." },
];

const gestionTotale = [
  {
    icon: Shield,
    title: "Sécurité gérée",
    desc: "Mises à jour, pare-feu, surveillance. Votre site est protégé en permanence.",
  },
  {
    icon: RefreshCw,
    title: "Zéro intervention",
    desc: "Aucune manipulation technique de votre côté. On intervient avant que vous ne voyez le moindre problème.",
  },
  {
    icon: HeadphonesIcon,
    title: "On est là",
    desc: "Une question ? Un changement ? Un email suffit. Réponse sous 24h, en français, par une vraie personne.",
  },
];

const formules = [
  { name: "Essentielle", price: "29", features: ["Mises à jour de sécurité", "Sauvegarde hebdomadaire", "Support par email", "Monitoring de base", "Rapport trimestriel"], highlighted: false, service: "maintenance-essentielle" },
  { name: "Professionnelle", price: "39", features: ["Mises à jour bi-mensuelles", "Sauvegarde quotidienne", "Support email & téléphone", "Monitoring avancé", "Rapport mensuel", "Modifications mineures illimitées"], highlighted: true, service: "maintenance-professionnelle" },
  { name: "Premium", price: "49", features: ["Mises à jour hebdomadaires", "Sauvegarde en temps réel", "Support prioritaire 7j/7", "Monitoring 24/7", "Rapport mensuel détaillé", "Toutes modifications incluses", "Optimisation SEO mensuelle"], highlighted: false, service: "maintenance-premium" },
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


function MockupMaintenance() {
  return (
    <div className="relative w-full max-w-sm mx-auto" style={{ animation: "float 6s ease-in-out infinite" }}>
      <svg viewBox="0 0 320 220" className="w-full drop-shadow-2xl">
        <rect x="0" y="0" width="320" height="220" rx="12" fill="#111811" stroke="#1a2e1a" strokeWidth="1.5"/>
        <rect x="16" y="18" width="288" height="36" rx="8" fill="#0d130d"/>
        <rect x="28" y="32" width="90" height="8" rx="4" fill="white" opacity="0.35"/>
        <rect x="130" y="30" width="160" height="12" rx="6" fill="#1a2e1a"/>
        <rect x="132" y="32" width="158" height="8" rx="4" fill="#1DB954" opacity="0.85"/>
        <text x="236" y="27" fill="#1DB954" fontSize="10" textAnchor="middle">Uptime 99.9%</text>
        <rect x="16" y="66" width="288" height="74" rx="8" fill="#0d130d" stroke="#1a2e1a"/>
        <polyline points="30,126 70,108 100,112 140,90 175,98 220,76 255,84 292,70" fill="none" stroke="#1DB954" strokeWidth="3"/>
        <rect x="16" y="150" width="90" height="52" rx="8" fill="#0d130d" stroke="#1a2e1a"/>
        <rect x="116" y="150" width="90" height="52" rx="8" fill="#0d130d" stroke="#1a2e1a"/>
        <rect x="216" y="150" width="90" height="52" rx="8" fill="#0d130d" stroke="#1a2e1a"/>
        <text x="61" y="178" fill="#1DB954" fontSize="16" textAnchor="middle">🔒</text>
        <text x="161" y="178" fill="#1DB954" fontSize="16" textAnchor="middle">⚡</text>
        <text x="261" y="178" fill="#1DB954" fontSize="16" textAnchor="middle">💾</text>
      </svg>
      <div className="absolute -top-3 -right-3 bg-[#1DB954] text-black text-xs font-bold px-3 py-1 rounded-full shadow-lg shadow-[#1DB954]/30" style={{ animation: "float 4s ease-in-out infinite 1s" }}>
        ✓ Monitoring 24/7
      </div>
    </div>
  );
}

const MaintenancePage = () => (
  <Layout>
    <section className="relative min-h-[60vh] py-24 md:py-32 flex items-center overflow-hidden">
      <AnimatedHeroBg />
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
          <MockupMaintenance />
        </BlurReveal>
      </div>
    </section>

    <section className="py-[100px]" style={{ backgroundColor: "hsl(var(--hero-bg) / 0.8)" }}>
      <div className="section-container">
        <BlurReveal className="text-center mb-14">
          <h2 className="heading-display text-2xl md:text-3xl">
            UN SITE SANS MAINTENANCE, <span style={{ color: "rgba(239,68,68,0.9)" }}>C'EST UN RISQUE PERMANENT</span>
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

    <section className="py-[100px]" style={{ backgroundColor: "hsl(var(--section-alt-bg) / 0.8)" }}>
      <div className="section-container">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
          <h2 className="heading-display text-2xl md:text-3xl">Vous ne gérez plus rien</h2>
          <p className="font-dm text-muted-foreground mt-3">On s'occupe de tout pendant que vous vous concentrez sur votre métier.</p>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }} className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {gestionTotale.map((item) => (
            <motion.div key={item.title} variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="rounded-xl p-6" style={{ backgroundColor: "#111811", border: "1px solid #1a2e1a" }}>
              <item.icon className="text-[#1DB954] mb-4" size={24} />
              <h3 className="font-dm font-bold text-white mb-2">{item.title}</h3>
              <p className="font-dm text-sm text-white/65">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>

    <section className="py-[100px]" style={{ backgroundColor: "hsl(var(--section-alt-bg) / 0.8)" }}>
      <div className="section-container">
        <BlurReveal className="text-center mb-12">
          <h2 className="heading-display text-2xl md:text-3xl"><span className="inline">NOS </span><span className="text-[#1DB954] whitespace-nowrap inline">FORMULES</span></h2>
        </BlurReveal>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex items-start gap-4 bg-[#111811] border border-[#1a2e1a] rounded-xl p-6 max-w-2xl mx-auto mb-12">
          <div className="text-[#1DB954] mt-1"><GraduationCap size={28} /></div>
          <div>
            <h3 className="text-white font-semibold text-lg mb-1">Formation offerte à la livraison</h3>
            <p className="text-white/60 text-sm leading-relaxed">
              À la livraison de votre site, on vous montre comment tout fonctionne en 30 minutes. Besoin de changer un texte, une photo ou un prix ? Vous serez autonome. Et si vous préférez qu'on s'en occupe — c'est inclus dans la maintenance.
            </p>
          </div>
        </motion.div>

        <ScaleSection>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6" staggerDelay={0.15}>
            {formules.map((f, i) => (
              <motion.div key={i} variants={itemVariants} className="relative rounded-2xl transition-all duration-300 hover:-translate-y-1.5">
                <GlowingEffect spread={40} glow proximity={64} inactiveZone={0.01} borderWidth={2} disabled={false} />
                <div className={`relative z-10 rounded-2xl p-7 flex flex-col overflow-hidden h-full ${f.highlighted ? "ring-2 ring-primary" : ""}`} style={{ backgroundColor: "hsl(var(--card-dark))", border: "1px solid hsl(var(--border-green))" }}>
                  <BorderBeam colorFrom="#1DB954" colorTo="#06B6D4" duration={f.highlighted ? 4 : 6} size={200} />
                  {f.highlighted && <span className="absolute -top-0 left-1/2 -translate-x-1/2 translate-y-0 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-b-lg">POPULAIRE</span>}
                  <h3 className="font-display font-bold text-xl mb-2 mt-4">{f.name}</h3>
                  <div className="mb-6"><span className="text-primary heading-display text-3xl">{f.price}€</span><span className="text-muted-foreground text-sm">/mois</span></div>
                  <ul className="space-y-3 flex-1 mb-8">
                    {f.features.map((feat, j) => (
                      <li key={j} className="flex items-center gap-2 text-sm text-muted-foreground"><Check className="text-primary flex-shrink-0" size={16} />{feat}</li>
                    ))}
                  </ul>
                  <Link to={`/contact?service=${f.service}`} className={f.highlighted ? "btn-primary text-center text-sm" : "btn-outline text-center text-sm"}>Choisir cette formule</Link>
                </div>
              </motion.div>
            ))}
          </StaggerContainer>
        </ScaleSection>
      </div>
    </section>

    <section className="py-[100px]" style={{ backgroundColor: "hsl(var(--hero-bg) / 0.8)" }}>
      <div className="section-container max-w-2xl mx-auto">
        <BlurReveal className="text-center mb-12">
          <h2 className="heading-display text-2xl md:text-3xl"><span className="inline">VOS QUESTIONS </span><span className="text-[#1DB954] whitespace-nowrap inline">NOS RÉPONSES</span></h2>
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
      buttonUrl="/contact?service=maintenance"
      items={["Sans engagement", "Résiliation à tout moment", "Support réactif", "Rapport de suivi"]}
    />
  </Layout>
);

export default MaintenancePage;
