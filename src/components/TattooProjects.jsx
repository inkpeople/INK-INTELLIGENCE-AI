import React,{useState} from 'react';

export default function TattooProjects(){
 const [projects,setProjects]=useState([]);
 const add=()=>setProjects([...projects,{name:'Новая татуировка',style:'AI анализ ожидается',palette:'Black / Greywash'}]);
 return <section className="card">
  <h2>📁 Tattoo Projects</h2>
  <button onClick={add}>Создать проект</button>
  {projects.map((p,i)=><div key={i} className="project">
   <h3>{p.name}</h3>
   <p>Стиль: {p.style}</p>
   <p>Палитра: {p.palette}</p>
  </div>)}
 </section>
}
