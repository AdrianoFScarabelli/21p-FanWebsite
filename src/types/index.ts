export interface Character {
  id: number;
  name: string;
  imageUrl: string;
  accentColor: string;
  description: string;
  faction?: 'Dema' | 'Trench' | 'Bishops';
}