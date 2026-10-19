import React from 'react';
import { CertificationsSection } from '../sections/CertificationsSection';
import { AuroraBackground } from '../components/react-bits/AuroraBackground';

export const CertificationsPage = () => {
  return (
    <AuroraBackground className="pt-24 min-h-screen">
      <CertificationsSection />
    </AuroraBackground>
  );
};
