import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Message {
  role: "user" | "assistant";
  content: string;
}

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Bonjour 👋 Je suis l'assistant ALTÉRA. Vous avez un projet de site web ? Je peux vous renseigner sur nos offres, nos délais et nos tarifs.",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 300);
  }, [open]);

  const sendMessage = async () => {
    const text = input.trim();
    if (!text || loading) return;

    const newMessages: Message[] = [...messages, { role: "user", content: text }];
    setMessages(newMessages);
    setInput("");
    setLoading(true);

    try {
      const response = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "claude-sonnet-4-20250514",
          max_tokens: 1000,
          system: `Tu es l'assistant commercial d'ALTÉRA Digital Studio, 
une agence web française premium basée dans le Grand Est.
Tu réponds UNIQUEMENT en français, de façon concise (3-5 phrases max).
Ton objectif : convaincre le visiteur de demander un devis.

OFFRES :
- Site Vitrine : 497€ paiement unique, livraison 14 jours, design sur-mesure
- Site E-commerce : 747€ paiement unique, boutique complète, Stripe inclus
- Maintenance : dès 29€/mois, sans engagement

ARGUMENTS CLÉS :
- 0% template, 100% sur-mesure
- Livraison garantie en 14 jours
- Prix fixe, zéro surprise, tout inclus
- Support humain, réponse sous 24h
- Référencement Google inclus dès le premier jour

SI on te demande un devis ou un contact :
→ Dire "Remplissez notre formulaire sur altera.fr/contact, 
   réponse garantie sous 24h !"

NE JAMAIS inventer de prix différents.
NE JAMAIS parler de formation (on n'en propose pas).
Toujours rester positif, professionnel et convaincant.`,
          messages: newMessages.map((m) => ({
            role: m.role,
            content: m.content,
          })),
        }),
      });

      const data = await response.json();
      const reply = data.content?.[0]?.text || "Je n'ai pas pu répondre. Contactez-nous sur altera.fr/contact";

      setMessages((prev) => [...prev, { role: "assistant", content: reply }]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Une erreur s'est produite. Contactez-nous directement sur altera.fr/contact ou au 06 52 55 42 83.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKey = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div
      className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end gap-3"
      style={{ isolation: "isolate" }}
    >
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.94 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="w-[320px] bg-[#0d130d] border border-[#1a2e1a] rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.6)] flex flex-col"
            style={{ height: "460px" }}
          >
            <div className="bg-[#111811] border-b border-[#1a2e1a] p-4 flex items-center justify-between shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#1DB954]/15 border border-[#1DB954]/30 flex items-center justify-center text-[#1DB954] font-black text-sm">
                  A
                </div>
                <div>
                  <p className="text-white text-sm font-semibold">Assistant ALTÉRA</p>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1DB954] animate-pulse block" />
                    <span className="text-white/40 text-xs">En ligne · Répond instantanément</span>
                  </div>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="text-white/30 hover:text-white/70 transition-colors p-1.5 rounded-lg hover:bg-white/5"
              >
                <X size={15} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-3 scroll-smooth">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-[85%] px-3.5 py-2.5 rounded-2xl text-sm leading-relaxed ${
                      msg.role === "user"
                        ? "bg-[#1DB954] text-black font-medium rounded-br-sm"
                        : "bg-[#111811] border border-[#1a2e1a] text-white/80 rounded-bl-sm"
                    }`}
                  >
                    {msg.content}
                  </div>
                </div>
              ))}

              {loading && (
                <div className="flex justify-start">
                  <div className="bg-[#111811] border border-[#1a2e1a] px-4 py-3 rounded-2xl rounded-bl-sm flex items-center gap-1.5">
                    {[0, 1, 2].map((i) => (
                      <span
                        key={i}
                        className="w-1.5 h-1.5 rounded-full bg-[#1DB954]/60 block animate-bounce"
                        style={{ animationDelay: `${i * 0.15}s` }}
                      />
                    ))}
                  </div>
                </div>
              )}
              <div ref={bottomRef} />
            </div>

            {messages.length === 1 && (
              <div className="px-4 pb-2 flex flex-wrap gap-2 shrink-0">
                {["C'est combien ?", "Délai de livraison ?", "Je veux un devis"].map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => {
                      setInput(s);
                      setTimeout(() => sendMessage(), 50);
                    }}
                    className="text-xs bg-[#111811] border border-[#1a2e1a] text-white/60 hover:text-[#1DB954] hover:border-[#1DB954]/30 px-3 py-1.5 rounded-full transition-colors"
                  >
                    {s}
                  </button>
                ))}
              </div>
            )}

            <div className="p-3 border-t border-[#1a2e1a] flex gap-2 shrink-0">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKey}
                placeholder="Votre message..."
                className="flex-1 bg-[#111811] border border-[#1a2e1a] text-white/80 placeholder-white/25 text-sm rounded-xl px-3.5 py-2.5 outline-none focus:border-[#1DB954]/40 transition-colors"
              />
              <button
                type="button"
                onClick={sendMessage}
                disabled={!input.trim() || loading}
                className="bg-[#1DB954] hover:bg-[#17a349] disabled:opacity-40 disabled:cursor-not-allowed text-black p-2.5 rounded-xl transition-all hover:scale-105 active:scale-95 shrink-0"
              >
                {loading ? <Loader2 size={16} className="animate-spin" /> : <Send size={16} strokeWidth={2.5} />}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative">
        {!open && <span className="absolute inset-0 rounded-full bg-[#1DB954]/30 animate-ping" />}
        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          className="relative w-14 h-14 bg-[#1DB954] hover:bg-[#17a349] rounded-full shadow-[0_8px_30px_rgba(29,185,84,0.4)] flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95"
          aria-label="Ouvrir le chat"
        >
          <AnimatePresence mode="wait">
            {open ? (
              <motion.div
                key="x"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.15 }}
              >
                <X size={22} className="text-black" strokeWidth={2.5} />
              </motion.div>
            ) : (
              <motion.div
                key="msg"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.15 }}
              >
                <MessageCircle size={22} className="text-black" strokeWidth={2.5} />
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      </div>
    </div>
  );
}
