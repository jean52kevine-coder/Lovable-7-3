import { motion } from "framer-motion";
import { ReactNode } from "react";

interface BlurRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  direction?: "up" | "down" | "left" | "right";
  blur?: number;
}

const directionMap = {
  up: { y: 40 },
  down: { y: -40 },
  left: { x: 60 },
  right: { x: -60 },
};

const BlurReveal = ({
  children,
  className = "",
  delay = 0,
  duration = 0.8,
  direction = "up",
  blur = 12,
}: BlurRevealProps) => (
  <motion.div
    className={className}
    initial={{
      opacity: 0,
      filter: `blur(${blur}px)`,
      ...directionMap[direction],
    }}
    whileInView={{
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      x: 0,
    }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{
      duration,
      delay,
      ease: [0.25, 0.4, 0.25, 1],
    }}
  >
    {children}
  </motion.div>
);

export default BlurReveal;
