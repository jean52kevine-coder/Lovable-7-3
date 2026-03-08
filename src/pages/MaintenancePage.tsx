import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Layout from "@/components/Layout";
import { Check, ChevronDown, ArrowRight, ShieldAlert, TrendingDown, AlertTriangle, DatabaseZap, Lock, HardDrive, Activity, RefreshCw, BarChart3, FileText } from "lucide-react";
import BlurReveal from "@/components/animations/BlurReveal";
import ScaleSection from "@/components/animations/ScaleSection";
import TextSplit from "@/components/animations/TextSplit";
import { StaggerContainer, itemVariants } from "@/components/animations/StaggerContainer";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { BorderBeam } from "@/components/ui/border-beam";
import PageBackground, { FloatingOrb, GradientDivider } from "@/components/PageBackground";

/* ─── DATA ─── */
const dangers = [
  { icon: ShieldAlert, title: "Failles de sécurité", desc: "Un site non mis à jour est une cible facile pour les hackers. Les données de vos clients sont en danger." },
  { icon: TrendingDown, title: "Chute du référencement", desc: "Google pénalise les sites lents et obsolètes. Votre position sur Google se dégrade sans optimisation continue." },
  { icon: AlertTriangle, title: "Pannes non détectées", desc: "Votre site peut tomber à 3h du matin. Sans monitoring, vous l'apprenez quand un client se plaint." },
  { icon: DatabaseZap, title: "Perte de données", desc: "Sans sauvegarde régulière, une erreur peut effacer votre site entier. Définitivement." },
];

const formules = [
  { name: "Essentielle", price: "39", subtitle: "Pour les sites vitrines avec peu de changements", features: ["Mises à jour CMS & plugins mensuelles", "Sauvegarde hebdomadaire", "Monitoring de disponibilité", "Rapport trimestriel", "Support par email (72h)", "1 modification mineure/mois"], highlighted: false },
  { name: "Professionnelle", price: "49", subtitle: "Pour les sites actifs avec du contenu régulier", features: ["Tout de l'Essentielle +", "Mises à jour bi-mensuelles", "Sauvegarde quotidienne", "Support email & téléphone (24h)", "Optimisation SEO mensuelle", "Rapport mensuel détaillé", "3 modifications/mois"], highlighted: true },
  { name: "Premium", price: "59", subtitle: "Pour les e-commerces et sites à fort trafic", features: ["Tout de la Professionnelle +", "Mises à jour hebdomadaires", "Sauvegarde en temps réel", "Support prioritaire 7j/7 (4h)", "Optimisation SEO continue", "Modifications illimitées", "Rapport mensuel + appel bilan"], highlighted: false },
];

const compFeatures = [
  { name: "Fréquence mises à jour", ess: "Mensuelle", pro: "Bi-mensuelle", prem: "Hebdomadaire" },
  { name: "Sauvegardes", ess: "Hebdomadaire", pro: "Quotidienne", prem: "Temps réel" },
  { name: "Monitoring", ess: "Disponibilité", pro: "Avancé", prem: "24/7" },
  { name: "Support", ess: "Email", pro: "Email & Tél", prem: "Prioritaire 7j/7" },
  { name: "Délai réponse", ess: "72h", pro: "24h", prem: "4h" },
  { name: "SEO", ess: false, pro: "Mensuel", prem: "Continu" },
  { name: "Modifications", ess: "1/mois", pro: "3/mois", prem: "Illimitées" },
  { name: "Rapport", ess: "Trimestriel", pro: "Mensuel", prem: "Mensuel détaillé" },
  { name: "Appel bilan mensuel", ess: false, pro: false, prem: true },
  { name: "Intervention urgence", ess: false, pro: true, prem: true },
];

const surveillance = [
  { icon: Lock, title: "Sécurité & pare-feu", desc: "Protection contre les attaques, malwares et intrusions. Votre site est blindé." },
  { icon: HardDrive, title: "Sauvegardes automatiques", desc: "Vos données sauvegardées régulièrement. Restauration en 1 clic si besoin." },
  { icon: Activity, title: "Monitoring 24/7", desc: "On est alertés avant vous si votre site ralentit ou tombe. Intervention immédiate." },
  { icon: RefreshCw, title: "Mises à jour", desc: "CMS, plugins, thèmes — tout est maintenu à jour pour la sécurité et la performance." },
  { icon: BarChart3, title: "Optimisation SEO", desc: "Amélioration continue de votre positionnement Google. Votre trafic augmente mois après mois." },
  { icon: FileText, title: "Rapports clairs", desc: "Un rapport lisible chaque mois : trafic, performances, actions réalisées, résultats." },
];

