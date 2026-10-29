import React from 'react';
import { TerminalApp } from './apps/TerminalApp';
import { ArrowRight, Sparkles, Code2, ShieldCheck, Zap, Download } from 'lucide-react';
import { playClick } from '../utils/sound';

interface HeroProps {
  onOpenPalette: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenPalette }) => {
  return (
    <section className="relative pt-28 pb-8 md:pt-36 md:pb-12 overflow-hidden">
      {/* Aurora Ambient Background Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-tr from-cyan-600/15 via-blue-600/15 to-purple-600/10 blur-[130px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Hero Copy & Value Props */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono bg-cyan-950/70 border border-cyan-800/60 text-cyan-300 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              Diploma in IT • Freelance Web Developer
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15]">
              Building Fast, Scalable &{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-blue-500">
                High-Converting
              </span>{' '}
              Websites.
            </h1>

            {/* Subtitle */}
            <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Hi, I'm <strong className="text-white">Danis</strong>. Completing my IT internship and ready to help businesses, startups, and creators build modern web applications, speed-optimized landing pages, and smooth digital workflows.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2">
              <a
                href="#services"
                onClick={() => playClick()}
                className="flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-xs sm:text-sm px-5 py-3 rounded-xl shadow-lg shadow-cyan-500/25 transition-all hover:scale-105"
              >
                View Services & Pricing <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#projects"
                onClick={() => playClick()}
                className="flex items-center gap-2 bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 text-slate-200 font-semibold text-xs sm:text-sm px-5 py-3 rounded-xl transition-all"
              >
                Featured Work
              </a>

              <a
                href="#contact"
                onClick={() => playClick()}
                className="flex items-center gap-1.5 text-xs text-cyan-400 hover:text-cyan-300 px-3 py-2 transition-colors font-mono"
              >
                <Sparkles className="w-3.5 h-3.5" /> Get a Quote &rarr;
              </a>
            </div>

            {/* Value Highlights */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-800/80 max-w-lg mx-auto lg:mx-0">
              <div className="text-center lg:text-left">
                <div className="text-lg sm:text-xl font-bold text-white font-mono">95+</div>
                <div className="text-[11px] text-slate-400">PageSpeed Performance</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-lg sm:text-xl font-bold text-cyan-400 font-mono">3–10 Days</div>
                <div className="text-[11px] text-slate-400">Fast Turnaround</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-lg sm:text-xl font-bold text-emerald-400 font-mono">100%</div>
                <div className="text-[11px] text-slate-400">Client Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Right Column: Live Interactive Terminal Widget */}
          <div className="lg:col-span-5 relative" id="terminal">
            <div className="absolute -top-3 -right-3 z-10 hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950 border border-cyan-800 text-[11px] font-mono text-cyan-300 shadow-md">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
              Interactive CLI: Type 'help'
            </div>

            <TerminalApp
              className="w-full"
              onHireClick={() => {
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              onOpenPalette={onOpenPalette}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
