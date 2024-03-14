import { Form, FormContainer, Input, SendButton, StyledLabel, RegisterButton } from "./styled";

function TelaLogin({setTela}) {

  const login = () => {
    setTela('principal')
  }

  const mostrarTelaCadastro = () => {
    setTela('cadastro')
  }

  return (
    <FormContainer >

      <h1>LOGIN</h1>

      <Form>

        <StyledLabel>E-mail:
          <Input />
        </StyledLabel>

        <StyledLabel>Senha:
          <Input type={"password"} />
        </StyledLabel>
     
        <SendButton onClick={login}>Entrar</SendButton>

        <RegisterButton onClick={mostrarTelaCadastro}>Cadastre-se</RegisterButton>

      </Form>
    </FormContainer>
  );
}

export default TelaLogin;
