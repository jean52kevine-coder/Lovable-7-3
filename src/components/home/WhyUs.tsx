import { Zap, BadgeEuro, TrendingUp, MessageCircle } from "lucide-react";

const items = [
  { Icon: Zap, title: "14 jours", desc: "Votre site est en ligne pendant que d'autres attendent encore leur devis." },
  { Icon: BadgeEuro, title: "Prix fixe", desc: "497€ vitrine, 747€ e-commerce. Aucun supplément caché." },
  { Icon: TrendingUp, title: "ROI concret", desc: "Conçu pour convertir les visiteurs en clients, pas juste pour faire joli." },
  { Icon: MessageCircle, title: "Support humain", desc: "Un vrai interlocuteur. Réponse dans la journée." },
];

const WhyUs = () => (
  <section className="py-24" style={{ backgroundColor: "hsl(var(--section-alt-bg))" }}>
    <div className="section-container">
      <div className="text-center mb-16">
        <h2 className="heading-display" style={{ fontSize: "clamp(28px, 4vw, 44px)" }}>
          POURQUOI <span className="text-primary">ALTÉRA</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map((item, i) => (
          <div
            key={i}
            className="rounded-xl p-6 text-center hover:-translate-y-1 transition-transform duration-300"
            style={{ backgroundColor: "hsl(var(--card-dark))", border: "1px solid hsl(var(--border-green))" }}
          >
            <div className="w-14 h-14 rounded-xl mx-auto mb-5 flex items-center justify-center" style={{ background: "hsl(var(--primary) / 0.1)" }}>
              <item.Icon className="text-primary" size={26} />
            </div>
            <h3 className="heading-display text-lg text-white mb-2">{item.title}</h3>
            <p className="font-dm text-sm" style={{ color: "hsl(var(--muted-foreground))" }}>{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyUs;
