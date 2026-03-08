import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import Layout from "@/components/Layout";
import { Check, ChevronDown, ArrowRight } from "lucide-react";
import BlurReveal from "@/components/animations/BlurReveal";
import ScaleSection from "@/components/animations/ScaleSection";
import TextSplit from "@/components/animations/TextSplit";
import { StaggerContainer, itemVariants } from "@/components/animations/StaggerContainer";
import { useRef } from "react";

/* ─── DATA ─── */
const inclus = [
  { text: "Design 100% sur-mesure", desc: "aucun template, une identité unique" },
  { text: "Jusqu'à 5 pages", desc: "Accueil, À propos, Services, Galerie, Contact" },
  { text: "Responsive mobile & tablette", desc: "parfait sur tous les écrans" },
  { text: "Optimisation SEO de base", desc: "structure technique, balises, vitesse" },
  { text: "Référencement local Google", desc: "pour être trouvé dans votre ville" },
  { text: "Formulaire de contact fonctionnel", desc: "directement dans votre boîte mail" },
  { text: "Certificat SSL (HTTPS)", desc: "sécurité et crédibilité" },
  { text: "Hébergement première année offert", desc: "aucun frais supplémentaire" },
  { text: "Formation à l'utilisation", desc: "vous êtes autonome après livraison" },
  { text: "Support 30 jours après livraison", desc: "on reste disponibles" },
];

const pills = [
  "Artisan (plombier, électricien, menuisier...)",
  "Commerçant de proximité",
  "Profession libérale",
  "Restaurant & traiteur",
  "Coach & consultant",
  "Professionnel en reconversion",
];

const profils = [
  { emoji: "🔧", name: "Mohammed, plombier à Lyon", text: "Avant : 0 appel entrant via internet. Après son site ALTÉRA : 8 à 12 demandes de devis par mois. Son site travaille pendant qu'il est sur chantier." },
  { emoji: "🏪", name: "Sophie, fleuriste à Bordeaux", text: "Son site vitrine lui permet de présenter ses créations, ses horaires et sa boutique. Ses clientes trouvent son adresse sur Google avant même de sortir de chez elles." },
  { emoji: "🧘", name: "Claire, ostéopathe à Nantes", text: "Un site professionnel rassure ses nouveaux patients. Elle reçoit ses prises de RDV directement via le formulaire. Crédibilité maximale, effort zéro." },
];

const statsData = [
  { value: 80, suffix: "%", label: "des consommateurs recherchent un professionnel local sur Google avant de le contacter" },
  { value: 3, suffix: "x", label: "plus de demandes en moyenne pour les artisans avec un site professionnel" },
  { value: 94, suffix: "%", label: "des premières impressions sont liées au design du site web" },
];

const processSteps = [
  { num: "01", title: "Premier échange (Jour 1)", desc: "Appel découverte 30min offert. On apprend à connaître votre activité, votre clientèle, vos objectifs. Aucun engagement." },
  { num: "02", title: "Maquette unique (Jour 2-3)", desc: "On crée une maquette sur-mesure basée sur votre identité. Vous la validez avant qu'on écrive une seule ligne de code." },
  { num: "03", title: "Développement (Jour 4-10)", desc: "Code propre, rapide, optimisé SEO. Votre site prend vie. Vous êtes informé de l'avancement à chaque étape." },
  { num: "04", title: "Révisions (Jour 11-13)", desc: "Vous testez, vous retournez vos retours. On ajuste jusqu'à ce que ce soit parfait." },
  { num: "05", title: "Livraison (Jour 14)", desc: "Mise en ligne complète, formation à l'utilisation, remise des accès. Votre site est en ligne et vous êtes autonome." },
];

