import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Phone, Video, FileText, BarChart3, MessageCircle, Download, CheckCircle } from "lucide-react";
import { whatsappLink } from "@/lib/constants";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import MobileStickyBar from "@/components/MobileStickyBar";
import ScrollProgress from "@/components/ScrollProgress";

const features = [
  { icon: Video, title: "Video Consultation", desc: "Live face-to-face sessions with certified physiotherapists from anywhere." },
  { icon: FileText, title: "Personalized Exercise Plan", desc: "Custom programs designed for your specific condition and goals." },
  { icon: BarChart3, title: "Weekly Progress Tracking", desc: "Measurable milestones and data-driven recovery monitoring." },
  { icon: MessageCircle, title: "WhatsApp Follow-up", desc: "Continuous support between sessions via messaging." },
  { icon: Download, title: "PDF Recovery Guide", desc: "Downloadable guides you can follow anywhere, anytime." },
];

const steps = [
  "Book your initial online assessment",
  "Receive your personalized rehab plan",
  "Follow guided video exercises",
  "Track your weekly progress",
  "Adjust plan with therapist feedback",
  "Achieve your recovery goals",
];

const OnlineRehabPage = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div className="min-h-screen bg-background">
      <ScrollProgress />
      <Header />

      {/* Hero */}
      <section className="gradient-dark pt-32 pb-20 px-4">
        <div className="container-narrow mx-auto text-center">
          <span className="inline-block px-4 py-2 rounded-full bg-accent/20 text-accent text-sm font-medium mb-4">Online Rehab Program</span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white leading-tight mb-4">Recovery, <span className="text-gradient-green">Reimagined.</span></h1>
          <p className="text-white/60 max-w-2xl mx-auto text-lg mb-8">World-class physiotherapy delivered to your screen. Guided by certified therapists, track your progress, and recover on your schedule.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl" asChild>
              <a href={whatsappLink("Hello, I want to start the Online Rehab Program.")} target="_blank" rel="noopener noreferrer">
                <Phone className="w-5 h-5" /> Start Now via WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding" ref={ref}>
        <div className="container-narrow mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground">What's <span className="text-gradient-blue">Included</span></h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {features.map((f, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: i * 0.08 }} className="glass-card p-6 group hover:shadow-elevated transition-all duration-500">
                <f.icon className="w-10 h-10 text-accent mb-4" />
                <h3 className="font-bold text-foreground mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground">{f.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* How it works */}
          <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.3 }} className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-display font-bold text-foreground text-center mb-10">How It <span className="text-gradient-green">Works</span></h2>
            <div className="flex flex-col gap-4">
              {steps.map((step, i) => (
                <div key={i} className="glass-card p-5 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-accent/15 flex items-center justify-center shrink-0">
                    <CheckCircle className="w-5 h-5 text-accent" />
                  </div>
                  <span className="text-foreground font-medium">{step}</span>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button variant="accent" size="xl" asChild>
                <a href={whatsappLink("Hello, I want to start the Online Rehab Program.")} target="_blank" rel="noopener noreferrer">
                  <Phone className="w-5 h-5" /> Get Started Today
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
      <MobileStickyBar />
    </div>
  );
};

export default OnlineRehabPage;
