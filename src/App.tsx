import React, { useState, useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Education } from "./components/Education";
import { Skills } from "./components/Skills";
import { Domains } from "./components/Domains";
import { Internships } from "./components/Internships";
import { Projects } from "./components/Projects";
import { Certifications } from "./components/Certifications";
import { Achievements } from "./components/Achievements";
import { Workshop } from "./components/Workshop";
import { ResumeSection } from "./components/ResumeSection";
import { ContactSection } from "./components/ContactSection";
import { ParticleBackground } from "./components/ParticleBackground";

export function App() {
  const [isDark, setIsDark] = useState<boolean>(true);
  const [activeSection, setActiveSection] = useState<string>("home");

  useEffect(() => {
    // Sync dark mode class with root html
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const handleScroll = () => {
      const scrollY = window.pageYOffset;

      sections.forEach((current) => {
        const sectionHeight = (current as HTMLElement).offsetHeight;
        const sectionTop = (current as HTMLElement).offsetTop - 120;
        const sectionId = current.getAttribute("id") || "";

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      id="portfolio-root"
      className={`min-h-screen transition-colors duration-500 font-sans selection:bg-blue-500 selection:text-white relative ${
        isDark
          ? "bg-slate-950 text-slate-100"
          : "bg-slate-50 text-slate-800"
      }`}
    >
      {/* 3D Particle Canvas Background */}
      <ParticleBackground isDark={isDark} />

      {/* Sticky Glass Navbar */}
      <Navbar
        isDark={isDark}
        setIsDark={setIsDark}
        activeSection={activeSection}
      />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <Hero isDark={isDark} />
        <About isDark={isDark} />
        <Education isDark={isDark} />
        <Skills isDark={isDark} />
        <Domains isDark={isDark} />
        <Internships isDark={isDark} />
        <Projects isDark={isDark} />
        <Certifications isDark={isDark} />
        <Achievements isDark={isDark} />
        <Workshop isDark={isDark} />
        <ResumeSection isDark={isDark} />
        <ContactSection isDark={isDark} />
      </main>
    </div>
  );
}

export default App;
