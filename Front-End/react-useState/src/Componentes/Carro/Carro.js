import { CarroContainer } from './styles'

export default function Carro( {alterarCarro, automovel} ) {
  

  return (
    <CarroContainer>
      <h2>{automovel.modelo}</h2>
      <ul>
        <li>Cor:{automovel.cor} </li>
        <li>Ano: {automovel.ano}</li>
        <li>Flex: {automovel.flex ? 'Sim': 'Não'}</li>
        <li>Adicionado: {automovel.adicionadoPor}</li>
      </ul>
      <button onClick={()=>alterarCarro()}>Alterar Carro</button>
    </CarroContainer>
  )
}
