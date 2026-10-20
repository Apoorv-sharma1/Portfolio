import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, FileDown, Sparkles, Code2, Terminal } from 'lucide-react';
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
      <div style={{ width: '100%', height: '600px', position: 'relative' }}>
        <GradientASCII
          colors={["#4f8ff7", "#e8f0ff", "#b4d0ff", "#7cb4fb"]}
          shape="horizon"
          characters=" =+xX0S8#@"
          cellSize={18}
          density={0.8}
          lightMode={!isDark}
        />

        {/* Backdrop gradient to blend seamlessly into page content */}
        <div
          className={`absolute inset-0 pointer-events-none transition-colors duration-300 ${
            isDark
              ? 'bg-gradient-to-b from-[#0B0D12]/40 via-[#0B0D12]/20 to-[#0B0D12]'
              : 'bg-gradient-to-b from-white/30 via-white/10 to-[#F8FAFC]'
          }`}
        />

        {/* Content Overlaid Centered on the 600px Horizon */}
        <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          {/* Status pill badge */}
          <div
            className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono mb-4 backdrop-blur-md border shadow-sm transition-all ${
              isDark
                ? 'bg-black/60 border-brand-lime/40 text-neutral-200'
                : 'bg-white/90 border-blue-400/40 text-slate-700 shadow-blue-500/10'
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
            <span className={isDark ? 'text-brand-lime font-semibold' : 'text-blue-600 font-semibold'}>
              Open to Opportunities
            </span>
            <span className="opacity-40">•</span>
            <span>Jaipur, India</span>
          </div>

          {/* Intro text */}
          <p
            className={`text-xs sm:text-sm font-mono tracking-widest uppercase mb-2 ${
              isDark ? 'text-brand-cyan' : 'text-blue-600'
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
            className={`text-lg sm:text-2xl lg:text-3xl font-semibold mb-4 max-w-2xl ${
              isDark
                ? 'bg-gradient-to-r from-white via-neutral-200 to-brand-accent bg-clip-text text-transparent'
                : 'bg-gradient-to-r from-slate-900 via-blue-900 to-blue-600 bg-clip-text text-transparent'
            }`}
          >
            {profile.headline}
          </h2>

          {/* Short tagline */}
          <p
            className={`text-sm sm:text-base max-w-2xl leading-relaxed mb-6 ${
              isDark ? 'text-dark-gray' : 'text-slate-600 font-medium'
            }`}
          >
            {profile.tagline}
          </p>

          {/* Call-to-Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => setIsResumeModalOpen(true)}
              className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm flex items-center gap-2 shadow-lg shadow-blue-500/25 transition-all hover:-translate-y-0.5"
            >
              <FileDown size={16} />
              <span>Download CV</span>
            </button>

            <Link
              to="/projects"
              className={`px-5 py-3 rounded-xl font-semibold text-sm flex items-center gap-2 border backdrop-blur-md transition-all hover:-translate-y-0.5 ${
                isDark
                  ? 'bg-white/10 hover:bg-white/15 border-white/15 text-white'
                  : 'bg-white/90 hover:bg-white border-slate-300 text-slate-800 shadow-sm'
              }`}
            >
              <span>Explore Projects</span>
              <ArrowRight size={15} />
            </Link>

            <a
              href="#contact"
              className={`px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                isDark ? 'text-dark-gray hover:text-white' : 'text-slate-600 hover:text-blue-600'
              }`}
            >
              Contact Me →
            </a>
          </div>
        </div>
      </div>

      {/* Stats Counter Strip */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 relative z-20 pb-12">
        <div
          className={`grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 sm:p-6 rounded-2xl border backdrop-blur-md shadow-xl transition-colors ${
            isDark
              ? 'bg-[#131720]/80 border-white/10'
              : 'bg-white/90 border-slate-200/80 shadow-slate-200/50'
          }`}
        >
          {profile.stats.map((stat, idx) => (
            <div
              key={idx}
              className="p-3 text-center sm:text-left border-r last:border-r-0 border-slate-200/50 dark:border-white/5"
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
                  isDark ? 'text-dark-gray' : 'text-slate-500'
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
