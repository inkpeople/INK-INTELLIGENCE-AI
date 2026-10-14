import React from 'react';
import './style.css';
import ColorLab from './components/ColorLab';
import GreywashStudio from './components/GreywashStudio';

export default function App(){
 return <main className="app">
  <h1>INK INTELLIGENCE AI</h1>
  <p>Digital assistant for tattoo artists</p>
  <ColorLab />
  <GreywashStudio />
  <section className="grid">
   <button>📷 Tattoo Analyzer</button>
   <button>🪡 Needle AI</button>
  </section>
 </main>
}
