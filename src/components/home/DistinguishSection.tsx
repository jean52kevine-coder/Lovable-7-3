import { motion } from "framer-motion";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import BlurReveal from "@/components/animations/BlurReveal";
import ScaleSection from "@/components/animations/ScaleSection";
import { StaggerContainer, itemVariants } from "@/components/animations/StaggerContainer";

const items = [
  { icon: "⚡", title: "Livraison rapide", desc: "Votre site en 14 jours. Pendant que vos concurrents attendent 3 mois.", color: "#FFD700" },
  { icon: "💰", title: "Prix fixes", desc: "Pas de surprise. Vous savez exactement ce que vous payez dès le premier message.", color: "#1DB954" },
  { icon: "📈", title: "ROI mesurable", desc: "Chaque projet est conçu pour générer des résultats concrets : leads, ventes, visibilité.", color: "#00D4FF" },
  { icon: "💬", title: "Support humain", desc: "Un vrai interlocuteur, pas un ticket automatique. On répond dans la journée.", color: "#FF6B35" },
];

const DistinguishSection = () => (
  <section 
    className="py-[100px] relative"
    style={{ 
      background: "linear-gradient(180deg, #0a0f0a 0%, #0d1212 50%, #0a0f0a 100%)" 
    }}
  >
    <div className="section-container">
      <BlurReveal className="text-center mb-14">
        <h2 className="heading-display" style={{ fontSize: "clamp(28px, 4vw, 44px)" }}>
          CE QUI NOUS <span className="text-primary">DISTINGUE</span>
        </h2>
      </BlurReveal>

      <ScaleSection>
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6" staggerDelay={0.12}>
          {items.map((item, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              whileHover={{ y: -6, scale: 1.01 }}
              className="relative rounded-xl transition-all duration-300 group"
            >
              <GlowingEffect spread={40} glow proximity={64} inactiveZone={0.01} borderWidth={2} disabled={false} />
              <div
                className="relative z-10 rounded-xl p-6"
                style={{
                  background: `linear-gradient(135deg, ${item.color}08 0%, rgba(13,19,13,0.95) 50%)`,
                  border: "1px solid rgba(26,46,26,0.8)",
                }}
              >
                <motion.span 
                  className="text-3xl mb-3 block"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  {item.icon}
                </motion.span>
                <h3 className="font-display font-black text-lg text-white mb-2">{item.title}</h3>
                <p className="font-dm text-sm" style={{ color: "rgba(255,255,255,0.55)" }}>
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </StaggerContainer>
      </ScaleSection>
    </div>
  </section>
);

export default DistinguishSection;
