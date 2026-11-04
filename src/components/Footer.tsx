export const Footer = () => {
  return (
    <footer className="bg-[#0C0E0F] text-white py-10 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <span className="font-tape text-2xl text-white tracking-wider">
              DG<span className="text-[#FFE23A]">.</span>
            </span>
            <span className="font-mono text-xs text-[#FFE23A] bg-white/10 px-2.5 py-1 rounded-full border border-white/20">
              BUILDER EDITION
            </span>
          </div>

          <div className="flex items-center gap-5 font-mono text-xs text-white/70">
            <a
              href="https://github.com/DIVYANSH-GARG28"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#FFE23A] transition-colors"
            >
              GitHub: @DIVYANSH-GARG28
            </a>
            <span>•</span>
            <a
              href="https://linkedin.com/in/divyansh-garg"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#FFE23A] transition-colors"
            >
              LinkedIn
            </a>
            <span>•</span>
            <a
              href="https://leetcode.com/DivyanshGarg2"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#FFE23A] transition-colors"
            >
              LeetCode
            </a>
          </div>

          <p className="font-mono text-xs md:text-sm text-white/50 text-center md:text-right">
            Built with curiosity & code. ✦ © {new Date().getFullYear()} Divyansh Garg
          </p>
        </div>
      </div>
    </footer>
  );
};
