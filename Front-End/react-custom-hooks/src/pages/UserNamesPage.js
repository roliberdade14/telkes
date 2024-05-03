import { Title, NameContainer } from '../style'
import { Card } from '../components/Card/Card'
import useRequestData from "../hooks/useRequestData";
import { useState } from 'react';


const UserNamesPage = () => {

  const [nomeUsuarios, isLoading, isError] = useRequestData('users')

  return (
    <div>
      <Title>Nomes dos usuários</Title>
      <NameContainer>
        {isError ? <h1>Tente Novamente...</h1> :
          isLoading ? <h1>Carregando...</h1> :
            nomeUsuarios.map((usuario) => {
              return (
                <Card
                  key={usuario.id}
                  text={usuario.name}
                  backgroudColor={'nome'}
                  textColor={'nome'}
                />)
            })}
      </NameContainer>
    </div>
  );
}

export default UserNamesPage;



