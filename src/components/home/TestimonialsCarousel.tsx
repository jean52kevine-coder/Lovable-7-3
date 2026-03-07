import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  { text: "Mon agence a généré 40% de nouveaux clients. Professionnalisme exemplaire.", name: "Thomas B.", role: "Artisan plombier, Lyon" },
  { text: "Livraison en 12 jours comme promis. Je recommande à 100%.", name: "Sophie M.", role: "Fleuriste, Bordeaux" },
  { text: "Je ne suis pas informaticien et ils ont tout géré. Site bluffant.", name: "Jean-Laurent M.", role: "Restaurateur, Nantes" },
  { text: "Notre boutique e-commerce a doublé nos ventes en 2 mois.", name: "Camille R.", role: "Créatrice de bijoux" },
  { text: "Simple, efficace, abordable. Exactement ce qu'il me fallait.", name: "Dr. Marc L.", role: "Ostéopathe, Paris" },
  { text: "Réactivité impressionnante. Une question le soir, une réponse le matin.", name: "Yasmine B.", role: "Coach sportive, Marseille" },
];

const doubled = [...testimonials, ...testimonials];

const Card = ({ t }: { t: typeof testimonials[0] }) => (
  <div
    className="flex-shrink-0 rounded-xl p-5 min-w-[300px] max-w-[340px]"
    style={{ backgroundColor: "#111811", border: "1px solid #1a2e1a" }}
  >
    <div className="flex gap-0.5 mb-3">
      {Array(5).fill(0).map((_, i) => (
        <Star key={i} className="text-primary fill-primary" size={14} />
      ))}
    </div>
    <p className="font-dm text-sm text-white mb-4 italic">"{t.text}"</p>
    <p className="font-dm font-semibold text-sm text-white">{t.name}</p>
    <p className="font-dm text-[13px]" style={{ color: "rgba(255,255,255,0.45)" }}>{t.role}</p>
  </div>
);

const TestimonialsCarousel = () => (
  <section style={{ backgroundColor: "#0a0f0a" }} className="py-[100px] overflow-hidden">
    <div className="section-container">
      <motion.h2
        className="heading-display text-center mb-14"
        style={{ fontSize: "clamp(28px, 4vw, 44px)" }}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.6 }}
      >
        CE QU'EN DISENT <span className="text-primary">NOS CLIENTS</span>
      </motion.h2>
    </div>

    {/* Row 1 - left scroll */}
    <div
      className="relative mb-6"
      style={{
        maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
      }}
    >
      <div
        className="flex gap-6 hover:[animation-play-state:paused]"
        style={{ animation: "scroll-left 35s linear infinite", width: "max-content" }}
      >
        {doubled.map((t, i) => <Card key={`r1-${i}`} t={t} />)}
      </div>
    </div>

    {/* Row 2 - right scroll */}
    <div
      className="relative"
      style={{
        maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
      }}
    >
      <div
        className="flex gap-6 hover:[animation-play-state:paused]"
        style={{ animation: "scroll-right 35s linear infinite", width: "max-content" }}
      >
        {doubled.map((t, i) => <Card key={`r2-${i}`} t={t} />)}
      </div>
    </div>
  </section>
);

export default TestimonialsCarousel;
