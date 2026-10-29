import React from 'react';
import { personalInfo } from '../data/portfolio';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-slate-800/80 bg-slate-950 py-12 text-slate-400 text-xs font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Tagline */}
          <div className="flex flex-col items-center md:items-start space-y-1 text-center md:text-left">
            <div className="flex items-center gap-2 text-white font-semibold text-sm">
              <span className="font-mono text-cyan-400 font-bold">DN</span> {personalInfo.name}
            </div>
            <p className="text-slate-400 max-w-sm text-xs">
              Diploma in IT graduate engineering fast, scalable websites and robust cloud setups.
            </p>
          </div>

          {/* Quick Nav Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-slate-300 font-medium text-xs">
            <a href="#projects" className="hover:text-cyan-400 transition-colors">
              Work
            </a>
            <a href="#services" className="hover:text-cyan-400 transition-colors">
              Services
            </a>
            <a href="#about" className="hover:text-cyan-400 transition-colors">
              About
            </a>
            <a href="#experience" className="hover:text-cyan-400 transition-colors">
              Experience
            </a>
            <a href="#contact" className="hover:text-cyan-400 transition-colors">
              Contact
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-4">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors"
            >
              GitHub
            </a>
            <span className="text-slate-700">&bull;</span>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors"
            >
              LinkedIn
            </a>
            <span className="text-slate-700">&bull;</span>
            <a
              href={`mailto:${personalInfo.email}`}
              className="text-slate-400 hover:text-white transition-colors"
            >
              Email
            </a>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved. Built with Astro, React, and Tailwind CSS.
          </div>
          <div className="flex items-center gap-2">
            <span>Press</span>
            <kbd className="px-1.5 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-400 font-mono">
              Ctrl+K
            </kbd>
            <span>for quick navigation</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
