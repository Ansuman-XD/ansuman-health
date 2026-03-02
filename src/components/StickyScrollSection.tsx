import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import storyDiagnosis from "@/assets/story-diagnosis.jpg";
import storyRehab from "@/assets/story-rehab.jpg";
import storyTech from "@/assets/story-tech.jpg";

const stories = [
  {
    tag: "Step 01",
    title: "Precision Diagnosis. Personalized Care.",
    description:
      "Our certified physiotherapists conduct comprehensive biomechanical assessments using advanced diagnostic tools. Every treatment plan starts with understanding your unique condition — no cookie-cutter approaches.",
    image: storyDiagnosis,
  },
  {
    tag: "Step 02",
    title: "Rehabilitation Designed Around You.",
    description:
      "Your recovery journey is mapped with evidence-based protocols tailored to your goals, lifestyle, and timeline. From manual therapy to exercise prescription — everything is customized for optimal results.",
    image: storyRehab,
  },
  {
    tag: "Step 03",
    title: "Technology Meets Therapy.",
    description:
      "We integrate modern rehabilitation technology — laser therapy, ultrasound, digital progress tracking — with hands-on expertise. Your recovery is monitored in real-time for measurable outcomes.",
    image: storyTech,
  },
];

const StickyScrollSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section ref={containerRef} className="relative bg-muted" style={{ height: `${(stories.length + 1) * 100}vh` }}>
      {/* Sticky container */}
      <div className="sticky top-0 h-screen overflow-hidden flex items-center">
        <div className="container-narrow mx-auto px-4 sm:px-6 w-full">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Left: Text content */}
            <div>
              {stories.map((story, i) => (
                <StoryText
                  key={i}
                  story={story}
                  index={i}
                  total={stories.length}
                  progress={scrollYProgress}
                />
              ))}
            </div>

            {/* Right: Images */}
            <div className="relative aspect-square rounded-3xl overflow-hidden shadow-elevated hidden lg:block">
              {stories.map((story, i) => (
                <StoryImage
                  key={i}
                  src={story.image}
                  index={i}
                  total={stories.length}
                  progress={scrollYProgress}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const StoryText = ({
  story,
  index,
  total,
  progress,
}: {
  story: (typeof stories)[0];
  index: number;
  total: number;
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
}) => {
  const segmentSize = 1 / (total + 1);
  const start = index * segmentSize;
  const peak = start + segmentSize * 0.5;
  const end = start + segmentSize;

  const opacity = useTransform(progress, [start, peak, end], [0, 1, index === total - 1 ? 1 : 0]);
  const y = useTransform(progress, [start, peak, end], [60, 0, index === total - 1 ? 0 : -30]);
  const scale = useTransform(progress, [start, peak], [0.96, 1]);

  return (
    <motion.div
      style={{ opacity, y, scale }}
      className="absolute inset-0 flex flex-col justify-center px-4 sm:px-0"
    >
      <span className="inline-block px-3 py-1.5 rounded-full bg-accent/15 text-accent text-xs font-semibold mb-4 w-fit">
        {story.tag}
      </span>
      <h3 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-foreground leading-tight mb-4">
        {story.title}
      </h3>
      <p className="text-muted-foreground leading-relaxed mb-8 max-w-md">
        {story.description}
      </p>
      <Button variant="accent" size="lg" className="w-fit" asChild>
        <a
          href="https://wa.me/91XXXXXXXXXX?text=Hello,%20I%20would%20like%20to%20book%20a%20session."
          target="_blank"
          rel="noopener noreferrer"
        >
          <Phone className="w-4 h-4" />
          Book Your Session
        </a>
      </Button>
    </motion.div>
  );
};

const StoryImage = ({
  src,
  index,
  total,
  progress,
}: {
  src: string;
  index: number;
  total: number;
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
}) => {
  const segmentSize = 1 / (total + 1);
  const start = index * segmentSize;
  const peak = start + segmentSize * 0.5;
  const end = start + segmentSize;

  const opacity = useTransform(progress, [start, peak, end], [0, 1, index === total - 1 ? 1 : 0]);
  const scale = useTransform(progress, [start, peak], [1.1, 1]);

  return (
    <motion.img
      src={src}
      alt=""
      className="absolute inset-0 w-full h-full object-cover"
      style={{ opacity, scale }}
    />
  );
};

export default StickyScrollSection;
