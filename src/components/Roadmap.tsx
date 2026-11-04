import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Zap, Target, Rocket } from "lucide-react";

export const Roadmap = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const categories = [
    {
      icon: Zap,
      category: "Currently Learning",
      items: [
        "Advanced DSA patterns",
        "System Design fundamentals",
        "React + TypeScript",
      ],
      headerBg: "bg-[#FFE23A]",
      bulletColor: "bg-[#FFE23A]",
    },
    {
      icon: Target,
      category: "Next Quarter",
      items: [
        "Docker & containerization",
        "CI/CD pipelines",
        "Database optimization",
      ],
      headerBg: "bg-[#70A2FC]",
      bulletColor: "bg-[#70A2FC]",
    },
    {
      icon: Rocket,
      category: "On The Radar",
      items: [
        "Distributed systems",
        "Cloud architecture (AWS)",
        "Production ML pipelines",
      ],
      headerBg: "bg-[#C596FF]",
      bulletColor: "bg-[#C596FF]",
    },
  ];

  return (
    <section className="py-24 bg-[#0C0E0F] pattern-dots-dark border-b-4 border-[#0C0E0F] relative text-white" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-3">
            <span className="comic-tag bg-[#FFE23A] text-[#0C0E0F]">
              ✦ GROWTH
            </span>
          </div>
          <h2 className="comic-display text-5xl md:text-6xl lg:text-7xl text-white mb-4">
            LEARNING ROADMAP
          </h2>
          <p className="font-sans font-medium text-lg text-white/80 max-w-2xl mx-auto">
            Always expanding—focused on production-grade skills and real-world
            systems thinking.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="comic-card overflow-hidden bg-white text-[#0C0E0F] flex flex-col"
            >
              <div className={`${cat.headerBg} p-5 border-b-3 border-[#0C0E0F] flex items-center justify-between`}>
                <h3 className="font-tape text-lg uppercase tracking-wide text-[#0C0E0F]">
                  {cat.category}
                </h3>
                <div className="w-10 h-10 rounded-full bg-white border-2 border-[#0C0E0F] shadow-comic flex items-center justify-center flex-shrink-0">
                  <cat.icon className="text-[#0C0E0F]" size={20} />
                </div>
              </div>

              <div className="p-6 bg-[#FFF8EE] flex-1">
                <ul className="space-y-4">
                  {cat.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 font-sans font-medium text-sm md:text-base text-[#0C0E0F]"
                    >
                      <span className="font-display text-lg text-[#0C0E0F]">✦</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
