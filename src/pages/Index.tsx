import { Link } from "react-router-dom";
import AnimatedSection from "@/components/AnimatedSection";
import Layout from "@/components/Layout";
import { ArrowRight, Globe, ShoppingCart, Wrench, TrendingUp, Star, Zap, Shield, Users, BarChart3 } from "lucide-react";
import heroHome from "@/assets/hero-home.jpg";

const HeroSection = () => (
  <AnimatedSection className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
    <img src={heroHome} alt="" className="absolute inset-0 w-full h-full object-cover opacity-40" />
    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent" />
    <div className="section-container text-center relative z-10 py-20">
      <h1 className="heading-display text-4xl sm:text-5xl md:text-7xl leading-tight mb-6">
        Votre site web,<br />
        <span className="text-gradient">votre meilleur commercial.</span>
      </h1>
      <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10">
        ALTÉRA crée des sites professionnels qui attirent vos clients et boostent votre activité.
        Artisans, commerçants, PME — on s'occupe de tout.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link to="/contact" className="btn-primary text-base">
          Demander un devis gratuit <ArrowRight className="ml-2 inline" size={18} />
        </Link>
        <Link to="/services" className="btn-outline text-base">
          Découvrir nos services
        </Link>
      </div>
    </div>
    </div>
  </AnimatedSection>
);

const ValuePropositionSection = () => (
  <AnimatedSection className="section-padding bg-card">
    <div className="section-container">
      <h2 className="heading-display text-3xl md:text-4xl text-center mb-12">
        Pourquoi choisir <span className="text-gradient">ALTÉRA</span> ?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { icon: Zap, title: "Rapide & efficace", desc: "Votre site livré en 7 jours, prêt à convertir vos visiteurs en clients." },
          { icon: Shield, title: "Clé en main", desc: "Design, contenu, hébergement, maintenance — on gère tout pour vous." },
          { icon: TrendingUp, title: "Résultats concrets", desc: "Des sites optimisés pour le référencement local et la conversion." },
        ].map((item, i) => (
          <div key={i} className="card-altera text-center">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <item.icon className="text-primary" size={24} />
            </div>
            <h3 className="font-display font-bold text-xl mb-3">{item.title}</h3>
            <p className="text-muted-foreground text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </AnimatedSection>
);

const ServicesPreviewSection = () => (
  <AnimatedSection className="section-padding bg-background">
    <div className="section-container">
      <h2 className="heading-display text-3xl md:text-4xl text-center mb-4">
        Nos <span className="text-gradient">services</span>
      </h2>
      <p className="text-muted-foreground text-center mb-12 max-w-xl mx-auto">
        Des solutions adaptées à chaque besoin et chaque budget.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { icon: Globe, title: "Site Vitrine", price: "486 €", desc: "Présentez votre activité avec un site moderne et professionnel.", link: "/services/site-vitrine" },
          { icon: ShoppingCart, title: "Site E-commerce", price: "747 €", desc: "Vendez en ligne avec une boutique performante et sécurisée.", link: "/services/site-ecommerce" },
          { icon: Wrench, title: "Maintenance", price: "dès 39 €/mois", desc: "Gardez votre site à jour, sécurisé et performant.", link: "/services/maintenance" },
        ].map((s, i) => (
          <Link key={i} to={s.link} className="card-altera group">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <s.icon className="text-primary" size={24} />
            </div>
            <h3 className="font-display font-bold text-xl mb-2">{s.title}</h3>
            <p className="text-primary font-bold text-lg mb-3">{s.price}</p>
            <p className="text-muted-foreground text-sm mb-4">{s.desc}</p>
            <span className="text-primary text-sm font-semibold group-hover:underline">
              En savoir plus →
            </span>
          </Link>
        ))}
      </div>
    </div>
  </AnimatedSection>
);

const PricingPreviewSection = () => (
  <AnimatedSection className="section-padding bg-card">
    <div className="section-container text-center">
      <h2 className="heading-display text-3xl md:text-4xl mb-4">
        Des tarifs <span className="text-gradient">transparents</span>
      </h2>
      <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
        Pas de surprise, pas de frais cachés. Vous savez exactement ce que vous payez.
      </p>
      <Link to="/tarifs" className="btn-primary">
        Voir tous nos tarifs <ArrowRight className="ml-2 inline" size={18} />
      </Link>
    </div>
  </AnimatedSection>
);

const ROISection = () => (
  <AnimatedSection className="section-padding bg-background">
    <div className="section-container">
      <h2 className="heading-display text-3xl md:text-4xl text-center mb-12">
        L'impact d'un <span className="text-gradient">site professionnel</span>
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {[
          { value: "80%", label: "des consommateurs recherchent en ligne avant d'acheter" },
          { value: "+60%", label: "de crédibilité avec un site professionnel" },
          { value: "24/7", label: "votre vitrine ouverte en permanence" },
          { value: "3x", label: "plus de demandes de devis en moyenne" },
        ].map((stat, i) => (
          <div key={i}>
            <div className="text-primary heading-display text-3xl md:text-4xl mb-2">{stat.value}</div>
            <p className="text-muted-foreground text-sm">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  </AnimatedSection>
);

const TestimonialsSection = () => (
  <AnimatedSection className="section-padding bg-card">
    <div className="section-container">
      <h2 className="heading-display text-3xl md:text-4xl text-center mb-12">
        Ils nous font <span className="text-gradient">confiance</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { name: "Marie D.", role: "Fleuriste à Lyon", text: "Mon site a été livré en une semaine. Depuis, je reçois 3 fois plus de demandes !" },
          { name: "Pierre L.", role: "Plombier à Marseille", text: "ALTÉRA a tout géré de A à Z. Je n'ai eu qu'à valider. Résultat impeccable." },
          { name: "Sophie M.", role: "Boutique en ligne", text: "Ma boutique e-commerce tourne parfaitement. Le support est toujours réactif." },
        ].map((t, i) => (
          <div key={i} className="card-altera">
            <div className="flex gap-1 mb-4">
              {Array(5).fill(0).map((_, j) => (
                <Star key={j} className="text-primary fill-primary" size={16} />
              ))}
            </div>
            <p className="text-foreground text-sm mb-4 italic">"{t.text}"</p>
            <div>
              <p className="font-bold text-sm">{t.name}</p>
              <p className="text-muted-foreground text-xs">{t.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </AnimatedSection>
);

const FinalCTASection = () => (
  <AnimatedSection className="section-padding bg-background">
    <div className="section-container text-center">
      <h2 className="heading-display text-3xl md:text-5xl mb-6">
        Prêt à <span className="text-gradient">passer au digital</span> ?
      </h2>
      <p className="text-muted-foreground text-lg mb-8 max-w-lg mx-auto">
        Obtenez votre devis gratuit en moins de 2 minutes. Sans engagement.
      </p>
      <Link to="/contact" className="btn-primary text-lg px-8 py-4">
        Demander mon devis gratuit <ArrowRight className="ml-2 inline" size={20} />
      </Link>
    </div>
  </AnimatedSection>
);

const Index = () => (
  <Layout>
    <HeroSection />
    <ValuePropositionSection />
    <ServicesPreviewSection />
    <PricingPreviewSection />
    <ROISection />
    <TestimonialsSection />
    <FinalCTASection />
  </Layout>
);

export default Index;
