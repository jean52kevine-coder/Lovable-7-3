"use client";

import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";
import { useRef } from "react";
import confetti from "canvas-confetti";
import NumberFlow from "@number-flow/react";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { BorderBeam } from "@/components/ui/border-beam";
import BlurReveal from "@/components/animations/BlurReveal";
import { GlowingShadow } from "@/components/ui/glowing-shadow";

interface MaintenancePlan {
  name: string;
  price: number;
  features: string[];
  description: string;
  buttonText: string;
  href: string;
  isPopular: boolean;
}

const maintenancePlans: MaintenancePlan[] = [
  {
    name: "ESSENTIELLE",
    price: 39,
    features: [
      "Mises à jour de sécurité",
      "Sauvegardes hebdomadaires",
      "Support email",
      "Temps de réponse 48h",
    ],
    description: "Maintenance de base pour garder votre site fonctionnel",
    buttonText: "Souscrire",
    href: "/contact?service=maintenance-essentielle",
    isPopular: false,
  },
  {
    name: "PROFESSIONNELLE",
    price: 49,
    features: [
      "Mises à jour de sécurité",
      "Sauvegardes quotidiennes",
      "Support email & téléphone",
      "2 modifications/mois",
      "Monitoring 24/7",
      "Rapport mensuel",
      "Temps de réponse 24h",
    ],
    description: "Notre recommandation pour la tranquillité d'esprit",
    buttonText: "Souscrire",
    href: "/contact",
    isPopular: true,
  },
  {
    name: "PREMIUM",
    price: 59,
    features: [
      "Mises à jour de sécurité",
      "Sauvegardes temps réel",
      "Support prioritaire 7j/7",
      "Modifications illimitées",
      "Monitoring 24/7",
      "Rapport hebdomadaire",
      "Optimisation SEO",
      "Temps de réponse 4h",
    ],
    description: "Tranquillité totale, performances maximales",
    buttonText: "Souscrire",
    href: "/contact",
    isPopular: false,
  },
];

export function PricingMaintenance() {
  return (
    <div className="w-full max-w-5xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {maintenancePlans.map((plan, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.12, duration: 0.5 }}
            className="relative rounded-2xl"
          >
            <GlowingShadow className={cn("glow-flex", plan.isPopular && "md:-mt-4 md:mb-4")}>
            <div className="w-full relative">
            {plan.isPopular && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 z-20 text-xs font-bold px-3 py-1 rounded-full text-primary-foreground flex items-center gap-1" style={{ background: "hsl(var(--primary))" }}>
                <Star className="h-3 w-3 fill-current" /> RECOMMANDÉ
              </span>
            )}

            <div
              className={cn(
                "relative z-10 rounded-2xl p-7 flex flex-col h-full overflow-hidden",
                plan.isPopular && "ring-2 ring-primary"
              )}
              style={{
                backgroundColor: "hsl(var(--card-dark))",
                border: plan.isPopular ? "1px solid hsl(145, 63%, 42%)" : "1px solid hsl(var(--border-green))",
              }}
            >
              {plan.isPopular && <BorderBeam colorFrom="#1DB954" colorTo="#06B6D4" duration={4} size={200} />}

              <h3 className="heading-display text-lg text-foreground mb-4 mt-1">{plan.name}</h3>

              <div className="flex items-baseline gap-1 mb-1">
                <NumberFlow
                  value={plan.price}
                  format={{ style: "currency", currency: "EUR", minimumFractionDigits: 0 }}
                  transformTiming={{ duration: 500, easing: "ease-out" }}
                  willChange
                  className="heading-display text-4xl text-primary tabular-nums"
                />
                <span className="text-muted-foreground text-sm font-dm">/ mois</span>
              </div>

              <p className="text-muted-foreground text-xs font-dm mb-6">Sans engagement</p>

              <ul className="space-y-3 flex-1 mb-6">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2.5">
                    <Check className="text-primary flex-shrink-0" size={16} />
                    <span className="text-sm text-muted-foreground font-dm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                to={plan.href}
                className={cn(
                  "text-center text-sm font-bold block",
                  plan.isPopular ? "btn-primary" : "btn-outline"
                )}
              >
                {plan.buttonText}
              </Link>

              <p className="text-xs text-center text-muted-foreground mt-3 font-dm">
                {plan.description}
              </p>
            </div>
            </div>
            </GlowingShadow>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
