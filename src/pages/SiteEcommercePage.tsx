import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import Layout from "@/components/Layout";
import { Check, ChevronDown, ArrowRight, X } from "lucide-react";
import BlurReveal from "@/components/animations/BlurReveal";
import ScaleSection from "@/components/animations/ScaleSection";
import TextSplit from "@/components/animations/TextSplit";
import { StaggerContainer, itemVariants } from "@/components/animations/StaggerContainer";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { BorderBeam } from "@/components/ui/border-beam";
import PageBackground, { FloatingOrb, GradientDivider } from "@/components/PageBackground";

/* ─── DATA ─── */
const inclus = [
  { text: "Tout ce qui est inclus dans le Site Vitrine", desc: "" },
  { text: "Boutique en ligne complète", desc: "catalogue produits, fiches produits, panier" },
  { text: "Paiement sécurisé Stripe & PayPal", desc: "certifié PCI DSS" },
  { text: "Gestion des stocks intégrée", desc: "alertes de rupture automatiques" },
  { text: "Dashboard admin", desc: "gérez vos produits, commandes et clients" },
  { text: "Facturation automatique", desc: "PDF envoyé au client à chaque commande" },
  { text: "Optimisation SEO e-commerce", desc: "fiche produit, schema markup" },
  { text: "Formation complète 2h", desc: "vous êtes 100% autonome" },
  { text: "Conformité RGPD", desc: "mentions légales, CGV, cookies" },
  { text: "Responsive mobile", desc: "70% des achats se font sur mobile" },
  { text: "Livraison configurée selon vos besoins", desc: "Colissimo, retrait, etc." },
  { text: "Hébergement première année offert", desc: "" },
];

const pills = ["Créateur de produits artisanaux", "Boutique physique qui veut vendre en ligne", "Producteur local", "Marque indépendante", "Association vendant des produits", "Prestataire avec offres en ligne"];

const profils = [
  { emoji: "🧶", name: "Camille, créatrice de bijoux", text: "Avant : vente uniquement sur les marchés le weekend. Après : sa boutique tourne 24h/24. Elle reçoit des commandes pendant qu'elle crée." },
  { emoji: "🍯", name: "Antoine, apiculteur en Dordogne", text: "Son miel se vend maintenant dans toute la France via son e-shop. Livraison Colissimo configurée, paiement automatique." },
  { emoji: "👗", name: "Léa, prêt-à-porter à Lille", text: "Elle voulait compléter son magasin physique. Aujourd'hui 30% de son CA vient de sa boutique en ligne." },
];

const compRows = [
  { label: "Présenter votre activité", vitrine: true, ecom: true },
  { label: "Générer des contacts", vitrine: true, ecom: true },
  { label: "Vendre des produits en ligne", vitrine: false, ecom: true },
  { label: "Panier & paiement sécurisé", vitrine: false, ecom: true },
  { label: "Gestion des stocks", vitrine: false, ecom: true },
  { label: "Dashboard commandes", vitrine: false, ecom: true },
  { label: "Facturation automatique", vitrine: false, ecom: true },
  { label: "Prix", vitrine: "497€", ecom: "747€" },
];

const processSteps = [
  { num: "01", title: "Échange & catalogue", desc: "On liste vos produits, vos prix, vos besoins logistiques." },
  { num: "02", title: "Design boutique", desc: "Maquette validée avant développement. Chaque page produit pensée pour convertir." },
  { num: "03", title: "Développement & intégration", desc: "Paiement, stocks, dashboard, tout est configuré et testé." },
  { num: "04", title: "Chargement produits", desc: "On importe vos premiers produits. Vous vérifiez chaque fiche." },
  { num: "05", title: "Formation & livraison", desc: "2h de formation complète. Vous maîtrisez votre boutique avant même qu'on raccroche." },
];

