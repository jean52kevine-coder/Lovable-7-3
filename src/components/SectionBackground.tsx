import { useEffect, useRef } from "react";

type SectionBg = "hexflow" | "wavegrid" | "dots" | "none";

export default function SectionBackground({
  variant = "dots",
  intensity = 0.5,
}: {
  variant?: SectionBg;
  intensity?: number;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || variant === "none") return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId = 0;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    resize();
    window.addEventListener("resize", resize);

    if (variant === "dots") {
      const dots: Array<{ x: number; y: number; r: number; pulse: number; speed: number }> = [];
      const spacing = 48;
      for (let x = 0; x < canvas.width + spacing; x += spacing) {
        for (let y = 0; y < canvas.height + spacing; y += spacing) {
          dots.push({
            x: x + (Math.random() - 0.5) * 8,
            y: y + (Math.random() - 0.5) * 8,
            r: Math.random() * 1.2 + 0.4,
            pulse: Math.random() * Math.PI * 2,
            speed: 0.008 + Math.random() * 0.015,
          });
        }
      }
      const draw = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        dots.forEach((d) => {
          d.pulse += d.speed;
          const p = (Math.sin(d.pulse) + 1) / 2;
          ctx.beginPath();
          ctx.arc(d.x, d.y, d.r * (0.6 + p * 0.6), 0, Math.PI * 2);
          ctx.fillStyle = `rgba(29,185,84,${(0.04 + p * 0.08) * intensity})`;
          ctx.fill();
        });
        animationFrameId = requestAnimationFrame(draw);
      };
      draw();
    }

    if (variant === "wavegrid") {
      let t = 0;
      const cols = Math.ceil(canvas.width / 60) + 1;
      const rows = Math.ceil(canvas.height / 60) + 1;
      const draw = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        t += 0.012;
        for (let c = 0; c < cols; c++) {
          for (let r = 0; r < rows; r++) {
            const x = c * 60;
            const y = r * 60;
            const wave = Math.sin(t + c * 0.5 + r * 0.3);
            const alpha = ((wave + 1) / 2) * 0.06 * intensity;
            ctx.beginPath();
            ctx.arc(x, y, 1.5, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(29,185,84,${alpha})`;
            ctx.fill();
          }
        }
        for (let r = 0; r < rows; r++) {
          ctx.beginPath();
          for (let c = 0; c <= cols; c++) {
            const x = c * 60;
            const wave = Math.sin(t * 0.5 + c * 0.3 + r * 0.8);
            const y = r * 60 + wave * 8;
            if (c === 0) {
              ctx.moveTo(x, y);
            } else {
              ctx.lineTo(x, y);
            }
          }
          ctx.strokeStyle = `rgba(29,185,84,${0.025 * intensity})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
        animationFrameId = requestAnimationFrame(draw);
      };
      draw();
    }

    if (variant === "hexflow") {
      const hexSize = 40;
      const hexW = hexSize * 2;
      const hexH = Math.sqrt(3) * hexSize;
      const hexes: Array<{ x: number; y: number; pulse: number; active: boolean }> = [];
      const cols = Math.ceil(canvas.width / (hexW * 0.75)) + 2;
      const rows = Math.ceil(canvas.height / hexH) + 2;
      for (let c = 0; c < cols; c++) {
        for (let r = 0; r < rows; r++) {
          hexes.push({
            x: c * hexW * 0.75 - hexSize,
            y: r * hexH + (c % 2 === 0 ? 0 : hexH / 2) - hexH,
            pulse: Math.random() * Math.PI * 2,
            active: Math.random() > 0.7,
          });
        }
      }
      const drawHex = (x: number, y: number, size: number, alpha: number) => {
        ctx.beginPath();
        for (let i = 0; i < 6; i++) {
          const a = (Math.PI / 3) * i;
          const hx = x + size * Math.cos(a);
          const hy = y + size * Math.sin(a);
          if (i === 0) {
            ctx.moveTo(hx, hy);
          } else {
            ctx.lineTo(hx, hy);
          }
        }
        ctx.closePath();
        ctx.strokeStyle = `rgba(29,185,84,${alpha})`;
        ctx.lineWidth = 0.6;
        ctx.stroke();
      };
      const draw = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        hexes.forEach((h) => {
          h.pulse += h.active ? 0.025 : 0.008;
          const p = (Math.sin(h.pulse) + 1) / 2;
          const base = h.active ? 0.06 : 0.02;
          drawHex(h.x, h.y, hexSize - 2, (base + p * 0.08) * intensity);
        });
        animationFrameId = requestAnimationFrame(draw);
      };
      draw();
    }

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resize);
    };
  }, [variant, intensity]);

  return <canvas ref={canvasRef} className="absolute inset-0 h-full w-full pointer-events-none opacity-80" />;
}
