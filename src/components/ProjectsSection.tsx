import React, { useState } from 'react';
import { projects } from '../data/portfolio';
import { Search, ArrowUpRight } from 'lucide-react';

export const ProjectsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

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
    <section id="projects" className="py-16 md:py-20 relative bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-slate-900 border border-slate-800 text-slate-300">
              Proof of Work
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Selected Projects &amp; Case Studies
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              Real-world software built with attention to performance metrics, user experience, and scalable cloud infrastructure.
            </p>
          </div>

          {/* Filters & Search */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex space-x-1 bg-slate-900 border border-slate-800 p-1 rounded-xl">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 text-xs rounded-lg font-medium transition-all ${
                    selectedCategory === cat
                      ? 'bg-cyan-500 text-slate-950 font-semibold shadow-sm'
                      : 'text-slate-400 hover:text-white hover:bg-slate-800'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="relative">
              <Search className="w-3.5 h-3.5 absolute left-3 top-2.5 text-slate-500" />
              <input
                type="text"
                placeholder="Filter by tech..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-slate-900 border border-slate-800 rounded-xl pl-8 pr-3 py-1.5 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-500"
              />
            </div>
          </div>
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 overflow-hidden flex flex-col justify-between transition-all duration-200 shadow-xl group"
            >
              {/* Project Visual / Thumbnail */}
              <div className="relative aspect-[16/9] overflow-hidden bg-slate-950">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  decoding="async"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-slate-950/85 backdrop-blur-md px-3 py-1 rounded-full text-xs font-mono border border-slate-800 text-slate-300">
                  {project.category}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-8 space-y-5 flex-1 flex flex-col justify-between">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Problem & Solution Box */}
                  <div className="space-y-2 pt-2 border-t border-slate-800/80">
                    <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 text-xs">
                      <strong className="text-slate-400 font-semibold block mb-0.5">The Challenge:</strong>
                      <span className="text-slate-300">{project.problem}</span>
                    </div>

                    <div className="p-3 rounded-xl bg-cyan-950/20 border border-cyan-900/30 text-xs">
                      <strong className="text-cyan-400 font-semibold block mb-0.5">Engineered Solution:</strong>
                      <span className="text-slate-300">{project.solution}</span>
                    </div>
                  </div>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-mono px-2.5 py-1 rounded-md bg-slate-800/90 text-slate-300 border border-slate-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="pt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-3">
                  <span className="text-[11px] font-mono text-slate-500">
                    Case study available on request
                  </span>

                  <a
                    href="#contact"
                    className="text-xs text-slate-400 hover:text-cyan-400 flex items-center gap-1 font-medium transition-colors"
                  >
                    Discuss a similar build <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
