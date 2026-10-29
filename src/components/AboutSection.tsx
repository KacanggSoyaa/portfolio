import React, { useState } from 'react';
import { personalInfo, skillCategories, experience } from '../data/portfolio';
import { GraduationCap, Briefcase, Code, Download, MapPin, Mail, Globe, CheckCircle, Award } from 'lucide-react';
import { playClick } from '../utils/sound';

export const AboutSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'story' | 'skills' | 'experience'>('story');

  return (
    <section id="about" className="py-14 md:py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-cyan-950/70 border border-cyan-800/50 text-cyan-400">
            Background & Expertise
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Developer Passion Backed by Solid IT Fundamentals
          </h2>
          <p className="text-xs sm:text-sm text-slate-300">
            Diploma in Information Technology student finishing up an internship, specializing in web development.
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex justify-center">
          <div className="flex space-x-2 bg-slate-900 border border-slate-800 p-1.5 rounded-2xl">
            <button
              onClick={() => {
                playClick();
                setActiveTab('story');
              }}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeTab === 'story'
                  ? 'bg-cyan-500 text-slate-950 shadow-md'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              <GraduationCap className="w-4 h-4" /> Story & Bio
            </button>
            <button
              onClick={() => {
                playClick();
                setActiveTab('skills');
              }}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeTab === 'skills'
                  ? 'bg-cyan-500 text-slate-950 shadow-md'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              <Code className="w-4 h-4" /> Skills & Stack
            </button>
            <button
              onClick={() => {
                playClick();
                setActiveTab('experience');
              }}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeTab === 'experience'
                  ? 'bg-cyan-500 text-slate-950 shadow-md'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              <Briefcase className="w-4 h-4" /> Experience
            </button>
          </div>
        </div>

        {/* Tab Panels */}
        <div className="max-w-4xl mx-auto bg-slate-900/50 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-xl">
          {activeTab === 'story' && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 border-b border-slate-800 pb-6">
                <div className="w-24 h-24 rounded-2xl bg-gradient-to-tr from-cyan-500 to-blue-600 p-1 shrink-0 shadow-lg shadow-cyan-500/20">
                  <div className="w-full h-full rounded-xl bg-slate-950 flex items-center justify-center font-mono font-bold text-3xl text-cyan-400">
                    &lt;D/&gt;
                  </div>
                </div>

                <div className="space-y-2 text-center sm:text-left">
                  <h3 className="text-2xl font-bold text-white">{personalInfo.name}</h3>
                  <p className="text-sm text-cyan-400 font-medium">{personalInfo.title}</p>
                  <p className="text-xs text-slate-400 flex flex-wrap items-center justify-center sm:justify-start gap-4 pt-1">
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-slate-500" /> {personalInfo.location}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Mail className="w-3.5 h-3.5 text-slate-500" /> {personalInfo.email}
                    </span>
                  </p>
                </div>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
                <p>
                  Hello! I'm <strong className="text-white">Danis</strong>, an Information Technology student concluding my industrial internship and taking on freelance web projects.
                </p>
                <p>
                  My love for web development started with curiosity about how high-traffic web platforms operate behind the scenes. That curiosity developed into a focused skillset: building ultra-fast static sites and full-stack web apps using <span className="text-cyan-300 font-mono">Astro</span>, <span className="text-cyan-300 font-mono">React</span>, <span className="text-cyan-300 font-mono">TypeScript</span>, and <span className="text-cyan-300 font-mono">Tailwind CSS</span>.
                </p>
                <p>
                  Because of my IT diploma background, I don't just write frontend code—I also understand networking, DNS records, SSL certificates, cloud deployment pipelines, and database modeling. This means you get a complete, production-ready website that is secure, fast, and easy to maintain.
                </p>
              </div>

              <div className="pt-6 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
                <div className="text-xs text-slate-400">
                  Currently available for freelance gigs, redesigns, and web contracts.
                </div>
                <a
                  href="#contact"
                  onClick={() => playClick()}
                  className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs py-2 px-4 rounded-xl shadow-md transition-all hover:scale-105"
                >
                  Start a Project Together &rarr;
                </a>
              </div>
            </div>
          )}

          {activeTab === 'skills' && (
            <div className="space-y-6">
              <p className="text-xs sm:text-sm text-slate-300">
                A breakdown of my technical proficiencies and hands-on tools:
              </p>

              <div className="space-y-6">
                {skillCategories.map((group, idx) => (
                  <div key={idx} className="p-5 rounded-2xl bg-slate-950/60 border border-slate-800/80 space-y-3">
                    <h4 className="text-xs font-bold text-cyan-400 uppercase tracking-wider font-mono">
                      {group.category}
                    </h4>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      {group.skills.map((skill) => (
                        <div key={skill.name} className="space-y-1">
                          <div className="flex justify-between text-xs">
                            <span className="text-slate-200 font-medium">{skill.name}</span>
                            <span className="text-cyan-400 font-mono text-[11px]">{skill.level}%</span>
                          </div>
                          <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                            <div
                              className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-blue-500"
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

          {activeTab === 'experience' && (
            <div className="space-y-8">
              <div className="space-y-6">
                {experience.map((item, idx) => (
                  <div
                    key={idx}
                    className="relative pl-6 border-l-2 border-slate-800 last:border-l-transparent space-y-2 pb-4"
                  >
                    <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-slate-950 border-2 border-cyan-400" />
                    
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h4 className="text-base font-bold text-white">{item.role}</h4>
                      <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-slate-800 text-cyan-300 border border-slate-700">
                        {item.period}
                      </span>
                    </div>

                    <div className="text-xs text-slate-400 font-medium">
                      {item.company} &bull; <span className="text-cyan-400">{item.type}</span>
                    </div>

                    <ul className="space-y-1.5 pt-2">
                      {item.description.map((b, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-2 text-xs text-slate-300">
                          <CheckCircle className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Education Box */}
              <div className="p-5 rounded-2xl bg-slate-950/70 border border-slate-800 flex items-start gap-3">
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
    </section>
  );
};