const faqs = [
  { q: "Quels moyens de paiement sont acceptés ?", a: "Stripe (CB Visa/Mastercard) et PayPal. D'autres solutions peuvent être ajoutées selon vos besoins." },
  { q: "Y a-t-il des commissions sur mes ventes ?", a: "Aucune commission de notre part. Seules les commissions Stripe (1,4% + 0,25€) ou PayPal s'appliquent." },
  { q: "Combien de produits puis-je vendre ?", a: "Illimité. Que vous ayez 10 ou 10 000 produits, votre boutique les gère." },
  { q: "Puis-je gérer ma boutique seul après livraison ?", a: "Oui. La formation de 2h vous rend 100% autonome pour ajouter, modifier ou supprimer des produits." },
  { q: "Mon site sera-t-il conforme RGPD ?", a: "Oui. Mentions légales, CGV, politique de confidentialité et bandeau cookies sont inclus." },
  { q: "Puis-je vendre des services en plus de produits ?", a: "Absolument. On peut configurer votre boutique pour vendre produits physiques, numériques et services." },
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

const TimelineStep = ({ step, index, isLast }: { step: typeof processSteps[0]; index: number; isLast: boolean }) => {
  const isLeft = index % 2 === 0;
  return (
    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ delay: index * 0.1, duration: 0.5 }} className={`flex flex-col md:flex-row items-center gap-4 md:gap-6 ${isLeft ? "md:flex-row" : "md:flex-row-reverse"}`}>
      <div className={`flex-1 w-full ${isLeft ? "md:text-right" : "md:text-left"}`}>
        <div className="relative rounded-xl">
          <GlowingEffect spread={30} glow proximity={50} inactiveZone={0.01} borderWidth={2} disabled={false} />
          <div className="relative z-10 rounded-xl p-4 md:p-6" style={{ backgroundColor: "#111811", border: "1px solid #1a2e1a" }}>
            <h4 className="font-display font-bold text-foreground text-sm md:text-base mb-1">{step.title}</h4>
            <p className="font-dm text-xs md:text-sm text-muted-foreground">{step.desc}</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/20 flex items-center justify-center border-2 border-primary">
          <span className="text-primary font-display font-bold text-xs md:text-sm">{step.num}</span>
        </div>
        {!isLast && <div className="w-px h-12 md:h-20" style={{ backgroundColor: "#1a2e1a" }} />}
      </div>
      <div className="flex-1 hidden md:block" />
    </motion.div>
  );
};

