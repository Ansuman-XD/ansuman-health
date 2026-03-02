import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { WHATSAPP_DEFAULT, CLINIC_PHONE, CLINIC_EMAIL, CLINIC_ADDRESS } from "@/lib/constants";

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-background" ref={ref}>
      <div className="container-narrow mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">Get In Touch</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground leading-tight">Visit Our <span className="text-gradient-blue">Clinic</span></h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 }} className="rounded-3xl overflow-hidden shadow-elevated h-[350px] lg:h-full min-h-[300px]">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.0!2d72.8!3d19.1!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDA2JzAwLjAiTiA3MsKwNDgnMDAuMCJF!5e0!3m2!1sen!2sin!4v1" width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Clinic Location" />
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.3 }} className="flex flex-col gap-6">
            {[
              { icon: MapPin, label: "Address", value: CLINIC_ADDRESS },
              { icon: Phone, label: "Phone", value: CLINIC_PHONE },
              { icon: Mail, label: "Email", value: CLINIC_EMAIL },
              { icon: Clock, label: "Working Hours", value: "Mon – Sat: 8:00 AM – 8:00 PM\nSunday: By Appointment Only" },
            ].map((item, i) => (
              <div key={i} className="glass-card p-6 flex items-start gap-4 hover:shadow-elevated transition-all duration-300">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm mb-1">{item.label}</p>
                  <p className="text-muted-foreground text-sm whitespace-pre-line">{item.value}</p>
                </div>
              </div>
            ))}
            <Button variant="accent" size="xl" className="w-full mt-2" asChild>
              <a href={WHATSAPP_DEFAULT} target="_blank" rel="noopener noreferrer">
                <Phone className="w-5 h-5" /> Book via WhatsApp
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
