import React, { useState } from 'react';
import { Mail, Check, ArrowRight, Phone, MapPin } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Footer() {
  const { personal } = portfolioData;
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <footer
      id="contact"
      className="border-t border-neutral-800/60 bg-[#09090b] py-20 px-6 text-center"
    >
      <div className="max-w-3xl mx-auto">
        <span className="text-xs font-mono uppercase text-emerald-400 tracking-widest block mb-3">
          Available for Hiring
        </span>

        {/* Big Statement Headline */}
        <h2 className="text-3xl sm:text-5xl font-medium tracking-tight text-neutral-100 mb-6">
          Looking for a high-impact Backend & AI engineer?
        </h2>

        <p className="text-neutral-400 text-sm sm:text-base max-w-lg mx-auto mb-8">
          Currently based in {personal.location}{' '}
          {personal.openToRelocate && 'and open to relocation'}. Let's discuss
          backend engineering roles, AI application teams, and technical
          opportunities.
        </p>

        {/* Primary Contact CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          <button
            onClick={copyEmail}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-neutral-950 font-semibold text-sm hover:bg-neutral-200 transition-colors shadow-xl"
          >
            {copied ? (
              <Check className="w-4 h-4 text-emerald-600" />
            ) : (
              <Mail className="w-4 h-4 text-neutral-700" />
            )}
            <span>{copied ? 'Email Address Copied!' : 'Copy Email Address'}</span>
          </button>

          <a
            href={`mailto:${personal.email}`}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-neutral-900 border border-neutral-700 text-neutral-200 hover:text-white font-medium text-sm transition-colors"
          >
            <span>Send Direct Email</span>
            <ArrowRight className="w-4 h-4 text-neutral-400" />
          </a>
        </div>

        {/* Direct Phone & Details */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-neutral-400 mb-12">
          <div className="flex items-center gap-1.5">
            <Phone className="w-3.5 h-3.5 text-neutral-500" />
            <span>{personal.phone}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-neutral-500" />
            <span>{personal.location} (Open to Relocate)</span>
          </div>
        </div>

        {/* Bottom Metadata & Links */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-neutral-500 pt-8 border-t border-neutral-900 gap-4">
          <div>
            © {new Date().getFullYear()} {personal.name} • All Rights Reserved
          </div>

          <div className="flex items-center gap-4">
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-neutral-300 transition-colors"
            >
              GitHub
            </a>
            <a
              href={personal.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-neutral-300 transition-colors"
            >
              LeetCode
            </a>

            {personal.linkedin ? (
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-neutral-300 transition-colors"
              >
                LinkedIn
              </a>
            ) : (
              <>
                <span className="text-neutral-700">|</span>
                <span className="text-neutral-600">LinkedIn (Recovery in Progress)</span>
              </>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
