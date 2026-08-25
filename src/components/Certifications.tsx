import React, { useState } from "react";
import {
  Award,
  Calendar,
  Building,
  Sparkles,
  ExternalLink,
  X,
  CheckCircle2,
  FileCheck,
  ShieldCheck,
} from "lucide-react";
import { certificationItems, personalInfo } from "../data/portfolioData";
import { CertificationItem } from "../types";
import { TiltCard } from "./TiltCard";

interface CertificationsProps {
  isDark: boolean;
}

export const Certifications: React.FC<CertificationsProps> = ({ isDark }) => {
  const [selectedCert, setSelectedCert] = useState<CertificationItem | null>(null);

  return (
    <section id="certifications" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest text-blue-500 bg-blue-500/10 border border-blue-500/20 mb-4">
            <Award className="w-3.5 h-3.5" />
            <span>Credentials & Leadership</span>
          </div>

          <h2
            id="certifications-heading"
            className={`text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight mb-4 ${
              isDark ? "text-white" : "text-slate-900"
            }`}
          >
            Certifications &{" "}
            <span className="bg-gradient-to-r from-blue-500 via-indigo-400 to-violet-500 bg-clip-text text-transparent">
              Credentials
            </span>
          </h2>
          <p className={`text-base ${isDark ? "text-slate-400" : "text-slate-600"}`}>
            Accredited industry certifications, university credentials, technical diplomas, and research publications.
          </p>
        </div>

        {/* 11 Certificate Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificationItems.map((cert) => (
            <TiltCard
              key={cert.id}
              id={`cert-card-${cert.id}`}
              maxTilt={8}
              scale={1.02}
              glowColor="rgba(59, 130, 246, 0.3)"
              className="h-full"
            >
              <div
                className={`h-full p-6 rounded-3xl border transition-all duration-300 relative flex flex-col justify-between group ${
                  isDark
                    ? "bg-slate-900/60 border-slate-800 hover:border-blue-500/50 shadow-xl backdrop-blur-xl"
                    : "bg-white/90 border-slate-200 hover:border-blue-300 shadow-md shadow-slate-200/50"
                }`}
              >
                <div>
                  {/* Top row: Badge & Number */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-2.5 py-1 rounded-lg text-[10px] font-extrabold uppercase tracking-wider bg-blue-500/10 text-blue-400 border border-blue-500/20">
                      {cert.badge}
                    </span>
                    <span className="text-xs font-mono font-bold text-slate-500">
                      #{cert.number}
                    </span>
                  </div>

                  {/* Title */}
                  <h3
                    className={`text-base font-bold tracking-tight mb-2 group-hover:text-blue-400 transition-colors line-clamp-2 ${
                      isDark ? "text-white" : "text-slate-900"
                    }`}
                  >
                    {cert.title}
                  </h3>

                  {/* Organization */}
                  <div className="flex items-start gap-2 text-xs text-slate-400 font-medium mb-3">
                    <Building className="w-3.5 h-3.5 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span className="line-clamp-2">{cert.organization}</span>
                  </div>
                </div>

                {/* Date and View Certificate Button */}
                <div className="pt-4 border-t border-slate-800/40 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-xs text-slate-400">
                    <Calendar className="w-3.5 h-3.5 text-indigo-400" />
                    <span>{cert.date}</span>
                  </div>

                  <button
                    id={`view-cert-btn-${cert.id}`}
                    onClick={() => setSelectedCert(cert)}
                    className="inline-flex items-center gap-1 text-xs font-bold text-blue-500 hover:text-blue-400 transition-colors cursor-pointer"
                  >
                    <span>View Certificate</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </TiltCard>
          ))}
        </div>

        {/* Certificate Preview Modal */}
        {selectedCert && (
          <div
            id="certificate-preview-modal"
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn"
            onClick={() => setSelectedCert(null)}
          >
            <div
              className={`w-full max-w-2xl rounded-3xl border p-6 sm:p-8 relative shadow-2xl transition-all ${
                isDark
                  ? "bg-slate-900 border-slate-700 text-white"
                  : "bg-white border-slate-200 text-slate-900"
              }`}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                id="cert-modal-close-btn"
                onClick={() => setSelectedCert(null)}
                className={`absolute top-6 right-6 p-2 rounded-full border transition-colors cursor-pointer ${
                  isDark
                    ? "bg-slate-800 border-slate-700 text-slate-300 hover:text-white"
                    : "bg-slate-100 border-slate-200 text-slate-700 hover:text-slate-900"
                }`}
                aria-label="Close Certificate Modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-6">
                {/* Certificate Frame Display */}
                <div
                  className={`p-6 sm:p-8 rounded-2xl border-2 border-dashed relative overflow-hidden text-center flex flex-col items-center ${
                    isDark
                      ? "bg-slate-950/80 border-blue-500/40"
                      : "bg-blue-50/50 border-blue-300"
                  }`}
                >
                  <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-blue-600 to-violet-600 flex items-center justify-center text-white mb-4 shadow-xl shadow-blue-500/30">
                    <ShieldCheck className="w-8 h-8" />
                  </div>

                  <span className="text-xs font-mono font-bold tracking-widest text-blue-400 uppercase mb-1">
                    Verified Credential • {selectedCert.badge}
                  </span>

                  <h3 className="text-xl sm:text-2xl font-black max-w-md tracking-tight mb-2">
                    {selectedCert.title}
                  </h3>

                  <p className="text-sm font-semibold text-slate-400 mb-4 max-w-md">
                    Conferred by {selectedCert.organization}
                  </p>

                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-mono font-bold">
                    Issued: {selectedCert.date}
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-700/50 w-full flex items-center justify-between text-[11px] text-slate-400 font-medium">
                    <span>Candidate: {personalInfo.name}</span>
                    <span className="flex items-center gap-1 text-emerald-400">
                      <CheckCircle2 className="w-3.5 h-3.5" /> Authenticated Record
                    </span>
                  </div>
                </div>

                {selectedCert.description && (
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-blue-400 mb-1">
                      Credential Description:
                    </h4>
                    <p
                      className={`text-sm leading-relaxed ${
                        isDark ? "text-slate-300" : "text-slate-600"
                      }`}
                    >
                      {selectedCert.description}
                    </p>
                  </div>
                )}

                <div className="flex items-center justify-between pt-4 border-t border-slate-700/40">
                  <span className="text-xs text-slate-400">
                    Document connection slot ready for PDF/Image attachment.
                  </span>
                  <button
                    onClick={() => setSelectedCert(null)}
                    className="px-6 py-2.5 rounded-xl text-xs font-bold bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-500/25 cursor-pointer"
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
