import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Terminal, Layers, ArrowUpRight } from 'lucide-react';
import { HeroSection } from '../sections/HeroSection';
import { AboutSection } from '../sections/AboutSection';
import { SkillsSection } from '../sections/SkillsSection';
import { TimelineSection } from '../sections/TimelineSection';
import { CertificationsSection } from '../sections/CertificationsSection';
import { ContactSection } from '../sections/ContactSection';
import { AuroraBackground } from '../components/react-bits/AuroraBackground';
import { projects } from '../data/portfolioData';

export const HomePage = () => {
  return (
    <AuroraBackground>
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />

        {/* Dedicated Projects Gateway Section */}
        <section id="projects" className="py-20 lg:py-24 relative border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="p-8 sm:p-12 rounded-3xl glass-panel border border-brand-accent/30 bg-gradient-to-br from-brand-accent/10 via-dark-surface to-dark-surface/90 relative overflow-hidden">
              {/* Architectural accent corner */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-lime/10 blur-2xl pointer-events-none" />

              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 relative z-10">
                <div className="space-y-4 max-w-2xl">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-lime/15 border border-brand-lime/30 text-xs font-mono text-brand-lime">
                    <Sparkles size={13} />
                    <span>SEPARATE DEDICATED EXHIBITION</span>
                  </div>
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
                    Explore Flagship Systems in Dedicated Gallery
                  </h2>
                  <p className="text-sm sm:text-base text-dark-gray leading-relaxed">
                    Featuring <strong className="text-white">Webnetic Studios</strong>, <strong className="text-white">FuseOne Agentic AI</strong>, <strong className="text-white">Codec Tech Enterprise Portal</strong>, and <strong className="text-white">E-Commerce Automation</strong> on an exclusive page powered by the interactive <span className="text-brand-lime font-mono">GradientASCII</span> component.
                  </p>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {projects.map((p) => (
                      <span
                        key={p.id}
                        className="px-3 py-1 text-xs font-mono rounded-lg bg-white/5 border border-white/5 text-neutral-300"
                      >
                        {p.title.split('—')[0]}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0">
                  <Link
                    to="/projects"
                    className="w-full sm:w-auto px-8 py-4 rounded-xl bg-brand-lime text-black font-extrabold text-sm flex items-center justify-center gap-2 shadow-xl hover:bg-brand-lime/90 transition-all glow-lime group"
                  >
                    <span>Enter Dedicated Projects Gallery</span>
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <TimelineSection />
        <CertificationsSection />
        <ContactSection />
      </main>
    </AuroraBackground>
  );
};
