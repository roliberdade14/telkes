import React from "react";
import { Container } from "./styles";

const Header = ({searchId, setSearchId, setSearchName, searchName, searchType, setSearchType, order, setOrder}) => {

  const pokemontypesArray = [
    "Normal",
    "Fire",
    "Water",
    "Grass",
    "Flying",
    "Fighting",
    "Poison",
    "Electric",
    "Ground",
    "Rock",
    "Psychic",
    "Ice",
    "Bug",
    "Ghost",
    "Steel",
    "Dragon",
    "Dark",
    "Fairy",
  ];

  return (
    <Container>
      <input type="number" placeholder="Buscar por id" value={searchId} onChange={(event)=>{setSearchId(event.target.value)}}/>

      <input type="text" placeholder="Buscar por nome" value={searchName} onChange={(event)=>{setSearchName(event.target.value)}}/>

      <select value={order} onChange={(e)=>{setOrder(e.target.value)}}>
        <option value="">Ordenar</option>
        <option value="cre">Crescente</option>
        <option value="dec">Decrescente</option>
      </select>

      <select name="tipo" id="tipo" value={searchType} onChange={(e)=>{setSearchType(e.target.value)}}>
        <option value="">Selecione um tipo</option>
        {pokemontypesArray.map((type) => {
          return (
            <option key={type} value={type}>
              {type}
            </option>
          );
        })}
      </select>
    </Container>
  );
};

export default Header;
