import './App.css';
import Garagem from "./components/Garagem/Garagem"
import Header from './components/Header/Header'
import Footer from "./components/Footer/Footer"

function App() {

  const nome = 'Juliana'

  const apresentarGaragem = (nomeDaGaragem) => {
    alert(`Boas vindas a garagem de ${nomeDaGaragem}`)
  }

  const carro1 = {
    nome: 'Gol',
    cor: 'Preto',
    ano: 2010,
    flex: true
  }
  const carro2 = {
    nome: 'Corsa',
    cor: 'Prata',
    ano: 2012,
    flex: false
  }
  const carro3 = {
    nome: 'Honda Fit',
    cor: 'Preto',
    ano: 2024,
    flex: true
  }
  const carro4 = {
    nome: 'Opala',
    cor: 'Vermelho',
    ano: 1980,
    flex: false
  }

  return (
    <div>
      <Header />

      <Garagem
        nome={nome}
        apresentarGaragem={apresentarGaragem}
        carro1={carro1}
        carro2={carro2}
        carro3={carro3}
        carro4={carro4}
      />

      <Footer />
    </div>
  );
}

export default App;
