const PopularBadge = () => (
  <div
    className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0f1f0f] border border-[#1DB954]/50 shadow-[0_0_20px_rgba(29,185,84,0.2)]"
    style={{ fontFamily: "'DM Sans', sans-serif" }}
  >
    <span className="relative flex h-2 w-2">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#1DB954] opacity-60" />
      <span className="relative inline-flex rounded-full h-2 w-2 bg-[#1DB954]" />
    </span>
    <span className="text-[#1DB954] text-xs font-bold tracking-[0.15em] uppercase whitespace-nowrap">
      Le plus choisi
    </span>
  </div>
);

export default PopularBadge;
