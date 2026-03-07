import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const steps = [
  {
    num: "01",
    icon: "💬",
    title: "Échange découverte",
    detail: "Consultation 30min offerte. On analyse votre activité, vos objectifs et votre marché.",
  },
  {
    num: "02",
    icon: "🎨",
    title: "Design sur-mesure",
    detail: "Maquette unique validée par vous avant tout développement. Aucune surprise.",
  },
  {
    num: "03",
    icon: "⚡",
    title: "Développement",
    detail: "Code propre, rapide, optimisé SEO. Livrable en 14 jours chrono après validation.",
  },
  {
    num: "04",
    icon: "🚀",
    title: "Livraison + formation",
    detail: "Mise en ligne complète, formation à l'utilisation, support inclus 30 jours.",
  },
];

const StepperSection = () => {
  const [active, setActive] = useState(0);

  return (
    <section style={{ backgroundColor: "#0d130d" }} className="py-[100px]">
      <div className="section-container">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="heading-display" style={{ fontSize: "clamp(28px, 4vw, 44px)" }}>
            VOTRE SITE EN <span className="text-primary">4 ÉTAPES</span>
          </h2>
        </motion.div>

        {/* Desktop horizontal stepper */}
        <motion.div
          className="hidden md:flex items-start justify-between relative mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Background line */}
          <div
            className="absolute top-6 left-[12.5%] right-[12.5%] h-[2px]"
            style={{ backgroundColor: "#1a2e1a" }}
          />
          {/* Progress line */}
          <motion.div
            className="absolute top-6 left-[12.5%] h-[2px]"
            style={{ backgroundColor: "hsl(145, 63%, 42%)", transformOrigin: "left" }}
            animate={{ width: `${(active / 3) * 75}%` }}
            transition={{ duration: 0.4 }}
          />

          {steps.map((s, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className="relative z-10 flex flex-col items-center w-1/4 cursor-pointer group"
            >
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center text-sm font-black font-display mb-3 transition-colors duration-300"
                style={{
                  backgroundColor: i <= active ? "hsl(145, 63%, 42%)" : "#1a2e1a",
                  color: i <= active ? "#000" : "rgba(255,255,255,0.4)",
                }}
              >
                {s.num}
              </div>
              <span className="text-sm font-dm text-center" style={{ color: i === active ? "#fff" : "rgba(255,255,255,0.45)" }}>
                {s.icon} {s.title}
              </span>
            </button>
          ))}
        </motion.div>

        {/* Mobile vertical stepper */}
        <div className="md:hidden space-y-4 mb-8">
          {steps.map((s, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className="flex items-center gap-4 w-full text-left"
            >
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-black font-display flex-shrink-0 transition-colors"
                style={{
                  backgroundColor: i <= active ? "hsl(145, 63%, 42%)" : "#1a2e1a",
                  color: i <= active ? "#000" : "rgba(255,255,255,0.4)",
                }}
              >
                {s.num}
              </div>
              <span className="font-dm text-sm" style={{ color: i === active ? "#fff" : "rgba(255,255,255,0.45)" }}>
                {s.icon} {s.title}
              </span>
            </button>
          ))}
        </div>

        {/* Detail panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35 }}
            className="overflow-hidden"
          >
            <div
              className="rounded-xl p-6 font-dm"
              style={{
                backgroundColor: "#111811",
                borderLeft: "3px solid hsl(145, 63%, 42%)",
              }}
            >
              <span className="text-2xl mb-2 block">{steps[active].icon}</span>
              <h3 className="font-display font-black text-lg text-white mb-2">{steps[active].title}</h3>
              <p style={{ color: "rgba(255,255,255,0.6)" }}>{steps[active].detail}</p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default StepperSection;
