import React, { useState } from 'react';
import { personalInfo, skillCategories } from '../data/portfolio';
import { User, Code, MapPin, Mail, ArrowRight } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'story' | 'skills'>('story');

  return (
    <section id="about" className="py-16 md:py-20 relative scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-slate-900 border border-slate-800 text-slate-300">
            About &amp; Skills
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Developer Craftsmanship &amp; IT Foundations
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            Learn more about my technical background, development principles, and technical proficiencies.
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex justify-center">
          <div className="flex space-x-2 bg-slate-900 border border-slate-800 p-1.5 rounded-2xl">
            <button
              onClick={() => setActiveTab('story')}
              className={`flex items-center gap-2 px-5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeTab === 'story'
                  ? 'bg-cyan-500 text-slate-950 shadow-sm'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              <User className="w-4 h-4" /> Story &amp; Philosophy
            </button>
            <button
              onClick={() => setActiveTab('skills')}
              className={`flex items-center gap-2 px-5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeTab === 'skills'
                  ? 'bg-cyan-500 text-slate-950 shadow-sm'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              <Code className="w-4 h-4" /> Technical Skills &amp; Stack
            </button>
          </div>
        </div>

        {/* Tab Panels */}
        <div className="max-w-4xl mx-auto bg-slate-900/50 border border-slate-800 rounded-2xl p-6 sm:p-10 shadow-xl">
          {activeTab === 'story' && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 border-b border-slate-800 pb-6">
                <div className="w-20 h-20 rounded-2xl bg-slate-800 border border-slate-700 flex items-center justify-center font-mono font-bold text-2xl text-cyan-400 shadow-md">
                  DN
                </div>

                <div className="space-y-2 text-center sm:text-left">
                  <h3 className="text-2xl font-bold text-white">{personalInfo.name}</h3>
                  <p className="text-sm text-cyan-400 font-medium">{personalInfo.title}</p>
                  <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 pt-1 text-xs text-slate-400">
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-slate-500" /> {personalInfo.location}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Mail className="w-3.5 h-3.5 text-slate-500" /> {personalInfo.email}
                    </span>
                  </div>
                </div>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
                <p>
                  I am a passionate <strong className="text-white">Full-Stack Web Developer &amp; IT Solutions Specialist</strong> graduating with a Diploma in Information Technology (Software &amp; Applications Development) from Polytechnic Ungku Omar, Malaysia.
                </p>
                <p>
                  My philosophy centers on building digital solutions that load instantaneously, feel intuitive, and are underpinned by solid IT systems engineering. Having a formal background in IT means I don't stop at UI components—I handle domain DNS routing, SSL certificates, edge CDN caching via Cloudflare, database architecture, and automated deployment pipelines.
                </p>
                <p>
                  Whether crafting a high-converting landing page for a business launch or engineering an internal operations portal, I focus on clean code, Core Web Vitals performance, and measurable client results.
                </p>
              </div>

              <div className="pt-6 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
                <div className="text-xs text-slate-400">
                  Open for freelance inquiries, contract work, and full-time software engineering roles.
                </div>
                <div className="flex items-center gap-3">
                  <a
                    href="#experience"
                    className="text-cyan-400 hover:text-cyan-300 font-medium text-xs flex items-center gap-1"
                  >
                    View Career Timeline <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'skills' && (
            <div className="space-y-6">
              <p className="text-xs sm:text-sm text-slate-400">
                A structured overview of technical skills, frameworks, and deployment technologies utilized across production projects:
              </p>

              <div className="space-y-6">
                {skillCategories.map((group, idx) => (
                  <div key={idx} className="p-5 rounded-xl bg-slate-950/60 border border-slate-800/80 space-y-3">
                    <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider font-mono">
                      {group.category}
                    </h4>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      {group.skills.map((skill) => (
                        <div key={skill.name} className="space-y-1">
                          <div className="flex justify-between text-xs">
                            <span className="text-slate-300 font-medium">{skill.name}</span>
                            <span className="text-cyan-400 font-mono text-[11px]">{skill.level}%</span>
                          </div>
                          <div className="w-full h-1.5 rounded-full bg-slate-800 overflow-hidden">
                            <div
                              className="h-full rounded-full bg-cyan-400"
                              style={{ width: `${skill.level}%` }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
