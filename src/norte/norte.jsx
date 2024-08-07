import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './norte.css';

function Nort() {
  const [dados, setDados] = useState([]);

  useEffect(() => {
    fetch('./norte.json')
      .then(res => res.json())
      .then(data => {
        console.log('Dados recebidos:', data);
        setDados(data.top_pratos || []); 
      })
      .catch(error => console.error('Erro ao buscar os dados:', error)); 
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
        {dados.length === 0 ? (
          <p>Carregando...</p> // Mensagem de carregamento
        ) : (
          dados.map((comida, idx) => (
            <div key={idx} className='card'>
              <img src={comida.imagem} alt={comida.titulo} className='card-image' />
              <div className='card-content'>
                <p className='card-title'>{comida.titulo}</p>
              </div>
            </div>
          ))
        )}
      </section>
    </>
  );
}

export default Nort;
