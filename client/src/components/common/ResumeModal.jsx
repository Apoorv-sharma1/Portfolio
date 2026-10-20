import React, { useEffect } from 'react';
import { FileText, Download, ExternalLink, X, CheckCircle } from 'lucide-react';
import { api } from '../../services/api';

export const ResumeModal = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-fadeIn">
      <div
        className="relative w-full max-w-lg p-6 sm:p-8 rounded-2xl glass-panel border border-brand-accent/30 shadow-2xl bg-dark-surface dark:bg-dark-surface"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-dark-gray hover:text-white transition-colors rounded-lg hover:bg-white/5"
          aria-label="Close modal"
        >
          <X size={20} />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 rounded-xl bg-brand-accent/20 border border-brand-accent/40 flex items-center justify-center text-brand-accent">
            <FileText size={22} />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white">Download Resume</h3>
            <p className="text-xs font-mono text-brand-lime">Curriculum Vitae • Apoorv Sharma</p>
          </div>
        </div>

        <p className="text-sm text-dark-gray my-4 leading-relaxed">
          Select your preferred format to view or download my latest professional resume.
        </p>

        {/* Download Options */}
        <div className="space-y-3 my-6">
          {/* PDF Option */}
          <div className="p-4 rounded-xl border border-white/10 bg-white/[0.02] hover:border-brand-accent/50 transition-all flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="px-2.5 py-1 text-xs font-bold font-mono rounded bg-red-500/20 text-red-400 border border-red-500/30">
                PDF
              </span>
              <div>
                <p className="font-semibold text-sm text-white">Apoorv_Sharma_Resume.pdf</p>
                <p className="text-xs text-dark-gray">Standard printable curriculum vitae</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-xs font-mono rounded-lg border border-white/10 hover:bg-white/10 text-neutral-300 transition-colors flex items-center gap-1"
                title="Preview PDF in new tab"
              >
                <ExternalLink size={14} />
              </a>
              <a
                href="/resume.pdf"
                download="Apoorv_Sharma_Resume.pdf"
                className="px-3 py-2 text-xs font-semibold rounded-lg bg-brand-accent hover:bg-brand-accent/90 text-white transition-all flex items-center gap-1.5 shadow-md"
              >
                <Download size={14} /> Download
              </a>
            </div>
          </div>

          {/* Word DOCX Option */}
          <div className="p-4 rounded-xl border border-white/10 bg-white/[0.02] hover:border-brand-cyan/50 transition-all flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="px-2.5 py-1 text-xs font-bold font-mono rounded bg-blue-500/20 text-blue-400 border border-blue-500/30">
                DOCX
              </span>
              <div>
                <p className="font-semibold text-sm text-white">Apoorv_Sharma_Resume.docx</p>
                <p className="text-xs text-dark-gray">Editable Microsoft Word format</p>
              </div>
            </div>
            <a
              href="/resume.docx"
              download="Apoorv_Sharma_Resume.docx"
              className="px-3 py-2 text-xs font-semibold rounded-lg bg-brand-cyan/20 border border-brand-cyan/40 text-brand-cyan hover:bg-brand-cyan hover:text-black transition-all flex items-center gap-1.5"
            >
              <Download size={14} /> Download
            </a>
          </div>
        </div>

        {/* Verification Footer */}
        <div className="flex items-center gap-2 text-xs text-neutral-400 font-mono pt-3 border-t border-white/10">
          <CheckCircle size={14} className="text-brand-lime" />
          <span>Updated & Ready for Opportunities</span>
        </div>
      </div>
    </div>
  );
};
