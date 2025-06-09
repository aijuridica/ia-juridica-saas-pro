import Head from 'next/head';
import GlobalStyle from '../styles/GlobalStyle';
import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

export default function Register() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const router = useRouter();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/auth/register`, {
        email,
        senha,
      });
      alert('Cadastro realizado com sucesso!');
      router.push('/login');
    } catch (error) {
      console.error('Erro ao cadastrar:', error);
      alert('Erro no cadastro.');
    }
  };

  return (
    <>
      <Head>
        <title>Cadastro - IA Jurídica SaaS PRO</title>
      </Head>
      <GlobalStyle />
      <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
        <h1>Cadastro IA Jurídica SaaS PRO</h1>
        <form onSubmit={handleRegister} style={{ marginTop: '2rem' }}>
          <div>
            <label>Email:</label><br />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div style={{ marginTop: '1rem' }}>
            <label>Senha:</label><br />
            <input
              type="password"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              required
            />
          </div>
          <button type="submit" style={{ marginTop: '2rem' }}>Cadastrar</button>
        </form>
      </div>
    </>
  );
}
