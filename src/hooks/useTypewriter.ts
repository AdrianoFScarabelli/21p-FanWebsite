import { useState, useEffect } from 'react';

export function useTypewriter(text: string, speed: number = 30) {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let currentIndex = 0;
    setDisplayedText('');

    const interval = setInterval(() => {
      currentIndex++;

      if (currentIndex <= text.length) {
        setDisplayedText(text.slice(0, currentIndex));
      } else {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return displayedText;
}