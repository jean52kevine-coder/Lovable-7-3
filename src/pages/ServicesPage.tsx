import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import RotatingWords from "@/components/RotatingWords";
import { Globe, ShoppingCart, Wrench, ArrowRight, Zap, Shield, Palette, Clock, HeadphonesIcon, TrendingUp } from "lucide-react";
import { FeatureCard } from "@/components/ui/grid-feature-cards";
import { CtaSection } from "@/components/ui/cta-section";
import { BorderBeam } from "@/components/ui/border-beam";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import heroServices from "@/assets/hero-services.jpg";

const services = [
  {
    icon: Globe,
    title: "Site Vitrine",
    price: "497 €",
    desc: "Une présence professionnelle qui inspire confiance et génère des contacts qualifiés.",
    features: ["Design sur-mesure", "Responsive mobile", "Optimisation SEO", "Formulaire de contact", "Livraison en 14 jours"],
    link: "/services/site-vitrine",
    popular: false,
  },
  {
    icon: ShoppingCart,
    title: "Site E-commerce",
    price: "747 €",
    desc: "Vendez en ligne avec une boutique performante, sécurisée et facile à gérer.",
    features: ["Boutique complète", "Paiement sécurisé", "Gestion des stocks", "Tableau de bord", "Formation incluse"],
    link: "/services/site-ecommerce",
    popular: true,
  },
  {
    icon: Wrench,
    title: "Maintenance & SEO",
    price: "dès 39 €/mois",
    desc: "Gardez votre site rapide, sécurisé et visible sur Google en permanence.",
    features: ["Mises à jour régulières", "Sauvegardes automatiques", "Support technique", "Monitoring 24/7", "Rapport mensuel"],
    link: "/services/maintenance",
    popular: false,
  },
];

const features = [
  { title: "Rapidité", icon: Zap, description: "Livraison en 14 jours chrono. Pendant que d'autres attendent 3 mois, vous êtes déjà en ligne." },
  { title: "Design unique", icon: Palette, description: "Aucun template. Chaque site est conçu sur-mesure pour refléter votre identité." },
  { title: "Sécurité", icon: Shield, description: "SSL, sauvegardes automatiques et monitoring 24/7 pour une tranquillité totale." },
  { title: "SEO optimisé", icon: TrendingUp, description: "Structuré pour Google dès le premier jour. Vos clients vous trouvent facilement." },
  { title: "Support humain", icon: HeadphonesIcon, description: "Un vrai interlocuteur, pas un chatbot. Réponse garantie dans la journée." },
  { title: "Délais respectés", icon: Clock, description: "On s'engage sur une date de livraison et on la tient. Toujours." },
];

const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.12 } } };
const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } } };

const ServicesPage = () => (
  <Layout>
    <section className="relative py-24 md:py-32 overflow-hidden">
      <img src={heroServices} alt="" className="absolute inset-0 w-full h-full object-cover opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/40" />
      <motion.div className="section-container text-center relative z-10" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <h1 className="heading-display text-4xl md:text-6xl mb-6">NOS <RotatingWords words={["SERVICES", "SOLUTIONS", "OFFRES", "EXPERTISES"]} /></h1>
        <p className="font-dm text-lg max-w-2xl mx-auto" style={{ color: "rgba(255,255,255,0.6)" }}>Des solutions web complètes, adaptées aux artisans, commerçants et PME locales.</p>
      </motion.div>
    </section>

    <section style={{ backgroundColor: "hsl(var(--section-alt-bg))" }} className="py-[100px]">
      <div className="section-container">
        <motion.div className="text-center mb-14" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.6 }}>
          <h2 className="heading-display mb-4" style={{ fontSize: "clamp(28px, 4vw, 44px)" }}>CHOISISSEZ VOTRE <span className="text-primary">FORMULE</span></h2>
        </motion.div>

        <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-6" variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }}>
          {services.map((s, i) => (
            <motion.div key={i} variants={fadeUp} className="relative rounded-2xl transition-all duration-300 hover:-translate-y-1.5 group">
              <GlowingEffect spread={40} glow proximity={64} inactiveZone={0.01} borderWidth={2} disabled={false} />
              <div className="relative z-10 rounded-2xl p-7 overflow-hidden h-full" style={{ backgroundColor: "hsl(var(--card-dark))", border: "1px solid hsl(var(--border-green))" }}>
                {s.popular && (
                  <>
                    <span className="absolute top-4 right-4 text-[11px] font-bold px-2.5 py-1 rounded-full bg-primary text-primary-foreground z-10">⭐ POPULAIRE</span>
                    <BorderBeam size={250} duration={12} delay={0} />
                  </>
                )}
                <span className="inline-block text-[13px] font-semibold px-3 py-1 rounded-full text-primary mb-4" style={{ background: "rgba(29,185,84,0.12)" }}>{s.price}</span>
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4"><s.icon className="text-primary" size={20} /></div>
                <h3 className="font-display font-black text-xl text-foreground mb-2">{s.title}</h3>
                <p className="font-dm text-sm mb-5 text-muted-foreground">{s.desc}</p>
                <ul className="space-y-2 mb-6">
                  {s.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-muted-foreground"><span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />{f}</li>
                  ))}
                </ul>
                <Link to={s.link} className="text-primary text-sm font-semibold hover:underline">En savoir plus →</Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>

    <section className="py-[100px]" style={{ backgroundColor: "hsl(var(--hero-bg))" }}>
      <div className="section-container">
        <motion.div className="text-center mb-14" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.6 }}>
          <h2 className="heading-display mb-4" style={{ fontSize: "clamp(28px, 4vw, 44px)" }}>POURQUOI NOUS <span className="text-primary">CHOISIR</span></h2>
          <p className="font-dm text-base text-muted-foreground">Tout ce qu'il faut pour réussir en ligne, sans compromis.</p>
        </motion.div>
        <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4" variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }}>
          {features.map((feature, i) => (
            <motion.div key={i} variants={fadeUp}><FeatureCard feature={feature} /></motion.div>
          ))}
        </motion.div>
      </div>
    </section>

    <CtaSection
      title="Prêt à lancer votre projet ?"
      description="Consultation 30min offerte, devis gratuit et sans engagement."
      buttonText="Demander un devis gratuit"
      buttonUrl="/contact"
      items={["Réponse sous 24h", "Sans engagement", "Devis personnalisé", "Prix fixe garanti", "Formation incluse"]}
    />
  </Layout>
);

export default ServicesPage;
