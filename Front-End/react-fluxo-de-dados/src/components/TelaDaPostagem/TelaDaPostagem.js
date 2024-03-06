import React from "react";
import { ContainerPostagem, Title, Image, Description } from "./TelaDaPostagem.styled";

const TelaDaPostagem = ({dadosForm}) => {


  return (

    <ContainerPostagem>

      <Title>{dadosForm.titulo}</Title>
      <Image src={dadosForm.urlImagem} />
      <Description>{dadosForm.descricao}</Description>
      
    </ContainerPostagem>

  );
};

export default TelaDaPostagem;
