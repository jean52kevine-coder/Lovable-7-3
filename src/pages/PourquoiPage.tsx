import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { XCircle, CheckCircle, TrendingUp, Users, Search, Clock, Zap, Shield, Eye, Mail, BarChart3, ArrowRight } from "lucide-react";
import { FeatureCard } from "@/components/ui/grid-feature-cards";
import { CtaSection } from "@/components/ui/cta-section";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { NumberTicker } from "@/components/ui/number-ticker";
import { StatMobileSearch, StatScreenBrowse, StatBarsGrowing, StatClock } from "@/components/illustrations/SvgIllustrations";
import BlurReveal from "@/components/animations/BlurReveal";
import ScaleSection from "@/components/animations/ScaleSection";
import RotatingWords from "@/components/RotatingWords";
import { StaggerContainer, itemVariants } from "@/components/animations/StaggerContainer";
import NumberFlow from "@number-flow/react";
import heroPourquoi from "@/assets/hero-pourquoi.jpg";

const statIllustrations = [StatMobileSearch, StatScreenBrowse, StatBarsGrowing, StatClock];

const stats = [
  { value: "97%", numValue: 97, suffix: "%", label: "des consommateurs utilisent internet pour trouver un professionnel local" },
  { value: "75%", numValue: 75, suffix: "%", label: "des clients vérifient un site web avant de contacter une entreprise" },
  { value: "3x", numValue: 3, suffix: "x", label: "plus de chiffre d'affaires pour les entreprises avec un site web" },
  { value: "24/7", numValue: 24, suffix: "/7", label: "accessibilité permanente pour vos clients potentiels" },
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

const roiTestimonials = [
  {
    emoji: "🔧", name: "Thomas B., Plombier Lyon", badge: "+8 demandes/mois",
    text: "Avant mon site, je n'avais quasiment aucun contact via internet. Maintenant j'en reçois presque tous les jours. Mon agenda est plein 3 semaines à l'avance.",
  },
  {
    emoji: "🌸", name: "Sophie M., Fleuriste Bordeaux", badge: "ROI en 3 semaines",
    text: "Je n'aurais jamais pensé qu'un site de 497€ pouvait transformer mon business. En 3 semaines j'avais déjà rentabilisé l'investissement.",
  },
  {
    emoji: "🍕", name: "Ahmed T., Restaurateur Nantes", badge: "+55% réservations",
    text: "Les gens cherchaient mon restaurant et ne trouvaient rien. Maintenant j'ai le menu, les photos, les horaires. Les réservations ont explosé dès le premier mois.",
  },
];

const AnimatedStat = ({ stat, index }: { stat: typeof stats[0]; index: number }) => {
  const Illustration = statIllustrations[index];
  return (
    <div className="relative rounded-2xl">
      <GlowingEffect spread={30} glow proximity={50} inactiveZone={0.01} borderWidth={2} disabled={false} />
      <div className="relative z-10 rounded-2xl p-6 text-center" style={{ backgroundColor: "#111811", border: "1px solid #1a2e1a" }}>
        <Illustration />
        <div className="text-primary font-display font-black mb-2" style={{ fontSize: "clamp(48px, 6vw, 80px)" }}>
          <NumberTicker value={stat.numValue} />{stat.suffix}
        </div>
        <p className="text-muted-foreground text-sm font-dm text-center">{stat.label}</p>
      </div>
    </div>
  );
};

const baseVisitors: Record<string, number> = { "Artisan": 380, "Commerçant": 320, "Restaurant": 450, "Coach / Consultant": 260, "Profession libérale": 310, "Autre": 280 };
const zoneMult: Record<string, number> = { "Grande ville": 1.9, "Ville moyenne": 1.4, "Petite ville": 1.0, "Village": 0.65 };

const ROISimulator = () => {
  const [secteur, setSecteur] = useState("Artisan");
  const [zone, setZone] = useState("Ville moyenne");
  const [valeurClient, setValeurClient] = useState(350);

  const results = useMemo(() => {
    const visiteurs = Math.round(baseVisitors[secteur] * zoneMult[zone]);
    const leads = Math.round(visiteurs * 0.042);
    const ca_mensuel = Math.round(leads * valeurClient * 0.28);
    const roi = Math.round(((ca_mensuel * 12 - 497) / 497) * 100);
    return { visiteurs, leads, ca_mensuel, roi };
  }, [secteur, zone, valeurClient]);

  return (
    <section className="py-[100px]" style={{ backgroundColor: "hsl(var(--section-alt-bg) / 0.8)" }}>
      <div className="section-container">
        <BlurReveal className="text-center mb-10">
          <h2 className="heading-display text-2xl md:text-3xl">
            ESTIMEZ CE QUE VOUS PERDEZ <span className="text-primary">SANS SITE</span>
          </h2>
          <p className="font-dm text-muted-foreground mt-3">Entrez votre activité pour une estimation personnalisée.</p>
        </BlurReveal>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative max-w-[680px] mx-auto rounded-2xl"
        >
          <GlowingEffect spread={40} glow proximity={64} inactiveZone={0.01} borderWidth={2} disabled={false} />
          <div className="relative z-10 rounded-2xl p-8 md:p-10" style={{ backgroundColor: "#111811", border: "1px solid #1a2e1a" }}>
            <div className="space-y-6 mb-8">
              <div>
                <label className="font-dm font-medium text-white text-sm block mb-2">Votre secteur</label>
                <select value={secteur} onChange={(e) => setSecteur(e.target.value)} className="w-full rounded-lg px-4 py-3 text-sm font-dm bg-background border border-border text-foreground focus:border-primary focus:outline-none">
                  {Object.keys(baseVisitors).map((s) => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>
              <div>
                <label className="font-dm font-medium text-white text-sm block mb-2">Votre zone</label>
                <select value={zone} onChange={(e) => setZone(e.target.value)} className="w-full rounded-lg px-4 py-3 text-sm font-dm bg-background border border-border text-foreground focus:border-primary focus:outline-none">
                  {Object.keys(zoneMult).map((z) => <option key={z} value={z}>{z}</option>)}
                </select>
              </div>
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="font-dm font-medium text-white text-sm">Valeur moyenne d'un client</label>
                  <span className="text-primary font-bold text-lg">{valeurClient}€</span>
                </div>
                <input type="range" min="50" max="3000" step="50" value={valeurClient} onChange={(e) => setValeurClient(Number(e.target.value))} className="w-full h-2 rounded-full appearance-none cursor-pointer" style={{ background: `linear-gradient(to right, hsl(145, 63%, 42%) 0%, hsl(145, 63%, 42%) ${((valeurClient - 50) / 2950) * 100}%, rgba(255,255,255,0.1) ${((valeurClient - 50) / 2950) * 100}%, rgba(255,255,255,0.1) 100%)` }} />
                <div className="flex justify-between text-xs text-muted-foreground mt-1"><span>50€</span><span>3000€</span></div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6">
              {[
                { icon: Eye, label: "Visiteurs/mois estimés", value: results.visiteurs },
                { icon: Mail, label: "Nouveaux contacts/mois", value: results.leads },
                { icon: BarChart3, label: "CA potentiel/mois", value: results.ca_mensuel, suffix: "€" },
                { icon: TrendingUp, label: "ROI estimé sur 1 an", value: results.roi, suffix: "%" },
              ].map((r, i) => (
                <div key={i} className="rounded-xl p-4 text-center" style={{ backgroundColor: "rgba(29,185,84,0.06)", border: "1px solid rgba(29,185,84,0.15)" }}>
                  <r.icon className="text-primary mx-auto mb-2" size={20} />
                  <div className="text-2xl font-bold text-primary font-display">
                    <NumberFlow value={r.value} transformTiming={{ duration: 400, easing: "ease-out" }} />{r.suffix || ""}
                  </div>
                  <p className="text-xs text-muted-foreground font-dm mt-1">{r.label}</p>
                </div>
              ))}
            </div>

            <p className="text-[12px] text-muted-foreground font-dm text-center mb-6">*Estimations basées sur des moyennes sectorielles françaises. Les résultats varient.</p>
            <div className="text-center">
              <Link to="/contact" className="btn-primary">Obtenir mon site maintenant <ArrowRight className="ml-2 inline" size={16} /></Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const PourquoiPage = () => (
  <Layout>
    {/* Hero */}
    <section className="relative py-24 md:py-32 overflow-hidden">
      <img src={heroPourquoi} alt="" className="absolute inset-0 w-full h-full object-cover opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/40" />
      <div className="section-container text-center relative z-10">
        <BlurReveal>
          <h1 className="heading-display text-4xl md:text-6xl mb-6">
            POURQUOI AVOIR UN <RotatingWords words={["SITE WEB", "VITRINE", "E-COMMERCE", "SITE PRO"]} />
          </h1>
        </BlurReveal>
        <BlurReveal delay={0.3}>
          <p className="font-dm text-lg max-w-2xl mx-auto text-muted-foreground">En 2025, ne pas avoir de site internet c'est comme ne pas avoir de vitrine. Vos clients vous cherchent en ligne — soyez là.</p>
        </BlurReveal>
      </div>
    </section>

    {/* Stats */}
    <section className="py-[100px]" style={{ backgroundColor: "hsl(var(--section-alt-bg) / 0.8)" }}>
      <div className="section-container">
        <BlurReveal className="text-center mb-12">
          <h2 className="heading-display text-2xl md:text-3xl">LES CHIFFRES PARLENT <span className="text-primary">D'EUX-MÊMES</span></h2>
        </BlurReveal>
        <ScaleSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.5, delay: i * 0.1 }}>
                <AnimatedStat stat={s} index={i} />
              </motion.div>
            ))}
          </div>
        </ScaleSection>
      </div>
    </section>

    {/* Sans vs Avec — DO NOT TOUCH */}
    <section className="py-[100px]" style={{ backgroundColor: "hsl(var(--hero-bg) / 0.8)" }}>
      <div className="section-container max-w-3xl mx-auto">
        <BlurReveal className="text-center mb-12">
          <h2 className="heading-display text-2xl md:text-3xl"><span className="text-destructive">SANS SITE</span> VS <span className="text-primary">AVEC SITE</span></h2>
        </BlurReveal>
        <div className="space-y-4">
          {sansAvec.map((row, i) => (
            <BlurReveal key={i} delay={i * 0.1} direction="left">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
              </div>
            </BlurReveal>
          ))}
        </div>
      </div>
    </section>

    {/* ROI Simulator */}
    <ROISimulator />

    {/* Témoignages ROI */}
    <section className="py-[100px]" style={{ backgroundColor: "hsl(var(--hero-bg) / 0.8)" }}>
      <div className="section-container">
        <BlurReveal className="text-center mb-14">
          <h2 className="heading-display text-2xl md:text-3xl">
            ILS L'ONT FAIT. VOICI <span className="text-primary">LEURS RÉSULTATS.</span>
          </h2>
        </BlurReveal>
        <ScaleSection>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6" staggerDelay={0.12}>
            {roiTestimonials.map((t, i) => (
              <motion.div key={i} variants={itemVariants} className="relative rounded-xl">
                <GlowingEffect spread={30} glow proximity={50} inactiveZone={0.01} borderWidth={2} disabled={false} />
                <div className="relative z-10 rounded-xl p-6 h-full" style={{ backgroundColor: "#111811", border: "1px solid #1a2e1a" }}>
                  <span className="text-3xl block mb-4">{t.emoji}</span>
                  <span className="inline-block text-[12px] font-semibold px-3 py-1 rounded-full text-primary mb-4" style={{ background: "rgba(29,185,84,0.15)", border: "1px solid rgba(29,185,84,0.3)" }}>
                    {t.badge}
                  </span>
                  <p className="font-dm text-[15px] text-white italic leading-relaxed mb-4">"{t.text}"</p>
                  <p className="font-dm font-semibold text-sm text-white">{t.name}</p>
                  <p className="text-[11px] text-muted-foreground italic mt-2">*Résultat fictif illustratif</p>
                </div>
              </motion.div>
            ))}
          </StaggerContainer>
        </ScaleSection>
      </div>
    </section>

    {/* Avantages concrets */}
    <section className="py-[100px]" style={{ backgroundColor: "hsl(var(--section-alt-bg) / 0.8)" }}>
      <div className="section-container">
        <BlurReveal className="text-center mb-12">
          <h2 className="heading-display text-2xl md:text-3xl">LES AVANTAGES <span className="text-primary">CONCRETS</span></h2>
        </BlurReveal>
        <ScaleSection>
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-4xl mx-auto" staggerDelay={0.12}>
            {advantages.map((feature, i) => (
              <motion.div key={i} variants={itemVariants}><FeatureCard feature={feature} /></motion.div>
            ))}
          </StaggerContainer>
        </ScaleSection>
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
