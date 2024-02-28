import { useState } from 'react'
import Carro from '../Carro/Carro'
import { Botao, Estacionamento, GaragemContainer } from './styles'

export default function Garagem({ nome, alterarNome, alterarCarro, automovel }) {

  
  return (
    <GaragemContainer>
      <h1>Garagem da {nome}</h1>
      <Botao onClick={()=>alterarNome()}>Muda nome</Botao>
      <Estacionamento>
       <Carro alterarCarro={alterarCarro} automovel={automovel}></Carro>
      </Estacionamento>
    </GaragemContainer>
  )
}
