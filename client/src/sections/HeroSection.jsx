import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight, FileDown, Sparkles, Terminal, Compass } from 'lucide-react';
import { profile } from '../data/portfolioData';
import { HeroScene } from '../components/three/HeroScene';
import { ArchitecturalShowcase } from '../components/three/ArchitecturalShowcase';
import { DecryptText } from '../components/react-bits/DecryptText';
import { ResumeModal } from '../components/common/ResumeModal';

export const HeroSection = () => {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleSpatialNavigate = (destinationId) => {
    if (destinationId === 'projects') {
      navigate('/projects');
    } else {
      const el = document.getElementById(destinationId);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Typography & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Status pill badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-brand-lime/30 text-xs font-mono text-white">
              <span className="w-2 h-2 rounded-full bg-brand-lime animate-ping" />
              <span className="text-brand-lime font-semibold">Active Developer</span>
              <span className="text-neutral-500">•</span>
              <span className="text-dark-gray">{profile.university}</span>
            </div>

            {/* Main Greeting with Decrypt Effect */}
            <div className="space-y-2">
              <p className="text-sm sm:text-base font-mono text-brand-cyan tracking-wider uppercase">
                Hello, my name is
              </p>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-none">
                <DecryptText text="Apoorv Sharma" speed={45} className="text-white hover:text-brand-lime transition-colors" />
              </h1>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold bg-gradient-to-r from-white via-neutral-200 to-brand-accent bg-clip-text text-transparent">
                {profile.headline}
              </h2>
            </div>

            {/* Sub-headline & Tagline */}
            <p className="text-base sm:text-lg text-dark-gray leading-relaxed max-w-xl">
              {profile.tagline} Building modern full-stack MERN architectures, SaaS platforms, and agentic AI systems that scale.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link
                to="/projects"
                className="px-6 py-3.5 rounded-xl bg-brand-accent hover:bg-brand-accent/90 text-white font-semibold text-sm flex items-center gap-2 shadow-lg glow-accent transition-all group"
              >
                <span>View Flagship Projects</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>

              <button
                onClick={() => setIsResumeModalOpen(true)}
                className="px-5 py-3.5 rounded-xl glass-panel border border-white/10 hover:border-brand-lime/50 text-white font-semibold text-sm flex items-center gap-2 transition-all hover:bg-white/5"
              >
                <FileDown size={16} className="text-brand-lime" />
                <span>Resume (PDF / DOCX)</span>
              </button>

              <a
                href="#contact"
                className="px-4 py-3.5 rounded-xl text-dark-gray hover:text-white text-sm font-medium transition-colors"
              >
                Let's Connect →
              </a>
            </div>

            {/* Tech badges strip */}
            <div className="pt-4 flex items-center gap-2 text-xs font-mono text-dark-gray flex-wrap">
              <span className="text-neutral-500">Core Stack:</span>
              <span className="px-2 py-1 rounded bg-white/5 border border-white/5 text-neutral-300">React.js</span>
              <span className="px-2 py-1 rounded bg-white/5 border border-white/5 text-neutral-300">Node / Express</span>
              <span className="px-2 py-1 rounded bg-white/5 border border-white/5 text-neutral-300">MongoDB</span>
              <span className="px-2 py-1 rounded bg-white/5 border border-white/5 text-brand-cyan">Three.js</span>
              <span className="px-2 py-1 rounded bg-white/5 border border-white/5 text-brand-lime">Agentic AI</span>
            </div>
          </div>

          {/* Right Column: Interactive 3D Focal Sculpture */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <HeroScene />
          </div>
        </div>

        {/* Highlight Stats Strip */}
        <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 sm:p-6 rounded-2xl glass-panel border border-white/10">
          {profile.stats.map((stat, idx) => (
            <div key={idx} className="p-3 text-center sm:text-left border-r last:border-r-0 border-white/5">
              <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono flex items-center justify-center sm:justify-start gap-1">
                <span className="text-brand-lime">{stat.value}</span>
              </div>
              <div className="text-xs text-dark-gray mt-1 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Architectural 3D Signage Interactive Wayfinding */}
        <div className="mt-12">
          <div className="text-center max-w-xl mx-auto mb-4">
            <p className="text-xs font-mono uppercase tracking-widest text-brand-lime">
              Spatial Navigation Hub
            </p>
            <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
              Architectural Wayfinding & Signage
            </h3>
            <p className="text-xs sm:text-sm text-dark-gray mt-1">
              Inspired by the minimal CROS architectural signage system. Rotate the 3D scene and click signage blocks to navigate destinations.
            </p>
          </div>
          <ArchitecturalShowcase onNavigate={handleSpatialNavigate} />
        </div>
      </div>

      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />
    </section>
  );
};
