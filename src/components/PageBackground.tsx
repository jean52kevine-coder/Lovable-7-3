/**
 * Decorative page background — dot grid + floating orbs.
 * Wrap any page section or the whole <Layout> content.
 */
const PageBackground = () => (
  <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden>
    {/* Dot grid */}
    <div
      className="absolute inset-0 opacity-[0.07]"
      style={{
        backgroundImage: "radial-gradient(circle, hsl(var(--primary)) 1px, transparent 1px)",
        backgroundSize: "32px 32px",
      }}
    />

    {/* Orb top-left */}
    <div
      className="absolute -top-[200px] -left-[150px] w-[600px] h-[600px] rounded-full"
      style={{ background: "hsl(var(--primary) / 0.04)", filter: "blur(120px)" }}
    />

    {/* Orb bottom-right */}
    <div
      className="absolute -bottom-[180px] -right-[120px] w-[500px] h-[500px] rounded-full"
      style={{ background: "hsl(var(--primary) / 0.03)", filter: "blur(100px)" }}
    />

    {/* Orb center faint */}
    <div
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full"
      style={{ background: "hsl(var(--primary) / 0.02)", filter: "blur(150px)" }}
    />

    {/* Vignette */}
    <div
      className="absolute inset-0"
      style={{ background: "radial-gradient(ellipse at center, transparent 30%, hsl(var(--background)) 100%)" }}
    />
  </div>
);

export default PageBackground;
