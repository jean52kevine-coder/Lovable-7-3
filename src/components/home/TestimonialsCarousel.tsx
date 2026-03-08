import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import BlurReveal from "@/components/animations/BlurReveal";

const testimonials = [
  { text: "Mon agence a généré 40% de nouveaux clients. Professionnalisme exemplaire.", name: "Thomas B.", role: "Artisan plombier, Lyon", avatar: "TB" },
  { text: "Livraison en 12 jours comme promis. Je recommande à 100%.", name: "Sophie M.", role: "Fleuriste, Bordeaux", avatar: "SM" },
  { text: "Je ne suis pas informaticien et ils ont tout géré. Site bluffant.", name: "Jean-Laurent M.", role: "Restaurateur, Nantes", avatar: "JL" },
  { text: "Notre boutique e-commerce a doublé nos ventes en 2 mois.", name: "Camille R.", role: "Créatrice de bijoux", avatar: "CR" },
  { text: "Simple, efficace, abordable. Exactement ce qu'il me fallait.", name: "Dr. Marc L.", role: "Ostéopathe, Paris", avatar: "ML" },
  { text: "Réactivité impressionnante. Une question le soir, une réponse le matin.", name: "Yasmine B.", role: "Coach sportive, Marseille", avatar: "YB" },
];

const doubled = [...testimonials, ...testimonials];

const Card = ({ t, index }: { t: typeof testimonials[0]; index: number }) => (
  <motion.div 
    className="relative flex-shrink-0 rounded-2xl min-w-[320px] max-w-[360px] group"
    whileHover={{ y: -8, scale: 1.02 }}
    transition={{ duration: 0.3 }}
  >
    <div
      className="relative z-10 rounded-2xl p-6 h-full transition-all duration-300"
      style={{ 
        background: "linear-gradient(145deg, rgba(29,185,84,0.08) 0%, rgba(17,24,17,0.95) 50%)",
        border: "1px solid rgba(29,185,84,0.15)",
        boxShadow: "0 8px 32px rgba(0,0,0,0.3)"
      }}
    >
      {/* Quote icon */}
      <Quote 
        className="absolute top-4 right-4 text-primary/20 group-hover:text-primary/40 transition-colors" 
        size={32} 
      />

      {/* Stars */}
      <div className="flex gap-1 mb-4">
        {Array(5).fill(0).map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 * i }}
          >
            <Star className="text-primary fill-primary" size={16} />
          </motion.div>
        ))}
      </div>

      {/* Text */}
      <p className="font-dm text-[15px] text-white mb-6 leading-relaxed">"{t.text}"</p>

      {/* Author */}
      <div className="flex items-center gap-3">
        <div 
          className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-primary"
          style={{ background: "rgba(29,185,84,0.15)" }}
        >
          {t.avatar}
        </div>
        <div>
          <p className="font-dm font-semibold text-sm text-white">{t.name}</p>
          <p className="font-dm text-[12px] text-muted-foreground">{t.role}</p>
        </div>
      </div>
    </div>
  </motion.div>
);

const TestimonialsCarousel = () => (
  <section 
    className="py-[100px] overflow-hidden relative"
    style={{ 
      background: "linear-gradient(180deg, #0d130d 0%, #0a1210 50%, #0a0f0a 100%)" 
    }}
  >
    {/* Background decoration */}
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div 
        className="absolute w-full h-[1px] top-0"
        style={{ background: "linear-gradient(90deg, transparent, rgba(29,185,84,0.2), transparent)" }}
      />
      <div 
        className="absolute w-full h-[1px] bottom-0"
        style={{ background: "linear-gradient(90deg, transparent, rgba(29,185,84,0.2), transparent)" }}
      />
    </div>

    <div className="section-container relative z-10">
      <BlurReveal className="text-center mb-14">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
        >
          <Star className="text-primary fill-primary" size={16} />
          <span className="text-primary font-semibold text-sm">+50 clients satisfaits</span>
        </motion.div>
        <h2 className="heading-display" style={{ fontSize: "clamp(28px, 4vw, 44px)" }}>
          CE QU'EN DISENT <span className="text-primary">NOS CLIENTS</span>
        </h2>
      </BlurReveal>
    </div>

    {/* Row 1 - scrolling left */}
    <div
      className="relative mb-6"
      style={{
        maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
      }}
    >
      <motion.div
        className="flex gap-6 hover:[animation-play-state:paused]"
        style={{ animation: "scroll-left 40s linear infinite", width: "max-content" }}
      >
        {doubled.map((t, i) => <Card key={`r1-${i}`} t={t} index={i} />)}
      </motion.div>
    </div>

    {/* Row 2 - scrolling right */}
    <div
      className="relative"
      style={{
        maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
      }}
    >
      <motion.div
        className="flex gap-6 hover:[animation-play-state:paused]"
        style={{ animation: "scroll-right 40s linear infinite", width: "max-content" }}
      >
        {doubled.map((t, i) => <Card key={`r2-${i}`} t={t} index={i} />)}
      </motion.div>
    </div>
  </section>
);

export default TestimonialsCarousel;
