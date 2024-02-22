import React from "react"
import Carro from "../Carro/Carro"

const Garagem = ({nome, apresentarGaragem, carro1, carro2, carro3, carro4}) => {

    //console.log(props)

    return (
        <main>
            <h1>Garagem da {nome}</h1>

            <br></br>
            <button onClick={()=>apresentarGaragem(nome)}>Botão boas vindas</button>

            <br></br>

            <Carro carro={carro1}/>
            <Carro carro={carro2}/>
            <Carro carro={carro3}/>
            <Carro carro={carro4}/>
    
            
        </main>
    )
}
/* const Garagem = (props) => {

    //console.log(props)

    return (
        <main>
            <h1>Garagem da {props.nome}</h1>

            <br></br>
            <button onClick={()=>props.apresentarGaragem(props.nome)}>Botão boas vindas</button>

            <br></br>

            <Carro carro={props.carro1}/>
            <Carro carro={props.carro2}/>
            <Carro carro={props.carro3}/>
            <Carro carro={props.carro4}/>
    
            
        </main>
    )
} */

export default Garagem

