import { useRef, useEffect, useState, useCallback, useMemo } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";
import { Spotlight } from "@/components/ui/spotlight";

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

const CountUp = ({ target, suffix = "", trigger }: { target: number; suffix?: string; trigger: boolean }) => {
  const [val, setVal] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (!trigger || started) return;
    setStarted(true);
    const dur = 1500;
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min((now - start) / dur, 1);
      const ease = 1 - Math.pow(1 - t, 3);
      setVal(Math.round(target * ease));
      if (t < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [target, trigger, started]);

  return <>{val}{suffix}</>;
};

const RotatingWord = () => {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % WORDS.length), 2800);
    return () => clearInterval(id);
  }, []);

  const longestWord = WORDS.reduce((a, b) => (a.length > b.length ? a : b));

  return (
    <span className="inline-flex justify-center relative overflow-hidden" style={{ height: "1.15em" }}>
      <span className="invisible whitespace-nowrap">{longestWord}.</span>
      {WORDS.map((word, i) => (
        <motion.span
          key={word}
          className="absolute inset-0 flex items-center justify-center text-primary whitespace-nowrap"
          initial={false}
          animate={{
            y: i === index ? "0%" : i > index || (index === WORDS.length - 1 && i === 0) ? "110%" : "-110%",
            opacity: i === index ? 1 : 0,
            filter: i === index ? "blur(0px)" : "blur(6px)",
          }}
          transition={{ duration: 0.45, ease: [0.25, 0.4, 0.25, 1] }}
        >
          {word}.
        </motion.span>
      ))}
    </span>
  );
};

