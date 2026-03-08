"use client";

import { Link } from "react-router-dom";
import { CheckCircleIcon, Globe, ShoppingCart, ArrowRight } from "lucide-react";
import { CartesianGrid, Line, LineChart, XAxis } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { BorderBeam } from "@/components/ui/border-beam";
import { GlowingShadow } from "@/components/ui/glowing-shadow";

export function PricingWithChart() {
  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        {/* Site Vitrine */}
        <GlowingShadow className="glow-flex lg:col-span-2">
          <div className="relative rounded-2xl w-full">
          <div
            className="relative z-10 rounded-2xl p-7 h-full flex flex-col"
            style={{ backgroundColor: "hsl(var(--card-dark))", border: "1px solid hsl(var(--border-green))" }}
          >
            <div className="flex-1">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4" style={{ background: "hsl(var(--primary) / 0.1)" }}>
                <Globe className="text-primary" size={20} />
              </div>
              <h3 className="heading-display text-xl text-foreground mb-1">Site Vitrine</h3>
              <div className="flex items-baseline gap-1 mb-1">
                <span className="heading-display text-4xl text-primary">497€</span>
              </div>
              <p className="text-muted-foreground text-sm font-dm mb-6">Paiement unique · Idéal pour artisans et indépendants</p>

              <Link
                to="/services/site-vitrine"
                className="btn-primary text-center text-sm font-bold w-full block mb-6"
              >
                Choisir Vitrine <ArrowRight className="inline ml-1" size={14} />
              </Link>

              <div className="h-px w-full mb-6" style={{ background: "hsl(var(--border-green))" }} />

              <ul className="space-y-3">
                {[
                  "Design 100% sur-mesure",
                  "Jusqu'à 5 pages",
                  "Responsive mobile",
                  "SEO optimisé",
                  "Formulaire de contact",
                  "Hébergement 1 an inclus",
                  "Livraison en 14 jours",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-2.5">
                    <CheckCircleIcon className="text-primary flex-shrink-0" size={16} />
                    <span className="text-sm text-muted-foreground font-dm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </GlowingShadow>

        {/* Site E-commerce - Hero card with chart */}
        <GlowingShadow className="glow-flex lg:col-span-3">
          <div className="relative rounded-2xl w-full">
          <div
            className="relative z-10 rounded-2xl overflow-hidden h-full flex flex-col ring-2 ring-primary"
            style={{ backgroundColor: "hsl(var(--card-dark))", border: "1px solid hsl(145, 63%, 42%)" }}
          >
            <BorderBeam colorFrom="#1DB954" colorTo="#06B6D4" duration={4} size={200} />

            {/* Top: Pricing + Chart */}
            <div className="p-7 flex flex-col md:flex-row gap-6">
              <div className="flex-1">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4" style={{ background: "hsl(var(--primary) / 0.1)" }}>
                  <ShoppingCart className="text-primary" size={20} />
                </div>
                <span className="text-xs font-bold text-primary-foreground px-2.5 py-1 rounded-full mb-3 inline-block" style={{ background: "hsl(var(--primary))" }}>
                  ⭐ BEST SELLER
                </span>
                <h3 className="heading-display text-xl text-foreground mb-1">Site E-commerce</h3>
                <div className="flex items-baseline gap-1 mb-1">
                  <span className="heading-display text-4xl text-primary">747€</span>
                </div>
                <p className="text-muted-foreground text-sm font-dm">
                  Paiement unique · Pour vendre en ligne efficacement
                </p>
              </div>
              <div className="flex-1 min-w-0">
                <ROIChart />
              </div>
            </div>

            {/* Bottom: Features */}
            <div className="px-7 pb-7 flex-1 flex flex-col">
              <p className="text-xs font-semibold text-primary mb-3 font-dm">Tout ce qu'il faut pour vendre :</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-6 flex-1">
                {[
                  "Boutique complète",
                  "Jusqu'à 50 produits",
                  "Paiement sécurisé Stripe",
                  "Gestion des stocks",
                  "Responsive mobile",
                  "SEO avancé",
                  "Formation incluse",
                  "Hébergement 1 an inclus",
                  "Livraison en 14 jours",
                  "Support dédié",
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-2.5">
                    <CheckCircleIcon className="text-primary flex-shrink-0" size={16} />
                    <span className="text-sm text-muted-foreground font-dm">{item}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row items-center gap-3">
                <Link
                  to="/services/site-ecommerce"
                  className="btn-primary text-center text-sm font-bold w-full sm:w-auto px-8"
                >
                  Choisir E-commerce <ArrowRight className="inline ml-1" size={14} />
                </Link>
                <span className="text-xs text-muted-foreground font-dm">Paiement en 3x sans frais disponible</span>
              </div>
            </div>
          </div>
          </div>
        </GlowingShadow>
      </div>
    </div>
  );
}

function ROIChart() {
  const chartData = [
    { month: "Mois 1", clients: 2 },
    { month: "Mois 2", clients: 5 },
    { month: "Mois 3", clients: 9 },
    { month: "Mois 4", clients: 14 },
    { month: "Mois 5", clients: 18 },
    { month: "Mois 6", clients: 25 },
    { month: "Mois 7", clients: 30 },
    { month: "Mois 8", clients: 38 },
    { month: "Mois 9", clients: 44 },
    { month: "Mois 10", clients: 52 },
    { month: "Mois 11", clients: 60 },
    { month: "Mois 12", clients: 72 },
  ];

  const chartConfig = {
    clients: {
      label: "Nouveaux clients",
      color: "hsl(145 63% 42%)",
    },
  } satisfies ChartConfig;

  return (
    <Card className="bg-transparent border-0 shadow-none">
      <CardHeader className="p-0 pb-2">
        <CardTitle className="text-sm font-dm text-foreground">ROI estimé</CardTitle>
        <CardDescription className="text-xs font-dm">
          Nouveaux clients sur 12 mois*
        </CardDescription>
      </CardHeader>
      <CardContent className="p-0">
        <ChartContainer config={chartConfig} className="h-[140px] w-full">
          <LineChart data={chartData} margin={{ left: 0, right: 8, top: 8, bottom: 0 }}>
            <CartesianGrid vertical={false} stroke="hsl(var(--border-green))" strokeDasharray="3 3" />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.replace("Mois ", "M")}
              tick={{ fontSize: 10, fill: "hsl(var(--muted-foreground))" }}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <Line
              dataKey="clients"
              type="monotone"
              stroke="hsl(145 63% 42%)"
              strokeWidth={2}
              dot={false}
              activeDot={{ r: 4, fill: "hsl(145 63% 42%)" }}
            />
          </LineChart>
        </ChartContainer>
        <p className="text-[10px] text-muted-foreground mt-1 font-dm opacity-60">*Résultat fictif illustratif</p>
      </CardContent>
    </Card>
  );
}
