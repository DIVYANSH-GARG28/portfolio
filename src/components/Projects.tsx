import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Lightbulb, Wrench, BookOpen, Lock, MessageSquare } from "lucide-react";

export const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: "Knowledge Retrieval System",
      subtitle: "RAG, Embeddings, n8n & LLM APIs",
      status: "Completed",
      statusBadge: "bg-[#22AC5F] text-white",
      problem:
        "Large document repositories cannot be searched contextually with traditional keywords, leading to slow discovery and high hallucination risk with raw LLMs.",
      approach:
        "Implemented an end-to-end document question-answering pipeline using n8n, text embeddings, vector search (ChromaDB/FAISS), and LLM APIs to retrieve precise document context.",
      learned:
        "Context chunking strategy and embedding distance thresholds directly govern answer groundedness and eliminate hallucinations.",
      tech: ["RAG", "Embeddings", "n8n", "LLM APIs", "ChromaDB", "FAISS"],
      actionType: "request",
      actionText: "Request Walkthrough",
    },
    {
      title: "CortexLoop: Human-AI Reasoning",
      subtitle: "Decision & AI Verification Framework",
      status: "Completed",
      statusBadge: "bg-[#22AC5F] text-white",
      problem:
        "Black-box AI conclusions often introduce subtle biases, unsupported assumptions, or unchecked premises into critical decision paths.",
      approach:
        "Developed a four-stage human-in-the-loop workflow separating initial responses, AI critique, evidence exploration, and final human decisions. Structured pre- and post-AI comparisons.",
      learned:
        "Explicitly separating critique from synthesis surfaces alternative hypotheses and gives humans transparent control over final outcomes.",
      tech: ["Python", "LLM APIs", "Decision Framework", "Reasoning Workflows"],
      actionType: "request",
      actionText: "Discuss Architecture",
    },
    {
      title: "AI Voice Booking Assistant",
      subtitle: "Google AI APIs & Conversational Voice",
      status: "Completed",
      statusBadge: "bg-[#22AC5F] text-white",
      problem:
        "Manual meeting scheduling causes friction, delays, and lost leads when users have to navigate complex calendars on mobile.",
      approach:
        "Built a voice-based AI assistant using Google AI APIs to process spoken user requests and automate scheduling. Integrated speech processing with booking workflows via API integrations.",
      learned:
        "Conversational slot-filling requires resilient voice intent handling and idempotent API booking calls to prevent double-booking.",
      tech: ["Google AI APIs", "Speech Processing", "REST APIs", "Calendar Automation"],
      actionType: "request",
      actionText: "Request Demo Video",
    },
    {
      title: "Event-Driven Lead Pipeline",
      subtitle: "High-Throughput Webhook Ingestion Engine",
      status: "Production",
      statusBadge: "bg-[#AD69FF] text-white",
      problem:
        "Lead ingestion latency was hours long, with dirty data, duplicates, and malformed inputs causing 80% wasted manual verification effort.",
      approach:
        "Architected 15+ event-driven webhook pipelines across CRM (Zoho Bigin/Flow), web forms, and messaging gateways with automated deduplication and regex sanitization.",
      learned:
        "Deterministic validation at the ingestion layer cuts latency to under 30 seconds and protects downstream CRM data integrity.",
      tech: ["Webhooks", "n8n", "Zoho Bigin", "Zoho Flow", "Regex Sanitization"],
      actionType: "enterprise",
      actionText: "Enterprise Ingestion",
    },
  ];

  return (
    <section id="projects" className="py-24 pattern-dots-light border-b-4 border-[#0C0E0F] relative overflow-hidden" ref={ref}>
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-3">
            <span className="comic-tag bg-[#EF4225] text-white">
              ✦ BUILD LOG
            </span>
          </div>
          <h2 className="comic-display text-5xl md:text-6xl lg:text-7xl text-[#0C0E0F] mb-4">
            WHAT I'VE BUILT
          </h2>
          <p className="font-sans font-medium text-lg text-[#0C0E0F]/80 max-w-2xl mx-auto">
            Production-grade systems, RAG retrieval pipelines, and human-in-the-loop AI frameworks solving real friction.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ type: "spring", stiffness: 320, damping: 25, delay: i * 0.1 }}
              whileHover={{ y: -6, scale: 1.01 }}
              className="comic-card bg-white overflow-hidden flex flex-col justify-between"
            >
              {/* Header */}
              <div className="p-6 pb-4 border-b-3 border-[#0C0E0F] flex items-start justify-between gap-4 bg-[#FFF8EE]">
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-[#0C0E0F]/60 block mb-0.5">
                    PROJECT {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-tape text-xl md:text-2xl text-[#0C0E0F] uppercase tracking-wide">
                    {project.title}
                  </h3>
                  <span className="font-mono text-xs text-[#0C0E0F]/70 block mt-0.5">
                    {project.subtitle}
                  </span>
                </div>
                <span
                  className={`${project.statusBadge} font-tape text-xs uppercase px-3 py-1 rounded-full border-2 border-[#0C0E0F] shadow-sm flex-shrink-0`}
                >
                  {project.status}
                </span>
              </div>

              {/* Body */}
              <div className="p-6 space-y-4 flex-1">
                {/* Problem */}
                <div className="flex items-start gap-3 bg-[#FFE23A]/20 p-3.5 rounded-xl border border-[#0C0E0F]/30">
                  <div className="w-7 h-7 rounded-full bg-[#FFE23A] border-2 border-[#0C0E0F] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Lightbulb size={14} className="text-[#0C0E0F]" />
                  </div>
                  <div>
                    <span className="font-tape text-[11px] uppercase tracking-wider text-[#0C0E0F] block mb-0.5">
                      Problem
                    </span>
                    <p className="font-sans text-sm text-[#0C0E0F]/90 leading-relaxed">
                      {project.problem}
                    </p>
                  </div>
                </div>

                {/* Approach */}
                <div className="flex items-start gap-3 bg-[#70A2FC]/20 p-3.5 rounded-xl border border-[#0C0E0F]/30">
                  <div className="w-7 h-7 rounded-full bg-[#70A2FC] border-2 border-[#0C0E0F] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Wrench size={14} className="text-[#0C0E0F]" />
                  </div>
                  <div>
                    <span className="font-tape text-[11px] uppercase tracking-wider text-[#0C0E0F] block mb-0.5">
                      Approach
                    </span>
                    <p className="font-sans text-sm text-[#0C0E0F]/90 leading-relaxed">
                      {project.approach}
                    </p>
                  </div>
                </div>

                {/* Key Learning */}
                <div className="flex items-start gap-3 bg-[#22AC5F]/20 p-3.5 rounded-xl border border-[#0C0E0F]/30">
                  <div className="w-7 h-7 rounded-full bg-[#22AC5F] border-2 border-[#0C0E0F] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <BookOpen size={14} className="text-white" />
                  </div>
                  <div>
                    <span className="font-tape text-[11px] uppercase tracking-wider text-[#0C0E0F] block mb-0.5">
                      Key Learning
                    </span>
                    <p className="font-sans text-sm text-[#0C0E0F]/90 leading-relaxed">
                      {project.learned}
                    </p>
                  </div>
                </div>
              </div>

              {/* Tech Stack Pills & Smart Action Badge */}
              <div className="px-6 pb-6 pt-3 bg-[#FFF8EE] border-t-2 border-[#0C0E0F]/20">
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="font-mono text-xs font-bold bg-white text-[#0C0E0F] px-2.5 py-1 rounded-md border-2 border-[#0C0E0F] shadow-sm"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Smart Action Buttons (No dead links!) */}
                <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-[#0C0E0F]/10">
                  {project.actionType === "enterprise" ? (
                    <div className="flex items-center gap-2 font-mono text-xs text-[#0C0E0F]/70 bg-white px-3 py-1.5 rounded-full border-2 border-[#0C0E0F]">
                      <span>🏢 Internal Company System</span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-1.5 font-mono text-xs text-[#0C0E0F]/70 bg-white px-3 py-1.5 rounded-full border-2 border-[#0C0E0F]">
                      <Lock size={12} className="text-[#EF4225]" />
                      <span>Code on Request</span>
                    </div>
                  )}

                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="#contact"
                    className="comic-btn text-xs py-2 px-4 bg-[#FFE23A] text-[#0C0E0F] flex items-center gap-1.5 shadow-comic"
                  >
                    <MessageSquare size={14} />
                    <span>{project.actionText}</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
