import Head from 'next/head';
import GlobalStyle from '../styles/GlobalStyle';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();

  const goToDashboard = () => {
    router.push('/dashboard');
  }

  return (
    <>
      <Head>
        <title>IA Jurídica SaaS PRO</title>
      </Head>
      <GlobalStyle />
      <h1>Bem-vindo ao IA Jurídica SaaS PRO</h1>
      <button onClick={goToDashboard}>Ir para o Dashboard</button>
    </>
  );
}
