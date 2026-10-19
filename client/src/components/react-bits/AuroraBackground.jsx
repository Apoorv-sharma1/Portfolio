import React from 'react';

export const AuroraBackground = ({ children, className = '' }) => {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Background Gradients */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-40 dark:opacity-50">
        <div
          className="absolute -top-[30%] -left-[10%] w-[60vw] h-[60vw] rounded-full blur-[120px] mix-blend-screen animate-pulse-slow"
          style={{
            background: 'radial-gradient(circle, rgba(139, 92, 246, 0.45) 0%, rgba(139, 92, 246, 0) 70%)',
            animationDuration: '8s'
          }}
        />
        <div
          className="absolute top-[20%] -right-[15%] w-[55vw] h-[55vw] rounded-full blur-[130px] mix-blend-screen animate-pulse-slow"
          style={{
            background: 'radial-gradient(circle, rgba(105, 201, 255, 0.35) 0%, rgba(105, 201, 255, 0) 70%)',
            animationDuration: '10s'
          }}
        />
        <div
          className="absolute -bottom-[20%] left-[25%] w-[50vw] h-[50vw] rounded-full blur-[140px] mix-blend-screen"
          style={{
            background: 'radial-gradient(circle, rgba(120, 245, 43, 0.18) 0%, rgba(120, 245, 43, 0) 70%)'
          }}
        />
      </div>

      {/* Grid overlay for architectural feel */}
      <div className="absolute inset-0 bg-grid-pattern pointer-events-none" />

      {/* Content wrapper */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};
