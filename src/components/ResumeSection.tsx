import React, { useState } from "react";
import {
  FileText,
  Download,
  Eye,
  Phone,
  Mail,
  Github,
  Linkedin,
  MapPin,
  Sparkles,
  CheckCircle,
  ExternalLink,
  Award,
  Briefcase,
  GraduationCap,
  Maximize2,
  Minimize2,
} from "lucide-react";
import {
  personalInfo,
  educationData,
  skillCategories,
  domainItems,
  internshipItems,
  projectItems,
  certificationItems,
  achievementItems,
  workshopData,
} from "../data/portfolioData";
import { generateResumePdf } from "../utils/pdfGenerator";
import confetti from "canvas-confetti";

interface ResumeSectionProps {
  isDark: boolean;
}

export const ResumeSection: React.FC<ResumeSectionProps> = ({ isDark }) => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const handleDownload = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.7 },
    });
    generateResumePdf();
  };

  return (
    <section id="resume" className="py-20 lg:py-28 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest text-blue-500 bg-blue-500/10 border border-blue-500/20 mb-4">
            <FileText className="w-3.5 h-3.5" />
            <span>Curriculum Vitae</span>
          </div>

          <h2
            id="resume-heading"
            className={`text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight mb-4 ${
              isDark ? "text-white" : "text-slate-900"
            }`}
          >
            Professional{" "}
            <span className="bg-gradient-to-r from-blue-500 via-indigo-400 to-violet-500 bg-clip-text text-transparent">
              Resume
            </span>
          </h2>
          <p className={`text-base ${isDark ? "text-slate-400" : "text-slate-600"}`}>
            Standardized, ATS-compliant Curriculum Vitae with full academic, project, and certification records.
          </p>

          {/* Action Buttons: [VIEW CV] and [DOWNLOAD CV] */}
          <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
            <button
              id="resume-btn-view-cv"
              onClick={() => setIsFullscreen(!isFullscreen)}
              className={`inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm border transition-all cursor-pointer ${
                isDark
                  ? "bg-slate-900 border-slate-700 text-slate-200 hover:bg-slate-800"
                  : "bg-white border-slate-300 text-slate-800 hover:bg-slate-50"
              }`}
            >
              {isFullscreen ? (
                <>
                  <Minimize2 className="w-4 h-4 text-blue-500" />
                  <span>COMPACT VIEW</span>
                </>
              ) : (
                <>
                  <Eye className="w-4 h-4 text-blue-500" />
                  <span>VIEW CV FULLSCREEN</span>
                </>
              )}
            </button>

            <button
              id="resume-btn-download-cv"
              onClick={handleDownload}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold text-sm bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 hover:from-blue-500 hover:to-indigo-500 text-white shadow-xl shadow-blue-500/25 hover:shadow-blue-500/40 hover:-translate-y-0.5 transition-all cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>DOWNLOAD CV (PDF)</span>
            </button>
          </div>
        </div>

        {/* Dynamic A4 Interactive Paper View */}
        <div
          id="a4-resume-preview-container"
          className={`mx-auto transition-all duration-300 ${
            isFullscreen ? "max-w-5xl" : "max-w-4xl"
          }`}
        >
          <div
            className={`p-6 sm:p-10 rounded-3xl border shadow-2xl relative transition-all ${
              isDark
                ? "bg-slate-950/95 border-slate-800 text-slate-200 shadow-blue-950/40"
                : "bg-white border-slate-200 text-slate-800 shadow-xl"
            }`}
          >
            {/* Top Navy Accent Header Bar */}
            <div className="rounded-2xl bg-gradient-to-r from-slate-950 via-slate-900 to-blue-950 text-white p-6 sm:p-8 mb-8 shadow-lg relative overflow-hidden flex flex-col sm:flex-row items-center sm:items-start justify-between gap-6">
              <div className="space-y-2 text-center sm:text-left">
                <span className="text-xs font-mono font-bold tracking-widest text-blue-400 uppercase">
                  Curriculum Vitae
                </span>
                <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                  {personalInfo.name}
                </h3>
                <p className="text-sm font-semibold text-blue-300">
                  {personalInfo.role}
                </p>

                {/* Contact List */}
                <div className="pt-2 flex flex-wrap items-center justify-center sm:justify-start gap-x-4 gap-y-1.5 text-xs text-slate-300">
                  <span className="flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-blue-400" />
                    +91 {personalInfo.phone}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-blue-400" />
                    {personalInfo.email}
                  </span>
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-blue-300 hover:underline"
                  >
                    <Github className="w-3.5 h-3.5" />
                    GitHub
                  </a>
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-blue-300 hover:underline"
                  >
                    <Linkedin className="w-3.5 h-3.5" />
                    LinkedIn
                  </a>
                </div>
              </div>

              {/* Candidate Monogram Badge */}
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 border-2 border-blue-400/50 shadow-xl flex flex-col items-center justify-center flex-shrink-0 text-white">
                <span className="font-black text-2xl sm:text-3xl tracking-tight">SJ</span>
                <span className="text-[9px] uppercase tracking-widest text-blue-200 font-bold -mt-0.5">Verified</span>
              </div>
            </div>

            {/* Resume Content Sections in Clean Grid */}
            <div className="space-y-8 text-xs sm:text-sm">
              
              {/* PROFILE SUMMARY */}
              <div>
                <h4 className="font-extrabold text-blue-600 uppercase tracking-wider text-xs border-b border-blue-500/30 pb-1 mb-2">
                  Profile Summary
                </h4>
                <p className="leading-relaxed opacity-90">
                  Motivated and detail-oriented Master of Computer Applications (MCA) student at Holy Cross College (Autonomous), Trichy, with strong foundations in Web Development, Artificial Intelligence, Data Analytics, and Database Systems. Proven record of academic excellence (8.61 UG CGPA, 8.25 PG CGPA), collegiate leadership as Student Council Member, and practical project engineering across educational, e-commerce, and conversational systems.
                </p>
              </div>

              {/* EDUCATION */}
              <div>
                <h4 className="font-extrabold text-blue-600 uppercase tracking-wider text-xs border-b border-blue-500/30 pb-1 mb-3">
                  Education
                </h4>
                <div className="space-y-3">
                  {educationData.map((edu) => (
                    <div key={edu.id} className="flex justify-between items-start">
                      <div>
                        <span className="font-bold block">{edu.degree}</span>
                        <span className="text-slate-400 text-xs">{edu.institution} ({edu.period})</span>
                      </div>
                      <span className="font-bold text-blue-500 whitespace-nowrap">
                        {edu.scoreLabel}: {edu.score}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* SKILLS & DOMAINS */}
              <div>
                <h4 className="font-extrabold text-blue-600 uppercase tracking-wider text-xs border-b border-blue-500/30 pb-1 mb-3">
                  Technical Skills & Domains
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {skillCategories.map((cat) => (
                    <div key={cat.id} className="p-3 rounded-xl bg-slate-500/5 border border-slate-500/10">
                      <span className="font-bold text-xs text-blue-500 block mb-1">{cat.title}</span>
                      <span className="text-xs opacity-90 leading-normal">
                        {cat.skills.map((s) => s.name).join(", ")}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* INTERNSHIPS */}
              <div>
                <h4 className="font-extrabold text-blue-600 uppercase tracking-wider text-xs border-b border-blue-500/30 pb-1 mb-3">
                  Internships
                </h4>
                <div className="space-y-3">
                  {internshipItems.map((intern) => (
                    <div key={intern.id} className="border-l-2 border-blue-500/40 pl-3">
                      <div className="flex justify-between items-start">
                        <span className="font-bold">{intern.title} ({intern.role})</span>
                        <span className="text-slate-400 text-xs">{intern.period}</span>
                      </div>
                      <span className="text-xs text-blue-400 block">{intern.organization}</span>
                      <p className="text-xs opacity-85 mt-0.5">{intern.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* PROJECTS */}
              <div>
                <h4 className="font-extrabold text-blue-600 uppercase tracking-wider text-xs border-b border-blue-500/30 pb-1 mb-3">
                  Key Projects
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {projectItems.map((proj) => (
                    <div key={proj.id} className="p-3 rounded-xl bg-slate-500/5 border border-slate-500/10">
                      <div className="flex justify-between items-baseline mb-1">
                        <span className="font-bold text-xs">{proj.number}. {proj.title}</span>
                        <span className="text-[10px] text-blue-400 font-mono">{proj.year}</span>
                      </div>
                      <p className="text-[11px] opacity-85 mb-1">{proj.description}</p>
                      <span className="text-[10px] text-slate-400 block">
                        Tech: {proj.technologies.join(", ")}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CERTIFICATIONS & ACHIEVEMENTS */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-extrabold text-blue-600 uppercase tracking-wider text-xs border-b border-blue-500/30 pb-1 mb-2">
                    Certifications (11)
                  </h4>
                  <ul className="space-y-1.5 text-xs">
                    {certificationItems.slice(0, 6).map((c) => (
                      <li key={c.id} className="flex items-start gap-1.5">
                        <span className="text-blue-500">•</span>
                        <span className="line-clamp-1">{c.title} ({c.date})</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-extrabold text-blue-600 uppercase tracking-wider text-xs border-b border-blue-500/30 pb-1 mb-2">
                    Achievements & Workshop
                  </h4>
                  <ul className="space-y-1.5 text-xs">
                    {achievementItems.slice(0, 5).map((a) => (
                      <li key={a.id} className="flex items-start gap-1.5">
                        <span className="text-amber-500">★</span>
                        <span className="line-clamp-1">{a.title}</span>
                      </li>
                    ))}
                    <li className="flex items-start gap-1.5 text-blue-400 font-medium">
                      <span>•</span>
                      <span>{workshopData.title} ({workshopData.institution}, {workshopData.year})</span>
                    </li>
                  </ul>
                </div>
              </div>

            </div>

            {/* Bottom Download CTA Bar inside CV */}
            <div className="mt-8 pt-6 border-t border-slate-700/30 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-slate-400">
                Official CV document for SWETHA J • Generated dynamically as high-resolution vector PDF
              </span>
              <button
                onClick={handleDownload}
                className="px-5 py-2 rounded-xl text-xs font-bold bg-blue-600 hover:bg-blue-500 text-white flex items-center gap-1.5 cursor-pointer shadow-md"
              >
                <Download className="w-3.5 h-3.5" />
                Download PDF
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
