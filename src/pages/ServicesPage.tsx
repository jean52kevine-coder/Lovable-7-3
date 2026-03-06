import { Link } from "react-router-dom";
import AnimatedSection from "@/components/AnimatedSection";
import Layout from "@/components/Layout";
import { Globe, ShoppingCart, Wrench, ArrowRight } from "lucide-react";
import heroServices from "@/assets/hero-services.jpg";

const services = [
  {
    icon: Globe,
    title: "Site Vitrine",
    price: "486 €",
    features: ["Design sur-mesure", "Responsive mobile", "Optimisation SEO", "Formulaire de contact", "Livraison en 7 jours"],
    link: "/services/site-vitrine",
  },
  {
    icon: ShoppingCart,
    title: "Site E-commerce",
    price: "747 €",
    features: ["Boutique complète", "Paiement sécurisé", "Gestion des stocks", "Tableau de bord", "Livraison en 10 jours"],
    link: "/services/site-ecommerce",
  },
  {
    icon: Wrench,
    title: "Maintenance",
    price: "dès 39 €/mois",
    features: ["Mises à jour régulières", "Sauvegardes automatiques", "Support technique", "Monitoring 24/7", "Rapport mensuel"],
    link: "/services/maintenance",
  },
];

const ServicesPage = () => (
  <Layout>
    <AnimatedSection className="section-padding bg-background">
      <div className="section-container text-center">
        <h1 className="heading-display text-4xl md:text-6xl mb-6">
          Nos <span className="text-gradient">services</span>
        </h1>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Des solutions web complètes, adaptées aux artisans, commerçants et PME locales.
        </p>
      </div>
    </AnimatedSection>

    <AnimatedSection className="section-padding bg-card">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <div key={i} className="card-altera flex flex-col">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <s.icon className="text-primary" size={24} />
              </div>
              <h2 className="font-display font-bold text-2xl mb-2">{s.title}</h2>
              <p className="text-primary font-bold text-xl mb-6">{s.price}</p>
              <ul className="space-y-3 mb-8 flex-1">
                {s.features.map((f, j) => (
                  <li key={j} className="text-muted-foreground text-sm flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <Link to={s.link} className="btn-primary text-center text-sm">
                En savoir plus <ArrowRight className="ml-2 inline" size={16} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  </Layout>
);

export default ServicesPage;
