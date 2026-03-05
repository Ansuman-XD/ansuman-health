import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Rajesh Sharma",
    condition: "Sports Injury Recovery",
    rating: 5,
    text: "After a severe knee injury, PhysioElite helped me get back on the field in just 8 weeks. Their personalized approach and modern equipment made all the difference.",
  },
  {
    name: "Priya Menon",
    condition: "Post-Surgery Rehabilitation",
    rating: 5,
    text: "The team guided me through my recovery after spinal surgery. Their dedication and expertise gave me confidence throughout the entire process.",
  },
  {
    name: "Amit Patel",
    condition: "Chronic Back Pain",
    rating: 5,
    text: "Years of chronic back pain resolved in weeks. The combination of manual therapy and exercise prescription was exactly what I needed.",
  },
  {
    name: "Sneha Gupta",
    condition: "Stroke Rehabilitation",
    rating: 5,
    text: "My father's recovery after stroke was remarkable thanks to PhysioElite. The neurological rehab program is world-class.",
  },
];

const TestimonialsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((c) => (c + 1) % testimonials.length);
  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="section-padding gradient-dark" ref={ref}>
      <div className="container-narrow mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-white/10 text-accent text-sm font-medium mb-4">
            Patient Stories
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white leading-tight">
            Real <span className="text-gradient-green">Results</span>
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto relative">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.4 }}
            className="glass-card-dark p-8 sm:p-12 text-center"
          >
            <div className="flex justify-center gap-1 mb-6">
              {[...Array(testimonials[current].rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <p className="text-white/80 text-lg sm:text-xl leading-relaxed mb-8 italic">
              "{testimonials[current].text}"
            </p>
            <div>
              <p className="font-bold text-white text-lg">{testimonials[current].name}</p>
              <p className="text-accent text-sm">{testimonials[current].condition}</p>
            </div>
          </motion.div>

          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:bg-white/20 hover:text-white transition-all"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    i === current ? "bg-accent w-8" : "bg-white/20"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:bg-white/20 hover:text-white transition-all"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
