import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import BlurReveal from "@/components/animations/BlurReveal";

const faqs = [
  {
    q: "Combien coûte un site web chez ALTÉRA ?",
    a: "Nos sites vitrines commencent à 497€ et les sites e-commerce à 747€. Ce sont des prix fixes, tout compris, sans frais cachés. L'hébergement de la première année est inclus.",
  },
  {
    q: "En combien de temps mon site sera-t-il livré ?",
    a: "Nous livrons votre site en 14 jours ouvrés après validation du contenu et paiement de l'acompte. C'est un engagement ferme.",
  },
  {
    q: "Est-ce que j'ai besoin de connaissances techniques ?",
    a: "Absolument pas. On s'occupe de tout : design, développement, mise en ligne, référencement. Vous n'avez qu'à valider le résultat.",
  },
  {
    q: "Utilisez-vous des templates ou des modèles pré-faits ?",
    a: "Non. Chaque site est conçu sur-mesure, de zéro, selon votre activité et votre identité. Aucun template WordPress ou Wix.",
  },
  {
    q: "Mon site sera-t-il visible sur Google ?",
    a: "Oui. Chaque site inclut une optimisation SEO de base : balises meta, titres, structure technique, vitesse de chargement et responsive mobile. Tout ce qu'il faut pour être bien référencé.",
  },
  {
    q: "Proposez-vous un service de maintenance ?",
    a: "Oui, à partir de 39€/mois sans engagement. Mises à jour, sauvegardes, monitoring, support réactif. Vous pouvez aussi gérer votre site seul si vous préférez.",
  },
  {
    q: "Puis-je payer en plusieurs fois ?",
    a: "Oui. Site vitrine en 2 fois, e-commerce en 3 fois, sans frais ni intérêts.",
  },
  {
    q: "Quelle zone géographique couvrez-vous ?",
    a: "Nous travaillons principalement avec les artisans, commerçants et PME du Grand Est (Reims, Metz, Nancy, Troyes, Strasbourg…), mais nous acceptons les projets dans toute la France.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.a,
    },
  })),
};

const FAQItem = ({ faq, index }: { faq: { q: string; a: string }; index: number }) => {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left rounded-xl p-5 flex items-center justify-between transition-colors"
        style={{
          backgroundColor: "hsl(var(--card-dark))",
          border: "1px solid hsl(var(--border-green))",
        }}
      >
        <h3 className="font-display font-bold text-foreground pr-4 text-sm md:text-base">
          {faq.q}
        </h3>
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="text-primary flex-shrink-0"
        >
          <ChevronDown className="w-5 h-5" />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="text-muted-foreground text-sm px-5 pt-3 pb-1">{faq.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const FAQSection = () => (
  <section className="py-20 md:py-28" style={{ backgroundColor: "hsl(var(--hero-bg) / 0.8)" }}>
    <div className="section-container">
      <BlurReveal className="text-center mb-12">
        <span
          className="inline-block font-dm text-[13px] font-semibold px-4 py-1.5 rounded-full text-primary mb-4"
          style={{ background: "rgba(29,185,84,0.15)", border: "1px solid rgba(29,185,84,0.4)" }}
        >
          ❓ Questions fréquentes
        </span>
        <h2
          className="text-3xl sm:text-4xl md:text-5xl font-black italic leading-[0.95] tracking-tight text-white"
          style={{ fontFamily: "'Barlow', sans-serif" }}
        >
          VOS <span className="text-primary whitespace-nowrap">QUESTIONS</span>
        </h2>
        <p className="font-dm text-sm md:text-base mt-4 max-w-xl mx-auto" style={{ color: "rgba(255,255,255,0.55)" }}>
          Tout ce que vous devez savoir avant de lancer votre projet web
        </p>
      </BlurReveal>
      <div className="max-w-3xl mx-auto space-y-3">
        {faqs.map((faq, i) => (
          <FAQItem key={i} faq={faq} index={i} />
        ))}
      </div>
    </div>
    {/* FAQ JSON-LD for SEO */}
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
    />
  </section>
);

export default FAQSection;
