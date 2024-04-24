import React, { useState, useEffect } from "react";
import AddProduct from "./componentes/AddProduct/AddProduct";
import axios from "axios"
import CardProduct from './componentes/CardProduct/CardProduct'
import { BASE_URL } from './constants/BASE_URL'
import useAxios from "./useAxios/useAxios";
import axiosInstance from './useAxios/axiosInstance'

//documentação postman
//https://documenter.getpostman.com/view/17932380/2sA3BgAF63

function App() {

  const [allProducts, setAllProducts] = useState([])

  const { data, fetchData } = useAxios({
    axiosInstance: axiosInstance,
    method: 'get'
  })

  useEffect(() => {
    getAllProducts()
    //fetchData()
    //fetchData é uma função que vem do retorno de useAxios
  }, [])

  const getAllProducts = async () => {

    try { //tentativa de sucesso
      const response = await axios.get(BASE_URL)
      setAllProducts(response.data)
    }
    catch (error) {
      console.log(error);
    }
    finally { //sempre vai ser executado
      setTimeout(() => { document.getElementById('bemvindo').style.display = 'none' }, '5000')
    }
  }

  const render = () => {
    //data é um estado que vem do retorno de useAxios
    //const result = data.map((product, i) => {
    const result = allProducts.map((product, i) => {
      return <CardProduct key={i} product={product} getAllProducts={getAllProducts} />
    })

    return result
  }


  return (
    <>
      <h1 id='bemvindo'>SEJA BEM-VINDO!!!</h1>
      <AddProduct getAllProducts={getAllProducts} />
      <h2>Todos os Produtos</h2>
      {render()}



    </>
  )
}

export default App;
