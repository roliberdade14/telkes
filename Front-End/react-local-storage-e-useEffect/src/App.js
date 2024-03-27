import { useEffect, useState } from "react";

export default function App() {
  // Estado para armazenar a lista de compras
  const [listaCompras, setListaCompras] = useState([]);

  // Estado para armazenar o valor do item sendo digitado
  const [item, setItem] = useState("");

  // Função para adicionar um item à lista de compras
  const adicionarItem = () => {
    if (item.trim() !== "") {
      // Verifica se o item não está vazio ou contém apenas espaços em branco
      setListaCompras([...listaCompras, item]); // Adiciona o item à lista de compras
      setItem(""); // Limpa o campo de entrada
    }

  };

  const saveLocalStorege = () => {
    const listaString = JSON.stringify(listaCompras)
    localStorage.setItem('lista', listaString)

  }

  const getItensLocalStorege = () => {
    //pegar do local storege - vem como string
    const listaLocalStorage = localStorage.getItem('lista')
    //transformar para array novamente
    const listaArray = JSON.parse(listaLocalStorage)
    console.log(listaArray);
    //atualizo o estado listaCompras com esse array que vem do local storege
    listaArray && setListaCompras(listaArray)

    /* if(listaArray){
      setListaCompras(listaArray)
    } */

  }

  const removeLocalStorege = () => {
    localStorage.removeItem('lista')
    setListaCompras([])

  }
  //useEffect com dependecias vazias
  //é executado apenas 1x na montagem da tela 
  useEffect(() => {
    getItensLocalStorege()
  }, [])

  //Será executado todaa vez que o estado listaComprarss for atualizaado
  //ou seja, toda vez que 1 item for adicionado na lista
  useEffect(() => {
    listaCompras.length > 0 && saveLocalStorege()
  }, [listaCompras])

  return (
    <div>
      <h1>Lista de Compras</h1>
      <input
        type="text"
        value={item}
        onChange={(e) => setItem(e.target.value)}
        placeholder="Digite um item"
      />
      <button onClick={adicionarItem}>Adicionar</button>
      <button onClick={removeLocalStorege}>Limpar local Storage</button>
      {/*  <button onClick={getItensLocalStorege}>Pegar do Local Storege</button> */}
      {/* <button onClick={saveLocalStorege}>Salvar</button> */}

      <ul>
        {listaCompras.map((compra, index) => (
          <li key={index}>{compra}</li>
        ))}
      </ul>
    </div>
  );
}
