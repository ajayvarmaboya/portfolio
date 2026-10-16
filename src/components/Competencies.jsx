import React from 'react';
import { Sparkles, Terminal, Database, Boxes } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const iconMap = {
  Sparkles: Sparkles,
  Terminal: Terminal,
  Database: Database,
  Boxes: Boxes,
};

export default function Competencies() {
  const { competencies } = portfolioData;

  return (
    <section className="max-w-5xl mx-auto px-6 py-20">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-neutral-100 mb-3">
          Architecting robust systems from database to agent.
        </h2>
        <p className="text-neutral-400 text-xs sm:text-sm">
          Bridging production backend engineering with modern generative AI capabilities.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {competencies.map((comp) => {
          const IconComponent = iconMap[comp.icon] || Terminal;
          return (
            <div
              key={comp.id}
              className="card-border rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="w-9 h-9 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-300 mb-5 group-hover:border-neutral-700 transition-colors">
                <IconComponent className="w-4 h-4" />
              </div>
              <h3 className="text-base font-semibold text-neutral-200 mb-2">
                {comp.title}
              </h3>
              <p className="text-xs text-neutral-400 leading-relaxed mb-4">
                {comp.description}
              </p>

              {/* Highlight Tags */}
              <div className="flex flex-wrap gap-1.5 pt-2 border-t border-neutral-800/40">
                {comp.highlights.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-mono text-neutral-500 bg-neutral-900/60 px-1.5 py-0.5 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
