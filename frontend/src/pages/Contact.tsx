import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import MobileStickyBar from "@/components/MobileStickyBar";
import ScrollProgress from "@/components/ScrollProgress";
import ContactSection from "@/components/ContactSection";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <ScrollProgress />
      <Header />
      <section className="gradient-hero pt-32 pb-20 px-4">
        <div className="container-narrow mx-auto text-center">
          <span className="inline-block px-4 py-2 rounded-full bg-accent/20 text-accent text-sm font-medium mb-4">Contact Us</span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white leading-tight mb-4">Get In <span className="text-gradient-green">Touch</span></h1>
          <p className="text-white/60 max-w-2xl mx-auto text-lg">We're here to help you on your recovery journey. Reach out to book a session or ask any questions.</p>
        </div>
      </section>
      <ContactSection />
      <Footer />
      <FloatingWhatsApp />
      <MobileStickyBar />
    </div>
  );
};

export default ContactPage;
