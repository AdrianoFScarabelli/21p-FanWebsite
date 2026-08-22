import { SmokeText } from './SmokeText';
import type { Region } from '../types';

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
        <SmokeText key={`${region.id}-${index}`} text={paragraph} />
      ))}
    </>
  );
}