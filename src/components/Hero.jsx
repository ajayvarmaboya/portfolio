import React, { useState } from 'react';
import { ChevronDown, Download, Sparkles, MapPin } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Hero() {
  const { personal } = portfolioData;
  const [imgError, setImgError] = useState(false);

  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Boya_Ajay_Varma_Resume.pdf';
    link.click();
  };

  return (
    <section className="max-w-5xl mx-auto px-6 pt-12 sm:pt-16 pb-20">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10 lg:gap-14">
        
        {/* Left Column: Headline, Value Proposition, and Actions */}
        <div className="flex-1 text-center md:text-left">
          {/* Greeting */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900/80 border border-neutral-800 text-xs sm:text-sm text-neutral-300 font-mono mb-5">
            <span>Hi, I'm {personal.shortName}</span>
            <span className="inline-block transform origin-bottom-right hover:rotate-12 transition-transform duration-200">
              👋
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-neutral-100 leading-[1.18] mb-5">
            {personal.headline}
          </h1>

          {/* Value Proposition Description */}
          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed mb-8 max-w-xl mx-auto md:mx-0">
            {personal.subheadline}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-3.5">
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
        </div>

        {/* Right Column (Corner): Large Prominent Profile Card */}
        <div className="shrink-0 flex justify-center">
          <div className="relative group">
            {/* Ambient Background Glow */}
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-neutral-800 to-neutral-700/50 opacity-30 blur-xl group-hover:opacity-50 transition-opacity duration-500"></div>

            {/* Main Portrait Frame - Significantly enlarged */}
            <div className="relative w-52 h-52 sm:w-64 sm:h-64 lg:w-72 lg:h-72 rounded-3xl overflow-hidden border border-neutral-700/80 shadow-2xl bg-neutral-900/90 flex items-center justify-center">
              {!imgError && personal.avatarUrl ? (
                <img
                  src={personal.avatarUrl}
                  alt={personal.name}
                  onError={() => setImgError(true)}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              ) : (
                /* High-Res Stylized Monogram Fallback */
                <div className="w-full h-full bg-gradient-to-br from-neutral-800 via-neutral-900 to-neutral-950 flex flex-col items-center justify-center text-neutral-300 p-6 text-center">
                  <span className="text-4xl sm:text-5xl font-bold font-mono tracking-widest text-white mb-2">
                    {personal.initials}
                  </span>
                  <span className="text-xs text-neutral-400 font-mono">
                    {personal.role}
                  </span>
                  <div className="flex items-center gap-1 text-[11px] text-neutral-500 font-mono mt-1">
                    <MapPin className="w-3 h-3 text-neutral-500" />
                    <span>Bengaluru, India</span>
                  </div>
                </div>
              )}
            </div>

            {/* Status Beacon Badge */}
            {personal.isOpenToWork && (
              <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 flex items-center gap-1.5 bg-neutral-950/95 backdrop-blur-md border border-neutral-800 px-3 py-1 rounded-full text-[11px] font-mono text-emerald-400 shadow-xl whitespace-nowrap">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>Open to Roles</span>
              </div>
            )}
          </div>
        </div>

      </div>
    </section>
  );
}
