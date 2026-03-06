import { useState } from "react";
import AnimatedSection from "@/components/AnimatedSection";
import Layout from "@/components/Layout";
import { Send, User, Briefcase, MessageSquare } from "lucide-react";

const steps = [
  { icon: User, label: "Vos coordonnées" },
  { icon: Briefcase, label: "Votre projet" },
  { icon: MessageSquare, label: "Votre message" },
];

const ContactPage = () => {
  const [step, setStep] = useState(0);

  return (
    <Layout>
      <AnimatedSection className="section-padding bg-background">
        <div className="section-container text-center">
          <h1 className="heading-display text-4xl md:text-6xl mb-4">
            Demandez votre <span className="text-gradient">devis gratuit</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Remplissez le formulaire ci-dessous et recevez votre devis personnalisé sous 24h.
          </p>
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-padding bg-card">
        <div className="section-container max-w-2xl mx-auto">
          {/* Stepper */}
          <div className="flex items-center justify-center gap-4 mb-12">
            {steps.map((s, i) => (
              <button
                key={i}
                onClick={() => setStep(i)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  i === step
                    ? "bg-primary text-primary-foreground"
                    : i < step
                    ? "bg-primary/20 text-primary"
                    : "bg-secondary text-muted-foreground"
                }`}
              >
                <s.icon size={16} />
                <span className="hidden sm:inline">{s.label}</span>
                <span className="sm:hidden">{i + 1}</span>
              </button>
            ))}
          </div>

          {/* Étape 1 */}
          {step === 0 && (
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Nom complet</label>
                <input
                  type="text"
                  placeholder="Jean Dupont"
                  className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                <input
                  type="email"
                  placeholder="jean@exemple.fr"
                  className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Téléphone</label>
                <input
                  type="tel"
                  placeholder="06 12 34 56 78"
                  className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <button onClick={() => setStep(1)} className="btn-primary w-full">
                Suivant
              </button>
            </div>
          )}

          {/* Étape 2 */}
          {step === 1 && (
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Type de projet</label>
                <select className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary">
                  <option value="">Sélectionnez une option</option>
                  <option value="vitrine">Site Vitrine — 486€</option>
                  <option value="ecommerce">Site E-commerce — 747€</option>
                  <option value="maintenance">Maintenance</option>
                  <option value="autre">Autre</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Nom de votre entreprise</label>
                <input
                  type="text"
                  placeholder="Mon Entreprise"
                  className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Secteur d'activité</label>
                <input
                  type="text"
                  placeholder="Plomberie, Fleuristerie, Restauration…"
                  className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div className="flex gap-4">
                <button onClick={() => setStep(0)} className="btn-outline flex-1">
                  Retour
                </button>
                <button onClick={() => setStep(2)} className="btn-primary flex-1">
                  Suivant
                </button>
              </div>
            </div>
          )}

          {/* Étape 3 */}
          {step === 2 && (
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Votre message</label>
                <textarea
                  rows={5}
                  placeholder="Décrivez votre projet, vos besoins, vos attentes…"
                  className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Comment nous avez-vous trouvé ?</label>
                <select className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary">
                  <option value="">Sélectionnez une option</option>
                  <option value="google">Google</option>
                  <option value="reseaux">Réseaux sociaux</option>
                  <option value="recommandation">Recommandation</option>
                  <option value="autre">Autre</option>
                </select>
              </div>
              <div className="flex gap-4">
                <button onClick={() => setStep(1)} className="btn-outline flex-1">
                  Retour
                </button>
                <button className="btn-primary flex-1 flex items-center justify-center gap-2">
                  <Send size={18} />
                  Envoyer ma demande
                </button>
              </div>
            </div>
          )}
        </div>
      </AnimatedSection>
    </Layout>
  );
};

export default ContactPage;
