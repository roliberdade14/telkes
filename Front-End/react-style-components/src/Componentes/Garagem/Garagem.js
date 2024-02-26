import { Carro } from "../Carro/Carro";
import { Moto } from "../Moto/Moto";
import { Botao, Container, Estacionamento, GaragemContainer } from "./styled";

export function Garagem(props) {
  return (
    <GaragemContainer>
      <h1>Garagem da {props.nome}</h1>

      <Botao onClick={props.mensagemAprentacao}>Mensagem</Botao>

      <Container>
        <Estacionamento>
          <Carro adicionadoPor={props.nome} cor={"Vermelho"} ano={2022} flex={"true"} />
          <Carro adicionadoPor={props.nome} cor={"Verde"} ano={2020} flex={"false"} />
          <Carro adicionadoPor={props.nome} cor={"Amarelo"} ano={2009} flex={"false"} />
          <Carro adicionadoPor={props.nome} cor={"Rosa"} ano={2022} flex={"true"} />
        </Estacionamento>

        <Estacionamento>
          <Moto adicionadoPor={props.nome} moto={"Ténéré"} cor={"Vermelho"} ano={2024} flex={"true"} />
          <Moto adicionadoPor={props.nome} moto={"CG"} cor={"Preto"} ano={2020} flex={"false"} />
        </Estacionamento>
      </Container>

    </GaragemContainer>
  );
}
