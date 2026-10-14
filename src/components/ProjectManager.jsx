import React,{useState} from 'react';

export default function ProjectManager(){
 const [projects,setProjects]=useState([]);
 const add=()=>setProjects([...projects,{name:'Новая тату работа',style:'AI анализ'}]);
 return <section className="card">
  <h2>📁 Tattoo Projects</h2>
  <button onClick={add}>Создать проект</button>
  {projects.map((p,i)=><div key={i} className="project">
   <b>{p.name}</b><br/>{p.style}
  </div>)}
 </section>
}
