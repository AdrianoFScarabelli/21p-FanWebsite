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
    position: { x: 31, y: 31 },
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
    position: { x: 34, y: 61.5 },
  },
  {
    id: 3,
    name: 'Port Vial',
    accentColor: '#C41E1E',
    description: [
      'Port Vial é o principal porto controlado por Dema, funcionando como ponto de entrada e saída autorizado do território. É por ali que embarcações e expedições oficiais da cidade partem rumo ao mar aberto.',
      'O nome remete à Vialismo, a religião de estado praticada em Dema, que prega a submissão dos cidadãos e enxerga a partida rumo ao desconhecido como um destino glorioso a ser evitado.',
      'Foi próximo a Port Vial que ocorreu o ataque ao submarino relatado em "Saturday", evento que força Clancy a fugir para as águas abertas do Estreito Paladin.',
    ],
    position: { x: 12, y: 47 },
  },
  {
    id: 4,
    name: 'Bandito Camp',
    accentColor: '#E5CC0A',
    description: [
      'O Bandito Camp é o refúgio dos rebeldes que se opõem ao regime de Dema, escondido num vale glacial fora do alcance direto dos Bishops.',
      'É nesse acampamento que novos membros são recebidos pelos Banditos através de um ritual simbólico: a cabeça é raspada e mais fita amarela é adicionada à roupa, marcando o pertencimento ao grupo.',
      'Foi ali que Clancy formou seu vínculo com o Torchbearer, antes de ser capturado novamente por Nico através de vigilância aérea, mesmo estando sob a proteção da resistência.',
    ],
    position: { x: 59, y: 51 },
  },
  {
    id: 5,
    name: 'Torches',
    accentColor: '#E5CC0A',
    description: [
      'As Tochas marcam o caminho percorrido pelos Banditos durante os resgates realizados fora dos muros de Dema, servindo como guia na escuridão do território de Trench.',
      'Cada tocha acesa representa calor humano em contraste direto com a frieza da cidade murada, um símbolo de acolhimento para quem consegue escapar do controle dos Bishops.',
      'Foi seguindo esse caminho de luz que Clancy, ainda desorientado após sua fuga, encontrou os Banditos pela primeira vez e foi conduzido até o acampamento rebelde.',
    ],
    position: { x: 62, y: 44 },
  },
  {
    id: 6,
    name: 'THE WAY OUT',
    accentColor: '#EF8CAF',
    description: [
      'The Way Out é o nome dado ao labirinto de passagens escondidas nos mapas oficiais de Dema, revelado pelos próprios documentos vazados pela cidade através do site secreto administrado por Clancy.',
      'A frase "East is up" (Leste é pra cima) aparece repetidamente nesses registros, indicando que a orientação real do mapa esconde uma saída que os Bishops preferem manter oculta dos cidadãos.',
      'Mensagens como "a bússola mente, eles não controlam você" reforçam o verdadeiro significado por trás do labirinto: a ideia de que existe sempre um caminho de escape, mesmo quando o sistema insiste que não há saída.',
      'Talvez clicar na bússola faça alguma coisa...'
    ],
    position: { x: 78, y: 52 },
  },
];