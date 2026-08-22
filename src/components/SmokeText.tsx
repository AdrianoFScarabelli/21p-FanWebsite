import { useSmokeReveal } from '../hooks/useSmokeReveal';

export function SmokeText({ text }: { text: string }) {
  const visibleCount = useSmokeReveal(text, 25);

  return (
    <p>
      {text.split('').map((char, index) => (
        <span
          key={index}
          className={`smoke-letter ${index < visibleCount ? 'visible' : ''}`}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </p>
  );
}