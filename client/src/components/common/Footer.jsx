import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, ExternalLink, Heart } from 'lucide-react';
import { profile } from '../../data/portfolioData';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/10 bg-dark-surface/60 dark:bg-dark-surface/60 backdrop-blur-md relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand & Bio */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-brand-accent/20 border border-brand-accent/40 flex items-center justify-center font-mono font-bold text-brand-lime">
                A
              </span>
              <span className="text-xl font-bold text-white tracking-tight">
                Apoorv Sharma
              </span>
            </div>
            <p className="text-sm text-dark-gray max-w-md leading-relaxed">
              Full Stack Web Developer & AI Builder. Engineering high-performance MERN applications, multi-agent AI automation workflows, and human-centric software.
            </p>
            <div className="flex items-center gap-2 text-xs font-mono text-neutral-400">
              <span className="w-2 h-2 rounded-full bg-brand-lime animate-pulse" />
              <span>{profile.status}</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-white mb-4">
              Explore Sections
            </h4>
            <ul className="space-y-2 text-sm text-dark-gray">
              <li><a href="#about" className="hover:text-brand-lime transition-colors">About Background</a></li>
              <li><a href="#skills" className="hover:text-brand-lime transition-colors">Technical Matrix</a></li>
              <li><a href="#projects" className="hover:text-brand-lime transition-colors">Project Exhibition</a></li>
              <li><a href="#timeline" className="hover:text-brand-lime transition-colors">Experience & Education</a></li>
              <li><a href="#certifications" className="hover:text-brand-lime transition-colors">Certifications & Book</a></li>
              <li><a href="#contact" className="hover:text-brand-lime transition-colors">Contact Destination</a></li>
            </ul>
          </div>

          {/* Socials & Connect */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-white mb-4">
              Connect & Verify
            </h4>
            <div className="space-y-3">
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-dark-gray hover:text-white transition-colors group"
              >
                <Linkedin size={16} className="text-brand-cyan group-hover:scale-110 transition-transform" />
                <span>LinkedIn Profile</span>
                <ExternalLink size={12} className="opacity-50" />
              </a>

              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-dark-gray hover:text-white transition-colors group"
              >
                <Github size={16} className="text-brand-accent group-hover:scale-110 transition-transform" />
                <span>GitHub Repositories</span>
                <ExternalLink size={12} className="opacity-50" />
              </a>

              <a
                href={`mailto:${profile.primaryEmail}`}
                className="flex items-center gap-2 text-sm text-dark-gray hover:text-white transition-colors group"
              >
                <Mail size={16} className="text-brand-lime group-hover:scale-110 transition-transform" />
                <span>sharma2006apoorv@gmail.com</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-dark-gray">
          <div>
            © {new Date().getFullYear()} Apoorv Sharma • JK Lakshmipat University (JKLU). All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span className="text-neutral-500">MERN Stack • Three.js • React Bits</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-white hover:text-brand-lime transition-colors"
              aria-label="Scroll back to top"
            >
              <span>Back to Top</span>
              <ArrowUp size={14} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
