import styled, { createGlobalStyle } from "styled-components";
import TelaLogin from "./components/TelaLogin/TelaLogin";
import TelaCadastro from "./components/TelaCadastro/TelaCadastro";
import TelaPrincipal from "./components/TelaPrincipal/TelaPrincipal.js";
import { useState } from "react";
import TelaErro from "./components/TelaErro/TelaErro.jsx";

const GlobalStyled = createGlobalStyle`
  html {
    font-family: sans-serif9;
  }

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
`
const MainContainer = styled.main`
  height: 100vh;
`

function App() {

  const [tela, setTela] = useState('logi')

  const renderizarTela = () => {

    switch (tela) {
      case 'login':
        return <TelaLogin setTela={setTela}/>
      case 'cadastro':
        return <TelaCadastro setTela={setTela}/>
      case 'principal':
        return <TelaPrincipal setTela={setTela}/>
      default:
        return <TelaErro/>
    }
  }


  return (
    <MainContainer >
      <GlobalStyled />

      {renderizarTela()}

      {/* {tela === 'login'? <TelaLogin setTela={setTela}/> : <TelaCadastro setTela={setTela}/>}  */}

    </MainContainer>
  );
}

export default App;