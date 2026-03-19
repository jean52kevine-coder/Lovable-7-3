import { Link } from 'react-router-dom';
import RotatingWords from '@/components/RotatingWords';
import ScrollVideo from '@/components/ScrollVideo';
import heroVideo from '@/assets/videos/hero-promo.mp4';
import heroPoster from '@/assets/hero-home.jpg';

const heroWords = ['PME LOCALES', 'ARTISANS', 'COMMERÇANTS', 'INDÉPENDANTS'];

const HeroHome = () => {
  const heroContent = (
    <div className="section-container relative z-10 py-20 flex flex-col items-center text-center">
      <span
        className="inline-flex items-center gap-2 mb-8 bg-white/5 border border-white/10 backdrop-blur-sm rounded-full px-4 py-2"
      >
        <span className="flex h-2 w-2 relative">
          <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-[#1DB954] opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-[#1DB954]" />
        </span>
        <span
          className="text-white/70 text-xs tracking-[0.2em] uppercase"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          Livraison en 14 jours
        </span>
      </span>

      <h1 className="heading-display leading-[1.05] mb-4" style={{ fontSize: 'clamp(36px, 5.5vw, 64px)' }}>
        LE SITE WEB
        <br />
        <span className="flex justify-center items-center w-full overflow-visible whitespace-nowrap">
          DES <RotatingWords words={heroWords} />
        </span>
      </h1>

      <p className="font-dm text-lg max-w-[480px] mx-auto mb-8 text-white/70">
        Design sur-mesure, livré en 14 jours.
        <br className="hidden sm:block" />
        Artisans, commerçants, PME — on s'occupe de tout.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
        <Link
          to="/contact"
          className="group relative inline-flex items-center gap-2.5 bg-[#1DB954] hover:bg-[#17a349] text-black font-bold px-8 py-4 rounded-xl transition-all duration-200 hover:scale-[1.03] hover:shadow-[0_0_30px_rgba(29,185,84,0.4)] active:scale-[0.98] overflow-hidden text-sm"
        >
          <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12" />
          <span className="relative">Demander un devis gratuit</span>
          <span className="relative text-lg">→</span>
        </Link>
        <Link
          to="/tarifs"
          className="inline-flex items-center gap-2 border border-white/15 hover:border-[#1DB954]/40 text-white/70 hover:text-white px-8 py-4 rounded-xl transition-all duration-200 hover:bg-white/[0.03] backdrop-blur-sm text-sm font-medium"
        >
          Voir les tarifs →
        </Link>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-14 pt-10 border-t border-white/8 max-w-lg mx-auto sm:max-w-none w-full">
        {[
          { val: '14j', label: 'Livraison' },
          { val: '497€', label: 'À partir de' },
          { val: '100%', label: 'Sur-mesure' },
          { val: '24h', label: 'Réponse' },
        ].map((s) => (
          <div key={s.label} className="text-center">
            <div
              className="text-[#1DB954] font-black text-2xl leading-none"
              style={{ fontFamily: "'Barlow', sans-serif" }}
            >
              {s.val}
            </div>
            <div
              className="text-white/35 text-xs mt-1.5"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section className="relative overflow-hidden" style={{ backgroundColor: 'hsl(var(--hero-bg))' }}>
      <ScrollVideo
        src={heroVideo}
        scrollHeight="180vh"
        overlayContent={heroContent}
        poster={heroPoster}
        scrubIntensity={2.4}
      />
    </section>
  );
};

export default HeroHome;
