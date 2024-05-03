import React from "react";


function AddProduct() {

  return (
    <>
      <h2>Adicionar novo produto</h2>
      <input placeholder={"Id do Produto"} />
      <br />
      <input placeholder={"Produto"} />
      <br />
      <input placeholder={"Descrição"} />
      <br />
      <input placeholder={"URL Imagem"} />
      <br />
      <input placeholder={"Preço"} />
      <br />
      <button>Enviar</button>
    </>
  );
}

export default AddProduct;