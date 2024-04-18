import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";

const User = styled.div`
  border: black 1px solid;
  margin-top: 8px;
  width: 350px;
  padding: 8px;
`
function CardProduct() {

  const [editar, setEditar] = useState(false)
  
  return (
    <User>
     {editar ? (
        <div>
          <p>Produto: </p>
          <p>Price: </p>
          <input placeholder="Alterar Nome" />
          <input placeholder="Alterar valor" type="number"  />
          <button>Enviar alterações</button>
        </div>
      ) : (
        <>
          <img width="100"/>
          <p><strong>Id:</strong> </p>
          <p><strong>Produto:</strong> </p>
          <p><strong>Desc.:</strong> </p>
          <p><strong>Price:</strong> </p>
        </>
      )}
      <button>Editar</button>
      <button>Excluir</button> 
    </User>
  );
}

export default CardProduct;