import { useState } from 'react';

export default function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Aqui depois podemos integrar com o backend
    alert(`Login: ${email} / Senha: ${senha}`);
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
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
    </div>
  );
}
