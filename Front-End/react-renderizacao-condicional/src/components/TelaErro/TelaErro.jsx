import React from "react"
import imgErro from '../../img/tristeza.jpg'
import { ErroContainer } from "./styled"


const TelaErro = () =>{
    return(
        <ErroContainer>
            <img src={imgErro}/>
            <h1>Página Não Encontrada</h1>
        </ErroContainer>
    )
}

export default TelaErro