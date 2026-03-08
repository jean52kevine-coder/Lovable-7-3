import { Star } from "lucide-react";

const testimonials = [
  { text: "Mon agenda est plein 3 semaines à l'avance.", name: "Thomas B.", role: "Plombier · Lyon", badge: "+8 demandes/mois" },
  { text: "En 3 semaines, j'avais rentabilisé mon investissement.", name: "Sophie M.", role: "Fleuriste · Bordeaux", badge: "ROI en 3 semaines" },
  { text: "Les réservations ont augmenté dès le premier mois.", name: "Ahmed T.", role: "Restaurateur · Nantes", badge: "+55% réservations" },
];

const TrustBanner = () => (
  <section className="py-24" style={{ backgroundColor: "hsl(var(--background))" }}>
    <div className="section-container">
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6" style={{ background: "hsl(var(--primary) / 0.1)", border: "1px solid hsl(var(--primary) / 0.2)" }}>
          <Star className="text-primary fill-primary" size={16} />
          <span className="text-primary font-semibold text-sm">+50 clients satisfaits</span>
        </div>
        <h2 className="heading-display" style={{ fontSize: "clamp(28px, 4vw, 44px)" }}>
          ILS NOUS FONT <span className="text-primary">CONFIANCE</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="rounded-2xl p-7 flex flex-col hover:-translate-y-1 transition-transform duration-300"
            style={{ backgroundColor: "hsl(var(--card-dark))", border: "1px solid hsl(var(--border-green))" }}
          >
            <div className="flex gap-1 mb-4">
              {Array(5).fill(0).map((_, j) => (
                <Star key={j} className="text-primary fill-primary" size={14} />
              ))}
            </div>
            <p className="font-dm text-[15px] text-white italic leading-relaxed mb-5 flex-1">"{t.text}"</p>
            <span
              className="inline-block self-start text-[12px] font-semibold px-3 py-1 rounded-full text-primary mb-4"
              style={{ background: "hsl(var(--primary) / 0.12)", border: "1px solid hsl(var(--primary) / 0.25)" }}
            >
              {t.badge}
            </span>
            <div>
              <p className="font-dm font-semibold text-sm text-white">{t.name}</p>
              <p className="font-dm text-[13px] text-muted-foreground">{t.role}</p>
            </div>
            <p className="font-dm text-[10px] text-muted-foreground mt-3 opacity-60">*Résultat fictif illustratif</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TrustBanner;
