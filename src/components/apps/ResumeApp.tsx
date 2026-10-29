import React from 'react';
import { personalInfo, experience, skillCategories, projects } from '../../data/portfolio';
import { Download, Printer, ExternalLink, Mail, MapPin, Globe } from 'lucide-react';
import { playClick } from '../../utils/sound';

export const ResumeApp: React.FC = () => {
  const handlePrint = () => {
    playClick();
    window.print();
  };

  return (
    <div className="flex flex-col h-full bg-slate-900 text-slate-100 font-sans select-text overflow-y-auto">
      {/* Top Toolbar */}
      <div className="p-3 border-b border-slate-800 bg-slate-950/80 backdrop-blur flex items-center justify-between sticky top-0 z-10">
        <div className="flex items-center gap-2 text-xs font-mono text-slate-300">
          <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
          Danis_Resume_2026.pdf
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handlePrint}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors"
          >
            <Printer className="w-3.5 h-3.5" /> Print / Save PDF
          </button>
          <a
            href={`mailto:${personalInfo.email}?subject=Freelance%20Opportunity`}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold transition-colors"
          >
            <Download className="w-3.5 h-3.5" /> Request Official Copy
          </a>
        </div>
      </div>

      {/* A4 Document Canvas */}
      <div className="p-4 sm:p-8 flex justify-center">
        <div className="w-full max-w-3xl bg-white text-slate-900 rounded-lg shadow-2xl p-6 sm:p-10 space-y-6">
          {/* Header */}
          <div className="border-b border-slate-200 pb-5">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              {personalInfo.name}
            </h1>
            <p className="text-sm font-semibold text-cyan-700 mt-1">
              {personalInfo.title} &bull; Diploma in Information Technology
            </p>

            <div className="flex flex-wrap gap-4 text-xs text-slate-600 mt-3">
              <span className="flex items-center gap-1">
                <Mail className="w-3.5 h-3.5" /> {personalInfo.email}
              </span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5" /> {personalInfo.location}
              </span>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1 text-cyan-700 hover:underline"
              >
                <Globe className="w-3.5 h-3.5" /> GitHub
              </a>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400 border-b border-slate-200 pb-1 mb-2 font-mono">
              Professional Summary
            </h2>
            <p className="text-xs text-slate-700 leading-relaxed">
              {personalInfo.bio} Proven ability to ship performant web applications with Astro, Next.js, and Tailwind CSS, alongside foundational IT expertise in cloud hosting, domain configuration, and networking.
            </p>
          </div>

          {/* Work Experience */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400 border-b border-slate-200 pb-1 mb-3 font-mono">
              Experience
            </h2>
            <div className="space-y-4">
              {experience.map((item, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="flex flex-wrap justify-between items-baseline">
                    <h3 className="text-xs font-bold text-slate-900">{item.role}</h3>
                    <span className="text-[11px] font-mono text-slate-500">{item.period}</span>
                  </div>
                  <div className="text-xs font-medium text-cyan-800">
                    {item.company} &bull; {item.type}
                  </div>
                  <ul className="list-disc list-inside text-xs text-slate-700 space-y-1 pt-1">
                    {item.description.map((b, bIdx) => (
                      <li key={bIdx} className="leading-relaxed">
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400 border-b border-slate-200 pb-1 mb-2 font-mono">
              Education
            </h2>
            <div className="flex justify-between items-baseline">
              <div>
                <h3 className="text-xs font-bold text-slate-900">{personalInfo.education.degree}</h3>
                <p className="text-xs text-slate-600">{personalInfo.education.school}</p>
              </div>
              <span className="text-[11px] font-mono text-slate-500">{personalInfo.education.period}</span>
            </div>
          </div>

          {/* Technical Skills */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400 border-b border-slate-200 pb-1 mb-2 font-mono">
              Key Skills
            </h2>
            <div className="space-y-1.5 text-xs text-slate-700">
              {skillCategories.map((cat, idx) => (
                <div key={idx}>
                  <strong className="text-slate-900">{cat.category}: </strong>
                  <span>{cat.skills.map((s) => s.name).join(', ')}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Selected Projects */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400 border-b border-slate-200 pb-1 mb-2 font-mono">
              Featured Projects
            </h2>
            <div className="space-y-2">
              {projects.slice(0, 3).map((p) => (
                <div key={p.id} className="text-xs">
                  <div className="font-bold text-slate-900">
                    {p.title} &mdash; <span className="font-normal text-slate-600">{p.tags.join(', ')}</span>
                  </div>
                  <p className="text-slate-700 mt-0.5">{p.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
