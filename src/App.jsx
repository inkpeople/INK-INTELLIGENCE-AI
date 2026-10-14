import React from 'react';
import './style.css';
import ColorLab from './components/ColorLab';
import GreywashStudio from './components/GreywashStudio';
import TattooAnalyzer from './components/TattooAnalyzer';

export default function App(){
 return <main className="app">
  <header className="hero">
   <h1>INK INTELLIGENCE AI</h1>
   <p>Digital intelligence assistant for tattoo artists</p>
  </header>

  <section className="dashboard">
   <ColorLab />
   <GreywashStudio />
   <TattooAnalyzer />
   <section className="card">
    <h2>🪡 Needle AI</h2>
    <p>Подбор игл и техники под стиль татуировки</p>
   </section>
  </section>
 </main>
}
