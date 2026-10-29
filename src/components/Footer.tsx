import React from 'react';
import { personalInfo } from '../data/portfolio';
import { Terminal, Heart } from 'lucide-react';
import { playClick } from '../utils/sound';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-slate-800/80 bg-slate-950 py-12 text-slate-400 text-xs font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Tagline */}
          <div className="flex flex-col items-center md:items-start space-y-2 text-center md:text-left">
            <div className="flex items-center gap-2 text-white font-bold text-base font-mono">
              <span className="text-cyan-400">&lt;D/&gt;</span> Danis.dev
            </div>
            <p className="text-slate-400 max-w-sm">
              Diploma in IT graduate crafting high-converting, blazing-fast websites and custom web solutions.
            </p>
          </div>

          {/* Quick Nav Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-slate-300 font-medium">
            <a href="#services" onClick={() => playClick()} className="hover:text-cyan-400 transition-colors">
              Services
            </a>
            <a href="#projects" onClick={() => playClick()} className="hover:text-cyan-400 transition-colors">
              Projects
            </a>
            <a href="#about" onClick={() => playClick()} className="hover:text-cyan-400 transition-colors">
              About
            </a>
            <a href="#terminal" onClick={() => playClick()} className="hover:text-cyan-400 transition-colors">
              Terminal
            </a>
            <a href="#contact" onClick={() => playClick()} className="hover:text-cyan-400 transition-colors">
              Contact
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-4">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-cyan-400 transition-colors"
            >
              GitHub
            </a>
            <span>&bull;</span>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-cyan-400 transition-colors"
            >
              LinkedIn
            </a>
            <span>&bull;</span>
            <a
              href={`mailto:${personalInfo.email}`}
              className="text-slate-400 hover:text-cyan-400 transition-colors"
            >
              Email
            </a>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} Danis. Built with Astro, TypeScript & Tailwind CSS.
          </div>
          <div className="flex items-center gap-2">
            <span>Tip: Press</span>
            <kbd className="px-1.5 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-400 font-mono">
              Ctrl+K
            </kbd>
            <span>anytime for Command Palette</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
