import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import SlingButton from '../react-bits/SlingButton';
import { useTheme } from '../../context/ThemeContext';
import { MessageSquareText, Sparkles } from 'lucide-react';

export const FloatingDiscussButton = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { isDark } = useTheme();
  const [slungNotification, setSlungNotification] = useState(false);

  const handleDiscuss = () => {
    setSlungNotification(true);
    setTimeout(() => setSlungNotification(false), 2200);

    const scrollToContact = () => {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
        const nameInput = document.getElementById('contact-name');
        if (nameInput) {
          setTimeout(() => nameInput.focus(), 650);
        }
      }
    };

    if (location.pathname === '/') {
      scrollToContact();
    } else {
      navigate('/#contact');
      setTimeout(scrollToContact, 150);
    }
  };

  return (
    <div
      className="fixed bottom-6 right-6 z-[999] flex items-center gap-2.5 select-none"
      style={{ filter: 'drop-shadow(0 10px 25px rgba(0,0,0,0.3))' }}
      aria-label="Floating Discuss a Project launcher"
    >
      {/* Tooltip / Label */}
      <div
        onClick={handleDiscuss}
        className={`cursor-pointer flex items-center gap-2 px-3.5 py-2 rounded-full border text-xs font-semibold backdrop-blur-md transition-all duration-200 hover:scale-105 shadow-xl ${
          isDark
            ? 'bg-[#18181B]/95 text-white border-white/20 hover:border-brand-lime/60 hover:shadow-brand-lime/20'
            : 'bg-white/95 text-slate-800 border-slate-300 hover:border-blue-500/60 hover:shadow-blue-500/20 shadow-slate-300'
        }`}
      >
        <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
        <MessageSquareText size={15} className="text-emerald-400" />
        <span className="font-bold">Discuss a project</span>
        <span className="text-[10px] font-mono opacity-70">(Pull & sling!)</span>
      </div>

      {/* Floating notification feedback when slung */}
      {slungNotification && (
        <div className="absolute -top-10 right-0 px-3 py-1 rounded-full bg-blue-600 text-white text-[11px] font-mono shadow-xl flex items-center gap-1.5 animate-bounce">
          <Sparkles size={12} />
          <span>Slinging to Contact Form!</span>
        </div>
      )}

      {/* The SlingButton from React Bits */}
      <div className="relative group">
        <SlingButton
          onSend={handleDiscuss}
          padColor={isDark ? '#1F2430' : '#FFFFFF'}
          iconColor={isDark ? '#F5F5F5' : '#0F172A'}
          accentColor="#38BDF8"
          wellColor={isDark ? '#12151D' : '#E2E8F0'}
          bandColor={isDark ? '#3E465B' : '#94A3B8'}
          size={56}
          strokeWidth={3}
          armAt={48}
          maxPull={160}
          launchSpeed={2600}
          recoil={0.2}
          flight={120}
          particles={16}
          spread={65}
          axis="any"
          tapSends
          ariaLabel="Sling to contact form to discuss a project"
        />
      </div>
    </div>
  );
};

export default FloatingDiscussButton;
