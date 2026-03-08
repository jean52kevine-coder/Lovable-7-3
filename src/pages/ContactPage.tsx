import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Layout from "@/components/Layout";
import { Send, User, Briefcase, MessageSquare, Check, ArrowRight, ArrowLeft, Globe, ShoppingCart, Wrench, Sparkles, Phone, Mail, MapPin } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";

const steps = [
  { icon: User, label: "Vos coordonnées", num: "01" },
  { icon: Briefcase, label: "Votre projet", num: "02" },
  { icon: MessageSquare, label: "Votre message", num: "03" },
];

const projectTypes = [
  { id: "vitrine", icon: Globe, label: "Site Vitrine", price: "497€", desc: "Présentez votre activité en ligne" },
  { id: "ecommerce", icon: ShoppingCart, label: "Site E-commerce", price: "747€", desc: "Vendez vos produits en ligne" },
  { id: "maintenance", icon: Wrench, label: "Maintenance", price: "dès 39€/mois", desc: "Gardez votre site performant" },
  { id: "autre", icon: Sparkles, label: "Autre projet", price: "Sur devis", desc: "Un besoin spécifique ? Parlons-en" },
];

const fadeSlide = {
  initial: { opacity: 0, x: 30 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.4, ease: "easeOut" as const } },
  exit: { opacity: 0, x: -30, transition: { duration: 0.3 } },
};

