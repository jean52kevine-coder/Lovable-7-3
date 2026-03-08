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

  const longest = words.reduce((a, b) => (a.length > b.length ? a : b));

  return (
    <span className={`inline-flex justify-center relative overflow-hidden ${className}`} style={{ height: "1.15em" }}>
      <span className="invisible whitespace-nowrap">{longest}</span>
      {words.map((word, i) => (
        <motion.span
          key={word}
          className="absolute inset-0 flex items-center justify-center text-primary whitespace-nowrap"
          initial={false}
          animate={{
            y: i === index ? "0%" : i > index || (index === words.length - 1 && i === 0) ? "110%" : "-110%",
            opacity: i === index ? 1 : 0,
            filter: i === index ? "blur(0px)" : "blur(6px)",
          }}
          transition={{ duration: 0.45, ease: [0.25, 0.4, 0.25, 1] }}
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
};

export default RotatingWords;
