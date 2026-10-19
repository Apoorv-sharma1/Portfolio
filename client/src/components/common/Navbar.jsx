import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon, FileDown, ArrowUpRight } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { ResumeModal } from './ResumeModal';

export const Navbar = () => {
  const { isDark, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', path: '/#about', isRoute: false },
    { label: 'Skills', path: '/#skills', isRoute: false },
    { label: 'Projects', path: '/projects', isRoute: true },
    { label: 'Timeline', path: '/#timeline', isRoute: false },
    { label: 'Certificates', path: '/#certifications', isRoute: false },
    { label: 'Contact', path: '/#contact', isRoute: false }
  ];

  const handleNavClick = (link, e) => {
    setIsMobileMenuOpen(false);
    if (!link.isRoute && location.pathname === '/') {
      e.preventDefault();
      const targetId = link.path.replace('/#', '');
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'py-3 bg-dark-bg/85 dark:bg-dark-bg/85 backdrop-blur-xl border-b border-white/10 shadow-lg'
            : 'py-5 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo & Brand */}
          <Link
            to="/"
            className="flex items-center gap-2 group cursor-pointer"
          >
            <div className="w-9 h-9 rounded-lg bg-dark-surface dark:bg-dark-surface border border-white/10 group-hover:border-brand-lime flex items-center justify-center font-mono font-bold text-lg text-white transition-all shadow-sm">
              <span className="text-brand-lime">A</span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold tracking-tight text-base sm:text-lg text-white group-hover:text-brand-lime transition-colors">
                APOORV<span className="text-brand-lime">.</span>
              </span>
              <span className="text-[10px] font-mono text-dark-gray hidden sm:block tracking-wider uppercase">
                MERN & AI Builder
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2 px-3 py-1.5 rounded-full glass-panel border border-white/10">
            {navLinks.map((link) => {
              const isCurrent = link.isRoute ? location.pathname === link.path : false;
              if (link.isRoute) {
                return (
                  <Link
                    key={link.label}
                    to={link.path}
                    className={`px-3 py-1.5 text-xs lg:text-sm font-medium rounded-full transition-all ${
                      isCurrent
                        ? 'bg-brand-lime text-black font-bold shadow-sm'
                        : 'text-dark-gray hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              }
              return (
                <a
                  key={link.label}
                  href={link.path}
                  onClick={(e) => handleNavClick(link, e)}
                  className="px-3 py-1.5 text-xs lg:text-sm font-medium text-dark-gray hover:text-white hover:bg-white/5 rounded-full transition-all"
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Actions & Utilities */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2 sm:p-2.5 rounded-xl glass-panel border border-white/10 hover:border-brand-accent/50 text-dark-gray hover:text-white transition-all"
              aria-label="Toggle dark/light mode"
              title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              {isDark ? <Sun size={18} className="text-amber-400" /> : <Moon size={18} className="text-brand-accent" />}
            </button>

            {/* Resume Action */}
            <button
              onClick={() => setIsResumeModalOpen(true)}
              className="hidden sm:flex items-center gap-2 px-3.5 py-2 text-xs font-semibold rounded-xl bg-brand-accent/15 border border-brand-accent/40 text-brand-accent hover:bg-brand-accent hover:text-white transition-all shadow-sm group"
            >
              <FileDown size={15} className="group-hover:translate-y-0.5 transition-transform" />
              <span>Resume</span>
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-xl glass-panel border border-white/10 text-dark-gray hover:text-white"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="md:hidden glass-panel border-b border-white/10 px-4 pt-3 pb-6 space-y-2 mt-2 bg-dark-bg/95 backdrop-blur-2xl">
            {navLinks.map((link) => {
              if (link.isRoute) {
                return (
                  <Link
                    key={link.label}
                    to={link.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block px-4 py-2.5 text-sm font-medium text-brand-lime font-bold hover:bg-white/5 rounded-lg transition-colors"
                  >
                    {link.label} (Dedicated Exhibition)
                  </Link>
                );
              }
              return (
                <a
                  key={link.label}
                  href={link.path}
                  onClick={(e) => handleNavClick(link, e)}
                  className="block px-4 py-2.5 text-sm font-medium text-dark-gray hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                >
                  {link.label}
                </a>
              );
            })}
            <div className="pt-2 border-t border-white/10 flex flex-col gap-2">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setIsResumeModalOpen(true);
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold rounded-lg bg-brand-accent text-white"
              >
                <FileDown size={16} />
                Download Resume (PDF / DOCX)
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Global Resume Modal */}
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />
    </>
  );
};
