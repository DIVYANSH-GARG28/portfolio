import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Zap, RefreshCw, Users, Target } from "lucide-react";

export const WhyMe = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const traits = [
    {
      icon: Zap,
      badge: "0-100 VELOCITY",
      title: "Execution Speed",
      description:
        "I ship fast and calibrate on real telemetry. Engineering teams don't have time for idle analysis paralysis—momentum and working code win.",
      color: "bg-[#FFE23A]",
    },
    {
      icon: RefreshCw,
      badge: "ECU ADAPTABILITY",
      title: "Rapid Adaptation",
      description:
        "New stack? Unfamiliar API? I've switched across Python, C++, n8n, SQL, and hardware firmware. I dial into whatever the engine needs.",
      color: "bg-[#70A2FC]",
    },
    {
      icon: Users,
      badge: "SELF-DIAGNOSING",
      title: "Low Maintenance",
      description:
        "I ask sharp, architectural questions upfront, then execute autonomously. I reach out with proposed solutions, never helpless confusion.",
      color: "bg-[#C596FF]",
    },
    {
      icon: Target,
      badge: "CHECKERED FLAG",
      title: "Ownership Mindset",
      description:
        "I treat pipeline breakages as mine to diagnose and resolve. No waiting for instructions—I isolate the fault, patch the logic, and document.",
      color: "bg-[#F57EB4]",
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
              <span className="comic-tag bg-[#EF4225] text-white">
                ✦ DRIVER PROFILE
              </span>
            </div>
            <h2 className="comic-display text-5xl md:text-6xl lg:text-7xl text-[#0C0E0F] mb-4">
              WHY I'M A GOOD INTERN
            </h2>
            <p className="font-sans font-medium text-lg text-[#0C0E0F]/80 max-w-2xl mx-auto">
              I'm not looking for a decorative line on a resume—I want to push production code, eliminate drag, and learn from world-class builders.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {traits.map((trait, i) => (
              <motion.div
                key={trait.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ type: "spring", stiffness: 350, damping: 25, delay: i * 0.1 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="comic-card p-6 bg-white flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-14 h-14 ${trait.color} rounded-2xl border-3 border-[#0C0E0F] shadow-comic flex items-center justify-center`}>
                      <trait.icon className="text-[#0C0E0F]" size={26} />
                    </div>
                    <span className="font-mono text-[9px] font-bold text-[#0C0E0F]/60 bg-[#FFE23A] px-2 py-0.5 rounded border border-[#0C0E0F]">
                      {trait.badge}
                    </span>
                  </div>
                  <h3 className="font-tape text-xl text-[#0C0E0F] uppercase tracking-wide mb-3">
                    {trait.title}
                  </h3>
                  <p className="font-sans text-sm text-[#0C0E0F]/80 leading-relaxed">
                    {trait.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t-2 border-[#0C0E0F]/10 flex justify-end">
                  <span className="font-mono text-[10px] uppercase font-bold text-[#0C0E0F]/40">
                    DRIVER SPEC 0{i + 1} ✦
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
