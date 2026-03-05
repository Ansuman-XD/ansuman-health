import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Phone, GraduationCap } from "lucide-react";
import { whatsappLink } from "@/lib/constants";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import MobileStickyBar from "@/components/MobileStickyBar";
import ScrollProgress from "@/components/ScrollProgress";
import doctorImage from "@/assets/doctor-ansuman.jpg";

const DoctorsPage = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div className="min-h-screen bg-background">
      <ScrollProgress />
      <Header />
      <section className="gradient-hero pt-32 pb-20 px-4">
        <div className="container-narrow mx-auto text-center">
          <span className="inline-block px-4 py-2 rounded-full bg-accent/20 text-accent text-sm font-medium mb-4">Our Team</span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white leading-tight mb-4">Meet Our <span className="text-gradient-green">Specialist</span></h1>
          <p className="text-white/60 max-w-2xl mx-auto text-lg">Certified physiotherapist with years of experience, dedicated to your recovery journey.</p>
        </div>
      </section>

      <section className="section-padding" ref={ref}>
        <div className="container-narrow mx-auto flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="glass-card p-8 text-center group hover:shadow-elevated transition-all duration-500 max-w-sm w-full"
          >
            <div className="w-36 h-36 rounded-full overflow-hidden mx-auto mb-6 ring-4 ring-primary/20">
              <img src={doctorImage} alt="Dr. Ansuman Patel" className="w-full h-full object-cover" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-1">Dr. sukantamoharan</h3>
            <p className="text-xs text-muted-foreground mb-1">BPT, MPT (Orthopedics)</p>
            <p className="text-sm text-primary font-medium mb-1">Sports Injury & Orthopedic Rehab</p>
            <p className="text-xs text-accent font-semibold mb-6">10+ Years Experience</p>
            <Button variant="whatsapp" size="lg" className="w-full" asChild>
              <a href={whatsappLink("Hello Dr. Patel, I would like to book a consultation.")} target="_blank" rel="noopener noreferrer">
                <Phone className="w-4 h-4" /> Book Consultation
              </a>
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
      <MobileStickyBar />
    </div>
  );
};

export default DoctorsPage;
