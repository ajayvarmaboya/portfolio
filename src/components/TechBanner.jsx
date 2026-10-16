import React from 'react';
import { portfolioData } from '../data/portfolioData';

export default function TechBanner() {
  const { techStackMarquee } = portfolioData;

  return (
    <section className="border-y border-neutral-800/60 bg-neutral-950/40 py-6 px-6">
      <div className="max-w-5xl mx-auto flex flex-wrap items-center justify-between gap-6 opacity-80">
        <div className="flex items-center gap-2 text-xs font-mono text-neutral-500 uppercase tracking-widest">
          Core Stack:
        </div>

        <div className="flex flex-wrap items-center gap-4 sm:gap-8 text-xs sm:text-sm font-mono text-neutral-400">
          {techStackMarquee.map((tech, index) => (
            <React.Fragment key={tech.name}>
              <span className="hover:text-white transition-colors cursor-default">
                {tech.name}
              </span>
              {index < techStackMarquee.length - 1 && (
                <span className="text-neutral-700 hidden sm:inline">•</span>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
