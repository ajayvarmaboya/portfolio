import React, { useState } from 'react';
import { Mail, Check } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Navbar() {
  const [copied, setCopied] = useState(false);
  const { personal } = portfolioData;

  const copyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <header className="max-w-5xl mx-auto px-6 pt-8 pb-6 flex items-center justify-between border-b border-neutral-800/50">
      {/* Left: Email with Quick Copy */}
      <div className="relative group">
        <button
          onClick={copyEmail}
          className="flex items-center gap-2 text-xs sm:text-sm text-neutral-400 hover:text-white transition-colors duration-200 font-mono"
          title="Click to copy email"
        >
          {copied ? (
            <Check className="w-4 h-4 text-emerald-400 animate-in fade-in" />
          ) : (
            <Mail className="w-4 h-4 text-neutral-500 group-hover:text-neutral-300 transition-colors" />
          )}
          <span>{personal.email}</span>
          {copied && (
            <span className="text-[11px] bg-emerald-950 text-emerald-400 border border-emerald-800/80 px-2 py-0.5 rounded ml-1 animate-in fade-in">
              Copied!
            </span>
          )}
        </button>
      </div>

      {/* Right: Social & Profile Navigation Links */}
      <nav className="flex items-center gap-4 sm:gap-6 text-xs sm:text-sm text-neutral-400 font-mono">
        <a
          href={personal.github}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition-colors"
        >
          GitHub
        </a>
        <span className="text-neutral-700">/</span>
        <a
          href={personal.leetcode}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition-colors"
        >
          LeetCode
        </a>

        {personal.linkedin && (
          <>
            <span className="text-neutral-700">/</span>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              LinkedIn
            </a>
          </>
        )}

        <span className="text-neutral-700">/</span>
        <a
          href="#contact"
          className="hover:text-white transition-colors text-neutral-300"
        >
          Contact
        </a>
      </nav>
    </header>
  );
}
