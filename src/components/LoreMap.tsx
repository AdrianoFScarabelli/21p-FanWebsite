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
      minScale={1}
      maxScale={4}
      limitToBounds={true}
    >
      <TransformComponent
        wrapperStyle={{
          width: '600px',
          height: '600px',
          overflow: 'hidden',
          border: '2px solid #333',
          margin: '0 auto',
        }}
        contentStyle={{
          width: '600px',
          height: '600px',
        }}
      >
        <img
          src="map.png"
          alt="Mapa de Trench"
          className="map-image"
          style={{ width: '600px', height: '600px', objectFit: 'cover' }}
        />

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