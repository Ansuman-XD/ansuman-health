import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, Smartphone, CalendarCheck, TrendingUp } from "lucide-react";

const items = [
  { icon: Smartphone, title: "Digital Patient Tracking", desc: "Monitor every patient's journey with our advanced digital platform." },
  { icon: Shield, title: "Secure Health Data", desc: "Enterprise-grade security for all patient records and communications." },
  { icon: CalendarCheck, title: "Smart Appointment Management", desc: "Automated scheduling, reminders, and follow-up systems." },
  { icon: TrendingUp, title: "Future-Ready Healthcare", desc: "Scalable infrastructure built for the next generation of rehab care." },
];

const DigitalHealthSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-muted" ref={ref}>
      <div className="container-narrow mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Modern Infrastructure
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground leading-tight">
            Built on <span className="text-gradient-blue">Digital Healthcare</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Our clinic is powered by a modern digital healthcare system — ensuring seamless patient experiences from booking to recovery.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card p-6 text-center group hover:shadow-elevated transition-all duration-500"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <item.icon className="w-7 h-7 text-primary" />
              </div>
              <h4 className="font-bold text-foreground mb-2">{item.title}</h4>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DigitalHealthSection;
