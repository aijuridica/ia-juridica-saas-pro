import Head from 'next/head';
import GlobalStyle from '../styles/GlobalStyle';
import Link from 'next/link';
import styled from 'styled-components';

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 3rem;
`;

const NavLinks = styled.nav`
  a {
    margin: 0 1rem;
    text-decoration: none;
    color: #212529;
  }
  .cadastro {
    background: #2563eb;
    color: white;
    padding: 0.5rem 1rem;
    border-radius: 5px;
  }
`;

const Hero = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3rem;
  background-color: #f8f9fa;
`;

const Features = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  padding: 3rem;
`;

const FeatureBox = styled.div`
  text-align: center;
  padding: 1rem;
`;

const Footer = styled.footer`
  text-align: center;
  padding: 2rem;
  background-color: #f1f1f1;
  font-size: 0.9rem;
`;

export default function Home() {
  return (
    <>
      <Head>
        <title>IA Jurídica SaaS PRO</title>
      </Head>
      <GlobalStyle />
      <Header>
        <div><strong>⚖ IA JURÍDICA</strong></div>
        <NavLinks>
          <Link href="/">Início</Link>
          <Link href="/recursos">Recursos</Link>
          <Link href="/precos">Preços</Link>
          <Link href="/login">Login</Link>
          <Link href="/register" className="cadastro">Cadastrar-se</Link>
        </NavLinks>
      </Header>

      <Hero>
        <div>
          <h1>IA Jurídica SaaS PRO</h1>
          <p>Automatize petições, jurisprudência e documentos com segurança total.</p>
          <div style={{ marginTop: '1rem' }}>
            <Link href="/register"><button>Começar agora</button></Link>
            <Link href="/demo" style={{ marginLeft: '1rem' }}><button>Ver demonstração</button></Link>
          </div>
        </div>
        <div>
          <img src="/robot-ia.png" alt="IA Jurídica" width="300"/>
        </div>
      </Hero>

      <Features>
        <FeatureBox>
          <h3>📄 Geração de Petições</h3>
        </FeatureBox>
        <FeatureBox>
          <h3>⚖ Jurisprudência</h3>
        </FeatureBox>
        <FeatureBox>
          <h3>🔒 Segurança total</h3>
        </FeatureBox>
        <FeatureBox>
          <h3>📂 Classificador de Documentos</h3>
        </FeatureBox>
        <FeatureBox>
          <h3>📊 Análise preditiva</h3>
        </FeatureBox>
        <FeatureBox>
          <h3>🌐 Integração com tribunais</h3>
        </FeatureBox>
      </Features>

      <Footer>
        IA Jurídica SaaS PRO © 2025 — Todos os direitos reservados
      </Footer>
    </>
  )
}
