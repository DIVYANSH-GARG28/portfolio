import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { CodeXml, Workflow, Database, Cloud } from "lucide-react";

export const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillGroups = [
    {
      icon: CodeXml,
      categoryLabel: "LANGUAGES 01",
      title: "Core Languages",
      skills: ["Python", "SQL", "C++", "REST APIs", "Git", "OOP Concepts"],
      headerBg: "bg-[#4080FB]",
    },
    {
      icon: Workflow,
      categoryLabel: "AUTOMATION 02",
      title: "Automation & Ingestion",
      skills: [
        "n8n",
        "Webhooks",
        "REST APIs",
        "Zoho Bigin",
        "Zoho Flow",
        "Event-Driven Pipelines",
      ],
      headerBg: "bg-[#22AC5F]",
    },
    {
      icon: Database,
      categoryLabel: "RETRIEVAL 03",
      title: "RAG & Vector Memory",
      skills: [
        "RAG",
        "Embeddings",
        "ChromaDB",
        "FAISS",
        "MySQL",
        "Vector Search",
      ],
      headerBg: "bg-[#FFE23A]",
    },
    {
      icon: Cloud,
      categoryLabel: "INFRASTRUCTURE 04",
      title: "Cloud & AI Training",
      skills: [
        "AWS Cloud Solutions",
        "IIT Mandi AI/ML",
        "LLM API Integration",
        "Prompt Engineering",
        "Failure Handling",
      ],
      headerBg: "bg-[#F57EB4]",
    },
  ];

  return (
    <section id="skills" className="py-24 bg-[#AD69FF] pattern-dots border-b-4 border-[#0C0E0F] relative overflow-hidden" ref={ref}>
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-3">
            <span className="comic-tag bg-[#FFE23A] text-[#0C0E0F]">
              ✦ CORE CAPABILITIES
            </span>
          </div>
          <h2 className="comic-display text-5xl md:text-6xl lg:text-7xl text-white mb-4">
            TECHNICAL ARSENAL
          </h2>
          <p className="font-sans font-medium text-lg text-white/90 max-w-2xl mx-auto bg-[#0C0E0F]/85 p-3 rounded-xl border-2 border-white/20">
            A balanced technical stack built through real enterprise automations, RAG vector retrieval systems, and verified cloud architecture.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ type: "spring", stiffness: 350, damping: 25, delay: i * 0.1 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="comic-card overflow-hidden flex flex-col justify-between"
            >
              {/* Card Header with Icon */}
              <div className={`${group.headerBg} p-5 border-b-3 border-[#0C0E0F] flex items-center justify-between`}>
                <div>
                  <span className="font-mono text-[9px] font-bold uppercase tracking-wider text-[#0C0E0F]/70 block">
                    {group.categoryLabel}
                  </span>
                  <h3 className="font-tape text-lg text-[#0C0E0F] uppercase tracking-wide">
                    {group.title}
                  </h3>
                </div>
                <div className="w-10 h-10 rounded-full bg-white border-2 border-[#0C0E0F] shadow-comic flex items-center justify-center flex-shrink-0">
                  <group.icon className="text-[#0C0E0F]" size={20} />
                </div>
              </div>

              {/* Skills Tags */}
              <div className="p-5 flex-1 flex flex-col justify-between bg-[#FFF8EE]">
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <motion.span
                      key={skill}
                      whileHover={{ scale: 1.08 }}
                      className="font-mono text-xs font-bold bg-white text-[#0C0E0F] px-2.5 py-1 rounded-lg border-2 border-[#0C0E0F] shadow-sm cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
