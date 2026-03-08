import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Layout from "@/components/Layout";
import { CheckCircle, XCircle, ArrowRight, Eye, Mail, Euro, BarChart3 } from "lucide-react";
import BlurReveal from "@/components/animations/BlurReveal";
import ScaleSection from "@/components/animations/ScaleSection";
import TextSplit from "@/components/animations/TextSplit";
import { StaggerContainer, itemVariants } from "@/components/animations/StaggerContainer";
import NumberFlow from "@number-flow/react";

/* ─── DATA ─── */
const statsData = [
  { value: 97, suffix: "%", label: "des consommateurs utilisent internet pour trouver un professionnel local" },
  { value: 75, suffix: "%", label: "des internautes jugent la crédibilité d'une entreprise sur son site web" },
  { value: 3, suffix: "x", label: "plus de contacts pour les entreprises avec un site optimisé vs sans site" },
  { value: 24, suffix: "/7", label: "votre site travaille pour vous, même la nuit, le weekend et les jours fériés" },
];

const sansItems = [
  "Invisible sur Google — vos concurrents captent vos clients",
  "Dépendant du bouche-à-oreille — croissance lente et aléatoire",
  "Image peu professionnelle — les prospects doutent de vous",
  "Fermé à 18h — vous ratez des demandes le soir et le weekend",
  "Aucune demande en ligne — 0 client acquis via internet",
  "Impossible de se différencier — vous ressemblez à tout le monde",
];

const avecItems = [
  "Visible sur Google — vos clients vous trouvent en quelques secondes",
  "Croissance automatique — votre site attire des clients 24h/24",
  "Image professionnelle — les prospects vous font immédiatement confiance",
  "Ouvert 24/7 — recevez des demandes même pendant votre sommeil",
  "Entre 3 et 15 demandes/mois — des clients qui viennent à vous",
  "Vous vous démarquez — une identité unique qui marque les esprits",
];

const secteurs: Record<string, number> = { "Artisan": 380, "Commerçant": 320, "Restaurant": 450, "Coach / Consultant": 260, "Profession libérale": 310, "Autre": 280 };
const zones: Record<string, number> = { "Grande ville (+200k hab)": 1.9, "Ville moyenne": 1.4, "Petite ville": 1.0, "Village": 0.65 };

const temoignages = [
  { emoji: "🔧", name: "Thomas B., Plombier Lyon", badge: "+340% de demandes en ligne", text: "Avant mon site, j'avais 1 ou 2 appels par semaine via internet. Maintenant j'en reçois presque tous les jours. Mon agenda est plein 3 semaines à l'avance." },
  { emoji: "🌸", name: "Sophie M., Fleuriste Bordeaux", badge: "+180% de visibilité locale", text: "Je n'aurais jamais pensé qu'un site de 497€ pouvait transformer mon business. Mes clientes me trouvent sur Google, commandent pour des mariages, des événements. C'est incroyable." },
  { emoji: "🍕", name: "Ahmed T., Restaurateur Nantes", badge: "+55% de réservations", text: "Les gens cherchaient mon restaurant sur Google et ne trouvaient rien. Maintenant j'ai une page avec le menu, les horaires, les photos. Les réservations ont explosé." },
];

