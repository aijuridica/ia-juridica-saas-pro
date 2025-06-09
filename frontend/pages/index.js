
import ButtonPrimary from '../components/ButtonPrimary'
import InputField from '../components/InputField'

export default function Home() {
  return (
    <div style={{ padding: 20 }}>
      <h1>IA Jurídica SaaS PRO</h1>
      <InputField placeholder="Digite seu email" />
      <InputField type="password" placeholder="Digite sua senha" />
      <ButtonPrimary>Entrar</ButtonPrimary>
    </div>
  )
}
