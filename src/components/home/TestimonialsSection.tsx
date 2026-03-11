import { Star } from "lucide-react";
import BlurReveal from "@/components/animations/BlurReveal";
import { TestimonialsColumn } from "@/components/ui/testimonials-columns";

const testimonials = [
  { text: "Mon agenda est plein 3 semaines à l'avance depuis la mise en ligne.", name: "Thomas B.", role: "Plombier · Lyon", image: "https://randomuser.me/api/portraits/men/32.jpg" },
  { text: "En 3 semaines, j'avais rentabilisé mon investissement.", name: "Sophie M.", role: "Fleuriste · Bordeaux", image: "https://randomuser.me/api/portraits/women/44.jpg" },
  { text: "Les réservations ont augmenté dès le premier mois.", name: "Ahmed T.", role: "Restaurateur · Nantes", image: "https://randomuser.me/api/portraits/men/75.jpg" },
  { text: "Livraison en 12 jours comme promis. Je recommande à 100%.", name: "Camille R.", role: "Créatrice de bijoux", image: "https://randomuser.me/api/portraits/women/65.jpg" },
  { text: "Simple, efficace, abordable. Exactement ce qu'il me fallait.", name: "Dr. Marc L.", role: "Ostéopathe · Paris", image: "https://randomuser.me/api/portraits/men/46.jpg" },
  { text: "Réactivité impressionnante. Une question le soir, réponse le matin.", name: "Yasmine B.", role: "Coach sportive · Marseille", image: "https://randomuser.me/api/portraits/women/26.jpg" },
  { text: "Notre boutique e-commerce a doublé nos ventes en 2 mois.", name: "Jean-Laurent M.", role: "Commerçant · Lille", image: "https://randomuser.me/api/portraits/men/52.jpg" },
  { text: "Je ne suis pas informaticien et ils ont tout géré. Site bluffant.", name: "Nathalie P.", role: "Artisan céramiste", image: "https://randomuser.me/api/portraits/women/58.jpg" },
  { text: "Mes clients me trouvent enfin sur Google. C'est un game changer.", name: "Olivier D.", role: "Électricien · Strasbourg", image: "https://randomuser.me/api/portraits/men/64.jpg" },
];

const col1 = testimonials.slice(0, 3);
const col2 = testimonials.slice(3, 6);
const col3 = testimonials.slice(6, 9);

const TestimonialsSection = () => (
  <section className="py-24 relative overflow-hidden">
    <div className="absolute inset-0 z-0" style={{ background: "radial-gradient(circle at 20% 20%, hsl(var(--primary) / 0.08), transparent 40%), linear-gradient(180deg, hsl(var(--background)) 0%, transparent 20%, transparent 80%, hsl(var(--background)) 100%)" }} />

    <div className="section-container relative z-10">
      <BlurReveal className="text-center mb-14">
        <div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
          style={{ background: "hsl(var(--primary) / 0.1)", border: "1px solid hsl(var(--primary) / 0.2)" }}
        >
          <Star className="text-primary fill-primary" size={16} />
          <span className="text-primary font-semibold text-sm">+50 clients satisfaits</span>
        </div>
        <h2 className="heading-display" style={{ fontSize: "clamp(28px, 4vw, 44px)" }}>
          ILS NOUS FONT{" "}<span className="text-primary whitespace-nowrap">CONFIANCE</span>
        </h2>
      </BlurReveal>

      <div className="flex justify-center gap-6 [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)] max-h-[600px] overflow-hidden">
        <TestimonialsColumn testimonials={col1} duration={15} className="hidden md:block" />
        <TestimonialsColumn testimonials={col2} duration={19} />
        <TestimonialsColumn testimonials={col3} duration={17} className="hidden lg:block" />
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
