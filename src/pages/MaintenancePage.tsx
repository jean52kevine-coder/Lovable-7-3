import { Link } from "react-router-dom";
import AnimatedSection from "@/components/AnimatedSection";
import Layout from "@/components/Layout";
import { Wrench, Check, ArrowRight } from "lucide-react";
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

const MaintenancePage = () => (
  <Layout>
    <AnimatedSection className="section-padding bg-background">
      <div className="section-container text-center">
        <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
          <Wrench className="text-primary" size={32} />
        </div>
        <h1 className="heading-display text-4xl md:text-6xl mb-4">
          <span className="text-gradient">Maintenance</span> web
        </h1>
        <p className="text-muted-foreground text-lg max-w-xl mx-auto">
          Gardez votre site à jour, sécurisé et performant. On s'en occupe pour vous.
        </p>
      </div>
    </AnimatedSection>

    <AnimatedSection className="section-padding bg-card">
      <div className="section-container">
        <h2 className="heading-display text-2xl md:text-3xl text-center mb-12">Nos formules</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {formules.map((f, i) => (
            <div
              key={i}
              className={`card-altera flex flex-col ${f.highlighted ? "border-2 border-primary relative" : ""}`}
            >
              {f.highlighted && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">
                  Populaire
                </span>
              )}
              <h3 className="font-display font-bold text-xl mb-2">{f.name}</h3>
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
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>

    <AnimatedSection className="section-padding bg-background">
      <div className="section-container text-center">
        <h2 className="heading-display text-2xl md:text-4xl mb-6">
          Une question sur nos <span className="text-gradient">formules</span> ?
        </h2>
        <Link to="/contact" className="btn-primary text-lg">
          Nous contacter <ArrowRight className="ml-2 inline" size={20} />
        </Link>
      </div>
    </AnimatedSection>
  </Layout>
);

export default MaintenancePage;
