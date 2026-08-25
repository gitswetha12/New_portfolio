import React from "react";
import { Users, Calendar, Building, CheckCircle, Sparkles } from "lucide-react";
import { workshopData } from "../data/portfolioData";
import { TiltCard } from "./TiltCard";

interface WorkshopProps {
  isDark: boolean;
}

export const Workshop: React.FC<WorkshopProps> = ({ isDark }) => {
  return (
    <section id="workshop" className="py-16 lg:py-20 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest text-blue-500 bg-blue-500/10 border border-blue-500/20 mb-3">
            <Users className="w-3.5 h-3.5" />
            <span>Academic Symposiums</span>
          </div>

          <h2
            id="workshop-heading"
            className={`text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight mb-2 ${
              isDark ? "text-white" : "text-slate-900"
            }`}
          >
            Technical{" "}
            <span className="bg-gradient-to-r from-blue-500 via-indigo-400 to-violet-500 bg-clip-text text-transparent">
              Workshop
            </span>
          </h2>
        </div>

        {/* Workshop Event Card */}
        <TiltCard
          id="workshop-card"
          maxTilt={6}
          scale={1.01}
          glowColor="rgba(99, 102, 241, 0.3)"
        >
          <div
            className={`p-6 sm:p-8 rounded-3xl border transition-all duration-300 relative overflow-hidden ${
              isDark
                ? "bg-slate-900/70 border-slate-800 shadow-2xl backdrop-blur-xl"
                : "bg-white/90 border-slate-200 shadow-xl shadow-slate-200/50"
            }`}
          >
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
              <div>
                <span className="px-3 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider bg-blue-500/10 text-blue-400 border border-blue-500/20 mb-2 inline-block">
                  National Level Technical Event
                </span>
                <h3 className={`text-xl sm:text-2xl font-extrabold ${isDark ? "text-white" : "text-slate-900"}`}>
                  {workshopData.title}
                </h3>
              </div>

              <div className="flex items-center gap-3">
                <div className="px-3 py-1.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-mono font-bold text-xs shadow-md">
                  {workshopData.year}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 text-sm font-semibold text-blue-500 mb-4">
              <Building className="w-4 h-4" />
              <span>{workshopData.institution}</span>
            </div>

            <p className={`text-sm leading-relaxed mb-6 ${isDark ? "text-slate-300" : "text-slate-600"}`}>
              {workshopData.description}
            </p>

            <div className="pt-4 border-t border-slate-700/40">
              <h4 className="text-xs font-bold uppercase tracking-wider text-blue-400 mb-3">
                Key Topics & Technical Immersion:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {workshopData.topics.map((topic, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-400 mt-0.5 flex-shrink-0" />
                    <span className={isDark ? "text-slate-200" : "text-slate-700"}>{topic}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </TiltCard>

      </div>
    </section>
  );
};
