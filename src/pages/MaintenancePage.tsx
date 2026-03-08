import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Layout from "@/components/Layout";
import { Check, ChevronDown, ArrowRight, ShieldAlert, TrendingDown, AlertTriangle, DatabaseZap, Lock, HardDrive, Activity, RefreshCw, BarChart3, FileText } from "lucide-react";
import BlurReveal from "@/components/animations/BlurReveal";
import ScaleSection from "@/components/animations/ScaleSection";
import TextSplit from "@/components/animations/TextSplit";
import { StaggerContainer, itemVariants } from "@/components/animations/StaggerContainer";

/* ─── DATA ─── */
const dangers = [
  { icon: ShieldAlert, title: "Failles de sécurité", desc: "Un site non mis à jour est une cible facile pour les hackers. Les données de vos clients sont en danger." },
  { icon: TrendingDown, title: "Chute du référencement", desc: "Google pénalise les sites lents et obsolètes. Votre position sur Google se dégrade sans optimisation continue." },
  { icon: AlertTriangle, title: "Pannes non détectées", desc: "Votre site peut tomber à 3h du matin. Sans monitoring, vous l'apprenez quand un client se plaint." },
  { icon: DatabaseZap, title: "Perte de données", desc: "Sans sauvegarde régulière, une erreur peut effacer votre site entier. Définitivement." },
];

