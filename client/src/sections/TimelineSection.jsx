import React, { useState } from 'react';
import { Briefcase, GraduationCap, Calendar, MapPin, CheckCircle, Sparkles } from 'lucide-react';
import { experiences, education } from '../data/portfolioData';

export const TimelineSection = () => {
  const [view, setView] = useState('experience');

  return (
    <section id="timeline" className="py-20 lg:py-28 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border border-brand-accent/30 text-xs font-mono text-brand-accent mb-3">
              <Sparkles size={13} />
              <span>04 // CAREER TRAJECTORY</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Experience & Academic Timeline
            </h2>
            <p className="text-sm sm:text-base text-dark-gray max-w-xl mt-2">
              Chronological progression through startups founded, engineering internships, open-source work, and computer science studies.
            </p>
          </div>

          {/* Switcher Controls */}
          <div className="inline-flex p-1 rounded-xl glass-panel border border-white/10 self-start sm:self-auto">
            <button
              onClick={() => setView('experience')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-mono transition-all ${
                view === 'experience'
                  ? 'bg-brand-accent text-white font-bold shadow'
                  : 'text-dark-gray hover:text-white'
              }`}
            >
              <Briefcase size={14} />
              <span>Experience ({experiences.length})</span>
            </button>
            <button
              onClick={() => setView('education')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-mono transition-all ${
                view === 'education'
                  ? 'bg-brand-lime text-black font-bold shadow'
                  : 'text-dark-gray hover:text-white'
              }`}
            >
              <GraduationCap size={14} />
              <span>Education ({education.length})</span>
            </button>
          </div>
        </div>

        {/* Timeline Stream */}
        <div className="relative border-l-2 border-white/10 ml-4 sm:ml-8 space-y-10 pl-6 sm:pl-8">
          {view === 'experience' ? (
            experiences.map((exp, index) => (
              <div key={index} className="relative group">
                {/* Timeline node icon */}
                <div className="absolute -left-[35px] sm:-left-[43px] top-1.5 w-6 h-6 rounded-full bg-dark-bg border-2 border-brand-accent group-hover:border-brand-lime group-hover:scale-110 transition-all flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-brand-accent group-hover:bg-brand-lime transition-colors" />
                </div>

                <div className="p-6 sm:p-7 rounded-2xl glass-panel border border-white/10 hover:border-brand-accent/40 transition-all architectural-card">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-brand-lime transition-colors">
                        {exp.role} <span className="text-brand-accent">@ {exp.company}</span>
                      </h3>
                      <p className="text-xs font-mono text-dark-gray flex items-center gap-2 mt-1">
                        <MapPin size={12} className="text-brand-cyan" />
                        <span>{exp.location}</span>
                      </p>
                    </div>

                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/5 text-xs font-mono text-neutral-300 self-start sm:self-auto">
                      <Calendar size={12} className="text-brand-lime" />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  <p className="text-sm text-dark-gray leading-relaxed my-4">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {exp.badges.map((b) => (
                      <span
                        key={b}
                        className="px-2 py-0.5 text-[11px] font-mono rounded bg-white/5 text-neutral-300 border border-white/5"
                      >
                        {b}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))
          ) : (
            education.map((edu, index) => (
              <div key={index} className="relative group">
                {/* Timeline node icon */}
                <div className="absolute -left-[35px] sm:-left-[43px] top-1.5 w-6 h-6 rounded-full bg-dark-bg border-2 border-brand-lime group-hover:scale-110 transition-all flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-brand-lime" />
                </div>

                <div className="p-6 sm:p-7 rounded-2xl glass-panel border border-white/10 hover:border-brand-lime/40 transition-all architectural-card">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-brand-lime transition-colors">
                        {edu.institution}
                      </h3>
                      <p className="text-sm font-semibold text-brand-lime mt-1">
                        {edu.degree}
                      </p>
                    </div>

                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/5 text-xs font-mono text-neutral-300 self-start sm:self-auto">
                      <Calendar size={12} className="text-brand-lime" />
                      <span>{edu.period}</span>
                    </div>
                  </div>

                  <p className="text-xs font-mono text-brand-cyan my-2">
                    Status: {edu.status}
                  </p>

                  {edu.coursework && (
                    <p className="text-xs text-dark-gray leading-relaxed mt-2">
                      <strong className="text-neutral-300">Key Coursework: </strong> {edu.coursework}
                    </p>
                  )}

                  {edu.highlights && (
                    <p className="text-xs text-dark-gray leading-relaxed mt-2">
                      <strong className="text-neutral-300">Highlights: </strong> {edu.highlights}
                    </p>
                  )}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};
