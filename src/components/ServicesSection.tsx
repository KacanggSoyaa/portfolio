import React from 'react';
import { services } from '../data/portfolio';
import { Layout, Code2, Zap, Server, Check, ArrowRight, Clock, ShieldCheck, MessageSquareText, Award } from 'lucide-react';
import { playClick } from '../utils/sound';

const iconMap: Record<string, React.ReactNode> = {
  Layout: <Layout className="w-5 h-5 text-cyan-400" />,
  Code2: <Code2 className="w-5 h-5 text-blue-400" />,
  Zap: <Zap className="w-5 h-5 text-amber-400" />,
  Server: <Server className="w-5 h-5 text-emerald-400" />,
};

interface ServicesSectionProps {
  onSelectService?: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  return (
    <section id="services" className="pt-4 pb-14 md:pt-6 md:pb-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 md:space-y-12">
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-cyan-950/70 border border-cyan-800/50 text-cyan-400">
            Freelance & Contract Offerings
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Services Built to Scale Your Online Presence
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            From single-page high-converting marketing sites to full-stack management dashboards and IT deployment. Transparent deliverables, fixed estimates, and zero technical headaches.
          </p>
        </div>

        {/* Services 4-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="flex flex-col justify-between p-6 sm:p-8 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-cyan-500/50 hover:bg-slate-900/80 transition-all duration-300 group shadow-lg shadow-black/20"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700/60 group-hover:scale-105 transition-transform">
                    {iconMap[service.icon] || <Layout className="w-5 h-5 text-cyan-400" />}
                  </div>
                  {service.startingPrice && (
                    <span className="text-xs font-mono px-3 py-1 rounded-full bg-cyan-950/70 text-cyan-300 border border-cyan-800/60 font-semibold">
                      {service.startingPrice}
                    </span>
                  )}
                </div>

                <div>
                  <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs font-medium text-cyan-400 mt-1">
                    {service.tagline}
                  </p>
                  <p className="text-xs text-slate-300 mt-2.5 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Deliverables */}
                <div className="pt-4 border-t border-slate-800/80 space-y-2">
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 font-mono">
                    Key Deliverables:
                  </div>
                  {service.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                      <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <a
                href="#contact"
                onClick={() => {
                  playClick();
                  onSelectService?.(service.title);
                }}
                className="mt-6 w-full flex items-center justify-center gap-2 bg-slate-800 hover:bg-cyan-500 hover:text-slate-950 text-slate-200 font-semibold text-xs py-2.5 px-4 rounded-xl border border-slate-700 hover:border-cyan-400 transition-all duration-200"
              >
                Inquire About This Service <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          ))}
        </div>

        {/* 4-Step Process Section */}
        <div className="p-8 rounded-3xl bg-slate-900/40 border border-slate-800/80 space-y-6">
          <div className="text-center space-y-1">
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest font-semibold">
              The Client Journey
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white">How We Work Together</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 pt-2">
            <div className="p-5 rounded-2xl bg-slate-900/70 border border-slate-800 relative">
              <div className="text-cyan-400 font-mono font-bold text-xl mb-1">01.</div>
              <h4 className="text-sm font-bold text-white">Discovery Call</h4>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                We align on your project scope, target audience, brand aesthetic, and milestones.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-900/70 border border-slate-800 relative">
              <div className="text-cyan-400 font-mono font-bold text-xl mb-1">02.</div>
              <h4 className="text-sm font-bold text-white">Design & Prototype</h4>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                Creating interactive mockups and architecture plans tailored to your conversion goals.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-900/70 border border-slate-800 relative">
              <div className="text-cyan-400 font-mono font-bold text-xl mb-1">03.</div>
              <h4 className="text-sm font-bold text-white">Development</h4>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                Coding clean TypeScript, Astro, or React components with rigorous mobile testing and SEO.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-900/70 border border-slate-800 relative">
              <div className="text-cyan-400 font-mono font-bold text-xl mb-1">04.</div>
              <h4 className="text-sm font-bold text-white">Launch & Support</h4>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                Domain routing, SSL setup, and 30 days of post-launch maintenance and support.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
