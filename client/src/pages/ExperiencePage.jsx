import React from 'react';
import { TimelineSection } from '../sections/TimelineSection';
import { AuroraBackground } from '../components/react-bits/AuroraBackground';

export const ExperiencePage = () => {
  return (
    <AuroraBackground className="pt-24 min-h-screen">
      <TimelineSection />
    </AuroraBackground>
  );
};
