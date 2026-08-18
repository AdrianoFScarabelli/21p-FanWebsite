export interface Character {
  id: number;
  name: string;
  imageUrl: string[];
  accentColor: string;
  description: string;
  faction?: 'Neutral' | 'Banditos' | 'Bishops';
}

export interface Album {
  id: number;
  name: string;
  imageUrl: string;
  backgroundColor: string;
  foregroundColor: string;
  arrowsColor: string;
}

export interface Region {
  id: number;
  name: string;
  accentColor: string;
  description: string[];
  position: {
    x: number; // porcentagem da largura do mapa (0-100)
    y: number; // porcentagem da altura do mapa (0-100)
  };
}