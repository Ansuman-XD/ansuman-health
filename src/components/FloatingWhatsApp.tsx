import { MessageCircle } from "lucide-react";

const FloatingWhatsApp = () => {
  return (
    <a
      href="https://wa.me/91XXXXXXXXXX?text=Hello,%20I%20would%20like%20to%20book%20a%20session."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full gradient-accent-bg shadow-glow-green flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg lg:bottom-8 lg:right-8"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-6 h-6 text-accent-foreground" />
    </a>
  );
};

export default FloatingWhatsApp;
