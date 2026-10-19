import React from 'react';
import { ContactSection } from '../sections/ContactSection';
import { AuroraBackground } from '../components/react-bits/AuroraBackground';

export const ContactPage = () => {
  return (
    <AuroraBackground className="pt-24 min-h-screen">
      <ContactSection />
    </AuroraBackground>
  );
};
