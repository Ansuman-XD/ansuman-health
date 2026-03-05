import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Shield, Award, Users, Brain, HeartPulse, Hospital, Stethoscope, HeartHandshake, Activity, Pill, Bone, Syringe } from "lucide-react";

const trustItems = [
  { icon: Award, value: 10, suffix: "+", label: "Years Experience" },
  { icon: Shield, value: 15, suffix: "+", label: "Certified Physiotherapists" },
  { icon: Users, value: 1000, suffix: "+", label: "Successful Recoveries" },
  { icon: Brain, value: 100, suffix: "%", label: "Evidence-Based Therapy" },
  { icon: HeartPulse, value: 98, suffix: "%", label: "Patient Satisfaction" },
];

const partnerLogos = [
  { name: "Apollo Hospitals", icon: Hospital },
  { name: "AIIMS Partner", icon: Stethoscope },
  { name: "SportsMed India", icon: Activity },
  { name: "NeuroRehab Centre", icon: Brain },
  { name: "OrthoCare Plus", icon: Bone },
  { name: "PhysioConnect", icon: HeartHandshake },
  { name: "MedLife Trust", icon: HeartPulse },
  { name: "RehabFirst", icon: Shield },
  { name: "CurePlus Clinic", icon: Pill },
  { name: "VitalCare", icon: Syringe },
  { name: "HealthBridge", icon: Award },
  { name: "FlexiPhysio", icon: Activity },
];

const Counter = ({ target, suffix }: { target: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span ref={ref} className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
      {count.toLocaleString()}{suffix}
    </span>
  );
};

const LogoMarquee = () => {
  const logos = [...partnerLogos, ...partnerLogos]; // duplicate for seamless loop

  return (
    <div className="relative overflow-hidden py-8 mt-16">
      <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-l from-background to-transparent z-10" />
      <div className="marquee-track flex gap-6 sm:gap-10 w-max">
        {logos.map((logo, i) => (
          <div
            key={i}
            className="flex items-center gap-2.5 px-5 py-3 sm:px-6 sm:py-4 rounded-xl bg-muted/50 border border-border/50 shrink-0 select-none"
          >
            <logo.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary/70" />
            <span className="text-sm sm:text-base font-medium text-muted-foreground whitespace-nowrap">
              {logo.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

const TrustSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-background" ref={ref}>
      <div className="container-narrow mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Why Choose Us
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground leading-tight">
            Trusted by <span className="text-gradient-blue">Thousands</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-8">
          {trustItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card p-6 sm:p-8 text-center group hover:shadow-elevated transition-all duration-500"
            >
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <Counter target={item.value} suffix={item.suffix} />
              <p className="text-sm text-muted-foreground mt-2">{item.label}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <p className="text-center text-muted-foreground text-sm mt-16 mb-2 font-medium uppercase tracking-wider">
            Trusted Partners & Affiliations
          </p>
          <LogoMarquee />
        </motion.div>
      </div>
    </section>
  );
};

export default TrustSection;
