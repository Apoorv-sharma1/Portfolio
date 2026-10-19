import React, { useState, useRef, useEffect } from 'react';
import './HoldButton.css';

export const HoldButton = ({
  children,
  doneLabel = 'Sent to MongoDB',
  backgroundColor = '#131720',
  fillColor = '#78F52B',
  textColor = '#F5F5F5',
  fillTextColor = '#000000',
  size = 'md',
  radius = 14,
  fillDirection = 'right',
  holdTime = 750,
  releaseTime = 200,
  pressScale = 0.97,
  wave = true,
  waveAmplitude = 6,
  glow = true,
  resetAfter = 2000,
  disabled = false,
  loading = false,
  className = '',
  onHold,
  ...props
}) => {
  const [progress, setProgress] = useState(0); // 0 to 1
  const [isHolding, setIsHolding] = useState(false);
  const [isDone, setIsDone] = useState(false);
  const animFrameRef = useRef(null);
  const startTimeRef = useRef(null);

  const startHold = () => {
    if (disabled || loading || isDone) return;
    setIsHolding(true);
    startTimeRef.current = performance.now();

    const loop = (now) => {
      const elapsed = now - startTimeRef.current;
      const curProgress = Math.min(1, elapsed / holdTime);
      setProgress(curProgress);

      if (curProgress >= 1) {
        setIsHolding(false);
        setIsDone(true);
        if (onHold) onHold();

        if (resetAfter > 0) {
          setTimeout(() => {
            setIsDone(false);
            setProgress(0);
          }, resetAfter);
        }
      } else {
        animFrameRef.current = requestAnimationFrame(loop);
      }
    };

    animFrameRef.current = requestAnimationFrame(loop);
  };

  const endHold = () => {
    if (isDone) return;
    setIsHolding(false);
    if (animFrameRef.current) {
      cancelAnimationFrame(animFrameRef.current);
    }

    // Smooth release
    const startProgress = progress;
    const releaseStart = performance.now();

    const reverseLoop = (now) => {
      const elapsed = now - releaseStart;
      const factor = Math.max(0, 1 - elapsed / releaseTime);
      const curProgress = startProgress * factor;
      setProgress(curProgress);

      if (curProgress > 0) {
        animFrameRef.current = requestAnimationFrame(reverseLoop);
      } else {
        setProgress(0);
      }
    };

    animFrameRef.current = requestAnimationFrame(reverseLoop);
  };

  useEffect(() => {
    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, []);

  const sizeClasses = {
    sm: 'px-4 py-2 text-xs',
    md: 'px-6 py-3.5 text-sm',
    lg: 'px-8 py-4 text-base'
  }[size] || 'px-6 py-3.5 text-sm';

  return (
    <div className={`hold-button-container ${className}`}>
      <button
        type="button"
        onMouseDown={startHold}
        onMouseUp={endHold}
        onMouseLeave={endHold}
        onTouchStart={startHold}
        onTouchEnd={endHold}
        disabled={disabled || loading}
        style={{
          backgroundColor,
          color: progress > 0.6 ? fillTextColor : textColor,
          borderRadius: `${radius}px`,
          transform: isHolding ? `scale(${pressScale})` : 'scale(1)',
          boxShadow: glow && (isHolding || isDone) ? `0 0 25px ${fillColor}50` : 'none'
        }}
        className={`hold-button w-full select-none ${sizeClasses} ${glow && isHolding ? 'hold-button--glow' : ''} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
        {...props}
      >
        {/* Fill Indicator Bar */}
        <div
          className={`hold-button__fill ${wave ? 'hold-button__fill--wave' : ''}`}
          style={{
            width: `${progress * 100}%`,
            backgroundColor: fillColor,
            borderRadius: `${radius}px`
          }}
        />

        {/* Content */}
        <span className="hold-button__content">
          {isDone ? doneLabel : children}
        </span>
      </button>
    </div>
  );
};

export default HoldButton;
