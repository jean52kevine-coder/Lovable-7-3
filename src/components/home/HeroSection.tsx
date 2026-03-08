import { useRef, useEffect, useState, useCallback, useMemo } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import heroVideo from "@/assets/videos/hero-background.mp4";

const WORDS = ["commercial", "vendeur", "atout", "levier", "avantage"];

const blurUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 30, filter: "blur(12px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, delay, ease: [0.25, 0.4, 0.25, 1] as const },
  },
});

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

/* ─── Sub-components ─── */
const CountUp = ({ target, suffix = "" }: { target: number; suffix?: string }) => {
  const [val, setVal] = useState(0);
  useEffect(() => {
    const dur = 1500;
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min((now - start) / dur, 1);
      const ease = 1 - Math.pow(1 - t, 3);
      setVal(Math.round(target * ease));
      if (t < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [target]);
  return <>{val}{suffix}</>;
};

const RotatingWord = () => {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % WORDS.length), 2800);
    return () => clearInterval(id);
  }, []);

  return (
    <span className="inline-block relative overflow-hidden h-[1.2em] align-bottom" style={{ minWidth: "200px" }}>
      {WORDS.map((word, i) => (
        <motion.span
          key={word}
          className="absolute left-0 text-primary"
          initial={{ clipPath: "inset(0 0 100% 0)", filter: "blur(4px)" }}
          animate={{
            clipPath: i === index ? "inset(0 0 0% 0)" : "inset(100% 0 0% 0)",
            filter: i === index ? "blur(0px)" : "blur(4px)",
          }}
          transition={{
            duration: i === index ? 0.5 : 0.35,
            ease: i === index ? [0.25, 0.4, 0.25, 1] : "easeIn",
          }}
        >
          {word}.
        </motion.span>
      ))}
    </span>
  );
};

/* ─── Main Component ─── */
const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.7], [1, 0.92]);

  const handleMouse = useCallback((e: MouseEvent) => {
    const el = heroRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    el.style.setProperty("--my", `${e.clientY - rect.top}px`);
  }, []);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    el.addEventListener("mousemove", handleMouse);
    return () => el.removeEventListener("mousemove", handleMouse);
  }, [handleMouse]);

  const stats = useMemo(() => [
    { value: 50, suffix: "+", label: "sites livrés" },
    { value: 14, suffix: "j", label: "délai moyen" },
    { value: 98, suffix: "%", label: "clients satisfaits" },
    { value: 497, suffix: "€", label: "dès" },
  ], []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Video background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black/50" />
        {/* Green gradient overlay */}
        <div 
          className="absolute inset-0"
          style={{
            background: "radial-gradient(ellipse at center, rgba(29,185,84,0.08) 0%, transparent 60%)"
          }}
        />
      </div>

      {/* Mouse spotlight */}
      <div
        className="absolute inset-0 pointer-events-none z-[1]"
        style={{
          background:
            "radial-gradient(600px circle at var(--mx, 50%) var(--my, 50%), rgba(29,185,84,0.12), transparent 60%)",
        }}
      />

      {/* Vignette overlay */}
      <div
        className="absolute inset-0 pointer-events-none z-[1]"
        style={{
          background: "radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.5) 100%)",
        }}
      />

      <motion.div
        className="relative z-[2] text-center section-container py-20"
        style={{ y: heroY, opacity: heroOpacity, scale: heroScale }}
      >
        <motion.div variants={stagger} initial="hidden" animate="visible">
          {/* Badge */}
          <motion.div variants={blurUp(0)} className="flex justify-center mb-8">
            <span
              className="font-dm text-[13px] font-semibold px-4 py-1.5 rounded-full text-primary"
              style={{
                background: "rgba(29,185,84,0.15)",
                border: "1px solid rgba(29,185,84,0.4)",
                backdropFilter: "blur(8px)",
              }}
            >
              ⚡ Livraison en 14 jours
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1 variants={blurUp(0.1)} className="heading-display leading-tight mb-2" style={{ fontSize: "clamp(32px, 5vw, 56px)", letterSpacing: "0.02em" }}>
            LE SITE WEB DES
            <br />
            <span className="text-primary">PME LOCALES</span>
          </motion.h1>

          {/* Rotating word */}
          <motion.p variants={blurUp(0.2)} className="heading-display mb-6" style={{ fontSize: "clamp(24px, 3.5vw, 40px)" }}>
            Votre meilleur <RotatingWord />
          </motion.p>

          {/* Subtitle */}
          <motion.p
            variants={blurUp(0.3)}
            className="font-dm text-[18px] mx-auto mb-10 max-w-[560px]"
            style={{ color: "rgba(255,255,255,0.75)" }}
          >
            Design sur-mesure, livraison en 14 jours, résultats concrets.
            Artisans, commerçants, PME — on s'occupe de tout.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={blurUp(0.4)} className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center font-bold px-7 py-3.5 rounded-lg text-primary-foreground transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/25"
              style={{ background: "hsl(145, 63%, 42%)" }}
            >
              Demander un devis →
            </Link>
            <Link
              to="/tarifs"
              className="inline-flex items-center justify-center font-bold px-7 py-3.5 rounded-lg transition-all duration-200 text-white hover:text-primary backdrop-blur-sm"
              style={{ border: "1px solid rgba(255,255,255,0.3)", background: "rgba(255,255,255,0.05)" }}
            >
              Voir les tarifs
            </Link>
          </motion.div>

          {/* Stats bar */}
          <motion.div
            variants={blurUp(0.5)}
            className="flex flex-wrap justify-center gap-x-0 gap-y-2 font-dm text-[13px]"
            style={{ color: "rgba(255,255,255,0.5)" }}
          >
            {stats.map((s, i) => (
              <span key={i} className="flex items-center">
                {i > 0 && <span className="mx-3" style={{ color: "rgba(255,255,255,0.2)" }}>|</span>}
                <span className="font-semibold text-white mr-1">
                  {s.label === "dès" ? s.label + " " : ""}
                  <CountUp target={s.value} suffix={s.suffix} />
                </span>
                {s.label !== "dès" && <span>{s.label}</span>}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
