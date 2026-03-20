const PopularBadge = () => (
  <div className="flex justify-center mb-4">
    <div className="inline-flex items-center gap-2 rounded-full border border-[#1DB954]/50 bg-[#0f1f0f] px-4 py-1.5 shadow-[0_0_20px_rgba(29,185,84,0.2)]">
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#1DB954] opacity-60" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-[#1DB954]" />
      </span>
      <span
        className="text-[#1DB954] text-xs font-bold tracking-[0.15em] uppercase whitespace-nowrap"
        style={{ fontFamily: "'DM Sans', sans-serif" }}
      >
        Le plus choisi
      </span>
    </div>
  </div>
);

export default PopularBadge;
