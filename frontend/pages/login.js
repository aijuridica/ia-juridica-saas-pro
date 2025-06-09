import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Aqui depois podemos integrar com o backend
    alert(`Login: ${email} / Senha: ${senha}`);
  };

  return (
<div style={{     display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    background: 'linear-gradient(135deg, #4E73DF, #224ABE)',
    fontFamily: 'Poppins, sans-serif',
 }}>
        <h1>Login - IA Jurídica SaaS PRO</h1>
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

            <button type="submit" style={{ marginTop: '2rem' }}>Entrar</button>
        </form>

        <div style={{ marginTop: '1rem' }}>
            <Link href="/register">
                Ainda não tem conta? <b>Cadastre-se aqui</b>
            </Link>
        </div>
    </div>
);
}



