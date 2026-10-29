import React from 'react';
import { experience, personalInfo } from '../data/portfolio';
import { GraduationCap, Briefcase, CheckCircle2, Calendar, Building2 } from 'lucide-react';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-16 md:py-20 relative bg-slate-900/30 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-slate-900 border border-slate-800 text-slate-300">
            Career Timeline
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Work Experience &amp; Academic Credentials
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            A proven record of delivering client websites and technical IT solutions through industry experience and academic training.
          </p>
        </div>

        {/* Experience & Education Container */}
        <div className="max-w-4xl mx-auto space-y-8">
          
          {/* Work History */}
          <div className="space-y-6">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-cyan-400" /> Professional Experience
            </h3>

            <div className="space-y-6">
              {experience.map((item, idx) => (
                <div
                  key={idx}
                  className="p-6 sm:p-8 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 transition-all space-y-4 shadow-lg"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800/80 pb-4">
                    <div>
                      <h4 className="text-lg font-bold text-white">{item.role}</h4>
                      <div className="text-xs text-slate-400 flex items-center gap-2 mt-1">
                        <span className="text-cyan-400 font-medium">{item.company}</span>
                        <span>&bull;</span>
                        <span className="px-2 py-0.5 rounded bg-slate-800 text-[11px] font-mono text-slate-300">
                          {item.type}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400">
                      <Calendar className="w-3.5 h-3.5 text-slate-500" />
                      <span>{item.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                    {item.description.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  {item.skills && (
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {item.skills.map((skill) => (
                        <span
                          key={skill}
                          className="text-[11px] font-mono px-2.5 py-0.5 rounded-md bg-slate-950 border border-slate-800 text-slate-400"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Education Card */}
          <div className="space-y-4 pt-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-cyan-400" /> Formal Education
            </h3>

            <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/60 border border-slate-800/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-lg">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700/60 text-cyan-400 shrink-0">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-base font-bold text-white">{personalInfo.education.degree}</h4>
                  <p className="text-xs text-slate-400 flex items-center gap-1.5">
                    <Building2 className="w-3.5 h-3.5 text-slate-500" /> {personalInfo.education.school}
                  </p>
                  <p className="text-xs text-cyan-400 font-mono pt-1">{personalInfo.education.status}</p>
                </div>
              </div>

              <div className="text-xs font-mono px-3 py-1 rounded-full bg-slate-800 text-slate-300 border border-slate-700 shrink-0">
                {personalInfo.education.period}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
