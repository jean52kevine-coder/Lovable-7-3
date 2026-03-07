import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
    }, 2400);
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
          transition={{ duration: 0.35, delay: 0.05 }}
        >
          <motion.div
            className="flex flex-col items-center"
            animate={{
              y: [0, 0, 0, -8, 0],
            }}
            transition={{
              duration: 2.4,
              times: [0, 0.66, 0.66, 0.73, 0.8],
              ease: "easeInOut",
            }}
          >
            <div className="flex items-center gap-3">
              {/* Logo square */}
              <motion.div
                className="w-14 h-14 rounded-xl flex items-center justify-center"
                style={{ backgroundColor: "hsl(145, 63%, 42%)" }}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                  duration: 0.5,
                  ease: [0.34, 1.56, 0.64, 1],
                }}
              >
                <span
                  className="text-white font-display font-black text-[28px]"
                  style={{ fontStyle: "italic" }}
                >
                  A
                </span>
              </motion.div>

              {/* ALTÉRA text */}
              <motion.span
                className="text-white font-display font-black text-[32px]"
                style={{ fontStyle: "italic" }}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.5 }}
              >
                ALTÉRA
              </motion.span>
            </div>

            {/* Green line */}
            <motion.div
              className="h-[2px] mt-3 w-full"
              style={{
                backgroundColor: "hsl(145, 63%, 42%)",
                transformOrigin: "left",
              }}
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
