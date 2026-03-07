import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Globe, ShoppingCart, Shield, Check, ArrowRight } from "lucide-react";

const plans = [
  {
    icon: Globe,
    title: "Site Vitrine",
    price: "497",
    features: ["Design sur-mesure", "Jusqu'à 5 pages", "Responsive mobile", "SEO optimisé", "Livraison 14 jours"],
    link: "/services/site-vitrine",
    best: false,
  },
  {
    icon: ShoppingCart,
    title: "Site E-commerce",
    price: "747",
    features: ["Boutique complète", "Paiement sécurisé", "Gestion des stocks", "SEO avancé", "Formation incluse"],
    link: "/services/site-ecommerce",
    best: true,
  },
  {
    icon: Shield,
    title: "Maintenance",
    price: "39",
    suffix: "/mois",
    features: ["Mises à jour", "Sauvegardes auto", "Support réactif", "Monitoring 24/7", "Rapport mensuel"],
    link: "/services/maintenance",
    best: false,
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const PricingCompact = () => (
  <section style={{ backgroundColor: "#0d130d" }} className="py-[100px]">
    <div className="section-container">
      <motion.div
        className="text-center mb-14"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="heading-display mb-4" style={{ fontSize: "clamp(28px, 4vw, 44px)" }}>
          DES PRIX CLAIRS. <span className="text-primary">ZÉRO SURPRISE.</span>
        </h2>
        <p className="font-dm text-[16px]" style={{ color: "rgba(255,255,255,0.55)" }}>
          Tout est inclus. Pas de frais cachés. Vous savez exactement ce que vous payez.
        </p>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
      >
        {plans.map((p, i) => (
          <motion.div
            key={i}
            variants={cardVariants}
            className="relative rounded-2xl p-7 flex flex-col transition-all duration-300 hover:-translate-y-1"
            style={{
              backgroundColor: "#111811",
              border: p.best ? "1px solid hsl(145, 63%, 42%)" : "1px solid #1a2e1a",
            }}
          >
            {p.best && (
              <span
                className="absolute -top-3 left-1/2 -translate-x-1/2 text-[11px] font-bold px-3 py-1 rounded-full text-primary-foreground"
                style={{ background: "hsl(145, 63%, 42%)" }}
              >
                BEST SELLER
              </span>
            )}

            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <p.icon className="text-primary" size={20} />
            </div>

            <h3 className="font-display font-black text-lg text-white mb-2">{p.title}</h3>
            <div className="mb-5">
              <span className="text-primary heading-display text-3xl">{p.price}€</span>
              {p.suffix && <span className="text-muted-foreground text-sm">{p.suffix}</span>}
            </div>

            <ul className="space-y-2 flex-1 mb-6">
              {p.features.map((f, j) => (
                <li key={j} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Check className="text-primary flex-shrink-0" size={14} />
                  {f}
                </li>
              ))}
            </ul>

            <Link to={p.link} className="btn-primary text-center text-sm">
              En savoir plus <ArrowRight className="ml-2 inline" size={14} />
            </Link>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        className="text-center mt-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
      >
        <Link to="/tarifs" className="text-primary font-dm font-semibold text-sm hover:underline">
          Voir le détail complet des tarifs →
        </Link>
      </motion.div>
    </div>
  </section>
);

export default PricingCompact;
