import { motion } from "framer-motion";
import { GlowingEffect } from "@/components/ui/glowing-effect";

const items = [
  { icon: "⚡", title: "Livraison rapide", desc: "Votre site en 14 jours. Pendant que vos concurrents attendent 3 mois." },
  { icon: "💰", title: "Prix fixes", desc: "Pas de surprise. Vous savez exactement ce que vous payez dès le premier message." },
  { icon: "📈", title: "ROI mesurable", desc: "Chaque projet est conçu pour générer des résultats concrets : leads, ventes, visibilité." },
  { icon: "💬", title: "Support humain", desc: "Un vrai interlocuteur, pas un ticket automatique. On répond dans la journée." },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const DistinguishSection = () => (
  <section style={{ backgroundColor: "#0a0f0a" }} className="py-[100px]">
    <div className="section-container">
      <motion.h2
        className="heading-display text-center mb-14"
        style={{ fontSize: "clamp(28px, 4vw, 44px)" }}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.6 }}
      >
        CE QUI NOUS <span className="text-primary">DISTINGUE</span>
      </motion.h2>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
      >
        {items.map((item, i) => (
          <motion.div
            key={i}
            variants={cardVariants}
            className="relative rounded-xl transition-all duration-300"
          >
            <GlowingEffect spread={40} glow proximity={64} inactiveZone={0.01} borderWidth={2} disabled={false} />
            <div
              className="relative z-10 rounded-xl p-6"
              style={{
                backgroundColor: "#0d130d",
                border: "1px solid #1a2e1a",
              }}
            >
              <span className="text-2xl mb-3 block">{item.icon}</span>
              <h3 className="font-display font-black text-lg text-white mb-2">{item.title}</h3>
              <p className="font-dm text-sm" style={{ color: "rgba(255,255,255,0.55)" }}>
                {item.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default DistinguishSection;
