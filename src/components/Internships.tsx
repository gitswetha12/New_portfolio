import React, { useState } from "react";
import {
  Briefcase,
  Building,
  Calendar,
  Sparkles,
  ArrowRight,
  X,
  CheckCircle2,
  Layers,
} from "lucide-react";
import { internshipItems } from "../data/portfolioData";
import { InternshipItem } from "../types";
import { TiltCard } from "./TiltCard";

interface InternshipsProps {
  isDark: boolean;
}

export const Internships: React.FC<InternshipsProps> = ({ isDark }) => {
  const [selectedInternship, setSelectedInternship] = useState<InternshipItem | null>(null);

  return (
    <section id="internships" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest text-blue-500 bg-blue-500/10 border border-blue-500/20 mb-4">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Practical Experience</span>
          </div>

          <h2
            id="internships-heading"
            className={`text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight mb-4 ${
              isDark ? "text-white" : "text-slate-900"
            }`}
          >
            Professional{" "}
            <span className="bg-gradient-to-r from-blue-500 via-indigo-400 to-violet-500 bg-clip-text text-transparent">
              Internships
            </span>
          </h2>
          <p className={`text-base ${isDark ? "text-slate-400" : "text-slate-600"}`}>
            Hands-on industry training and experiential tenures across Python programming, UI/UX, sensor tech, and institutional web engineering.
          </p>
        </div>

        {/* 4 Internship Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {internshipItems.map((item, idx) => (
            <TiltCard
              key={item.id}
              id={`internship-card-${item.id}`}
              maxTilt={10}
              scale={1.03}
              glowColor="rgba(59, 130, 246, 0.3)"
              onClick={() => setSelectedInternship(item)}
              className="h-full"
            >
              <div
                className={`h-full p-6 rounded-3xl border transition-all duration-300 relative flex flex-col justify-between group cursor-pointer ${
                  isDark
                    ? "bg-slate-900/70 border-slate-800 hover:border-blue-500/50 shadow-xl backdrop-blur-xl"
                    : "bg-white/90 border-slate-200 hover:border-blue-300 shadow-lg shadow-slate-200/50"
                }`}
              >
                <div>
                  {/* Top: Serial Tag & Role */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="w-8 h-8 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-500 font-extrabold text-xs flex items-center justify-center">
                      0{idx + 1}
                    </span>
                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-slate-400">
                      <Calendar className="w-3 h-3 text-blue-400" />
                      {item.period}
                    </span>
                  </div>

                  <h3
                    className={`text-lg font-bold tracking-tight mb-2 group-hover:text-blue-400 transition-colors ${
                      isDark ? "text-white" : "text-slate-900"
                    }`}
                  >
                    {item.title}
                  </h3>

                  {/* Organization */}
                  <div className="flex items-center gap-2 text-xs font-semibold text-blue-500 mb-3">
                    <Building className="w-3.5 h-3.5 flex-shrink-0" />
                    <span className="line-clamp-1">{item.organization}</span>
                  </div>

                  <p
                    className={`text-xs leading-relaxed line-clamp-3 mb-4 ${
                      isDark ? "text-slate-300" : "text-slate-600"
                    }`}
                  >
                    {item.description}
                  </p>
                </div>

                {/* Bottom CTA trigger */}
                <div className="pt-4 border-t border-slate-800/40 flex items-center justify-between text-xs font-bold text-blue-400 group-hover:text-blue-300">
                  <span>View Details</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </TiltCard>
          ))}
        </div>

        {/* Internship Detail Modal */}
        {selectedInternship && (
          <div
            id="internship-detail-modal"
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-fadeIn"
            onClick={() => setSelectedInternship(null)}
          >
            <div
              className={`w-full max-w-2xl rounded-3xl border p-6 sm:p-8 relative shadow-2xl transition-all max-h-[90vh] overflow-y-auto ${
                isDark
                  ? "bg-slate-900 border-slate-700 text-white"
                  : "bg-white border-slate-200 text-slate-900"
              }`}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                id="internship-modal-close-btn"
                onClick={() => setSelectedInternship(null)}
                className={`absolute top-6 right-6 p-2 rounded-full border transition-colors cursor-pointer ${
                  isDark
                    ? "bg-slate-800 border-slate-700 text-slate-300 hover:text-white"
                    : "bg-slate-100 border-slate-200 text-slate-700 hover:text-slate-900"
                }`}
                aria-label="Close Modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Content */}
              <div className="space-y-6">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-blue-500 bg-blue-500/10 border border-blue-500/20 mb-2">
                    <Briefcase className="w-3.5 h-3.5" />
                    <span>{selectedInternship.role}</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                    {selectedInternship.title}
                  </h3>
                </div>

                <div
                  className={`grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 rounded-2xl border ${
                    isDark
                      ? "bg-slate-800/50 border-slate-700/60"
                      : "bg-slate-50 border-slate-200"
                  }`}
                >
                  <div className="flex items-center gap-2 text-sm font-semibold">
                    <Building className="w-4 h-4 text-blue-500" />
                    <span>{selectedInternship.organization}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-400 font-medium">
                    <Calendar className="w-4 h-4 text-indigo-400" />
                    <span>{selectedInternship.period}</span>
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-blue-400 mb-2">
                    Description & Scope:
                  </h4>
                  <p
                    className={`text-sm leading-relaxed ${
                      isDark ? "text-slate-300" : "text-slate-600"
                    }`}
                  >
                    {selectedInternship.description}
                  </p>
                </div>

                {selectedInternship.skillsLearned && (
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-blue-400 mb-3">
                      Skills & Competencies Learned:
                    </h4>
                    <ul className="space-y-2">
                      {selectedInternship.skillsLearned.map((skill, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2.5 text-sm"
                        >
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                          <span className={isDark ? "text-slate-200" : "text-slate-700"}>
                            {skill}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="pt-4 border-t border-slate-700/40 flex justify-end">
                  <button
                    onClick={() => setSelectedInternship(null)}
                    className="px-6 py-2.5 rounded-xl text-xs font-bold bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-500/25 transition-all cursor-pointer"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
