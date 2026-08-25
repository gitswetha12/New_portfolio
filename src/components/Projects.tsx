import React, { useState } from "react";
import {
  Code,
  Calendar,
  ExternalLink,
  Layers,
  Sparkles,
  ArrowRight,
  X,
  CheckCircle,
  Tag,
  Lightbulb,
} from "lucide-react";
import { projectItems } from "../data/portfolioData";
import { ProjectItem } from "../types";
import { TiltCard } from "./TiltCard";

interface ProjectsProps {
  isDark: boolean;
}

export const Projects: React.FC<ProjectsProps> = ({ isDark }) => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [selectedFilter, setSelectedFilter] = useState<string>("all");

  const filteredProjects =
    selectedFilter === "all"
      ? projectItems
      : selectedFilter === "2026"
      ? projectItems.filter((p) => p.year === "2026")
      : projectItems.filter((p) => p.year === "2025");

  return (
    <section id="projects" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest text-blue-500 bg-blue-500/10 border border-blue-500/20 mb-4">
            <Code className="w-3.5 h-3.5" />
            <span>Featured Innovations</span>
          </div>

          <h2
            id="projects-heading"
            className={`text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight mb-4 ${
              isDark ? "text-white" : "text-slate-900"
            }`}
          >
            Project{" "}
            <span className="bg-gradient-to-r from-blue-500 via-indigo-400 to-violet-500 bg-clip-text text-transparent">
              Showcase
            </span>
          </h2>
          <p className={`text-base ${isDark ? "text-slate-400" : "text-slate-600"}`}>
            Practical applications spanning institutional portals, grievance management, e-commerce, AI assistants, and centralized edtech platforms.
          </p>

          {/* Filter tabs */}
          <div className="flex items-center gap-2 mt-8">
            {[
              { id: "all", label: "All Projects" },
              { id: "2026", label: "2026 Deliverables" },
              { id: "2025", label: "2025 Projects" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedFilter(tab.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  selectedFilter === tab.id
                    ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md shadow-blue-500/30"
                    : isDark
                    ? "bg-slate-800/80 text-slate-300 hover:bg-slate-700"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* 6 Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredProjects.map((project) => (
            <TiltCard
              key={project.id}
              id={`project-card-${project.id}`}
              maxTilt={10}
              scale={1.03}
              glowColor="rgba(79, 70, 229, 0.35)"
              onClick={() => setSelectedProject(project)}
              className="h-full"
            >
              <div
                className={`h-full p-6 sm:p-7 rounded-3xl border transition-all duration-300 relative flex flex-col justify-between group cursor-pointer ${
                  isDark
                    ? "bg-slate-900/70 border-slate-800 hover:border-blue-500/60 shadow-xl backdrop-blur-xl"
                    : "bg-white/90 border-slate-200 hover:border-blue-300 shadow-xl shadow-slate-200/50"
                }`}
              >
                <div>
                  {/* Top Bar: Number and Year */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-black font-mono text-blue-500 opacity-80 group-hover:opacity-100 transition-opacity">
                      {project.number}
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs font-bold px-2.5 py-1 rounded-lg bg-blue-500/10 text-blue-400 border border-blue-500/20">
                      <Calendar className="w-3 h-3" />
                      {project.year}
                    </span>
                  </div>

                  {/* Title */}
                  <h3
                    className={`text-xl font-bold tracking-tight mb-2 group-hover:text-blue-400 transition-colors ${
                      isDark ? "text-white" : "text-slate-900"
                    }`}
                  >
                    {project.title}
                  </h3>

                  {/* Category Pill */}
                  <span className="text-[11px] font-bold text-indigo-400 uppercase tracking-wider block mb-3">
                    {project.category}
                  </span>

                  {/* Description */}
                  <p
                    className={`text-xs sm:text-sm leading-relaxed mb-6 ${
                      isDark ? "text-slate-300" : "text-slate-600"
                    }`}
                  >
                    {project.description}
                  </p>
                </div>

                <div>
                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.technologies.length > 0 ? (
                      project.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className={`px-2.5 py-0.5 rounded-md text-[11px] font-semibold border ${
                            isDark
                              ? "bg-slate-800/90 border-slate-700 text-slate-300"
                              : "bg-slate-100 border-slate-200 text-slate-700"
                          }`}
                        >
                          {tech}
                        </span>
                      ))
                    ) : (
                      <span className="text-[11px] text-slate-400 italic">
                        Technology details available on request
                      </span>
                    )}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-0.5 rounded-md text-[11px] font-bold bg-blue-500/10 text-blue-400">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>

                  {/* View Details CTA */}
                  <div className="pt-4 border-t border-slate-800/40 flex items-center justify-between text-xs font-bold text-blue-500 group-hover:text-blue-400">
                    <span>View Project Details</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                  </div>
                </div>
              </div>
            </TiltCard>
          ))}
        </div>

        {/* Project Detail Modal */}
        {selectedProject && (
          <div
            id="project-detail-modal"
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn"
            onClick={() => setSelectedProject(null)}
          >
            <div
              className={`w-full max-w-3xl rounded-3xl border p-6 sm:p-8 relative shadow-2xl transition-all max-h-[90vh] overflow-y-auto ${
                isDark
                  ? "bg-slate-900 border-slate-700 text-white"
                  : "bg-white border-slate-200 text-slate-900"
              }`}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                id="project-modal-close-btn"
                onClick={() => setSelectedProject(null)}
                className={`absolute top-6 right-6 p-2 rounded-full border transition-colors cursor-pointer ${
                  isDark
                    ? "bg-slate-800 border-slate-700 text-slate-300 hover:text-white"
                    : "bg-slate-100 border-slate-200 text-slate-700 hover:text-slate-900"
                }`}
                aria-label="Close Project Modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-6">
                {/* Header */}
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-blue-500 text-white">
                      Project #{selectedProject.number}
                    </span>
                    <span className="text-xs font-bold text-slate-400">
                      • {selectedProject.year} • {selectedProject.category}
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                    {selectedProject.title}
                  </h3>
                </div>

                {/* Overview */}
                <div
                  className={`p-4 rounded-2xl border ${
                    isDark ? "bg-slate-800/40 border-slate-700/60" : "bg-slate-50 border-slate-200"
                  }`}
                >
                  <h4 className="text-xs font-bold uppercase tracking-wider text-blue-400 mb-1.5 flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5" />
                    Project Overview:
                  </h4>
                  <p
                    className={`text-sm leading-relaxed ${
                      isDark ? "text-slate-200" : "text-slate-700"
                    }`}
                  >
                    {selectedProject.overview}
                  </p>
                </div>

                {/* Objective */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-blue-400 mb-1.5 flex items-center gap-1.5">
                    <Lightbulb className="w-3.5 h-3.5 text-amber-400" />
                    Objective:
                  </h4>
                  <p
                    className={`text-sm leading-relaxed ${
                      isDark ? "text-slate-300" : "text-slate-600"
                    }`}
                  >
                    {selectedProject.objective}
                  </p>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-blue-400 mb-2 flex items-center gap-1.5">
                    <Tag className="w-3.5 h-3.5" />
                    Technologies Utilized:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.length > 0 ? (
                      selectedProject.technologies.map((t) => (
                        <span
                          key={t}
                          className="px-3 py-1 rounded-lg text-xs font-bold bg-blue-600/15 border border-blue-500/30 text-blue-400"
                        >
                          {t}
                        </span>
                      ))
                    ) : (
                      <span className="text-xs text-slate-400 italic">
                        Technology details available on request.
                      </span>
                    )}
                  </div>
                </div>

                {/* Key Features */}
                {selectedProject.features && selectedProject.features.length > 0 && (
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-blue-400 mb-2 flex items-center gap-1.5">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                      Key System Features:
                    </h4>
                    <ul className="space-y-2">
                      {selectedProject.features.map((feat, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                          <span className={isDark ? "text-slate-200" : "text-slate-700"}>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Contribution */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-blue-400 mb-1.5">
                    My Contribution:
                  </h4>
                  <p
                    className={`text-sm leading-relaxed p-3 rounded-xl border ${
                      isDark
                        ? "bg-slate-800/30 border-slate-700/50 text-slate-300"
                        : "bg-blue-50/50 border-blue-100 text-slate-700"
                    }`}
                  >
                    {selectedProject.contribution}
                  </p>
                </div>

                {/* Footer buttons */}
                <div className="pt-4 border-t border-slate-700/40 flex justify-end">
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="px-6 py-2.5 rounded-xl text-xs font-bold bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-500/25 transition-all cursor-pointer"
                  >
                    Close Project
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