const faqs = [
  { q: "Combien de temps pour avoir mon site ?", a: "Votre site est livré en 14 jours ouvrés après validation du contenu et de la maquette. C'est notre engagement." },
  { q: "Dois-je fournir les textes et photos ?", a: "Non. On peut rédiger l'ensemble du contenu pour vous, optimisé SEO. Pour les photos, on vous conseille sur les meilleures options (banques d'images pro ou shooting)." },
  { q: "Le prix de 497€ inclut vraiment tout ?", a: "Oui. Design, développement, hébergement première année, SSL, formulaire de contact, SEO de base, formation. Aucun frais caché." },
  { q: "Puis-je modifier mon site après livraison ?", a: "Oui. Vous pouvez modifier vos textes et images vous-même. Ou souscrire à notre formule maintenance pour qu'on le fasse pour vous." },
  { q: "Mon site sera-t-il bien référencé sur Google ?", a: "On optimise la structure technique, les balises et la vitesse de chargement. Pour un référencement local avancé, notre formule maintenance inclut un suivi SEO continu." },
  { q: "Que se passe-t-il après les 30 jours de support ?", a: "Vous pouvez souscrire à notre maintenance dès 39€/mois pour garder votre site à jour, sécurisé et performant." },
];

/* ─── CountUp component ─── */
const CountUp = ({ value, suffix }: { value: number; suffix: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  return (
    <motion.span
      ref={ref}
      className="text-primary heading-display"
      style={{ fontSize: "clamp(40px, 6vw, 64px)" }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <motion.span
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3 }}
      >
        {value}{suffix}
      </motion.span>
    </motion.span>
  );
};

/* ─── FAQ Item ─── */
const FaqItem = ({ q, a, index }: { q: string; a: string; index: number }) => {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
      className="rounded-xl overflow-hidden"
      style={{ backgroundColor: "#111811", border: "1px solid #1a2e1a" }}
    >
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between p-5 text-left">
        <span className="font-display font-bold text-foreground text-sm md:text-base">{q}</span>
        <motion.div animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.25 }}>
          <ChevronDown className="text-primary flex-shrink-0" size={20} />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
            className="overflow-hidden"
          >
            <p className="px-5 pb-5 text-muted-foreground text-sm">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

/* ─── Timeline Step ─── */
const TimelineStep = ({ step, index, isLast }: { step: typeof processSteps[0]; index: number; isLast: boolean }) => {
  const isLeft = index % 2 === 0;
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className={`flex flex-col md:flex-row items-center gap-6 ${isLeft ? "md:flex-row" : "md:flex-row-reverse"}`}
    >
      <div className={`flex-1 ${isLeft ? "md:text-right" : "md:text-left"}`}>
        <div className="rounded-xl p-6" style={{ backgroundColor: "#111811", border: "1px solid #1a2e1a" }}>
          <h4 className="font-display font-bold text-foreground mb-2">{step.title}</h4>
          <p className="font-dm text-sm text-muted-foreground">{step.desc}</p>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center border-2 border-primary">
          <span className="text-primary font-display font-bold text-sm">{step.num}</span>
        </div>
        {!isLast && <div className="w-px h-16 md:h-20" style={{ backgroundColor: "#1a2e1a" }} />}
      </div>
      <div className="flex-1 hidden md:block" />
    </motion.div>
  );
};

