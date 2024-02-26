import React from "react"
import { HeaderContainer } from "./styled"
import logo from "../../img/logo.png"

const Header = () =>{
    return(
        <HeaderContainer>
            <img src={logo}/>
            <h1>My Header</h1>
        </HeaderContainer>
    )
}

export default Header