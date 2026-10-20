import React, { useState } from 'react';
import { Mail, MapPin, Linkedin, CheckCircle2, AlertCircle, Loader2, Sparkles, FileDown, ShieldCheck } from 'lucide-react';
import confetti from 'canvas-confetti';
import { profile } from '../data/portfolioData';
import { api } from '../services/api';
import { ResumeModal } from '../components/common/ResumeModal';
import { HoldButton } from '../components/react-bits/HoldButton';

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    botCheck: '' // Honeypot field
  });

  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errorMsg) setErrorMsg(null);
  };

  const handleHoldSubmit = async () => {
    setSuccessMsg(null);
    setErrorMsg(null);

    // Client-side validations
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      setErrorMsg('Please enter your name (at least 2 characters) before holding to send.');
      return;
    }
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      setErrorMsg('Please enter a valid email address before holding to send.');
      return;
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      setErrorMsg('Please enter a message of at least 10 characters before holding to send.');
      return;
    }

    try {
      setLoading(true);
      const response = await api.submitContact(formData);

      setSuccessMsg(response.message || 'Message sent successfully! Apoorv has received your inquiry in MongoDB.');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
        botCheck: ''
      });

      // Confetti burst for rewarding user interaction
      try {
        confetti({
          particleCount: 90,
          spread: 70,
          origin: { y: 0.75 },
          colors: ['#78F52B', '#8B5CF6', '#69C9FF']
        });
      } catch (e) {
        // Safe fallback
      }
    } catch (err) {
      console.error('Contact submit error:', err);
      setErrorMsg(err.message || 'Failed to deliver message. Please check the backend connection.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 lg:py-28 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-14 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border border-brand-cyan/30 text-xs font-mono text-brand-cyan mb-3">
            <Sparkles size={13} />
            <span>GET IN TOUCH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Have a project in mind? Let's build something meaningful.
          </h2>
          <p className="text-sm sm:text-base text-dark-gray max-w-xl mt-2">
            Send a message and let's discuss your project, ideas, or collaboration opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Info & Social Channels */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl glass-panel border border-white/10 space-y-6">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-sm bg-brand-lime" />
                Contact Information
              </h3>

              <div className="space-y-4">
                <a
                  href={`mailto:${profile.primaryEmail}`}
                  className="flex items-start gap-3 text-dark-gray hover:text-white transition-colors group"
                >
                  <div className="p-2.5 rounded-lg bg-white/5 text-brand-lime border border-white/5 group-hover:border-brand-lime transition-all">
                    <Mail size={18} />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-neutral-400 block">Primary Email</span>
                    <span className="text-sm font-semibold text-white group-hover:text-brand-lime transition-colors">
                      {profile.primaryEmail}
                    </span>
                  </div>
                </a>

                <div className="flex items-start gap-3 text-dark-gray">
                  <div className="p-2.5 rounded-lg bg-white/5 text-brand-cyan border border-white/5">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-neutral-400 block">Location</span>
                    <span className="text-sm font-semibold text-white">{profile.location}</span>
                  </div>
                </div>

                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-dark-gray hover:text-white transition-colors group"
                >
                  <div className="p-2.5 rounded-lg bg-white/5 text-brand-accent border border-white/5 group-hover:border-brand-accent transition-all">
                    <Linkedin size={18} />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-neutral-400 block">LinkedIn Connection</span>
                    <span className="text-sm font-semibold text-white group-hover:text-brand-accent transition-colors">
                      {profile.linkedin.replace('https://', '').replace('www.', '')}
                    </span>
                  </div>
                </a>
              </div>

              {/* Resume download quick banner */}
              <div className="pt-6 border-t border-white/10">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-mono text-brand-lime">Need Official Documents?</p>
                    <p className="text-sm font-bold text-white">Curriculum Vitae</p>
                  </div>
                  <button
                    onClick={() => setIsResumeModalOpen(true)}
                    className="px-3.5 py-2 text-xs font-semibold rounded-lg bg-white/10 hover:bg-brand-lime hover:text-black text-white transition-all flex items-center gap-1.5"
                  >
                    <FileDown size={14} /> Download
                  </button>
                </div>
              </div>
            </div>

            {/* Communication note */}
            <div className="p-4 rounded-xl glass-panel border border-white/5 text-xs font-mono text-neutral-400 space-y-1">
              <div className="flex items-center gap-2 text-brand-lime">
                <CheckCircle2 size={14} />
                <span>Fast & Direct Response</span>
              </div>
              <p className="text-[11px] text-dark-gray pl-5">
                Messages are saved directly and forwarded to my primary inbox immediately.
              </p>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl glass-panel border border-white/10 relative">
              {/* Feedback Notifications */}
              {successMsg && (
                <div className="mb-6 p-4 rounded-xl bg-brand-lime/10 border border-brand-lime/40 text-brand-lime text-xs sm:text-sm flex items-center gap-3 animate-fadeIn">
                  <CheckCircle2 size={20} className="shrink-0" />
                  <div>
                    <p className="font-bold">Message Sent Successfully</p>
                    <p className="text-neutral-300">{successMsg}</p>
                  </div>
                </div>
              )}

              {errorMsg && (
                <div className="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/40 text-red-400 text-xs sm:text-sm flex items-center gap-3 animate-fadeIn">
                  <AlertCircle size={20} className="shrink-0" />
                  <div>
                    <p className="font-bold">Validation / Submission Alert</p>
                    <p className="text-neutral-300">{errorMsg}</p>
                  </div>
                </div>
              )}

              <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
                {/* Honeypot field */}
                <input
                  type="text"
                  name="botCheck"
                  value={formData.botCheck}
                  onChange={handleChange}
                  tabIndex="-1"
                  autoComplete="off"
                  className="hidden"
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name field */}
                  <div className="space-y-1.5">
                    <label htmlFor="contact-name" className="text-xs font-mono text-neutral-300 block">
                      Your Name <span className="text-brand-lime">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      required
                      placeholder="e.g. Satya Nadella"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-dark-bg/60 border border-white/10 focus:border-brand-lime focus:outline-none focus:ring-1 focus:ring-brand-lime text-white placeholder-dark-gray text-sm transition-all"
                    />
                  </div>

                  {/* Email field */}
                  <div className="space-y-1.5">
                    <label htmlFor="contact-email" className="text-xs font-mono text-neutral-300 block">
                      Email Address <span className="text-brand-lime">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      required
                      placeholder="name@company.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-dark-bg/60 border border-white/10 focus:border-brand-lime focus:outline-none focus:ring-1 focus:ring-brand-lime text-white placeholder-dark-gray text-sm transition-all"
                    />
                  </div>
                </div>

                {/* Subject field */}
                <div className="space-y-1.5">
                  <label htmlFor="contact-subject" className="text-xs font-mono text-neutral-300 block">
                    Subject / Discussion Topic
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    name="subject"
                    placeholder="e.g. MERN Full Stack Role / AI Automation Project"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-dark-bg/60 border border-white/10 focus:border-brand-lime focus:outline-none focus:ring-1 focus:ring-brand-lime text-white placeholder-dark-gray text-sm transition-all"
                  />
                </div>

                {/* Message field */}
                <div className="space-y-1.5">
                  <label htmlFor="contact-message" className="text-xs font-mono text-neutral-300 block">
                    Your Message <span className="text-brand-lime">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows="5"
                    placeholder="Describe your project, timeline, or collaboration opportunity..."
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-dark-bg/60 border border-white/10 focus:border-brand-lime focus:outline-none focus:ring-1 focus:ring-brand-lime text-white placeholder-dark-gray text-sm transition-all resize-none"
                  />
                  <div className="text-[11px] font-mono text-neutral-500 text-right">
                    {formData.message.length}/2000 chars (min 10)
                  </div>
                </div>

                {/* Submission Components */}
                <div className="pt-2 space-y-3">
                  <HoldButton
                    doneLabel="Message Sent ✓"
                    backgroundColor="#1A202C"
                    fillColor="#78F52B"
                    textColor="#F5F5F5"
                    fillTextColor="#000000"
                    size="md"
                    radius={14}
                    fillDirection="right"
                    holdTime={750}
                    releaseTime={200}
                    pressScale={0.97}
                    wave={true}
                    waveAmplitude={6}
                    glow={true}
                    resetAfter={2500}
                    disabled={loading}
                    loading={loading}
                    onHold={handleHoldSubmit}
                    className="w-full"
                  >
                    {loading ? (
                      <span className="flex items-center gap-2">
                        <Loader2 size={16} className="animate-spin" />
                        <span>Sending message...</span>
                      </span>
                    ) : (
                      <span className="flex items-center gap-2 font-mono text-xs sm:text-sm">
                        <ShieldCheck size={16} className="text-brand-lime" />
                        <span>Press & Hold to Send Message</span>
                      </span>
                    )}
                  </HoldButton>

                  <div className="flex items-center justify-between text-[11px] font-mono text-dark-gray px-1">
                    <span>Hold ~0.8s to send</span>
                    <button
                      type="button"
                      onClick={handleHoldSubmit}
                      disabled={loading}
                      className="text-blue-500 hover:text-blue-400 hover:underline cursor-pointer"
                    >
                      Or click here to send immediately →
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />
    </section>
  );
};
