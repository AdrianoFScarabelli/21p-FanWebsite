import type { Region } from '../types';

export const regions: Region[] = [
  {
    id: 1,
    name: 'Dema',
    accentColor: '#C41E1E',
    description: [
      'Dema é a cidade murada que serve de cenário central para toda a lore da Twenty One Pilots. Governada pelos nove Bishops, ela é apresentada oficialmente como um refúgio sagrado, protegido do mundo exterior por altas paredes de pedra.',
      'Na prática, Dema funciona como um regime de controle absoluto. Seus habitantes vivem sob vigilância constante, impedidos de questionar a autoridade dos Bishops ou de sequer imaginar uma vida fora dos limites da cidade.',
      'É dentro de Dema que nasce a resistência dos Banditos, movimento clandestino que luta para libertar seus cidadãos e revelar a verdade escondida atrás dos muros.',
    ],
    position: { x: 30, y: 30 },
  },
  {
    id: 2,
    name: 'Voldsøy',
    accentColor: '#EF8CAF',
    description: [
      'Voldsøy é uma ilha isolada, localizada além dos limites de Dema, separada do continente de Trench pelo Estreito Paladin. Seu terreno rochoso e coberto de vegetação densa contrasta com a paisagem árida da cidade murada.',
      'É nessa ilha que vive uma comunidade de criaturas conhecidas como Neds, seres pacíficos que guardam o segredo da psicocinese em seus chifres.',
      'Clancy chega até Voldsøy náufrago, após o ataque ao submarino em Port Vial, e é justamente ali que sua jornada toma um novo rumo, ao receber dos Neds o poder que usaria para enfrentar os Bishops.',
    ],
    position: { x: 35, y: 62 },
  },
  {
    id: 3,
    name: 'Port Vial',
    accentColor: '#E5CC0A',
    description: [
      'Port Vial é o principal porto controlado por Dema, funcionando como ponto de entrada e saída autorizado do território. É por ali que embarcações e expedições oficiais da cidade partem rumo ao mar aberto.',
      'O nome remete à Vialismo, a religião de estado praticada em Dema, que prega a submissão dos cidadãos e enxerga a partida rumo ao desconhecido como um destino glorioso a ser evitado.',
      'Foi próximo a Port Vial que ocorreu o ataque ao submarino relatado em "Saturday", evento que força Clancy a fugir para as águas abertas do Estreito Paladin.',
    ],
    position: { x: 12, y: 47 },
  },
];