import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logoImage from "@/assets/logo-altera.png";

const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [show, setShow] = useState(() => {
    return !sessionStorage.getItem("altera_loaded");
  });

  useEffect(() => {
    if (!show) {
      onComplete();
      return;
    }
    const timer = setTimeout(() => {
      setShow(false);
      sessionStorage.setItem("altera_loaded", "true");
      onComplete();
    }, 2800);
    return () => clearTimeout(timer);
  }, [show, onComplete]);

  if (!show && !sessionStorage.getItem("altera_loaded")) {
    return null;
  }

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center"
          style={{ backgroundColor: "#0a0f0a" }}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          {/* Background glow */}
          <motion.div
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            style={{
              background: "radial-gradient(circle at center, rgba(29,185,84,0.15) 0%, transparent 60%)",
            }}
          />

          <motion.div className="relative flex flex-col items-center">
            {/* Logo image with glow effect */}
            <motion.div
              className="relative"
              initial={{ scale: 0.8, opacity: 0, filter: "blur(20px)" }}
              animate={{ 
                scale: [0.8, 1.05, 1], 
                opacity: 1, 
                filter: "blur(0px)" 
              }}
              transition={{
                duration: 1.2,
                ease: [0.25, 0.4, 0.25, 1],
              }}
            >
              {/* Glow behind logo */}
              <motion.div
                className="absolute inset-0 -z-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 0.8, 0.4] }}
                transition={{ duration: 2, ease: "easeOut" }}
                style={{
                  background: "radial-gradient(circle, rgba(29,185,84,0.4) 0%, transparent 70%)",
                  filter: "blur(30px)",
                  transform: "scale(1.5)",
                }}
              />
              <img
                src={logoImage}
                alt="Altéra"
                className="h-16 md:h-20 w-auto object-contain"
              />
            </motion.div>

            {/* Loading bar */}
            <motion.div
              className="mt-8 w-48 h-[2px] bg-white/10 rounded-full overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <motion.div
                className="h-full rounded-full"
                style={{ backgroundColor: "hsl(145, 63%, 42%)" }}
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.8, delay: 0.9, ease: "easeInOut" }}
              />
            </motion.div>

            {/* Tagline */}
            <motion.p
              className="mt-4 text-sm font-dm"
              style={{ color: "rgba(255,255,255,0.4)" }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.5 }}
            >
              Digital Studio
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
