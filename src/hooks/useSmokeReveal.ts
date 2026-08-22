import { useEffect, useState } from 'react';

export function useSmokeReveal(text: string, staggerMs: number = 30) {
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    setVisibleCount(0);
    let current = 0;

    const interval = setInterval(() => {
      current++;
      setVisibleCount(current);
      if (current >= text.length) clearInterval(interval);
    }, staggerMs);

    return () => clearInterval(interval);
  }, [text, staggerMs]);

  return visibleCount;
}