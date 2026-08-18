import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import { regions } from '../data/regions';
import type { Region } from '../types';

interface LoreMapProps {
  onSelectRegion: (region: Region) => void;
}

export function LoreMap({ onSelectRegion }: LoreMapProps) {
  return (
    <TransformWrapper
      initialScale={1}
      minScale={0.8}
      maxScale={3}
      limitToBounds={true}
    >
      <TransformComponent wrapperClass="map-wrapper" contentClass="map-content">
        <img src="map1.png" alt="Mapa de Trench" className="map-image" />

        {regions.map((region) => (
          <button
            key={region.id}
            className="map-pin"
            style={{
              left: `${region.position.x}%`,
              top: `${region.position.y}%`,
              backgroundColor: region.accentColor,
            }}
            onClick={() => onSelectRegion(region)}
            aria-label={`Ver detalhes de ${region.name}`}
          />
        ))}
      </TransformComponent>
    </TransformWrapper>
  );
}