import { useEffect, useRef } from 'react';

type Variant = 'particles' | 'grid' | 'orbs' | 'circuit' | 'radar';

export default function HeroBackground({ variant = 'particles' }:
  { variant?: Variant }) {

  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
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

    let animId: number;

    // ── PARTICLES + LIGNES (SiteVitrine, Contact)
    if (variant === 'particles') {
      const pts = Array.from({ length: 70 }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        r: Math.random() * 1.8 + 0.5,
        a: Math.random() * 0.4 + 0.1,
      }));
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
        pts.forEach((a, i) => pts.slice(i + 1).forEach(b => {
          const d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d < 140) {
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(29,185,84,${0.1 * (1 - d / 140)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }));
        animId = requestAnimationFrame(draw);
      };
      draw();
    }

    // ── CIRCUIT BOARD (Maintenance, Tarifs)
    if (variant === 'circuit') {
      const nodes: Array<{x:number;y:number;pulse:number;speed:number}> = [];
      const W = canvas.width, H = canvas.height;
      const COLS = Math.ceil(W / 80), ROWS = Math.ceil(H / 80);
      for (let c = 0; c <= COLS; c++) {
        for (let r = 0; r <= ROWS; r++) {
          if (Math.random() > 0.4) {
            nodes.push({
              x: c * 80 + (Math.random() - 0.5) * 20,
              y: r * 80 + (Math.random() - 0.5) * 20,
              pulse: Math.random() * Math.PI * 2,
              speed: 0.02 + Math.random() * 0.02,
            });
          }
        }
      }
      let t = 0;
      const draw = () => {
        ctx.clearRect(0, 0, W, H);
        t += 0.016;
        nodes.forEach(n => { n.pulse += n.speed; });
        // Lignes entre noeuds proches
        nodes.forEach((a, i) => nodes.slice(i + 1).forEach(b => {
          const d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d < 120) {
            const alpha = 0.06 * (1 - d / 120);
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(29,185,84,${alpha})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }));
        // Noeuds pulsants
        nodes.forEach(n => {
          const pulse = (Math.sin(n.pulse) + 1) / 2;
          ctx.beginPath();
          ctx.arc(n.x, n.y, 2.5 + pulse * 1.5, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(29,185,84,${0.12 + pulse * 0.25})`;
          ctx.fill();
          // Halo
          ctx.beginPath();
          ctx.arc(n.x, n.y, 6 + pulse * 4, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(29,185,84,${0.03 + pulse * 0.05})`;
          ctx.fill();
        });
        animId = requestAnimationFrame(draw);
      };
      draw();
    }

    // ── RADAR (Pourquoi, Services)
    if (variant === 'radar') {
      const cx = canvas.width / 2, cy = canvas.height / 2;
      let angle = 0;
      const dots: Array<{x:number;y:number;age:number}> = [];
      const draw = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        const maxR = Math.max(canvas.width, canvas.height) * 0.7;
        // Cercles concentriques
        [0.25, 0.45, 0.65, 0.85].forEach(f => {
          ctx.beginPath();
          ctx.arc(cx, cy, maxR * f, 0, Math.PI * 2);
          ctx.strokeStyle = 'rgba(29,185,84,0.06)';
          ctx.lineWidth = 0.8;
          ctx.stroke();
        });
        ctx.save();
        ctx.translate(cx, cy);
        ctx.rotate(angle);
        const sweep = ctx.createLinearGradient(0, 0, maxR, 0);
        sweep.addColorStop(0, 'rgba(29,185,84,0.18)');
        sweep.addColorStop(1, 'rgba(29,185,84,0)');
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.arc(0, 0, maxR, -0.4, 0);
        ctx.closePath();
        ctx.fillStyle = sweep;
        ctx.fill();
        ctx.restore();
        // Ligne radar
        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.lineTo(
          cx + Math.cos(angle) * maxR,
          cy + Math.sin(angle) * maxR
        );
        ctx.strokeStyle = 'rgba(29,185,84,0.5)';
        ctx.lineWidth = 1;
        ctx.stroke();
        // Dots qui apparaissent dans le sweep
        if (Math.random() < 0.06) {
          const r = Math.random() * maxR * 0.85;
          dots.push({
            x: cx + Math.cos(angle) * r,
            y: cy + Math.sin(angle) * r,
            age: 0,
          });
        }
        dots.forEach((d, i) => {
          d.age += 0.015;
          const alpha = Math.max(0, 0.6 - d.age);
          ctx.beginPath();
          ctx.arc(d.x, d.y, 2.5, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(29,185,84,${alpha})`;
          ctx.fill();
          if (d.age > 1) dots.splice(i, 1);
        });
        angle += 0.008;
        animId = requestAnimationFrame(draw);
      };
      draw();
    }

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, [variant]);

  // GRID (Ecommerce)
  if (variant === 'grid') return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <svg className="absolute inset-0 w-full h-full opacity-[0.04]">
        <defs>
          <pattern id="hgrid" width="56" height="56"
            patternUnits="userSpaceOnUse">
            <path d="M56 0L0 0 0 56" fill="none"
              stroke="#1DB954" strokeWidth="0.6"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hgrid)"/>
      </svg>
      <div className="absolute -top-32 right-[-10%] w-[550px] h-[420px]
        bg-[#1DB954]/8 rounded-full blur-[140px]"
        style={{animation:'pulse 5s ease-in-out infinite'}}/>
      <div className="absolute bottom-[-80px] left-[-5%] w-[400px] h-[350px]
        bg-[#1DB954]/5 rounded-full blur-[120px]"
        style={{animation:'pulse 8s ease-in-out infinite'}}/>
    </div>
  );

  // ORBS (fallback)
  if (variant === 'orbs') return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <style>{`
        @keyframes fa{0%,100%{transform:translate(0,0) scale(1)}
          50%{transform:translate(25px,-35px) scale(1.07)}}
        @keyframes fb{0%,100%{transform:translate(0,0) scale(1)}
          50%{transform:translate(-20px,28px) scale(0.94)}}
      `}</style>
      <div className="absolute -top-24 left-[10%] w-[600px] h-[400px]
        bg-[#1DB954]/7 rounded-full blur-[160px]"
        style={{animation:'fa 10s ease-in-out infinite'}}/>
      <div className="absolute -bottom-16 right-[8%] w-[450px] h-[340px]
        bg-[#1DB954]/5 rounded-full blur-[130px]"
        style={{animation:'fb 12s ease-in-out infinite'}}/>
      <div className="absolute top-[45%] left-[48%] w-[220px] h-[220px]
        bg-[#1DB954]/3 rounded-full blur-[90px]"
        style={{animation:'fa 7s ease-in-out infinite reverse'}}/>
    </div>
  );

  return (
    <canvas ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"/>
  );
}
