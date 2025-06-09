import Head from 'next/head';
import { useState } from 'react';
import { useRouter } from 'next/router';
import GlobalStyle from '../styles/GlobalStyle';

export default function Register() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const router = useRouter();

    const handleRegister = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('https://api.aijuridica.com.br/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, senha })
            });

            if (response.ok) {
                alert('Conta criada com sucesso!');
                router.push('/login');
            } else {
                alert('Erro ao criar conta. Verifique seus dados.');
            }
        } catch (err) {
            console.error(err);
            alert('Erro no servidor.');
        }
    };

    return (
        <>
            <Head>
                <title>Cadastro | IA Jurídica SaaS PRO</title>
            </Head>
            <GlobalStyle />
            <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
                <h1>Cadastro - IA Jurídica SaaS PRO</h1>
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
