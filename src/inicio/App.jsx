import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './App.css';

function Pag1() {
  const [dados, setDados] = useState([]);

  useEffect(() => {
    fetch('./todos.json')
      .then(res => res.json())
      .then(data => {
        data.pratos_brasileiros.sort((a, b) => a.regiao.localeCompare(b.regiao));
        setDados(data.pratos_brasileiros);
      });
  }, []);

  return (
    <>
      <h1 id='tit'>Comidas típicas do Brasil</h1>
      <section id='sec'>
        <Link to="/Nordd" id='nord'>Nordeste</Link>
        <Link to="/Nort" id='nord'>Norte</Link>
        <Link to="/cent" id='cent'>Centro-Oeste</Link>
        <Link to="/sude" id='sude'>Sudeste</Link>
        <Link to="/sul" id='sul'>Sul</Link>
        <Link to="/" id='todinhes'>Todos</Link>
      </section>

      <section id='cards'>
        {dados.map((regiao, index) => (
          <div key={index}>
            <div className='linha'>
              {regiao.top_pratos.map((comida, idx) => (
                <div key={idx} className='card'>
                  <img src={comida.imagem} alt={comida.titulo} className='card-image' />
                  <div className='card-content'>
                    <p className='card-title'>{comida.titulo}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>
    </>
  );
}

export default Pag1;
