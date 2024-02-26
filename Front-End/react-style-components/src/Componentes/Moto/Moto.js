

export function Moto(props) {
    return (
        <div>
            <h2>Minha{props.moto}</h2>
            <ul>
                <li>Cor: {props.cor}</li>
                <li>Ano: {props.ano}</li>
                <li>Flex: {props.flex}</li>
                <li>Adicionado: {props.adicionadoPor}</li>
            </ul>
        </div>
    );
}


