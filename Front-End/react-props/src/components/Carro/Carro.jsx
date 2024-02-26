import React from "react";

const Carro = ({carro}) => {

    console.log(carro.ano);

    return (
        <>
            <h2>{carro.nome}</h2>
            <ol>
                <li>Cor: {carro.cor}</li>
                <li>Ano: {carro.ano}</li>
                <li>Flex: {carro.flex?'Sim':'Não'}</li>
            </ol>
        </>
    )

}

export default Carro