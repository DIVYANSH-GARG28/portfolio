import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Sparkles, CheckCircle2, Download, Mail, Phone, Coffee, Award, Zap, Heart, Flame } from "lucide-react";
import confetti from "canvas-confetti";

// Confetti blast helper
const fireMegaConfetti = () => {
  const count = 180;
  const defaults = {
    origin: { y: 0.65 },
    colors: ["#FFE23A", "#EF4225", "#4080FB", "#22AC5F", "#F57EB4", "#0C0E0F"],
  };

  const fire = (particleRatio: number, opts: confetti.Options) => {
    confetti({
      ...defaults,
      ...opts,
      particleCount: Math.floor(count * particleRatio),
    });
  };

  fire(0.25, { spread: 26, startVelocity: 55 });
  fire(0.2, { spread: 60 });
  fire(0.35, { spread: 100, decay: 0.91, scalar: 0.8 });
  fire(0.1, { spread: 120, startVelocity: 25, decay: 0.92, scalar: 1.2 });
  fire(0.1, { spread: 120, startVelocity: 45 });
};

export const EasterEggModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"speedrun" | "chai" | "offer">("speedrun");
  const [chaiCount, setChaiCount] = useState(0);
  const [konamiProgress, setKonamiProgress] = useState<string[]>([]);
  const [isOfferSigned, setIsOfferSigned] = useState(false);

  // Open modal and fire celebratory confetti
  const triggerOpen = () => {
    setIsOpen(true);
    fireMegaConfetti();
  };

  // Konami Code sequence listener as secret nerd shortcut
  const konamiCode = [
    "ArrowUp",
    "ArrowUp",
    "ArrowDown",
    "ArrowDown",
    "ArrowLeft",
    "ArrowRight",
    "ArrowLeft",
    "ArrowRight",
    "b",
    "a",
  ];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
        return;
      }

      const key = e.key.length === 1 ? e.key.toLowerCase() : e.key;
      const expectedKey = konamiCode[konamiProgress.length];

      if (key === expectedKey || (key === "B" && expectedKey === "b") || (key === "A" && expectedKey === "a")) {
        const nextProgress = [...konamiProgress, expectedKey];
        setKonamiProgress(nextProgress);

        if (nextProgress.length === konamiCode.length) {
          triggerOpen();
          setKonamiProgress([]);
        }
      } else {
        setKonamiProgress(key === konamiCode[0] ? [konamiCode[0]] : []);
      }
    };

    const handleCustomTrigger = () => {
      triggerOpen();
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("open-easter-egg", handleCustomTrigger);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("open-easter-egg", handleCustomTrigger);
    };
  }, [konamiProgress]);

  // Chai Clicker milestones
  const getChaiLevel = (count: number) => {
    if (count === 0) return { title: "Chai Level 0: Sober & Polite", desc: "Feed Divyansh chai to boost engineering output!", color: "text-gray-500" };
    if (count < 5) return { title: "Level 1: Caffeinated ☕", desc: "Typing speed boosted to 95 WPM. No compiler errors in sight.", color: "text-[#4080FB]" };
    if (count < 12) return { title: "Level 2: Kadak Chai Mode ⚡", desc: "Resolved 4 Git merge conflicts and wrote 2 webhook scripts.", color: "text-[#22AC5F]" };
    if (count < 25) return { title: "Level 3: Full-Stack Overclocked 🔥", desc: "Docker containers spin up in 1.2s. Supabase pipelines purring.", color: "text-[#EF4225]" };
    return { title: "Level 4: GOD MODE ACTIVATED 🚀", desc: "Divyansh just rebuilt the entire backend mentally before lunch!", color: "text-[#FFE23A]" };
  };

  const handleChaiClick = () => {
    const next = chaiCount + 1;
    setChaiCount(next);

    // Mini confetti burst on clicks
    confetti({
      particleCount: 15,
      spread: 45,
      origin: { y: 0.7 },
      colors: ["#FFE23A", "#EF4225", "#F57EB4"],
    });

    if (next === 5 || next === 12 || next === 25) {
      fireMegaConfetti();
    }
  };

  const chaiMilestone = getChaiLevel(chaiCount);

  return (
    <>
      {/* 1. FLOATING ALWAYS-VISIBLE "DO NOT PRESS" COMIC BUTTON (Bottom Right) */}
      <div className="fixed bottom-6 right-6 z-50 select-none">
        <div className="relative group">
          {/* Animated Comic Tooltip */}
          <motion.div
            animate={{ y: [0, -4, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="absolute -top-9 right-1 bg-[#FFE23A] text-[#0C0E0F] border-2 border-[#0C0E0F] rounded-lg px-2.5 py-0.5 font-sans font-black text-[11px] shadow-comic flex items-center gap-1 whitespace-nowrap pointer-events-none"
          >
            <span>Curious? Don't click!</span>
            <span className="text-xs">👀</span>
          </motion.div>

          <motion.button
            whileHover={{ scale: 1.08, rotate: -2 }}
            whileTap={{ scale: 0.92 }}
            onClick={triggerOpen}
            className="bg-[#EF4225] text-white border-3 border-[#0C0E0F] rounded-full px-5 py-3 shadow-comic-xl flex items-center gap-2.5 font-tape uppercase text-sm tracking-wide cursor-pointer hover:bg-[#d63317] transition-all"
            title="Whatever you do, do not press this button!"
            aria-label="Do Not Press Secret Button"
          >
            <span className="w-3 h-3 rounded-full bg-[#FFE23A] border border-[#0C0E0F] animate-ping" />
            <span className="font-bold flex items-center gap-1.5">
              <span>🚨</span> DO NOT CLICK
            </span>
          </motion.button>
        </div>
      </div>

      {/* 2. THE BIG COMIC EASTER EGG / SPEEDRUN MODAL */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-[#0C0E0F]/75 backdrop-blur-sm overflow-y-auto">
            <motion.div
              initial={{ scale: 0.7, opacity: 0, rotate: -3 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              exit={{ scale: 0.7, opacity: 0 }}
              transition={{ type: "spring", stiffness: 320, damping: 24 }}
              className="w-full max-w-2xl bg-[#FFF8EE] text-[#0C0E0F] border-4 border-[#0C0E0F] rounded-3xl p-6 sm:p-8 shadow-comic-xl relative my-8"
            >
              {/* Top Banner Sticker */}
              <div className="absolute -top-5 left-8 bg-[#EF4225] text-white border-3 border-[#0C0E0F] rounded-xl px-4 py-1 font-tape text-xs uppercase shadow-comic -rotate-2 flex items-center gap-1.5">
                <Flame size={14} className="text-[#FFE23A]" />
                <span>EASTER EGG UNLOCKED!</span>
              </div>

              {/* Close Button */}
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white border-3 border-[#0C0E0F] shadow-comic hover:bg-[#FFE23A] flex items-center justify-center transition-transform hover:scale-110 active:scale-95 text-[#0C0E0F]"
                aria-label="Close easter egg modal"
              >
                <X size={20} />
              </button>

              {/* Modal Headline */}
              <div className="mb-6 pt-2">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl">💥</span>
                  <h2 className="comic-display text-4xl sm:text-5xl text-[#0C0E0F] tracking-normal">
                    YOU PRESSED THE <span className="comic-display-red">FORBIDDEN BUTTON!</span>
                  </h2>
                </div>
                <p className="font-sans text-sm sm:text-base text-[#0C0E0F]/80">
                  Engineering Rule #1 violated: <em>Never touch red buttons in production.</em> But since you have unmatched curiosity, you just discovered the <strong>Divyansh Speedrun Portal</strong>.
                </p>
              </div>

              {/* Interactive Tabs */}
              <div className="flex flex-wrap gap-2 border-b-3 border-[#0C0E0F] pb-4 mb-6">
                {[
                  { id: "speedrun", label: "⚡ Recruiter Speedrun", icon: Zap },
                  { id: "chai", label: "☕ Feed Divyansh Chai", icon: Coffee },
                  { id: "offer", label: "📜 Instant Offer Letter", icon: Award },
                ].map((tab) => {
                  const Icon = tab.icon;
                  const isActive = activeTab === tab.id;
                  return (
                    <button
                      key={tab.id}
                      type="button"
                      onClick={() => setActiveTab(tab.id as any)}
                      className={`font-tape text-xs sm:text-sm uppercase px-4 py-2 rounded-xl border-3 border-[#0C0E0F] flex items-center gap-1.5 transition-all cursor-pointer ${
                        isActive
                          ? "bg-[#FFE23A] shadow-comic -translate-y-0.5"
                          : "bg-white hover:bg-neutral-100 shadow-[2px_2px_0_#0C0E0F]"
                      }`}
                    >
                      <Icon size={16} />
                      <span>{tab.label}</span>
                    </button>
                  );
                })}
              </div>

              {/* TAB 1: RECRUITER SPEEDRUN */}
              {activeTab === "speedrun" && (
                <div className="space-y-4">
                  <div className="bg-white border-3 border-[#0C0E0F] rounded-2xl p-5 shadow-comic">
                    <h3 className="font-tape text-base uppercase text-[#0C0E0F] mb-3 flex items-center gap-2">
                      <Sparkles size={18} className="text-[#EF4225]" />
                      <span>The 30-Second Interview Cheat-Sheet</span>
                    </h3>
                    <div className="grid sm:grid-cols-2 gap-3 text-xs sm:text-sm">
                      <div className="flex items-start gap-2 bg-[#FFF8EE] p-3 rounded-xl border-2 border-[#0C0E0F]">
                        <CheckCircle2 size={16} className="text-[#22AC5F] shrink-0 mt-0.5" />
                        <div>
                          <strong>8.16 / 10 CGPA</strong>
                          <p className="text-gray-600 text-xs">AKTU B.Tech Computer Science (Solid CS core)</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-2 bg-[#FFF8EE] p-3 rounded-xl border-2 border-[#0C0E0F]">
                        <CheckCircle2 size={16} className="text-[#22AC5F] shrink-0 mt-0.5" />
                        <div>
                          <strong>Chess Gaja Automation</strong>
                          <p className="text-gray-600 text-xs">Cut lead response times from hours to &lt;30s</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-2 bg-[#FFF8EE] p-3 rounded-xl border-2 border-[#0C0E0F]">
                        <CheckCircle2 size={16} className="text-[#22AC5F] shrink-0 mt-0.5" />
                        <div>
                          <strong>Scaler YIIC 2.0 Alum</strong>
                          <p className="text-gray-600 text-xs">High-stakes pitching, public speaking & leadership</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-2 bg-[#FFF8EE] p-3 rounded-xl border-2 border-[#0C0E0F]">
                        <CheckCircle2 size={16} className="text-[#22AC5F] shrink-0 mt-0.5" />
                        <div>
                          <strong>No Tutorial Hell</strong>
                          <p className="text-gray-600 text-xs">Builds functional RAG, vector search & webhooks</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Fast Action Buttons */}
                  <div className="flex flex-wrap gap-3 pt-2">
                    <a
                      href="/resume.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="comic-btn bg-[#22AC5F] text-white text-sm px-5 py-3 flex items-center gap-2"
                    >
                      <Download size={16} />
                      <span>Download Resume (PDF)</span>
                    </a>
                    <a
                      href="mailto:divyansh2282006@gmail.com?subject=Divyansh,%20we%20clicked%20the%20red%20button!&body=Hi%20Divyansh,%0D%0A%0D%0AWe%20found%20your%20secret%20easter%20egg%20and%20loved%20your%20portfolio.%20Let's%20set%20up%20a%20quick%20chat!"
                      className="comic-btn bg-[#FFE23A] text-[#0C0E0F] text-sm px-5 py-3 flex items-center gap-2"
                    >
                      <Mail size={16} />
                      <span>Fast-Track Interview Invite</span>
                    </a>
                    <a
                      href="tel:8595756136"
                      className="comic-btn comic-btn-white text-sm px-5 py-3 flex items-center gap-2"
                    >
                      <Phone size={16} />
                      <span>Call +91 8595756136</span>
                    </a>
                  </div>
                </div>
              )}

              {/* TAB 2: CHAI MACHINE CLICKER GAME */}
              {activeTab === "chai" && (
                <div className="space-y-4 text-center">
                  <div className="bg-white border-3 border-[#0C0E0F] rounded-2xl p-6 shadow-comic flex flex-col items-center">
                    <p className="font-tape text-xs uppercase tracking-widest text-[#0C0E0F]/70 mb-1">
                      HYDRATION & CAFFEINE REPOSITORY
                    </p>
                    <h3 className="font-display text-2xl mb-3">
                      Total Cups Served: <span className="text-[#EF4225] font-black">{chaiCount}</span> ☕
                    </h3>

                    {/* Big Clickable Cup */}
                    <motion.button
                      whileHover={{ scale: 1.15, rotate: 5 }}
                      whileTap={{ scale: 0.85, rotate: -10 }}
                      onClick={handleChaiClick}
                      className="w-28 h-28 my-3 rounded-full bg-gradient-to-br from-[#FFE23A] to-[#FCC230] border-4 border-[#0C0E0F] shadow-comic flex items-center justify-center cursor-pointer text-5xl select-none"
                      title="Tap to serve chai!"
                    >
                      ☕
                    </motion.button>
                    <p className="text-xs font-tape text-[#0C0E0F]/80 uppercase mt-1">
                      (Tap repeatedly to overclock Divyansh)
                    </p>

                    {/* Progress Bar & Status */}
                    <div className="w-full max-w-md mt-5 p-3 rounded-xl border-2 border-[#0C0E0F] bg-[#FFF8EE] text-left">
                      <div className="flex justify-between items-center mb-1">
                        <span className={`font-tape text-xs uppercase font-bold ${chaiMilestone.color}`}>
                          {chaiMilestone.title}
                        </span>
                        <span className="font-mono text-xs">{chaiCount}/25</span>
                      </div>
                      <div className="w-full h-3 bg-white border border-[#0C0E0F] rounded-full overflow-hidden">
                        <div
                          className="h-full bg-[#EF4225] transition-all duration-200"
                          style={{ width: `${Math.min(100, (chaiCount / 25) * 100)}%` }}
                        />
                      </div>
                      <p className="text-xs text-gray-700 mt-2 font-sans">{chaiMilestone.desc}</p>
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 3: INSTANT OFFER LETTER GENERATOR */}
              {activeTab === "offer" && (
                <div className="space-y-4">
                  <div className="bg-white border-3 border-[#0C0E0F] rounded-2xl p-6 shadow-comic relative overflow-hidden">
                    {/* Watermark Stamp */}
                    <div className="absolute right-4 bottom-4 border-4 border-[#22AC5F] text-[#22AC5F] font-tape text-sm sm:text-base uppercase px-4 py-1.5 rounded-lg rotate-[-12deg] opacity-80 pointer-events-none">
                      {isOfferSigned ? "OFFER ACCEPTED! 🚀" : "READY FOR SIGNATURE ✍️"}
                    </div>

                    <div className="border-b-2 border-dashed border-[#0C0E0F]/30 pb-3 mb-4">
                      <p className="font-tape text-xs uppercase tracking-widest text-[#EF4225]">
                        CONFIDENTIAL // JOB OFFER CERTIFICATE
                      </p>
                      <h3 className="font-display text-xl sm:text-2xl text-[#0C0E0F]">
                        Offer of Employment: Software &amp; AI Builder
                      </h3>
                    </div>

                    <div className="space-y-2.5 font-sans text-xs sm:text-sm text-[#0C0E0F]/90">
                      <p>
                        <strong>Candidate:</strong> Divyansh Garg (B.Tech CSE, AKTU • CGPA 8.16)
                      </p>
                      <p>
                        <strong>Designation:</strong> Technical Automation &amp; AI Engineer / Intern
                      </p>
                      <p>
                        <strong>Starting Package:</strong> Competitive Industry CTC + Unlimited Chai + Zero Micro-Management.
                      </p>
                      <p>
                        <strong>Superpower Clause:</strong> Solves messy integration bugs, builds n8n/RAG automations, and speaks clearly in front of stakeholders (Scaler YIIC 2.0 certified).
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t-2 border-[#0C0E0F] flex flex-wrap items-center justify-between gap-3">
                      <div>
                        <p className="font-mono text-xs text-gray-500">SIGNATURE OF RECRUITER WITH EXCELLENT TASTE:</p>
                        <p className="font-tape text-sm text-[#0C0E0F] italic">
                          {isOfferSigned ? "Verified by You! 🎉" : "____________________"}
                        </p>
                      </div>

                      <button
                        type="button"
                        onClick={() => {
                          setIsOfferSigned(true);
                          fireMegaConfetti();
                        }}
                        className="comic-btn bg-[#FFE23A] text-[#0C0E0F] text-xs sm:text-sm px-4 py-2.5 flex items-center gap-1.5"
                      >
                        <Heart size={15} className="text-[#EF4225]" />
                        <span>{isOfferSigned ? "Offer Signed! 🎊" : "Sign This Offer!"}</span>
                      </button>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <a
                      href="mailto:divyansh2282006@gmail.com?subject=Divyansh,%20here%20is%20your%20official%20interview%20offer!&body=Hi%20Divyansh,%0D%0A%0D%0AI%20signed%20the%20comic%20offer%20letter%20on%20your%20portfolio!%20Let's%20connect%20for%20a%20real%20interview."
                      className="comic-btn bg-[#22AC5F] text-white text-sm px-6 py-3 flex items-center gap-2"
                    >
                      <Mail size={16} />
                      <span>Send This Offer to Divyansh</span>
                    </a>
                  </div>
                </div>
              )}

              {/* Modal Footer Tip */}
              <div className="mt-6 pt-4 border-t-2 border-[#0C0E0F]/20 flex flex-wrap items-center justify-between gap-2 text-xs text-[#0C0E0F]/70 font-mono">
                <span>Tip: You can also tap anywhere or press ESC to exit.</span>
                <span className="font-tape uppercase text-[11px] bg-[#FFE23A] px-2 py-0.5 rounded border border-[#0C0E0F]">
                  100% Discoverable Easter Egg ✦
                </span>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
