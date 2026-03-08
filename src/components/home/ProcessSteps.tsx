import { MessageSquare, Palette, Code2, Rocket } from "lucide-react";

const steps = [
  { num: "01", Icon: MessageSquare, title: "Échange découverte", desc: "Appel 30min. On étudie vos besoins." },
  { num: "02", Icon: Palette, title: "Maquette validée", desc: "Design sur-mesure en 48h." },
  { num: "03", Icon: Code2, title: "Développement", desc: "Code propre, rapide, SEO-ready." },
  { num: "04", Icon: Rocket, title: "Livraison", desc: "En ligne en 14 jours." },
];

const ProcessSteps = () => (
  <section className="py-24" style={{ backgroundColor: "hsl(var(--background))" }}>
    <div className="section-container">
      <div className="text-center mb-16">
        <h2 className="heading-display" style={{ fontSize: "clamp(28px, 4vw, 44px)" }}>
          VOTRE SITE EN <span className="text-primary">4 ÉTAPES</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((s, i) => (
          <div key={i} className="relative text-center">
            {/* Connector line (desktop only) */}
            {i < steps.length - 1 && (
              <div className="hidden lg:block absolute top-8 left-[calc(50%+32px)] right-[calc(-50%+32px)] h-px" style={{ background: "hsl(var(--border-green))" }} />
            )}

            <div className="w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center relative" style={{ background: "hsl(var(--primary) / 0.1)", border: "1px solid hsl(var(--primary) / 0.2)" }}>
              <s.Icon className="text-primary" size={28} />
            </div>
            <span className="heading-display text-primary text-sm block mb-1">{s.num}</span>
            <h3 className="heading-display text-base text-white mb-1">{s.title}</h3>
            <p className="font-dm text-sm" style={{ color: "hsl(var(--muted-foreground))" }}>{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProcessSteps;
