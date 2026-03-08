import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import saasVideo from "@/assets/videos/saas-dashboard.mp4";

const ScrollShowcase = () => (
  <section className="relative overflow-hidden" style={{ background: "hsl(var(--background))" }}>
    <ContainerScroll
      titleComponent={
        <div className="flex flex-col items-center">
          <span
            className="inline-block font-dm text-[13px] font-semibold px-4 py-1.5 rounded-full text-primary mb-6"
            style={{
              background: "hsl(var(--primary) / 0.12)",
              border: "1px solid hsl(var(--primary) / 0.25)",
            }}
          >
            🎨 Aperçu en action
          </span>
          <h2 className="heading-display mb-4" style={{ fontSize: "clamp(28px, 4.5vw, 52px)" }}>
            DES SITES QUI ONT DU <span className="text-primary">STYLE</span>
          </h2>
          <p
            className="font-dm text-base max-w-lg mx-auto"
            style={{ color: "hsl(var(--muted-foreground))" }}
          >
            Design moderne, animations fluides, performance optimale — chaque
            projet est conçu pour impressionner.
          </p>
        </div>
      }
    >
      <video
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-full object-cover rounded-xl"
      >
        <source src={saasVideo} type="video/mp4" />
      </video>
    </ContainerScroll>
  </section>
);

export default ScrollShowcase;
