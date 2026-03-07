import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import { Globe, Check, ArrowRight, Users, Briefcase, Store, ChefHat, Dumbbell } from "lucide-react";
import { CtaSection } from "@/components/ui/cta-section";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { BorderBeam } from "@/components/ui/border-beam";
import heroVitrine from "@/assets/hero-vitrine.jpg";

const inclus = [
  "Design moderne et personnalisé",
  "Jusqu'à 5 pages",
  "Responsive mobile & tablette",
  "Optimisation SEO de base",
  "Formulaire de contact",
  "Hébergement première année inclus",
  "Certificat SSL (HTTPS)",
  "Livraison en 14 jours ouvrés",
];

const cibles = [
  { icon: Briefcase, label: "Artisans (plombiers, électriciens, menuisiers…)" },
  { icon: Store, label: "Commerçants de proximité" },
  { icon: Users, label: "Professions libérales" },
  { icon: ChefHat, label: "Restaurants et traiteurs" },
  { icon: Dumbbell, label: "Coachs et consultants" },
];

const faqs = [
  { q: "Combien de temps pour avoir mon site ?", a: "Votre site est livré en 14 jours ouvrés après validation du contenu." },
  { q: "Dois-je fournir le contenu ?", a: "Nous pouvons rédiger le contenu pour vous. Vous n'avez qu'à valider." },
  { q: "Le site est-il modifiable ensuite ?", a: "Oui, vous pouvez demander des modifications ou souscrire à notre offre maintenance." },
  { q: "Y a-t-il des frais cachés ?", a: "Aucun. Le prix affiché est le prix final. L'hébergement est inclus la première année." },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const SiteVitrinePage = () => (
  <Layout>
    {/* Hero */}
    <section className="relative py-24 md:py-32 overflow-hidden">
      <img src={heroVitrine} alt="" className="absolute inset-0 w-full h-full object-cover opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/40" />
      <motion.div
        className="section-container text-center relative z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
          <Globe className="text-primary" size={32} />
        </div>
        <h1 className="heading-display text-4xl md:text-6xl mb-4">
          SITE <span className="text-primary">VITRINE</span>
        </h1>
        <p className="text-primary heading-display text-3xl mb-4">497 €</p>
        <p className="font-dm text-lg max-w-xl mx-auto text-muted-foreground">
          Présentez votre activité avec un site moderne qui inspire confiance et attire de nouveaux clients.
        </p>
      </motion.div>
    </section>

    {/* Ce qui est inclus - with BorderBeam card */}
    <section className="py-[100px]" style={{ backgroundColor: "hsl(var(--section-alt-bg))" }}>
      <div className="section-container">
        <motion.h2
          className="heading-display text-2xl md:text-3xl text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6 }}
        >
          CE QUI EST <span className="text-primary">INCLUS</span>
        </motion.h2>
        <div className="relative max-w-2xl mx-auto rounded-2xl p-8 md:p-10 overflow-hidden" style={{ backgroundColor: "hsl(var(--card-dark))", border: "1px solid hsl(var(--border-green))" }}>
          <BorderBeam size={300} duration={20} />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {inclus.map((item, i) => (
              <motion.div
                key={i}
                className="flex items-center gap-3"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <Check className="text-primary flex-shrink-0" size={20} />
                <span className="text-foreground text-sm">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* À qui ça s'adresse */}
    <section className="py-[100px]" style={{ backgroundColor: "hsl(var(--hero-bg))" }}>
      <div className="section-container">
        <motion.h2
          className="heading-display text-2xl md:text-3xl text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6 }}
        >
          À QUI ÇA <span className="text-primary">S'ADRESSE</span>
        </motion.h2>
        <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
          {cibles.map((c, i) => (
            <motion.div
              key={i}
              className="flex items-center gap-3 px-5 py-3 rounded-xl border border-border bg-card transition-all hover:border-primary/40"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <c.icon className="text-primary flex-shrink-0" size={18} />
              <span className="text-sm text-muted-foreground">{c.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Pourquoi maintenant */}
    <section className="py-[100px]" style={{ backgroundColor: "hsl(var(--section-alt-bg))" }}>
      <div className="section-container text-center max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="heading-display text-2xl md:text-3xl mb-6">
            POURQUOI <span className="text-primary">MAINTENANT</span> ?
          </h2>
          <p className="font-dm text-muted-foreground text-base leading-relaxed mb-4">
            Chaque jour sans site web, ce sont des clients qui vont chez vos concurrents.
          </p>
          <p className="font-dm text-muted-foreground text-base leading-relaxed">
            <span className="text-primary font-semibold">80%</span> des consommateurs recherchent un professionnel en ligne avant de le contacter.
            Ne laissez plus cette opportunité à d'autres.
          </p>
        </motion.div>
      </div>
    </section>

    {/* FAQ with TracingBeam */}
    <section className="py-[100px]" style={{ backgroundColor: "hsl(var(--hero-bg))" }}>
      <div className="section-container">
        <motion.h2
          className="heading-display text-2xl md:text-3xl text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6 }}
        >
          QUESTIONS <span className="text-primary">FRÉQUENTES</span>
        </motion.h2>
        <TracingBeam>
          <div className="space-y-8 pl-8 md:pl-12">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                className="rounded-xl p-6"
                style={{ backgroundColor: "hsl(var(--card-dark))", border: "1px solid hsl(var(--border-green))" }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <h3 className="font-display font-bold text-foreground mb-2">{faq.q}</h3>
                <p className="text-muted-foreground text-sm">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </TracingBeam>
      </div>
    </section>

    {/* CTA */}
    <CtaSection
      title="Lancez votre site vitrine"
      description="14 jours, 497€, tout inclus. On s'occupe de tout."
      buttonText="Demander un devis gratuit"
      buttonUrl="/contact"
    />
  </Layout>
);

export default SiteVitrinePage;
