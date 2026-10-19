import React, { useRef, useState } from 'react';

export const TiltCard = ({
  children,
  className = '',
  glare = true,
  maxTilt = 12,
  accentColor = '#8B5CF6'
}) => {
  const cardRef = useRef(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50, opacity: 0 });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -maxTilt;
    const rotateY = ((x - centerX) / centerX) * maxTilt;

    setRotation({ x: rotateX, y: rotateY });

    if (glare) {
      setGlarePos({
        x: (x / rect.width) * 100,
        y: (y / rect.height) * 100,
        opacity: 0.15
      });
    }
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
    setGlarePos(prev => ({ ...prev, opacity: 0 }));
  };

  return (
    <div
      style={{ perspective: '1000px' }}
      className="h-full"
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
          transformStyle: 'preserve-3d',
          transition: rotation.x === 0 ? 'transform 0.5s ease-out' : 'none'
        }}
        className={`relative rounded-xl overflow-hidden glass-panel border transition-colors ${className}`}
      >
        {/* Dynamic Glare overlay */}
        {glare && (
          <div
            className="absolute inset-0 pointer-events-none transition-opacity duration-300"
            style={{
              background: `radial-gradient(circle at ${glarePos.x}% ${glarePos.y}%, rgba(255,255,255,${glarePos.opacity}) 0%, transparent 60%)`,
              opacity: glarePos.opacity > 0 ? 1 : 0
            }}
          />
        )}

        {/* Content with 3D translation for depth */}
        <div style={{ transform: 'translateZ(20px)' }} className="relative z-10 h-full flex flex-col">
          {children}
        </div>
      </div>
    </div>
  );
};
