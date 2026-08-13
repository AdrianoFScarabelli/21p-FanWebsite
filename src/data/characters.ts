import type { Character } from '../types';

export const characters: Character[] = [
  {
    id: 1,
    name: 'Clancy',
    imageUrl: 'clancy.png',
    accentColor: '#E5CC0A',
    description: 'Clancy é o protagonista da lore construída pela Twenty One Pilots, um homem preso dentro dos limites de Trench (também chamada de Dema), uma cidade cercada por nove torres de pedra vigiadas pelos misteriosos Bishops.\n Sua história é contada de forma fragmentada ao longo dos álbuns Blurryface, Trench, Scaled and Icy e Clancy, através de letras, videoclipes e símbolos escondidos.\n Ao longo da narrativa, Clancy tenta escapar das muralhas amarelas que isolam Trench do mundo exterior, enfrentando os Bishops, figuras que mantêm os habitantes presos através do medo e da vigilância constante.\n Sua jornada é acompanhada por um grupo de rebeldes chamado Banditos, que também lutam contra o controle imposto pela cidade.\n O álbum Clancy (2024), que encerra essa fase da lore, marca o momento em que ele finalmente confronta Nico, o líder dos Bishops, buscando não só a própria liberdade, mas também resgatar quem ficou para trás em Trench.',
    faction: 'Banditos',
  },
  {
    id: 2,
    name: 'Torchbearer',
    imageUrl: 'torchbearer.png',
    accentColor: '#E5CC0A',
    description: 'O Torchbearer é o líder espiritual e tático dos Banditos, o grupo rebelde que luta contra o controle imposto pelos Bishops sobre a cidade de Dema. Interpretado por Josh Dun, ele veste as cores verde-oliva e amarelo características dos Banditos. O amarelo é usado justamente porque os Bishops não conseguem enxergar essa cor, o que faz dela um símbolo de esperança e invisibilidade contra o regime.\n Enquanto Clancy representa a luta interna da mente, o Torchbearer representa o suporte externo necessário pra sobreviver à jornada por Trench, ele guia Clancy, aparecendo nos momentos de fuga pra oferecer luz e direção em meio à escuridão da cidade murada.\n Sua real natureza é um dos grandes mistérios da lore: o Clancy que acompanhava o protagonista durante o isolamento na ilha de Voldsøy era apenas uma projeção, criada para guiá-lo de volta ao continente, revelando que o verdadeiro Torchbearer estava, o tempo todo, construindo e liderando o exército dos Banditos em Trench',
    faction: 'Banditos',
  },
  {
    id: 3,
    name: 'Nico',
    imageUrl: 'nico.png',
    accentColor: '#C41E1E',
    description: 'Nico é o líder dos nove Bishops que governam Dema, e o principal antagonista de toda a lore construída pela Twenty One Pilots. Seu nome completo, Nicolas Bourbaki, é revelado na música "Morph", mas sua identidade mais significativa vai muito além do título de Bishop: Nico é, na verdade, a representação física de Blurryface, o personagem que simboliza as inseguranças e a depressão de Tyler Joseph, introduzido no álbum homônimo de 2015.\n É Nico quem persegue incansavelmente Clancy sempre que ele tenta escapar de Dema, rastreando-o e trazendo-o de volta à cidade através de uma tática chamada "smearing", que deixa marcas escuras no pescoço e nas mãos de quem é capturado. Como líder dos Bishops, ele comanda um sistema onde cada um controla um distrito de Dema, sempre prontos pra impedir qualquer tentativa de fuga dos cidadãos.\n Diferente de Keons, outro Bishop conhecido por ser mais calmo e gentil com seus liderados, Nico é notoriamente tirânico, encarnando o próprio conflito interno que dá origem a toda a narrativa: a luta constante entre a esperança de liberdade dos Banditos e o peso simbólico de Blurryface tentando manter tudo sob controle.',
    faction: 'Bishops',
  },
  {
    id: 4,
    name: 'Keons',
    imageUrl: 'keons.png',
    accentColor: '#C41E1E',
    description: 'Keons é um dos nove Bishops que governam Dema, e é justamente o Bishop designado para vigiar Clancy. Assim como os nomes de todos os outros Bishops, o dele vem de um trecho de letra do álbum Blurryface, nesse caso, uma referência à música "Heavydirtysoul".\n Diferente da imagem tirânica associada a Nico, Keons era visto como muito mais calmo e gentil com seus liderados, alguém sereno e direto, com uma capacidade de foco rara entre os Bishops, Clancy chegou a admirá-lo e sentir sua presença como reconfortante, mesmo estando sob seu controle.\n Esse verniz de serenidade esconde uma reviravolta importante na lore: Keons acaba sendo revelado como o responsável pelo ataque ao submarino da banda, usando psicocinese para possuir Trash the Dragon, e por essa traição, é morto pelos próprios Bishops. É a partir de sua morte que Clancy aprende a usar os poderes de possessão na ilha de Voldsøy, chegando a possuir o próprio corpo de Keons para provocar um incêndio em Dema.',
    faction: 'Bishops',
  },
  {
    id: 5,
    name: 'Ned',
    imageUrl: 'ned.png',
    accentColor: '#EF8CAF',
    description: 'Ned é uma pequena criatura cinza que habita Voldsøy, uma ilha isolada fora dos limites de Dema e do continente de Trench. Ele vive em comunidade com outros seres iguais a ele, reunidos em cavernas próximas à costa, longe de qualquer influência dos Bishops.\n Sua importância na história aparece no momento em que Clancy, náufrago após o ataque ao submarino, chega até a ilha guiado pelo Torchbearer.\n Lá, os Neds acolhem os dois com comida e abrigo, até que um deles entrega seus próprios chifres a Clancy, revelando que essas hastes possuem poderes psicocinéticos.\n Esse gesto simples de generosidade muda o rumo de toda a narrativa: é através do presente do Ned que Clancy aprende a "possuir" corpos, adquirindo pela primeira vez uma arma real contra os Bishops. Mesmo sem tomar partido no conflito entre Dema e os Banditos, o Ned se torna peça essencial na virada de forças da lore.',
    faction: 'Neutral',
  },
  {
    id: 6,
    name: 'Trash',
    imageUrl: 'trash.png',
    accentColor: '#EF8CAF',
    description: 'Trash the Dragon é uma criatura marinha, um dragão supostamente morto há muito tempo, que repousa nas profundezas do oceano próximo a Dema. Sua existência era praticamente lendária até ser reativada em meio ao conflito entre os Bishops e os Banditos.\n Durante o evento retratado em "Saturday", o corpo de Trash é possuído por Keons através de psicocinese, sendo usado como arma para atacar o submarino onde Clancy se apresentava para a elite de Dema. O ataque provoca o naufrágio e força Clancy a fugir até a ilha de Voldsøy, dando início a uma nova fase de sua jornada.\n Trash não age por vontade própria em nenhum momento da história. Assim como o corpo de Keons mais tarde, ele funciona apenas como um vasilhame, controlado por quem domina o poder de possessão. Sua participação na lore, ainda que breve, marca um dos pontos de virada mais importantes da narrativa, sendo o gatilho que leva Clancy a descobrir seus próprios poderes.',
    faction: 'Neutral',
  },
];