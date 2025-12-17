import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={containerRef}
      className="relative w-full min-h-screen flex items-center bg-transparent overflow-hidden pt-20 pointer-events-none"
    >
      {/* Animated Grid / Tech Pattern */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}
      />

      {/* Glowing Blobs */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-brand-primary/20 rounded-full blur-[120px] mix-blend-multiply animate-blob" />
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-brand-secondary/20 rounded-full blur-[120px] mix-blend-multiply animate-blob animation-delay-2000" />
      <div className="absolute -bottom-32 left-1/3 w-[500px] h-[500px] bg-brand-accent/20 rounded-full blur-[120px] mix-blend-multiply animate-blob animation-delay-4000" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center lg:text-left lg:block pointer-events-auto">

        <div className="max-w-3xl space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-2 bg-brand-primary/10 border border-brand-primary/20 rounded-full px-4 py-2 mb-8 backdrop-blur-sm"
          >
            <span className="flex h-2 w-2 relative mr-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-success opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-success"></span>
            </span>
            <span className="text-brand-primary text-sm font-medium font-secondary tracking-wide">Available for new projects</span>
          </motion.div>

          <div className="overflow-hidden">
            <motion.h1
              className="text-5xl sm:text-6xl md:text-7xl font-bold text-brand-text-primary leading-[1.1] tracking-tight font-primary"
              initial="hidden"
              animate="visible"
              variants={{
                visible: { transition: { staggerChildren: 0.1 } }
              }}
            >
              {[
                "Building", "Future", "Digital", "Experiences"
              ].map((word, i) => (
                <span key={i} className="inline-block mr-4">
                  {word.split("").map((char, index) => (
                    <motion.span
                      key={index}
                      variants={{
                        hidden: { y: 100, opacity: 0 },
                        visible: {
                          y: 0,
                          opacity: 1,
                          transition: { ease: [0.22, 1, 0.36, 1], duration: 0.8 }
                        }
                      }}
                      className={`inline-block ${i === 1 || i === 3 ? 'text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary' : ''}`}
                    >
                      {char}
                    </motion.span>
                  ))}
                </span>
              ))}
            </motion.h1>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-xl text-brand-text-secondary max-w-2xl mx-auto mb-10 leading-relaxed font-secondary"
          >
            Avhad Enterprises crafts premium digital solutions that merge creativity with technology. We help brands scale through immersive web experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-8 py-4 bg-brand-primary text-white font-bold rounded-lg overflow-hidden flex items-center justify-center"
            >
              <span className="relative z-10 flex items-center">
                Start Project <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-brand-primary to-brand-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
            </motion.a>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 glass-panel text-brand-text-primary font-medium rounded-lg hover:bg-white/40 transition-colors flex items-center justify-center"
            >
              <Play className="mr-2 w-4 h-4 fill-current" /> Showreel
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
