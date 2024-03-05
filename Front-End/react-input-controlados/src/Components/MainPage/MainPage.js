import React, { useState } from 'react'
import { MainContainer, Form, Input } from './styles'

function MainPage() {

  const [nome, setNome] = useState("")
  const [idade, setIdade] = useState("")
  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")
  const [estadoCivil, setEstadoCivil] = useState()

  const onChangeNome = (event) => {
    setNome(event.target.value)
  }

  const onChangeIdade = (e) => {
    setIdade(e.target.value)
  }

  const onChangeEstadoCivil = (event) => {
    setEstadoCivil(event.target.value)
  }


  const imprimirValoresDosInputs = (event) =>{
    event.preventDefault()
    console.log(nome, idade, estadoCivil, email, senha)
    limparInputs()
  }

  const limparInputs = () =>{
    setNome("")
    setIdade("")
    setEmail("")
    setSenha("")
    setEstadoCivil("")
  }

  return (
    <MainContainer>
      <h2>Formulário de inscrição</h2>

      <Form onSubmit={imprimirValoresDosInputs}>
        <label>
          Nome:
          <Input value={nome} onChange={onChangeNome} />
        </label>

        <label>
          Idade:
          <Input value={idade} onChange={onChangeIdade} />
        </label>

        <label>
          Email:
          <Input required type='email' value={email} onChange={(event)=>{setEmail(event.target.value)}} />
        </label>

        <label>
          Senha:
          <Input type='password' value={senha} onChange={(event)=>{setSenha(event.target.value)}} />
        </label>

        <select value={estadoCivil} onChange={onChangeEstadoCivil}>
          <option></option>
          <option>Solteira(o)</option>
          <option>Casada(o)</option>
          <option>Viúva(o)</option>
          <option>Divorciada(o)</option>
        </select>


        <button>Enviar dados</button>
      </Form>
    </MainContainer>
  )
}

export default MainPage
