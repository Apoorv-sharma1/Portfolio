import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Compass } from 'lucide-react';
import { AuroraBackground } from '../components/react-bits/AuroraBackground';

export const NotFoundPage = () => {
  return (
    <AuroraBackground className="min-h-screen flex items-center justify-center p-4">
      <div className="text-center p-8 sm:p-12 rounded-3xl glass-panel border border-white/10 max-w-md w-full">
        <div className="w-16 h-16 rounded-2xl bg-brand-accent/20 border border-brand-accent/40 flex items-center justify-center text-brand-lime mx-auto mb-6">
          <Compass size={32} />
        </div>
        <h1 className="text-5xl font-black font-mono text-white mb-2">404</h1>
        <h2 className="text-xl font-bold text-neutral-200 mb-4">Location Not Found in World</h2>
        <p className="text-sm text-dark-gray mb-8">
          The requested route doesn't exist in the portfolio coordinate system.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-brand-accent hover:bg-brand-accent/90 text-white font-semibold text-sm transition-all shadow-lg glow-accent"
        >
          <Home size={16} />
          <span>Return to Exploration Base</span>
        </Link>
      </div>
    </AuroraBackground>
  );
};
