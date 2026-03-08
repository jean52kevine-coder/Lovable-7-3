import Layout from "@/components/Layout";
import { Pricing } from "@/components/ui/pricing-premium";
import { CtaSection } from "@/components/ui/cta-section";
import BlurReveal from "@/components/animations/BlurReveal";
import TextSplit from "@/components/animations/TextSplit";

const plans = [
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
    yearlyPrice: "35",
    period: "/mois",
    features: [
      "Mises à jour mensuelles",
      "Sauvegarde hebdomadaire",
      "Support email",
    ],
    description: "Maintenance de base",
    buttonText: "Souscrire",
    href: "/contact",
    isPopular: false,
  },
  {
    name: "Professionnelle",
    price: "49",
    yearlyPrice: "44",
    period: "/mois",
    features: [
      "Mises à jour bi-mensuelles",
      "Sauvegarde quotidienne",
      "Support email & téléphone",
      "Modifications mineures",
    ],
    description: "Notre recommandation",
    buttonText: "Souscrire",
    href: "/contact",
    isPopular: true,
  },
  {
    name: "Premium",
    price: "59",
    yearlyPrice: "53",
    period: "/mois",
    features: [
      "Mises à jour hebdomadaires",
      "Sauvegarde temps réel",
      "Support prioritaire 7j/7",
      "Modifications illimitées",
    ],
    description: "Tranquillité totale",
    buttonText: "Souscrire",
    href: "/contact",
    isPopular: false,
  },
];

const TarifsPage = () => (
  <Layout>
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

    <section className="py-[80px]" style={{ backgroundColor: "hsl(var(--section-alt-bg))" }}>
      <div className="section-container">
        <Pricing
          plans={plans}
          title="Création de Site Web"
          description="Choisissez la formule adaptée à votre projet. Prix unique, sans abonnement caché."
        />
      </div>
    </section>

    <section className="py-[80px]" style={{ backgroundColor: "hsl(var(--hero-bg))" }}>
      <div className="section-container">
        <Pricing
          plans={maintenancePlans}
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
