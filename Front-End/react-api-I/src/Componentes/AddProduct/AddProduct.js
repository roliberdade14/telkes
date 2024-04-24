import axios from "axios";
import React, { useState } from "react";

function AddProduct({ getAllProducts }) {

  const [inputId, setInputId] = useState('')
  const [inputName, setInputName] = useState("");
  const [inputDescription, setInputDescription] = useState("");
  const [inputUrl, setInputUrl] = useState("");
  const [inputPrice, setInputPrice] = useState(0);


  const addProductApi = () => {

    const body = {
      name: inputName,
      description: inputDescription,
      price: inputPrice,
      image: inputUrl,
      id: inputId
    }

    //pedido para api cadastrar o meu produto
    axios.post('https://6615488fb8b8e32ffc7a765a.mockapi.io/products/product', body)
      .then((response) => {
        //console.log(response);
        getAllProducts()
        setInputId('')
        setInputName('')
        setInputDescription('')
        setInputUrl('')
        setInputPrice(0)

      })
      .catch((error) => {
        console.log(error);
      })
  }

  return (
    <>
      <h2>Adicionar novo produto</h2>
      <input
        placeholder={"Id do Produto"}
        value={inputId}
        onChange={(e) => setInputId(e.target.value)}
      />
      <br />
      <input
        placeholder={"Produto"}
        value={inputName}
        onChange={(e) => setInputName(e.target.value)}
      />
      <br />
      <input
        placeholder={"Descrição"}
        value={inputDescription}
        onChange={(e) => setInputDescription(e.target.value)}
      />
      <br />
      <input
        placeholder={"URL Imagem"}
        value={inputUrl}
        onChange={(e) => setInputUrl(e.target.value)}
      />
      <br />
      <input
        placeholder={"Preço"}
        value={inputPrice}
        onChange={(e) => setInputPrice(e.target.value)}
      />
      <br />
      <button onClick={addProductApi}>Enviar</button>
    </>
  );
}

export default AddProduct;