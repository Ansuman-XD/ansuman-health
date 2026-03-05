import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import TrustSection from "@/components/TrustSection";
import StickyScrollSection from "@/components/StickyScrollSection";
import ServicesSection from "@/components/ServicesSection";
import OnlineRehabSection from "@/components/OnlineRehabSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import DigitalHealthSection from "@/components/DigitalHealthSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import MobileStickyBar from "@/components/MobileStickyBar";
import ScrollProgress from "@/components/ScrollProgress";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <ScrollProgress />
      <Header />
      <HeroSection />
      <TrustSection />
      <StickyScrollSection />
      <ServicesSection />
      <OnlineRehabSection />
      <TestimonialsSection />
      <DigitalHealthSection />
      <ContactSection />
      <Footer />
      <FloatingWhatsApp />
      <MobileStickyBar />
    </div>
  );
};

export default Index;
