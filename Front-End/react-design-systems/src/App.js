import { Button, ButtonGroup, TextField } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import BasicRating from "./StarValue";
import ImgMediaCard from "./components/Card/Card";
import { Container, ContainerApp } from "./style";
import Header from './components/Header/Header'



export default function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      //console.log(response.data);
      setUsers(response.data);
    } catch (error) {
      console.log("Erro ao buscar usuários");
      console.log(error);
    }
  };

  const result = users.map((user) => {
    return <ImgMediaCard user={user}></ImgMediaCard>
  })


  return (
    <>
      <Header />
      <ContainerApp>
        <Container>
          {result}
        </Container>
      </ContainerApp>

      <div class="mb-3">
        <label for="formFile" class="form-label">Default file input example</label>
        <input class="form-control" type="file" id="formFile"/>
      </div>
      <div class="mb-3">
        <label for="formFileMultiple" class="form-label">Multiple files input example</label>
        <input class="form-control" type="file" id="formFileMultiple" multiple/>
      </div>
      <div class="mb-3">
        <label for="formFileDisabled" class="form-label">Disabled file input example</label>
        <input class="form-control" type="file" id="formFileDisabled" disabled/>
      </div>
      <div class="mb-3">
        <label for="formFileSm" class="form-label">Small file input example</label>
        <input class="form-control form-control-sm" id="formFileSm" type="file"/>
      </div>
      <div>
        <label for="formFileLg" class="form-label">Large file input example</label>
        <input class="form-control form-control-lg" id="formFileLg" type="file"/>
      </div>
    </>
  );
}
