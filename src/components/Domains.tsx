import React from "react";
import {
  Layout,
  PieChart,
  BrainCircuit,
  BarChart4,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";
import { domainItems } from "../data/portfolioData";
import { TiltCard } from "./TiltCard";

interface DomainsProps {
  isDark: boolean;
}

const renderDomainIcon = (iconName: string) => {
  const iconProps = { className: "w-8 h-8 text-white" };
  switch (iconName) {
    case "Layout":
      return <Layout {...iconProps} />;
    case "PieChart":
      return <PieChart {...iconProps} />;
    case "BrainCircuit":
      return <BrainCircuit {...iconProps} />;
    case "BarChart4":
      return <BarChart4 {...iconProps} />;
    default:
      return <Sparkles {...iconProps} />;
  }
};

export const Domains: React.FC<DomainsProps> = ({ isDark }) => {
  return (
    <section id="domains" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest text-blue-500 bg-blue-500/10 border border-blue-500/20 mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Specialized Focus</span>
          </div>

          <h2
            id="domains-heading"
            className={`text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight mb-4 ${
              isDark ? "text-white" : "text-slate-900"
            }`}
          >
            Core{" "}
            <span className="bg-gradient-to-r from-blue-500 via-indigo-400 to-violet-500 bg-clip-text text-transparent">
              Domains
            </span>
          </h2>
          <p className={`text-base ${isDark ? "text-slate-400" : "text-slate-600"}`}>
            Deep specialized focus areas intersecting modern engineering, data intelligence, and smart interfaces.
          </p>
        </div>

        {/* 4 Large Interactive 3D Domain Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {domainItems.map((domain) => (
            <TiltCard
              key={domain.id}
              id={`domain-card-${domain.id}`}
              maxTilt={8}
              scale={1.02}
              glowColor="rgba(79, 70, 229, 0.35)"
              className="h-full"
            >
              <div
                className={`h-full p-8 rounded-3xl border transition-all duration-300 relative flex flex-col justify-between overflow-hidden group ${
                  isDark
                    ? "bg-slate-900/70 border-slate-800 hover:border-slate-700 shadow-2xl backdrop-blur-xl"
                    : "bg-white/90 border-slate-200 hover:border-blue-300 shadow-xl shadow-slate-200/60 backdrop-blur-xl"
                }`}
              >
                {/* Subtle animated background gradient orb */}
                <div
                  className={`absolute -bottom-16 -right-16 w-56 h-56 bg-gradient-to-br ${domain.gradient} opacity-20 rounded-full blur-3xl group-hover:scale-150 group-hover:opacity-30 transition-all duration-500 pointer-events-none`}
                />

                <div>
                  {/* Top: Icon Badge & Arrow */}
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${domain.gradient} flex items-center justify-center shadow-lg shadow-indigo-500/25 group-hover:scale-110 transition-transform duration-300`}
                    >
                      {renderDomainIcon(domain.icon)}
                    </div>

                    <div
                      className={`w-10 h-10 rounded-xl border flex items-center justify-center transition-all duration-300 group-hover:bg-blue-500 group-hover:text-white group-hover:border-blue-500 ${
                        isDark
                          ? "bg-slate-800 border-slate-700 text-slate-400"
                          : "bg-slate-50 border-slate-200 text-slate-600"
                      }`}
                    >
                      <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <span className="text-xs font-bold uppercase tracking-widest text-blue-500 mb-1 block">
                    {domain.subtitle}
                  </span>
                  <h3
                    className={`text-2xl font-extrabold tracking-tight mb-3 ${
                      isDark ? "text-white" : "text-slate-900"
                    }`}
                  >
                    {domain.title}
                  </h3>

                  {/* Description */}
                  <p
                    className={`text-sm leading-relaxed mb-6 ${
                      isDark ? "text-slate-300" : "text-slate-600"
                    }`}
                  >
                    {domain.description}
                  </p>
                </div>

                {/* Bottom Tags */}
                <div className="pt-6 border-t border-slate-700/30">
                  <div className="flex flex-wrap gap-2">
                    {domain.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`px-3 py-1 rounded-lg text-xs font-semibold border ${
                          isDark
                            ? "bg-slate-800/80 border-slate-700/80 text-slate-300"
                            : "bg-slate-100 border-slate-200 text-slate-700"
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </TiltCard>
          ))}
        </div>

      </div>
    </section>
  );
};
