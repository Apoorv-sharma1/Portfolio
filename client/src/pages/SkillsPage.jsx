import React from 'react';
import { SkillsSection } from '../sections/SkillsSection';
import { AuroraBackground } from '../components/react-bits/AuroraBackground';

export const SkillsPage = () => {
  return (
    <AuroraBackground className="pt-24 min-h-screen">
      <SkillsSection />
    </AuroraBackground>
  );
};
