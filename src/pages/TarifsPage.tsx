import { Link } from "react-router-dom";
import AnimatedSection from "@/components/AnimatedSection";
import Layout from "@/components/Layout";
import { Globe, ShoppingCart, Check, ArrowRight } from "lucide-react";

const offres = [
  {
    icon: Globe,
    title: "Site Vitrine",
    price: "486",
    features: ["Design sur-mesure", "Jusqu'à 5 pages", "Responsive mobile", "SEO optimisé", "Formulaire de contact", "Hébergement 1 an inclus", "Livraison 7 jours"],
    link: "/services/site-vitrine",
  },
  {
    icon: ShoppingCart,
    title: "Site E-commerce",
    price: "747",
    features: ["Boutique complète", "Jusqu'à 50 produits", "Paiement sécurisé", "Gestion des stocks", "Responsive mobile", "SEO avancé", "Livraison 10 jours"],
    link: "/services/site-ecommerce",
  },
];

const maintenance = [
  { name: "Essentielle", price: "39", features: ["Mises à jour mensuelles", "Sauvegarde hebdo", "Support email"] },
  { name: "Professionnelle", price: "49", features: ["Mises à jour bi-mensuelles", "Sauvegarde quotidienne", "Support email & tél", "Modifications mineures"] },
  { name: "Premium", price: "59", features: ["Mises à jour hebdo", "Sauvegarde temps réel", "Support prioritaire 7j/7", "Modifications illimitées"] },
];

const TarifsPage = () => (
  <Layout>
    <AnimatedSection className="section-padding bg-background">
      <div className="section-container text-center">
        <h1 className="heading-display text-4xl md:text-6xl mb-4">
          Nos <span className="text-gradient">tarifs</span>
        </h1>
        <p className="text-muted-foreground text-lg max-w-xl mx-auto">
          Des prix clairs, sans surprise. Tout est inclus.
        </p>
      </div>
    </AnimatedSection>

    <AnimatedSection className="section-padding bg-card">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {offres.map((o, i) => (
            <div key={i} className="card-altera flex flex-col">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <o.icon className="text-primary" size={24} />
              </div>
              <h2 className="font-display font-bold text-2xl mb-2">{o.title}</h2>
              <div className="mb-6">
                <span className="text-primary heading-display text-4xl">{o.price}€</span>
              </div>
              <ul className="space-y-3 flex-1 mb-8">
                {o.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Check className="text-primary flex-shrink-0" size={16} />
                    {f}
                  </li>
                ))}
              </ul>
              <Link to={o.link} className="btn-primary text-center text-sm">
                En savoir plus <ArrowRight className="ml-2 inline" size={16} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>

    <AnimatedSection className="section-padding bg-background">
      <div className="section-container">
        <h2 className="heading-display text-2xl md:text-3xl text-center mb-12">
          Formules <span className="text-gradient">maintenance</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {maintenance.map((m, i) => (
            <div key={i} className="card-altera text-center">
              <h3 className="font-display font-bold text-xl mb-2">{m.name}</h3>
              <div className="mb-6">
                <span className="text-primary heading-display text-3xl">{m.price}€</span>
                <span className="text-muted-foreground text-sm">/mois</span>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {m.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-2 justify-center">
                    <Check className="text-primary flex-shrink-0" size={14} />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>

    <AnimatedSection className="section-padding bg-card">
      <div className="section-container text-center">
        <h2 className="heading-display text-2xl md:text-4xl mb-6">
          Convaincu ? <span className="text-gradient">Lancez-vous !</span>
        </h2>
        <Link to="/contact" className="btn-primary text-lg">
          Demander un devis gratuit <ArrowRight className="ml-2 inline" size={20} />
        </Link>
      </div>
    </AnimatedSection>
  </Layout>
);

export default TarifsPage;
