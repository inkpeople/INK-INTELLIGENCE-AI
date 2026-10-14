import React, {useState} from 'react';
import './style.css';
import ColorLab from './components/ColorLab';
import GreywashStudio from './components/GreywashStudio';
import TattooAnalyzer from './components/TattooAnalyzer';

export default function App(){
 const [tab,setTab]=useState('studio');
 return <main className="app">
  <header className="hero">
   <h1>INK INTELLIGENCE AI</h1>
   <p>Digital intelligence assistant for tattoo artists</p>
  </header>

  <nav className="nav">
   <button onClick={()=>setTab('studio')}>AI Studio</button>
   <button onClick={()=>setTab('color')}>🎨 Color</button>
   <button onClick={()=>setTab('grey')}>⚫ Greywash</button>
   <button onClick={()=>setTab('analyzer')}>📷 Analyzer</button>
  </nav>

  <section className="dashboard">
   {tab==='studio' && <>
    <ColorLab />
    <GreywashStudio />
    <TattooAnalyzer />
   </>}
   {tab==='color' && <ColorLab />}
   {tab==='grey' && <GreywashStudio />}
   {tab==='analyzer' && <TattooAnalyzer />}
  </section>
 </main>
}
