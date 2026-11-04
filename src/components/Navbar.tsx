import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles } from "lucide-react";

export const Navbar = () => {
  const [logoClicks, setLogoClicks] = useState(0);
  const [showToast, setShowToast] = useState(false);

  const links = ["About", "Skills", "Experience", "Projects", "Contact"];

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const count = logoClicks + 1;
    setLogoClicks(count);

    if (count === 5) {
      setShowToast(true);
      window.dispatchEvent(new CustomEvent("open-easter-egg"));
      setTimeout(() => setShowToast(false), 4000);
      setLogoClicks(0);
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 350, damping: 25 }}
        className="fixed top-3 left-0 right-0 z-50 px-4 flex justify-center pointer-events-none"
      >
        <div className="w-full max-w-5xl bg-[#0C0E0F]/95 backdrop-blur-xl text-white border-3 border-[#0C0E0F] rounded-full px-5 py-2.5 flex items-center justify-between shadow-[0_8px_20px_rgba(12,14,15,0.35)] pointer-events-auto transition-all">
          {/* Brand / Logo */}
          <button
            type="button"
            onClick={handleLogoClick}
            className="font-tape text-xl md:text-2xl text-white tracking-wider flex items-center gap-1 hover:text-[#FFE23A] transition-colors group cursor-pointer text-left"
            title="Click me 5 times! ✦"
          >
            <span>DG</span>
            <span className="text-[#FFE23A] text-2xl leading-none">.</span>
          </button>

          {/* Navigation links */}
          <nav className="hidden md:flex items-center gap-7">
            {links.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="font-tape text-xs uppercase tracking-wider text-white/80 hover:text-[#FFE23A] hover:-translate-y-0.5 transition-all duration-150 relative py-1"
              >
                {link}
              </a>
            ))}
          </nav>

          {/* Action Button */}
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="comic-btn text-xs py-2 px-5 bg-[#FFE23A] text-[#0C0E0F] shadow-comic hover:scale-105 active:scale-95 transition-transform"
            >
              Let's Talk ✦
            </a>
          </div>
        </div>
      </motion.header>

      {/* Easter Egg Toast on 5 Clicks */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.9 }}
            className="fixed top-20 left-1/2 -translate-x-1/2 z-[100] bg-[#FFE23A] text-[#0C0E0F] border-3 border-[#0C0E0F] rounded-2xl px-5 py-2.5 shadow-comic-md font-tape text-xs uppercase flex items-center gap-2"
          >
            <Sparkles size={16} className="text-[#EF4225] animate-spin" />
            <span>🎉 Secret Discovered! You clicked DG. 5 times! You've got an eye for detail!</span>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
