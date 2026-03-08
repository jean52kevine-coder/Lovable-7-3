import { cn } from "@/lib/utils";

interface AlteraLogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  showText?: boolean;
}

const sizeMap = {
  sm: { icon: 28, text: "text-xl" },
  md: { icon: 36, text: "text-2xl" },
  lg: { icon: 48, text: "text-3xl" },
};

const AlteraLogo = ({ className = "", size = "md", showText = true }: AlteraLogoProps) => {
  const { icon, text } = sizeMap[size];

  return (
    <div className={cn("flex items-center gap-3", className)}>
      {/* Custom SVG Logo Mark */}
      <svg
        width={icon}
        height={icon}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0"
      >
        {/* Background shape - hexagonal with rounded corners */}
        <path
          d="M24 2L42 13V35L24 46L6 35V13L24 2Z"
          fill="url(#logoGradient)"
          stroke="hsl(145, 63%, 42%)"
          strokeWidth="1.5"
        />
        
        {/* Inner geometric pattern - stylized A */}
        <path
          d="M24 10L36 32H30L27 26H21L18 32H12L24 10Z"
          fill="hsl(var(--background))"
        />
        <path
          d="M24 18L27.5 25H20.5L24 18Z"
          fill="url(#logoGradient)"
        />
        
        {/* Accent lines */}
        <path
          d="M14 15L24 8L34 15"
          stroke="hsl(145, 63%, 50%)"
          strokeWidth="1"
          strokeLinecap="round"
          fill="none"
          opacity="0.6"
        />
        <path
          d="M14 33L24 40L34 33"
          stroke="hsl(145, 63%, 50%)"
          strokeWidth="1"
          strokeLinecap="round"
          fill="none"
          opacity="0.6"
        />
        
        {/* Glow effect */}
        <circle cx="24" cy="24" r="20" fill="url(#glowGradient)" />
        
        <defs>
          <linearGradient id="logoGradient" x1="6" y1="2" x2="42" y2="46" gradientUnits="userSpaceOnUse">
            <stop stopColor="hsl(145, 63%, 50%)" />
            <stop offset="1" stopColor="hsl(145, 63%, 35%)" />
          </linearGradient>
          <radialGradient id="glowGradient" cx="0.5" cy="0.5" r="0.5">
            <stop stopColor="hsl(145, 63%, 42%)" stopOpacity="0.15" />
            <stop offset="1" stopColor="transparent" stopOpacity="0" />
          </radialGradient>
        </defs>
      </svg>

      {/* Text Logo */}
      {showText && (
        <div className="flex flex-col leading-none">
          <span className={cn("heading-display tracking-wider text-foreground", text)}>
            ALTÉRA
          </span>
          <span className="text-[9px] tracking-[0.3em] text-primary font-medium uppercase opacity-80">
            Digital Studio
          </span>
        </div>
      )}
    </div>
  );
};

export default AlteraLogo;
