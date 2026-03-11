interface Props {
  accentColor?: string;
}

export default function AnimatedHeroBg({ accentColor = "#1DB954" }: Props) {
  return (
    <div className="absolute inset-0 overflow-hidden -z-10">
      <div className="absolute inset-0 bg-[#0a0f0a]" />

      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: `radial-gradient(circle, ${accentColor} 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
        }}
      />

      <div
        className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full opacity-[0.12] blur-[80px] animate-pulse"
        style={{ background: accentColor, animationDuration: "4s" }}
      />

      <div
        className="absolute -bottom-40 -right-20 w-[400px] h-[400px] rounded-full opacity-[0.08] blur-[100px]"
        style={{ background: accentColor, animation: "pulse 6s ease-in-out infinite alternate" }}
      />

      <div
        className="absolute bottom-0 left-0 right-0 h-px opacity-30"
        style={{ background: `linear-gradient(to right, transparent, ${accentColor}, transparent)` }}
      />
    </div>
  );
}
