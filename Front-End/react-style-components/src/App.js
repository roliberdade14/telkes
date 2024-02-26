import Footer from "./Componentes/Footer/Footer";
import { Garagem } from "./Componentes/Garagem/Garagem";
import Header from "./Componentes/Header/Header";
import { GlobalStyled } from "./GlobalStyled";


export default function App() {
  const nome = "Juliana";

  function apresentaGaragem() {
    alert(`Boas vindas à garagem de ${nome}`);
  }

  return (
    <div className="App">
      <GlobalStyled/>
      <Header/>
      <Garagem nome={nome} mensagemAprentacao={apresentaGaragem} />
      <Footer/>
    </div>
  );
}