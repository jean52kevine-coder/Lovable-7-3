import { motion } from "framer-motion";
import BlurReveal from "@/components/animations/BlurReveal";
import ScaleSection from "@/components/animations/ScaleSection";

const videos = [
  {
    title: "Design Moderne",
    description: "Des interfaces élégantes et intuitives",
    videoUrl: "https://videos.pexels.com/video-files/5971257/5971257-uhd_2560_1440_25fps.mp4",
    poster: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600",
  },
  {
    title: "Performance Optimale",
    description: "Des sites ultra-rapides pour convertir",
    videoUrl: "https://videos.pexels.com/video-files/5926397/5926397-uhd_2560_1440_25fps.mp4",
    poster: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600",
  },
  {
    title: "Mobile First",
    description: "Parfait sur tous les écrans",
    videoUrl: "https://videos.pexels.com/video-files/3130284/3130284-uhd_2560_1440_30fps.mp4",
    poster: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600",
  },
];

const VideoShowcase = () => {
  return (
    <section className="py-[100px]" style={{ backgroundColor: "hsl(var(--hero-bg))" }}>
      <div className="section-container">
        <BlurReveal className="text-center mb-12">
          <h2 className="heading-display text-3xl md:text-4xl mb-4">
            NOTRE <span className="text-primary">SAVOIR-FAIRE</span>
          </h2>
          <p className="font-dm text-muted-foreground max-w-xl mx-auto">
            Des sites web qui captivent, convertissent et performent.
          </p>
        </BlurReveal>

        <ScaleSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {videos.map((video, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="relative group rounded-xl overflow-hidden aspect-[4/5]"
                style={{ backgroundColor: "hsl(var(--card-dark))" }}
              >
                <video
                  className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500"
                  autoPlay
                  muted
                  loop
                  playsInline
                  poster={video.poster}
                >
                  <source src={video.videoUrl} type="video/mp4" />
                </video>

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-display font-bold text-xl text-foreground mb-1">
                    {video.title}
                  </h3>
                  <p className="font-dm text-sm text-muted-foreground">
                    {video.description}
                  </p>
                </div>

                {/* Glow effect on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute inset-0 bg-primary/5" />
                  <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-primary/10 to-transparent" />
                </div>
              </motion.div>
            ))}
          </div>
        </ScaleSection>
      </div>
    </section>
  );
};

export default VideoShowcase;
