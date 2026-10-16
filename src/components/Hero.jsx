import React, { useState } from 'react';
import { ChevronDown, Download, ExternalLink, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Hero() {
  const { personal } = portfolioData;
  const [imgError, setImgError] = useState(false);

  const handleResumeDownload = () => {
    // Looks for resume.pdf in the public/ folder
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Boya_Ajay_Varma_Resume.pdf';
    link.click();
  };

  return (
    <section className="max-w-4xl mx-auto px-6 pt-16 pb-20 text-center">
      {/* Avatar Container with Status Badge */}
      <div className="flex justify-center mb-6">
        <div className="relative group">
          <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border-2 border-neutral-700/80 shadow-2xl bg-neutral-900 flex items-center justify-center">
            {!imgError && personal.avatarUrl ? (
              <img
                src={personal.avatarUrl}
                alt={personal.name}
                onError={() => setImgError(true)}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            ) : (
              /* Stylized Monogram Fallback */
              <div className="w-full h-full bg-gradient-to-br from-neutral-800 via-neutral-900 to-neutral-950 flex flex-col items-center justify-center text-neutral-300">
                <span className="text-xl sm:text-2xl font-bold font-mono tracking-wider text-white">
                  {personal.initials}
                </span>
                <span className="text-[10px] text-neutral-500 font-mono mt-0.5">
                  Bengaluru
                </span>
              </div>
            )}
          </div>

          {/* Status Badge */}
          {personal.isOpenToWork && (
            <div className="absolute bottom-1 right-1 flex items-center gap-1.5 bg-neutral-950 border border-neutral-800 px-2.5 py-0.5 rounded-full text-[10px] font-mono text-emerald-400 shadow-md">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              Open to Roles
            </div>
          )}
        </div>
      </div>

      {/* Greeting */}
      <p className="text-neutral-400 text-sm sm:text-base font-normal tracking-wide mb-3 flex items-center justify-center gap-1.5">
        Hi, I'm {personal.shortName}{' '}
        <span className="inline-block transform origin-bottom-right hover:rotate-12 transition-transform duration-200">
          👋
        </span>
      </p>

      {/* Main Headline (Figma typography replica) */}
      <h1 className="text-3xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-neutral-100 max-w-3xl mx-auto leading-[1.15] mb-6">
        {personal.headline}
      </h1>

      {/* Value Proposition Description */}
      <p className="text-neutral-400 text-sm sm:text-base max-w-xl mx-auto font-normal leading-relaxed mb-8">
        {personal.subheadline}
      </p>

      {/* Action Buttons */}
      <div className="flex flex-wrap items-center justify-center gap-3">
        <a
          href="#projects"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-neutral-950 text-xs sm:text-sm font-semibold hover:bg-neutral-200 transition-colors shadow-lg"
        >
          <span>Explore Projects</span>
          <ChevronDown className="w-3.5 h-3.5" />
        </a>

        <button
          onClick={handleResumeDownload}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-neutral-900 border border-neutral-700/80 text-neutral-300 hover:text-white hover:border-neutral-500 text-xs sm:text-sm font-medium transition-colors"
          title="Download PDF Resume"
        >
          <span>Download Resume</span>
          <Download className="w-3.5 h-3.5 text-neutral-400" />
        </button>
      </div>
    </section>
  );
}
