import { motion } from "framer-motion";

type PatternType = "dots" | "grid" | "diagonal" | "cross" | "hexagons";

interface PageBackgroundProps {
  pattern?: PatternType;
  color?: string;
  opacity?: number;
  className?: string;
}

const patterns: Record<PatternType, (color: string) => string> = {
  dots: (c) =>
    `radial-gradient(circle, ${c} 1px, transparent 1px)`,
  grid: (c) =>
    `linear-gradient(${c} 1px, transparent 1px), linear-gradient(90deg, ${c} 1px, transparent 1px)`,
  diagonal: (c) =>
    `repeating-linear-gradient(45deg, transparent, transparent 20px, ${c} 20px, ${c} 21px)`,
  cross: (c) =>
    `radial-gradient(circle, ${c} 1px, transparent 1px), radial-gradient(circle, ${c} 1px, transparent 1px)`,
  hexagons: (c) =>
    `radial-gradient(circle at 50% 0%, ${c} 2px, transparent 2px), radial-gradient(circle at 0% 100%, ${c} 2px, transparent 2px), radial-gradient(circle at 100% 100%, ${c} 2px, transparent 2px)`,
};

const sizes: Record<PatternType, string> = {
  dots: "28px 28px",
  grid: "40px 40px, 40px 40px",
  diagonal: "auto",
  cross: "24px 24px, 24px 24px",
  hexagons: "30px 52px, 30px 52px, 30px 52px",
};

const positions: Record<PatternType, string | undefined> = {
  dots: undefined,
  grid: undefined,
  diagonal: undefined,
  cross: "0 0, 12px 12px",
  hexagons: "0 0, 15px 26px, 15px 26px",
};

const PageBackground = ({
  pattern = "dots",
  color = "rgba(29,185,84,0.15)",
  opacity = 1,
  className = "",
}: PageBackgroundProps) => (
  <div className={`fixed inset-0 pointer-events-none z-0 ${className}`} style={{ opacity }}>
    {/* Pattern layer */}
    <div
      className="absolute inset-0"
      style={{
        backgroundImage: patterns[pattern](color),
        backgroundSize: sizes[pattern],
        backgroundPosition: positions[pattern],
        opacity: 0.6,
      }}
    />
    {/* Radial vignette fade to black edges */}
    <div
      className="absolute inset-0"
      style={{
        background: "radial-gradient(ellipse at 50% 50%, transparent 20%, hsl(0 0% 7.1%) 80%)",
      }}
    />
  </div>
);

/* ─── Floating Orb (for hero sections) ─── */
interface FloatingOrbProps {
  color: string;
  size: number;
  x: string;
  y: string;
  delay?: number;
}

export const FloatingOrb = ({ color, size, x, y, delay = 0 }: FloatingOrbProps) => (
  <motion.div
    className="absolute rounded-full pointer-events-none"
    style={{
      width: size,
      height: size,
      left: x,
      top: y,
      background: `radial-gradient(circle, ${color}, transparent 70%)`,
      filter: "blur(60px)",
    }}
    animate={{
      x: [0, 30, -20, 0],
      y: [0, -25, 15, 0],
      scale: [1, 1.1, 0.95, 1],
    }}
    transition={{
      duration: 12,
      repeat: Infinity,
      ease: "easeInOut",
      delay,
    }}
  />
);

/* ─── Animated gradient line divider ─── */
export const GradientDivider = ({ color = "rgba(29,185,84,0.3)" }: { color?: string }) => (
  <div
    className="h-px w-full"
    style={{
      background: `linear-gradient(90deg, transparent, ${color}, transparent)`,
    }}
  />
);

export default PageBackground;
