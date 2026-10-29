import React, { useState } from 'react';
import { personalInfo } from '../data/portfolio';
import { whatsappUrl } from '../utils/contact';
import { ArrowRight, CheckCircle2, Zap, Shield, Cpu, MessageCircle } from 'lucide-react';

interface HeroProps {
  onOpenPalette: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenPalette }) => {
  const [activeTab, setActiveTab] = useState<'performance' | 'stack' | 'it'>('performance');

  const waLink = whatsappUrl(
    'Hi Danis, I saw your portfolio and would like to discuss a web project.'
  );

  return (
    <section className="relative pt-28 pb-14 md:pt-36 md:pb-20 overflow-hidden">
      {/* Subtle Aurora Ambient Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[360px] bg-gradient-to-tr from-cyan-600/10 via-blue-600/10 to-transparent blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Column: Value Proposition & Professional Copy */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Professional Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium bg-slate-900 border border-slate-800 text-slate-300 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Diploma in IT &bull; Full-Stack Web Developer</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12]">
              Engineering Fast, Scalable &{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-blue-500">
                High-Converting
              </span>{' '}
              Websites.
            </h1>

            {/* Subtitle */}
            <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Hi, I'm <strong className="text-white font-semibold">Danis Nazri</strong>. I bridge frontend engineering with deep IT systems knowledge—delivering sub-second landing pages, full-stack web applications, and resilient cloud deployments for businesses and founders.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2">
              <a
                href="#projects"
                className="flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold text-xs sm:text-sm px-5 py-3 rounded-xl shadow-sm hover:shadow-cyan-500/20 transition-all hover:scale-[1.02]"
              >
                Explore Selected Work <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-slate-200 font-medium text-xs sm:text-sm px-5 py-3 rounded-xl transition-all"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" /> WhatsApp Chat
              </a>

              <a
                href="#contact"
                className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-white px-3 py-2 transition-colors font-medium"
              >
                Request a Quote &rarr;
              </a>
            </div>

            {/* Key Performance Indicators Bar */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-800/80 max-w-lg mx-auto lg:mx-0">
              <div className="text-center lg:text-left">
                <div className="text-xl sm:text-2xl font-bold text-white font-mono">95+</div>
                <div className="text-[11px] text-slate-400">Lighthouse Target</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-xl sm:text-2xl font-bold text-cyan-400 font-mono">3–10 Days</div>
                <div className="text-[11px] text-slate-400">Typical Delivery</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-xl sm:text-2xl font-bold text-emerald-400 font-mono">1:1</div>
                <div className="text-[11px] text-slate-400">Direct Collaboration</div>
              </div>
            </div>
          </div>

          {/* Right Column: Engineering Showcase Card */}
          <div className="lg:col-span-5 relative">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/90 shadow-2xl backdrop-blur-md overflow-hidden">
              {/* Window Header */}
              <div className="h-10 px-4 bg-slate-950/70 border-b border-slate-800/80 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                  <span className="text-slate-400 text-[11px] font-mono ml-2">
                    danisnazri.dev &bull; engineering-card
                  </span>
                </div>
                <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-950/60 border border-emerald-800/40 text-[10px] text-emerald-400 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Production Ready</span>
                </div>
              </div>

              {/* Showcase Navigation Tabs */}
              <div
                role="tablist"
                aria-label="Engineering standards"
                className="grid grid-cols-3 border-b border-slate-800/80 bg-slate-950/40 text-xs"
              >
                <button
                  role="tab"
                  aria-selected={activeTab === 'performance'}
                  aria-controls="hero-panel-performance"
                  onClick={() => setActiveTab('performance')}
                  className={`py-2.5 px-3 font-medium transition-colors flex items-center justify-center gap-1.5 ${
                    activeTab === 'performance'
                      ? 'text-cyan-400 border-b-2 border-cyan-400 bg-slate-900/40'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <Zap className="w-3.5 h-3.5" /> Speed & SEO
                </button>
                <button
                  role="tab"
                  aria-selected={activeTab === 'stack'}
                  aria-controls="hero-panel-stack"
                  onClick={() => setActiveTab('stack')}
                  className={`py-2.5 px-3 font-medium transition-colors flex items-center justify-center gap-1.5 ${
                    activeTab === 'stack'
                      ? 'text-cyan-400 border-b-2 border-cyan-400 bg-slate-900/40'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <Cpu className="w-3.5 h-3.5" /> Stack
                </button>
                <button
                  role="tab"
                  aria-selected={activeTab === 'it'}
                  aria-controls="hero-panel-it"
                  onClick={() => setActiveTab('it')}
                  className={`py-2.5 px-3 font-medium transition-colors flex items-center justify-center gap-1.5 ${
                    activeTab === 'it'
                      ? 'text-cyan-400 border-b-2 border-cyan-400 bg-slate-900/40'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <Shield className="w-3.5 h-3.5" /> IT Systems
                </button>
              </div>

              {/* Tab Contents */}
              <div className="p-5 sm:p-6 space-y-4">
                {activeTab === 'performance' && (
                  <div
                    role="tabpanel"
                    id="hero-panel-performance"
                    className="space-y-4"
                  >
                    <div className="flex items-center justify-between pb-3 border-b border-slate-800/60">
                      <div>
                        <div className="text-xs font-semibold text-white">Performance Standards</div>
                        <div className="text-[11px] text-slate-400">Core Web Vitals targets</div>
                      </div>
                      <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-emerald-950 border border-emerald-800/60 text-emerald-400 font-bold">
                        95+ Target
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-3 text-xs">
                      <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80 space-y-1">
                        <div className="text-slate-400 text-[11px]">First Contentful Paint</div>
                        <div className="text-emerald-400 font-mono font-bold text-sm">Sub-1s target</div>
                      </div>
                      <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80 space-y-1">
                        <div className="text-slate-400 text-[11px]">Cumulative Layout Shift</div>
                        <div className="text-emerald-400 font-mono font-bold text-sm">Near-zero target</div>
                      </div>
                      <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80 space-y-1">
                        <div className="text-slate-400 text-[11px]">Search Engine Optimization</div>
                        <div className="text-cyan-400 font-mono font-bold text-sm">Semantic &amp; structured</div>
                      </div>
                      <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80 space-y-1">
                        <div className="text-slate-400 text-[11px]">Mobile Responsiveness</div>
                        <div className="text-cyan-400 font-mono font-bold text-sm">Mobile-first</div>
                      </div>
                    </div>

                    <p className="text-[11px] text-slate-400 leading-relaxed pt-1">
                      Websites engineered for maximum speed, reducing bounce rates and directly driving customer conversions.
                    </p>
                  </div>
                )}

                {activeTab === 'stack' && (
                  <div role="tabpanel" id="hero-panel-stack" className="space-y-4">
                    <div className="space-y-1">
                      <div className="text-xs font-semibold text-white">Modern Engineering Foundation</div>
                      <div className="text-[11px] text-slate-400">Standardized on industry-leading web frameworks</div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-950/60 border border-slate-800/80 text-xs">
                        <span className="text-slate-200 font-medium">Astro 5 &amp; React 19</span>
                        <span className="text-cyan-400 font-mono text-[11px]">Zero-JS by default</span>
                      </div>
                      <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-950/60 border border-slate-800/80 text-xs">
                        <span className="text-slate-200 font-medium">TypeScript &amp; Tailwind CSS</span>
                        <span className="text-cyan-400 font-mono text-[11px]">Type-safe &amp; responsive</span>
                      </div>
                      <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-950/60 border border-slate-800/80 text-xs">
                        <span className="text-slate-200 font-medium">PostgreSQL &amp; REST APIs</span>
                        <span className="text-cyan-400 font-mono text-[11px]">Scalable persistence</span>
                      </div>
                    </div>

                    <p className="text-[11px] text-slate-400 leading-relaxed pt-1">
                      Writing maintainable, clean code that teams can easily extend without technical debt.
                    </p>
                  </div>
                )}

                {activeTab === 'it' && (
                  <div role="tabpanel" id="hero-panel-it" className="space-y-4">
                    <div className="space-y-1">
                      <div className="text-xs font-semibold text-white">IT &amp; Systems Specialization</div>
                      <div className="text-[11px] text-slate-400">Bridging software development with deployment infrastructure</div>
                    </div>

                    <div className="grid grid-cols-1 gap-2.5 text-xs">
                      <div className="flex items-start gap-2.5 p-2.5 rounded-xl bg-slate-950/60 border border-slate-800/80">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <div>
                          <div className="font-semibold text-white">Cloudflare Edge &amp; DNS Management</div>
                          <div className="text-[11px] text-slate-400">DDoS protection, SSL/TLS certificates, and worldwide CDN caching.</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-2.5 p-2.5 rounded-xl bg-slate-950/60 border border-slate-800/80">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <div>
                          <div className="font-semibold text-white">Zero-Downtime CI/CD Hosting</div>
                          <div className="text-[11px] text-slate-400">Automated GitHub push-to-deploy workflows on Vercel or cloud VPS.</div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Footer of Card */}
                <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs">
                  <span className="text-slate-400">Have a project in mind?</span>
                  <a
                    href="#contact"
                    className="text-cyan-400 hover:text-cyan-300 font-medium flex items-center gap-1"
                  >
                    Start a Conversation &rarr;
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
