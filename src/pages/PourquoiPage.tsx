import { Link } from "react-router-dom";
import AnimatedSection from "@/components/AnimatedSection";
import Layout from "@/components/Layout";
import { ArrowRight, XCircle, CheckCircle, TrendingUp, Users, Search, Clock } from "lucide-react";
import heroPourquoi from "@/assets/hero-pourquoi.jpg";

const stats = [
  { icon: Search, value: "97%", label: "des consommateurs utilisent internet pour trouver un professionnel local" },
  { icon: Users, value: "80%", label: "des clients vérifient un site web avant de contacter une entreprise" },
  { icon: TrendingUp, value: "+67%", label: "de chiffre d'affaires en plus pour les entreprises avec un site web" },
  { icon: Clock, value: "24/7", label: "accessibilité permanente pour vos clients potentiels" },
];

const sansAvec = [
  { sans: "Invisible sur internet", avec: "Trouvable en quelques clics" },
  { sans: "Dépendant du bouche-à-oreille", avec: "Visible par des milliers de personnes" },
  { sans: "Pas de crédibilité en ligne", avec: "Image professionnelle et rassurante" },
  { sans: "Horaires limités", avec: "Disponible 24h/24, 7j/7" },
  { sans: "Concurrents en première page", avec: "Vous aussi, en première page" },
];

const PourquoiPage = () => (
  <Layout>
    <AnimatedSection className="relative py-24 md:py-32 overflow-hidden">
      <img src={heroPourquoi} alt="" className="absolute inset-0 w-full h-full object-cover opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/40" />
      <div className="section-container text-center relative z-10">
        <h1 className="heading-display text-4xl md:text-6xl mb-6">
          Pourquoi avoir <span className="text-gradient">un site web</span> ?
        </h1>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          En 2025, ne pas avoir de site internet c'est comme ne pas avoir de vitrine.
          Vos clients vous cherchent en ligne — soyez là.
        </p>
      </div>
    </AnimatedSection>

    <AnimatedSection className="section-padding bg-card">
      <div className="section-container">
        <h2 className="heading-display text-2xl md:text-3xl text-center mb-12">Les chiffres parlent d'eux-mêmes</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <div key={i} className="card-altera text-center">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <s.icon className="text-primary" size={24} />
              </div>
              <div className="text-primary heading-display text-3xl mb-2">{s.value}</div>
              <p className="text-muted-foreground text-sm">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>

    <AnimatedSection className="section-padding bg-background">
      <div className="section-container max-w-3xl mx-auto">
        <h2 className="heading-display text-2xl md:text-3xl text-center mb-12">
          <span className="text-destructive">Sans site</span> vs <span className="text-gradient">Avec site</span>
        </h2>
        <div className="space-y-4">
          {sansAvec.map((row, i) => (
            <div key={i} className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center gap-3 bg-destructive/10 rounded-lg p-4">
                <XCircle className="text-destructive flex-shrink-0" size={20} />
                <span className="text-sm">{row.sans}</span>
              </div>
              <div className="flex items-center gap-3 bg-primary/10 rounded-lg p-4">
                <CheckCircle className="text-primary flex-shrink-0" size={20} />
                <span className="text-sm">{row.avec}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>

    <AnimatedSection className="section-padding bg-card">
      <div className="section-container text-center">
        <h2 className="heading-display text-2xl md:text-4xl mb-4">
          Ne laissez plus vos <span className="text-gradient">clients partir</span>
        </h2>
        <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
          Chaque jour sans site, c'est du chiffre d'affaires perdu. Passez à l'action maintenant.
        </p>
        <Link to="/contact" className="btn-primary text-lg">
          Obtenir mon site web <ArrowRight className="ml-2 inline" size={20} />
        </Link>
      </div>
    </AnimatedSection>
  </Layout>
);

export default PourquoiPage;
