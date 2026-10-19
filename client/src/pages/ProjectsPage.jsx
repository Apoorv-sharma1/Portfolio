import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, Github, ArrowUpRight, CheckCircle2, Sparkles, ArrowLeft, Terminal, Filter } from 'lucide-react';
import { projects } from '../data/portfolioData';
import { TiltCard } from '../components/react-bits/TiltCard';
import GradientASCII from '../components/react-bits/GradientASCII';

export const ProjectsPage = () => {
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Full Stack / SaaS', 'AI & Automation', 'E-Commerce'];

  const filteredProjects =
    filter === 'All'
      ? projects
      : projects.filter((p) => p.category.toLowerCase().includes(filter.toLowerCase()));

  return (
    <div className="relative min-h-screen bg-dark-bg text-[#F5F5F5] pt-24 pb-20 overflow-hidden">
      {/* Dynamic React Bits GradientASCII WebGL Background */}
      <div className="absolute top-0 left-0 right-0 h-[650px] z-0 opacity-45 pointer-events-auto overflow-hidden">
        <GradientASCII
          colors={['#1e3fd8', '#8B5CF6', '#a5d8ff', '#78F52B']}
          shape="horizon"
          characters=" =+xX0S8#@"
          cellSize={18}
          density={0.8}
          glyphOpacity={0.85}
          gradientOpacity={0.85}
          glow={0.3}
          mouseInteraction={true}
          clickEffect="wave"
        />
        {/* Soft bottom fade to blend with page content */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-dark-bg/60 to-dark-bg pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Breadcrumb / Back Link */}
        <div className="mb-6">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-xs font-mono text-dark-gray hover:text-brand-lime transition-colors px-3 py-1.5 rounded-lg glass-panel border border-white/5"
          >
            <ArrowLeft size={14} />
            <span>Back to Exploration Base</span>
          </Link>
        </div>

        {/* Page Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border border-brand-lime/30 text-xs font-mono text-brand-lime mb-3">
              <Sparkles size={13} />
              <span>DEDICATED EXHIBITION // MERN & AGENTIC AI</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
              Featured Systems & Deployments
            </h1>
            <p className="text-sm sm:text-base text-dark-gray max-w-2xl mt-2 leading-relaxed">
              Standalone project showcase powered by production-grade MERN architectures, agentic AI execution pipelines, and verified repository links.
            </p>
          </div>

          {/* Filter Controls */}
          <div className="flex items-center gap-2 flex-wrap glass-panel p-1.5 rounded-full border border-white/10">
            <span className="text-xs font-mono text-dark-gray pl-3 pr-1 hidden sm:inline-flex items-center gap-1">
              <Filter size={12} /> Filter:
            </span>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all border ${
                  filter === cat
                    ? 'bg-brand-lime text-black font-bold border-brand-lime shadow-sm'
                    : 'text-dark-gray hover:text-white border-transparent'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* ASCII Background Interactive Hint */}
        <div className="mb-8 p-3.5 rounded-xl glass-panel border border-white/5 flex items-center justify-between text-xs font-mono text-dark-gray">
          <div className="flex items-center gap-2">
            <Terminal size={14} className="text-brand-cyan" />
            <span>Interactive Gradient ASCII Field: Move cursor or click anywhere on the top horizon to scramble/wave characters</span>
          </div>
          <span className="text-brand-lime hidden sm:inline-block">React Bits Component Active</span>
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <TiltCard
              key={project.id}
              maxTilt={7}
              accentColor={project.accentColor}
              className="p-6 sm:p-8 flex flex-col justify-between border-white/10 hover:border-white/20 bg-dark-surface/85 backdrop-blur-xl group"
            >
              <div>
                {/* Top Badge & Category */}
                <div className="flex items-center justify-between mb-4">
                  <span
                    className="text-xs font-mono px-2.5 py-1 rounded-md border font-semibold"
                    style={{
                      borderColor: `${project.accentColor}40`,
                      backgroundColor: `${project.accentColor}15`,
                      color: project.accentColor
                    }}
                  >
                    {project.highlight}
                  </span>
                  <span className="text-xs font-mono text-dark-gray">{project.category}</span>
                </div>

                {/* Project Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-brand-lime transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-dark-gray leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Feature Bullet Points */}
                <div className="space-y-2 mb-6">
                  {project.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-neutral-300">
                      <CheckCircle2
                        size={14}
                        className="shrink-0 mt-0.5"
                        style={{ color: project.accentColor }}
                      />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Technology Badges */}
                <div className="flex flex-wrap gap-1.5 mb-8">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-[11px] font-mono rounded-md bg-white/5 border border-white/5 text-neutral-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between mt-auto">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-dark-gray hover:text-white transition-colors group/link"
                >
                  <Github size={15} />
                  <span>Source Code</span>
                  <ArrowUpRight size={12} className="opacity-60 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                </a>

                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold rounded-lg bg-white/10 hover:bg-brand-lime hover:text-black text-white transition-all shadow-sm"
                >
                  <span>Live Preview</span>
                  <ExternalLink size={13} />
                </a>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
