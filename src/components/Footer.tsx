import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { CLINIC_PHONE, CLINIC_EMAIL, CLINIC_ADDRESS } from "@/lib/constants";

const Footer = () => {
  return (
    <footer className="gradient-dark text-white/80">
      <div className="container-narrow mx-auto section-padding">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl gradient-accent-bg flex items-center justify-center">
                <span className="text-accent-foreground font-bold text-lg">P</span>
              </div>
              <span className="font-display font-bold text-xl text-white">PhysioElite</span>
            </div>
            <p className="text-sm leading-relaxed text-white/60">Premium physiotherapy & personalized rehabilitation designed for long-term recovery.</p>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2">
              {[{ label: "Home", href: "/" }, { label: "Services", href: "/services" }, { label: "Our Doctors", href: "/doctors" }, { label: "Online Rehab", href: "/online-rehab" }, { label: "Contact", href: "/contact" }].map((link) => (
                <Link key={link.href} to={link.href} className="text-sm text-white/60 hover:text-accent transition-colors">{link.label}</Link>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Services</h4>
            <div className="flex flex-col gap-2 text-sm text-white/60">
              <span>Sports Injury Rehab</span><span>Post-Surgery Rehab</span><span>Stroke Rehabilitation</span><span>Back & Neck Pain</span><span>Home Visit Therapy</span>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Contact</h4>
            <div className="flex flex-col gap-3 text-sm text-white/60">
              <div className="flex items-start gap-2"><MapPin className="w-4 h-4 mt-0.5 shrink-0 text-accent" /><span>{CLINIC_ADDRESS}</span></div>
              <div className="flex items-center gap-2"><Phone className="w-4 h-4 shrink-0 text-accent" /><span>{CLINIC_PHONE}</span></div>
              <div className="flex items-center gap-2"><Mail className="w-4 h-4 shrink-0 text-accent" /><span>{CLINIC_EMAIL}</span></div>
              <div className="flex items-center gap-2"><Clock className="w-4 h-4 shrink-0 text-accent" /><span>Mon–Sat: 8AM – 8PM</span></div>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 mt-12 pt-8 text-center text-sm text-white/40">
          <p>© {new Date().getFullYear()} PhysioElite. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
