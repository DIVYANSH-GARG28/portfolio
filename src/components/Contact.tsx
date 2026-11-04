import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Linkedin, Github, Phone, Code2, ArrowUpRight } from "lucide-react";
import { TapeBanner } from "./TapeBanner";
import resumePdf from "../assets/resume.pdf";

export const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const contacts = [
    {
      icon: Mail,
      label: "Direct Ingestion Email",
      value: "divyansh2282006@gmail.com",
      href: "mailto:divyansh2282006@gmail.com",
      bg: "bg-[#FFE23A]",
    },
    {
      icon: Linkedin,
      label: "LinkedIn Telemetry",
      value: "linkedin.com/in/divyansh-garg",
      href: "https://linkedin.com/in/divyansh-garg",
      bg: "bg-[#70A2FC]",
    },
    {
      icon: Github,
      label: "GitHub Profile",
      value: "github.com/DIVYANSH-GARG28",
      href: "https://github.com/DIVYANSH-GARG28",
      bg: "bg-[#FFF8EE]",
    },
    {
      icon: Code2,
      label: "LeetCode Cockpit",
      value: "leetcode.com/DivyanshGarg2",
      href: "https://leetcode.com/DivyanshGarg2",
      bg: "bg-[#C596FF]",
    },
    {
      icon: Phone,
      label: "Comms Hotline",
      value: "+91 8595756136",
      href: "tel:8595756136",
      bg: "bg-[#22AC5F]",
    },
  ];

  return (
    <section id="contact" className="bg-[#FCC230] pattern-dots-yellow border-b-4 border-[#0C0E0F] relative overflow-hidden" ref={ref}>
      {/* Top Tilted Marquee */}
      <div className="relative -top-3">
        <TapeBanner
          text="DIRECT TRANSMISSION ✦ PIT STOP ✦ OPEN FOR INTERNSHIPS ✦ NEW DELHI • INDIA ✦"
          bg="bg-[#0C0E0F] text-white"
          tilt="left"
        />
      </div>

      <div className="container mx-auto px-6 pt-16 pb-24 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Badge */}
          <div className="inline-block mb-4">
            <span className="comic-tag bg-[#EF4225] text-white">
              ✦ PIT WALL TRANSMISSION
            </span>
          </div>

          <h2 className="comic-display text-7xl sm:text-8xl md:text-9xl mb-6">
            LET'S <span className="comic-display-red">TALK</span>
          </h2>

          <div className="bg-[#FFF8EE] border-3 border-[#0C0E0F] rounded-2xl p-5 shadow-comic max-w-xl mx-auto mb-12">
            <p className="font-sans text-lg md:text-xl font-medium text-[#0C0E0F] leading-relaxed">
              Looking for a high-output engineering internship where I can solve real pipeline and AI retrieval bottlenecks. Let's see if there's a fit on the starting grid.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-16">
            <motion.a
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              href="mailto:divyansh2282006@gmail.com"
              className="comic-btn bg-[#22AC5F] text-white text-lg py-4 px-8 flex items-center gap-3 shadow-comic-md"
            >
              <Mail size={22} className="text-white" />
              <span>Send Direct Message</span>
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              href={resumePdf}
              target="_blank"
              rel="noopener noreferrer"
              className="comic-btn comic-btn-white text-lg py-4 px-8 flex items-center gap-3 shadow-comic-md"
            >
              <span>Download Resume PDF</span>
              <ArrowUpRight size={22} />
            </motion.a>
          </div>

          {/* Contact Cards with Spring Telemetry Physics */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-3 max-w-5xl mx-auto">
            {contacts.map((contact) => (
              <motion.a
                key={contact.label}
                whileHover={{ y: -5, scale: 1.03 }}
                whileTap={{ scale: 0.96 }}
                href={contact.href}
                target={contact.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="comic-card bg-white p-4 flex flex-col items-center justify-center gap-2 shadow-comic hover:shadow-comic-md transition-shadow group"
              >
                <div className={`w-10 h-10 ${contact.bg} rounded-full border-2 border-[#0C0E0F] flex items-center justify-center`}>
                  <contact.icon size={20} className="text-[#0C0E0F]" />
                </div>
                <span className="font-mono text-[10px] uppercase tracking-wider text-[#0C0E0F]/60">
                  {contact.label}
                </span>
                <span className="font-tape text-xs uppercase text-[#0C0E0F] group-hover:text-[#EF4225] transition-colors break-all text-center">
                  {contact.value}
                </span>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
