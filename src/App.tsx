import { useState } from 'react';
import './App.css';
import { characters } from './data/characters';

function App() {

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
        <div>
          <h2 style={{fontSize: '50px', fontFamily: 'Anton, sans-serif'}}>SOBRE</h2>
          <p>Twenty One Pilots é uma banda</p>
        </div>
      </section>
    </div>
  );
}

export default App;