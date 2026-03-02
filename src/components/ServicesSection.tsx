import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Phone, Dumbbell, HeartPulse, Brain, Bone, Activity, Home, Stethoscope } from "lucide-react";
import { whatsappLink } from "@/lib/constants";

const services = [
  { icon: Dumbbell, title: "Sports Injury Rehab", desc: "Expert recovery from sports injuries with specialized rehabilitation protocols." },
  { icon: HeartPulse, title: "Post-Surgery Rehabilitation", desc: "Comprehensive post-operative care to restore strength and mobility." },
  { icon: Brain, title: "Stroke Rehabilitation", desc: "Neurological recovery programs for stroke survivors." },
  { icon: Bone, title: "Back & Neck Pain Therapy", desc: "Advanced manual therapy and exercise for spinal conditions." },
  { icon: Activity, title: "Orthopedic Physiotherapy", desc: "Musculoskeletal assessment and treatment for joints and bones." },
  { icon: Stethoscope, title: "Neurological Physiotherapy", desc: "Specialized care for neurological conditions and disorders." },
  { icon: Home, title: "Home Visit Therapy", desc: "Professional physiotherapy delivered at your doorstep." },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-background" ref={ref}>
      <div className="container-narrow mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">Our Services</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground leading-tight">Comprehensive <span className="text-gradient-green">Rehabilitation</span></h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: i * 0.08 }} className="glass-card p-6 sm:p-8 group hover:shadow-elevated transition-all duration-500 perspective-1000">
              <div className="preserve-3d group-hover:[transform:rotateY(2deg)_rotateX(2deg)] transition-transform duration-500">
                <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors">
                  <service.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground mb-5 leading-relaxed">{service.desc}</p>
                <Button variant="whatsapp" size="sm" asChild>
                  <a href={whatsappLink(`Hello, I am interested in ${service.title}`)} target="_blank" rel="noopener noreferrer">
                    <Phone className="w-3.5 h-3.5" /> Book Now
                  </a>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
