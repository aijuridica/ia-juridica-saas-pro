import React, { useState } from 'react';
import Head from 'next/head';
import GlobalStyle from '../styles/GlobalStyle';

export default function GerarPeticao() {
  const [dados, setDados] = useState({
    nomeParte: '',
    assunto: '',
    detalhes: ''
  });

  const [resultado, setResultado] = useState('');

  const handleChange = (e) => {
    setDados({
      ...dados,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui futuramente vamos integrar com a IA
    setResultado(`Petição gerada para ${dados.nomeParte} sobre ${dados.assunto}: ${dados.detalhes}`);
  };

  return (
    <>
      <Head>
        <title>Gerar Petição com IA - IA Jurídica SaaS PRO</title>
      </Head>
      <GlobalStyle />
      <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
        <h1>Gerar Petição com IA</h1>

        <form onSubmit={handleSubmit} style={{ marginTop: '2rem' }}>
          <div>
            <label>Nome da Parte:</label><br />
            <input type="text" name="nomeParte" value={dados.nomeParte} onChange={handleChange} required />
          </div>
          <div style={{ marginTop: '1rem' }}>
            <label>Assunto:</label><br />
            <input type="text" name="assunto" value={dados.assunto} onChange={handleChange} required />
          </div>
          <div style={{ marginTop: '1rem' }}>
            <label>Detalhes:</label><br />
            <textarea name="detalhes" value={dados.detalhes} onChange={handleChange} required rows={4} cols={50} />
          </div>

          <button type="submit" style={{ marginTop: '1.5rem' }}>Gerar Petição</button>
        </form>

        {resultado && (
          <div style={{ marginTop: '2rem', backgroundColor: '#f0f0f0', padding: '1rem' }}>
            <h3>Petição Gerada:</h3>
            <p>{resultado}</p>
          </div>
        )}
      </div>
    </>
  );
}
