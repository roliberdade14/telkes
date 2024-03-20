import styled, { createGlobalStyle } from "styled-components";
import pokemons from "./pokemon/pokemon.json";
import PokemonCard from "./components/PokemonCard/PokemonCard";
import { getColors } from "./utils/ReturnCardColor";
import Header from "./components/Header/Header.js";
import { useState } from "react";
const GlobalStyle = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: "Inter", sans-serif;
  
  }
`;
const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(440px, 1fr));
  justify-items: center;
`;
function App() {

  const [searchId, setSearchId] = useState('')
  const [searchName, setSearchName] = useState('')
  const [searchType, setSearchType] = useState('')
  const [order, setOrder] = useState('')

  console.log(order)

  /* const lista = [8, 1, 3, 4, 12, 10, 22, 33, 31, 14]
  const num = [2, 8, 7, 4, 9, 5]
  console.log(
    lista.sort((a, b) => {
      return b - a
    }
    )); */

  return (
    <>
      <GlobalStyle />
      <Header searchId={searchId} setSearchId={setSearchId} searchName={searchName} setSearchName={setSearchName} searchType={searchType} setSearchType={setSearchType} order={order} setOrder={setOrder} />

      <CardsContainer>
        {pokemons
          //filtro por id
          .filter((pokemon) => {
            if (pokemon.id.includes(searchId)) {
              //console.log(Boolean(searchId));
              return pokemon
            } else if (!searchId) {
              //console.log(Boolean(searchId));
              return pokemons
            }
          })
          //filtro por nome
          .filter((pokemon) => {
            if (pokemon.name.english.toLowerCase().includes(searchName.toLowerCase())) {
              return pokemon
            } else if (!searchName) {
              return pokemons
            }
          })

          .filter((pokemon) => {
            if (pokemon.type.includes(searchType)) {
              return pokemon
            } else if (!searchType) {
              return pokemons
            }
          })

          .sort((a, b) => {
            switch (order) {
              case 'cre':
                return (a.name.english < b.name.english) && -1
              case 'dec':
                return (a.name.english > b.name.english) && -1
              default:
                return 0
            }
          })

          .map((pokemon) => {
            return <PokemonCard
              cardColor={getColors(pokemon.type[0])}
              key={pokemon.id}
              pokemon={pokemon}
            />
          })}
      </CardsContainer>
    </>
  );
}

export default App;
