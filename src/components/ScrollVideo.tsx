import { type ReactNode, useEffect, useRef } from 'react';
import HeroBackground from '@/components/HeroBackground';

interface ScrollVideoProps {
  src: string;
  scrollHeight?: string;
  overlayContent?: ReactNode;
  poster?: string;
  scrubIntensity?: number;
}

export default function ScrollVideo({
  src,
  scrollHeight = '500vh',
  overlayContent,
  poster,
  scrubIntensity = 2.4,
}: ScrollVideoProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const rafRef = useRef<number>();

  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  useEffect(() => {
    if (isMobile) {
      return;
    }

    const video = videoRef.current;
    const container = containerRef.current;
    if (!video || !container) return;

    video.pause();
    video.currentTime = 0;
    video.preload = 'auto';
    video.load();

    const handleScroll = () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);

      rafRef.current = requestAnimationFrame(() => {
        const rect = container.getBoundingClientRect();
        const scrollable = container.offsetHeight - window.innerHeight;
        const scrolled = Math.max(0, -rect.top);
        const rawProgress = scrollable > 0 ? scrolled / scrollable : 0;
        const progress = Math.min(1, Math.max(0, rawProgress * scrubIntensity));

        if (video.duration && Number.isFinite(video.duration)) {
          video.currentTime = video.duration * progress;
        }

        const bar = document.getElementById('scroll-progress-bar');
        if (bar) bar.style.width = `${progress * 100}%`;
      });
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [isMobile]);

  if (isMobile) {
    return (
      <div className="relative h-screen flex items-center justify-center overflow-hidden bg-[#0a0f0a]">
        <img
          src={poster || src}
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-[#0a0f0a]/50" />
        <HeroBackground variant="constellation" />
        <div className="relative z-10 px-6 w-full">
          {overlayContent}
        </div>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      style={{ height: scrollHeight }}
      className="relative"
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <video
          ref={videoRef}
          src={src}
          poster={poster}
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ willChange: 'transform' }}
        />

        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f0a]/40 via-[#0a0f0a]/10 to-[#0a0f0a]/70 pointer-events-none z-10" />

        <div
          className="absolute inset-0 pointer-events-none z-10"
          style={{
            background: `radial-gradient(
              ellipse at center,
              transparent 40%,
              rgba(10,15,10,0.5) 100%
            )`,
          }}
        />

        {overlayContent && (
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center px-6">
            {overlayContent}
          </div>
        )}

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2">
          <span
            className="text-white/30 text-[10px] tracking-[0.25em] uppercase font-medium"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Scroll
          </span>
          <div className="flex flex-col gap-1">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="w-px h-2 bg-[#1DB954]/60 mx-auto rounded-full animate-bounce"
                style={{
                  animationDuration: '1.2s',
                  animationDelay: `${i * 0.15}s`,
                }}
              />
            ))}
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-white/5 z-20">
          <div
            id="scroll-progress-bar"
            className="h-full bg-gradient-to-r from-[#1DB954] to-[#06b6d4] transition-none"
            style={{ width: '0%' }}
          />
        </div>
      </div>
    </div>
  );
}
