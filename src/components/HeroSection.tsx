import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Phone, Monitor, ChevronDown } from "lucide-react";
import heroImage from "@/assets/hero-physio.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Premium physiotherapy clinic"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 gradient-hero opacity-85" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-narrow mx-auto px-4 sm:px-6 pt-28 pb-20 lg:pt-32">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-accent/20 text-accent text-sm font-medium mb-6 backdrop-blur-sm border border-accent/20">
              ✦ Premium Physiotherapy & Rehabilitation
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white leading-[1.1] mb-6 tracking-tight"
          >
            Move Better.{" "}
            <span className="text-gradient-green">Live Pain Free.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="text-lg sm:text-xl text-white/70 max-w-xl mb-10 leading-relaxed"
          >
            Premium physiotherapy & personalized rehabilitation designed for
            long-term recovery. Evidence-based therapy meets modern technology.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button variant="hero" size="xl" asChild>
              <a
                href="https://wa.me/91XXXXXXXXXX?text=Hello,%20I%20would%20like%20to%20book%20a%20session."
                target="_blank"
                rel="noopener noreferrer"
              >
                <Phone className="w-5 h-5" />
                Book Session
              </a>
            </Button>
            <Button variant="hero-outline" size="xl" asChild>
              <a href="/online-rehab">
                <Monitor className="w-5 h-5" />
                Start Online Rehab
              </a>
            </Button>
          </motion.div>
        </div>

        {/* Glass Stats Card */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="mt-16 lg:mt-20"
        >
          <div className="glass-card-dark p-6 sm:p-8 grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-3xl">
            {[
              { value: "10+", label: "Years Experience" },
              { value: "1000+", label: "Recoveries" },
              { value: "15+", label: "Specialists" },
              { value: "4.9★", label: "Google Rating" },
            ].map((stat, i) => (
              <div key={i} className="text-center lg:text-left">
                <div className="text-2xl sm:text-3xl font-bold text-accent mb-1">{stat.value}</div>
                <div className="text-xs sm:text-sm text-white/50">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span className="text-white/40 text-xs tracking-widest uppercase">Scroll</span>
        <ChevronDown className="w-5 h-5 text-white/40" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