const SiteEcommercePage = () => {
  const timelineRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: timelineRef, offset: ["start end", "end start"] });
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <Layout>
      {/* Background — grid orange tint */}
      <PageBackground pattern="grid" color="rgba(249,115,22,0.08)" />

      {/* HERO */}
      <section className="relative py-20 md:py-36 overflow-hidden">
        <FloatingOrb color="rgba(249,115,22,0.06)" size={500} x="15%" y="20%" />
        <FloatingOrb color="rgba(29,185,84,0.05)" size={400} x="75%" y="50%" delay={4} />
        <div className="section-container text-center relative z-10">
          <BlurReveal>
            <span className="inline-block text-xs md:text-sm font-semibold px-3 md:px-4 py-1.5 md:py-2 rounded-full mb-4 md:mb-6" style={{ backgroundColor: "rgba(29,185,84,0.12)", color: "hsl(var(--primary))" }}>
              🛒 Vendez en ligne dès demain
            </span>
          </BlurReveal>
          <TextSplit className="heading-display text-foreground mb-2" style={{ fontSize: "clamp(36px,6vw,80px)" }} as="h1">SITE E-COMMERCE</TextSplit>
          <BlurReveal delay={0.3}><span className="heading-display text-primary block" style={{ fontSize: "clamp(36px,6vw,80px)" }}>747€</span></BlurReveal>
          <BlurReveal delay={0.45}>
            <p className="font-dm text-sm md:text-lg max-w-2xl mx-auto mt-4 md:mt-6 text-muted-foreground px-2">
              Une boutique en ligne performante, sécurisée et facile à gérer. Vos produits accessibles 24h/24, partout en France.
            </p>
          </BlurReveal>
          <BlurReveal delay={0.6}>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center mt-8 md:mt-10 px-4">
              <Link to="/contact" className="btn-primary text-sm md:text-base">Lancer ma boutique <ArrowRight className="ml-2 inline" size={16} /></Link>
              <a href="#inclus" className="btn-outline text-sm md:text-base">Voir les fonctionnalités</a>
            </div>
          </BlurReveal>
        </div>
      </section>

      <GradientDivider color="rgba(249,115,22,0.2)" />

      {/* INCLUS */}
      <section id="inclus" className="relative py-16 md:py-[100px]">
        <div className="section-container relative z-10">
          <BlurReveal className="text-center mb-8 md:mb-12">
            <h2 className="heading-display text-xl md:text-4xl mb-2">TOUT CE QUI EST <span className="text-primary">INCLUS</span></h2>
          </BlurReveal>
          <ScaleSection>
            <div className="relative max-w-4xl mx-auto rounded-2xl"><BorderBeam size={400} duration={18} />
              <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4" staggerDelay={0.05}>
                {inclus.map((item, i) => (
                  <motion.div key={i} variants={itemVariants} className="relative rounded-xl card-shimmer">
                    <div className="relative z-10 flex items-start gap-3 p-3 md:p-4 rounded-xl" style={{ backgroundColor: "#111811", border: "1px solid #1a2e1a" }}>
                      <Check className="text-primary flex-shrink-0 mt-0.5" size={18} />
                      <div><span className="text-foreground text-xs md:text-sm font-semibold">{item.text}</span>{item.desc && <span className="text-muted-foreground text-xs md:text-sm"> — {item.desc}</span>}</div>
                    </div>
                  </motion.div>
                ))}
              </StaggerContainer>
            </div>
          </ScaleSection>
        </div>
      </section>

      <GradientDivider color="rgba(249,115,22,0.2)" />

      {/* À QUI */}
      <section className="relative py-16 md:py-[100px]">
        <div className="section-container relative z-10">
          <BlurReveal className="text-center mb-8 md:mb-10">
            <h2 className="heading-display text-xl md:text-4xl">VOTRE BOUTIQUE EN LIGNE <span className="text-primary">SI VOUS ÊTES...</span></h2>
          </BlurReveal>
          <BlurReveal delay={0.15} className="flex flex-wrap justify-center gap-2 md:gap-3 mb-10 md:mb-14 max-w-4xl mx-auto px-2">
            {pills.map((p, i) => (<span key={i} className="text-xs md:text-sm text-foreground px-3 md:px-4 py-1.5 md:py-2 rounded-full" style={{ backgroundColor: "rgba(29,185,84,0.08)", border: "1px solid rgba(29,185,84,0.2)" }}>{p}</span>))}
          </BlurReveal>
          <ScaleSection>
            <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6" staggerDelay={0.15}>
              {profils.map((p, i) => (
                <motion.div key={i} variants={itemVariants} whileHover={{ y: -6, scale: 1.02 }} className="relative rounded-xl card-shimmer">
                  <GlowingEffect spread={30} glow proximity={50} inactiveZone={0.01} borderWidth={2} disabled={false} />
                  <div className="relative z-10 rounded-xl p-5 md:p-6" style={{ backgroundColor: "#111811", border: "1px solid #1a2e1a" }}>
                    <span className="text-2xl md:text-3xl mb-2 block">{p.emoji}</span>
                    <h4 className="font-display font-bold text-foreground text-sm md:text-base mb-2">{p.name}</h4>
                    <p className="font-dm text-xs md:text-sm mb-2" style={{ color: "rgba(255,255,255,0.6)" }}>{p.text}</p>
                    <span className="text-[10px] md:text-xs text-muted-foreground italic">Résultat fictif illustratif</span>
                  </div>
                </motion.div>
              ))}
            </StaggerContainer>
          </ScaleSection>
        </div>
      </section>

      <GradientDivider color="rgba(249,115,22,0.2)" />

      {/* COMPARAISON */}
      <section className="relative py-16 md:py-[100px]">
        <div className="section-container max-w-3xl mx-auto relative z-10">
          <BlurReveal className="text-center mb-8 md:mb-12">
            <h2 className="heading-display text-xl md:text-4xl mb-2">VITRINE OU <span className="text-primary">E-COMMERCE ?</span></h2>
            <p className="font-dm text-sm text-muted-foreground">Choisissez selon votre besoin.</p>
          </BlurReveal>
          <ScaleSection>
            <div className="rounded-2xl overflow-x-auto" style={{ border: "1px solid #1a2e1a" }}>
              <table className="w-full text-xs md:text-sm">
                <thead><tr style={{ backgroundColor: "#0d130d" }}>
                  <th className="text-left p-3 md:p-4 font-display font-bold text-muted-foreground">Fonctionnalité</th>
                  <th className="text-center p-3 md:p-4 font-display font-bold text-foreground">Vitrine</th>
                  <th className="text-center p-3 md:p-4 font-display font-bold text-primary">E-commerce</th>
                </tr></thead>
                <tbody>{compRows.map((row, i) => (
                  <tr key={i} style={{ backgroundColor: "#111811", borderTop: "1px solid #1a2e1a" }}>
                    <td className="p-3 md:p-4 text-muted-foreground">{row.label}</td>
                    <td className="p-3 md:p-4 text-center">{typeof row.vitrine === "string" ? <span className="text-foreground font-semibold">{row.vitrine}</span> : row.vitrine ? <Check className="text-primary mx-auto" size={16} /> : <X className="text-destructive mx-auto" size={16} />}</td>
                    <td className="p-3 md:p-4 text-center">{typeof row.ecom === "string" ? <span className="text-primary font-semibold">{row.ecom}</span> : row.ecom ? <Check className="text-primary mx-auto" size={16} /> : <X className="text-destructive mx-auto" size={16} />}</td>
                  </tr>
                ))}</tbody>
              </table>
            </div>
          </ScaleSection>
        </div>
      </section>

      <GradientDivider color="rgba(249,115,22,0.2)" />

      {/* PROCESSUS */}
      <section className="relative py-16 md:py-[100px]">
        <div className="section-container relative z-10">
          <BlurReveal className="text-center mb-10 md:mb-14">
            <h2 className="heading-display text-xl md:text-4xl">NOTRE <span className="text-primary">PROCESSUS</span></h2>
          </BlurReveal>
          <div ref={timelineRef} className="relative max-w-3xl mx-auto">
            <div className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 hidden md:block" style={{ backgroundColor: "#1a2e1a" }}>
              <motion.div className="w-full bg-primary origin-top" style={{ height: "100%", scaleY: lineScale }} />
            </div>
            <div className="space-y-2 md:space-y-0">
              {processSteps.map((step, i) => (<TimelineStep key={i} step={step} index={i} isLast={i === processSteps.length - 1} />))}
            </div>
          </div>
        </div>
      </section>

      <GradientDivider color="rgba(249,115,22,0.2)" />

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
      <section className="relative py-20 md:py-[120px] px-4 md:px-6 overflow-hidden" style={{ background: "linear-gradient(160deg, #1a1008 0%, #0a0f0a 60%)", borderTop: "1px solid rgba(249,115,22,0.2)" }}>
        <FloatingOrb color="rgba(249,115,22,0.06)" size={400} x="50%" y="40%" />
        <div className="section-container text-center relative z-10">
          <BlurReveal><h2 className="heading-display mb-4 md:mb-6" style={{ fontSize: "clamp(28px, 4vw, 56px)" }}>LANCEZ VOTRE <span className="text-primary">BOUTIQUE EN LIGNE</span></h2></BlurReveal>
          <BlurReveal delay={0.15}><p className="font-dm text-sm md:text-lg mb-8 md:mb-10 mx-auto max-w-lg" style={{ color: "rgba(255,255,255,0.6)" }}>747€ tout inclus. Formation incluse. Livraison en 14 jours.</p></BlurReveal>
          <BlurReveal delay={0.3}><Link to="/contact" className="btn-primary text-sm md:text-lg px-8 md:px-10 py-3 md:py-[18px]">Démarrer mon e-shop <ArrowRight className="ml-2 inline" size={18} /></Link></BlurReveal>
          <BlurReveal delay={0.45}>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6 mt-6 md:mt-8 font-dm text-[11px] md:text-[13px]" style={{ color: "rgba(255,255,255,0.4)" }}>
              <span>✓ 747€ tout inclus</span><span>✓ Formation incluse</span><span>✓ Livraison en 14 jours</span>
            </div>
          </BlurReveal>
        </div>
      </section>
    </Layout>
  );
};

export default SiteEcommercePage;
