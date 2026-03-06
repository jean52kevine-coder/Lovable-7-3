import { Link } from "react-router-dom";
import AnimatedSection from "@/components/AnimatedSection";
import Layout from "@/components/Layout";
import { Globe, Check, ArrowRight } from "lucide-react";

const inclus = [
  "Design moderne et personnalisé",
  "Jusqu'à 5 pages",
  "Responsive mobile & tablette",
  "Optimisation SEO de base",
  "Formulaire de contact",
  "Hébergement première année inclus",
  "Certificat SSL (HTTPS)",
  "Livraison en 7 jours ouvrés",
];

const cibles = [
  "Artisans (plombiers, électriciens, menuisiers…)",
  "Commerçants de proximité",
  "Professions libérales",
  "Restaurants et traiteurs",
  "Coachs et consultants",
];

const faqs = [
  { q: "Combien de temps pour avoir mon site ?", a: "Votre site est livré en 7 jours ouvrés après validation du contenu." },
  { q: "Dois-je fournir le contenu ?", a: "Nous pouvons rédiger le contenu pour vous. Vous n'avez qu'à valider." },
  { q: "Le site est-il modifiable ensuite ?", a: "Oui, vous pouvez demander des modifications ou souscrire à notre offre maintenance." },
  { q: "Y a-t-il des frais cachés ?", a: "Aucun. Le prix affiché est le prix final. L'hébergement est inclus la première année." },
];

const SiteVitrinePage = () => (
  <Layout>
    <AnimatedSection className="section-padding bg-background">
      <div className="section-container text-center">
        <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
          <Globe className="text-primary" size={32} />
        </div>
        <h1 className="heading-display text-4xl md:text-6xl mb-4">
          Site <span className="text-gradient">Vitrine</span>
        </h1>
        <p className="text-primary heading-display text-3xl mb-4">486 €</p>
        <p className="text-muted-foreground text-lg max-w-xl mx-auto">
          Présentez votre activité avec un site moderne qui inspire confiance et attire de nouveaux clients.
        </p>
      </div>
    </AnimatedSection>

    <AnimatedSection className="section-padding bg-card">
      <div className="section-container">
        <h2 className="heading-display text-2xl md:text-3xl text-center mb-10">Ce qui est inclus</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
          {inclus.map((item, i) => (
            <div key={i} className="flex items-center gap-3">
              <Check className="text-primary flex-shrink-0" size={20} />
              <span className="text-foreground text-sm">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>

    <AnimatedSection className="section-padding bg-background">
      <div className="section-container">
        <h2 className="heading-display text-2xl md:text-3xl text-center mb-10">À qui ça s'adresse</h2>
        <div className="flex flex-wrap justify-center gap-3">
          {cibles.map((c, i) => (
            <span key={i} className="px-4 py-2 rounded-full bg-card text-muted-foreground text-sm border border-border">
              {c}
            </span>
          ))}
        </div>
      </div>
    </AnimatedSection>

    <AnimatedSection className="section-padding bg-card">
      <div className="section-container text-center">
        <h2 className="heading-display text-2xl md:text-3xl mb-4">Pourquoi maintenant ?</h2>
        <p className="text-muted-foreground max-w-xl mx-auto mb-6">
          Chaque jour sans site web, ce sont des clients qui vont chez vos concurrents.
          80% des consommateurs recherchent un professionnel en ligne avant de le contacter.
        </p>
      </div>
    </AnimatedSection>

    <AnimatedSection className="section-padding bg-background">
      <div className="section-container max-w-2xl mx-auto">
        <h2 className="heading-display text-2xl md:text-3xl text-center mb-10">Questions fréquentes</h2>
        <div className="space-y-6">
          {faqs.map((faq, i) => (
            <div key={i} className="card-altera">
              <h3 className="font-bold text-foreground mb-2">{faq.q}</h3>
              <p className="text-muted-foreground text-sm">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>

    <AnimatedSection className="section-padding bg-card">
      <div className="section-container text-center">
        <h2 className="heading-display text-2xl md:text-4xl mb-6">
          Lancez votre <span className="text-gradient">site vitrine</span>
        </h2>
        <Link to="/contact" className="btn-primary text-lg">
          Demander un devis gratuit <ArrowRight className="ml-2 inline" size={20} />
        </Link>
      </div>
    </AnimatedSection>
  </Layout>
);

export default SiteVitrinePage;
