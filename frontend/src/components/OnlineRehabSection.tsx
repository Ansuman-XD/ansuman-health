import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Video, FileText, BarChart3, MessageCircle, Download, Phone } from "lucide-react";
import { whatsappLink } from "@/lib/constants";
import WhatsAppFormDialog from "@/components/WhatsAppFormDialog";

const features = [
  { icon: Video, title: "Video Consultation", desc: "Face-to-face sessions from the comfort of your home." },
  { icon: FileText, title: "Personalized Exercise Plan", desc: "Custom exercise programs designed for your recovery goals." },
  { icon: BarChart3, title: "Weekly Progress Tracking", desc: "Monitor your improvement with measurable milestones." },
  { icon: MessageCircle, title: "WhatsApp Follow-up", desc: "Continuous support and guidance via WhatsApp messaging." },
  { icon: Download, title: "Downloadable PDF Guide", desc: "Take your recovery plan with you anywhere, anytime." },
];

const OnlineRehabSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-secondary" ref={ref}>
      <div className="container-narrow mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -40 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6 }}>
            <span className="inline-block px-4 py-2 rounded-full bg-accent/15 text-accent text-sm font-medium mb-4">Online Rehab Program</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-secondary-foreground leading-tight mb-6">Recovery, <span className="text-gradient-green">Reimagined.</span></h2>
            <p className="text-white/60 leading-relaxed mb-8 max-w-md">Our digital rehabilitation platform brings world-class physiotherapy to your screen. Guided by certified therapists, track your progress, and recover on your schedule.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <WhatsAppFormDialog trigger={<Button variant="hero" size="xl">Start Online Rehab</Button>} />
              <Button variant="hero-outline" size="xl" asChild>
                <a href={whatsappLink("Hello, I am interested in the Online Rehab Program.")} target="_blank" rel="noopener noreferrer">
                  <Phone className="w-5 h-5" /> Talk to Us
                </a>
              </Button>
            </div>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map((feature, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: i * 0.1 }} className={`glass-card-dark p-5 group hover:bg-white/10 transition-all duration-300 ${i === features.length - 1 ? "sm:col-span-2" : ""}`}>
                <feature.icon className="w-8 h-8 text-accent mb-3" />
                <h4 className="font-semibold text-white mb-1">{feature.title}</h4>
                <p className="text-sm text-white/50">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OnlineRehabSection;
