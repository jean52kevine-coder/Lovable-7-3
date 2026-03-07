import { useRef, useEffect, useState, useCallback } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const WORDS = ["commercial", "vendeur", "atout", "levier", "avantage"];

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

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
          initial={{ clipPath: "inset(0 0 100% 0)" }}
          animate={{
            clipPath: i === index ? "inset(0 0 0% 0)" : "inset(100% 0 0% 0)",
          }}
          transition={{
            duration: i === index ? 0.45 : 0.35,
            ease: i === index ? "easeOut" : "easeIn",
          }}
        >
          {word}.
        </motion.span>
      ))}
    </span>
  );
};

const DotGrid = () => (
  <svg className="absolute inset-0 w-full h-full z-0 pointer-events-none" aria-hidden>
    <defs>
      <pattern id="dot-grid" x="0" y="0" width="28" height="28" patternUnits="userSpaceOnUse">
        <circle cx="14" cy="14" r="1" fill="hsl(145, 63%, 42%)" opacity="0.35" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#dot-grid)" />
  </svg>
);

const Orbs = () => (
  <>
    <div
      className="absolute pointer-events-none"
      style={{
        width: 500, height: 350, top: "-5%", left: "-5%",
        background: "rgba(29,185,84,0.12)", borderRadius: "50%",
        filter: "blur(80px)", animation: "float-a 18s ease-in-out infinite alternate",
      }}
    />
    <div
      className="absolute pointer-events-none"
      style={{
        width: 400, height: 280, bottom: "0%", right: "-5%",
        background: "rgba(29,185,84,0.07)", borderRadius: "50%",
        filter: "blur(80px)", animation: "float-b 22s ease-in-out infinite alternate",
      }}
    />
    <div
      className="absolute pointer-events-none"
      style={{
        width: 300, height: 200, top: "40%", right: "10%",
        background: "rgba(255,255,255,0.03)", borderRadius: "50%",
        filter: "blur(80px)", animation: "float-c 15s ease-in-out infinite alternate",
      }}
    />
  </>
);

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);

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

  const stats = [
    { value: 50, suffix: "+", label: "sites livrés" },
    { value: 14, suffix: "j", label: "délai moyen" },
    { value: 98, suffix: "%", label: "clients satisfaits" },
    { value: 497, suffix: "€", label: "dès" },
  ];

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: "#0a0f0a" }}
    >
      <DotGrid />
      <Orbs />

      {/* Spotlight */}
      <div
        className="absolute inset-0 pointer-events-none z-[1]"
        style={{
          background:
            "radial-gradient(500px circle at var(--mx, 50%) var(--my, 50%), rgba(29,185,84,0.06), transparent 70%)",
        }}
      />

      <motion.div
        className="relative z-[2] text-center section-container py-20"
        variants={stagger}
        initial="hidden"
        animate="visible"
      >
        {/* Badge */}
        <motion.div variants={fadeUp} className="flex justify-center mb-8">
          <span
            className="font-dm text-[13px] font-semibold px-4 py-1.5 rounded-full text-primary"
            style={{
              background: "rgba(29,185,84,0.1)",
              border: "1px solid rgba(29,185,84,0.35)",
            }}
          >
            ⚡ Livraison en 14 jours
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1 variants={fadeUp} className="heading-display leading-tight mb-2" style={{ fontSize: "clamp(32px, 5vw, 56px)", letterSpacing: "0.02em" }}>
          LE SITE WEB DES
          <br />
          <span className="text-primary">PME LOCALES</span>
        </motion.h1>

        {/* Rotating word */}
        <motion.p variants={fadeUp} className="heading-display mb-6" style={{ fontSize: "clamp(24px, 3.5vw, 40px)" }}>
          Votre meilleur <RotatingWord />
        </motion.p>

        {/* Subtitle */}
        <motion.p
          variants={fadeUp}
          className="font-dm text-[18px] mx-auto mb-10 max-w-[560px]"
          style={{ color: "rgba(255,255,255,0.65)" }}
        >
          Design sur-mesure, livraison en 14 jours, résultats concrets.
          Artisans, commerçants, PME — on s'occupe de tout.
        </motion.p>

        {/* CTAs */}
        <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center font-bold px-7 py-3.5 rounded-lg text-primary-foreground transition-all duration-200 hover:-translate-y-0.5"
            style={{ background: "hsl(145, 63%, 42%)" }}
          >
            Demander un devis →
          </Link>
          <Link
            to="/tarifs"
            className="inline-flex items-center justify-center font-bold px-7 py-3.5 rounded-lg transition-all duration-200 text-white hover:text-primary"
            style={{ border: "1px solid rgba(255,255,255,0.25)" }}
          >
            Voir les tarifs
          </Link>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          variants={fadeUp}
          className="flex flex-wrap justify-center gap-x-0 gap-y-2 font-dm text-[13px]"
          style={{ color: "rgba(255,255,255,0.45)" }}
        >
          {stats.map((s, i) => (
            <span key={i} className="flex items-center">
              {i > 0 && <span className="mx-3" style={{ color: "rgba(255,255,255,0.15)" }}>|</span>}
              <span className="font-semibold text-white mr-1">
                {s.label === "dès" ? s.label + " " : ""}
                <CountUp target={s.value} suffix={s.suffix} />
              </span>
              {s.label !== "dès" && <span>{s.label}</span>}
            </span>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
