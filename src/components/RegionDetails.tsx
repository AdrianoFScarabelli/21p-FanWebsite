import { useTypewriter } from '../hooks/useTypewriter';
import type { Region } from '../types';

function TypedParagraph({ text }: { text: string }) {
  const displayedText = useTypewriter(text, 25);
  return <p>{displayedText}</p>;
}

interface RegionDetailsProps {
  region: Region | null;
}

export function RegionDetails({ region }: RegionDetailsProps) {
  if (!region) {
    return <p className="region-placeholder">Clique em um ponto do mapa para ver mais detalhes.</p>;
  }

  return (
    <>
      <h3 style={{ color: region.accentColor }}>{region.name}</h3>
      {region.description.map((paragraph, index) => (
        <TypedParagraph key={`${region.id}-${index}`} text={paragraph} />
      ))}
    </>
  );
}