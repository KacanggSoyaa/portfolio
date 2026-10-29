import React, { useState } from 'react';
import { projects } from '../../data/portfolio';
import type { Project } from '../../types';
import { ExternalLink, Filter, Sparkles, CheckCircle2, Search } from 'lucide-react';
import { playClick } from '../../utils/sound';

const GithubIcon: React.FC<{ className?: string }> = ({ className = "w-3.5 h-3.5" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

interface ProjectsAppProps {
  onHireClick?: () => void;
}

export const ProjectsApp: React.FC<ProjectsAppProps> = ({ onHireClick }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeProject, setActiveProject] = useState<Project | null>(projects[0]);

  const categories = ['All', 'Full-Stack', 'Web Dev', 'IT Systems'];

  const filteredProjects = projects.filter((project) => {
    const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory;
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="flex flex-col h-full bg-slate-950/90 text-slate-100 font-sans select-text">
      {/* Top Filter & Search Bar */}
      <div className="p-4 border-b border-slate-800 bg-slate-900/60 backdrop-blur-md flex flex-wrap items-center justify-between gap-3 sticky top-0 z-10">
        <div className="flex items-center space-x-2">
          <Filter className="w-4 h-4 text-cyan-400" />
          <div className="flex space-x-1 bg-slate-800/80 p-1 rounded-lg border border-slate-700/60">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  playClick();
                  setSelectedCategory(cat);
                }}
                className={`px-3 py-1 text-xs rounded-md font-medium transition-all ${
                  selectedCategory === cat
                    ? 'bg-cyan-500 text-slate-950 shadow-sm font-semibold'
                    : 'text-slate-400 hover:text-white hover:bg-slate-700/50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="relative flex-1 min-w-[180px] max-w-xs">
          <Search className="w-3.5 h-3.5 absolute left-3 top-2.5 text-slate-500" />
          <input
            type="text"
            placeholder="Search projects or stack..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-slate-900/90 border border-slate-700/80 rounded-lg pl-9 pr-3 py-1 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
          />
        </div>
      </div>

      {/* Main Content: Split View / Grid */}
      <div className="flex-1 overflow-y-auto p-4 md:p-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left List of Projects */}
        <div className="lg:col-span-7 space-y-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs uppercase tracking-wider text-slate-400 font-mono">
              Showing {filteredProjects.length} Projects
            </span>
            <span className="text-xs text-cyan-400/90 bg-cyan-950/60 border border-cyan-800/60 px-2 py-0.5 rounded-full flex items-center gap-1">
              <Sparkles className="w-3 h-3" /> Real Client & Production Ready
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {filteredProjects.map((project) => {
              const isSelected = activeProject?.id === project.id;
              return (
                <div
                  key={project.id}
                  onClick={() => {
                    playClick();
                    setActiveProject(project);
                  }}
                  className={`group relative rounded-xl border p-3 cursor-pointer transition-all duration-200 ${
                    isSelected
                      ? 'bg-slate-800/90 border-cyan-500/80 shadow-[0_0_15px_rgba(6,182,212,0.15)] ring-1 ring-cyan-500/50'
                      : 'bg-slate-900/50 border-slate-800/80 hover:border-slate-700 hover:bg-slate-900/80'
                  }`}
                >
                  <div className="relative aspect-video rounded-lg overflow-hidden mb-3 bg-slate-950">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                    <div className="absolute top-2 right-2 bg-slate-950/80 backdrop-blur-md px-2 py-0.5 rounded-full text-[10px] font-mono border border-slate-700/60 text-cyan-300">
                      {project.category}
                    </div>
                  </div>

                  <h3 className="font-semibold text-sm text-slate-100 group-hover:text-cyan-300 transition-colors line-clamp-1">
                    {project.title}
                  </h3>
                  <p className="text-xs text-slate-400 mt-1 line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1 mt-3">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700/40"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-800/40 text-slate-500">
                        +{project.tags.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Preview & Case Study Details */}
        <div className="lg:col-span-5 bg-slate-900/70 border border-slate-800/80 rounded-2xl p-5 flex flex-col justify-between sticky top-4 h-fit">
          {activeProject ? (
            <div className="space-y-4">
              <div>
                <span className="text-[10px] uppercase tracking-wider text-cyan-400 font-mono font-semibold bg-cyan-950/80 border border-cyan-800/50 px-2 py-0.5 rounded-md">
                  Case Study & Specs
                </span>
                <h2 className="text-lg font-bold text-slate-100 mt-2">
                  {activeProject.title}
                </h2>
                <p className="text-xs text-slate-300 mt-1.5 leading-relaxed">
                  {activeProject.description}
                </p>
              </div>

              {/* Problem & Solution Accordion */}
              <div className="space-y-2.5 pt-2 border-t border-slate-800">
                <div className="bg-red-950/20 border border-red-900/40 rounded-lg p-3">
                  <div className="text-[11px] font-semibold text-red-400 flex items-center gap-1.5 mb-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-400" /> The Challenge / Client Problem
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {activeProject.problem}
                  </p>
                </div>

                <div className="bg-emerald-950/20 border border-emerald-900/40 rounded-lg p-3">
                  <div className="text-[11px] font-semibold text-emerald-400 flex items-center gap-1.5 mb-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> The Engineered Solution
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {activeProject.solution}
                  </p>
                </div>
              </div>

              {/* Tech Stack Tags */}
              <div className="pt-2">
                <div className="text-[11px] font-medium text-slate-400 mb-2">Technologies Used:</div>
                <div className="flex flex-wrap gap-1.5">
                  {activeProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-mono px-2 py-0.5 rounded-md bg-slate-800/90 text-cyan-300 border border-cyan-900/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-slate-800 flex flex-col gap-2">
                <div className="flex gap-2">
                  {activeProject.liveUrl && (
                    <a
                      href={activeProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-semibold text-xs py-2 px-3 rounded-lg transition-all shadow-md shadow-cyan-950/40"
                    >
                      <ExternalLink className="w-3.5 h-3.5" /> Live Preview
                    </a>
                  )}
                  {activeProject.githubUrl && (
                    <a
                      href={activeProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs py-2 px-3 rounded-lg border border-slate-700 transition-all"
                    >
                      <GithubIcon className="w-3.5 h-3.5" /> Source
                    </a>
                  )}
                </div>

                <button
                  onClick={() => {
                    playClick();
                    onHireClick?.();
                  }}
                  className="w-full text-center text-xs text-cyan-400 hover:text-cyan-300 bg-cyan-950/30 hover:bg-cyan-950/60 border border-cyan-800/50 py-2 rounded-lg transition-colors font-medium"
                >
                  Want a project like this built for your business? &rarr;
                </button>
              </div>
            </div>
          ) : (
            <div className="text-center py-12 text-slate-500 text-xs">
              Select a project to view full case study and live preview links.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
