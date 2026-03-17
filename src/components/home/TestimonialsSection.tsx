import { motion } from "framer-motion";
import BlurReveal from "@/components/animations/BlurReveal";
import TestimonialsCarousel from "./TestimonialsCarousel";
import HeroBackground from "@/components/HeroBackground";

const TestimonialsSection = () => (
  <section className="py-12 md:py-24 relative overflow-hidden" style={{ backgroundColor: "#0a0f0a" }}>
    <HeroBackground variant="orbs" />
    <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/70 to-background/90" />

    <div className="section-container relative z-10">
      <BlurReveal className="text-center mb-12">
        <h2 className="heading-display text-3xl md:text-5xl mb-4">
          CE QUE DISENT <span className="text-primary">NOS CLIENTS</span>
        </h2>
        <p className="font-dm text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
          Plus de 50 entreprises locales nous font confiance pour leur présence en ligne.
        </p>
      </BlurReveal>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <TestimonialsCarousel />
      </motion.div>
    </div>
  </section>
);

export default TestimonialsSection;
