import React from 'react';
import { Code2, Trophy, ExternalLink, GraduationCap } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function LeetCodeStrip() {
  const { personal, education } = portfolioData;

  return (
    <section className="max-w-5xl mx-auto px-6 py-12 space-y-4">
      {/* DSA & LeetCode Box */}
      <div className="card-border rounded-xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 font-mono font-bold text-lg shrink-0">
            <Code2 className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-neutral-100">
              Data Structures & Algorithmic Problem Solving
            </h3>
            <p className="text-xs text-neutral-400 mt-0.5">
              Consistent coding practice in Java & Python. Solutions cataloged in public repository.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3 shrink-0">
          <a
            href={personal.neetcodeSubmissions}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-lg bg-neutral-900 border border-neutral-800 text-xs font-mono text-neutral-300 hover:text-white transition-colors"
          >
            NeetCode Repo ↗
          </a>
          <a
            href={personal.leetcode}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-lg bg-white text-neutral-950 text-xs font-mono font-semibold hover:bg-neutral-200 transition-colors shadow-md"
          >
            LeetCode Profile ↗
          </a>
        </div>
      </div>

      {/* Education & Credential Card */}
      <div className="card-border rounded-xl p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-neutral-900/30">
        <div className="flex items-center gap-3.5">
          <div className="w-9 h-9 rounded-lg bg-neutral-800/80 border border-neutral-700/60 flex items-center justify-center text-neutral-300 shrink-0">
            <GraduationCap className="w-4 h-4" />
          </div>
          <div>
            <div className="text-xs font-mono text-neutral-400">
              {education.degree} • <span className="text-emerald-400">{education.cgpa} CGPA</span>
            </div>
            <div className="text-sm font-medium text-neutral-200">
              {education.college}, {education.location} ({education.year})
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 text-xs font-mono text-amber-400/90 bg-amber-950/40 border border-amber-800/40 px-3 py-1.5 rounded-lg">
          <Trophy className="w-3.5 h-3.5 text-amber-400" />
          <span>{education.honors}</span>
        </div>
      </div>
    </section>
  );
}
