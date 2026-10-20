import React, { useState } from 'react';
import { BookOpen, GraduationCap, Building2, MapPin, Sparkles, CheckCircle2, Folder } from 'lucide-react';
import { profile } from '../data/portfolioData';
import { FolderFloat } from '../components/react-bits/FolderFloat';
import PaperCrumple from '../components/react-bits/PaperCrumple';

export const AboutSection = () => {
  const [selectedNote, setSelectedNote] = useState(null);

  const folderNotes = [
    'Automate 70% manual work',
    'Resisting Peer Pressure (Book)',
    'Full-Stack MERN Architecture',
    'Agentic AI Multi-Agent Systems'
  ];

  return (
    <section id="about" className="py-20 lg:py-28 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border border-brand-accent/30 text-xs font-mono text-brand-accent mb-3">
            <Sparkles size={13} />
            <span>01 // THE ARCHITECT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Engineering Systems, Automation & Mindset
          </h2>
          <p className="text-sm sm:text-base text-dark-gray max-w-2xl mt-2">
            The philosophy, background, and vision behind my full-stack engineering and startup initiatives.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Story Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl glass-panel border border-white/10 architectural-card">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-sm bg-brand-lime" />
                Who I Am & What Drives Me
              </h3>
              <p className="text-sm sm:text-base text-dark-gray leading-relaxed mb-4">
                I’m a Web Developer and AI Builder focused on one singular mission: 
                <strong className="text-white font-medium"> helping businesses save time and scale faster</strong>. 
                I build web applications, SaaS platforms, and AI-powered systems that automate repetitive work and eliminate operational bottlenecks.
              </p>
              <p className="text-sm sm:text-base text-dark-gray leading-relaxed mb-4">
                One of my flagship initiatives reduced manual work by up to <span className="text-brand-lime font-bold">70%</span>, enabling teams to focus on core strategic execution rather than redundant data tasks.
              </p>
              <p className="text-sm sm:text-base text-dark-gray leading-relaxed">
                Whether creating a client-facing web application, architecting multi-agent AI execution pipelines, or designing an end-to-end full product, I focus on building solutions that are <span className="text-white font-semibold">practical, resilient, and growth-driven</span>.
              </p>
            </div>

            {/* Author Mindset Feature Card */}
            <div className="p-6 sm:p-8 rounded-2xl glass-panel border border-amber-500/30 bg-gradient-to-br from-amber-500/10 via-transparent to-transparent">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-amber-500/15 border border-amber-500/30 text-amber-400 shrink-0">
                  <BookOpen size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-1">
                    Published Self-Help Author
                  </h4>
                  <p className="text-xs font-mono text-amber-400/90 mb-3">
                    "A Guide to Resisting Peer Pressure" (Published Jan 2023)
                  </p>
                  <blockquote className="text-xs sm:text-sm text-neutral-300 italic border-l-2 border-amber-400 pl-3 mb-3">
                    "Building strong software systems isn’t just about code—it is fundamentally about independent thinking, clarity of purpose, and resilience under pressure."
                  </blockquote>
                  <p className="text-xs sm:text-sm text-dark-gray leading-relaxed">
                    At 16, I wrote and published this book to explore social influence, self-awareness, and intentional decision-making. That experience shaped how I collaborate, lead teams, and solve complex architectural challenges.
                  </p>
                </div>
              </div>
            </div>

            {/* React Bits FolderFloat Physics Noticeboard Component */}
            <div className="p-6 sm:p-8 rounded-2xl glass-panel border border-white/10 relative overflow-visible">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                <div>
                  <h4 className="text-base font-bold text-white flex items-center gap-2">
                    <Folder size={18} className="text-brand-lime" />
                    <span>Interactive Milestones & Mindset Vault</span>
                  </h4>
                  <p className="text-xs text-dark-gray mt-1">
                    Click the folder below to release floating physics pills. Drag and throw them in zero-gravity!
                  </p>
                </div>
                <span className="text-[11px] font-mono px-2.5 py-1 rounded bg-brand-accent/20 text-brand-accent border border-brand-accent/30 self-start sm:self-auto">
                  Matter.js 2D Physics
                </span>
              </div>

              {/* Folder Float Centered Stage */}
              <div className="py-6 flex flex-col items-center justify-center min-h-[220px]">
                <FolderFloat
                  items={folderNotes}
                  label="Apoorv's Vault"
                  sublabel="6 key notes"
                  trigger="click"
                  physics={true}
                  drift={0.4}
                  folderColor="#17191D"
                  frontColor="#272B31"
                  paperColor="#F5F6F4"
                  itemColor="#131720"
                  itemTextColor="#F5F5F5"
                  labelColor="#38BDF8"
                  width={210}
                  height={145}
                  spread={190}
                  lift={30}
                  tilt={8}
                  onSelect={(val) => setSelectedNote(val)}
                />

                {selectedNote && (
                  <div className="mt-4 px-3 py-1.5 rounded-lg bg-brand-lime/10 border border-brand-lime/30 text-xs font-mono text-brand-lime animate-fadeIn">
                    Selected Note: "{selectedNote}"
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right Column: Key Details & Credentials */}
          <div className="lg:col-span-5 space-y-4">
            {/* University & Degree Card */}
            <div className="p-6 rounded-2xl glass-panel border border-white/10 space-y-3">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-white/5 text-brand-lime border border-white/10">
                  <GraduationCap size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm sm:text-base">{profile.university}</h4>
                  <p className="text-xs text-dark-gray font-mono">{profile.gradYear} • {profile.degree}</p>
                </div>
              </div>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Focused on Data Structures, Database Systems, Full-Stack Architecture, and Computer Science Fundamentals.
              </p>
            </div>

            {/* Digital Studios Card */}
            <div className="p-6 rounded-2xl glass-panel border border-white/10 space-y-4">
              <h4 className="text-xs font-mono uppercase tracking-wider text-white flex items-center gap-2">
                <Building2 size={16} className="text-blue-400" />
                Digital Studios & Initiatives
              </h4>

              <div className="space-y-3">
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-sm text-white">Webnetic Studios</span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-500/10 text-sky-400 border border-blue-500/20">Studio</span>
                  </div>
                  <p className="text-xs text-dark-gray mt-1">
                    Scalable full-stack websites, high-conversion e-commerce, and bespoke digital infrastructure.
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-sm text-white">FuseOne Studios</span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-500/10 text-sky-400 border border-blue-500/20">AI Lab</span>
                  </div>
                  <p className="text-xs text-dark-gray mt-1">
                    Agentic AI platforms and SaaS engineered to automate business workflows and customer ops.
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Facts List */}
            <div className="p-6 rounded-2xl glass-panel border border-white/10 space-y-2.5">
              <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-2">
                Operational Highlights
              </h4>
              <div className="flex items-center gap-2 text-xs text-neutral-300">
                <CheckCircle2 size={14} className="text-brand-lime shrink-0" />
                <span>Location: Jaipur, Rajasthan, India</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-neutral-300">
                <CheckCircle2 size={14} className="text-brand-lime shrink-0" />
                <span>MERN Stack + Agentic AI Architecture</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-neutral-300">
                <CheckCircle2 size={14} className="text-brand-lime shrink-0" />
                <span>Open for Full-Time Roles & High-Impact Projects</span>
              </div>
            </div>

            {/* Interactive 3D Paper Card from React Bits */}
            <div className="p-6 rounded-2xl glass-panel border border-white/10 space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="text-xs font-mono uppercase tracking-wider text-white">
                  Interactive 3D Identity Card
                </h4>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-500/10 text-blue-400 border border-blue-500/30">
                  Hold to Crumple!
                </span>
              </div>
              <div className="flex items-center justify-center overflow-hidden py-2">
                <PaperCrumple
                  src="/paper-card.jpg"
                  alt="Apoorv Sharma Developer Card"
                  width={240}
                  height={310}
                  sceneHeight={330}
                  crumpleAmount={0.8}
                />
              </div>
              <p className="text-[11px] font-mono text-center text-dark-gray">
                Click and drag the paper card to crumple and toss in 3D physics!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
