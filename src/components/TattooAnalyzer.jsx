import React, {useState} from 'react';

export default function TattooAnalyzer(){
 const [file,setFile]=useState(null);
 const [result,setResult]=useState(null);

 function analyze(){
  setResult({
   style:'AI Vision: подготовка анализа стиля',
   colors:['Black','Greywash','Accent Color'],
   needles:['9RL контур','13RM тени','15CM плавные переходы'],
   techniques:['whip shading','smooth shading'],
   difficulty:'Средняя'
  });
 }

 return <section className="card">
  <h2>📷 Tattoo Analyzer AI</h2>
  <input type="file" accept="image/*" onChange={e=>setFile(e.target.files[0])}/>
  {file && <p>Фото: {file.name}</p>}
  <button onClick={analyze}>Анализировать AI</button>
  {result && <div>
   <p>🎨 Стиль: {result.style}</p>
   <p>Цвета: {result.colors.join(', ')}</p>
   <p>🪡 Иглы: {result.needles.join(', ')}</p>
   <p>Техника: {result.techniques.join(', ')}</p>
   <p>Сложность: {result.difficulty}</p>
  </div>}
 </section>
}
