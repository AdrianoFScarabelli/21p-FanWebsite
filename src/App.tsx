import { useState, useEffect } from 'react';
import './App.css';
import { albuns } from './data/albuns';
import { characters } from './data/characters';
import { LoreMap } from './components/LoreMap';
import { RegionDetails } from './components/RegionDetails'
import type { Region } from './types';

import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';

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

  //LÓGICA PERSONAGENS

  const [activeCharacterIndex, setActiveCharacterIndex] = useState(0);
  const activeCharacter = characters[activeCharacterIndex];

  const [activeCostumeIndex, setActiveCostumeIndex] = useState(0);

  const goToPrevCharacter = () => {
    setActiveCharacterIndex((prev) => (prev - 1 + characters.length) % characters.length);
    setActiveCostumeIndex(0);
  };

  const goToNextCharacter = () => {
    setActiveCharacterIndex((prev) => (prev + 1) % characters.length);
    setActiveCostumeIndex(0);
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

    else if(index===activeCharacter.imageUrl[3]) {
      setActiveCostumeIndex(3);
    }

    else {
      setActiveCostumeIndex(4);
    }
    
  }

  //LÓGICA REGIOES

  const [selectedRegion, setSelectedRegion] = useState<Region | null>(null);

  function reset() {
    window.scrollTo(0, 0);
  }

  //LÓGICA RESPONSIVIDADE

  const [itemWidth, setItemWidth] = useState(200);

  useEffect(() => {
    const updateWidth = () => {
      setItemWidth(window.innerWidth <= 768 ? 120 : 200);
    };
    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  const offset = activeAlbumIndex * (itemWidth + GAP);

  return (
    <div>
      <header>
        
        <div className="logo-wrapper">
          <img src="/logo.png" alt="foto da logo" className="logo" onClick={reset} />
          <span className="logo-fullname">TWENTY ONE PILOTS</span>
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
          <a href="#regioes">
            <h2>REGIÕES</h2>
          </a>
          
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
        <h2 style={{fontSize: '50px', fontFamily: 'Anton, sans-serif', marginTop: '12vh'}}>DISCOGRAFIA</h2>
        <div className="albuns-track-wrapper">
          <div
            className="albuns-track"
            style={{ transform: `translateX(calc(50% - ${itemWidth / 2}px - ${offset}px))` }}
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
            <div className="personagens-numbers">
              {activeCharacter.imageUrl.map((imageUrl, index) => (
                <button
                  key={index}
                  className={`costume-button ${index === activeCostumeIndex ? 'active' : ''}`}
                  onClick={() => changeCostume(imageUrl)}
                  style={{ borderColor: activeCharacter.accentColor }}
                >
                  {index + 1}
                </button>
              ))}
            </div>
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
        <div className="regioes-content">
          <div>
            <h2 style={{ fontSize: '50px', fontFamily: 'Anton, sans-serif' }}>REGIÕES</h2>
            <div className="regioes-group">
              <LoreMap onSelectRegion={setSelectedRegion} />
              <div
                className="region-details"
                style={{ borderColor: selectedRegion?.accentColor ?? '#333' }}
              >
                <RegionDetails region={selectedRegion} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">

        <img src="logo.png" alt="Logo do Twenty One Pilots" className="footer-logo" onClick={reset}/>

        <p className="footer-disclaimer">
          Este é um projeto de fã, criado apenas para fins de portfólio, estudo e treino.
          Não possui vínculo oficial com a banda ou sua gravadora.
        </p>

        <a
          href="https://twentyonepilots.com"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-official-link"
        >
          Visitar site oficial da banda
        </a>

        <p className="footer-disclaimer">
          Twenty One Pilots © todos os direitos reservados aos seus respectivos detentores.
        </p>

        <p className="footer-credit">
          Site desenvolvido por <span style={{color: '#DB2422'}}>Adriano Fernandes Scarabelli</span>
        </p>

        <div className="footer-social">

          <a 
            href="https://github.com/AdrianoFScarabelli?tab=overview&from=2026-08-01&to=2026-08-21"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub size={28} className="footer-icon1"/>
          </a>

          <a 
            href="https://www.linkedin.com/in/adriano-fernandes-scarabelli-728a31184"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={28} className="footer-icon2"/>
          </a>

          <a 
            href="mailto:adrianoscarabelli@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Enviar e-mail"
          >
            <SiGmail size={28} className="footer-icon3"/>
          </a>

        </div>
      
      </footer>

    </div>
  );
}

export default App;