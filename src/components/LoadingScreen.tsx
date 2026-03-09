import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AlteraLogo from "@/components/AlteraLogo";

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
    }, 2200);
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
          transition={{ duration: 0.4, delay: 0 }}
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
            {/* Logo */}
            <motion.div
              className="relative"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              {/* Glow behind logo */}
              <motion.div
                className="absolute inset-0 -z-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 0.8, 0.4] }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                style={{
                  background: "radial-gradient(circle, rgba(29,185,84,0.4) 0%, transparent 70%)",
                  filter: "blur(30px)",
                  transform: "scale(1.5)",
                }}
              />
              <AlteraLogo size="lg" />
            </motion.div>

            {/* Tagline "Digital Studio" */}
            <motion.p
              className="font-dm text-sm tracking-[0.3em] uppercase mt-4"
              style={{ color: "rgba(255,255,255,0.5)" }}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.5, ease: "easeOut" }}
            >
              Digital Studio
            </motion.p>

            {/* Green line */}
            <motion.div
              className="mt-5 h-[2px] rounded-full"
              style={{ backgroundColor: "hsl(145, 63%, 42%)", width: 80 }}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.5, delay: 0.9, ease: "easeOut" }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
