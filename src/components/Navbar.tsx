import React, { useState, useEffect } from "react";
import {
  Menu,
  X,
  Sun,
  Moon,
  Sparkles,
  Download,
  Send,
} from "lucide-react";
import { generateResumePdf } from "../utils/pdfGenerator";

interface NavbarProps {
  isDark: boolean;
  setIsDark: (val: boolean) => void;
  activeSection: string;
}

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Education", href: "#education" },
  { name: "Skills", href: "#skills" },
  { name: "Internships", href: "#internships" },
  { name: "Projects", href: "#projects" },
  { name: "Certifications", href: "#certifications" },
  { name: "Achievements", href: "#achievements" },
  { name: "Resume", href: "#resume" },
  { name: "Contact", href: "#contact" },
];

export const Navbar: React.FC<NavbarProps> = ({
  isDark,
  setIsDark,
  activeSection,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? isDark
            ? "bg-slate-950/80 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/20"
            : "bg-white/85 backdrop-blur-md border-b border-slate-200/80 shadow-md shadow-slate-200/30"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          {/* Brand Logo */}
          <a
            id="brand-logo"
            href="#home"
            onClick={(e) => handleNavClick(e, "#home")}
            className="flex items-center gap-2.5 group"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-violet-600 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-blue-500/25 group-hover:scale-105 transition-transform duration-300">
              S
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold tracking-wider text-base sm:text-lg bg-gradient-to-r from-blue-500 via-indigo-400 to-violet-400 bg-clip-text text-transparent group-hover:opacity-90 transition-opacity">
                SWETHA J
              </span>
              <span className="text-[10px] tracking-widest uppercase font-semibold text-slate-400 -mt-1 hidden sm:block">
                MCA • Web & AI
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav id="desktop-navigation" className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <a
                  key={link.name}
                  id={`nav-link-${link.name.toLowerCase().replace(/\s+/g, "-")}`}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-3 py-1.5 rounded-lg text-xs xl:text-sm font-medium transition-all duration-200 relative ${
                    isActive
                      ? isDark
                        ? "text-blue-400 bg-blue-500/10 font-semibold shadow-inner"
                        : "text-blue-600 bg-blue-50 font-semibold"
                      : isDark
                      ? "text-slate-300 hover:text-white hover:bg-slate-800/50"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-2 right-2 h-0.5 bg-gradient-to-r from-blue-500 to-violet-500 rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Actions: Theme Toggle & Quick CTA */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Download CV quick button */}
            <button
              id="nav-download-cv-btn"
              onClick={generateResumePdf}
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white shadow-md shadow-blue-500/20 hover:shadow-blue-500/35 transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
              title="Download Swetha's Official CV"
            >
              <Download className="w-3.5 h-3.5" />
              <span>CV</span>
            </button>

            {/* Dark / Light Mode Toggle */}
            <button
              id="theme-toggle-btn"
              onClick={() => setIsDark(!isDark)}
              className={`p-2 rounded-xl border transition-all duration-200 cursor-pointer ${
                isDark
                  ? "bg-slate-900/80 border-slate-800 text-amber-400 hover:bg-slate-800 hover:border-slate-700"
                  : "bg-slate-100 border-slate-200 text-slate-700 hover:bg-slate-200"
              }`}
              aria-label="Toggle Theme"
              title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4 text-indigo-600" />}
            </button>

            {/* Mobile Hamburger Button */}
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`lg:hidden p-2 rounded-xl border transition-colors cursor-pointer ${
                isDark
                  ? "bg-slate-900/80 border-slate-800 text-slate-300 hover:text-white"
                  : "bg-slate-100 border-slate-200 text-slate-700 hover:text-slate-900"
              }`}
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-drawer-menu"
          className={`lg:hidden border-b px-4 pt-2 pb-6 transition-all duration-300 ${
            isDark
              ? "bg-slate-950/95 border-slate-800/80 backdrop-blur-xl shadow-2xl"
              : "bg-white/95 border-slate-200 backdrop-blur-xl shadow-2xl"
          }`}
        >
          <div className="grid grid-cols-2 gap-2 pt-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-3 py-2.5 rounded-xl text-sm font-medium transition-all ${
                    isActive
                      ? isDark
                        ? "bg-blue-600/20 text-blue-400 font-bold border border-blue-500/30"
                        : "bg-blue-50 text-blue-600 font-bold border border-blue-200"
                      : isDark
                      ? "text-slate-300 hover:bg-slate-900"
                      : "text-slate-700 hover:bg-slate-100"
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </div>

          <div className="mt-4 pt-4 border-t border-slate-800/60 flex items-center justify-between gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                generateResumePdf();
              }}
              className="flex-1 py-2.5 px-4 rounded-xl text-xs font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 text-white flex items-center justify-center gap-2 shadow-lg shadow-blue-500/20 cursor-pointer"
            >
              <Download className="w-4 h-4" />
              Download Resume (PDF)
            </button>
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="py-2.5 px-4 rounded-xl text-xs font-semibold bg-slate-800 text-slate-200 hover:text-white flex items-center justify-center gap-1.5 border border-slate-700"
            >
              <Send className="w-3.5 h-3.5" />
              Contact
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
