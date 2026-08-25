import React, { useState } from "react";
import {
  Trophy,
  Medal,
  Award,
  Users,
  Flame,
  Sparkles,
  CheckCircle,
  Flag,
  Gamepad2,
  Calendar,
} from "lucide-react";
import { achievementItems } from "../data/portfolioData";
import { TiltCard } from "./TiltCard";

interface AchievementsProps {
  isDark: boolean;
}

const getCategoryIcon = (category: string) => {
  switch (category) {
    case "award":
      return <Trophy className="w-6 h-6 text-amber-400" />;
    case "competition":
      return <Medal className="w-6 h-6 text-blue-400" />;
    case "leadership":
      return <Users className="w-6 h-6 text-violet-400" />;
    case "sports":
      return <Gamepad2 className="w-6 h-6 text-emerald-400" />;
    default:
      return <Award className="w-6 h-6 text-cyan-400" />;
  }
};

export const Achievements: React.FC<AchievementsProps> = ({ isDark }) => {
  const [filter, setFilter] = useState<string>("all");

  const filteredAchievements =
    filter === "all"
      ? achievementItems
      : achievementItems.filter((a) => a.category === filter);

  return (
    <section id="achievements" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest text-blue-500 bg-blue-500/10 border border-blue-500/20 mb-4">
            <Trophy className="w-3.5 h-3.5" />
            <span>Honors & Milestones</span>
          </div>

          <h2
            id="achievements-heading"
            className={`text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight mb-4 ${
              isDark ? "text-white" : "text-slate-900"
            }`}
          >
            Key{" "}
            <span className="bg-gradient-to-r from-blue-500 via-indigo-400 to-violet-500 bg-clip-text text-transparent">
              Achievements
            </span>
          </h2>
          <p className={`text-base ${isDark ? "text-slate-400" : "text-slate-600"}`}>
            Recognized excellence across hackathons, technical pitch competitions, collegiate leadership, and extracurricular honors.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {[
              { id: "all", label: "All Honors (10)" },
              { id: "award", label: "Awards & Honors" },
              { id: "competition", label: "Competitions & Hackathons" },
              { id: "leadership", label: "Leadership & Events" },
              { id: "sports", label: "Sports" },
            ].map((f) => (
              <button
                key={f.id}
                onClick={() => setFilter(f.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  filter === f.id
                    ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md shadow-blue-500/30"
                    : isDark
                    ? "bg-slate-800/80 text-slate-300 hover:bg-slate-700"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* 10 Achievements Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAchievements.map((item, idx) => (
            <TiltCard
              key={item.id}
              id={`achievement-card-${item.id}`}
              maxTilt={8}
              scale={1.02}
              glowColor="rgba(245, 158, 11, 0.25)"
              className="h-full"
            >
              <div
                className={`h-full p-6 rounded-3xl border transition-all duration-300 relative flex flex-col justify-between group ${
                  isDark
                    ? "bg-slate-900/60 border-slate-800 hover:border-amber-500/40 shadow-xl backdrop-blur-xl"
                    : "bg-white/90 border-slate-200 hover:border-amber-400 shadow-md shadow-slate-200/50"
                }`}
              >
                <div>
                  {/* Top Bar: Icon and Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`w-12 h-12 rounded-2xl flex items-center justify-center border transition-all group-hover:scale-110 shadow-lg ${
                        isDark
                          ? "bg-slate-800 border-slate-700 shadow-black/40"
                          : "bg-amber-50/80 border-amber-100 shadow-amber-100/50"
                      }`}
                    >
                      {getCategoryIcon(item.category)}
                    </div>

                    <span className="px-2.5 py-1 rounded-lg text-[10px] font-extrabold uppercase tracking-wider bg-amber-500/10 text-amber-500 border border-amber-500/20">
                      {item.badge}
                    </span>
                  </div>

                  {/* Title */}
                  <h3
                    className={`text-base font-bold tracking-tight mb-2 group-hover:text-amber-400 transition-colors ${
                      isDark ? "text-white" : "text-slate-900"
                    }`}
                  >
                    {item.title}
                  </h3>

                  {item.organization && (
                    <p className="text-xs text-slate-400 mb-2 font-medium">
                      {item.organization}
                    </p>
                  )}
                </div>

                {/* Bottom Year and Verified Tag */}
                <div className="pt-4 border-t border-slate-800/40 flex items-center justify-between text-xs text-slate-400">
                  <span className="flex items-center gap-1 font-semibold text-blue-400">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                    Verified Milestone
                  </span>
                  {item.year && (
                    <span className="font-mono font-bold text-slate-500">
                      {item.year}
                    </span>
                  )}
                </div>
              </div>
            </TiltCard>
          ))}
        </div>

      </div>
    </section>
  );
};
