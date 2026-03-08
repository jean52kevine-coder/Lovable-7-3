import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import BlurReveal from "@/components/animations/BlurReveal";
import showcaseImage from "@/assets/showcase-site-vitrine.jpg";

const ScrollShowcase = () => (
  <section
    className="relative overflow-hidden"
    style={{
      background: "linear-gradient(180deg, hsl(var(--background)) 0%, hsl(var(--section-alt-bg)) 50%, hsl(var(--background)) 100%)",
    }}
  >
    <ContainerScroll
      titleComponent={
        <BlurReveal>
          <p className="font-dm text-sm text-primary font-semibold tracking-wider uppercase mb-4">
            Réalisations Altéra
          </p>
          <h2 className="heading-display mb-4" style={{ fontSize: "clamp(28px, 4vw, 48px)" }}>
            UN SITE QUI VOUS{" "}
            <span className="text-primary">RESSEMBLE</span>
          </h2>
          <p className="font-dm text-base text-muted-foreground max-w-xl mx-auto">
            Chaque projet est unique. Voici un aperçu de ce que nous créons pour nos clients.
          </p>
        </BlurReveal>
      }
    >
      <img
        src={showcaseImage}
        alt="Site vitrine créé par Altéra pour une boulangerie artisanale"
        className="w-full h-full object-cover object-top rounded-2xl"
        draggable={false}
      />
    </ContainerScroll>
  </section>
);

export default ScrollShowcase;
