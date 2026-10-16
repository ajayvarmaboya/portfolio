import React, { useState } from 'react';
import { ExternalLink, ChevronDown, ChevronUp, Layers, CheckCircle2 } from 'lucide-react';
import { GithubIcon } from './Icons';
import { portfolioData } from '../data/portfolioData';

export default function Projects() {
  const { featuredProjects, archivedProjects } = portfolioData;
  const [showArchive, setShowArchive] = useState(false);

  // Badge color mapping
  const badgeColors = {
    emerald: 'bg-emerald-950/80 text-emerald-400 border-emerald-800/50',
    blue: 'bg-blue-950/80 text-blue-400 border-blue-800/50',
    purple: 'bg-purple-950/80 text-purple-400 border-purple-800/50',
    amber: 'bg-amber-950/80 text-amber-400 border-amber-800/50',
  };

  return (
    <section id="projects" className="max-w-5xl mx-auto px-6 py-16 border-t border-neutral-800/40">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
        <div>
          <span className="text-xs font-mono uppercase text-neutral-500 tracking-wider">
            Engineered Systems
          </span>
          <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-neutral-100 mt-1">
            Featured Projects
          </h2>
        </div>
        <p className="text-xs text-neutral-400 max-w-sm">
          Production-grade implementations with verified architecture, unit evaluations, and clean codebases.
        </p>
      </div>

      {/* Featured Projects List */}
      <div className="space-y-6">
        {featuredProjects.map((project) => (
          <div
            key={project.id}
            className="card-border rounded-xl p-6 sm:p-8 transition-all duration-300 hover:border-neutral-700"
          >
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span
                    className={`px-2.5 py-0.5 rounded text-[11px] font-mono border ${
                      badgeColors[project.badgeColor] || badgeColors.emerald
                    }`}
                  >
                    {project.category}
                  </span>
                  {project.badge && (
                    <span className="text-xs text-neutral-500 font-mono">
                      • {project.badge}
                    </span>
                  )}
                </div>
                <h3 className="text-xl font-semibold text-neutral-100">
                  {project.title}
                </h3>
              </div>

              {/* Action Links */}
              <div className="flex items-center gap-3 shrink-0">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-neutral-300 hover:text-white px-3 py-1.5 rounded-lg bg-neutral-900 border border-neutral-800 hover:border-neutral-700 transition-colors"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>Repository</span>
                  </a>
                )}
                {project.liveDemo && (
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-neutral-300 hover:text-white px-3 py-1.5 rounded-lg bg-neutral-900 border border-neutral-800 hover:border-neutral-700 transition-colors"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>Live Demo</span>
                  </a>
                )}
              </div>
            </div>

            <p className="text-xs sm:text-sm text-neutral-400 mb-5 leading-relaxed">
              {project.description}
            </p>

            {/* Architecture Highlights */}
            {project.highlights && project.highlights.length > 0 && (
              <div className="mb-5 space-y-1.5 bg-neutral-950/50 border border-neutral-800/60 rounded-lg p-3.5">
                {project.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-neutral-300">
                    <span className="text-emerald-500/80 mt-0.5">•</span>
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            )}

            {/* Tech Badges */}
            <div className="flex flex-wrap gap-2 text-[11px] font-mono text-neutral-400">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="px-2 py-1 rounded bg-neutral-900 border border-neutral-800/80"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Expandable Archive Section */}
      <div className="mt-10 text-center">
        <button
          onClick={() => setShowArchive(!showArchive)}
          className="inline-flex items-center gap-2 text-xs font-mono text-neutral-400 hover:text-white px-4 py-2 rounded-lg bg-neutral-900/60 border border-neutral-800 hover:border-neutral-700 transition-all"
        >
          <Layers className="w-3.5 h-3.5" />
          <span>
            {showArchive ? 'Hide Project Archive' : 'View Project Archive (4 More)'}
          </span>
          {showArchive ? (
            <ChevronUp className="w-3.5 h-3.5" />
          ) : (
            <ChevronDown className="w-3.5 h-3.5" />
          )}
        </button>

        {showArchive && (
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 text-left animate-in fade-in duration-300">
            {archivedProjects.map((arch, idx) => (
              <div
                key={idx}
                className="card-border rounded-xl p-5 border border-neutral-800/80 bg-neutral-900/40"
              >
                <h4 className="text-sm font-semibold text-neutral-200 mb-1.5">
                  {arch.title}
                </h4>
                <p className="text-xs text-neutral-400 mb-3 leading-relaxed">
                  {arch.description}
                </p>
                <div className="flex flex-wrap gap-1.5 text-[10px] font-mono text-neutral-500">
                  {arch.tech.map((t) => (
                    <span
                      key={t}
                      className="px-1.5 py-0.5 rounded bg-neutral-950 border border-neutral-800"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
