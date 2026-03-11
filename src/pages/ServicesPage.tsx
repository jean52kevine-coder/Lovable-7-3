import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import { Globe, ShoppingCart, Wrench, Zap, Shield, Palette, Clock, HeadphonesIcon, TrendingUp } from "lucide-react";
import { FeatureCard } from "@/components/ui/grid-feature-cards";
import { CtaSection } from "@/components/ui/cta-section";
import { BorderBeam } from "@/components/ui/border-beam";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import BlurReveal from "@/components/animations/BlurReveal";
import ScaleSection from "@/components/animations/ScaleSection";
import RotatingWords from "@/components/RotatingWords";
import { StaggerContainer, itemVariants } from "@/components/animations/StaggerContainer";
import heroServicesVideo from "@/assets/videos/hero-services.mp4";

const services = [
  {
    icon: Globe, title: "Site Vitrine", price: "497 €",
    desc: "Une présence professionnelle qui inspire confiance et génère des contacts qualifiés.",
    features: ["Design sur-mesure", "Responsive mobile", "Optimisation SEO", "Formulaire de contact", "Livraison en 14 jours"],
    link: "/services/site-vitrine", popular: false,
  },
  {
    icon: ShoppingCart, title: "Site E-commerce", price: "747 €",
    desc: "Vendez en ligne avec une boutique performante, sécurisée et facile à gérer.",
    features: ["Boutique complète", "Paiement sécurisé", "Gestion des stocks", "Tableau de bord", "Formation incluse"],
    link: "/services/site-ecommerce", popular: true,
  },
  {
    icon: Wrench, title: "Maintenance & SEO", price: "dès 39 €/mois",
    desc: "Gardez votre site rapide, sécurisé et visible sur Google en permanence.",
    features: ["Mises à jour régulières", "Sauvegardes automatiques", "Support technique", "Monitoring 24/7", "Rapport mensuel"],
    link: "/services/maintenance", popular: false,
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

const testimonials = [
  {
    name: "Thomas B., Plombier Lyon",
    quote: "Avant mon site, je passais par le bouche-à-oreille uniquement. Maintenant j'ai 3 nouvelles demandes par semaine en moyenne.",
    badge: "Site Vitrine",
  },
  {
    name: "Sophie M., Fleuriste Bordeaux",
    quote: "Les clientes trouvent maintenant mon site via Google. Les réservations pour la Saint-Valentin ont augmenté de 40%.",
    badge: "Site Vitrine",
  },
  {
    name: "Ahmed T., Restaurateur Nantes",
    quote: "Les gens cherchent mon restaurant et ne me trouvaient pas. Le site a changé ça du jour au lendemain.",
    badge: "Site E-commerce",
  },
];

const ServicesPage = () => (
  <Layout>
    <section className="relative py-24 md:py-32 overflow-hidden">
      <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover opacity-25"><source src={heroServicesVideo} type="video/mp4" /></video>
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/40" />
      <div className="section-container text-center relative z-10">
        <BlurReveal>
          <h1 className="heading-display text-4xl md:text-6xl mb-6">
            NOS <RotatingWords words={["SERVICES", "SOLUTIONS", "OFFRES", "FORMULES"]} />
          </h1>
        </BlurReveal>
        <BlurReveal delay={0.3}>
          <p className="font-dm text-lg max-w-2xl mx-auto text-muted-foreground">Des solutions web complètes, adaptées aux artisans, commerçants et PME locales.</p>
        </BlurReveal>
      </div>
    </section>

    <section style={{ backgroundColor: "hsl(var(--section-alt-bg) / 0.8)" }} className="py-[100px]">
      <div className="section-container">
        <BlurReveal className="text-center mb-14">
          <h2 className="heading-display mb-4 leading-tight" style={{ fontSize: "clamp(28px, 4vw, 44px)" }}><span className="inline">CHOISISSEZ VOTRE </span><span className="text-[#1DB954] whitespace-nowrap inline">FORMULE</span></h2>
        </BlurReveal>

        <ScaleSection>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6" staggerDelay={0.15}>
            {services.map((s, i) => (
              <motion.div key={i} variants={itemVariants} className="relative rounded-2xl transition-all duration-300 hover:-translate-y-1.5 group">
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
          </StaggerContainer>
        </ScaleSection>
      </div>
    </section>

    <section className="py-[100px]" style={{ backgroundColor: "hsl(var(--hero-bg) / 0.8)" }}>
      <div className="section-container">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="heading-display text-2xl md:text-3xl text-center mb-12">
          Les autres agences vs ALTÉRA
        </motion.h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="rounded-xl p-6" style={{ backgroundColor: "rgba(120, 24, 24, 0.15)", border: "1px solid rgba(220, 38, 38, 0.35)" }}>
            <h3 className="font-dm font-bold text-red-400 mb-5">✗ Les autres agences</h3>
            <ul className="space-y-3 text-red-300/90 font-dm text-sm">
              {[
                "✗ Templates génériques non personnalisés",
                "✗ Délais de 2 à 6 mois",
                "✗ Devis de 2 000€ à 15 000€",
                "✗ Interlocuteur qui change",
                "✗ Modifications payantes",
                "✗ Contrats d'engagement longs",
              ].map((item) => <li key={item}>{item}</li>)}
            </ul>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="rounded-xl p-6" style={{ backgroundColor: "rgba(29, 185, 84, 0.1)", border: "1px solid #1DB954" }}>
            <h3 className="font-dm font-bold text-[#1DB954] mb-5">✓ Chez ALTÉRA</h3>
            <ul className="space-y-3 text-[#1DB954] font-dm text-sm">
              {[
                "✓ Design 100% sur-mesure pour vous",
                "✓ Livraison en 14 jours garantie",
                "✓ Tarif fixe : 497€ ou 747€, tout inclus",
                "✓ Un seul interlocuteur du début à la fin",
                "✓ Modifications incluses pendant 1 an",
                "✓ Sans engagement, sans surprise",
              ].map((item) => <li key={item}>{item}</li>)}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>

    <section className="py-[100px]" style={{ backgroundColor: "hsl(var(--section-alt-bg) / 0.8)" }}>
      <div className="section-container">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="heading-display text-2xl md:text-3xl text-center mb-12">
          Ils nous font confiance
        </motion.h2>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <motion.div key={t.name} variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="relative rounded-xl p-6" style={{ backgroundColor: "#111811", border: "1px solid #1a2e1a" }}>
              <span className="absolute top-4 right-4 text-xs font-semibold rounded-full px-3 py-1" style={{ backgroundColor: "rgba(29,185,84,0.15)", color: "#1DB954", border: "1px solid rgba(29,185,84,0.3)" }}>{t.badge}</span>
              <p className="text-[#1DB954] mb-3">★★★★★</p>
              <p className="font-dm text-sm text-white/80 italic mb-4">"{t.quote}"</p>
              <p className="font-dm font-semibold text-sm text-white">{t.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>

    <section className="py-[100px]" style={{ backgroundColor: "hsl(var(--hero-bg) / 0.8)" }}>
      <div className="section-container">
        <BlurReveal className="text-center mb-14">
          <h2 className="heading-display mb-4 leading-tight" style={{ fontSize: "clamp(28px, 4vw, 44px)" }}><span className="inline">POURQUOI NOUS </span><span className="text-[#1DB954] whitespace-nowrap inline">CHOISIR</span></h2>
          <p className="font-dm text-base text-muted-foreground">Tout ce qu'il faut pour réussir en ligne, sans compromis.</p>
        </BlurReveal>
        <ScaleSection>
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4" staggerDelay={0.1}>
            {features.map((feature, i) => (
              <motion.div key={i} variants={itemVariants}><FeatureCard feature={feature} /></motion.div>
            ))}
          </StaggerContainer>
        </ScaleSection>
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
