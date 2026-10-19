import React from 'react';
import { Award, Server, Cpu, ShieldCheck, PenTool, BookOpen, ExternalLink, Sparkles } from 'lucide-react';
import { certifications } from '../data/portfolioData';

const iconMap = {
  Server: Server,
  Cpu: Cpu,
  ShieldCheck: ShieldCheck,
  PenTool: PenTool,
  BookOpen: BookOpen,
};

export const CertificationsSection = () => {
  return (
    <section id="certifications" className="py-20 lg:py-28 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border border-brand-lime/30 text-xs font-mono text-brand-lime mb-3">
            <Sparkles size={13} />
            <span>05 // CREDENTIALS & HONORS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Certifications & Published Works
          </h2>
          <p className="text-sm sm:text-base text-dark-gray max-w-xl mt-2">
            Verified technical accreditations, systems training, and published authorship.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => {
            const Icon = iconMap[cert.icon] || Award;
            const isBook = cert.icon === 'BookOpen';

            return (
              <div
                key={index}
                className={`p-6 sm:p-7 rounded-2xl glass-panel border transition-all flex flex-col justify-between ${
                  isBook
                    ? 'border-brand-lime/40 bg-gradient-to-b from-brand-lime/5 to-transparent'
                    : 'border-white/10 hover:border-brand-accent/40'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`p-3 rounded-xl border ${
                        isBook
                          ? 'bg-brand-lime/20 border-brand-lime/40 text-brand-lime'
                          : 'bg-white/5 border-white/10 text-brand-cyan'
                      }`}
                    >
                      <Icon size={22} />
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/5 text-dark-gray border border-white/5">
                      {cert.category}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-1 leading-snug">
                    {cert.title}
                  </h3>
                  <p className="text-xs font-mono text-brand-lime mb-3">
                    Issuer: {cert.issuer}
                  </p>

                  <p className="text-xs sm:text-sm text-dark-gray leading-relaxed mb-4">
                    {cert.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-dark-gray">
                  <span className="flex items-center gap-1.5 text-neutral-400">
                    <Award size={13} className="text-brand-lime" />
                    Verified Credential
                  </span>
                  {isBook && (
                    <span className="text-brand-lime font-semibold">Published Work</span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
