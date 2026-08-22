import { useEffect, useState } from 'react';

const GLITCH_CHARS = '#$%&+=?/\\<>{}01';

export function useGlitchReveal(text: string, revealSpeed: number = 40) {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let revealedCount = 0;
    let frame = 0;

    const interval = setInterval(() => {
      frame++;

      const result = text
        .split('')
        .map((char, index) => {
          if (char === ' ') return ' ';
          if (index < revealedCount) return char;
          
          return GLITCH_CHARS[Math.floor(Math.random() * GLITCH_CHARS.length)];
        })
        .join('');

      setDisplayedText(result);

      if (frame % 1 === 0 && revealedCount < text.length) {
        revealedCount++;
      }

      if (revealedCount >= text.length) {
        setDisplayedText(text);
        clearInterval(interval);
      }
    }, revealSpeed);

    return () => clearInterval(interval);
  }, [text, revealSpeed]);

  return displayedText;
}