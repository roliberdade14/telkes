import React, { useState, useEffect } from "react";
import AddProduct from "./Componentes/AddProduct/AddProduct";
import axios from "axios"
import CardProduct from './Componentes/CardProduct/CardProduct'

//documentação postman
//https://documenter.getpostman.com/view/17932380/2sA3BgAF63

function App() {

  const [allProducts, setAllProducts] = useState([])

  console.log(allProducts)

  useEffect(() => {
    getAllProducts()
  }, [])

  const getAllProducts = () => {

    axios.get('https://6615488fb8b8e32ffc7a765a.mockapi.io/products/product')
      .then((response) => { //caso de sucesso
        console.log(response.data)
        setAllProducts(response.data)
      })
      .catch((error) => { //caso de erro
        console.log(error)
      })
  }

  const render = () => {

    const result = allProducts.map((product, i) => {
      return <CardProduct key={i} product={product} getAllProducts={getAllProducts} />
    })

    return result
  }


  return (
    <>
      <AddProduct getAllProducts={getAllProducts}/>
      <h2>Todos os Produtos</h2>

      {render()}



    </>
  )
}

export default App;
