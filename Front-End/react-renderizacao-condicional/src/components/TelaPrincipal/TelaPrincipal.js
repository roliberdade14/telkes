import { Div, Titulo } from "./styled";

function TelaPrincipal({setTela}) {

  const deslogar = () => {
    setTela('login')
  }

  return (
      <Div>
          <Titulo>Tela Principal</Titulo>
          <p>Boas-vindas à aplicação!</p>
          <button onClick={deslogar}>Deslogar</button>
      </Div>
  )
}

export default TelaPrincipal;