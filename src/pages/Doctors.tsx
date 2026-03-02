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

const doctors = [
  {
    name: "Dr. Ansuman Patel",
    qualification: "BPT, MPT (Orthopedics)",
    specialization: "Sports Injury & Orthopedic Rehab",
    experience: "10+ Years",
  },
  {
    name: "Dr. Priya Sharma",
    qualification: "BPT, MPT (Neurology)",
    specialization: "Stroke & Neurological Rehabilitation",
    experience: "8+ Years",
  },
  {
    name: "Dr. Rajesh Kumar",
    qualification: "BPT, MPT (Cardiopulmonary)",
    specialization: "Post-Surgery & Cardiac Rehab",
    experience: "12+ Years",
  },
  {
    name: "Dr. Sneha Gupta",
    qualification: "BPT, MPT (Sports Medicine)",
    specialization: "Sports Performance & Recovery",
    experience: "6+ Years",
  },
];

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
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white leading-tight mb-4">Meet Our <span className="text-gradient-green">Specialists</span></h1>
          <p className="text-white/60 max-w-2xl mx-auto text-lg">Certified physiotherapists with years of experience, dedicated to your recovery journey.</p>
        </div>
      </section>

      <section className="section-padding" ref={ref}>
        <div className="container-narrow mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {doctors.map((doc, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass-card p-6 text-center group hover:shadow-elevated transition-all duration-500 perspective-1000"
              >
                <div className="preserve-3d group-hover:[transform:rotateY(3deg)_rotateX(3deg)] transition-transform duration-500">
                  <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-primary/15 transition-colors">
                    <GraduationCap className="w-10 h-10 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-1">{doc.name}</h3>
                  <p className="text-xs text-muted-foreground mb-1">{doc.qualification}</p>
                  <p className="text-sm text-primary font-medium mb-1">{doc.specialization}</p>
                  <p className="text-xs text-accent font-semibold mb-5">{doc.experience}</p>
                  <Button variant="whatsapp" size="sm" className="w-full" asChild>
                    <a href={whatsappLink(`Hello Dr. ${doc.name.split(" ").pop()}, I would like to book a consultation.`)} target="_blank" rel="noopener noreferrer">
                      <Phone className="w-3.5 h-3.5" /> Book Consultation
                    </a>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
      <MobileStickyBar />
    </div>
  );
};

export default DoctorsPage;
