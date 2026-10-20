import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, FileDown } from 'lucide-react';
import { profile } from '../data/portfolioData';
import { DecryptText } from '../components/react-bits/DecryptText';
import { ResumeModal } from '../components/common/ResumeModal';
import GradientASCII from '../components/react-bits/GradientASCII';
import { useTheme } from '../context/ThemeContext';

export const HeroSection = () => {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  const { isDark } = useTheme();

  return (
    <section id="hero" className="relative w-full overflow-hidden">
      {/* 600px Interactive Background with GradientASCII */}
      <div
        style={{ width: '100%', height: '600px', position: 'relative' }}
        className="w-full bg-[#F8FAFC] dark:bg-[#0B0D12] transition-colors duration-300"
      >
        {/* Full-width interactive canvas */}
        <div className="absolute inset-0 z-0">
          <GradientASCII
            colors={["#4f8ff7", "#e8f0ff", "#b4d0ff", "#7cb4fb"]}
            shape="horizon"
            characters=" =+xX0S8#@"
            cellSize={18}
            density={0.8}
            lightMode={!isDark}
          />
        </div>

        {/* Subtle bottom fade to transition gracefully into the next section */}
        <div
          className={`absolute inset-x-0 bottom-0 h-28 pointer-events-none bg-gradient-to-t ${
            isDark
              ? 'from-[#0B0D12] to-transparent'
              : 'from-[#F8FAFC] to-transparent'
          }`}
        />

        {/* Content Overlaid Centered on the 600px Horizon */}
        <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto pointer-events-none">
          <div className="pointer-events-auto flex flex-col items-center">
            {/* Status pill badge */}
            <div
              className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono mb-4 backdrop-blur-md border shadow-sm transition-all ${
                isDark
                  ? 'bg-black/60 border-brand-lime/40 text-neutral-200'
                  : 'bg-white/95 border-blue-300/60 text-slate-700 shadow-blue-500/10'
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-sky-400 animate-ping" />
              <span className={isDark ? 'text-brand-lime font-semibold' : 'text-blue-600 font-semibold'}>
                Open to Opportunities
              </span>
              <span className="opacity-40">•</span>
              <span>Jaipur, India</span>
            </div>

            {/* Intro text */}
            <p
              className={`text-xs sm:text-sm font-mono tracking-widest uppercase mb-2 ${
                isDark ? 'text-brand-cyan' : 'text-blue-600 font-semibold'
              }`}
            >
              Hello, my name is
            </p>

            {/* Main Name Heading with Decrypt Animation */}
            <h1
              className={`text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-none mb-3 ${
                isDark ? 'text-white' : 'text-slate-900'
              }`}
            >
              <DecryptText
                text="Apoorv Sharma"
                speed={45}
                className={`hover:scale-105 transition-transform inline-block ${
                  isDark ? 'text-white hover:text-brand-lime' : 'text-slate-900 hover:text-blue-600'
                }`}
              />
            </h1>

            {/* Role & Designation */}
            <h2
              className={`text-xl sm:text-2xl lg:text-3xl font-bold mb-4 max-w-2xl ${
                isDark
                  ? 'bg-gradient-to-r from-white via-neutral-200 to-brand-accent bg-clip-text text-transparent'
                  : 'text-blue-700'
              }`}
            >
              {profile.headline}
            </h2>

            {/* Short tagline */}
            <p
              className={`text-sm sm:text-base max-w-2xl leading-relaxed mb-6 font-medium ${
                isDark ? 'text-dark-gray' : 'text-slate-700'
              }`}
            >
              {profile.tagline}
            </p>

            {/* Call-to-Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-3">
              <button
                onClick={() => setIsResumeModalOpen(true)}
                className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm flex items-center gap-2 shadow-lg shadow-blue-500/25 transition-all hover:-translate-y-0.5 cursor-pointer"
              >
                <FileDown size={16} />
                <span>Download CV</span>
              </button>

              <Link
                to="/projects"
                className={`px-5 py-3 rounded-xl font-semibold text-sm flex items-center gap-2 border backdrop-blur-md transition-all hover:-translate-y-0.5 cursor-pointer ${
                  isDark
                    ? 'bg-white/10 hover:bg-white/15 border-white/15 text-white'
                    : 'bg-white/95 hover:bg-white border-slate-300 text-slate-800 shadow-sm'
                }`}
              >
                <span>Explore Projects</span>
                <ArrowRight size={15} />
              </Link>

              <a
                href="#contact"
                className={`px-4 py-3 rounded-xl text-sm font-medium transition-colors cursor-pointer ${
                  isDark ? 'text-dark-gray hover:text-white' : 'text-slate-600 hover:text-blue-600'
                }`}
              >
                Contact Me →
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Counter Strip */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 relative z-20 pb-12">
        <div
          className={`grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 sm:p-6 rounded-2xl border backdrop-blur-md shadow-xl transition-colors ${
            isDark
              ? 'bg-[#131720]/90 border-white/10'
              : 'bg-white/95 border-slate-200/90 shadow-slate-200/60'
          }`}
        >
          {profile.stats.map((stat, idx) => (
            <div
              key={idx}
              className="p-3 text-center sm:text-left border-r last:border-r-0 border-slate-200/60 dark:border-white/5"
            >
              <div
                className={`text-2xl sm:text-3xl font-extrabold font-mono flex items-center justify-center sm:justify-start ${
                  isDark ? 'text-brand-lime' : 'text-blue-600'
                }`}
              >
                {stat.value}
              </div>
              <div
                className={`text-xs mt-1 font-medium ${
                  isDark ? 'text-dark-gray' : 'text-slate-600'
                }`}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />
    </section>
  );
};

export default HeroSection;
