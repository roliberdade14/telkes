import React from "react"
import { FiltersContainer } from "./styleFilters"

const Filters = ({ inputName, setInputName }) => {
    return (
        <FiltersContainer>
            <input
                placeholder="Nome Produto"
                type="text" 
                value={inputName}
                onChange={(e)=>{setInputName(e.target.value)}}
            />
            <input placeholder="Valor" type="number" />
        </FiltersContainer>
    )

}

export default Filters