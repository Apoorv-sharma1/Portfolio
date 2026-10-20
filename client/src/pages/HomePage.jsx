import React from 'react';
import { HeroSection } from '../sections/HeroSection';
import { AboutSection } from '../sections/AboutSection';
import { SkillsSection } from '../sections/SkillsSection';
import { TimelineSection } from '../sections/TimelineSection';
import { CertificationsSection } from '../sections/CertificationsSection';
import { ContactSection } from '../sections/ContactSection';
import { AuroraBackground } from '../components/react-bits/AuroraBackground';

export const HomePage = () => {
  return (
    <AuroraBackground>
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <TimelineSection />
        <CertificationsSection />
        <ContactSection />
      </main>
    </AuroraBackground>
  );
};
