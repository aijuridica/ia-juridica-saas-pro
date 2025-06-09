import Head from 'next/head';
import GlobalStyle from '../styles/GlobalStyle';
import { useRouter } from 'next/router';

export default function Dashboard() {
  const router = useRouter();

  const handleModuleClick = (module) => {
    alert(`Módulo selecionado: ${module} - Aqui vamos conectar a funcionalidade.`);
    // No futuro aqui colocaremos o router.push(`/modulo-${module}`)
  };

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
          <li><button onClick={() => handleModuleClick('peticoes')}>🔎 Análise de Petições</button></li>
          <li><button onClick={() => handleModuleClick('documentos')}>📄 Geração Automatizada de Documentos</button></li>
          <li><button onClick={() => handleModuleClick('relatorios')}>📊 Relatórios e Métricas</button></li>
          <li><button onClick={() => handleModuleClick('jurisprudencia')}>⚖️ IA de Jurisprudência</button></li>
          <li><button onClick={() => handleModuleClick('configuracoes')}>⚙️ Configurações</button></li>
        </ul>
      </div>
    </>
  );
}
