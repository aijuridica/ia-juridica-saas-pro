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
<div style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    background: 'linear-gradient(135deg, #4E73DF, #224ABE)',
    fontFamily: 'Poppins, sans-serif',
}}>
    <div style={{
        padding: '3rem',
        background: '#fff',
        borderRadius: '10px',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
        width: '400px',
        textAlign: 'center',
    }}>
        <h1 style={{ color: '#224ABE' }}>Login - IA Jurídica SaaS PRO</h1>
        <form onSubmit={handleLogin} style={{ marginTop: '2rem' }}>
            <div style={{ marginBottom: '1rem' }}>
                <label style={{ fontWeight: '600' }}>Email:</label><br />
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    style={{
                        width: '100%',
                        padding: '10px',
                        borderRadius: '5px',
                        border: '1px solid #ccc',
                    }}
                />
            </div>

            <div style={{ marginBottom: '1rem' }}>
                <label style={{ fontWeight: '600' }}>Senha:</label><br />
                <input
                    type="password"
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                    required
                    style={{
                        width: '100%',
                        padding: '10px',
                        borderRadius: '5px',
                        border: '1px solid #ccc',
                    }}
                />
            </div>

            <button type="submit" style={{
                marginTop: '1rem',
                padding: '12px',
                width: '100%',
                background: '#224ABE',
                color: '#fff',
                border: 'none',
                borderRadius: '5px',
                fontSize: '16px',
                cursor: 'pointer',
                transition: '0.3s',
            }}>
                Entrar
            </button>
        </form>

        <div style={{ marginTop: '1rem' }}>
            <Link href="/register" style={{ color: '#4E73DF', fontWeight: '600' }}>
                Ainda não tem conta? <b>Cadastre-se aqui</b>
            </Link>
        </div>
    </div>
</div>


