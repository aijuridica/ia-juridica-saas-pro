import Head from 'next/head';
import { useState } from 'react';
import { useRouter } from 'next/router';
import GlobalStyle from '../styles/GlobalStyle';
import axios from 'axios';

export default function Register() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const router = useRouter();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/auth/register`,
        { nome, email, senha }
      );

      if (response.status === 201) {
        alert('Cadastro realizado com sucesso! Faça login.');
        router.push('/login');
      } else {
        alert('Erro ao cadastrar. Verifique os dados.');
      }
    } catch (err) {
      console.error('Erro no cadastro:', err);
      alert('Erro ao tentar cadastrar. Tente novamente.');
    }
  };

  return (
    <>
      <Head>
        <title>Cadastro - IA Jurídica SaaS PRO</title>
      </Head>
      <GlobalStyle />
      <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
        <h1>Cadastro de Usuário</h1>
        <form onSubmit={handleRegister} style={{ marginTop: '2rem' }}>
          <div>
            <label>Nome:</label><br />
            <input
              type="text"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
            />
          </div>

          <div style={{ marginTop: '1rem' }}>
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

          <button type="submit" style={{ marginTop: '2rem' }}>
            Cadastrar
          </button>
        </form>
      </div>
    </>
  );
}
