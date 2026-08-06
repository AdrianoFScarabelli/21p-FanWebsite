import { useState } from 'react';
import './App.css';
import { characters } from './data/characters';

function App() {

  return (
    <div>
      <div className="header">
        <div>
          <img src="../public/logo.png" alt="foto da logo" className="logo" />
        </div>
        <div className="header-options">
          <h2>SOBRE</h2>
        </div>
      </div>
    </div>
  );
}

export default App;