const HeroSection = () => {
  const isMobile = useIsMobile();
  const containerRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const statsInView = useInView(statsRef, { once: true, amount: 0.5 });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // --- Phase transforms ---
  // Text fade out (Phase 2)
  const textOpacity = useTransform(scrollYProgress, [0.3, 0.5], [1, 0]);
  const textY = useTransform(scrollYProgress, [0.3, 0.5], [0, -60]);

  // Dot grid opacity
  const dotOpacity = useTransform(scrollYProgress, [0, 0.4, 0.7], [0.18, 0.18, 0.3]);

  // Orb 1 scale & opacity
  const orb1Scale = useTransform(scrollYProgress, [0.4, 0.7, 0.85, 1.0], [1, 1.4, 1.0, 0.3]);
  const orb1Opacity = useTransform(scrollYProgress, [0.4, 0.7, 0.85, 1.0], [0.06, 0.12, 0.06, 0]);

  // Orb 2 scale & opacity
  const orb2Scale = useTransform(scrollYProgress, [0.4, 0.7, 0.85, 1.0], [1, 1.4, 1.0, 0.3]);
  const orb2Opacity = useTransform(scrollYProgress, [0.4, 0.7, 0.85, 1.0], [0.04, 0.1, 0.04, 0]);

  // Orb 3 (center, appears Phase 2)
  const orb3Scale = useTransform(scrollYProgress, [0.35, 0.65, 0.85, 1.0], [0, 1, 0.8, 0]);
  const orb3Opacity = useTransform(scrollYProgress, [0.35, 0.65, 0.85, 1.0], [0, 0.08, 0.04, 0]);

  // Energy line
  const lineScaleX = useTransform(scrollYProgress, [0, 0.4], [0, 1]);

  // Background color transition (Phase 3)
  const bgColor = useTransform(scrollYProgress, [0.7, 1.0], ["#0a0f0a", "#0d130d"]);

  // Reveal next section text (Phase 3)
  const revealOpacity = useTransform(scrollYProgress, [0.65, 0.85], [0, 1]);
  const revealY = useTransform(scrollYProgress, [0.65, 0.85], [40, 0]);

  // Mouse spotlight now handled by Spotlight component

  const stats = useMemo(() => [
    { value: 50, suffix: "+", label: "sites livrés" },
    { value: 14, suffix: "j", label: "délai moyen" },
    { value: 98, suffix: "%", label: "clients satisfaits" },
    { value: 497, suffix: "€", label: "dès" },
  ], []);

  const scrollHeight = isMobile ? "200vh" : "300vh";

  return (
    <div ref={containerRef} style={{ height: scrollHeight, position: "relative" }}>
      {/* Sticky hero viewport */}
      <motion.div
        ref={stickyRef}
        className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden"
        style={{ backgroundColor: bgColor }}
      >
        {/* Dot grid SVG background */}
        <motion.div
          className="absolute inset-0 z-0"
          style={{
            opacity: dotOpacity,
            backgroundImage: `radial-gradient(circle, #1DB954 1px, transparent 1px)`,
            backgroundSize: "30px 30px",
          }}
        />

        {/* Orb 1 - top left */}
        <motion.div
          className="absolute rounded-full z-0 pointer-events-none"
          style={{
            width: 600,
            height: 600,
            background: "rgba(29,185,84,1)",
            filter: "blur(120px)",
            top: -100,
            left: -100,
            scale: orb1Scale,
            opacity: orb1Opacity,
          }}
          animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut", repeatType: "mirror" }}
        />

        {/* Orb 2 - bottom right */}
        <motion.div
          className="absolute rounded-full z-0 pointer-events-none"
          style={{
            width: 500,
            height: 500,
            background: "rgba(29,185,84,1)",
            filter: "blur(100px)",
            bottom: -100,
            right: -50,
            scale: orb2Scale,
            opacity: orb2Opacity,
          }}
          animate={{ x: [0, -30, 0], y: [0, 20, 0] }}
          transition={{ duration: 28, repeat: Infinity, ease: "easeInOut", repeatType: "mirror" }}
        />

        {/* Orb 3 - center (appears Phase 2) */}
        <motion.div
          className="absolute rounded-full z-0 pointer-events-none"
          style={{
            width: 800,
            height: 800,
            background: "rgba(29,185,84,1)",
            filter: "blur(150px)",
            top: "50%",
            left: "50%",
            x: "-50%",
            y: "-50%",
            scale: orb3Scale,
            opacity: orb3Opacity,
          }}
        />

        {/* Spotlight 21st.dev */}
        <Spotlight
          fill="rgba(29,185,84,0.08)"
          fillSecondary="rgba(29,185,84,0.04)"
        />

        {/* Vignette */}
        <div
          className="absolute inset-0 pointer-events-none z-[1]"
          style={{
            background: "radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.5) 100%)",
          }}
        />

        {/* Hero content - fades out on scroll */}
        <motion.div
          className="relative z-[2] text-center section-container py-20"
          style={{ opacity: textOpacity, y: textY }}
        >
          <motion.div variants={stagger} initial="hidden" animate="visible">
            {/* Badge with pulsing glow */}
            <motion.div variants={blurUp(0)} className="flex justify-center mb-8">
              <span
                className="hero-badge font-dm text-[13px] font-semibold px-4 py-1.5 rounded-full text-primary"
                style={{
                  background: "rgba(29,185,84,0.15)",
                  border: "1px solid rgba(29,185,84,0.3)",
                  backdropFilter: "blur(8px)",
                }}
              >
                ⚡ Livraison en 14 jours
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={blurUp(0.1)}
              className="heading-display leading-tight mb-2"
              style={{ fontSize: "clamp(32px, 5vw, 56px)", letterSpacing: "0.02em" }}
            >
              LE SITE WEB DES
              <br />
              <span className="text-primary">PME LOCALES</span>
            </motion.h1>

            {/* Energy line */}
            <motion.div
              className="mx-auto mb-4"
              style={{
                height: 2,
                maxWidth: 280,
                background: "linear-gradient(90deg, transparent, #1DB954, transparent)",
                scaleX: lineScaleX,
                transformOrigin: "left",
              }}
            />

            {/* Rotating word */}
            <motion.p
              variants={blurUp(0.2)}
              className="heading-display mb-6 flex items-center justify-center gap-[0.3em] flex-wrap"
              style={{ fontSize: "clamp(24px, 3.5vw, 40px)" }}
            >
              <span>Votre meilleur</span>
              <RotatingWord />
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
              <Link to="/contact" className="btn-primary text-center">
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

            {/* Stats bar with count-up on view */}
            <motion.div
              ref={statsRef}
              variants={blurUp(0.5)}
              className="flex flex-wrap justify-center gap-x-0 gap-y-2 font-dm text-[13px]"
              style={{ color: "rgba(255,255,255,0.5)" }}
            >
              {stats.map((s, i) => (
                <motion.span
                  key={i}
                  className="flex items-center"
                  initial={{ opacity: 0, y: 10 }}
                  animate={statsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: i * 0.15, ease: "easeOut" }}
                >
                  {i > 0 && <span className="mx-3" style={{ color: "rgba(255,255,255,0.2)" }}>|</span>}
                  <span className="font-semibold text-white mr-1">
                    {s.label === "dès" ? s.label + " " : ""}
                    <CountUp target={s.value} suffix={s.suffix} trigger={statsInView} />
                  </span>
                  {s.label !== "dès" && <span>{s.label}</span>}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Phase 3 reveal text */}
        <motion.div
          className="absolute z-[3] text-center section-container"
          style={{ opacity: revealOpacity, y: revealY }}
        >
          <h2
            className="heading-display text-primary"
            style={{ fontSize: "clamp(24px, 4vw, 44px)" }}
          >
            Ce que nous créons pour vous
          </h2>
          <p
            className="font-dm text-[16px] mt-3 max-w-[480px] mx-auto"
            style={{ color: "rgba(255,255,255,0.6)" }}
          >
            Des sites qui convertissent, pensés pour votre métier.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HeroSection;
