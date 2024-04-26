import { useParams } from "react-router-dom";
import Header from "../components/Header";
import { MainContainer } from "../style";

function ProfilePage() {

  const params = useParams()

  const usuario = params.name

  return (
    <MainContainer>
      <Header />
      <h1>Página acerca de {usuario}</h1>
      <h1>Página PROFILE PAGE</h1>
    </MainContainer>
  );
}

export default ProfilePage;
