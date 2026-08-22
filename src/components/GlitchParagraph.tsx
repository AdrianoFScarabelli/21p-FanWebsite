import { useGlitchReveal } from '../hooks/useGlitchReveal';

export function GlitchParagraph({ text }: { text: string }) {
  const displayedText = useGlitchReveal(text, 35);
  return <p className="glitch-text">{displayedText}</p>;
}