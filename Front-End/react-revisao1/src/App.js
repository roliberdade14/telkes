import './App.css';
import { GlobalStyle } from './GlobalStyle';
import Filters from './components/Filters/Filters';
import MainStore from './components/MainStore/MainStore';
import Shopping from './components/Shopping/Shopping';
import styled from "styled-components";
import { productList } from './constants/productList';
import Card from './components/Card/Card';
import { useEffect, useState } from 'react';

export const StoreContainer = styled.div`
  display: flex;
`

function App() {

  const [inputName, setInputName] = useState('')
  const [cart, setCart] = useState([])

  //executa toda vez que tiver uma alteração no estado que está na dependência
  useEffect(()=>{
    cart.length > 0 && localStorage.setItem('cartList', JSON.stringify(cart) )
  },[cart])

  //executa 1x
  useEffect(()=>{
    getItensLocalStorege()
  },[])


  const getItensLocalStorege = () =>{
    const listString = localStorage.getItem('cartList')
    const listArray = JSON.parse(listString)
    listArray && setCart(listArray)
  }

  const productRender = () => {

    const result = productList
    .filter((product)=>{
      if(product.description.toLowerCase().includes(inputName.toLowerCase())){
        return product
      }else if(!inputName){
        return productList
      }
    })   

    .map((product, i) => {
      return <Card key={i} product={product} addToCart={addToCart} />
    })

    return result
  }

  const addToCart = (item) =>{
    setCart([...cart, item])
  }

  //console.log(cart);

  return (
    <StoreContainer>
      <GlobalStyle />
      <Filters inputName={inputName} setInputName={setInputName}/>
      <MainStore productRender={productRender}/>
      <Shopping cart={cart}/>
    </StoreContainer>
  );
}

export default App;