const ContactPage = () => {
  const [step, setStep] = useState(0);
  const [selectedProject, setSelectedProject] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <Layout>
        <section className="min-h-screen flex items-center justify-center" style={{ backgroundColor: "#0a0f0a" }}>
          <motion.div
            className="text-center section-container"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative w-20 h-20 rounded-full mx-auto mb-8">
              <GlowingEffect spread={60} glow proximity={100} inactiveZone={0.01} borderWidth={3} disabled={false} />
              <div className="relative z-10 w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center">
                <Check className="text-primary" size={40} />
              </div>
            </div>
            <h1 className="heading-display text-3xl md:text-5xl mb-4">
              DEMANDE <span className="text-primary">ENVOYÉE</span>
            </h1>
            <p className="font-dm text-lg text-muted-foreground max-w-md mx-auto mb-8">
              Merci pour votre confiance ! Nous vous répondrons sous 24h avec un devis personnalisé.
            </p>
            <div className="flex flex-wrap justify-center gap-6 font-dm text-[13px]" style={{ color: "rgba(255,255,255,0.4)" }}>
              <span>✓ Réponse sous 24h</span>
              <span>✓ Devis gratuit</span>
              <span>✓ Sans engagement</span>
            </div>
          </motion.div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-24 pb-12 md:pt-32 md:pb-16" style={{ backgroundColor: "#0a0f0a" }}>
        <motion.div
          className="section-container text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="heading-display text-4xl md:text-6xl mb-4">
            DEMANDEZ VOTRE <span className="text-primary">DEVIS GRATUIT</span>
          </h1>
          <p className="font-dm text-lg max-w-xl mx-auto text-muted-foreground">
            Remplissez le formulaire et recevez votre devis personnalisé sous 24h. Sans engagement.
          </p>
        </motion.div>
      </section>

      {/* Form */}
      <section className="pb-24" style={{ backgroundColor: "#0a0f0a" }}>
        <div className="section-container max-w-3xl mx-auto">
          {/* Stepper */}
          <motion.div
            className="relative mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex items-center justify-between relative">
              {/* Background line */}
              <div className="absolute top-5 left-[16%] right-[16%] h-[2px]" style={{ backgroundColor: "#1a2e1a" }} />
              <motion.div
                className="absolute top-5 left-[16%] h-[2px]"
                style={{ backgroundColor: "hsl(145, 63%, 42%)", transformOrigin: "left" }}
                animate={{ width: `${(step / 2) * 68}%` }}
                transition={{ duration: 0.4 }}
              />

              {steps.map((s, i) => (
                <button
                  key={i}
                  onClick={() => { if (i <= step) setStep(i); }}
                  className="relative z-10 flex flex-col items-center cursor-pointer group"
                  style={{ width: "33.33%" }}
                >
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-black font-display mb-2 transition-all duration-300"
                    style={{
                      backgroundColor: i <= step ? "hsl(145, 63%, 42%)" : "#1a2e1a",
                      color: i <= step ? "#000" : "rgba(255,255,255,0.4)",
                      boxShadow: i === step ? "0 0 20px rgba(29,185,84,0.3)" : "none",
                    }}
                  >
                    {i < step ? <Check size={16} /> : s.num}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <s.icon size={14} style={{ color: i <= step ? "hsl(145, 63%, 42%)" : "rgba(255,255,255,0.3)" }} />
                    <span className="text-xs font-dm hidden sm:inline" style={{ color: i <= step ? "#fff" : "rgba(255,255,255,0.35)" }}>
                      {s.label}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </motion.div>

          {/* Form card */}
          <div className="relative rounded-2xl">
            <GlowingEffect spread={50} glow proximity={80} inactiveZone={0.01} borderWidth={2} disabled={false} />
            <div
              className="relative z-10 rounded-2xl p-8 md:p-10"
              style={{ backgroundColor: "#111811", border: "1px solid #1a2e1a" }}
            >
              <AnimatePresence mode="wait">
                {/* Step 1 */}
                {step === 0 && (
                  <motion.div key="step-0" {...fadeSlide} className="space-y-6">
                    <div>
                      <h2 className="font-display font-bold text-xl text-white mb-1">Vos coordonnées</h2>
                      <p className="font-dm text-sm text-muted-foreground">Pour que nous puissions vous recontacter.</p>
                    </div>

                    <div className="space-y-5">
                      <div>
                        <label className="block text-sm font-dm font-medium text-foreground mb-2">Nom complet *</label>
                        <div className="relative">
                          <User size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
                          <input
                            type="text"
                            placeholder="Jean Dupont"
                            className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-background/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all font-dm"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-dm font-medium text-foreground mb-2">Email *</label>
                        <div className="relative">
                          <Mail size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
                          <input
                            type="email"
                            placeholder="jean@exemple.fr"
                            className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-background/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all font-dm"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-dm font-medium text-foreground mb-2">Téléphone</label>
                        <div className="relative">
                          <Phone size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
                          <input
                            type="tel"
                            placeholder="06 12 34 56 78"
                            className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-background/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all font-dm"
                          />
                        </div>
                      </div>
                    </div>

                    <button
                      onClick={() => setStep(1)}
                      className="w-full inline-flex items-center justify-center font-bold px-7 py-3.5 rounded-xl text-primary-foreground transition-all duration-200 hover:-translate-y-0.5 gap-2"
                      style={{ background: "hsl(145, 63%, 42%)" }}
                    >
                      Suivant <ArrowRight size={18} />
                    </button>
                  </motion.div>
                )}

                {/* Step 2 */}
                {step === 1 && (
                  <motion.div key="step-1" {...fadeSlide} className="space-y-6">
                    <div>
                      <h2 className="font-display font-bold text-xl text-white mb-1">Votre projet</h2>
                      <p className="font-dm text-sm text-muted-foreground">Sélectionnez le type de projet qui vous intéresse.</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {projectTypes.map((p) => (
                        <button
                          key={p.id}
                          onClick={() => setSelectedProject(p.id)}
                          className="relative rounded-xl text-left transition-all duration-200"
                        >
                          {selectedProject === p.id && (
                            <GlowingEffect spread={30} glow proximity={50} inactiveZone={0.01} borderWidth={2} disabled={false} />
                          )}
                          <div
                            className="relative z-10 rounded-xl p-4 transition-all duration-200"
                            style={{
                              backgroundColor: selectedProject === p.id ? "rgba(29,185,84,0.08)" : "#0d130d",
                              border: selectedProject === p.id ? "1px solid hsl(145, 63%, 42%)" : "1px solid #1a2e1a",
                            }}
                          >
                            <div className="flex items-start gap-3">
                              <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                                <p.icon className="text-primary" size={18} />
                              </div>
                              <div>
                                <div className="font-display font-bold text-sm text-white">{p.label}</div>
                                <div className="text-primary text-xs font-semibold font-dm">{p.price}</div>
                                <div className="text-muted-foreground text-xs font-dm mt-0.5">{p.desc}</div>
                              </div>
                            </div>
                            {selectedProject === p.id && (
                              <motion.div
                                className="absolute top-2 right-2"
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                              >
                                <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center">
                                  <Check size={12} className="text-primary-foreground" />
                                </div>
                              </motion.div>
                            )}
                          </div>
                        </button>
                      ))}
                    </div>

                    <div className="space-y-5">
                      <div>
                        <label className="block text-sm font-dm font-medium text-foreground mb-2">Nom de votre entreprise</label>
                        <div className="relative">
                          <Briefcase size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
                          <input
                            type="text"
                            placeholder="Mon Entreprise"
                            className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-background/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all font-dm"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-dm font-medium text-foreground mb-2">Secteur d'activité</label>
                        <div className="relative">
                          <MapPin size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
                          <input
                            type="text"
                            placeholder="Plomberie, Fleuristerie, Restauration…"
                            className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-background/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all font-dm"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <button
                        onClick={() => setStep(0)}
                        className="flex-1 inline-flex items-center justify-center font-bold px-6 py-3.5 rounded-xl transition-all duration-200 text-white gap-2"
                        style={{ border: "1px solid rgba(255,255,255,0.2)" }}
                      >
                        <ArrowLeft size={16} /> Retour
                      </button>
                      <button
                        onClick={() => setStep(2)}
                        className="flex-1 inline-flex items-center justify-center font-bold px-6 py-3.5 rounded-xl text-primary-foreground transition-all duration-200 hover:-translate-y-0.5 gap-2"
                        style={{ background: "hsl(145, 63%, 42%)" }}
                      >
                        Suivant <ArrowRight size={18} />
                      </button>
                    </div>
                  </motion.div>
                )}

                {/* Step 3 */}
                {step === 2 && (
                  <motion.div key="step-2" {...fadeSlide} className="space-y-6">
                    <div>
                      <h2 className="font-display font-bold text-xl text-white mb-1">Votre message</h2>
                      <p className="font-dm text-sm text-muted-foreground">Décrivez votre projet en quelques mots.</p>
                    </div>

                    <div className="space-y-5">
                      <div>
                        <label className="block text-sm font-dm font-medium text-foreground mb-2">Message *</label>
                        <textarea
                          rows={5}
                          placeholder="Décrivez votre projet, vos besoins, vos attentes…"
                          className="w-full px-4 py-3.5 rounded-xl bg-background/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all font-dm resize-none"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-dm font-medium text-foreground mb-2">Comment nous avez-vous trouvé ?</label>
                        <select className="w-full px-4 py-3.5 rounded-xl bg-background/50 border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all font-dm">
                          <option value="">Sélectionnez une option</option>
                          <option value="google">Google</option>
                          <option value="reseaux">Réseaux sociaux</option>
                          <option value="recommandation">Recommandation</option>
                          <option value="autre">Autre</option>
                        </select>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <button
                        onClick={() => setStep(1)}
                        className="flex-1 inline-flex items-center justify-center font-bold px-6 py-3.5 rounded-xl transition-all duration-200 text-white gap-2"
                        style={{ border: "1px solid rgba(255,255,255,0.2)" }}
                      >
                        <ArrowLeft size={16} /> Retour
                      </button>
                      <button
                        onClick={handleSubmit}
                        className="flex-1 inline-flex items-center justify-center font-bold px-6 py-3.5 rounded-xl text-primary-foreground transition-all duration-200 hover:-translate-y-0.5 gap-2"
                        style={{ background: "hsl(145, 63%, 42%)" }}
                      >
                        <Send size={16} /> Envoyer ma demande
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Micro-preuves */}
          <motion.div
            className="flex flex-wrap justify-center gap-6 mt-8 font-dm text-[13px]"
            style={{ color: "rgba(255,255,255,0.4)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <span>✓ Réponse sous 24h</span>
            <span>✓ Sans engagement</span>
            <span>✓ Devis personnalisé</span>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default ContactPage;
