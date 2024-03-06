import styled, { createGlobalStyle } from "styled-components";
import FormularioPostagem from "./components/FormularioPostagem/FormularioPostagem";
import TelaDaPostagem from "./components/TelaDaPostagem/TelaDaPostagem";
import { useState } from "react";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
`;

function App() {

  const [titulo, setTitulo] = useState("")
  const [descricao, setDescricao] = useState("")
  const [urlImagem, setUrlImagem] = useState("")
  const [dadosForm, setDadosForm] = useState({})

  const onChangeTitulo = (e) => {
    setTitulo(e.target.value)
  }

  const onChangeDescricao = (e) => {
    setDescricao(e.target.value)
  }

  const onChangeUrlImagem = (e) =>{
    setUrlImagem(e.target.value)
  }

  const atualizar = (e) =>{
    e.preventDefault()

    const newForm = {
      titulo,
      descricao,
      urlImagem
    }
    setDadosForm(newForm)
    setTitulo("")
    setDescricao("")
    setUrlImagem("")
  }


  return (
    <>
      <GlobalStyle />

      <Container>

        <FormularioPostagem
          titulo={titulo}
          onChangeTitulo={onChangeTitulo}
          descricao={descricao}
          onChangeDescricao={onChangeDescricao}
          urlImagem={urlImagem}
          onChangeUrlImagem={onChangeUrlImagem}
          atualizar={atualizar}
        />

        <TelaDaPostagem dadosForm={dadosForm}/>

      </Container>
    </>
  );
}

export default App;
