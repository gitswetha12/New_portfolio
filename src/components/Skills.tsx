import React, { useState } from "react";
import {
  Code2,
  FileCode,
  Database,
  Server,
  Bot,
  Sparkles,
  Cpu,
  GraduationCap,
  LineChart,
  Sheet,
  FileText,
  Presentation,
  CheckCircle2,
  Terminal,
} from "lucide-react";
import { skillCategories } from "../data/portfolioData";
import { TiltCard } from "./TiltCard";

interface SkillsProps {
  isDark: boolean;
}

const renderSkillIcon = (iconName: string, category: string) => {
  const iconProps = { className: "w-6 h-6 transition-transform duration-300 group-hover:scale-125" };
  switch (iconName) {
    case "Code2":
      return <Code2 {...iconProps} className={`${iconProps.className} text-orange-400`} />;
    case "FileCode":
      return <FileCode {...iconProps} className={`${iconProps.className} text-blue-400`} />;
    case "Database":
      return <Database {...iconProps} className={`${iconProps.className} text-emerald-400`} />;
    case "Server":
      return <Server {...iconProps} className={`${iconProps.className} text-purple-400`} />;
    case "Bot":
      return <Bot {...iconProps} className={`${iconProps.className} text-emerald-400`} />;
    case "Sparkles":
      return <Sparkles {...iconProps} className={`${iconProps.className} text-amber-400`} />;
    case "Cpu":
      return <Cpu {...iconProps} className={`${iconProps.className} text-sky-400`} />;
    case "GraduationCap":
      return <GraduationCap {...iconProps} className={`${iconProps.className} text-pink-400`} />;
    case "LineChart":
      return <LineChart {...iconProps} className={`${iconProps.className} text-amber-500`} />;
    case "Sheet":
      return <Sheet {...iconProps} className={`${iconProps.className} text-green-500`} />;
    case "FileText":
      return <FileText {...iconProps} className={`${iconProps.className} text-blue-500`} />;
    case "Presentation":
      return <Presentation {...iconProps} className={`${iconProps.className} text-orange-500`} />;
    default:
      return <Sparkles {...iconProps} className={`${iconProps.className} text-indigo-400`} />;
  }
};

export const Skills: React.FC<SkillsProps> = ({ isDark }) => {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filteredCategories =
    activeCategory === "all"
      ? skillCategories
      : skillCategories.filter((c) => c.id === activeCategory);

  return (
    <section id="skills" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest text-blue-500 bg-blue-500/10 border border-blue-500/20 mb-4">
            <Terminal className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>

          <h2
            id="skills-heading"
            className={`text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight mb-4 ${
              isDark ? "text-white" : "text-slate-900"
            }`}
          >
            Skills &{" "}
            <span className="bg-gradient-to-r from-blue-500 via-indigo-400 to-violet-500 bg-clip-text text-transparent">
              Proficiencies
            </span>
          </h2>
          <p className={`text-base ${isDark ? "text-slate-400" : "text-slate-600"}`}>
            Comprehensive toolsets across programming, generative AI tools, and enterprise analytics.
          </p>

          {/* Category Filter Chips */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            <button
              onClick={() => setActiveCategory("all")}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeCategory === "all"
                  ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md shadow-blue-500/30"
                  : isDark
                  ? "bg-slate-800/80 text-slate-300 hover:bg-slate-700"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              All Categories
            </button>
            {skillCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeCategory === cat.id
                    ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md shadow-blue-500/30"
                    : isDark
                    ? "bg-slate-800/80 text-slate-300 hover:bg-slate-700"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                {cat.title}
              </button>
            ))}
          </div>
        </div>

        {/* Categories and Skill Cards */}
        <div className="space-y-12">
          {filteredCategories.map((category) => (
            <div key={category.id} className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-2.5 h-6 rounded-full bg-gradient-to-b from-blue-500 to-violet-500" />
                <div>
                  <h3
                    className={`text-xl font-bold ${
                      isDark ? "text-white" : "text-slate-900"
                    }`}
                  >
                    {category.title}
                  </h3>
                  <p className="text-xs text-slate-400">{category.description}</p>
                </div>
              </div>

              {/* Grid of Skill Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                {category.skills.map((skill) => (
                  <TiltCard
                    key={skill.name}
                    id={`skill-card-${skill.name.toLowerCase().replace(/\s+/g, "-")}`}
                    maxTilt={12}
                    scale={1.04}
                    glowColor="rgba(59, 130, 246, 0.3)"
                  >
                    <div
                      className={`h-full p-5 rounded-2xl border transition-all duration-300 relative flex flex-col justify-between group overflow-hidden ${
                        isDark
                          ? "bg-slate-900/60 border-slate-800/90 hover:border-blue-500/60 shadow-lg backdrop-blur-xl"
                          : "bg-white/85 border-slate-200 hover:border-blue-300 shadow-md shadow-slate-200/40 backdrop-blur-xl"
                      }`}
                    >
                      {/* Ambient hover light */}
                      <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/10 rounded-full blur-xl group-hover:scale-150 transition-transform duration-300 pointer-events-none" />

                      {/* Header: Icon & Skill Name */}
                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <div
                            className={`w-12 h-12 rounded-xl flex items-center justify-center border transition-all ${
                              isDark
                                ? "bg-slate-800/80 border-slate-700 shadow-inner"
                                : "bg-slate-50 border-slate-100 shadow-sm"
                            }`}
                          >
                            {renderSkillIcon(skill.iconName, skill.category)}
                          </div>
                          <span className="px-2 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider bg-blue-500/10 text-blue-400 border border-blue-500/20">
                            Verified
                          </span>
                        </div>

                        <h4
                          className={`text-base font-bold tracking-tight mb-1 group-hover:text-blue-400 transition-colors ${
                            isDark ? "text-white" : "text-slate-900"
                          }`}
                        >
                          {skill.name}
                        </h4>

                        <p
                          className={`text-xs leading-relaxed ${
                            isDark ? "text-slate-400" : "text-slate-600"
                          }`}
                        >
                          {skill.description}
                        </p>
                      </div>

                      {/* Interactive Visualizer Bar (Fluid animation on hover) */}
                      <div className="mt-4 pt-3 border-t border-slate-800/40">
                        <div className="flex items-center justify-between text-[11px] font-semibold text-slate-400 mb-1.5">
                          <span className="flex items-center gap-1 text-blue-400">
                            <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                            Competence
                          </span>
                          <span className="text-slate-500 text-[10px]">Active Tech</span>
                        </div>
                        {/* Smooth active glow bar */}
                        <div className="w-full h-1.5 rounded-full bg-slate-800 overflow-hidden relative">
                          <div className="h-full rounded-full bg-gradient-to-r from-blue-500 via-indigo-400 to-violet-500 w-full group-hover:animate-pulse" />
                        </div>
                      </div>
                    </div>
                  </TiltCard>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
