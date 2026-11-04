import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Building, Calendar, ArrowRight } from "lucide-react";
import { TapeBanner } from "./TapeBanner";

export const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const experiences = [
    {
      chapter: "CHAPTER 01",
      role: "Technical Operations And Automation Intern",
      company: "Chess Gaja",
      period: "Jun 2026 – Aug 2026",
      problem:
        "High lead ingestion latency across CRM, web forms, and messaging gateways, alongside high manual overhead due to duplicate and malformed user entries.",
      approach:
        "Architected 15+ event-driven webhook pipelines across CRM, web forms, and messaging gateways. Designed and deployed deterministic lead-validation workflows with automated deduplication and regex sanitization.",
      learnings: [
        "Reduced lead ingestion latency from hours to under 30 seconds across all platforms",
        "Eliminated invalid entries and cut manual verification effort by 80%",
        "Configured failure-handling and notification paths in CRM automation workflows to surface unsuccessful runs and support manual recovery",
      ],
      tagColor: "bg-[#FFE23A]",
    },
    {
      chapter: "CHAPTER 02",
      role: "AI/ML Training And Project Program",
      company: "Mirai School of Technology",
      period: "Jan 2026 – Feb 2026",
      problem:
        "Needed practical mastery in building robust agentic workflows, connecting raw LLM APIs with deterministic business logic without brittle prompts.",
      approach:
        "Completed comprehensive AI/ML training covering LLM API integration, prompt engineering, and multi-step automation workflows. Built multi-step n8n workflows connecting API triggers and conditional logic to automate AI-oriented tasks.",
      learnings: [
        "Mastered prompt structuring for predictable LLM responses and prompt chaining",
        "Built production-ready n8n workflows integrating third-party APIs and conditional routing",
        "Learned deep debugging of agent failure modes and edge-case handling",
      ],
      tagColor: "bg-[#70A2FC]",
    },
    {
      chapter: "CHAPTER 03",
      role: "Young Innovator Intern — YIIC 2.0",
      company: "Scaler School of Technology",
      period: "2024",
      problem:
        "Technical depth without persuasive communication, personal branding, and confident public pitching creates friction in demonstrating builder value.",
      approach:
        "Completed Scaler's flagship YIIC 2.0 experiential challenge focused on professional personality building, technical storytelling, and startup-style problem framing under industry mentors.",
      learnings: [
        "Mastered structured technical pitching—translating complex algorithmic and software logic into clean, compelling narratives",
        "Built active personal branding and professional networking habits across the tech community",
        "Adopted a proactive builder mindset: identifying community friction points and pitching pragmatic, high-velocity solutions",
      ],
      tagColor: "bg-[#F57EB4]",
    },
  ];

  return (
    <section id="experience" className="bg-[#FCC230] pattern-dots-yellow border-b-4 border-[#0C0E0F] relative overflow-hidden" ref={ref}>
      {/* Tilted Marquee Tape across section top */}
      <div className="relative -top-3">
        <TapeBanner
          text="THE TIMELINE ✦ VERIFIED RECORD ✦ WHERE I'VE BUILT ✦"
          bg="bg-white"
          tilt="right"
        />
      </div>

      <div className="container mx-auto px-6 pt-16 pb-24 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-block mb-3">
              <span className="comic-tag bg-[#0C0E0F] text-white">
                ✦ CAREER RECORD
              </span>
            </div>
            <h2 className="comic-display text-5xl md:text-7xl lg:text-8xl text-[#0C0E0F]">
              WHERE I'VE BUILT
            </h2>
          </div>

          {/* Timeline Cards */}
          <div className="max-w-4xl mx-auto space-y-10">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.chapter}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ type: "spring", stiffness: 300, damping: 25, delay: i * 0.15 }}
                whileHover={{ y: -4 }}
                className="comic-card p-6 md:p-9 bg-[#FFF8EE] relative transition-shadow"
              >
                {/* Chapter Pill & Metadata Header */}
                <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-6 border-b-3 border-[#0C0E0F]">
                  <div className="flex items-center gap-3">
                    <span className="bg-[#0C0E0F] text-white font-tape text-xs uppercase px-4 py-1.5 rounded-full shadow-sm">
                      {exp.chapter}
                    </span>
                    <div className="flex items-center gap-1.5 font-mono text-xs md:text-sm font-bold text-[#0C0E0F] bg-[#FFE23A] px-3 py-1 rounded-full border-2 border-[#0C0E0F]">
                      <Calendar size={14} />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 font-tape text-xs uppercase text-[#0C0E0F] bg-white px-3.5 py-1.5 rounded-full border-2 border-[#0C0E0F]">
                    <Building size={14} className="text-[#EF4225]" />
                    <span>{exp.company}</span>
                  </div>
                </div>

                {/* Role Title */}
                <div className="mb-6">
                  <h3 className="font-tape text-2xl md:text-3xl text-[#0C0E0F] uppercase tracking-wide mb-1">
                    {exp.role}
                  </h3>
                  <p className="font-mono text-xs uppercase tracking-wider text-[#0C0E0F]/70">
                    ORGANIZATION: <b>{exp.company}</b>
                  </p>
                </div>

                {/* Problem, Approach, Impact */}
                <div className="space-y-5">
                  {/* Problem */}
                  <div className="bg-[#FFE23A]/40 border-2 border-[#0C0E0F] rounded-xl p-4 shadow-comic">
                    <h4 className="font-tape text-xs text-[#0C0E0F] uppercase tracking-wider mb-1 flex items-center gap-1.5">
                      <span className="w-2 h-2 bg-[#EF4225] rounded-full"></span>
                      THE PROBLEM & CONTEXT
                    </h4>
                    <p className="font-sans text-sm md:text-base text-[#0C0E0F] leading-relaxed">
                      {exp.problem}
                    </p>
                  </div>

                  {/* Approach */}
                  <div className="bg-[#70A2FC]/30 border-2 border-[#0C0E0F] rounded-xl p-4 shadow-comic">
                    <h4 className="font-tape text-xs text-[#0C0E0F] uppercase tracking-wider mb-1 flex items-center gap-1.5">
                      <span className="w-2 h-2 bg-[#4080FB] rounded-full"></span>
                      MY APPROACH
                    </h4>
                    <p className="font-sans text-sm md:text-base text-[#0C0E0F] leading-relaxed">
                      {exp.approach}
                    </p>
                  </div>

                  {/* Impact & Learning */}
                  <div className="bg-[#22AC5F]/20 border-2 border-[#0C0E0F] rounded-xl p-4 shadow-comic">
                    <h4 className="font-tape text-xs text-[#0C0E0F] uppercase tracking-wider mb-2 flex items-center gap-1.5">
                      <span className="w-2 h-2 bg-[#22AC5F] rounded-full"></span>
                      IMPACT & KEY LEARNINGS
                    </h4>
                    <ul className="space-y-2.5 font-sans text-sm md:text-base text-[#0C0E0F]">
                      {exp.learnings.map((learning, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <ArrowRight
                            size={18}
                            className="text-[#22AC5F] mt-0.5 flex-shrink-0"
                          />
                          <span>{learning}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
