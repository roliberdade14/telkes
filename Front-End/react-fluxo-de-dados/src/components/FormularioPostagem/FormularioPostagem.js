import { useState } from "react";
import { FormContainer, Form, Input, StyledLabel } from "./FormularioPostagem.styled";

export const FormularioCadastro = ({titulo, onChangeTitulo, descricao, onChangeDescricao, urlImagem, onChangeUrlImagem, atualizar}) => {

  return (
    <FormContainer>

      <h1>Insira sua postagem abaixo: </h1>

      <Form onSubmit={atualizar}>
        <StyledLabel htmlFor="titulo">
          Titulo:
          <Input id="titulo" value={titulo} onChange={onChangeTitulo}/>
        </StyledLabel>

        <StyledLabel htmlFor="foto">
          Imagem:
          <Input id="foto" value={urlImagem} onChange={onChangeUrlImagem}/>
        </StyledLabel>

        <StyledLabel htmlFor="descricao">
          Descrição:
          <Input id="descricao" value={descricao} onChange={onChangeDescricao}/>
        </StyledLabel>
        <button>Atualizar</button>
      </Form>
    </FormContainer>
  );
};

export default FormularioCadastro;
