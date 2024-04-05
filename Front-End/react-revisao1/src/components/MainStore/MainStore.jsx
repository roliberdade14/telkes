import React from "react"
import { MainStoreContainer } from "./styleMain"
import Card from "../Card/Card"

const MainStore = ({productRender}) =>{
    return(
       <MainStoreContainer>
        {productRender()}
       </MainStoreContainer>
    )

}

export default MainStore