import { useState } from 'react'
import  Garagem  from './Componentes/Garagem/Garagem'
import { GlobalStyled } from './GlobalStyled'

export default function App() {

  const [nome, setNome] = useState('Telks')
  const [automovel, setAutomovel] = useState({
    
      modelo: 'Toro',
      cor: 'Preta',
      ano: 2024,
      flex: true,
      adicionadoPor: 'Juliana'
    
  })

  const carro1 = {
    modelo: 'Ferrari',
    cor: 'Vermelho',
    ano: 2024,
    flex: false,
    adicionadoPor: 'Luiz'
  }
  const carro2 = {
    modelo: 'Porsche',
    cor: 'Azul',
    ano: 2024,
    flex: true,
    adicionadoPor: 'Roberto'
  }
  const carro3 = {
    modelo: 'Lamborghini',
    cor: 'Preto',
    ano: 2024,
    flex: true,
    adicionadoPor: 'Bruno'
  }

  const alterarNome = () => {

    if (nome === 'Telks') {
      setNome('Lilica')
    } else {
      setNome('Telks')
    }

  }

  const alterarCarro = () =>{
    setAutomovel(carro2)
  }


  return (
    <div className="App">
      <GlobalStyled />
      <Garagem nome={nome} alterarNome={alterarNome} alterarCarro={alterarCarro} automovel={automovel}/>

    </div>
  )
}
