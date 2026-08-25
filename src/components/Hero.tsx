import React, { useEffect, useState, useRef } from "react";
import {
  Sparkles,
  ArrowRight,
  Download,
  Mail,
  GraduationCap,
  Award,
  Layers,
  CheckCircle2,
  Github,
  Linkedin,
  Code2,
  Terminal,
  Cpu,
  Database,
  Globe,
} from "lucide-react";
import { heroStats, personalInfo } from "../data/portfolioData";
import { generateResumePdf } from "../utils/pdfGenerator";
import { TiltCard } from "./TiltCard";

interface HeroProps {
  isDark: boolean;
}

const floatingSkills = [
  { name: "HTML", pos: "-top-3 -left-4 sm:-top-5 sm:-left-6", bg: "from-orange-500 to-amber-600", delay: "0s" },
  { name: "Python", pos: "-top-4 -right-4 sm:-top-6 sm:-right-8", bg: "from-blue-500 to-cyan-600", delay: "1.2s" },
  { name: "PHP", pos: "top-1/3 -left-8 sm:top-1/3 sm:-left-12", bg: "from-indigo-600 to-purple-600", delay: "0.6s" },
  { name: "SQL", pos: "top-1/2 -right-6 sm:top-1/2 sm:-right-10", bg: "from-emerald-500 to-teal-600", delay: "1.8s" },
  { name: "AI", pos: "-bottom-4 -left-4 sm:-bottom-6 sm:-left-6", bg: "from-violet-600 to-fuchsia-600", delay: "2.4s" },
  { name: "Power BI", pos: "-bottom-3 -right-4 sm:-bottom-5 sm:-right-6", bg: "from-amber-500 to-yellow-600", delay: "1.0s" },
];

