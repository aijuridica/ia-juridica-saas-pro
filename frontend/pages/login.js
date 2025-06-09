import Head from 'next/head';
import { useState } from 'react';
import { useRouter } from 'next/router';
import GlobalStyle from '../styles/GlobalStyle';
import axios from 'axios';

export default function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/auth/login`,
        { email, senha }
      );

      if (response.status === 200) {
        const { access_token } = response.data;
        localStorage.setItem('token', access_token);
        router.push('/dashboard');
      } else {
        alert('Falha ao fazer login.');
      }
    } catch (err) {
      console.error('Erro no login:', err);
      alert('Erro ao tentar fazer login.');
    }
  };

  return (
    <>
      <Head>
        <title>Login - IA Jurídica SaaS PRO</title>
      </Head>
      <GlobalStyle />
      <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
        <h1>Login</h1>
        <form onSubmit={handleLogin} style={{ marginTop: '2rem' }}>
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

          <button type="submit" style={{ marginTop: '2rem' }}>
            Entrar
          </button>
        </form>
      </div>
    </>
  );
}
