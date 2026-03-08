import { cn } from "@/lib/utils";
import logoImage from "@/assets/logo-altera.png";

interface AlteraLogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

const sizeMap = {
  sm: { height: 56 },
  md: { height: 96 },
  lg: { height: 120 },
};

const AlteraLogo = ({ className = "", size = "md" }: AlteraLogoProps) => {
  const { height } = sizeMap[size];

  return (
    <img
      src={logoImage}
      alt="Altéra Digital Studio"
      className={cn("object-contain max-h-full", className)}
      style={{ height: `${height}px`, maxHeight: '100%', width: "auto" }}
    />
  );
};

export default AlteraLogo;
