import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Layout from "@/components/Layout";
import { Globe, Check, Users, Briefcase, Store, ChefHat, Dumbbell } from "lucide-react";
import { CtaSection } from "@/components/ui/cta-section";
import { BorderBeam } from "@/components/ui/border-beam";
import { VitrineHeroIllustration } from "@/components/illustrations/SvgIllustrations";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { AnimatedGradientText } from "@/components/ui/animated-gradient-text";
import BlurReveal from "@/components/animations/BlurReveal";
import ScaleSection from "@/components/animations/ScaleSection";
import RotatingWords from "@/components/RotatingWords";
import { StaggerContainer, itemVariants } from "@/components/animations/StaggerContainer";
import heroVitrineVideo from "@/assets/videos/hero-vitrine.mp4";

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

const profils = [
  { emoji: "🔧", name: "Mohammed, plombier à Lyon", text: "Avant son site : 100% de ses clients venaient du bouche-à-oreille. Après : il reçoit entre 6 et 10 demandes de devis en ligne chaque mois. Son site travaille pendant qu'il est sur chantier." },
  { emoji: "🌸", name: "Sophie, fleuriste à Bordeaux", text: "Ses clientes trouvent maintenant ses horaires, ses créations et son adresse en quelques secondes sur Google. Plus besoin d'expliquer où elle est à chaque appel." },
  { emoji: "🧘", name: "Claire, ostéopathe à Nantes", text: "Un site professionnel rassure ses nouveaux patients avant même le premier rendez-vous. Elle reçoit ses demandes de RDV directement par email via son formulaire." },
];

const timelineSteps = [
  { day: "Jour 1", title: "Premier échange", text: "Appel découverte 30min offert. On apprend à connaître votre activité, vos clients, vos objectifs. Aucun engagement." },
  { day: "Jour 2-3", title: "Maquette", text: "On crée une maquette sur-mesure. Vous la recevez, vous donnez vos retours, on ajuste. Rien n'est codé avant votre validation." },
  { day: "Jour 4-11", title: "Développement", text: "Votre site prend vie. Code propre, rapide, SEO optimisé. Vous suivez l'avancement." },
  { day: "Jour 12-13", title: "Révisions", text: "Vous testez sur tous vos appareils. On ajuste jusqu'à ce que tout soit parfait." },
  { day: "Jour 14", title: "Livraison", text: "Mise en ligne, formation à l'utilisation, remise de tous les accès. Votre site est en ligne." },
];

const faqs = [
  { q: "Combien de temps pour avoir mon site ?", a: "Votre site est livré en 14 jours ouvrés après validation du contenu." },
  { q: "Dois-je fournir le contenu ?", a: "Nous pouvons rédiger le contenu pour vous. Vous n'avez qu'à valider." },
  { q: "Le site est-il modifiable ensuite ?", a: "Oui, vous pouvez demander des modifications ou souscrire à notre offre maintenance." },
  { q: "Y a-t-il des frais cachés ?", a: "Aucun. Le prix affiché est le prix final. L'hébergement est inclus la première année." },
];

const TimelineSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 80%", "end 60%"] });
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section className="py-[100px]" style={{ backgroundColor: "hsl(var(--hero-bg) / 0.8)" }}>
      <div className="section-container">
        <BlurReveal className="text-center mb-14">
          <h2 className="heading-display text-2xl md:text-3xl">COMMENT ÇA <span className="text-primary">SE PASSE ?</span></h2>
        </BlurReveal>
        <div ref={ref} className="relative max-w-3xl mx-auto">
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[2px] bg-[#1a2e1a] -translate-x-1/2" />
          <motion.div className="absolute left-6 md:left-1/2 top-0 w-[2px] -translate-x-1/2 origin-top" style={{ backgroundColor: "hsl(145, 63%, 42%)", scaleY, height: "100%" }} />
          <div className="space-y-12">
            {timelineSteps.map((step, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.5, delay: i * 0.1 }} className={`relative flex items-start gap-6 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} pl-14 md:pl-0`}>
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background z-10" />
                <div className={`md:w-1/2 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                  <div className="relative rounded-xl">
                    <GlowingEffect spread={30} glow proximity={50} inactiveZone={0.01} borderWidth={2} disabled={false} />
                    <div className="relative z-10 rounded-xl p-5" style={{ backgroundColor: "#111811", border: "1px solid #1a2e1a" }}>
                      <span className="font-display font-black text-primary text-2xl">{step.day}</span>
                      <h3 className="font-display font-black text-white text-lg mt-1 mb-2">{step.title}</h3>
                      <p className="font-dm text-sm" style={{ color: "rgba(255,255,255,0.6)" }}>{step.text}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

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

const SiteVitrinePage = () => (
  <Layout>
    {/* Hero */}
    <section className="relative py-24 md:py-32 overflow-hidden">
      <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover opacity-25"><source src={heroVitrineVideo} type="video/mp4" /></video>
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/40" />
      <div className="section-container flex flex-col lg:flex-row items-center gap-10 relative z-10">
        <div className="text-center lg:text-left flex-1">
          <BlurReveal>
            <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mx-auto lg:mx-0 mb-6"><Globe className="text-primary" size={32} /></div>
          </BlurReveal>
          <BlurReveal delay={0.1}>
            <h1 className="heading-display text-4xl md:text-6xl mb-4">
              SITE <RotatingWords words={["VITRINE", "MODERNE", "PERFORMANT", "SUR-MESURE"]} />
            </h1>
          </BlurReveal>
          <BlurReveal delay={0.3}><p className="text-primary heading-display text-3xl mb-4">497 €</p></BlurReveal>
          <BlurReveal delay={0.4}><p className="font-dm text-lg max-w-xl mx-auto lg:mx-0 text-muted-foreground">Présentez votre activité avec un site moderne qui inspire confiance et attire de nouveaux clients.</p></BlurReveal>
        </div>
        <BlurReveal delay={0.3} className="hidden md:block flex-1">
          <VitrineHeroIllustration />
        </BlurReveal>
      </div>
    </section>

    {/* Ce qui est inclus */}
    <section className="py-[100px]" style={{ backgroundColor: "hsl(var(--section-alt-bg) / 0.8)" }}>
      <div className="section-container">
        <BlurReveal className="text-center mb-12">
          <h2 className="heading-display text-2xl md:text-3xl">CE QUI EST{" "}<span className="text-primary whitespace-nowrap">INCLUS</span></h2>
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

    {/* À qui ça s'adresse */}
    <section className="py-[100px]" style={{ backgroundColor: "hsl(var(--hero-bg) / 0.8)" }}>
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

    {/* Profils types */}
    <section className="py-[100px]" style={{ backgroundColor: "hsl(var(--section-alt-bg) / 0.8)" }}>
      <div className="section-container">
        <BlurReveal className="text-center mb-14">
          <h2 className="heading-display text-2xl md:text-3xl">FAITS POUR DES GENS <span className="text-primary">COMME VOUS</span></h2>
        </BlurReveal>
        <ScaleSection>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6" staggerDelay={0.12}>
            {profils.map((p, i) => (
              <motion.div key={i} variants={itemVariants} className="relative rounded-xl">
                <GlowingEffect spread={30} glow proximity={50} inactiveZone={0.01} borderWidth={2} disabled={false} />
                <div className="relative z-10 rounded-xl p-6 h-full" style={{ backgroundColor: "#111811", border: "1px solid #1a2e1a" }}>
                  <span className="text-3xl block mb-4">{p.emoji}</span>
                  <h3 className="font-display font-black text-white mb-3">{p.name}</h3>
                  <p className="font-dm text-sm leading-relaxed mb-4" style={{ color: "rgba(255,255,255,0.6)" }}>{p.text}</p>
                  <span className="inline-block text-[11px] text-muted-foreground italic">*Résultat fictif illustratif</span>
                </div>
              </motion.div>
            ))}
          </StaggerContainer>
        </ScaleSection>
      </div>
    </section>

    <TimelineSection />

    {/* Pourquoi maintenant */}
    <section className="py-[100px]" style={{ backgroundColor: "hsl(var(--section-alt-bg) / 0.8)" }}>
      <div className="section-container text-center max-w-2xl mx-auto">
        <BlurReveal>
          <h2 className="heading-display text-2xl md:text-3xl mb-6">POURQUOI <span className="text-primary">MAINTENANT</span> ?</h2>
          <p className="font-dm text-muted-foreground text-base leading-relaxed mb-4">Chaque jour sans site web, <AnimatedGradientText className="heading-display text-base md:text-lg">C'EST DES CLIENTS PERDUS.</AnimatedGradientText></p>
          <p className="font-dm text-muted-foreground text-base leading-relaxed"><span className="text-primary font-semibold">80%</span> des consommateurs recherchent un professionnel en ligne avant de le contacter. Ne laissez plus cette opportunité à d'autres.</p>
        </BlurReveal>
      </div>
    </section>

    {/* FAQ */}
    <section className="py-[100px]" style={{ backgroundColor: "hsl(var(--hero-bg) / 0.8)" }}>
      <div className="section-container">
        <BlurReveal className="text-center mb-12">
          <h2 className="heading-display text-2xl md:text-3xl">QUESTIONS <span className="text-primary">FRÉQUENTES</span></h2>
        </BlurReveal>
        <div className="max-w-2xl mx-auto space-y-4">
          {faqs.map((faq, i) => <FAQItem key={i} faq={faq} index={i} />)}
        </div>
      </div>
    </section>

    <CtaSection title="Lancez votre site vitrine" description="14 jours, 497€, tout inclus. On s'occupe de tout." buttonText="Demander un devis gratuit" buttonUrl="/contact" />
  </Layout>
);

export default SiteVitrinePage;
