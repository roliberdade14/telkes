import axios from "axios";
import React, { useState } from "react";
import { BASE_URL } from "../../constants/BASE_URL";

function AddProduct({ getAllProducts }) {

  const [inputId, setInputId] = useState('')
  const [inputName, setInputName] = useState("");
  const [inputDescription, setInputDescription] = useState("");
  const [inputUrl, setInputUrl] = useState("");
  const [inputPrice, setInputPrice] = useState(0);


  const addProductApi = async () => {

    try {

      const body = {
        name: inputName,
        description: inputDescription,
        price: inputPrice,
        image: inputUrl,
        id: inputId
      }

      await axios.post(BASE_URL, body)
      getAllProducts()
      setInputId('')
      setInputName('')
      setInputDescription('')
      setInputUrl('')
      setInputPrice(0)
      
    } catch (err) {
      console.log(err);
    }
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