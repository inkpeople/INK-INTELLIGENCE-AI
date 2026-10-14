import React,{useState} from 'react';

export default function GreywashStudio(){
 const [level,setLevel]=useState(20);
 return <section className="card">
  <h2>⚫ Greywash Studio</h2>
  <input type="range" min="5" max="90" value={level} onChange={e=>setLevel(e.target.value)}/>
  <h3>{level}% Greywash</h3>
  <p>Black ink: {level} частей</p>
  <p>Diluter: {100-level} частей</p>
 </section>
}
