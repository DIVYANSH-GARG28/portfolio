import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Linkedin, Mail, Phone, Code2, ArrowDown, Sparkles } from "lucide-react";
import confetti from "canvas-confetti";

export const Hero = () => {
  const [mascotClicks, setMascotClicks] = useState(0);
  const [speechBubble, setSpeechBubble] = useState<string | null>(null);

  const easterEggQuotes = [
    "Hey! I'm Divyansh's mascot! Ready to build something crazy? 🚀",
    "Fun Fact: Divyansh slashed lead latency from hours to under 30s! ⚡",
    "Psst... Did you notice the red 'DO NOT CLICK' button at the bottom right? 🚨",
    "You really like clicking me, don't you? Let's talk about an internship! ✉️",
    "Pro Tip: Click the big red button below or in the hero to unlock Speedrun mode! 💥",
  ];

  const handleMascotClick = () => {
    const nextCount = mascotClicks + 1;
    setMascotClicks(nextCount);
    const quote = easterEggQuotes[(nextCount - 1) % easterEggQuotes.length];
    setSpeechBubble(quote);

    // Mini confetti burst on mascot click
    confetti({
      particleCount: 25,
      spread: 60,
      origin: { y: 0.5, x: 0.75 },
      colors: ["#FFE23A", "#EF4225", "#4080FB", "#22AC5F"],
    });

    setTimeout(() => {
      setSpeechBubble(null);
    }, 4500);
  };

  return (
    <section className="relative min-h-screen flex items-center pt-28 pb-20 pattern-dots-yellow border-b-4 border-[#0C0E0F] overflow-hidden">
      {/* Decorative Starbursts */}
      <div className="absolute top-24 right-10 text-[#0C0E0F] opacity-15 pointer-events-none hidden lg:block text-8xl font-display">
        ✦
      </div>
      <div className="absolute bottom-28 left-8 text-[#0C0E0F] opacity-15 pointer-events-none hidden lg:block text-7xl font-display">
        ✦
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Headline & Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="lg:col-span-7"
          >
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 bg-[#FFF8EE] border-3 border-[#0C0E0F] rounded-full px-4 py-1.5 shadow-comic mb-6">
              <span className="w-3 h-3 bg-[#22AC5F] rounded-full border border-[#0C0E0F] animate-pulse" />
              <span className="font-tape text-xs md:text-sm uppercase tracking-wide text-[#0C0E0F]">
                Open for Internships • New Delhi
              </span>
            </div>

            {/* Giant Comic Bangers Heading */}
            <h1 className="comic-display text-6xl sm:text-7xl md:text-8xl lg:text-[5.5rem] xl:text-[6.5rem] mb-6 tracking-normal">
              I Turn <span className="comic-display-yellow">Problems</span>
              <br />
              Into Working{" "}
              <span className="comic-display-red">Solutions</span>
            </h1>

            {/* Subtext in Paper Card */}
            <div className="bg-[#FFF8EE] border-3 border-[#0C0E0F] rounded-2xl p-6 shadow-comic max-w-xl mb-8">
              <p className="font-sans text-base sm:text-lg text-[#0C0E0F] leading-relaxed">
                B.Tech CS student at AKTU building at the intersection of{" "}
                <strong className="underline decoration-[#EF4225] decoration-2">
                  event-driven automations
                </strong>
                ,{" "}
                <strong className="underline decoration-[#4080FB] decoration-2">
                  RAG &amp; LLM pipelines
                </strong>
                , and{" "}
                <strong className="underline decoration-[#22AC5F] decoration-2">
                  intelligent workflow integrations
                </strong>
                . I learn by shipping, not just studying.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <motion.a
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.96 }}
                href="#projects"
                className="comic-btn text-base sm:text-lg px-8 py-3.5 bg-[#FFE23A] text-[#0C0E0F]"
              >
                View My Work ✦
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.96 }}
                href="#contact"
                className="comic-btn comic-btn-white text-base sm:text-lg px-8 py-3.5"
              >
                Get In Touch
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.96 }}
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="comic-btn bg-[#22AC5F] text-white text-base sm:text-lg px-7 py-3.5"
              >
                Resume PDF 📄
              </motion.a>

              {/* 100% Discoverable Easter Egg Button in Hero */}
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                type="button"
                onClick={() => window.dispatchEvent(new CustomEvent("open-easter-egg"))}
                className="comic-btn bg-[#EF4225] text-white text-base sm:text-lg px-6 py-3.5 relative group cursor-pointer"
                title="Click at your own risk!"
              >
                <span className="absolute -top-3.5 right-2 bg-[#FFE23A] text-[#0C0E0F] border border-[#0C0E0F] text-[10px] font-tape px-2 py-0.5 rounded shadow -rotate-3 group-hover:rotate-0 transition-transform">
                  Don't Touch! 🤫
                </span>
                <span className="flex items-center gap-1.5 font-bold">
                  <span>🚨</span> SECRET BUTTON
                </span>
              </motion.button>
            </div>

            {/* Social Icons */}
            <div className="flex flex-wrap items-center gap-3">
              {[
                {
                  icon: Mail,
                  href: "mailto:divyansh2282006@gmail.com",
                  title: "Email: divyansh2282006@gmail.com",
                  bg: "hover:bg-[#FFE23A]",
                },
                {
                  icon: Linkedin,
                  href: "https://linkedin.com/in/divyansh-garg",
                  title: "LinkedIn",
                  bg: "hover:bg-[#70A2FC]",
                },
                {
                  icon: Github,
                  href: "https://github.com/DIVYANSH-GARG28",
                  title: "GitHub: @DIVYANSH-GARG28",
                  bg: "hover:bg-[#FFF8EE]",
                },
                {
                  icon: Code2,
                  href: "https://leetcode.com/DivyanshGarg2",
                  title: "LeetCode: DivyanshGarg2",
                  bg: "hover:bg-[#C596FF]",
                },
                {
                  icon: Phone,
                  href: "tel:8595756136",
                  title: "Phone: +91 8595756136",
                  bg: "hover:bg-[#22AC5F]",
                },
              ].map((item, idx) => (
                <motion.a
                  key={idx}
                  whileHover={{ scale: 1.12, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className={`w-11 h-11 bg-white border-3 border-[#0C0E0F] rounded-full shadow-comic flex items-center justify-center transition-all ${item.bg}`}
                  title={item.title}
                >
                  <item.icon size={20} className="text-[#0C0E0F]" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Comic Profile Card with Easter Egg Mascot */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 280, damping: 20, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-sm">
              {/* Comic Board Card */}
              <div className="bg-[#FFF8EE] border-4 border-[#0C0E0F] rounded-3xl p-7 shadow-comic-xl rotate-1 relative">
                {/* Simulated Tape at top */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#FFE23A] border-2 border-[#0C0E0F] px-6 py-1 font-tape text-xs uppercase shadow-comic -rotate-2">
                  BUILDER PROFILE ✦
                </div>

                {/* Avatar Box with Clickable Easter Egg Mascot */}
                <div
                  className="w-56 h-56 mx-auto rounded-2xl bg-gradient-to-br from-[#FFE071] to-[#FCC230] border-3 border-[#0C0E0F] flex flex-col items-center justify-center shadow-inner relative overflow-hidden mb-4 group cursor-pointer"
                  onClick={handleMascotClick}
                  title="Click me for a surprise! ✨"
                >
                  {/* Bouncing Visual Cue for Easter Egg */}
                  <div className="absolute top-2 right-2 bg-[#EF4225] text-white border-2 border-[#0C0E0F] rounded-full px-2 py-0.5 font-sans font-black text-[10px] shadow-comic flex items-center gap-1 z-20 pointer-events-none animate-bounce">
                    <span>Poke Me!</span> 👈
                  </div>

                  <motion.img
                    whileHover={{ scale: 1.12, rotate: 6 }}
                    whileTap={{ scale: 0.88, rotate: -15 }}
                    src="/mascot.svg"
                    alt="Cheer Mascot"
                    className="w-32 h-32 object-contain drop-shadow-[2px_2px_0_#0C0E0F] mb-1"
                  />
                  <div className="flex items-center gap-1 font-tape text-[11px] text-[#0C0E0F] uppercase tracking-wider bg-white px-2.5 py-0.5 rounded border border-[#0C0E0F]">
                    <span>Divyansh Garg</span>
                    <Sparkles size={11} className="text-[#EF4225]" />
                  </div>
                </div>

                {/* Speech Bubble Easter Egg Popup */}
                <AnimatePresence>
                  {speechBubble && (
                    <motion.div
                      initial={{ scale: 0.7, opacity: 0, y: 10 }}
                      animate={{ scale: 1, opacity: 1, y: 0 }}
                      exit={{ scale: 0.8, opacity: 0 }}
                      className="absolute -top-16 left-2 right-2 bg-white text-[#0C0E0F] border-3 border-[#0C0E0F] rounded-2xl p-3 shadow-comic-md z-30 font-sans text-xs font-semibold text-center"
                    >
                      {speechBubble}
                      <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-3 h-3 bg-white border-b-2 border-r-2 border-[#0C0E0F] rotate-45" />
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="text-center space-y-1">
                  <p className="font-tape text-sm uppercase tracking-wider text-[#0C0E0F]">
                    B.Tech CSE • CGPA 8.16 / 10
                  </p>
                  <p className="font-mono text-xs uppercase tracking-widest text-[#0C0E0F]/70">
                    AKTU • NEW DELHI • 2024-PRESENT
                  </p>
                </div>
              </div>

              {/* Floating Comic Sticker Badges */}
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="absolute -left-6 top-8 bg-[#4080FB] text-white border-3 border-[#0C0E0F] rounded-2xl px-4 py-2 shadow-comic font-tape text-xs uppercase -rotate-6 cursor-default"
              >
                🚀 Webhook Architect
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="absolute -right-6 top-1/2 bg-[#FFE23A] text-[#0C0E0F] border-3 border-[#0C0E0F] rounded-2xl px-4 py-2 shadow-comic font-tape text-xs uppercase rotate-6 cursor-default"
              >
                ⚡ RAG &amp; Vector Search
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="absolute left-6 -bottom-5 bg-[#F57EB4] text-[#0C0E0F] border-3 border-[#0C0E0F] rounded-2xl px-4 py-2 shadow-comic font-tape text-xs uppercase -rotate-2 cursor-default"
              >
                🤖 n8n &amp; LLM APIs
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <div className="flex justify-center mt-8 hidden md:flex">
          <motion.a
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
            href="#about"
            className="w-12 h-12 bg-[#FFF8EE] border-3 border-[#0C0E0F] rounded-full shadow-comic flex items-center justify-center hover:bg-[#FFE23A] transition-colors"
            aria-label="Scroll to About"
          >
            <ArrowDown className="text-[#0C0E0F]" size={22} />
          </motion.a>
        </div>
      </div>
    </section>
  );
};
