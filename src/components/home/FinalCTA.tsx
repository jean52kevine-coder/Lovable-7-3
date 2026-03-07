import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const FinalCTA = () => (
  <section
    className="py-[120px] px-6"
    style={{
      background: "linear-gradient(160deg, #0d1f13 0%, #0a0f0a 60%)",
      borderTop: "1px solid #1a2e1a",
    }}
  >
    <motion.div
      className="section-container text-center"
      variants={stagger}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
    >
      <motion.h2
        variants={fadeUp}
        className="heading-display mb-6"
        style={{ fontSize: "clamp(36px, 5vw, 60px)" }}
      >
        PRÊT À LANCER
        <br />
        <span className="text-primary">VOTRE PROJET ?</span>
      </motion.h2>

      <motion.p
        variants={fadeUp}
        className="font-dm text-lg mb-10 mx-auto max-w-lg"
        style={{ color: "rgba(255,255,255,0.6)" }}
      >
        Consultation 30min offerte, devis gratuit et sans engagement.
      </motion.p>

      <motion.div variants={fadeUp}>
        <Link
          to="/contact"
          className="inline-flex items-center justify-center font-bold text-lg px-10 py-[18px] rounded-[10px] text-primary-foreground transition-all duration-200 hover:-translate-y-[3px]"
          style={{
            background: "hsl(145, 63%, 42%)",
            fontSize: "18px",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "hsl(145, 63%, 35%)";
            e.currentTarget.style.boxShadow = "0 12px 40px rgba(29,185,84,0.3)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "hsl(145, 63%, 42%)";
            e.currentTarget.style.boxShadow = "none";
          }}
        >
          Démarrer mon projet →
        </Link>
      </motion.div>

      <motion.div
        variants={fadeUp}
        className="flex flex-wrap justify-center gap-6 mt-8 font-dm text-[13px]"
        style={{ color: "rgba(255,255,255,0.4)" }}
      >
        <span>✓ Réponse sous 24h</span>
        <span>✓ Sans engagement</span>
        <span>✓ Devis personnalisé</span>
      </motion.div>
    </motion.div>
  </section>
);

export default FinalCTA;
