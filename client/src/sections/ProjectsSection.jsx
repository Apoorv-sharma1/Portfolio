import React, { useState } from 'react';
import { ExternalLink, Github, Layers, ArrowUpRight, CheckCircle2, Sparkles } from 'lucide-react';
import { projects } from '../data/portfolioData';
import { TiltCard } from '../components/react-bits/TiltCard';

export const ProjectsSection = () => {
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Full Stack / SaaS', 'AI & Automation', 'E-Commerce'];

  const filteredProjects =
    filter === 'All'
      ? projects
      : projects.filter((p) => p.category.toLowerCase().includes(filter.toLowerCase()));

  return (
    <section id="projects" className="py-20 lg:py-28 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border border-brand-lime/30 text-xs font-mono text-brand-lime mb-3">
              <Sparkles size={13} />
              <span>03 // EXHIBITION GALLERY</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Featured Systems & Deployments
            </h2>
            <p className="text-sm sm:text-base text-dark-gray max-w-xl mt-2">
              Production-grade web platforms, autonomous AI systems, and scalable MERN architectures.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-2 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all border ${
                  filter === cat
                    ? 'bg-brand-lime text-black font-bold border-brand-lime shadow-sm'
                    : 'glass-panel text-dark-gray hover:text-white border-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <TiltCard
              key={project.id}
              maxTilt={7}
              accentColor={project.accentColor}
              className="p-6 sm:p-8 flex flex-col justify-between border-white/10 hover:border-white/20 bg-dark-surface/60 group"
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
    </section>
  );
};
