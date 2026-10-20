import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, ExternalLink } from 'lucide-react';
import { profile } from '../../data/portfolioData';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-[#0E121A] backdrop-blur-md relative z-10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand & Bio */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-blue-500/10 dark:bg-blue-500/20 border border-blue-500/30 flex items-center justify-center font-mono font-bold text-blue-600 dark:text-sky-400">
                A
              </span>
              <span className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">
                Apoorv Sharma
              </span>
            </div>
            <p className="text-sm text-slate-600 dark:text-neutral-400 max-w-md leading-relaxed">
              Full Stack Web Developer & AI Builder. Engineering high-performance MERN applications, multi-agent AI automation workflows, and modern web platforms.
            </p>
            <div className="flex items-center gap-2 text-xs font-mono text-slate-500 dark:text-neutral-400">
              <span className="w-2 h-2 rounded-full bg-sky-500 animate-pulse" />
              <span>{profile.status}</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-900 dark:text-white mb-4 font-bold">
              Explore Sections
            </h4>
            <ul className="space-y-2 text-sm text-slate-600 dark:text-neutral-400">
              <li><a href="#about" className="hover:text-blue-600 dark:hover:text-sky-400 transition-colors">About Background</a></li>
              <li><a href="#skills" className="hover:text-blue-600 dark:hover:text-sky-400 transition-colors">Technical Matrix</a></li>
              <li><a href="/projects" className="hover:text-blue-600 dark:hover:text-sky-400 transition-colors">Project Exhibition</a></li>
              <li><a href="#timeline" className="hover:text-blue-600 dark:hover:text-sky-400 transition-colors">Experience & Education</a></li>
              <li><a href="#certifications" className="hover:text-blue-600 dark:hover:text-sky-400 transition-colors">Certifications & Book</a></li>
              <li><a href="#contact" className="hover:text-blue-600 dark:hover:text-sky-400 transition-colors">Contact Destination</a></li>
            </ul>
          </div>

          {/* Socials & Connect */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-900 dark:text-white mb-4 font-bold">
              Connect & Verify
            </h4>
            <div className="space-y-3">
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-slate-600 dark:text-neutral-400 hover:text-blue-600 dark:hover:text-white transition-colors group"
              >
                <Linkedin size={16} className="text-sky-500 group-hover:scale-110 transition-transform" />
                <span>LinkedIn Profile</span>
                <ExternalLink size={12} className="opacity-50" />
              </a>

              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-slate-600 dark:text-neutral-400 hover:text-blue-600 dark:hover:text-white transition-colors group"
              >
                <Github size={16} className="text-blue-500 group-hover:scale-110 transition-transform" />
                <span>GitHub Repositories</span>
                <ExternalLink size={12} className="opacity-50" />
              </a>

              <a
                href={`mailto:${profile.primaryEmail}`}
                className="flex items-center gap-2 text-sm text-slate-600 dark:text-neutral-400 hover:text-blue-600 dark:hover:text-white transition-colors group"
              >
                <Mail size={16} className="text-sky-500 group-hover:scale-110 transition-transform" />
                <span>sharma2006apoorv@gmail.com</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-200 dark:border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500 dark:text-neutral-400">
          <div>
            © {new Date().getFullYear()} Apoorv Sharma. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span className="text-slate-400 dark:text-neutral-500">MERN Stack • React Bits • Tailwind CSS</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-slate-800 dark:text-white hover:text-blue-600 dark:hover:text-sky-400 transition-colors cursor-pointer"
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

export default Footer;
