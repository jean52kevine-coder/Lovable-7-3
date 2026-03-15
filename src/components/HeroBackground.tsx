import { useEffect, useRef } from 'react';

type Variant = 'particles' | 'grid' | 'orbs' | 'circuit';

export default function HeroBackground({ 
  variant = 'particles' 
}: { variant?: Variant }) {

  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (variant !== 'particles' && variant !== 'circuit') return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const pts: Array<{
      x:number; y:number; vx:number; vy:number; r:number; a:number
    }> = Array.from({ length: 55 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      r: Math.random() * 1.8 + 0.4,
      a: Math.random() * 0.35 + 0.08,
    }));

    let id: number;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      pts.forEach(p => {
        p.x = (p.x + p.vx + canvas.width) % canvas.width;
        p.y = (p.y + p.vy + canvas.height) % canvas.height;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(29,185,84,${p.a})`;
        ctx.fill();
      });
      pts.forEach((a, i) => pts.slice(i+1).forEach(b => {
        const d = Math.hypot(a.x-b.x, a.y-b.y);
        if (d < 130) {
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.strokeStyle = `rgba(29,185,84,${0.09*(1-d/130)})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }));
      id = requestAnimationFrame(draw);
    };
    draw();
    return () => { cancelAnimationFrame(id); window.removeEventListener('resize', resize); };
  }, [variant]);

  // Grille SVG + 2 orbes
  if (variant === 'grid') return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <svg className="absolute inset-0 w-full h-full opacity-[0.035]">
        <defs>
          <pattern id="g" width="52" height="52" patternUnits="userSpaceOnUse">
            <path d="M52 0L0 0 0 52" fill="none" stroke="#1DB954" strokeWidth="0.6"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#g)"/>
      </svg>
      <div className="absolute -top-40 right-0 w-[500px] h-[400px]
        bg-[#1DB954]/7 rounded-full blur-[130px]
        animate-pulse" style={{animationDuration:'5s'}}/>
      <div className="absolute bottom-0 -left-20 w-[350px] h-[300px]
        bg-[#1DB954]/5 rounded-full blur-[110px]
        animate-pulse" style={{animationDuration:'7s'}}/>
    </div>
  );

  // Orbes flottants
  if (variant === 'orbs') return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <style>{`
        @keyframes floatA {
          0%,100%{transform:translate(0,0) scale(1)}
          50%{transform:translate(20px,-30px) scale(1.06)}
        }
        @keyframes floatB {
          0%,100%{transform:translate(0,0) scale(1)}
          50%{transform:translate(-15px,25px) scale(0.95)}
        }
      `}</style>
      <div className="absolute top-[-80px] left-[15%] w-[580px] h-[380px]
        bg-[#1DB954]/8 rounded-full blur-[150px]"
        style={{animation:'floatA 9s ease-in-out infinite'}}/>
      <div className="absolute bottom-[-60px] right-[10%] w-[420px] h-[320px]
        bg-[#1DB954]/5 rounded-full blur-[120px]"
        style={{animation:'floatB 11s ease-in-out infinite'}}/>
      <div className="absolute top-[40%] left-[50%] w-[200px] h-[200px]
        bg-[#1DB954]/3 rounded-full blur-[80px]"
        style={{animation:'floatA 7s ease-in-out infinite reverse'}}/>
    </div>
  );

  // Particles canvas (default + circuit)
  return (
    <canvas ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"/>
  );
}
