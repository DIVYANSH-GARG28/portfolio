import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { value: "15+", label: "Webhook Pipelines", bg: "bg-[#FFE23A]" },
    { value: "8.16", sub: "/ 10", label: "AKTU B.Tech CGPA", bg: "bg-[#70A2FC]" },
    { value: "80%", label: "Manual Effort Cut", bg: "bg-[#F57EB4]" },
    { value: "∞", label: "Curiosity", bg: "bg-[#C596FF]" },
  ];

  return (
    <section id="about" className="py-24 pattern-dots-light border-b-4 border-[#0C0E0F] relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          {/* Badge */}
          <div className="inline-block mb-3">
            <span className="comic-tag bg-[#AD69FF] text-white">
              ✦ ABOUT ME
            </span>
          </div>

          <h2 className="comic-display text-5xl md:text-6xl lg:text-7xl mb-8">
            ENGINEERING AUTOMATIONS, ONE PIPELINE AT A TIME.
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-14">
            {/* Main Narrative */}
            <div className="md:col-span-2 space-y-5">
              <div className="comic-card p-6 md:p-8">
                <p className="font-sans text-lg text-[#0C0E0F] leading-relaxed mb-4">
                  I'm <strong className="font-tape tracking-wide underline decoration-[#FFE23A] decoration-4">Divyansh Garg</strong>, a B.Tech
                  Computer Science student at Dr. A.P.J. Abdul Kalam Technical University (AKTU) holding an{" "}
                  <strong className="font-tape tracking-wide underline decoration-[#22AC5F] decoration-4">8.16 CGPA</strong>. I
                  approach engineering with a builder's mindset—turning manual friction into resilient, event-driven automated systems.
                </p>
                <p className="font-sans text-lg text-[#0C0E0F] leading-relaxed mb-4">
                  My technical core centers around designing webhook ingestion pipelines, deterministic CRM validation (deduplication & regex sanitization), and multi-step AI orchestration (n8n, LLM APIs, ChromaDB, FAISS). As a{" "}
                  <strong className="font-tape tracking-wide underline decoration-[#4080FB] decoration-4">Technical Operations & Automation Intern at Chess Gaja</strong>, I slashed lead ingestion latency from hours to under 30 seconds and eliminated manual verification effort by 80%.
                </p>
                <p className="font-sans text-lg text-[#0C0E0F] leading-relaxed">
                  I also hold certifications in{" "}
                  <strong className="font-tape tracking-wide underline decoration-[#EF4225] decoration-4">AWS Cloud Solutions Architect</strong> and{" "}
                  <strong className="font-tape tracking-wide underline decoration-[#AD69FF] decoration-4">IIT Mandi's AI/ML Intensive Certification</strong>, blending cloud infrastructure with intelligent retrieval systems.
                </p>
              </div>
            </div>

            {/* Quick Facts Card */}
            <div className="comic-card p-6 bg-[#FFE23A] relative rotate-1 flex flex-col justify-between">
              {/* Tape decor */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white border-2 border-[#0C0E0F] px-4 py-0.5 font-tape text-[10px] uppercase shadow-sm">
                CREDENTIALS
              </div>

              <div>
                <h3 className="font-tape text-xl uppercase mb-5 text-[#0C0E0F] flex items-center gap-2">
                  <span>⚡ Quick Facts</span>
                </h3>

                <ul className="space-y-3.5 font-sans font-medium text-[#0C0E0F]">
                  <li className="flex items-center gap-3 bg-white/80 p-2.5 rounded-xl border-2 border-[#0C0E0F]">
                    <span className="w-2.5 h-2.5 bg-[#EF4225] rounded-full border border-[#0C0E0F]" />
                    <span className="text-sm">AKTU B.Tech CSE (8.16 CGPA)</span>
                  </li>
                  <li className="flex items-center gap-3 bg-white/80 p-2.5 rounded-xl border-2 border-[#0C0E0F]">
                    <span className="w-2.5 h-2.5 bg-[#4080FB] rounded-full border border-[#0C0E0F]" />
                    <span className="text-sm">Chess Gaja Automation Intern</span>
                  </li>
                  <li className="flex items-center gap-3 bg-white/80 p-2.5 rounded-xl border-2 border-[#0C0E0F]">
                    <span className="w-2.5 h-2.5 bg-[#22AC5F] rounded-full border border-[#0C0E0F]" />
                    <span className="text-sm">AWS Cloud Solutions Architect</span>
                  </li>
                  <li className="flex items-center gap-3 bg-white/80 p-2.5 rounded-xl border-2 border-[#0C0E0F]">
                    <span className="w-2.5 h-2.5 bg-[#AD69FF] rounded-full border border-[#0C0E0F]" />
                    <span className="text-sm">IIT Mandi AI/ML Certified</span>
                  </li>
                </ul>
              </div>

              <div className="mt-5 pt-3 border-t-2 border-[#0C0E0F]/20 text-right">
                <span className="font-mono text-xs uppercase tracking-wider text-[#0C0E0F]/70">
                  NEW DELHI, INDIA ✦
                </span>
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`comic-card ${stat.bg} p-6 text-center`}
              >
                <div className="comic-display text-4xl sm:text-5xl md:text-6xl text-white mb-1 flex items-baseline justify-center gap-1">
                  <span>{stat.value}</span>
                  {"sub" in stat && (
                    <span className="font-tape text-lg sm:text-xl md:text-2xl text-white/90">
                      {stat.sub}
                    </span>
                  )}
                </div>
                <div className="font-tape text-xs md:text-sm uppercase tracking-wide text-[#0C0E0F]">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
