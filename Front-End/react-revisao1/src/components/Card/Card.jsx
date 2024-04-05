import React from "react"
import { ButtonCard, CardConteiner, ImgProduct } from "./styleCard"

const Card = ({product, addToCart}) => {
    return (
        <CardConteiner>
            <ImgProduct src={product.image}></ImgProduct>
            <p>{product.description}</p>
            <p>Valor: R$ {product.price}</p>
            <ButtonCard onClick={()=>addToCart(product)} >Comprar</ButtonCard>
        </CardConteiner>
    )


}

export default Card