/* ─── PAGE ─── */
const SiteVitrinePage = () => {
  const timelineRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: timelineRef, offset: ["start end", "end start"] });
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <Layout>
      {/* HERO */}
      <section className="relative py-28 md:py-36 overflow-hidden" style={{ backgroundColor: "#0a0f0a" }}>
        <div
          className="absolute inset-0 opacity-25"
          style={{
            backgroundImage: "radial-gradient(circle, #1DB954 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        <div className="section-container text-center relative z-10">
          <BlurReveal>
            <span className="inline-block text-sm font-semibold px-4 py-2 rounded-full mb-6" style={{ backgroundColor: "rgba(29,185,84,0.12)", color: "hsl(var(--primary))" }}>
              ⚡ Livraison en 14 jours ouvrés
            </span>
          </BlurReveal>
          <TextSplit className="heading-display text-foreground mb-2" style={{ fontSize: "clamp(48px,6vw,80px)" }} as="h1">
            SITE VITRINE
          </TextSplit>
          <BlurReveal delay={0.3}>
            <span className="heading-display text-primary" style={{ fontSize: "clamp(48px,6vw,80px)" }}>497€</span>
          </BlurReveal>
          <BlurReveal delay={0.45}>
            <p className="font-dm text-lg max-w-2xl mx-auto mt-6 text-muted-foreground">
              La solution idéale pour présenter votre activité, inspirer confiance et transformer vos visiteurs en clients.
            </p>
          </BlurReveal>
          <BlurReveal delay={0.6}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
              <Link to="/contact" className="btn-primary text-base">
                Demander un devis gratuit <ArrowRight className="ml-2 inline" size={16} />
              </Link>
              <a href="#inclus" className="btn-outline text-base">Voir un exemple</a>
            </div>
          </BlurReveal>
        </div>
      </section>

      {/* SECTION 2 — INCLUS */}
      <section id="inclus" className="py-[100px]" style={{ backgroundColor: "#0d130d" }}>
        <div className="section-container">
          <BlurReveal className="text-center mb-12">
            <h2 className="heading-display text-2xl md:text-4xl mb-3">
              TOUT CE QUI EST <span className="text-primary">INCLUS</span>
            </h2>
            <p className="font-dm text-muted-foreground">Aucune surprise, tout est dans le prix.</p>
          </BlurReveal>
          <ScaleSection>
            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto" staggerDelay={0.07}>
              {inclus.map((item, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="flex items-start gap-3 p-4 rounded-xl"
                  style={{ backgroundColor: "#111811", border: "1px solid #1a2e1a" }}
                >
                  <Check className="text-primary flex-shrink-0 mt-0.5" size={20} />
                  <div>
                    <span className="text-foreground text-sm font-semibold">{item.text}</span>
                    <span className="text-muted-foreground text-sm"> — {item.desc}</span>
                  </div>
                </motion.div>
              ))}
            </StaggerContainer>
          </ScaleSection>
        </div>
      </section>

      {/* SECTION 3 — À QUI ÇA S'ADRESSE */}
      <section className="py-[100px]" style={{ backgroundColor: "#0a0f0a" }}>
        <div className="section-container">
          <BlurReveal className="text-center mb-10">
            <h2 className="heading-display text-2xl md:text-4xl">
              FAIT POUR VOUS <span className="text-primary">SI...</span>
            </h2>
          </BlurReveal>

          <BlurReveal delay={0.15} className="flex flex-wrap justify-center gap-3 mb-14 max-w-4xl mx-auto">
            {pills.map((p, i) => (
              <span
                key={i}
                className="text-sm text-foreground px-4 py-2 rounded-full"
                style={{ backgroundColor: "rgba(29,185,84,0.08)", border: "1px solid rgba(29,185,84,0.2)" }}
              >
                {p}
              </span>
            ))}
          </BlurReveal>

          <ScaleSection>
            <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6" staggerDelay={0.15}>
              {profils.map((p, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="rounded-xl p-6"
                  style={{ backgroundColor: "#111811", border: "1px solid #1a2e1a" }}
                >
                  <span className="text-3xl mb-3 block">{p.emoji}</span>
                  <h4 className="font-display font-bold text-foreground mb-2">{p.name}</h4>
                  <p className="font-dm text-sm mb-3" style={{ color: "rgba(255,255,255,0.6)" }}>{p.text}</p>
                  <span className="text-xs text-muted-foreground italic">Résultat fictif illustratif</span>
                </motion.div>
              ))}
            </StaggerContainer>
          </ScaleSection>
        </div>
      </section>

      {/* SECTION 4 — POURQUOI MAINTENANT */}
      <section className="py-[100px]" style={{ backgroundColor: "#0d130d" }}>
        <div className="section-container">
          <BlurReveal className="text-center mb-14">
            <h2 className="heading-display text-2xl md:text-4xl">
              CHAQUE JOUR SANS SITE,<br />
              <span className="text-primary">C'EST DES CLIENTS PERDUS</span>
            </h2>
          </BlurReveal>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-14" staggerDelay={0.15}>
            {statsData.map((s, i) => (
              <motion.div key={i} variants={itemVariants} className="text-center">
                <CountUp value={s.value} suffix={s.suffix} />
                <p className="font-dm text-sm text-muted-foreground mt-3">{s.label}</p>
              </motion.div>
            ))}
          </StaggerContainer>

          <BlurReveal delay={0.3} className="max-w-3xl mx-auto text-center">
            <p className="font-dm text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.6)" }}>
              Vos concurrents ont déjà un site. Pendant que vous lisez ces lignes, un client potentiel les choisit parce qu'il les a trouvés en ligne — et pas vous.{" "}
              <span className="text-primary font-semibold">ALTÉRA vous livre votre site en 14 jours.</span> Le reste, c'est votre business qui décolle.
            </p>
          </BlurReveal>
        </div>
      </section>

      {/* SECTION 5 — PROCESSUS */}
      <section className="py-[100px] relative" style={{ backgroundColor: "#0a0f0a" }}>
        <div className="section-container">
          <BlurReveal className="text-center mb-14">
            <h2 className="heading-display text-2xl md:text-4xl">
              NOTRE <span className="text-primary">PROCESSUS</span>
            </h2>
          </BlurReveal>
          <div ref={timelineRef} className="relative max-w-3xl mx-auto">
            {/* Vertical line */}
            <div className="absolute left-1/2 md:left-1/2 top-0 bottom-0 w-px -translate-x-1/2 hidden md:block" style={{ backgroundColor: "#1a2e1a" }}>
              <motion.div className="w-full bg-primary origin-top" style={{ height: "100%", scaleY: lineScale }} />
            </div>
            <div className="space-y-4 md:space-y-0">
              {processSteps.map((step, i) => (
                <TimelineStep key={i} step={step} index={i} isLast={i === processSteps.length - 1} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6 — FAQ */}
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

      {/* SECTION 7 — CTA */}
      <section
        className="relative py-[120px] px-6 overflow-hidden"
        style={{ background: "linear-gradient(160deg, #0d1f13 0%, #0a0f0a 60%)", borderTop: "1px solid #1a2e1a" }}
      >
        <div className="section-container text-center relative z-10">
          <BlurReveal>
            <h2 className="heading-display mb-6" style={{ fontSize: "clamp(32px, 4vw, 56px)" }}>
              LANCEZ VOTRE <span className="text-primary">SITE VITRINE</span>
            </h2>
          </BlurReveal>
          <BlurReveal delay={0.15}>
            <p className="font-dm text-lg mb-10 mx-auto max-w-lg" style={{ color: "rgba(255,255,255,0.6)" }}>
              Devis gratuit en moins de 2 minutes. Livraison en 14 jours.
            </p>
          </BlurReveal>
          <BlurReveal delay={0.3}>
            <Link to="/contact" className="btn-primary text-lg px-10 py-[18px]">
              Demander mon devis gratuit <ArrowRight className="ml-2 inline" size={18} />
            </Link>
          </BlurReveal>
          <BlurReveal delay={0.45}>
            <div className="flex flex-wrap justify-center gap-6 mt-8 font-dm text-[13px]" style={{ color: "rgba(255,255,255,0.4)" }}>
              <span>✓ Sans engagement</span>
              <span>✓ Réponse sous 24h</span>
              <span>✓ 497€ tout inclus</span>
            </div>
          </BlurReveal>
        </div>
      </section>
    </Layout>
  );
};

export default SiteVitrinePage;
