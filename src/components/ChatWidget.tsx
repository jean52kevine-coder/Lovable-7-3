import { useState } from "react";
import { MessageCircle, X, ArrowRight, Clock, Mail } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [showPulse, setShowPulse] = useState(true);
  const navigate = useNavigate();

  const handleOpen = () => {
    setOpen((prev) => !prev);
    setShowPulse(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="w-[300px] bg-[#0d130d] border border-[#1a2e1a] rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.5)]"
          >
            <div className="bg-[#111811] border-b border-[#1a2e1a] p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div
                  className="w-9 h-9 rounded-full bg-[#1DB954]/15 border border-[#1DB954]/30 flex items-center justify-center text-[#1DB954] font-black text-sm"
                  style={{ fontFamily: "'Barlow', sans-serif" }}
                >
                  A
                </div>
                <div>
                  <p className="text-white font-semibold text-sm" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                    ALTÉRA Studio
                  </p>
                  <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#1DB954] animate-pulse" />
                    <p className="text-white/40 text-xs" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      Répond sous 24h
                    </p>
                  </div>
                </div>
              </div>
              <button onClick={() => setOpen(false)} className="text-white/30 hover:text-white/70 transition-colors p-1">
                <X size={16} />
              </button>
            </div>

            <div className="p-4">
              <div className="bg-[#111811] border border-[#1a2e1a] rounded-xl rounded-tl-sm p-3.5 mb-4">
                <p className="text-white/80 text-sm leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  👋 Bonjour ! Un projet de site web ?
                </p>
                <p className="text-white/50 text-xs mt-2 leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  Devis gratuit · Réponse sous 24h · Livraison en 14 jours
                </p>
              </div>

              <div className="flex flex-col gap-2">
                <button
                  onClick={() => {
                    navigate("/contact");
                    setOpen(false);
                  }}
                  className="w-full min-h-11 flex items-center justify-between bg-[#1DB954] hover:bg-[#17a349] text-black font-semibold px-4 py-3 rounded-xl text-sm transition-all duration-200 group"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  <span>Demander un devis gratuit</span>
                  <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
                </button>

                <a
                  href="mailto:contact@altera.fr"
                  className="w-full min-h-11 flex items-center gap-2.5 border border-[#1a2e1a] hover:border-[#1DB954]/30 text-white/60 hover:text-white/80 px-4 py-3 rounded-xl text-sm transition-all duration-200"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  <Mail size={14} className="text-[#1DB954]" />
                  contact@altera.fr
                </a>
              </div>

              <div className="flex items-center gap-2 mt-3 text-white/25 text-xs" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                <Clock size={11} />
                <span>Disponible — Grand Est, France</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative">
        {showPulse && (
          <>
            <div className="absolute inset-0 rounded-full bg-[#1DB954]/20 animate-ping" />
            <div className="absolute -inset-1 rounded-full bg-[#1DB954]/10 animate-pulse" />
          </>
        )}
        <button
          onClick={handleOpen}
          className="relative w-14 h-14 bg-[#1DB954] hover:bg-[#17a349] rounded-full shadow-lg shadow-[#1DB954]/20 flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95"
          aria-label="Ouvrir le chat"
        >
          <AnimatePresence mode="wait">
            {open ? (
              <motion.div key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
                <X size={22} className="text-black" strokeWidth={2.5} />
              </motion.div>
            ) : (
              <motion.div key="msg" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
                <MessageCircle size={22} className="text-black" strokeWidth={2.5} />
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      </div>
    </div>
  );
}
