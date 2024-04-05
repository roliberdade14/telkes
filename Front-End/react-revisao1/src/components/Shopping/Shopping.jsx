import React from "react"
import { ShoppingContainer } from "./styleShopping"


const Shopping = ({cart}) =>{

    return(
        <ShoppingContainer>
            {cart.map((item)=>{
                console.log(item);
                return <ul>
                    <li>{item.description}</li>
                </ul>
            })}
        </ShoppingContainer>
    )

}

export default Shopping