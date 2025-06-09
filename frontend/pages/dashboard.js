import Head from 'next/head';
import GlobalStyle from '../styles/GlobalStyle';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function Dashboard() {
    const router = useRouter();
    const [authorized, setAuthorized] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const checkAuth = async () => {
            try {
                const response = await fetch('https://api.aijuridica.com.br/validate-token', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${localStorage.getItem('token')}` // Assumindo que o token está salvo no localStorage
                    }
                });

                if (response.ok) {
                    setAuthorized(true);
                } else {
                    router.push('/login');
                }
            } catch (error) {
                console.error('Erro de autenticação', error);
                router.push('/login');
            } finally {
                setLoading(false);
            }
        };

        checkAuth();
    }, []);

    const handleModuleClick = (module) => {
        router.push(`/modulo-${module}`);
    };

    if (loading) return <p>Carregando...</p>;

    if (!authorized) return null;

    return (
        <>
            <Head>
                <title>Dashboard | IA Jurídica SaaS PRO</title>
            </Head>
            <GlobalStyle />
            <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
                <h1>IA Jurídica SaaS PRO</h1>
                <p>Bem-vindo ao painel principal!</p>

                <h2>Seus módulos:</h2>
                <ul style={{ listStyleType: 'none', padding: 0 }}>
                    <li><button onClick={() => handleModuleClick('gerar-peticao')}>📝 Análise de Petições</button></li>
                    <li><button onClick={() => handleModuleClick('documentos')}>📄 Geração Automatizada de Documentos</button></li>
                    <li><button onClick={() => handleModuleClick('relatorios')}>📊 Relatórios e Métricas</button></li>
                    <li><button onClick={() => handleModuleClick('jurisprudencia')}>⚖️ IA de Jurisprudência</button></li>
                    <li><button onClick={() => handleModuleClick('configuracoes')}>⚙️ Configurações</button></li>
                </ul>
            </div>
        </>
    );
}
