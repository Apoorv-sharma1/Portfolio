import React from 'react';
import { AboutSection } from '../sections/AboutSection';
import { AuroraBackground } from '../components/react-bits/AuroraBackground';

export const AboutPage = () => {
  return (
    <AuroraBackground className="pt-24 min-h-screen">
      <AboutSection />
    </AuroraBackground>
  );
};
