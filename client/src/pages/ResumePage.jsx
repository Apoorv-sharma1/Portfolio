import React from 'react';
import { FileDown, ExternalLink, FileText, CheckCircle2 } from 'lucide-react';
import { api } from '../services/api';
import { profile } from '../data/portfolioData';
import { AuroraBackground } from '../components/react-bits/AuroraBackground';

export const ResumePage = () => {
  return (
    <AuroraBackground className="pt-28 pb-20 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <span className="text-xs font-mono uppercase tracking-widest text-brand-lime">
            Curriculum Vitae
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white mt-2">
            Apoorv Sharma — Official Resume
          </h1>
          <p className="text-sm text-dark-gray mt-2">
            Available in PDF and Microsoft Word (DOCX) formats.
          </p>

          {/* Action Download Buttons */}
          <div className="flex items-center justify-center gap-4 mt-6 flex-wrap">
            <a
              href="/resume.pdf"
              download="Apoorv_Sharma_Resume.pdf"
              className="px-6 py-3 rounded-xl bg-brand-accent hover:bg-brand-accent/90 text-white font-bold text-sm flex items-center gap-2 shadow-lg glow-accent transition-all"
            >
              <FileDown size={16} />
              <span>Download PDF Resume</span>
            </a>

            <a
              href="/resume.docx"
              download="Apoorv_Sharma_Resume.docx"
              className="px-6 py-3 rounded-xl glass-panel border border-brand-cyan/40 text-brand-cyan hover:bg-brand-cyan hover:text-black font-bold text-sm flex items-center gap-2 transition-all"
            >
              <FileDown size={16} />
              <span>Download Word DOCX</span>
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-3 rounded-xl border border-white/10 text-neutral-300 hover:text-white hover:bg-white/5 text-sm flex items-center gap-1.5 transition-colors"
            >
              <span>Preview Inline</span>
              <ExternalLink size={14} />
            </a>
          </div>
        </div>

        {/* Embedded Resume Preview Container */}
        <div className="p-8 sm:p-12 rounded-2xl glass-panel border border-white/10 space-y-8 bg-dark-surface/80">
          {/* Header Summary */}
          <div className="border-b border-white/10 pb-6 text-center">
            <h2 className="text-2xl font-bold text-white tracking-wide">{profile.name}</h2>
            <p className="text-sm text-brand-cyan font-mono mt-1">{profile.headline} • Jaipur, India</p>
            <p className="text-xs text-dark-gray mt-2 font-mono">
              Email: {profile.primaryEmail} | Portfolio: apoorvsh.netlify.app | Location: {profile.location}
            </p>
          </div>

          {/* Professional Overview */}
          <div>
            <h3 className="text-sm font-mono uppercase tracking-wider text-brand-lime font-bold mb-2">
              Professional Summary
            </h3>
            <p className="text-xs sm:text-sm text-dark-gray leading-relaxed">
              Full Stack Web Developer & AI Builder specializing in MERN architectures, agentic AI multi-agent workflows, and high-conversion e-commerce engines. Founder at Webnetic Studios and Co-Founder at FuseOne Studios. Published author with a proven track record of reducing manual operational overhead by up to 70%.
            </p>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-sm font-mono uppercase tracking-wider text-brand-lime font-bold mb-2">
              Education
            </h3>
            <div className="space-y-1">
              <p className="text-sm font-bold text-white">{profile.university}</p>
              <p className="text-xs font-mono text-dark-gray">{profile.degree} • {profile.gradYear}</p>
              <p className="text-xs text-neutral-400">Relevant Coursework: Data Structures & Algorithms, Database Systems, Web Architecture</p>
            </div>
          </div>

          {/* Verification Badge */}
          <div className="pt-6 border-t border-white/10 flex items-center justify-between text-xs font-mono text-dark-gray">
            <span className="flex items-center gap-2 text-brand-lime">
              <CheckCircle2 size={14} />
              API Routes: GET /api/resume/pdf & GET /api/resume/docx
            </span>
            <span>Status: Verified & Live</span>
          </div>
        </div>
      </div>
    </AuroraBackground>
  );
};
