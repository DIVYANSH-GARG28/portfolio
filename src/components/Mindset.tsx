import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { CircleCheckBig } from "lucide-react";

export const Mindset = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const principles = [
    {
      title: "Understand before implementing",
      description:
        "I spend time diagnosing the telemetry and root causes deeply before writing code. Guesswork in production is fatal.",
      tag: "SPEC 01",
    },
    {
      title: "Ship incrementally",
      description:
        "I prefer high-velocity working MVPs over theoretical perfection. Track telemetry and real feedback beat dyno simulations.",
      tag: "SPEC 02",
    },
    {
      title: "Document decisions",
      description:
        "Future me (and teammates) must know why an architecture was chosen, not just what was coded. Full flight recorder context.",
      tag: "SPEC 03",
    },
    {
      title: "Debug systematically",
      description:
        "I bisect, isolate, and log. Methodical telemetry analysis pinpoints failure modes 10x faster than random guessing.",
      tag: "SPEC 04",
    },
    {
      title: "Learn from friction",
      description:
        "When a pipeline or API resists, I investigate why. Friction signals bottlenecked architecture or poor design.",
      tag: "SPEC 05",
    },
    {
      title: "Ownership over handoffs",
      description:
        "I steer problems to checkered-flag resolution. Passing the buck creates more drag than it solves.",
      tag: "SPEC 06",
    },
    {
      title: "Stay curious across domains",
      description:
        "Embedded sensors, LLMs, cloud architecture—the breakthrough innovations always happen at the intersection of disciplines.",
      tag: "SPEC 07",
    },
  ];

  return (
    <section className="py-24 bg-[#FFF8EE] pattern-dots-light border-b-4 border-[#0C0E0F] relative overflow-hidden" ref={ref}>
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-16">
            <div className="inline-block mb-3">
              <span className="comic-tag bg-[#22AC5F] text-white">
                ✦ PIT WALL PROTOCOLS
              </span>
            </div>
            <h2 className="comic-display text-5xl md:text-6xl lg:text-7xl text-[#0C0E0F]">
              ENGINEERING MINDSET
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {principles.map((principle, i) => (
              <motion.div
                key={principle.title}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ type: "spring", stiffness: 350, damping: 25, delay: i * 0.07 }}
                whileHover={{ y: -4, scale: 1.01 }}
                className="comic-card p-5 bg-white flex items-start gap-4 relative overflow-hidden"
              >
                <div className="w-9 h-9 rounded-full bg-[#22AC5F] border-2 border-[#0C0E0F] shadow-comic flex items-center justify-center flex-shrink-0 mt-0.5">
                  <CircleCheckBig className="text-white" size={18} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="font-tape text-base md:text-lg text-[#0C0E0F] uppercase tracking-wide">
                      {principle.title}
                    </h3>
                    <span className="font-mono text-[10px] font-bold text-[#0C0E0F]/50 bg-[#FFE23A] px-2 py-0.5 rounded border border-[#0C0E0F]/30">
                      {principle.tag}
                    </span>
                  </div>
                  <p className="font-sans text-sm text-[#0C0E0F]/80 leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
