import React, { useState } from "react";
import {
  GraduationCap,
  Calendar,
  Building2,
  Award,
  ChevronDown,
  ChevronUp,
  CheckCircle,
  Sparkles,
} from "lucide-react";
import { educationData } from "../data/portfolioData";
import { TiltCard } from "./TiltCard";

interface EducationProps {
  isDark: boolean;
}

export const Education: React.FC<EducationProps> = ({ isDark }) => {
  // Allow expanding/collapsing cards
  const [expandedId, setExpandedId] = useState<string | null>("pg-mca");

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="education" className="py-20 lg:py-28 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest text-blue-500 bg-blue-500/10 border border-blue-500/20 mb-4">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Qualifications</span>
          </div>

          <h2
            id="education-heading"
            className={`text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight mb-4 ${
              isDark ? "text-white" : "text-slate-900"
            }`}
          >
            Education{" "}
            <span className="bg-gradient-to-r from-blue-500 via-indigo-400 to-violet-500 bg-clip-text text-transparent">
              Timeline
            </span>
          </h2>
          <p className={`text-base ${isDark ? "text-slate-400" : "text-slate-600"}`}>
            Click any milestone card to expand academic highlights and accomplishments.
          </p>
        </div>

        {/* Vertical Interactive Timeline */}
        <div className="relative">
          {/* Central Connecting Timeline Line */}
          <div className="hidden sm:block absolute left-1/2 -translate-x-1/2 top-8 bottom-8 w-1 bg-gradient-to-b from-blue-500 via-indigo-500 to-violet-500/30 rounded-full" />
          <div className="sm:hidden absolute left-4 top-8 bottom-8 w-1 bg-gradient-to-b from-blue-500 via-indigo-500 to-violet-500/30 rounded-full" />

          <div className="space-y-8 sm:space-y-12">
            {educationData.map((item, index) => {
              const isEven = index % 2 === 0;
              const isExpanded = expandedId === item.id;

              return (
                <div
                  key={item.id}
                  id={`education-item-${item.id}`}
                  className={`relative flex flex-col sm:flex-row items-center sm:items-start ${
                    isEven ? "sm:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline Central Marker Node */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 top-6 z-20 flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 border-4 border-slate-950 text-white shadow-lg shadow-blue-500/50">
                    <Sparkles className="w-3.5 h-3.5" />
                  </div>

                  {/* Card Container */}
                  <div
                    className={`w-full sm:w-[calc(50%-2.5rem)] pl-12 sm:pl-0 ${
                      isEven ? "sm:pr-6 sm:text-right" : "sm:pl-6 sm:text-left"
                    }`}
                  >
                    <TiltCard
                      maxTilt={6}
                      scale={1.01}
                      glowColor="rgba(59, 130, 246, 0.25)"
                      onClick={() => toggleExpand(item.id)}
                    >
                      <div
                        className={`p-6 rounded-3xl border transition-all duration-300 relative text-left ${
                          isDark
                            ? "bg-slate-900/70 border-slate-800 hover:border-blue-500/50 shadow-xl backdrop-blur-xl"
                            : "bg-white/90 border-slate-200 hover:border-blue-300 shadow-xl shadow-slate-200/50"
                        } ${isExpanded ? "ring-2 ring-blue-500/40" : ""}`}
                      >
                        {/* Header Row: Degree & Score Badge */}
                        <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                          <div className="flex-1">
                            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-500 uppercase tracking-wider mb-1">
                              <Calendar className="w-3.5 h-3.5" />
                              {item.period}
                            </span>
                            <h3
                              className={`text-lg sm:text-xl font-bold ${
                                isDark ? "text-white" : "text-slate-900"
                              }`}
                            >
                              {item.degree}
                            </h3>
                          </div>

                          {/* Score Pill */}
                          <div className="px-3 py-1 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-extrabold text-xs sm:text-sm shadow-md shadow-blue-500/25 whitespace-nowrap">
                            {item.scoreLabel}: {item.score}
                          </div>
                        </div>

                        {/* Institution */}
                        <div className="flex items-center gap-2 text-sm text-slate-400 font-medium mb-3">
                          <Building2 className="w-4 h-4 text-blue-400 flex-shrink-0" />
                          <span>{item.institution}</span>
                        </div>

                        {/* Brief Summary */}
                        <p
                          className={`text-xs sm:text-sm leading-relaxed ${
                            isDark ? "text-slate-300" : "text-slate-600"
                          }`}
                        >
                          {item.description}
                        </p>

                        {/* Expandable Key Highlights */}
                        {isExpanded && item.highlights && (
                          <div className="mt-4 pt-4 border-t border-slate-700/50 space-y-2 animate-fadeIn">
                            <h4 className="text-xs font-bold uppercase tracking-wider text-blue-400">
                              Key Highlights & Activities:
                            </h4>
                            <ul className="space-y-1.5">
                              {item.highlights.map((h, i) => (
                                <li
                                  key={i}
                                  className="flex items-start gap-2 text-xs text-slate-300"
                                >
                                  <CheckCircle className="w-3.5 h-3.5 text-emerald-400 mt-0.5 flex-shrink-0" />
                                  <span>{h}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {/* Click to expand toggle indicator */}
                        <div className="mt-4 pt-2 flex items-center justify-between text-xs text-slate-400 hover:text-blue-400 transition-colors">
                          <span className="font-semibold">
                            {isExpanded ? "Collapse details" : "Click to view details"}
                          </span>
                          {isExpanded ? (
                            <ChevronUp className="w-4 h-4 text-blue-400" />
                          ) : (
                            <ChevronDown className="w-4 h-4 text-blue-400" />
                          )}
                        </div>
                      </div>
                    </TiltCard>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
