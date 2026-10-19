import React, { useState, useEffect } from 'react';

const CHARACTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+~|}{[]:;?><,./-=';

export const DecryptText = ({
  text,
  speed = 40,
  maxIterations = 10,
  className = '',
  revealDelay = 0
}) => {
  const [displayText, setDisplayText] = useState('');
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    let timeout;
    let iteration = 0;
    let interval;

    const startDecryption = () => {
      interval = setInterval(() => {
        setDisplayText(
          text
            .split('')
            .map((char, index) => {
              if (char === ' ') return ' ';
              if (index < iteration) {
                return text[index];
              }
              return CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)];
            })
            .join('')
        );

        if (iteration >= text.length) {
          clearInterval(interval);
        }

        iteration += 1 / 2;
      }, speed);
    };

    timeout = setTimeout(startDecryption, revealDelay);

    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, [text, speed, revealDelay, isHovered]);

  return (
    <span
      className={`font-mono inline-block ${className}`}
      onMouseEnter={() => setIsHovered(prev => !prev)}
    >
      {displayText || text}
    </span>
  );
};
