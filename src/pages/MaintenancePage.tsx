import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import { Wrench, Check, ArrowRight } from "lucide-react";
import { BorderBeam } from "@/components/ui/border-beam";
import { CtaSection } from "@/components/ui/cta-section";
import heroMaintenance from "@/assets/hero-maintenance.jpg";

const formules = [
  {
    name: "Essentielle",
    price: "39",
    features: ["Mises à jour mensuelles", "Sauvegarde hebdomadaire", "Support par email", "Monitoring de base", "Rapport trimestriel"],
    highlighted: false,
  },
  {
    name: "Professionnelle",
    price: "49",
    features: ["Mises à jour bi-mensuelles", "Sauvegarde quotidienne", "Support email & téléphone", "Monitoring avancé", "Rapport mensuel", "Modifications mineures incluses"],
    highlighted: true,
  },
  {
    name: "Premium",
    price: "59",
    features: ["Mises à jour hebdomadaires", "Sauvegarde en temps réel", "Support prioritaire 7j/7", "Monitoring 24/7", "Rapport mensuel détaillé", "Modifications illimitées", "Optimisation performance"],
    highlighted: false,
  },
];

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const MaintenancePage = () => (
  <Layout>
    {/* Hero */}
    <section className="relative py-24 md:py-32 overflow-hidden">
      <img src={heroMaintenance} alt="" className="absolute inset-0 w-full h-full object-cover opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/40" />
      <motion.div
        className="section-container text-center relative z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
          <Wrench className="text-primary" size={32} />
        </div>
        <h1 className="heading-display text-4xl md:text-6xl mb-4">
          <span className="text-primary">MAINTENANCE</span> WEB
        </h1>
        <p className="font-dm text-lg max-w-xl mx-auto text-muted-foreground">
          Gardez votre site à jour, sécurisé et performant. On s'en occupe pour vous.
        </p>
      </motion.div>
    </section>

    {/* Formules */}
    <section className="py-[100px]" style={{ backgroundColor: "hsl(var(--section-alt-bg))" }}>
      <div className="section-container">
        <motion.h2
          className="heading-display text-2xl md:text-3xl text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6 }}
        >
          NOS <span className="text-primary">FORMULES</span>
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {formules.map((f, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className={`relative rounded-2xl p-7 flex flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1.5 ${
                f.highlighted ? "ring-2 ring-primary" : ""
              }`}
              style={{ backgroundColor: "hsl(var(--card-dark))", border: "1px solid hsl(var(--border-green))" }}
            >
              {f.highlighted && (
                <>
                  <span className="absolute -top-0 left-1/2 -translate-x-1/2 translate-y-0 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-b-lg">
                    Populaire
                  </span>
                  <BorderBeam size={200} duration={12} />
                </>
              )}
              <h3 className="font-display font-bold text-xl mb-2 mt-4">{f.name}</h3>
              <div className="mb-6">
                <span className="text-primary heading-display text-3xl">{f.price}€</span>
                <span className="text-muted-foreground text-sm">/mois</span>
              </div>
              <ul className="space-y-3 flex-1 mb-8">
                {f.features.map((feat, j) => (
                  <li key={j} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Check className="text-primary flex-shrink-0" size={16} />
                    {feat}
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className={f.highlighted ? "btn-primary text-center text-sm" : "btn-outline text-center text-sm"}
              >
                Choisir cette formule
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>

    {/* CTA */}
    <CtaSection
      title="Une question sur nos formules ?"
      description="On vous aide à choisir la formule adaptée à vos besoins."
      buttonText="Nous contacter"
      buttonUrl="/contact"
      items={[
        "Sans engagement",
        "Résiliation à tout moment",
        "Support réactif",
        "Rapport de suivi",
      ]}
    />
  </Layout>
);

export default MaintenancePage;