/* ─── PAGE ─── */
const PourquoiPage = () => {
  const [secteur, setSecteur] = useState("Artisan");
  const [zone, setZone] = useState("Ville moyenne");
  const [valeurClient, setValeurClient] = useState(350);

  const results = useMemo(() => {
    const visiteurs = Math.round(secteurs[secteur] * zones[zone]);
    const leads = Math.round(visiteurs * 0.042);
    const caMensuel = Math.round(leads * valeurClient * 0.28);
    const caAnnuel = caMensuel * 12;
    const roi = Math.round(((caAnnuel - 497) / 497) * 100);
    return { visiteurs, leads, caMensuel, roi };
  }, [secteur, zone, valeurClient]);

  return (
    <Layout>
      {/* HERO */}
      <section className="relative py-28 md:py-36 overflow-hidden" style={{ backgroundColor: "#0a0f0a" }}>
        <div className="absolute inset-0 opacity-25" style={{ backgroundImage: "radial-gradient(circle, #1DB954 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
        <div className="section-container text-center relative z-10">
          <TextSplit className="heading-display text-foreground" style={{ fontSize: "clamp(40px,5.5vw,72px)" }} as="h1">
            POURQUOI VOTRE ENTREPRISE A
          </TextSplit>
          <BlurReveal delay={0.4}>
            <span className="heading-display text-primary block" style={{ fontSize: "clamp(40px,5.5vw,72px)" }}>BESOIN D'UN SITE WEB ?</span>
          </BlurReveal>
          <BlurReveal delay={0.55}>
            <p className="font-dm text-lg max-w-2xl mx-auto mt-6 text-muted-foreground">
              En 2025, ne pas avoir de site internet, c'est donner vos clients à vos concurrents. Voici pourquoi.
            </p>
          </BlurReveal>
        </div>
      </section>

      {/* STATS */}
      <section className="py-[100px]" style={{ backgroundColor: "#0d130d" }}>
        <div className="section-container">
          <BlurReveal className="text-center mb-14">
            <h2 className="heading-display text-2xl md:text-4xl">
              LES CHIFFRES PARLENT <span className="text-primary">D'EUX-MÊMES</span>
            </h2>
          </BlurReveal>
          <ScaleSection>
            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={0.12}>
              {statsData.map((s, i) => (
                <motion.div key={i} variants={itemVariants} className="text-center rounded-xl p-6 card-shimmer" style={{ backgroundColor: "#111811", border: "1px solid #1a2e1a" }}>
                  <div className="text-primary heading-display text-4xl md:text-5xl mb-3">{s.value}{s.suffix}</div>
                  <p className="font-dm text-sm text-muted-foreground">{s.label}</p>
                </motion.div>
              ))}
            </StaggerContainer>
          </ScaleSection>
        </div>
      </section>

      {/* SANS VS AVEC */}
      <section className="py-[100px]" style={{ backgroundColor: "#0a0f0a" }}>
        <div className="section-container">
          <BlurReveal className="text-center mb-14">
            <h2 className="heading-display text-2xl md:text-4xl">
              <span className="text-destructive">SANS SITE</span> VS <span className="text-primary">AVEC ALTÉRA</span>
            </h2>
          </BlurReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {/* Sans */}
            <div className="rounded-2xl p-6" style={{ backgroundColor: "rgba(239,68,68,0.05)", border: "1px solid rgba(239,68,68,0.2)" }}>
              <StaggerContainer className="space-y-3" staggerDelay={0.08}>
                {sansItems.map((item, i) => (
                  <motion.div key={i} variants={itemVariants} className="flex items-start gap-3">
                    <XCircle className="text-destructive flex-shrink-0 mt-0.5" size={18} />
                    <span className="text-sm text-foreground">{item}</span>
                  </motion.div>
                ))}
              </StaggerContainer>
            </div>
            {/* Avec */}
            <div className="rounded-2xl p-6" style={{ backgroundColor: "rgba(29,185,84,0.05)", border: "1px solid rgba(29,185,84,0.2)" }}>
              <StaggerContainer className="space-y-3" staggerDelay={0.08}>
                {avecItems.map((item, i) => (
                  <motion.div key={i} variants={itemVariants} className="flex items-start gap-3">
                    <CheckCircle className="text-primary flex-shrink-0 mt-0.5" size={18} />
                    <span className="text-sm text-foreground">{item}</span>
                  </motion.div>
                ))}
              </StaggerContainer>
            </div>
          </div>
        </div>
      </section>

      {/* SIMULATEUR ROI */}
      <section className="py-[100px]" style={{ backgroundColor: "#0d130d" }}>
        <div className="section-container">
          <BlurReveal className="text-center mb-12">
            <h2 className="heading-display text-2xl md:text-4xl mb-3">
              ESTIMEZ CE QUE VOUS PERDEZ <span className="text-primary">SANS SITE</span>
            </h2>
            <p className="font-dm text-muted-foreground">Renseignez votre activité pour une estimation personnalisée.</p>
          </BlurReveal>

          <ScaleSection>
            <div className="max-w-[680px] mx-auto rounded-2xl p-8 md:p-10" style={{ backgroundColor: "#111811", border: "1px solid #1a2e1a" }}>
              {/* Inputs */}
              <div className="space-y-6 mb-8">
                <div>
                  <label className="block font-display font-bold text-foreground text-sm mb-2">Votre secteur</label>
                  <select
                    value={secteur}
                    onChange={(e) => setSecteur(e.target.value)}
                    className="w-full rounded-lg p-3 text-sm bg-background border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    {Object.keys(secteurs).map((s) => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block font-display font-bold text-foreground text-sm mb-2">Votre zone</label>
                  <select
                    value={zone}
                    onChange={(e) => setZone(e.target.value)}
                    className="w-full rounded-lg p-3 text-sm bg-background border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    {Object.keys(zones).map((z) => <option key={z} value={z}>{z}</option>)}
                  </select>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="font-display font-bold text-foreground text-sm">Valeur moyenne d'un client (€)</label>
                    <span className="text-primary font-bold text-lg">{valeurClient}€</span>
                  </div>
                  <input
                    type="range" min={50} max={3000} step={50} value={valeurClient}
                    onChange={(e) => setValeurClient(Number(e.target.value))}
                    className="w-full accent-primary"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground mt-1">
                    <span>50€</span><span>3 000€</span>
                  </div>
                </div>
              </div>

              {/* Results */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { icon: Eye, label: "Visiteurs/mois estimés", value: results.visiteurs },
                  { icon: Mail, label: "Nouveaux contacts/mois", value: results.leads },
                  { icon: Euro, label: "CA potentiel gagné/mois", value: results.caMensuel, suffix: "€" },
                  { icon: BarChart3, label: "ROI estimé sur 1 an", value: results.roi, suffix: "%" },
                ].map((r, i) => (
                  <div key={i} className="rounded-xl p-4 text-center" style={{ backgroundColor: "#0d130d", border: "1px solid #1a2e1a" }}>
                    <r.icon className="text-primary mx-auto mb-2" size={20} />
                    <div className="text-primary heading-display text-2xl md:text-3xl">
                      <NumberFlow value={r.value} format={{ style: "decimal" }} transformTiming={{ duration: 400, easing: "ease-out" }} />
                      {r.suffix && <span>{r.suffix}</span>}
                    </div>
                    <p className="font-dm text-xs text-muted-foreground mt-1">{r.label}</p>
                  </div>
                ))}
              </div>

              <p className="text-xs text-muted-foreground mb-6 text-center">
                *Estimations basées sur des moyennes sectorielles. Les résultats réels varient selon votre activité, votre zone et la qualité de votre site.
              </p>

              <div className="text-center">
                <Link to="/contact" className="btn-primary text-base">
                  Obtenir mon site maintenant <ArrowRight className="ml-2 inline" size={16} />
                </Link>
              </div>
            </div>
          </ScaleSection>
        </div>
      </section>

      {/* TÉMOIGNAGES */}
      <section className="py-[100px]" style={{ backgroundColor: "#0a0f0a" }}>
        <div className="section-container">
          <BlurReveal className="text-center mb-14">
            <h2 className="heading-display text-2xl md:text-4xl">
              ILS L'ONT FAIT. <span className="text-primary">VOICI LEURS RÉSULTATS.</span>
            </h2>
          </BlurReveal>
          <ScaleSection>
            <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6" staggerDelay={0.15}>
              {temoignages.map((t, i) => (
                <motion.div key={i} variants={itemVariants} className="rounded-xl p-6 card-shimmer" style={{ backgroundColor: "#111811", border: "1px solid #1a2e1a" }}>
                  <span className="text-3xl mb-3 block">{t.emoji}</span>
                  <h4 className="font-display font-bold text-foreground mb-2">{t.name}</h4>
                  <span className="inline-block text-xs font-bold px-3 py-1 rounded-full mb-3 text-primary" style={{ backgroundColor: "rgba(29,185,84,0.12)" }}>
                    {t.badge}
                  </span>
                  <p className="font-dm text-sm mb-3" style={{ color: "rgba(255,255,255,0.6)" }}>"{t.text}"</p>
                  <span className="text-xs text-muted-foreground italic">*Résultat fictif illustratif</span>
                </motion.div>
              ))}
            </StaggerContainer>
          </ScaleSection>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-[120px] px-6 overflow-hidden" style={{ background: "linear-gradient(160deg, #0d1f13 0%, #0a0f0a 60%)", borderTop: "1px solid #1a2e1a" }}>
        <div className="section-container text-center relative z-10">
          <BlurReveal>
            <h2 className="heading-display mb-6" style={{ fontSize: "clamp(32px, 4vw, 56px)" }}>
              NE LAISSEZ PLUS VOS CLIENTS<br /><span className="text-primary">PARTIR CHEZ VOS CONCURRENTS</span>
            </h2>
          </BlurReveal>
          <BlurReveal delay={0.15}>
            <p className="font-dm text-lg mb-10 mx-auto max-w-lg" style={{ color: "rgba(255,255,255,0.6)" }}>
              Chaque jour sans site, c'est du chiffre d'affaires perdu. ALTÉRA vous livre votre site en 14 jours.
            </p>
          </BlurReveal>
          <BlurReveal delay={0.3}>
            <Link to="/contact" className="btn-primary text-lg px-10 py-[18px]">
              Obtenir mon site maintenant <ArrowRight className="ml-2 inline" size={18} />
            </Link>
          </BlurReveal>
          <BlurReveal delay={0.45}>
            <div className="flex flex-wrap justify-center gap-6 mt-8 font-dm text-[13px]" style={{ color: "rgba(255,255,255,0.4)" }}>
              <span>✓ Devis gratuit sous 24h</span>
              <span>✓ 14 jours de livraison</span>
              <span>✓ 497€ tout inclus</span>
            </div>
          </BlurReveal>
        </div>
      </section>
    </Layout>
  );
};

export default PourquoiPage;
