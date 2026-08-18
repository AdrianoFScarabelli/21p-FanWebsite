import type { Region } from '../types';

export const regions: Region[] = [
  {
    id: 1,
    name: 'Dema',
    accentColor: '#E5E5E5',
    description: ['...'],
    position: { x: 35, y: 78 }, // aproximando pela posição do selo "DEMA" no seu mapa
  },
  {
    id: 2,
    name: 'Voldsøy',
    accentColor: '#8FA8B2',
    description: ['...'],
    position: { x: 88, y: 62 },
  },
  {
    id: 3,
    name: 'Port Vial',
    accentColor: '#C41E1E',
    description: ['...'],
    position: { x: 60, y: 92 },
  },
];