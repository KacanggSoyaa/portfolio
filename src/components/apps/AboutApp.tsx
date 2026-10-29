import React, { useState } from 'react';
import { personalInfo, skillCategories, experience } from '../../data/portfolio';
import { GraduationCap, Briefcase, Code, Terminal, Download, Sparkles, MapPin, Mail, Globe, CheckCircle } from 'lucide-react';
import { playClick } from '../../utils/sound';

interface AboutAppProps {
  onHireClick?: () => void;
  onOpenResume?: () => void;
}

export const AboutApp: React.FC<AboutAppProps> = ({ onHireClick, onOpenResume }) => {
  const [activeTab, setActiveTab] = useState<'bio' | 'skills' | 'experience'>('bio');

  return (
    <div className="flex flex-col h-full bg-slate-950/95 text-slate-100 font-sans select-text">
      {/* Top Profile Header */}
      <div className="p-6 border-b border-slate-800 bg-gradient-to-r from-slate-900 via-slate-900/90 to-cyan-950/20">
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 text-center sm:text-left">
          <div className="relative group">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-cyan-500 to-blue-600 p-1 shadow-lg shadow-cyan-500/20">
              <div className="w-full h-full rounded-xl bg-slate-900 flex items-center justify-center font-mono font-bold text-2xl text-cyan-400">
                &lt;D/&gt;
              </div>
            </div>
            <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-emerald-500 border-2 border-slate-900 flex items-center justify-center text-[10px]" title="Online & Available">
              ✓
            </div>
          </div>

          <div className="flex-1 space-y-1">
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
              <h1 className="text-xl font-bold text-white">{personalInfo.name}</h1>
              <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-cyan-950 text-cyan-300 border border-cyan-800/60">
                IT Student & Freelancer
              </span>
            </div>
            <p className="text-xs text-cyan-400 font-medium">{personalInfo.title}</p>
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 text-xs text-slate-400 pt-1">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-slate-500" /> {personalInfo.location}
              </span>
              <span className="flex items-center gap-1">
                <Mail className="w-3.5 h-3.5 text-slate-500" /> {personalInfo.email}
              </span>
            </div>
          </div>

          <div className="flex sm:flex-col gap-2 shrink-0">
            <button
              onClick={() => {
                playClick();
                onHireClick?.();
              }}
              className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold text-xs py-2 px-3.5 rounded-lg transition-all shadow-md shadow-cyan-500/20"
            >
              Hire Me
            </button>
            <button
              onClick={() => {
                playClick();
                onOpenResume?.();
              }}
              className="bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs py-2 px-3 rounded-lg border border-slate-700 flex items-center justify-center gap-1.5 transition-colors"
            >
              <Download className="w-3.5 h-3.5" /> Resume
            </button>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex gap-2 mt-6 pt-4 border-t border-slate-800/80">
          <button
            onClick={() => {
              playClick();
              setActiveTab('bio');
            }}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
              activeTab === 'bio'
                ? 'bg-slate-800 text-cyan-400 border border-slate-700'
                : 'text-slate-400 hover:text-white hover:bg-slate-900'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" /> Story & Bio
          </button>
          <button
            onClick={() => {
              playClick();
              setActiveTab('skills');
            }}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
              activeTab === 'skills'
                ? 'bg-slate-800 text-cyan-400 border border-slate-700'
                : 'text-slate-400 hover:text-white hover:bg-slate-900'
            }`}
          >
            <Code className="w-3.5 h-3.5" /> Technical Skills
          </button>
          <button
            onClick={() => {
              playClick();
              setActiveTab('experience');
            }}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
              activeTab === 'experience'
                ? 'bg-slate-800 text-cyan-400 border border-slate-700'
                : 'text-slate-400 hover:text-white hover:bg-slate-900'
            }`}
          >
            <Briefcase className="w-3.5 h-3.5" /> Experience & Education
          </button>
        </div>
      </div>

      {/* Tab Content */}
      <div className="flex-1 overflow-y-auto p-6">
        {activeTab === 'bio' && (
          <div className="space-y-6 max-w-3xl">
            <div className="space-y-3 text-xs md:text-sm text-slate-300 leading-relaxed">
              <p>
                Hello! I'm <strong className="text-white font-semibold">Danis</strong>, a web developer and Information Technology student currently completing my industrial internship.
              </p>
              <p>
                Ever since writing my first lines of HTML, CSS, and JavaScript, my passion has been building intuitive, lightning-fast digital products. I specialize in combining modern frameworks like <span className="text-cyan-300 font-mono">Astro</span>, <span className="text-cyan-300 font-mono">React</span>, and <span className="text-cyan-300 font-mono">Tailwind CSS</span> with solid IT infrastructure fundamentals (DNS, Cloudflare, server deployments, API integration).
              </p>
              <p>
                Whether you need a high-converting landing page to showcase your business, a custom web dashboard, or a website makeover to make it faster and mobile-friendly, I bring hands-on dedication, clean code, and transparent communication to every project.
              </p>
            </div>

            {/* Quick Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-slate-800">
              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                <GraduationCap className="w-5 h-5 text-cyan-400 mb-2" />
                <h4 className="text-xs font-bold text-white">Diploma in IT</h4>
                <p className="text-[11px] text-slate-400 mt-1">Strong foundations in networking, software architecture, and databases.</p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                <Terminal className="w-5 h-5 text-blue-400 mb-2" />
                <h4 className="text-xs font-bold text-white">Modern Web Stack</h4>
                <p className="text-[11px] text-slate-400 mt-1">TypeScript, Astro, Next.js, Tailwind CSS, and REST API architectures.</p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                <Globe className="w-5 h-5 text-emerald-400 mb-2" />
                <h4 className="text-xs font-bold text-white">Freelance Ready</h4>
                <p className="text-[11px] text-slate-400 mt-1">Fast turnaround, SEO optimized, and seamless domain/deployment setup.</p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'skills' && (
          <div className="space-y-6">
            <p className="text-xs text-slate-400">
              My core technical proficiencies across frontend development, backend logic, and IT cloud infrastructure:
            </p>

            <div className="space-y-5">
              {skillCategories.map((group, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-slate-900/50 border border-slate-800 space-y-3">
                  <h3 className="text-xs font-bold text-cyan-300 uppercase tracking-wider font-mono">
                    {group.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill.name}
                        className="text-[11px] font-medium px-2.5 py-1 rounded-md bg-slate-950 border border-slate-800 text-slate-300"
                      >
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'experience' && (
          <div className="space-y-6">
            <div className="space-y-4">
              {experience.map((item, idx) => (
                <div
                  key={idx}
                  className="relative pl-6 pb-6 border-l-2 border-slate-800 last:border-l-transparent last:pb-0"
                >
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-slate-900 border-2 border-cyan-400 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  </div>

                  <div className="bg-slate-900/70 border border-slate-800 rounded-xl p-4 space-y-2">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h3 className="text-sm font-bold text-white">{item.role}</h3>
                      <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-800 text-cyan-300 border border-slate-700">
                        {item.period}
                      </span>
                    </div>

                    <div className="text-xs text-slate-400 font-medium">
                      {item.company} &bull; <span className="text-cyan-400/90">{item.type}</span>
                    </div>

                    <ul className="space-y-1.5 pt-2">
                      {item.description.map((bullet, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-2 text-xs text-slate-300">
                          <CheckCircle className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-800/80">
                      {item.skills.map((skill) => (
                        <span
                          key={skill}
                          className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Education Box */}
            <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800 flex items-start gap-3">
              <GraduationCap className="w-6 h-6 text-cyan-400 shrink-0 mt-1" />
              <div>
                <h4 className="text-sm font-bold text-white">{personalInfo.education.degree}</h4>
                <p className="text-xs text-slate-400">{personalInfo.education.school} &bull; {personalInfo.education.period}</p>
                <p className="text-xs text-cyan-400 font-mono mt-1">{personalInfo.education.status}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
