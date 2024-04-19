import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";


const User = styled.div`
  border: black 1px solid;
  margin-top: 8px;
  width: 350px;
  padding: 8px;
`
function CardProduct({ product, getAllProducts }) {

  const [editar, setEditar] = useState(false)

  const [inputName, setInputName] = useState('')
  const [inputPrice, setInputPrice] = useState(0)


  const editProduct = (id) => {

    const body = {
      name: inputName,
      price: inputPrice
    }

    axios.put(`https://6615488fb8b8e32ffc7a765a.mockapi.io/products/product/${id}`, body)
      .then((response) => {
        console.log(response);
        getAllProducts()
        setEditar(!editar)
        setInputName('')
        setInputPrice(0)
      })
      .catch((error) => {
        console.log(error)
      })

  }

  const deleteProduct = (id) => {

    axios.delete(`https://6615488fb8b8e32ffc7a765a.mockapi.io/products/product/${id}`)
      .then((response) => {
        console.log(response);
        getAllProducts()

      })
      .catch((error) => {
        console.log(error)
      })
  }


  return (
    <User>
      {editar ? (
        <div>
          <p>Produto:{product.name} </p>
          <p>Price: {product.price}</p>
          <input placeholder="Alterar Nome"
            value={inputName}
            onChange={(e) => setInputName(e.target.value)}
          />
          <input placeholder="Alterar valor"
            type="number"
            value={inputPrice}
            onChange={(e) => setInputPrice(e.target.value)}
          />
          <button onClick={() => editProduct(product.id)}>Enviar alterações</button>
        </div>
      ) : (
        <>
          <img src={product.image} width="120" />
          <p><strong>Id:{product.id}</strong> </p>
          <p><strong>Produto:{product.name}</strong> </p>
          <p><strong>Desc.:{product.description}</strong> </p>
          <p><strong>Price:{product.price}</strong> </p>
        </>
      )}
      <button onClick={() => setEditar(!editar)}>Editar</button>
      <button onClick={() => deleteProduct(product.id)}>Excluir</button>
    </User>
  );
}

export default CardProduct;