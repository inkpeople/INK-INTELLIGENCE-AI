import React, {useState} from 'react';

export default function TattooAnalyzer(){
 const [file,setFile]=useState(null);
 const [result,setResult]=useState('');
 function analyze(){
  setResult('Стиль: анализ ожидает AI Vision.\nРекомендации: иглы и техника будут определяться после подключения модели.');
 }
 return <section className="card">
  <h2>📷 Tattoo Analyzer AI</h2>
  <input type="file" accept="image/*" onChange={e=>setFile(e.target.files[0])}/>
  <button onClick={analyze}>Анализировать</button>
  {file && <p>Фото: {file.name}</p>}
  <pre>{result}</pre>
 </section>
}
