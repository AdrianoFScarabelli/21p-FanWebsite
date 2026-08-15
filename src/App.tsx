import { useState } from 'react';
import './App.css';
import { albuns } from './data/albuns';
import { characters } from './data/characters';

const ITEM_WIDTH = 200;
const GAP = 32;

function App() {

  //LÓGICA ALBUNS

  const [activeAlbumIndex, setActiveAlbumIndex] = useState(0);
  const activeAlbum = albuns[activeAlbumIndex];

  const goToPrevAlbum = () => {
    setActiveAlbumIndex((prev) => (prev - 1 + albuns.length) % albuns.length);
  };

  const goToNextAlbum = () => {
    setActiveAlbumIndex((prev) => (prev + 1) % albuns.length);
  };

  const offset = activeAlbumIndex * (ITEM_WIDTH + GAP);

  //LÓGICA PERSONAGENS

  const [activeCharacterIndex, setActiveCharacterIndex] = useState(0);
  const activeCharacter = characters[activeCharacterIndex];

  const [activeCostumeIndex, setActiveCostumeIndex] = useState(0);

  const goToPrevCharacter = () => {
    setActiveCharacterIndex((prev) => (prev - 1 + characters.length) % characters.length);
  };

  const goToNextCharacter = () => {
    setActiveCharacterIndex((prev) => (prev + 1) % characters.length);
  };

  function changeCostume(index: string) {

    if(index===activeCharacter.imageUrl[0]){
      setActiveCostumeIndex(0);
    }
    else if(index===activeCharacter.imageUrl[1]) {
      setActiveCostumeIndex(1);
    }

    else if(index===activeCharacter.imageUrl[2]) {
      setActiveCostumeIndex(2);
    }

    else {
      setActiveCostumeIndex(3);
    }
    
  }

  function reset() {
    window.scrollTo(0, 0);
  }

  return (
    <div>
      {/* <div className="hero"></div> */}
      <header>
        <div>
          <img src="/logo.png" alt="foto da logo" className="logo" onClick={reset}/>
        </div>
        <nav className="header-options">
          <a href="#sobre">
            <h2>SOBRE</h2>
          </a>
          <a href="#albuns">
            <h2>ÁLBUNS</h2>
          </a>
          <a href="#personagens">
            <h2>PERSONAGENS</h2>
          </a>
          <h2>REGIÕES</h2>
        </nav>
      </header>

      {/* Section 1 */}
      <section id="background" className="background">
        <img src="/background.png" alt="foto de fundo" />
      </section>
      {/* Section 2 */}
      <section id="sobre" className="sobre">
        <img src="/sobre-image.png" alt="foto da logo" className="sobre-image" />
        <div style={{marginRight: '50px'}}>
          <h2 style={{fontSize: '50px', fontFamily: 'Anton, sans-serif'}}>SOBRE</h2>
          <p>
            Formada em Columbus, Ohio, em 2009, a Twenty One Pilots nasceu como trio antes de se consolidar na dupla que conhecemos hoje: Tyler Joseph, vocalista, tecladista e compositor principal, e Josh Dun, baterista, que entrou pra banda em 2011. <br />
            O som da dupla é difícil de encaixar numa única categoria, misturam rock alternativo, hip hop, eletrônico e pop, muitas vezes dentro da mesma música. Essa recusa em seguir fórmulas é parte da identidade deles desde o início, assim como os shows ao vivo intensos e as máscaras e figurinos que carregam significado dentro do universo que construíram. <br />
            Mais do que uma discografia, a Twenty One Pilots criou uma narrativa contínua que atravessa seus álbuns, personagens, símbolos e uma cidade fictícia chamada Dema formam uma lore que os fãs vêm decifrando junto com a banda há mais de uma década. Cada disco, de Vessel (2013) a Clancy (2024), adiciona uma nova camada a essa história.
          </p>
        </div>
      </section>
      {/* Section 3 */}
      <section
        id="albuns"
        className="albuns"
        style = {{ background: `linear-gradient(180deg, #000 0%, ${activeAlbum.backgroundColor} 100%)` }}
      >
        <h2 style={{fontSize: '50px', fontFamily: 'Anton, sans-serif'}}>DISCOGRAFIA</h2>
        <div className="albuns-track-wrapper">
          <div
            className="albuns-track"
            style={{ transform: `translateX(calc(50% - ${ITEM_WIDTH / 2}px - ${offset}px))` }}
          >
            {albuns.map((album, index) => (
              <img
                key={album.id}
                src={album.imageUrl}
                alt={album.name}
                className={`albuns-item ${index === activeAlbumIndex ? 'active' : ''}`}
                onClick={() => setActiveAlbumIndex(index)}
              />
            ))}
          </div>
        </div>
        <div className="albuns-options">
          <span
            className="arrow-left"
            style={{ backgroundColor: activeAlbum.arrowsColor }}
            onClick={goToPrevAlbum}
            role="button"
            aria-label="Álbum anterior"
          />
          <p style={{ color: activeAlbum.foregroundColor }}>{activeAlbum.name}</p>
          <span
            className="arrow-right"
            style={{ backgroundColor: activeAlbum.arrowsColor }}
            onClick={goToNextAlbum}
            role="button"
            aria-label="Próximo álbum"
          />
        </div>
      </section>
      {/* Section 4 */}
      <section id="personagens" className="personagens" style = {{ background: `linear-gradient(0deg, #000 0%, ${activeAlbum.backgroundColor} 100%)` }}>
        <div className="personagens-info">
          <h2 style={{fontSize: '50px', fontFamily: 'Anton, sans-serif'}}>PERSONAGENS</h2>
          <p>{activeCharacter.description}</p>
        </div>
        <div className="personagens-group">
          <div className='personagens-costumes'>
            {activeCharacter.imageUrl.map((index, cont) => (
              <button
                key={index}
                className='costume-button' 
                onClick={() => changeCostume(index)}
                style={{ color: activeCharacter.accentColor, borderColor: activeCharacter.accentColor }}
              >
                {cont+1}
              </button>
            ))}
            {/* <button 
              className='costume-button' 
              onClick={changeCostume1}
              style={{ color: activeCharacter.accentColor, borderColor: activeCharacter.accentColor }}
            >
              1
            </button>
            <button 
              className='costume-button' 
              onClick={changeCostume1}
              style={{ color: activeCharacter.accentColor, borderColor: activeCharacter.accentColor }}
            >
              2
            </button>
            <button 
              className='costume-button' 
              onClick={changeCostume1}
              style={{ color: activeCharacter.accentColor, borderColor: activeCharacter.accentColor }}
            >
              3
            </button>
            <button 
              className='costume-button' 
              onClick={changeCostume1}
              style={{ color: activeCharacter.accentColor, borderColor: activeCharacter.accentColor }}
            >
              4
            </button> */}
          </div>
          <img
            src={activeCharacter.imageUrl[activeCostumeIndex]}
            alt={activeCharacter.name}
            style={{ borderColor: activeCharacter.accentColor }}
            className="personagens-card"
          />
          <div className="albuns-options">
            <span
              className="arrow-left"
              style={{ backgroundColor: activeCharacter.accentColor }}
              role="button"
              onClick={goToPrevCharacter}
            />
            <p>{activeCharacter.name}</p>
            <span
              className="arrow-right"
              style={{ backgroundColor: activeCharacter.accentColor }}
              role="button"
              onClick={goToNextCharacter}
            />
          </div>
        </div>
      </section>

      {/* Section 5 */}
      <section id="regioes" className="regioes">
        <div>
            <img src="map1.png" alt="Mapa" />
        </div>
      </section>

    </div>
  );
}

export default App;