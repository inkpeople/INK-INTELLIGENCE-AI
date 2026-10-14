import React, {useState} from 'react';

export default function ColorLab(){
 const [a,setA]=useState('Красный');
 const [b,setB]=useState('Жёлтый');
 const mixes={
  'Красный+Жёлтый':'Оранжевый',
  'Синий+Жёлтый':'Зелёный',
  'Красный+Синий':'Фиолетовый',
  'Чёрный+Белый':'Серый'
 };
 const result=mixes[`${a}+${b}`]||'Настройте смесь';
 return <section className="card">
  <h2>🎨 AI Color Lab</h2>
  <select value={a} onChange={e=>setA(e.target.value)}><option>Красный</option><option>Синий</option><option>Чёрный</option></select>
  <select value={b} onChange={e=>setB(e.target.value)}><option>Жёлтый</option><option>Белый</option><option>Синий</option></select>
  <h3>Результат: {result}</h3>
  <p>Рецепт пигмента будет расширен через AI Vision.</p>
 </section>
}
