import React from "react";
import { Globe, Brain, BarChart3, Sparkles, Code2, Database, Laptop } from "lucide-react";
import { aboutCards } from "../data/portfolioData";
import { TiltCard } from "./TiltCard";

interface AboutProps {
  isDark: boolean;
}

const getIcon = (name: string) => {
  switch (name) {
    case "Globe":
      return <Globe className="w-8 h-8 text-blue-400" />;
    case "Brain":
      return <Brain className="w-8 h-8 text-violet-400" />;
    case "BarChart3":
      return <BarChart3 className="w-8 h-8 text-cyan-400" />;
    default:
      return <Sparkles className="w-8 h-8 text-indigo-400" />;
  }
};

export const About: React.FC<AboutProps> = ({ isDark }) => {
  return (
    <section id="about" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest text-blue-500 bg-blue-500/10 border border-blue-500/20 mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Discover My Background</span>
          </div>

          <h2
            id="about-heading"
            className={`text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight mb-6 ${
              isDark ? "text-white" : "text-slate-900"
            }`}
          >
            About{" "}
            <span className="bg-gradient-to-r from-blue-500 via-indigo-400 to-violet-500 bg-clip-text text-transparent">
              Me
            </span>
          </h2>

          <p
            id="about-content-text"
            className={`text-base sm:text-lg leading-relaxed ${
              isDark ? "text-slate-300" : "text-slate-600"
            }`}
          >
            I am an MCA student at Holy Cross College (Autonomous), Trichy, with a strong interest in{" "}
            <strong className={isDark ? "text-blue-400 font-semibold" : "text-blue-700 font-semibold"}>
              web development
            </strong>
            ,{" "}
            <strong className={isDark ? "text-violet-400 font-semibold" : "text-violet-700 font-semibold"}>
              artificial intelligence
            </strong>
            ,{" "}
            <strong className={isDark ? "text-cyan-400 font-semibold" : "text-cyan-700 font-semibold"}>
              data analytics
            </strong>{" "}
            and{" "}
            <strong className={isDark ? "text-indigo-400 font-semibold" : "text-indigo-700 font-semibold"}>
              data visualization
            </strong>
            . I enjoy developing practical digital solutions and exploring modern technologies to solve real-world
            problems.
          </p>
        </div>

        {/* 3 Interactive Glass Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {aboutCards.map((card) => (
            <TiltCard
              key={card.number}
              id={`about-card-${card.number}`}
              maxTilt={10}
              scale={1.03}
              glowColor={card.glow}
              className="h-full"
            >
              <div
                className={`h-full p-8 rounded-3xl border transition-all duration-300 relative flex flex-col justify-between overflow-hidden group ${
                  isDark
                    ? "bg-slate-900/60 border-slate-800 hover:border-slate-700 backdrop-blur-xl shadow-xl shadow-black/20"
                    : "bg-white/80 border-slate-200 hover:border-blue-300 backdrop-blur-xl shadow-xl shadow-slate-200/50"
                }`}
              >
                {/* Ambient Card Background Glow */}
                <div
                  className={`absolute -top-12 -right-12 w-36 h-36 bg-gradient-to-br ${card.color} rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500 pointer-events-none`}
                />

                {/* Top: Number Badge & Icon */}
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <div
                      className={`w-16 h-16 rounded-2xl flex items-center justify-center border transition-all duration-300 group-hover:scale-110 shadow-lg ${
                        isDark
                          ? "bg-slate-800/80 border-slate-700 shadow-black/40"
                          : "bg-blue-50/80 border-blue-100 shadow-blue-100/50"
                      }`}
                    >
                      {getIcon(card.icon)}
                    </div>

                    <span
                      className={`text-3xl font-black font-mono tracking-tighter opacity-40 group-hover:opacity-100 group-hover:text-blue-500 transition-all ${
                        isDark ? "text-slate-600" : "text-slate-300"
                      }`}
                    >
                      {card.number}
                    </span>
                  </div>

                  {/* Title */}
                  <h3
                    className={`text-xl font-bold tracking-tight mb-3 ${
                      isDark ? "text-white group-hover:text-blue-300" : "text-slate-900 group-hover:text-blue-600"
                    } transition-colors`}
                  >
                    {card.title}
                  </h3>

                  {/* Description */}
                  <p
                    className={`text-sm leading-relaxed ${
                      isDark ? "text-slate-400" : "text-slate-600"
                    }`}
                  >
                    {card.description}
                  </p>
                </div>

                {/* Bottom decorative subtle indicator line */}
                <div className="mt-8 pt-4 border-t border-slate-500/10 flex items-center justify-between text-xs font-semibold text-blue-500">
                  <span>Explore Expertise</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            </TiltCard>
          ))}
        </div>

      </div>
    </section>
  );
};
