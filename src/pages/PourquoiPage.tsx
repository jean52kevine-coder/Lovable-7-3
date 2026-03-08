import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import { ArrowRight, XCircle, CheckCircle, TrendingUp, Users, Search, Clock, Zap, Shield } from "lucide-react";
import { FeatureCard } from "@/components/ui/grid-feature-cards";
import { CtaSection } from "@/components/ui/cta-section";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import heroPourquoi from "@/assets/hero-pourquoi.jpg";

const stats = [
  { icon: Search, value: "97%", label: "des consommateurs utilisent internet pour trouver un professionnel local" },
  { icon: Users, value: "80%", label: "des clients vérifient un site web avant de contacter une entreprise" },
  { icon: TrendingUp, value: "+67%", label: "de chiffre d'affaires en plus pour les entreprises avec un site web" },
  { icon: Clock, value: "24/7", label: "accessibilité permanente pour vos clients potentiels" },
];

const sansAvec = [
  { sans: "Invisible sur internet", avec: "Trouvable en quelques clics" },
  { sans: "Dépendant du bouche-à-oreille", avec: "Visible par des milliers de personnes" },
  { sans: "Pas de crédibilité en ligne", avec: "Image professionnelle et rassurante" },
  { sans: "Horaires limités", avec: "Disponible 24h/24, 7j/7" },
  { sans: "Concurrents en première page", avec: "Vous aussi, en première page" },
];

const advantages = [
  { title: "Visibilité locale", icon: Search, description: "Apparaissez sur Google quand vos clients cherchent un professionnel dans votre ville." },
  { title: "Crédibilité immédiate", icon: Shield, description: "Un site pro rassure vos prospects et vous démarque de la concurrence." },
  { title: "Génération de leads", icon: Zap, description: "Transformez les visiteurs en clients grâce à des formulaires et appels à l'action efficaces." },
  { title: "Croissance mesurable", icon: TrendingUp, description: "Suivez vos résultats et ajustez votre stratégie pour maximiser votre retour sur investissement." },
];

const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.12 } } };
const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } } };

const PourquoiPage = () => (
  <Layout>
    <section className="relative py-24 md:py-32 overflow-hidden">
      <img src={heroPourquoi} alt="" className="absolute inset-0 w-full h-full object-cover opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/40" />
      <motion.div className="section-container text-center relative z-10" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <h1 className="heading-display text-4xl md:text-6xl mb-6">POURQUOI AVOIR <span className="text-primary">UN SITE WEB</span> ?</h1>
        <p className="font-dm text-lg max-w-2xl mx-auto text-muted-foreground">En 2025, ne pas avoir de site internet c'est comme ne pas avoir de vitrine. Vos clients vous cherchent en ligne — soyez là.</p>
      </motion.div>
    </section>

    <section className="py-[100px]" style={{ backgroundColor: "hsl(var(--section-alt-bg))" }}>
      <div className="section-container">
        <motion.h2 className="heading-display text-2xl md:text-3xl text-center mb-12" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.6 }}>
          LES CHIFFRES PARLENT <span className="text-primary">D'EUX-MÊMES</span>
        </motion.h2>
        <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }}>
          {stats.map((s, i) => (
            <motion.div key={i} variants={fadeUp} className="relative rounded-2xl transition-all duration-300 hover:-translate-y-1">
              <GlowingEffect spread={40} glow proximity={64} inactiveZone={0.01} borderWidth={2} disabled={false} />
              <div className="relative z-10 rounded-2xl p-6 text-center" style={{ backgroundColor: "hsl(var(--card-dark))", border: "1px solid hsl(var(--border-green))" }}>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4"><s.icon className="text-primary" size={24} /></div>
                <div className="text-primary heading-display text-3xl mb-2">{s.value}</div>
                <p className="text-muted-foreground text-sm">{s.label}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>

    <section className="py-[100px]" style={{ backgroundColor: "hsl(var(--hero-bg))" }}>
      <div className="section-container max-w-3xl mx-auto">
        <motion.h2 className="heading-display text-2xl md:text-3xl text-center mb-12" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.6 }}>
          <span className="text-destructive">SANS SITE</span> VS <span className="text-primary">AVEC SITE</span>
        </motion.h2>
        <div className="space-y-4">
          {sansAvec.map((row, i) => (
            <motion.div key={i} className="grid grid-cols-1 md:grid-cols-2 gap-4" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}>
              <div className="relative rounded-xl">
                <GlowingEffect spread={30} glow proximity={50} inactiveZone={0.01} borderWidth={2} variant="white" disabled={false} />
                <div className="relative z-10 flex items-center gap-3 bg-destructive/10 rounded-xl p-4">
                  <XCircle className="text-destructive flex-shrink-0" size={20} /><span className="text-sm text-foreground">{row.sans}</span>
                </div>
              </div>
              <div className="relative rounded-xl">
                <GlowingEffect spread={30} glow proximity={50} inactiveZone={0.01} borderWidth={2} disabled={false} />
                <div className="relative z-10 flex items-center gap-3 bg-primary/10 rounded-xl p-4">
                  <CheckCircle className="text-primary flex-shrink-0" size={20} /><span className="text-sm text-foreground">{row.avec}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-[100px]" style={{ backgroundColor: "hsl(var(--section-alt-bg))" }}>
      <div className="section-container">
        <motion.h2 className="heading-display text-2xl md:text-3xl text-center mb-12" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.6 }}>
          LES AVANTAGES <span className="text-primary">CONCRETS</span>
        </motion.h2>
        <motion.div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-4xl mx-auto" variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }}>
          {advantages.map((feature, i) => (
            <motion.div key={i} variants={fadeUp}><FeatureCard feature={feature} /></motion.div>
          ))}
        </motion.div>
      </div>
    </section>

    <CtaSection
      title="Ne laissez plus vos clients partir"
      description="Chaque jour sans site, c'est du chiffre d'affaires perdu. Passez à l'action maintenant."
      buttonText="Obtenir mon site web"
      buttonUrl="/contact"
      items={["Livraison en 14 jours", "À partir de 497€", "Devis gratuit", "Sans engagement"]}
    />
  </Layout>
);

export default PourquoiPage;
