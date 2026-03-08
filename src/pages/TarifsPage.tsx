import Layout from "@/components/Layout";
import { Pricing } from "@/components/ui/pricing-premium";
import { PricingComparison } from "@/components/ui/pricing-comparison";
import { CtaSection } from "@/components/ui/cta-section";
import BlurReveal from "@/components/animations/BlurReveal";
import TextSplit from "@/components/animations/TextSplit";

const creationPlans = [
  {
    name: "Site Vitrine",
    price: "497",
    yearlyPrice: "447",
    period: "",
    features: [
      "Design sur-mesure",
      "Jusqu'à 5 pages",
      "Responsive mobile",
      "SEO optimisé",
      "Formulaire de contact",
      "Hébergement 1 an inclus",
      "Livraison 14 jours",
    ],
    description: "Idéal pour artisans et indépendants",
    buttonText: "Choisir Vitrine",
    href: "/services/site-vitrine",
    isPopular: false,
  },
  {
    name: "Site E-commerce",
    price: "747",
    yearlyPrice: "672",
    period: "",
    features: [
      "Boutique complète",
      "Jusqu'à 50 produits",
      "Paiement sécurisé Stripe",
      "Gestion des stocks",
      "Responsive mobile",
      "SEO avancé",
      "Formation incluse",
    ],
    description: "Pour vendre en ligne efficacement",
    buttonText: "Choisir E-commerce",
    href: "/services/site-ecommerce",
    isPopular: true,
  },
  {
    name: "Sur-mesure",
    price: "1497",
    yearlyPrice: "1347",
    period: "",
    features: [
      "Projet personnalisé",
      "Pages illimitées",
      "Fonctionnalités avancées",
      "Intégrations API",
      "Dashboard admin",
      "Support prioritaire",
      "Accompagnement dédié",
    ],
    description: "Pour projets complexes et ambitieux",
    buttonText: "Nous contacter",
    href: "/contact",
    isPopular: false,
  },
];

const maintenancePlans = [
  {
    name: "Essentielle",
    price: "39",
    period: "/mois",
    description: "Maintenance de base",
    buttonText: "Souscrire",
    href: "/contact",
    isPopular: false,
  },
  {
    name: "Professionnelle",
    price: "49",
    period: "/mois",
    description: "Notre recommandation",
    buttonText: "Souscrire",
    href: "/contact",
    isPopular: true,
  },
  {
    name: "Premium",
    price: "59",
    period: "/mois",
    description: "Tranquillité totale",
    buttonText: "Souscrire",
    href: "/contact",
    isPopular: false,
  },
];

const maintenanceFeatures = [
  { name: "Mises à jour de sécurité", essential: true, professional: true, premium: true },
  { name: "Sauvegardes", essential: "Hebdo", professional: "Quotidienne", premium: "Temps réel" },
  { name: "Support", essential: "Email", professional: "Email & Tel", premium: "Prioritaire 7j/7" },
  { name: "Modifications mineures", essential: false, professional: "2/mois", premium: "Illimitées" },
  { name: "Monitoring 24/7", essential: false, professional: true, premium: true },
  { name: "Rapport de performance", essential: false, professional: "Mensuel", premium: "Hebdo" },
  { name: "Optimisation SEO", essential: false, professional: false, premium: true },
  { name: "Temps de réponse", essential: "48h", professional: "24h", premium: "4h" },
];

const TarifsPage = () => (
  <Layout>
    {/* Hero */}
    <section className="py-24 md:py-32" style={{ backgroundColor: "hsl(var(--hero-bg))" }}>
      <div className="section-container text-center">
        <TextSplit className="heading-display text-4xl md:text-6xl mb-4" as="h1">NOS TARIFS</TextSplit>
        <BlurReveal delay={0.2}>
          <p className="font-dm text-lg max-w-xl mx-auto text-muted-foreground">
            Des prix clairs, sans surprise. Tout est inclus.
          </p>
        </BlurReveal>
      </div>
    </section>

    {/* Creation Plans - Premium Cards */}
    <section className="py-[80px]" style={{ backgroundColor: "hsl(var(--section-alt-bg))" }}>
      <div className="section-container">
        <Pricing
          plans={creationPlans}
          title="Création de Site Web"
          description="Choisissez la formule adaptée à votre projet. Prix unique, sans abonnement caché."
        />
      </div>
    </section>

    {/* Maintenance Plans - Comparison Table */}
    <section className="py-[80px]" style={{ backgroundColor: "hsl(var(--hero-bg))" }}>
      <div className="section-container">
        <PricingComparison
          plans={maintenancePlans}
          features={maintenanceFeatures}
          title="Formules Maintenance"
          description="Gardez votre site à jour, sécurisé et performant. Sans engagement."
        />
      </div>
    </section>

    <CtaSection
      title="Convaincu ? Lancez-vous !"
      description="Devis gratuit, sans engagement. On vous répond sous 24h."
      buttonText="Demander un devis gratuit"
      buttonUrl="/contact"
    />
  </Layout>
);

export default TarifsPage;