const faqs = [
  { q: "Puis-je résilier à tout moment ?", a: "Oui, sans engagement ni frais. Préavis de 30 jours." },
  { q: "Mon site n'est pas fait par ALTÉRA, puis-je souscrire ?", a: "Oui. On réalise d'abord un audit gratuit de votre site, puis on prend en charge la maintenance." },
  { q: "Que sont exactement les 'modifications' incluses ?", a: "Changements de textes, d'images, ajout d'une section simple, mise à jour de prix ou d'horaires." },
  { q: "Que se passe-t-il si mon site tombe ?", a: "Selon votre formule, on intervient sous 4h à 24h. Vous êtes alerté immédiatement." },
  { q: "Puis-je changer de formule en cours de route ?", a: "Oui, à tout moment. Upgrade ou downgrade sans frais, effectif le mois suivant." },
];

const FaqItem = ({ q, a, index }: { q: string; a: string; index: number }) => {
  const [open, setOpen] = useState(false);
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }} className="rounded-xl overflow-hidden" style={{ backgroundColor: "#111811", border: "1px solid #1a2e1a" }}>
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between p-4 md:p-5 text-left gap-3">
        <span className="font-display font-bold text-foreground text-xs md:text-base">{q}</span>
        <motion.div animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.25 }}><ChevronDown className="text-primary flex-shrink-0" size={18} /></motion.div>
      </button>
      <AnimatePresence initial={false}>
        {open && (<motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden"><p className="px-4 md:px-5 pb-4 md:pb-5 text-muted-foreground text-xs md:text-sm">{a}</p></motion.div>)}
      </AnimatePresence>
    </motion.div>
  );
};

const CompCell = ({ val }: { val: string | boolean }) => {
  if (val === true) return <Check className="text-primary mx-auto" size={14} />;
  if (val === false) return <span className="text-muted-foreground">—</span>;
  return <span className="text-foreground text-[10px] md:text-xs">{val}</span>;
};