const formules = [
  {
    name: "Essentielle", price: "39", subtitle: "Pour les sites vitrines avec peu de changements",
    features: ["Mises à jour CMS & plugins mensuelles", "Sauvegarde hebdomadaire", "Monitoring de disponibilité", "Rapport trimestriel", "Support par email (72h)", "1 modification mineure/mois"],
    highlighted: false,
  },
  {
    name: "Professionnelle", price: "49", subtitle: "Pour les sites actifs avec du contenu régulier",
    features: ["Tout de l'Essentielle +", "Mises à jour bi-mensuelles", "Sauvegarde quotidienne", "Support email & téléphone (24h)", "Optimisation SEO mensuelle", "Rapport mensuel détaillé", "3 modifications/mois"],
    highlighted: true,
  },
  {
    name: "Premium", price: "59", subtitle: "Pour les e-commerces et sites à fort trafic",
    features: ["Tout de la Professionnelle +", "Mises à jour hebdomadaires", "Sauvegarde en temps réel", "Support prioritaire 7j/7 (4h)", "Optimisation SEO continue", "Modifications illimitées", "Rapport mensuel + appel bilan"],
    highlighted: false,
  },
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

/* ─── CompCell ─── */
const CompCell = ({ val }: { val: string | boolean }) => {
  if (val === true) return <Check className="text-primary mx-auto" size={16} />;
  if (val === false) return <span className="text-muted-foreground">—</span>;
  return <span className="text-foreground text-xs">{val}</span>;
};

/* ─── PAGE ─── */
const MaintenancePage = () => (
  <Layout>
    {/* HERO */}
    <section className="relative py-28 md:py-36 overflow-hidden" style={{ backgroundColor: "#0a0f0a" }}>
      <div className="absolute inset-0 opacity-25" style={{ backgroundImage: "radial-gradient(circle, #1DB954 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
      <div className="section-container text-center relative z-10">
        <BlurReveal>
          <span className="inline-block text-sm font-semibold px-4 py-2 rounded-full mb-6" style={{ backgroundColor: "rgba(29,185,84,0.12)", color: "hsl(var(--primary))" }}>
            🛡️ Protection & performance continues
          </span>
        </BlurReveal>
        <TextSplit className="heading-display text-foreground mb-2" style={{ fontSize: "clamp(48px,6vw,80px)" }} as="h1">
          MAINTENANCE
        </TextSplit>
        <BlurReveal delay={0.3}>
          <span className="heading-display text-primary" style={{ fontSize: "clamp(48px,6vw,80px)" }}>& SEO</span>
        </BlurReveal>
        <BlurReveal delay={0.45}>
          <p className="font-dm text-lg max-w-2xl mx-auto mt-6 text-muted-foreground">
            Gardez votre site rapide, sécurisé et visible sur Google — sans lever le petit doigt.
          </p>
        </BlurReveal>
        <BlurReveal delay={0.6}>
          <Link to="#formules" className="btn-primary text-base mt-10 inline-flex">
            Choisir mon forfait <ArrowRight className="ml-2" size={16} />
          </Link>
        </BlurReveal>
      </div>
    </section>

    {/* DANGERS */}
    <section className="py-[100px]" style={{ backgroundColor: "#0d130d" }}>
      <div className="section-container">
        <BlurReveal className="text-center mb-12">
          <h2 className="heading-display text-2xl md:text-4xl">
            UN SITE SANS MAINTENANCE,<br /><span className="text-primary">C'EST UN RISQUE PERMANENT</span>
          </h2>
        </BlurReveal>
        <ScaleSection>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto" staggerDelay={0.12}>
            {dangers.map((d, i) => (
              <motion.div key={i} variants={itemVariants} className="rounded-xl p-6" style={{ backgroundColor: "rgba(239,68,68,0.05)", border: "1px solid rgba(239,68,68,0.2)" }}>
                <d.icon className="text-destructive mb-3" size={24} />
                <h4 className="font-display font-bold text-foreground mb-2">⚠️ {d.title}</h4>
                <p className="font-dm text-sm text-muted-foreground">{d.desc}</p>
              </motion.div>
            ))}
          </StaggerContainer>
        </ScaleSection>
      </div>
    </section>

    {/* LES 3 FORMULES */}
    <section id="formules" className="py-[100px]" style={{ backgroundColor: "#0a0f0a" }}>
      <div className="section-container">
        <BlurReveal className="text-center mb-12">
          <h2 className="heading-display text-2xl md:text-4xl">
            CHOISISSEZ VOTRE NIVEAU <span className="text-primary">DE PROTECTION</span>
          </h2>
        </BlurReveal>
        <ScaleSection>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto items-stretch" staggerDelay={0.15}>
            {formules.map((f, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className={`relative rounded-2xl transition-all duration-300 hover:-translate-y-1 card-shimmer ${f.highlighted ? "md:-mt-4 md:mb-4 animate-pulse-glow" : ""}`}
              >
                <div
                  className="relative z-10 rounded-2xl p-7 flex flex-col h-full"
                  style={{
                    backgroundColor: f.highlighted ? "#0d1f13" : "#111811",
                    border: f.highlighted ? "1px solid hsl(145, 63%, 42%)" : "1px solid #1a2e1a",
                  }}
                >
                  {f.highlighted && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-[11px] font-bold px-3 py-1 rounded-full text-primary-foreground bg-primary">
                      ⭐ RECOMMANDÉE
                    </span>
                  )}
                  <h3 className="font-display font-bold text-xl mb-1 mt-2">{f.name}</h3>
                  <p className="font-dm text-xs text-muted-foreground mb-4">{f.subtitle}</p>
                  <div className="mb-5">
                    <span className="text-primary heading-display text-3xl">{f.price}€</span>
                    <span className="text-muted-foreground text-sm">/mois</span>
                  </div>
                  <ul className="space-y-2 flex-1 mb-6">
                    {f.features.map((feat, j) => (
                      <li key={j} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Check className="text-primary flex-shrink-0" size={14} />{feat}
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact" className={f.highlighted ? "btn-primary text-center text-sm" : "btn-outline text-center text-sm"}>
                    Choisir {f.name}
                  </Link>
                </div>
              </motion.div>
            ))}
          </StaggerContainer>
        </ScaleSection>
        <BlurReveal className="text-center mt-10" delay={0.4}>
          <p className="font-dm text-sm text-muted-foreground">
            Vous ne savez pas quoi choisir ?{" "}
            <Link to="/contact" className="text-primary font-semibold hover:underline">Appelez-nous, on vous conseille gratuitement.</Link>
          </p>
        </BlurReveal>
      </div>
    </section>

    {/* TABLEAU COMPARATIF */}
    <section className="py-[100px]" style={{ backgroundColor: "#0d130d" }}>
      <div className="section-container">
        <BlurReveal className="text-center mb-12">
          <h2 className="heading-display text-2xl md:text-4xl">
            COMPARATIF DÉTAILLÉ <span className="text-primary">DES FORMULES</span>
          </h2>
        </BlurReveal>
        <ScaleSection>
          <div className="rounded-2xl overflow-x-auto max-w-4xl mx-auto" style={{ border: "1px solid #1a2e1a" }}>
            <table className="w-full text-sm">
              <thead>
                <tr style={{ backgroundColor: "#0d130d" }}>
                  <th className="text-left p-4 font-display font-bold text-muted-foreground">Fonctionnalité</th>
                  <th className="text-center p-4 font-display font-bold text-foreground">Essentielle</th>
                  <th className="text-center p-4 font-display font-bold text-primary">Professionnelle</th>
                  <th className="text-center p-4 font-display font-bold text-foreground">Premium</th>
                </tr>
              </thead>
              <tbody>
                {compFeatures.map((f, i) => (
                  <tr key={i} style={{ backgroundColor: "#111811", borderTop: "1px solid #1a2e1a" }}>
                    <td className="p-4 text-muted-foreground">{f.name}</td>
                    <td className="p-4 text-center"><CompCell val={f.ess} /></td>
                    <td className="p-4 text-center"><CompCell val={f.pro} /></td>
                    <td className="p-4 text-center"><CompCell val={f.prem} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </ScaleSection>
      </div>
    </section>

    {/* CE QU'ON SURVEILLE */}
    <section className="py-[100px]" style={{ backgroundColor: "#0a0f0a" }}>
      <div className="section-container">
        <BlurReveal className="text-center mb-12">
          <h2 className="heading-display text-2xl md:text-4xl">
            CE QU'ON GÈRE PENDANT <span className="text-primary">QUE VOUS TRAVAILLEZ</span>
          </h2>
        </BlurReveal>
        <ScaleSection>
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto" staggerDelay={0.1}>
            {surveillance.map((s, i) => (
              <motion.div key={i} variants={itemVariants} className="rounded-xl p-6 card-shimmer" style={{ backgroundColor: "#111811", border: "1px solid #1a2e1a" }}>
                <s.icon className="text-primary mb-3" size={24} />
                <h4 className="font-display font-bold text-foreground mb-2">{s.title}</h4>
                <p className="font-dm text-sm text-muted-foreground">{s.desc}</p>
              </motion.div>
            ))}
          </StaggerContainer>
        </ScaleSection>
      </div>
    </section>

    {/* FAQ */}
    <section className="py-[100px]" style={{ backgroundColor: "#0d130d" }}>
      <div className="section-container max-w-3xl mx-auto">
        <BlurReveal className="text-center mb-12">
          <h2 className="heading-display text-2xl md:text-4xl">
            VOS QUESTIONS,<br /><span className="text-primary">NOS RÉPONSES</span>
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
            PROTÉGEZ VOTRE SITE <span className="text-primary">DÈS AUJOURD'HUI</span>
          </h2>
        </BlurReveal>
        <BlurReveal delay={0.15}>
          <p className="font-dm text-lg mb-10 mx-auto max-w-lg" style={{ color: "rgba(255,255,255,0.6)" }}>
            Choisissez votre forfait et dormez sur vos deux oreilles.
          </p>
        </BlurReveal>
        <BlurReveal delay={0.3}>
          <Link to="/contact" className="btn-primary text-lg px-10 py-[18px]">
            Choisir mon forfait <ArrowRight className="ml-2 inline" size={18} />
          </Link>
        </BlurReveal>
        <BlurReveal delay={0.45}>
          <div className="flex flex-wrap justify-center gap-6 mt-8 font-dm text-[13px]" style={{ color: "rgba(255,255,255,0.4)" }}>
            <span>✓ Sans engagement</span>
            <span>✓ Résiliation à tout moment</span>
            <span>✓ Audit gratuit inclus</span>
          </div>
        </BlurReveal>
      </div>
    </section>
  </Layout>
);

export default MaintenancePage;
