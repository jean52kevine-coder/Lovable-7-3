import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface RotatingWordsProps {
  words: string[];
  interval?: number;
  className?: string;
}

const RotatingWords = ({ words, interval = 2800, className = "" }: RotatingWordsProps) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % words.length), interval);
    return () => clearInterval(id);
  }, [words.length, interval]);

  return (
    <span className={`inline-block relative overflow-hidden align-bottom ${className}`} style={{ height: "1.15em" }}>
      {words.map((word, i) => (
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
          {word}
        </motion.span>
      ))}
    </span>
  );
};

export default RotatingWords;