const MaintenancePage = () => (
  <Layout>
    {/* Background — diagonal cyan */}
    <PageBackground pattern="diagonal" color="rgba(6,182,212,0.06)" />

    {/* HERO */}
    <section className="relative py-20 md:py-36 overflow-hidden">
      <FloatingOrb color="rgba(6,182,212,0.06)" size={500} x="10%" y="20%" />
      <FloatingOrb color="rgba(29,185,84,0.04)" size={350} x="80%" y="60%" delay={5} />
      <div className="section-container text-center relative z-10">
        <BlurReveal>
          <span className="inline-block text-xs md:text-sm font-semibold px-3 md:px-4 py-1.5 md:py-2 rounded-full mb-4 md:mb-6" style={{ backgroundColor: "rgba(29,185,84,0.12)", color: "hsl(var(--primary))" }}>
            🛡️ Protection & performance continues
          </span>
        </BlurReveal>
        <TextSplit className="heading-display text-foreground mb-2" style={{ fontSize: "clamp(36px,6vw,80px)" }} as="h1">MAINTENANCE</TextSplit>
        <BlurReveal delay={0.3}><span className="heading-display text-primary block" style={{ fontSize: "clamp(36px,6vw,80px)" }}>& SEO</span></BlurReveal>
        <BlurReveal delay={0.45}>
          <p className="font-dm text-sm md:text-lg max-w-2xl mx-auto mt-4 md:mt-6 text-muted-foreground px-2">
            Gardez votre site rapide, sécurisé et visible sur Google — sans lever le petit doigt.
          </p>
        </BlurReveal>
        <BlurReveal delay={0.6}>
          <a href="#formules" className="btn-primary text-sm md:text-base mt-8 md:mt-10 inline-flex">Choisir mon forfait <ArrowRight className="ml-2" size={16} /></a>
        </BlurReveal>
      </div>
    </section>

    <GradientDivider color="rgba(6,182,212,0.2)" />

    {/* DANGERS */}
    <section className="relative py-16 md:py-[100px]">
      <div className="section-container relative z-10">
        <BlurReveal className="text-center mb-8 md:mb-12">
          <h2 className="heading-display text-xl md:text-4xl">UN SITE SANS MAINTENANCE,<br /><span className="text-primary">C'EST UN RISQUE PERMANENT</span></h2>
        </BlurReveal>
        <ScaleSection>
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 max-w-4xl mx-auto" staggerDelay={0.12}>
            {dangers.map((d, i) => (
              <motion.div key={i} variants={itemVariants} whileHover={{ y: -4 }} className="rounded-xl p-4 md:p-6" style={{ backgroundColor: "rgba(239,68,68,0.05)", border: "1px solid rgba(239,68,68,0.2)" }}>
                <d.icon className="text-destructive mb-2 md:mb-3" size={22} />
                <h4 className="font-display font-bold text-foreground text-sm md:text-base mb-1 md:mb-2">⚠️ {d.title}</h4>
                <p className="font-dm text-xs md:text-sm text-muted-foreground">{d.desc}</p>
              </motion.div>
            ))}
          </StaggerContainer>
        </ScaleSection>
      </div>
    </section>

    <GradientDivider color="rgba(6,182,212,0.2)" />

    {/* FORMULES */}
    <section id="formules" className="relative py-16 md:py-[100px]">
      <div className="section-container relative z-10">
        <BlurReveal className="text-center mb-8 md:mb-12">
          <h2 className="heading-display text-xl md:text-4xl">CHOISISSEZ VOTRE NIVEAU <span className="text-primary">DE PROTECTION</span></h2>
        </BlurReveal>
        <ScaleSection>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto items-stretch" staggerDelay={0.15}>
            {formules.map((f, i) => (
              <motion.div key={i} variants={itemVariants} whileHover={{ y: -6 }} className={`relative rounded-2xl card-shimmer ${f.highlighted ? "md:-mt-4 md:mb-4 animate-pulse-glow" : ""}`}>
                <GlowingEffect spread={30} glow proximity={50} inactiveZone={0.01} borderWidth={2} disabled={false} />
                <div className="relative z-10 rounded-2xl p-5 md:p-7 flex flex-col h-full overflow-hidden" style={{ backgroundColor: f.highlighted ? "#0d1f13" : "#111811", border: f.highlighted ? "1px solid hsl(145, 63%, 42%)" : "1px solid #1a2e1a" }}>
                  {f.highlighted && (<><span className="absolute -top-3 left-1/2 -translate-x-1/2 text-[10px] md:text-[11px] font-bold px-3 py-1 rounded-full text-primary-foreground bg-primary">⭐ RECOMMANDÉE</span><BorderBeam size={200} duration={12} /></>)}
                  <h3 className="font-display font-bold text-lg md:text-xl mb-1 mt-2">{f.name}</h3>
                  <p className="font-dm text-[10px] md:text-xs text-muted-foreground mb-3 md:mb-4">{f.subtitle}</p>
                  <div className="mb-4 md:mb-5"><span className="text-primary heading-display text-2xl md:text-3xl">{f.price}€</span><span className="text-muted-foreground text-xs md:text-sm">/mois</span></div>
                  <ul className="space-y-1.5 md:space-y-2 flex-1 mb-4 md:mb-6">
                    {f.features.map((feat, j) => (<li key={j} className="flex items-center gap-2 text-xs md:text-sm text-muted-foreground"><Check className="text-primary flex-shrink-0" size={12} />{feat}</li>))}
                  </ul>
                  <Link to="/contact" className={f.highlighted ? "btn-primary text-center text-xs md:text-sm" : "btn-outline text-center text-xs md:text-sm"}>Choisir {f.name}</Link>
                </div>
              </motion.div>
            ))}
          </StaggerContainer>
        </ScaleSection>
        <BlurReveal className="text-center mt-8 md:mt-10" delay={0.4}>
          <p className="font-dm text-xs md:text-sm text-muted-foreground">Vous ne savez pas quoi choisir ? <Link to="/contact" className="text-primary font-semibold hover:underline">Appelez-nous, on vous conseille gratuitement.</Link></p>
        </BlurReveal>
      </div>
    </section>

    <GradientDivider color="rgba(6,182,212,0.2)" />

    {/* TABLEAU */}
    <section className="relative py-16 md:py-[100px]">
      <div className="section-container relative z-10">
        <BlurReveal className="text-center mb-8 md:mb-12">
          <h2 className="heading-display text-xl md:text-4xl">COMPARATIF DÉTAILLÉ <span className="text-primary">DES FORMULES</span></h2>
        </BlurReveal>
        <ScaleSection>
          <div className="rounded-2xl overflow-x-auto max-w-4xl mx-auto" style={{ border: "1px solid #1a2e1a" }}>
            <table className="w-full text-[10px] md:text-sm">
              <thead><tr style={{ backgroundColor: "#0d130d" }}>
                <th className="text-left p-2 md:p-4 font-display font-bold text-muted-foreground">Fonctionnalité</th>
                <th className="text-center p-2 md:p-4 font-display font-bold text-foreground">Essentielle</th>
                <th className="text-center p-2 md:p-4 font-display font-bold text-primary">Pro</th>
                <th className="text-center p-2 md:p-4 font-display font-bold text-foreground">Premium</th>
              </tr></thead>
              <tbody>{compFeatures.map((f, i) => (
                <tr key={i} style={{ backgroundColor: "#111811", borderTop: "1px solid #1a2e1a" }}>
                  <td className="p-2 md:p-4 text-muted-foreground">{f.name}</td>
                  <td className="p-2 md:p-4 text-center"><CompCell val={f.ess} /></td>
                  <td className="p-2 md:p-4 text-center"><CompCell val={f.pro} /></td>
                  <td className="p-2 md:p-4 text-center"><CompCell val={f.prem} /></td>
                </tr>
              ))}</tbody>
            </table>
          </div>
        </ScaleSection>
      </div>
    </section>

    <GradientDivider color="rgba(6,182,212,0.2)" />

    {/* SURVEILLANCE */}
    <section className="relative py-16 md:py-[100px]">
      <div className="section-container relative z-10">
        <BlurReveal className="text-center mb-8 md:mb-12">
          <h2 className="heading-display text-xl md:text-4xl">CE QU'ON GÈRE PENDANT <span className="text-primary">QUE VOUS TRAVAILLEZ</span></h2>
        </BlurReveal>
        <ScaleSection>
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto" staggerDelay={0.1}>
            {surveillance.map((s, i) => (
              <motion.div key={i} variants={itemVariants} whileHover={{ y: -4 }} className="relative rounded-xl card-shimmer">
                <GlowingEffect spread={25} glow proximity={40} inactiveZone={0.01} borderWidth={2} disabled={false} />
                <div className="relative z-10 rounded-xl p-4 md:p-6" style={{ backgroundColor: "#111811", border: "1px solid #1a2e1a" }}>
                  <s.icon className="text-primary mb-2 md:mb-3" size={22} />
                  <h4 className="font-display font-bold text-foreground text-sm md:text-base mb-1 md:mb-2">{s.title}</h4>
                  <p className="font-dm text-xs md:text-sm text-muted-foreground">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </StaggerContainer>
        </ScaleSection>
      </div>
    </section>

    <GradientDivider color="rgba(6,182,212,0.2)" />

    {/* FAQ */}
    <section className="relative py-16 md:py-[100px]">
      <div className="section-container max-w-3xl mx-auto relative z-10">
        <BlurReveal className="text-center mb-8 md:mb-12">
          <h2 className="heading-display text-xl md:text-4xl">VOS QUESTIONS,<br /><span className="text-primary">NOS RÉPONSES</span></h2>
        </BlurReveal>
        <div className="space-y-2 md:space-y-3">{faqs.map((faq, i) => (<FaqItem key={i} q={faq.q} a={faq.a} index={i} />))}</div>
      </div>
    </section>

    {/* CTA */}
    <section className="relative py-20 md:py-[120px] px-4 md:px-6 overflow-hidden" style={{ background: "linear-gradient(160deg, #081419 0%, #0a0f0a 60%)", borderTop: "1px solid rgba(6,182,212,0.2)" }}>
      <FloatingOrb color="rgba(6,182,212,0.06)" size={400} x="50%" y="30%" />
      <div className="section-container text-center relative z-10">
        <BlurReveal><h2 className="heading-display mb-4 md:mb-6" style={{ fontSize: "clamp(28px, 4vw, 56px)" }}>PROTÉGEZ VOTRE SITE <span className="text-primary">DÈS AUJOURD'HUI</span></h2></BlurReveal>
        <BlurReveal delay={0.15}><p className="font-dm text-sm md:text-lg mb-8 md:mb-10 mx-auto max-w-lg" style={{ color: "rgba(255,255,255,0.6)" }}>Choisissez votre forfait et dormez sur vos deux oreilles.</p></BlurReveal>
        <BlurReveal delay={0.3}><Link to="/contact" className="btn-primary text-sm md:text-lg px-8 md:px-10 py-3 md:py-[18px]">Choisir mon forfait <ArrowRight className="ml-2 inline" size={18} /></Link></BlurReveal>
        <BlurReveal delay={0.45}>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 mt-6 md:mt-8 font-dm text-[11px] md:text-[13px]" style={{ color: "rgba(255,255,255,0.4)" }}>
            <span>✓ Sans engagement</span><span>✓ Résiliation à tout moment</span><span>✓ Audit gratuit inclus</span>
          </div>
        </BlurReveal>
      </div>
    </section>
  </Layout>
);

export default MaintenancePage;
