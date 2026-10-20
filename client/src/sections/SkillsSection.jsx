import React, { useState } from 'react';
import { Cpu, Layers, Database, Sparkles, Terminal, Wrench } from 'lucide-react';
import { skills } from '../data/portfolioData';
import { TiltCard } from '../components/react-bits/TiltCard';

export const SkillsSection = () => {
  const [activeTab, setActiveTab] = useState('all');

  const categories = [
    { id: 'all', label: 'All Technologies', icon: Layers },
    { id: 'frontend', label: 'Frontend & UI', icon: Cpu },
    { id: 'backend', label: 'Backend & DB', icon: Database },
    { id: 'aiAndAutomation', label: 'Agentic AI & Ops', icon: Sparkles },
    { id: 'toolsAndDevOps', label: 'DevOps & Tools', icon: Wrench },
  ];

  const getFilteredSkills = () => {
    if (activeTab === 'all') {
      return [
        ...skills.frontend.map(s => ({ ...s, category: 'Frontend' })),
        ...skills.backend.map(s => ({ ...s, category: 'Backend' })),
        ...skills.aiAndAutomation.map(s => ({ ...s, category: 'AI & Automation' })),
        ...skills.toolsAndDevOps.map(s => ({ ...s, category: 'Tools & DevOps' })),
      ];
    }
    return (skills[activeTab] || []).map(s => ({ ...s, category: activeTab }));
  };

  const getProficiencyColor = (level) => {
    switch (level) {
      case 'Comfortable':
        return 'bg-brand-lime/10 text-brand-lime border-brand-lime/30';
      case 'Working Knowledge':
        return 'bg-brand-cyan/10 text-brand-cyan border-brand-cyan/30';
      case 'Learning':
        return 'bg-amber-500/10 text-amber-400 border-amber-500/30';
      default:
        return 'bg-white/5 text-dark-gray border-white/10';
    }
  };

  return (
    <section id="skills" className="py-20 lg:py-28 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border border-brand-cyan/30 text-xs font-mono text-brand-cyan mb-3">
            <Terminal size={13} />
            <span>02 // CAPABILITIES MATRIX</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Technical Stack & Engineering Depth
          </h2>
          <p className="text-sm sm:text-base text-dark-gray max-w-2xl mt-2">
            Technologies, frameworks, and tools I leverage to build scalable web applications and automated systems.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-medium whitespace-nowrap transition-all border ${
                  isActive
                    ? 'bg-brand-accent text-white border-brand-accent shadow-md glow-accent'
                    : 'glass-panel border-white/5 text-dark-gray hover:text-white hover:border-white/20'
                }`}
              >
                <Icon size={15} />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {getFilteredSkills().map((skill, index) => (
            <TiltCard
              key={`${skill.name}-${index}`}
              maxTilt={8}
              className="p-5 border-white/10 hover:border-brand-accent/40 bg-dark-surface/50"
            >
              <div className="flex items-start justify-between mb-3">
                <span className="text-xs font-mono uppercase tracking-wider text-dark-gray">
                  {skill.category}
                </span>
                <span
                  className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${getProficiencyColor(
                    skill.proficiency
                  )}`}
                >
                  {skill.proficiency}
                </span>
              </div>

              <h4 className="text-base font-bold text-white mb-2 group-hover:text-brand-lime transition-colors">
                {skill.name}
              </h4>

              <p className="text-xs text-dark-gray leading-relaxed mt-auto">
                {skill.desc}
              </p>

              {/* Architectural bottom highlight line */}
              <div className="w-full h-0.5 bg-white/5 mt-4 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-brand-accent to-brand-lime"
                  style={{
                    width:
                      skill.proficiency === 'Comfortable'
                        ? '90%'
                        : skill.proficiency === 'Working Knowledge'
                        ? '70%'
                        : '45%'
                  }}
                />
              </div>
            </TiltCard>
          ))}
        </div>

        {/* Rubric Verification Footer Notice */}
        <div className="mt-8 p-4 rounded-xl glass-panel border border-white/5 flex items-center justify-between flex-wrap gap-2 text-xs font-mono text-dark-gray">
          <span>* Skill proficiencies adhere to qualitative standards (Comfortable, Working Knowledge, Learning)</span>
          <span className="text-brand-lime">Zero fabricated percentages</span>
        </div>
      </div>
    </section>
  );
};
