import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { TapeBanner } from "./components/TapeBanner";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import { Mindset } from "./components/Mindset";
import { Roadmap } from "./components/Roadmap";
import { WhyMe } from "./components/WhyMe";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { EasterEggModal } from "./components/EasterEggModal";

export default function App() {
  return (
    <div className="min-h-screen bg-[#FFF8EE] text-[#0C0E0F] overflow-x-clip">
      <EasterEggModal />
      <Navbar />
      <main>
        <Hero />
        
        {/* Tilted Marquee Tape between Hero and About */}
        <div className="relative -my-3 z-20">
          <TapeBanner
            text="PROBLEM TO PRODUCT ✦ DIVYANSH GARG ✦ BUILDER ✦ SHIP INCREMENTALLY ✦ AI & IOT"
            bg="bg-[#FFE23A]"
            tilt="left"
          />
        </div>

        <About />

        {/* Tilted Marquee Tape between About and Skills */}
        <div className="relative -my-3 z-20">
          <TapeBanner
            text="TECHNICAL ARSENAL ✦ SOFTWARE ENGINEERING ✦ SYSTEMS & IOT ✦ AI AUTOMATION"
            bg="bg-white"
            tilt="right"
            reverse
          />
        </div>

        <Skills />

        <Experience />

        {/* Tilted Marquee Tape between Experience and Projects */}
        <div className="relative -my-3 z-20">
          <TapeBanner
            text="WHAT I'VE BUILT ✦ REAL PROJECTS ✦ REAL PROBLEMS ✦ MVPS & CODE"
            bg="bg-[#FFE23A]"
            tilt="left"
          />
        </div>

        <Projects />

        <Mindset />

        <Roadmap />

        <WhyMe />

        <Contact />
      </main>
      <Footer />
    </div>
  );
}
