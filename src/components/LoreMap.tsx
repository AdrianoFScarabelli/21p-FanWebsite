import { useState, useEffect } from 'react';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import { regions } from '../data/regions';
import type { Region } from '../types';

interface LoreMapProps {
  onSelectRegion: (region: Region) => void;
}

function getMapSize(width: number): number {
  if (width <= 480) return 370;
  if (width <= 768) return 370;
  return 600;
}

export function LoreMap({ onSelectRegion }: LoreMapProps) {
  const [isRotated, setIsRotated] = useState(false);
  const [mapSize, setMapSize] = useState(getMapSize(window.innerWidth));

  useEffect(() => {
    function handleResize() {
      setMapSize(getMapSize(window.innerWidth));
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <TransformWrapper key={mapSize} initialScale={1} minScale={1} maxScale={4} limitToBounds={true}>
      <TransformComponent
        wrapperStyle={{
          width: `${mapSize}px`,
          height: `${mapSize}px`,
          overflow: 'hidden',
          border: '2px solid #333',
          margin: '0 auto',
        }}
        contentStyle={{ width: `${mapSize}px`, height: `${mapSize}px` }}
      >
        <div
          className={`map-rotator ${isRotated ? 'rotated' : ''}`}
          style={{ width: `${mapSize}px`, height: `${mapSize}px` }}
        >
          <img
            src="/map.png"
            alt="Mapa de Trench"
            className="map-image"
            style={{ width: `${mapSize}px`, height: `${mapSize}px`, objectFit: 'cover' }}
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

          <button
            className="compass-pin"
            style={{ left: '15%', top: '86.5%' }}
            onClick={() => setIsRotated((prev) => !prev)}
            aria-label="Girar o mapa: East is up"
          />
        </div>
      </TransformComponent>
    </TransformWrapper>
  );
}