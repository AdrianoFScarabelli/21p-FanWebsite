import { useState } from 'react';
import './App.css';
import { characters } from './data/characters';
import { albuns } from './data/albuns';

function App() {

  const [activeIndex, setActiveIndex] = useState(0);

  const activeAlbum = albuns[activeIndex];
  const prevIndex = (activeIndex - 1 + albuns.length) % albuns.length;
  const nextIndex = (activeIndex + 1) % albuns.length;
  const prevAlbum = albuns[prevIndex];
  const nextAlbum = albuns[nextIndex];

  const goToPrev = () => setActiveIndex(prevIndex);
  const goToNext = () => setActiveIndex(nextIndex);

  return (
    <div>
      {/* <div className="hero"></div> */}
      <header>
        <div>
          <img src="/logo.png" alt="foto da logo" className="logo" />
        </div>
        <nav className="header-options">
          <h2>SOBRE</h2>
          <h2>ÁLBUNS</h2>
          <h2>PERSONAGENS</h2>
          <h2>REGIÕES</h2>
        </nav>
      </header>

      <section id="background" className="background">
        <img src="/background.png" alt="foto de fundo" />
      </section>
      
      <section id="sobre" className="sobre">
        <img src="/sobre-image.png" alt="foto da logo" className="sobre-image" />
        <div style={{marginRight: '50px'}}>
          <h2 style={{fontSize: '50px', fontFamily: 'Anton, sans-serif'}}>SOBRE</h2>
          <p>
            Formada em Columbus, Ohio, em 2009, a Twenty One Pilots nasceu como trio antes de se consolidar na dupla que conhecemos hoje: Tyler Joseph, vocalista, tecladista e compositor principal, e Josh Dun, baterista, que entrou pra banda em 2011. <br />
            O som da dupla é difícil de encaixar numa única categoria — misturam rock alternativo, hip hop, eletrônico e pop, muitas vezes dentro da mesma música. Essa recusa em seguir fórmulas é parte da identidade deles desde o início, assim como os shows ao vivo intensos e as máscaras e figurinos que carregam significado dentro do universo que construíram. <br />
            Mais do que uma discografia, a Twenty One Pilots criou uma narrativa contínua que atravessa seus álbuns — personagens, símbolos e uma cidade fictícia chamada Dema formam uma lore que os fãs vêm decifrando junto com a banda há mais de uma década. Cada disco, de Vessel (2013) a Clancy (2024), adiciona uma nova camada a essa história.
          </p>
        </div>
      </section>
      
      <section
        id="albuns"
        className="albuns"
        style = {{ background: `linear-gradient(180deg, #000 0%, ${activeAlbum.backgroundColor} 100%)` }}
      >
        <div className="albuns-carousel">
          <img
            src={prevAlbum.imageUrl}
            alt={prevAlbum.name}
            className="albuns-preview albuns-preview-left"
            onClick={goToPrev}
          />

          <img
            src={activeAlbum.imageUrl}
            alt={activeAlbum.name}
            className="albuns-cover"
          />

          <img
            src={nextAlbum.imageUrl}
            alt={nextAlbum.name}
            className="albuns-preview albuns-preview-right"
            onClick={goToNext}
          />
        </div>

        <div className="albuns-options">
          <span
            className="arrow-left"
            style={{ backgroundColor: activeAlbum.arrowsColor }}
            onClick={goToPrev}
            role="button"
            aria-label="Álbum anterior"
          />
          <p style={{ color: activeAlbum.foregroundColor }}>{activeAlbum.name}</p>
          <span
            className="arrow-right"
            style={{ backgroundColor: activeAlbum.arrowsColor }}
            onClick={goToNext}
            role="button"
            aria-label="Próximo álbum"
          />
        </div>
      </section>

    </div>
  );
}

export default App;