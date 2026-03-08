import { motion } from "framer-motion";
import { Play, Pause } from "lucide-react";
import { useState, useRef } from "react";
import BlurReveal from "@/components/animations/BlurReveal";
import saasVideo from "@/assets/videos/saas-dashboard.mp4";
import techVideo from "@/assets/videos/tech-interface.mp4";
import ecommerceVideo from "@/assets/videos/ecommerce-showcase.mp4";

const showcases = [
  {
    video: saasVideo,
    title: "Design Premium",
    subtitle: "Interfaces modernes et élégantes",
    accent: "#1DB954", // Green
  },
  {
    video: techVideo,
    title: "Performance Optimale",
    subtitle: "Vitesse et fluidité garanties",
    accent: "#00D4FF", // Cyan
  },
  {
    video: ecommerceVideo,
    title: "Mobile First",
    subtitle: "Parfait sur tous les écrans",
    accent: "#FF6B35", // Orange
  },
];

const VideoCard = ({ showcase, index }: { showcase: typeof showcases[0]; index: number }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      whileHover={{ y: -8 }}
      className="relative group rounded-2xl overflow-hidden"
      style={{
        boxShadow: `0 20px 60px -15px ${showcase.accent}30`,
      }}
    >
      {/* Video */}
      <div className="relative aspect-video overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        >
          <source src={showcase.video} type="video/mp4" />
        </video>

        {/* Colored overlay */}
        <div 
          className="absolute inset-0 opacity-20 group-hover:opacity-10 transition-opacity duration-500"
          style={{ 
            background: `linear-gradient(135deg, ${showcase.accent}40 0%, transparent 60%)` 
          }}
        />

        {/* Bottom gradient */}
        <div 
          className="absolute inset-x-0 bottom-0 h-1/2"
          style={{ 
            background: `linear-gradient(to top, rgba(10,15,10,0.95) 0%, transparent 100%)` 
          }}
        />

        {/* Play/Pause button */}
        <button
          onClick={togglePlay}
          className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity border border-white/20 hover:bg-black/70"
        >
          {isPlaying ? <Pause size={18} className="text-white" /> : <Play size={18} className="text-white ml-0.5" />}
        </button>

        {/* Accent line */}
        <div 
          className="absolute bottom-0 left-0 h-1 w-0 group-hover:w-full transition-all duration-700"
          style={{ backgroundColor: showcase.accent }}
        />
      </div>

      {/* Content */}
      <div 
        className="absolute bottom-0 inset-x-0 p-6"
      >
        <h3 className="font-display font-black text-xl text-white mb-1">{showcase.title}</h3>
        <p className="font-dm text-sm" style={{ color: "rgba(255,255,255,0.6)" }}>
          {showcase.subtitle}
        </p>
      </div>
    </motion.div>
  );
};

const VideoShowcase = () => (
  <section 
    className="py-[100px] relative overflow-hidden"
    style={{ 
      background: "linear-gradient(180deg, #0a0f0a 0%, #0a1015 30%, #100a14 50%, #0a0f0a 100%)" 
    }}
  >
    {/* Background decorations */}
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(0,212,255,0.06) 0%, transparent 70%)",
          top: "10%",
          right: "-10%",
        }}
        animate={{ x: [0, -30, 0], y: [0, 20, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(255,107,53,0.05) 0%, transparent 70%)",
          bottom: "20%",
          left: "-5%",
        }}
        animate={{ x: [0, 20, 0], y: [0, -15, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>

    <div className="section-container relative z-10">
      <BlurReveal className="text-center mb-14">
        <h2 className="heading-display mb-4" style={{ fontSize: "clamp(28px, 4vw, 44px)" }}>
          NOS <span className="text-primary">RÉALISATIONS</span>
        </h2>
        <p className="font-dm text-[16px]" style={{ color: "rgba(255,255,255,0.55)" }}>
          Des sites qui impressionnent et convertissent.
        </p>
      </BlurReveal>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {showcases.map((showcase, i) => (
          <VideoCard key={i} showcase={showcase} index={i} />
        ))}
      </div>
    </div>
  </section>
);

export default VideoShowcase;
