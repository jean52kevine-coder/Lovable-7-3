import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { HeroLaptopIllustration } from "@/components/illustrations/SvgIllustrations";
import RotatingWords from "@/components/RotatingWords";
import BlurReveal from "@/components/animations/BlurReveal";

const heroWords = ["PME LOCALES", "ARTISANS", "COMMERÇANTS", "INDÉPENDANTS"];

const HeroHome = () => (
  <section className="relative min-h-[90vh] flex items-center overflow-hidden" style={{ backgroundColor: "hsl(var(--hero-bg))" }}>
    {/* Glow orb */}
    <div
      className="absolute top-[-200px] left-[-100px] w-[600px] h-[600px] rounded-full pointer-events-none"
      style={{ background: "hsl(var(--primary) / 0.06)", filter: "blur(120px)" }}
    />
    <div
      className="absolute bottom-[-150px] right-[-80px] w-[500px] h-[500px] rounded-full pointer-events-none"
      style={{ background: "hsl(var(--primary) / 0.04)", filter: "blur(100px)" }}
    />

    {/* Vignette */}
    <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.5) 100%)" }} />

    <div className="section-container relative z-10 py-20 flex flex-col items-center text-center">
      <BlurReveal delay={0}>
        <span
          className="inline-block font-dm text-[13px] font-semibold px-4 py-1.5 rounded-full text-primary mb-6"
          style={{ background: "hsl(var(--primary) / 0.12)", border: "1px solid hsl(var(--primary) / 0.25)" }}
        >
          ⚡ Livraison en 14 jours
        </span>
      </BlurReveal>

      <BlurReveal delay={0.1}>
        <h1 className="heading-display leading-[1.05] mb-4" style={{ fontSize: "clamp(36px, 5.5vw, 64px)" }}>
          LE SITE WEB<br />
          DES <RotatingWords words={heroWords} />
        </h1>
      </BlurReveal>

      <BlurReveal delay={0.2}>
        <p className="font-dm text-lg max-w-[480px] mx-auto mb-8" style={{ color: "hsl(var(--muted-foreground))" }}>
          Design sur-mesure, livré en 14 jours.<br className="hidden sm:block" />
          Artisans, commerçants, PME — on s'occupe de tout.
        </p>
      </BlurReveal>

      <BlurReveal delay={0.3}>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Link to="/contact" className="btn-primary text-center">
            Demander un devis <ArrowRight className="ml-2" size={18} />
          </Link>
          <Link
            to="/tarifs"
            className="inline-flex items-center justify-center font-bold px-7 py-3.5 rounded-lg text-white hover:text-primary transition-colors"
            style={{ border: "1px solid hsl(var(--border))", background: "hsl(var(--card) / 0.5)" }}
          >
            Voir les tarifs
          </Link>
        </div>
      </BlurReveal>

      <BlurReveal delay={0.4}>
        <div className="flex flex-wrap justify-center gap-6 font-dm text-sm mb-10" style={{ color: "hsl(var(--muted-foreground))" }}>
          <span><strong className="text-white">50+</strong> sites livrés</span>
          <span><strong className="text-white">14j</strong> délai moyen</span>
          <span><strong className="text-white">98%</strong> satisfaits</span>
        </div>
      </BlurReveal>

      {/* Illustration en dessous, centrée */}
      <BlurReveal delay={0.5} className="w-full max-w-[520px]">
        <HeroLaptopIllustration />
      </BlurReveal>
    </div>
  </section>
);

export default HeroHome;