export const Hero: React.FC<HeroProps> = ({ isDark }) => {
  const statsRef = useRef<HTMLDivElement>(null);
  const [counts, setCounts] = useState<{ [key: number]: number }>({ 0: 0, 1: 0, 2: 0, 3: 0 });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          // Animate statistics counter numbers smoothly
          heroStats.forEach((stat, index) => {
            const target = stat.isNumeric;
            const duration = 1600;
            const steps = 40;
            const stepTime = duration / steps;
            let current = 0;
            const increment = target / steps;

            const timer = setInterval(() => {
              current += increment;
              if (current >= target) {
                current = target;
                clearInterval(timer);
              }
              setCounts((prev) => ({
                ...prev,
                [index]: stat.decimals > 0 ? parseFloat(current.toFixed(stat.decimals)) : Math.floor(current),
              }));
            }, stepTime);
          });
        }
      },
      { threshold: 0.2 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }
    return () => observer.disconnect();
  }, [hasAnimated]);

  const scrollToSection = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const elem = document.querySelector(id);
    if (elem) {
      elem.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 pb-16 lg:pt-36 lg:pb-24 flex flex-col justify-center overflow-hidden"
    >
      {/* Background ambient lighting orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] sm:w-[700px] h-[500px] bg-gradient-to-tr from-blue-600/20 via-indigo-600/15 to-violet-600/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/2 right-10 w-[350px] h-[350px] bg-cyan-500/15 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Split screen Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT COLUMN: Bio & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left z-10">
            {/* Small Badge */}
            <div
              id="hero-badge"
              className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-6 border transition-all duration-300 ${
                isDark
                  ? "bg-slate-900/90 border-blue-500/30 text-blue-400 shadow-md shadow-blue-500/10"
                  : "bg-blue-50/90 border-blue-200 text-blue-700 shadow-sm"
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              <span>MCA STUDENT • WEB DEVELOPER • AI ENTHUSIAST</span>
            </div>

            {/* Main Greeting Heading */}
            <h2
              id="hero-greeting"
              className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-400 mb-2"
            >
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-blue-500 via-indigo-500 to-violet-500 bg-clip-text text-transparent font-extrabold text-3xl sm:text-4xl lg:text-5xl">
                Swetha J
              </span>
            </h2>

            {/* Large Secondary Heading */}
            <h1
              id="hero-main-title"
              className={`text-3xl sm:text-4xl lg:text-5xl xl:text-5xl font-extrabold tracking-tight leading-tight sm:leading-tight mb-6 ${
                isDark ? "text-white" : "text-slate-900"
              }`}
            >
              Building Digital Experiences with{" "}
              <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-cyan-400 bg-clip-text text-transparent">
                Code & Creativity
              </span>
            </h1>

            {/* Short Introduction */}
            <p
              id="hero-intro-text"
              className={`text-base sm:text-lg leading-relaxed mb-8 max-w-2xl ${
                isDark ? "text-slate-300" : "text-slate-600"
              }`}
            >
              Master of Computer Applications student passionate about{" "}
              <strong className={isDark ? "text-blue-300" : "text-blue-700"}>Web Development</strong>,{" "}
              <strong className={isDark ? "text-violet-300" : "text-violet-700"}>Artificial Intelligence</strong>,{" "}
              <strong className={isDark ? "text-cyan-300" : "text-cyan-700"}>Data Analytics</strong> and{" "}
              <strong className={isDark ? "text-indigo-300" : "text-indigo-700"}>Data Visualization</strong>. I enjoy
              transforming ideas into interactive and meaningful digital experiences.
            </p>

            {/* Call to Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 mb-8 w-full sm:w-auto">
              <a
                id="hero-btn-view-projects"
                href="#projects"
                onClick={(e) => scrollToSection(e, "#projects")}
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 hover:from-blue-500 hover:via-indigo-500 hover:to-violet-500 text-white shadow-xl shadow-blue-600/25 hover:shadow-blue-600/40 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
              >
                <span>View My Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                id="hero-btn-download-resume"
                onClick={generateResumePdf}
                className={`flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm border transition-all duration-200 hover:-translate-y-0.5 cursor-pointer ${
                  isDark
                    ? "bg-slate-900/80 border-slate-700 text-slate-200 hover:bg-slate-800 hover:text-white hover:border-blue-500/50 shadow-lg shadow-black/20"
                    : "bg-white border-slate-300 text-slate-800 hover:bg-slate-50 hover:border-blue-400 shadow-md shadow-slate-200/50"
                }`}
              >
                <Download className="w-4 h-4 text-blue-500" />
                <span>Download Resume</span>
              </button>

              <a
                id="hero-btn-lets-connect"
                href="#contact"
                onClick={(e) => scrollToSection(e, "#contact")}
                className={`inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-sm border transition-all duration-200 hover:-translate-y-0.5 cursor-pointer ${
                  isDark
                    ? "bg-blue-950/40 border-blue-800/60 text-blue-300 hover:bg-blue-900/50"
                    : "bg-blue-50 border-blue-200 text-blue-700 hover:bg-blue-100"
                }`}
              >
                <Mail className="w-4 h-4" />
                <span>Let's Connect</span>
              </a>
            </div>

            {/* Quick Social Handles */}
            <div className="flex items-center gap-4 text-xs font-medium text-slate-400">
              <span className="font-semibold uppercase tracking-wider text-[11px] text-slate-500">Connect:</span>
              <a
                id="hero-social-github"
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-blue-400 transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>
              <span className="text-slate-600">•</span>
              <a
                id="hero-social-linkedin"
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-blue-400 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          {/* RIGHT COLUMN: 3D Profile Frame with Floating Badges */}
          <div className="lg:col-span-5 flex justify-center items-center relative py-8">
            <div className="relative w-full max-w-[340px] sm:max-w-[380px] aspect-square flex items-center justify-center">
              
              {/* Outer decorative glowing ring */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-blue-600/30 via-indigo-500/20 to-violet-600/30 blur-2xl -z-10 animate-pulse" />

              {/* Main 3D Glass Container with Float Animation */}
              <TiltCard
                id="hero-profile-tilt-card"
                maxTilt={12}
                scale={1.03}
                glowColor="rgba(59, 130, 246, 0.4)"
                className="w-full h-full animate-[float_6s_ease-in-out_infinite]"
              >
                <div
                  className={`w-full h-full rounded-3xl p-3 sm:p-4 border backdrop-blur-xl transition-all duration-300 relative overflow-hidden flex flex-col items-center justify-center ${
                    isDark
                      ? "bg-slate-900/60 border-slate-700/80 shadow-2xl shadow-blue-950/50"
                      : "bg-white/75 border-blue-200/80 shadow-2xl shadow-blue-100/80"
                  }`}
                >
                  {/* 3D Developer Insignia & Code Matrix Glass Card */}
                  <div className="relative w-full h-full rounded-2xl overflow-hidden border-2 border-blue-400/40 shadow-inner group flex flex-col justify-between p-5 bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 text-white">
                    {/* Top Console Bar */}
                    <div className="flex items-center justify-between pb-3 border-b border-slate-800/80">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                        <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                      </div>
                      <span className="text-[10px] font-mono font-semibold tracking-wider text-blue-400">
                        swetha_dev.ts
                      </span>
                    </div>

                    {/* Center 3D Monogram & Visual Iconography */}
                    <div className="my-auto flex flex-col items-center justify-center text-center py-2">
                      <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-3xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-violet-600 flex items-center justify-center text-white font-black text-3xl sm:text-4xl shadow-xl shadow-blue-500/30 border border-white/20 group-hover:scale-105 transition-transform duration-300">
                        SJ
                      </div>
                      <span className="mt-3 text-sm sm:text-base font-extrabold tracking-wide bg-gradient-to-r from-blue-400 via-indigo-300 to-violet-300 bg-clip-text text-transparent">
                        SWETHA J
                      </span>
                      <div className="flex items-center gap-2 mt-1 text-[11px] text-slate-400 font-mono">
                        <span>Web</span>
                        <span>•</span>
                        <span>AI</span>
                        <span>•</span>
                        <span>Data Analytics</span>
                      </div>
                    </div>

                    {/* Profile Overlay Bottom Tag */}
                    <div className="p-2.5 rounded-xl bg-slate-900/85 backdrop-blur-md border border-white/10 text-white flex items-center justify-between shadow-lg">
                      <div className="flex flex-col">
                        <span className="text-[11px] font-bold tracking-wide">MCA Scholar</span>
                        <span className="text-[9px] text-blue-300 font-mono">Holy Cross College</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                        <span className="text-[10px] text-emerald-400 font-semibold">Active</span>
                      </div>
                    </div>
                  </div>
                </div>
              </TiltCard>

              {/* 6 Floating 3D Skill Badges */}
              {floatingSkills.map((badge, idx) => (
                <div
                  key={badge.name}
                  id={`hero-floating-badge-${badge.name.toLowerCase().replace(/\s+/g, "-")}`}
                  style={{
                    animationDelay: badge.delay,
                  }}
                  className={`absolute ${badge.pos} z-20 px-3 py-1.5 rounded-xl text-xs font-bold text-white shadow-xl backdrop-blur-md border border-white/25 bg-gradient-to-r ${badge.bg} transition-all duration-300 hover:scale-110 cursor-pointer animate-[float_5s_ease-in-out_infinite]`}
                >
                  <span className="flex items-center gap-1.5">
                    <Sparkles className="w-3 h-3 text-white/90" />
                    {badge.name}
                  </span>
                </div>
              ))}

              {/* Open to Opportunities Status Card */}
              <div
                id="hero-status-card"
                className={`absolute -bottom-6 left-1/2 -translate-x-1/2 z-20 px-4 py-2 rounded-full border shadow-xl backdrop-blur-xl flex items-center gap-2.5 whitespace-nowrap transition-all duration-300 hover:scale-105 ${
                  isDark
                    ? "bg-slate-900/90 border-emerald-500/40 text-slate-200"
                    : "bg-white/95 border-emerald-400 text-slate-800"
                }`}
              >
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
                </span>
                <span className="text-xs font-bold tracking-wide text-emerald-500">
                  Open to Opportunities
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* HERO STATISTICS BAR */}
        <div
          ref={statsRef}
          id="hero-statistics-bar"
          className="mt-16 sm:mt-24 pt-8"
        >
          <div
            className={`grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 p-6 sm:p-8 rounded-3xl border backdrop-blur-xl transition-all duration-300 ${
              isDark
                ? "bg-slate-900/50 border-slate-800/80 shadow-xl shadow-black/20"
                : "bg-white/80 border-slate-200/90 shadow-xl shadow-slate-200/50"
            }`}
          >
            {heroStats.map((stat, idx) => (
              <div
                key={stat.label}
                id={`hero-stat-card-${idx}`}
                className="flex flex-col items-center text-center p-3 rounded-2xl hover:bg-blue-500/5 transition-colors"
              >
                <div className="flex items-baseline gap-0.5">
                  <span className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight bg-gradient-to-r from-blue-500 via-indigo-400 to-violet-500 bg-clip-text text-transparent">
                    {hasAnimated ? counts[idx] : stat.value}
                  </span>
                  {stat.suffix && (
                    <span className="text-2xl sm:text-3xl font-extrabold text-blue-500">
                      {stat.suffix}
                    </span>
                  )}
                </div>
                <span
                  className={`mt-1 font-bold text-sm sm:text-base ${
                    isDark ? "text-slate-200" : "text-slate-800"
                  }`}
                >
                  {stat.label}
                </span>
                <span className="text-xs text-slate-400 font-medium">{stat.sub}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
