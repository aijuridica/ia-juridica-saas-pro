import Head from 'next/head';
import GlobalStyle from '../styles/GlobalStyle';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

export default function Dashboard() {
  const router = useRouter();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      router.push('/login');
      return;
    }

    axios.get(`${process.env.NEXT_PUBLIC_API_URL}/auth/me`, {
      headers: { Authorization: `Bearer ${token}` }
    }).then(res => {
      setUserData(res.data);
    }).catch(err => {
      console.error(err);
      router.push('/login');
    });
  }, []);

  if (!userData) {
    return <p>Carregando dashboard...</p>;
  }

  return (
    <>
      <Head>
        <title>Dashboard | IA Jurídica SaaS PRO</title>
      </Head>
      <GlobalStyle />
      <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
        <h1>Bem-vindo, {userData.nome}!</h1>
        <p>Seu painel principal está pronto.</p>
      </div>
    </>
  );
}
