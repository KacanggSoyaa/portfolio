import React from 'react';
import { services } from '../../data/portfolio';
import { Layout, Code2, Zap, Server, Check, ArrowRight, ShieldCheck, Clock, MessageSquareText, Award } from 'lucide-react';
import { playClick } from '../../utils/sound';

interface ServicesAppProps {
  onHireClick?: () => void;
}

const iconMap: Record<string, React.ReactNode> = {
  Layout: <Layout className="w-5 h-5 text-cyan-400" />,
  Code2: <Code2 className="w-5 h-5 text-blue-400" />,
  Zap: <Zap className="w-5 h-5 text-amber-400" />,
  Server: <Server className="w-5 h-5 text-emerald-400" />,
};

export const ServicesApp: React.FC<ServicesAppProps> = ({ onHireClick }) => {
  return (
    <div className="flex flex-col h-full bg-slate-950/95 text-slate-100 font-sans overflow-y-auto select-text p-4 md:p-8 space-y-8">
      {/* Header Banner */}
      <div className="relative rounded-2xl p-6 bg-gradient-to-br from-slate-900 via-slate-900/90 to-cyan-950/30 border border-slate-800 shadow-xl overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-2xl relative z-10 space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-cyan-950/80 border border-cyan-800/60 text-cyan-400">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            Freelance & Contract Services
          </div>
          <h1 className="text-xl md:text-2xl font-bold tracking-tight text-white">
            High-Performance Web Solutions Tailored For Your Growth
          </h1>
          <p className="text-xs md:text-sm text-slate-300 leading-relaxed">
            I help startups, small businesses, and creators turn their ideas into blazing fast, modern, and high-converting websites. No bloat, no delays—just clean code and reliable IT support.
          </p>
        </div>

        {/* Value Proposition Badges */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6 pt-6 border-t border-slate-800/80">
          <div className="flex items-center gap-2 text-xs text-slate-300">
            <Clock className="w-4 h-4 text-cyan-400 shrink-0" />
            <span>Fast 3–10 Day Delivery</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-slate-300">
            <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>100% Quality Guarantee</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-slate-300">
            <MessageSquareText className="w-4 h-4 text-blue-400 shrink-0" />
            <span>Direct Dev Communication</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-slate-300">
            <Award className="w-4 h-4 text-amber-400 shrink-0" />
            <span>SEO & Mobile Optimized</span>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {services.map((service) => (
          <div
            key={service.id}
            className="flex flex-col justify-between p-5 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 hover:bg-slate-900/90 transition-all duration-200 group"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="p-2.5 rounded-lg bg-slate-800/80 border border-slate-700/60 group-hover:scale-105 transition-transform">
                  {iconMap[service.icon] || <Layout className="w-5 h-5 text-cyan-400" />}
                </div>
                {service.startingPrice && (
                  <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-cyan-950/60 text-cyan-300 border border-cyan-800/50">
                    {service.startingPrice}
                  </span>
                )}
              </div>

              <div>
                <h3 className="text-base font-semibold text-white group-hover:text-cyan-300 transition-colors">
                  {service.title}
                </h3>
                <p className="text-xs text-cyan-400/80 font-medium mt-0.5">
                  {service.tagline}
                </p>
                <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Deliverables list */}
              <div className="pt-3 border-t border-slate-800/60 space-y-1.5">
                <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                  What's Included:
                </div>
                {service.deliverables.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                    <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={() => {
                playClick();
                onHireClick?.();
              }}
              className="mt-5 w-full flex items-center justify-center gap-2 bg-slate-800 hover:bg-cyan-500 hover:text-slate-950 text-slate-200 font-medium text-xs py-2 px-3 rounded-lg border border-slate-700 hover:border-cyan-400 transition-all duration-200"
            >
              Request Quote for this Service <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        ))}
      </div>

      {/* 4-Step Process Section */}
      <div className="p-6 rounded-xl bg-slate-900/40 border border-slate-800/80 space-y-4">
        <div className="text-center space-y-1">
          <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">Simple & Transparent</span>
          <h2 className="text-lg font-bold text-white">How We Work Together</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 pt-2">
          <div className="p-4 rounded-lg bg-slate-900/80 border border-slate-800">
            <div className="text-cyan-400 font-mono font-bold text-lg mb-1">01.</div>
            <h4 className="text-sm font-semibold text-white">Discovery Call</h4>
            <p className="text-xs text-slate-400 mt-1">We discuss your goals, target audience, reference sites, and project timeline.</p>
          </div>
          <div className="p-4 rounded-lg bg-slate-900/80 border border-slate-800">
            <div className="text-cyan-400 font-mono font-bold text-lg mb-1">02.</div>
            <h4 className="text-sm font-semibold text-white">Design & Wireframe</h4>
            <p className="text-xs text-slate-400 mt-1">Creating a visual prototype and structure that fits your brand identity.</p>
          </div>
          <div className="p-4 rounded-lg bg-slate-900/80 border border-slate-800">
            <div className="text-cyan-400 font-mono font-bold text-lg mb-1">03.</div>
            <h4 className="text-sm font-semibold text-white">Development</h4>
            <p className="text-xs text-slate-400 mt-1">Building with Astro/Next.js and Tailwind CSS for speed, accessibility, and SEO.</p>
          </div>
          <div className="p-4 rounded-lg bg-slate-900/80 border border-slate-800">
            <div className="text-cyan-400 font-mono font-bold text-lg mb-1">04.</div>
            <h4 className="text-sm font-semibold text-white">Launch & Support</h4>
            <p className="text-xs text-slate-400 mt-1">DNS setup, cloud deployment, and 30-day post-launch support and bug fixes.</p>
          </div>
        </div>
      </div>

      {/* Bottom CTA Card */}
      <div className="p-6 rounded-xl bg-gradient-to-r from-cyan-950/60 to-blue-950/60 border border-cyan-800/50 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h3 className="text-base font-bold text-white">Have a project in mind or need a custom quote?</h3>
          <p className="text-xs text-slate-300 mt-1">Free consultation with no obligation. I usually reply within 2-4 hours.</p>
        </div>
        <button
          onClick={() => {
            playClick();
            onHireClick?.();
          }}
          className="whitespace-nowrap bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs py-2.5 px-5 rounded-lg shadow-lg shadow-cyan-500/20 transition-all hover:scale-105"
        >
          Start a Conversation &rarr;
        </button>
      </div>
    </div>
  );
};
