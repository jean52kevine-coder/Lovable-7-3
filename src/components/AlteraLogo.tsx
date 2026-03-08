import { cn } from "@/lib/utils";
import logoImage from "@/assets/logo-altera.png";

interface AlteraLogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

const sizeMap = {
  sm: { height: 40 },
  md: { height: 52 },
  lg: { height: 72 },
};

const AlteraLogo = ({ className = "", size = "md" }: AlteraLogoProps) => {
  const { height } = sizeMap[size];

  return (
    <img
      src={logoImage}
      alt="Altéra Digital Studio"
      className={cn("object-contain", className)}
      style={{ height: `${height}px`, width: "auto" }}
    />
  );
};

export default AlteraLogo;
