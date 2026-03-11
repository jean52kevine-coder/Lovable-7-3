import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { CreditCard } from "lucide-react";
import { PricingWithChart } from "@/components/ui/pricing-with-chart";
import { PricingMaintenance } from "@/components/ui/pricing-maintenance";
import { CtaSection } from "@/components/ui/cta-section";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import BlurReveal from "@/components/animations/BlurReveal";
import ScaleSection from "@/components/animations/ScaleSection";
import RotatingWords from "@/components/RotatingWords";
import heroTarifsVideo from "@/assets/videos/hero-tarifs.mp4";

const faqs = [
  { q: "Y a-t-il des frais récurrents après livraison ?", a: "L'hébergement est offert la première année. À partir de la 2e année : environ 80-120€/an. Notre maintenance l'inclut." },
  { q: "Puis-je payer en plusieurs fois ?", a: "Oui. Vitrine en 2x, E-commerce en 3x, sans frais ni intérêts." },
  { q: "Le devis est-il vraiment gratuit ?", a: "100% gratuit et sans engagement. Devis détaillé sous 24h après notre échange." },
  { q: "Proposez-vous des réductions ?", a: "Oui, pour les associations et les projets combinés (vitrine + maintenance). Contactez-nous." }
];

const FAQItem = ({ faq, index }: { faq: { q: string; a: string }; index: number }) => {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <div className="relative rounded-xl">
        <GlowingEffect spread={30} glow proximity={50} inactiveZone={0.01} borderWidth={2} disabled={false} />
        <button
          onClick={() => setOpen(!open)}
          className="relative z-10 w-full text-left rounded-xl p-5 flex items-center justify-between"
          style={{ backgroundColor: "hsl(var(--card-dark))", border: "1px solid hsl(var(--border-green))" }}
        >
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

const TarifsPage = () => (
  <Layout>
    {/* Hero */}
    <section className="relative py-24 md:py-32 overflow-hidden">
      <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover opacity-25"><source src={heroTarifsVideo} type="video/mp4" /></video>
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/40" />
      <div className="section-container text-center">
        <BlurReveal>
          <span
            className="inline-block font-dm text-[13px] font-semibold px-4 py-1.5 rounded-full text-primary mb-6"
            style={{ background: "rgba(29,185,84,0.15)", border: "1px solid rgba(29,185,84,0.4)" }}
          >
            💰 Paiement en 2 ou 3 fois disponible — sans frais
          </span>
        </BlurReveal>
        <BlurReveal delay={0.1}>
          <h1 className="heading-display text-4xl md:text-6xl mb-4">
            DES PRIX <RotatingWords words={["CLAIRS", "FIXES", "JUSTES", "TRANSPARENTS"]} />
          </h1>
        </BlurReveal>
        <BlurReveal delay={0.2}>
          <h2 className="heading-display text-3xl md:text-5xl mb-6 text-primary">ZÉRO SURPRISE.</h2>
        </BlurReveal>
        <BlurReveal delay={0.3}>
          <p className="font-dm text-lg max-w-xl mx-auto text-muted-foreground">
            Tout est inclus dans le prix affiché. Hébergement, SSL, formation, support. Aucun frais caché.
          </p>
        </BlurReveal>
      </div>
    </section>

    {/* Pricing cards - Site Vitrine / E-commerce */}
    <section className="py-[80px]" style={{ backgroundColor: "hsl(var(--section-alt-bg) / 0.8)" }}>
      <div className="section-container">
        <BlurReveal className="text-center mb-10">
          <h2 className="heading-display text-3xl md:text-4xl">Création de Site Web</h2>
          <p className="text-muted-foreground text-base max-w-xl mx-auto font-dm mt-3">Choisissez la formule adaptée à votre projet. Prix unique, sans abonnement caché.</p>
        </BlurReveal>
        <ScaleSection>
          <PricingWithChart />
        </ScaleSection>
      </div>
    </section>

    {/* Paiement en plusieurs fois */}
    <section className="py-[80px]" style={{ backgroundColor: "hsl(var(--hero-bg) / 0.8)" }}>
      <div className="section-container">
        <BlurReveal className="text-center mb-10">
          <h2 className="heading-display text-2xl md:text-3xl"><span className="inline">FACILITEZ VOTRE </span><span className="text-[#1DB954] whitespace-nowrap inline">INVESTISSEMENT</span></h2>
        </BlurReveal>
        <ScaleSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              { title: "Vitrine en 2x", lines: ["248,50€ à la commande", "248,50€ à la livraison"] },
              { title: "E-commerce en 3x", lines: ["249€ à la commande", "249€ à J+10", "249€ à la livraison"] },
            ].map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative rounded-xl"
              >
                <GlowingEffect spread={30} glow proximity={50} inactiveZone={0.01} borderWidth={2} disabled={false} />
                <div className="relative z-10 rounded-xl p-7" style={{ backgroundColor: "#111811", border: "1px solid #1a2e1a" }}>
                  <CreditCard className="text-primary mb-4" size={28} />
                  <h3 className="font-display font-black text-white text-lg mb-4">{card.title}</h3>
                  <div className="space-y-2 font-dm text-sm mb-4">
                    {card.lines.map((l, j) => <p key={j} className="text-white">{l}</p>)}
                  </div>
                  <p className="font-dm text-xs text-muted-foreground">Aucun frais supplémentaire. Aucun intérêt.</p>
                </div>
              </motion.div>
            ))}
          </div>
        </ScaleSection>
      </div>
    </section>

    {/* Maintenance */}
    <section className="py-[80px]" style={{ backgroundColor: "hsl(var(--section-alt-bg) / 0.8)" }}>
      <div className="section-container">
        <BlurReveal className="text-center mb-10">
          <h2 className="heading-display text-3xl md:text-4xl"><span className="inline">Formules </span><span className="text-[#1DB954] whitespace-nowrap inline">Maintenance</span></h2>
          <p className="text-muted-foreground text-base max-w-xl mx-auto font-dm mt-3">Gardez votre site à jour, sécurisé et performant. Sans engagement.</p>
        </BlurReveal>
        <ScaleSection>
          <PricingMaintenance />
        </ScaleSection>
      </div>
    </section>

    {/* FAQ */}
    <section className="py-[80px]" style={{ backgroundColor: "hsl(var(--hero-bg) / 0.8)" }}>
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
      title="Convaincu ? Lancez-vous !"
      description="Devis gratuit, sans engagement. On vous répond sous 24h."
      buttonText="Demander un devis gratuit"
      buttonUrl="/contact?service=vitrine"
    />
  </Layout>
);

export default TarifsPage;
